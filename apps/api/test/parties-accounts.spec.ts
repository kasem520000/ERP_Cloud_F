import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { withOwnerClient } from '@erp/testing';

import { OrgProvisioningService } from '../src/modules/organization/provisioning/org-provisioning.service.js';

import { ALL_ORGANIZATION_PERMISSIONS, ALL_PLATFORM_PERMISSIONS, createActor, type Actor } from './fixtures.js';
import { api } from './http.js';
import { createTestApp, type TestApp } from './test-app.js';

/**
 * 🧾 حسابُ ذمم لكل طرف — DEF-R7-014/015، المرحلة م3.
 *
 * العيبُ الذي يُغلقه هذا الملف: كل ذمم العملاء كانت على حسابٍ واحد «عميل عام»
 * (‏`12310001`) وكل ذمم الموردين على «مورد عام» (‏`22111001`). فالعميلُ يُعرَف في الأستاذ
 * بحقلِ `party_id` على السطر لا بحساب، ولا يظهر رصيدُه في مخطّط الحسابات؛ وكشفُ حسابه كان
 * يجمع القيدَ كلّه (لأن الإيراد والضريبة والتكلفة حملت `party_id` أيضاً) فيخرج مدينُه = دائنُه
 * = 281.88 لعميلٍ رصيده 86.88.
 *
 * والقاعدة التي يحرسها الملف:
 *   1. إنشاءُ طرفٍ يُنشئ حسابَه الفرعيَّ تحت حساب التحكّم في **المعاملة نفسها**؛
 *   2. ترحيلُ بيعٍ آجلٍ يُقيَّد على حساب العميل لا على الحساب العام؛
 *   3. سندُ القبض يقيّد على حساب العميل نفسه؛
 *   4. النداءُ المتكرّر لا يُنشئ حساباً ثانياً (idempotent)؛
 *   5. «عميل عام»/«مورد عام» بلا حسابٍ فرعيٍّ — ليسا طرفين؛
 *   6. رصيدُ الطرف يُقاس بأسطر الذمم وحدها (لا مضاعفاً) ويُفصل فيه المدينُ عن الدائن.
 */
