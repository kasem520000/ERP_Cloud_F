/**
 * Opt-in acceptance regressions for docs/accounting-audit/DEFECTS.md.
 * These assert correct accounting outcomes, NOT the defective observed values.
 * Run with vitest.accounting-audit.config.ts. Expected RED until approved fixes.
 * The UI evidence lives separately; these technical fixtures are NOT UI scenarios.
 */
import { permissionRegistry } from '@erp/contracts';
import { seedDemoData } from '@erp/database';
import { Client } from 'pg';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { createActor, type Actor } from './fixtures.js';
import { api } from './http.js';
import { createTestApp, type TestApp } from './test-app.js';

type Row = Record<string, unknown>;
const data = (body: Row): Row => (body.data ?? body) as Row;

describe('Accounting audit acceptance — isolated E2E-CREDIT-001', () => {
  let ctx: TestApp | undefined;
  let actor: Actor;
  let sql: Client | undefined;
  let customerId: string;
  let supplierId: string;
  let safeId: string;
  let itemId: string;
  let warehouseId: string;

  const call = async (method: 'get' | 'post', path: string, body?: Row) => {
    if (!ctx) throw new Error('Test app not initialized');
    return api(ctx.server, method, `/api/v1${path}`, { token: actor.token, body });
  };
  const create = async (path: string, body: Row): Promise<Row> => {
    const response = await call('post', path, body);
    expect(response.status, JSON.stringify(response.body)).toBe(201);
    return data(response.body);
  };
  const read = async (path: string) => {
    const response = await call('get', path);
    expect(response.status, JSON.stringify(response.body)).toBe(200);
    return response.body;
  };

  beforeAll(async () => {
    ctx = await createTestApp('accounting_audit_acceptance');
    // Never run these fixture writes against the browser audit DB or a customer DB.
    const db = new URL(ctx.db.ownerUrl);
    if (!ctx.db.name.startsWith('erp_test_') || !['localhost', '127.0.0.1'].includes(db.hostname)) {
      throw new Error('Refusing a non-local, non-test database');
    }
    actor = await createActor(ctx, {
      tenantCode: 'audit-regression', email: 'audit@regression.test', isOwner: true,
      permissions: [...new Set(permissionRegistry.map((entry) => entry.code))],
    });
    const defaults = await seedDemoData(ctx.db.ownerUrl, {
      tenantCode: actor.tenantCode, fiscalYear: new Date().getUTCFullYear(), withOpeningEntry: true,
      company: { nameAr: 'AUDIT-TEST-2026', taxNo: 'AUDIT-NOT-A-TAX-ID', crNo: 'AUDIT-NOT-A-CR' },
    });
    safeId = defaults.safeId;
    warehouseId = defaults.warehouseId;
    const category = await create('/organization/catalog/categories', { code: 'AUDIT-CAT', nameAr: 'مجموعة التدقيق' });
    const unit = await create('/organization/catalog/units', { code: 'AUDIT-PCS', nameAr: 'حبة التدقيق' });
    const item = await create('/organization/catalog/items', {
      sku: 'AUDIT-ITEM', nameAr: 'صنف التدقيق', kind: 'stock', categoryId: category.id,
      baseUnitId: unit.id, purchasePrice: '100', salePrice: '150',
    });
    itemId = String(item.id);
    supplierId = String((await create('/parties', { kind: 'supplier', name: 'AUDIT مورد' })).id);
    customerId = String((await create('/parties', { kind: 'customer', name: 'AUDIT عميل', creditLimit: '2000' })).id);
    const header = { branchId: defaults.branchId, warehouseId, autoPost: true };
    await create('/purchase-invoices', {
      ...header, partyId: supplierId, supplierReferenceNo: 'AUDIT-REGRESSION-PUR',
      lines: [{ itemId, quantity: '12', unitPrice: '100', taxRate: '15' }],
    });
    await create('/sales/invoices', {
      ...header, partyId: customerId, kind: 'sale',
      lines: [{ itemId, quantity: '3', unitPrice: '150', taxRate: '15' }],
    });
    sql = new Client({ connectionString: ctx.db.ownerUrl });
    await sql.connect();
  }, 240_000);

  afterAll(async () => {
    await sql?.end();
    await ctx?.close();
  });

  it('control: inventory, line COGS and GL agree before evaluating reports', async () => {
    const levels = await read(`/inventory/levels?warehouse_id=${warehouseId}&item_id=${itemId}`);
    const rows = (levels.data ?? levels) as Array<Row>;
    expect(Number(rows[0]?.quantity)).toBe(9);
    expect(Number(rows[0]?.value)).toBe(900);
    const result = await sql!.query<{ code: string; net: string }>(
      `SELECT a.code, sum(l.debit-l.credit)::text AS net
       FROM journal_entry_lines l JOIN journal_entries e ON e.id=l.entry_id
       JOIN accounts a ON a.id=l.account_id
       WHERE l.tenant_id=$1 AND e.status='posted'
       GROUP BY a.code`, [actor.tenantId],
    );
    const net = new Map(result.rows.map((row) => [row.code, Number(row.net)]));
    expect(net.get('1270001')).toBe(900);
    expect(net.get('3200004')).toBe(300);
    /**
     * 🧾 م3 — الذمم تُقاس على **شجرة** حساب التحكّم: بعد أن صار لكل طرفٍ حسابٌ فرعيٌّ تحت
     * `12310001`/`22111001` تُكتب الحركة على الأبناء، والحسابُ الأب يبقى صفراً في منشأةٍ
     * جديدة. فالتوقّع 517.5/‏−1380 لم يتغيّر في **معناه** — تغيّر موضعه في الشجرة. ولو
     * تُرك الشرط على الأب لصار الحارس يقيس فراغاً ويُعلن نجاحاً كاذباً بعد م3.
     */
    const subtree = async (code: string): Promise<number> => {
      const rows = await sql!.query<{ net: string }>(
        `SELECT coalesce(sum(l.debit-l.credit),0)::text AS net
           FROM journal_entry_lines l JOIN journal_entries e ON e.id=l.entry_id
           JOIN accounts a ON a.id=l.account_id
          WHERE l.tenant_id=$1 AND e.status='posted'
            AND a.path <@ (SELECT path FROM accounts WHERE tenant_id=$1 AND code=$2 AND deleted_at IS NULL LIMIT 1)`,
        [actor.tenantId, code],
      );
      return Number(rows.rows[0]?.net ?? 0);
    };
    expect(await subtree('12310001')).toBe(517.5);
    expect(await subtree('22111001')).toBe(-1380);
  });

  it('ACC-002: customer statement must retain the unpaid receivable', async () => {
    const statement = data(await read(`/parties/${customerId}/statement`));
    expect(Number(statement.receivable)).toBe(517.5);
  });

  it('ACC-002: supplier statement must retain the unpaid payable', async () => {
    const statement = data(await read(`/parties/${supplierId}/statement`));
    expect(Number(statement.payable)).toBe(1380);
  });

  it('ACC-003: default income profit must not add closing stock twice', async () => {
    const report = await read('/statements/income-statement');
    expect(Number((report.totals as Row).profit)).toBe(150);
  });

  it('ACC-004: invoice profitability must use the posted cost of 300', async () => {
    const report = await read('/reports/invoice-profit');
    const row = (report.rows as Row[])[0];
    expect(Number(row?.cost_total)).toBe(300);
    expect(Number(row?.profit)).toBe(150);
  });

  it('control: item profitability independently reports 150', async () => {
    const report = await read('/reports/item-profit');
    expect(Number((report.rows as Row[])[0]?.profit)).toBe(150);
  });

  it('ACC-001: seeded safe balance must match its ledger opening', async () => {
    const result = await sql!.query<{ balance: string }>(
      `SELECT coalesce(sum(l.debit-l.credit),0)::text AS balance
       FROM cash_locations c LEFT JOIN journal_entry_lines l ON l.account_id=c.account_id
       LEFT JOIN journal_entries e ON e.id=l.entry_id
       WHERE c.tenant_id=$1 AND c.id=$2 AND e.status='posted'`, [actor.tenantId, safeId],
    );
    expect(Number(result.rows[0]?.balance)).toBe(50000);
    const cacheResult = data(await read(`/cash-locations/${safeId}/balance`));
    expect(Number(cacheResult.balance)).toBe(Number(result.rows[0]?.balance));
  });

  it('FUN-001: duplicate category is a domain conflict, not internal error', async () => {
    const response = await call('post', '/organization/catalog/categories', { code: 'AUDIT-CAT', nameAr: 'تكرار' });
    expect([409, 422]).toContain(response.status);
  });
});