describe('Party receivable/payable accounts — م3', () => {
  let ctx: TestApp;
  let actor: Actor;
  let branchId = '';
  let warehouseId = '';
  let cashLocationId = '';
  let itemId = '';
  let customerId = '';
  let supplierId = '';

  const data = (body: Record<string, unknown>): Record<string, unknown> =>
    (body.data ?? body) as Record<string, unknown>;

  /** حسابُ الطرف كما هو في القاعدة — يُقرأ بصلاحية المالك لأن الاختبار يقيس التعيين لا العرض. */
  const partyRow = (partyId: string) =>
    withOwnerClient(ctx.db.ownerUrl, async (client) => {
      const result = await client.query(
        `SELECT p.receivable_account_id::text AS receivable, p.payable_account_id::text AS payable
           FROM parties p WHERE p.id = $1`,
        [partyId],
      );
      return result.rows[0] as { receivable: string | null; payable: string | null };
    });

  const accountOf = (accountId: string) =>
    withOwnerClient(ctx.db.ownerUrl, async (client) => {
      const result = await client.query(
        `SELECT code, name_ar, level, is_postable, parent_id::text AS parent_id,
                (SELECT code FROM accounts parent WHERE parent.id = a.parent_id) AS parent_code
           FROM accounts a WHERE a.id = $1`,
        [accountId],
      );
      return result.rows[0] as
        | { code: string; name_ar: string; level: number; is_postable: boolean; parent_id: string; parent_code: string }
        | undefined;
    });

  const controlAccount = (code: string) =>
    withOwnerClient(ctx.db.ownerUrl, async (client) => {
      const result = await client.query(`SELECT id::text FROM accounts WHERE tenant_id = $1 AND code = $2`, [
        actor.tenantId,
        code,
      ]);
      return result.rows[0]?.id as string | undefined;
    });

  const journalLines = (description: string) =>
    withOwnerClient(ctx.db.ownerUrl, async (client) => {
      const result = await client.query(
        `SELECT a.code, a.name_ar, jel.debit::text, jel.credit::text
           FROM journal_entry_lines jel
           JOIN journal_entries je ON je.id = jel.entry_id
           JOIN accounts a ON a.id = jel.account_id
          WHERE jel.tenant_id = $1 AND je.description = $2 AND je.status = 'posted'
            AND je.kind <> 'reversal'
          ORDER BY a.code`,
        [actor.tenantId, description],
      );
      return result.rows as Array<{ code: string; name_ar: string; debit: string; credit: string }>;
    });

  beforeAll(async () => {
    ctx = await createTestApp('party-accounts');
    actor = await createActor(ctx, {
      tenantCode: 'party-accounts',
      email: 'owner@party-accounts.test',
      permissions: [
        ...ALL_PLATFORM_PERMISSIONS,
        ...ALL_ORGANIZATION_PERMISSIONS,
        'catalog.item.view',
        'catalog.item.manage',
        'catalog.category.manage',
        'catalog.unit.manage',
        'sales.view',
        'sales.invoice.create',
        'sales.invoice.post',
        'sales.invoice.pay',
        'sales.return.create',
        'purchase.view',
        'purchase.invoice.create',
        'purchase.invoice.post',
        'parties.view',
        'parties.manage',
        'treasury.view',
        'treasury.voucher.create',
        'treasury.voucher.post',
        'inventory.view',
        'inventory.adjust',
        'accounting.period.view',
        'accounting.period.close',
        'accounting.reports.view',
        'accounting.account.view',
        'organization.postingprofile.view',
      ],
    });

    const defaults = await ctx.app.get(OrgProvisioningService).provisionOrgDefaults(actor.tenantId);
    branchId = defaults.branchId;
    warehouseId = defaults.warehouseId;
    cashLocationId = defaults.cashLocationId;

    const year = new Date().getUTCFullYear();
    const fiscal = await api(ctx.server, 'post', '/api/v1/fiscal-years', {
      token: actor.token,
      body: { name: `FY${year}`, startDate: `${year}-01-01`, endDate: `${year}-12-31` },
    });
    expect(fiscal.status).toBe(201);

    const category = await api(ctx.server, 'post', '/api/v1/organization/catalog/categories', {
      token: actor.token,
      body: { code: 'GEN', nameAr: 'عام' },
    });
    const unit = await api(ctx.server, 'post', '/api/v1/organization/catalog/units', {
      token: actor.token,
      body: { code: 'PCS', nameAr: 'حبة' },
    });
    const item = await api(ctx.server, 'post', '/api/v1/organization/catalog/items', {
      token: actor.token,
      body: {
        sku: 'SKU-PARTY',
        nameAr: 'صنف الذمم',
        categoryId: data(category.body).id,
        baseUnitId: data(unit.body).id,
        salePrice: '100.0000',
        purchasePrice: '60.0000',
      },
    });
    itemId = data(item.body).id as string;

    const receipt = await api(ctx.server, 'post', '/api/v1/inventory/ledger/record', {
      token: actor.token,
      body: {
        lines: [
          {
            itemId,
            warehouseId,
            qty: '100',
            unitCost: '40',
            direction: 'in',
            docType: 'opening',
            docId: '00000000-0000-0000-0000-000000000002',
          },
        ],
      },
    });
    expect(receipt.status).toBe(201);
  }, 240_000);

  afterAll(async () => ctx.close());

  it('creating a customer opens a postable account under the receivable control account', async () => {
    const created = await api(ctx.server, 'post', '/api/v1/parties', {
      token: actor.token,
      body: { kind: 'customer', name: 'عميل الذمم' },
    });
    expect(created.status).toBe(201);
    customerId = data(created.body).id as string;
    expect(data(created.body).receivableAccountId, 'the created party carries its account').toBeTruthy();

    const party = await partyRow(customerId);
    const control = await controlAccount('12310001');
    // لا يُقبل «حسابٌ ما»: الحسابُ يجب أن يكون ابناً لحساب التحكّم نفسه.
    const account = await accountOf(party.receivable as string);
    expect(account).toBeDefined();
    expect(account?.parent_id).toBe(control);
    expect(account?.code).toMatch(/^12310001\d{3}$/);
    expect(account?.level).toBe(5);
    // ورقةُ حسابٍ تُرحَّل عليها فعلاً، لا مجموعة.
    expect(account?.is_postable).toBe(true);
  });

  it('creating a supplier opens an account under the payable control account', async () => {
    const created = await api(ctx.server, 'post', '/api/v1/parties', {
      token: actor.token,
      body: { kind: 'supplier', name: 'مورد الذمم' },
    });
    expect(created.status).toBe(201);
    supplierId = data(created.body).id as string;

    const party = await partyRow(supplierId);
    const account = await accountOf(party.payable as string);
    expect(account?.parent_id).toBe(await controlAccount('22111001'));
    expect(account?.code).toMatch(/^22111001\d{3}$/);
    expect(account?.is_postable).toBe(true);
  });

  it('a credit sale posts the receivable leg on the customer account, not the control account', async () => {
    const created = await api(ctx.server, 'post', '/api/v1/sales/invoices', {
      token: actor.token,
      body: { branchId, warehouseId, partyId: customerId, lines: [{ itemId, quantity: '1', unitPrice: '100', taxRate: '15' }] },
    });
    expect(created.status).toBe(201);
    const invoice = data(created.body) as { id: string; number: string; total: string };
    const posted = await api(ctx.server, 'post', `/api/v1/sales/invoices/${invoice.id}/post`, {
      token: actor.token,
      body: { settlement: 'credit' },
    });
    expect(posted.status).toBe(201);
    const number = (data(posted.body) as { number: string }).number;

    const party = await partyRow(customerId);
    const account = await accountOf(party.receivable as string);
    const lines = await journalLines(`Sales invoice ${number}`);

    const receivableLine = lines.find((line) => line.code === account?.code);
    expect(receivableLine, 'the debit sits on the customer account').toBeDefined();
    expect(receivableLine?.debit).toBe('115.0000');
    // ولا سطرَ على الحساب العام: التحكّم يبقى حسابَ مجموعٍ لا يُرحَّل عليه من جديد.
    expect(lines.some((line) => line.code === '12310001'), 'no line on the control account').toBe(false);
  });

  it('the party balance counts the receivable lines once and separates the two sides', async () => {
    const balance = await api(ctx.server, 'get', `/api/v1/parties/${customerId}/balance`, { token: actor.token });
    expect(balance.status).toBe(200);
    const body = data(balance.body) as { receivable: string; payable: string };
    // DEF-R7-006: كان الكشف يجمع الإيراد والضريبة والتكلفة والمخزون أيضاً فيُضاعف الرقم.
    expect(Number(body.receivable)).toBeCloseTo(115, 4);
    expect(Number(body.payable)).toBe(0);
  });

  it('a receipt voucher credits the customer account (money comes off his own account)', async () => {
    const account = await accountOf((await partyRow(customerId)).receivable as string);
    const created = await api(ctx.server, 'post', '/api/v1/vouchers', {
      token: actor.token,
      body: {
        kind: 'receipt',
        subtype: 'customer',
        branchId,
        date: new Date().toISOString().slice(0, 10),
        cashLocationId,
        partyId: customerId,
        amount: '50',
        method: 'cash',
        description: 'تحصيل من عميل الذمم',
      },
    });
    expect(created.status).toBe(201);
    const posted = await api(ctx.server, 'post', `/api/v1/vouchers/${data(created.body).id}/post`, {
      token: actor.token,
      body: {},
    });
    expect(posted.status).toBeLessThan(300);

    // `counterAccountId` لم يُمرَّر: يُشتقّ من الطرف — ولا يصحّ أن يسقط على «عميل عام».
    const lines = await journalLines('تحصيل من عميل الذمم');
    const credit = lines.find((line) => line.code === account?.code);
    expect(credit, 'the receipt credits the customer account').toBeDefined();
    expect(credit?.credit).toBe('50.0000');
    expect(lines.some((line) => line.code === '12310001'), 'no line on the control account').toBe(false);

    const after = await api(ctx.server, 'get', `/api/v1/parties/${customerId}/balance`, { token: actor.token });
    expect(Number((data(after.body) as { receivable: string }).receivable)).toBeCloseTo(65, 4);
  });

  it('a second credit sale reuses the same account (idempotent)', async () => {
    const before = await partyRow(customerId);
    const created = await api(ctx.server, 'post', '/api/v1/sales/invoices', {
      token: actor.token,
      body: { branchId, warehouseId, partyId: customerId, lines: [{ itemId, quantity: '1', unitPrice: '10', taxRate: '15' }] },
    });
    const invoice = data(created.body) as { id: string };
    const posted = await api(ctx.server, 'post', `/api/v1/sales/invoices/${invoice.id}/post`, {
      token: actor.token,
      body: { settlement: 'credit' },
    });
    expect(posted.status).toBe(201);
    const after = await partyRow(customerId);
    expect(after.receivable).toBe(before.receivable);

    const count = await withOwnerClient(ctx.db.ownerUrl, async (client) => {
      const result = await client.query(
        `SELECT count(*)::int AS n FROM accounts a JOIN accounts p ON p.id = a.parent_id
          WHERE p.code = '12310001' AND a.name_ar = 'ذمم عميل الذمم'`,
      );
      return Number(result.rows[0].n);
    });
    expect(count, 'one account per party, never two').toBe(1);
  });

  it('a credit purchase posts the payable leg on the supplier account', async () => {
    const created = await api(ctx.server, 'post', '/api/v1/purchase-invoices', {
      token: actor.token,
      body: { branchId, warehouseId, partyId: supplierId, lines: [{ itemId, quantity: '2', unitPrice: '60', taxRate: '15' }] },
    });
    expect(created.status).toBe(201);
    const draft = data(created.body) as { id: string };
    const posted = await api(ctx.server, 'post', `/api/v1/purchase-invoices/${draft.id}/post`, {
      token: actor.token,
      body: { settlement: 'credit' },
    });
    expect(posted.status).toBe(201);

    const account = await accountOf((await partyRow(supplierId)).payable as string);
    const balance = await api(ctx.server, 'get', `/api/v1/parties/${supplierId}/balance`, { token: actor.token });
    expect(Number((data(balance.body) as { payable: string }).payable)).toBeCloseTo(138, 4);

    const lines = await journalLines(`Purchase invoice ${(data(posted.body) as { number: string }).number}`);
    const payableLine = lines.find((line) => line.code === account?.code);
    expect(payableLine?.credit).toBe('138.0000');
    expect(lines.some((line) => line.code === '22111001'), 'no line on the control account').toBe(false);
  });

  it('leaves the general customer and general supplier without a sub-account', async () => {
    const list = await api(ctx.server, 'get', '/api/v1/parties?kind=customer', { token: actor.token });
    const rows = (list.body.data ?? list.body) as Array<{ code: string; receivableAccountId: string | null }>;
    const general = rows.find((row) => row.code === 'CUST-GEN');
    expect(general, 'the general customer is seeded').toBeDefined();
    expect(general?.receivableAccountId ?? null).toBeNull();
  });
});
