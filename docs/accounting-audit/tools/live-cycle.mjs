#!/usr/bin/env node
/**
 * 🧾 دورة م5 الحيّة — تُعاد بالكامل على HTTP، بلا SQL مباشر وبلا لمس قاعدة البيانات.
 *
 * ولماذا سكربت في المستودع لا في `/tmp`؟ لأن م5 معيارها «دورة كاملة من الشاشات» — ودليلٌ
 * يُعاد تشغيله بيدٍ ثالثة أقوى من لقطة شاشة: من يشغّل هذا الملف على بيئةٍ نظيفة يحصل على
 * نفس الأرقام أو يعرف في أي خطوة انحرفت.
 *
 * كل الأسماء والأكواد تحمل الوسم `AUDIT-TEST-2026` (طلب صاحب العمل)، فيُعرف من البيانات
 * ما هو اختبار وما هو منتج.
 *
 *   node docs/accounting-audit/tools/live-cycle.mjs \
 *     --api http://127.0.0.1:3200/api/v1 \
 *     --env .scratch/round7-env-private.env \
 *     --out docs/accounting-audit/evidence/30-r8/m5-live-cycle.json \
 *     --tag AUDIT-TEST-2026
 *
 * 🧾 **المخزون الافتتاحي عبر السند لا عبر `/inventory/ledger/record`** — هذا هو الفرق
 * العملي لـDEF-R8-013: `POST /inventory/vouchers` بـ`kind='opening'` يُرحّل قيداً
 * (مدين المخزون / دائن بضاعة أول المدة)، أما مسار `/inventory/ledger/record` فيُدخل الكمية
 * بلا قيد، فينكسر حارس `INVENTORY-VS-GL`. النسخة الأولى من هذا السكربت استعملت الثاني
 * فأنتجت فرقاً 4000 في بيئة القياس — وهذا السطر هو ما يمنع تكراره.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((pairs, value, index, all) => {
    if (value.startsWith('--')) pairs.push([value.slice(2), all[index + 1]]);
    return pairs;
  }, []),
);

const mapEnv = (file) => {
  const text = readFileSync(resolve(file), 'utf8');
  const rows = {};
  for (const line of text.split('\n')) {
    const match = line.match(/^([A-Za-z0-9_]+)=(.*)$/);
    if (match) rows[match[1]] = match[2].trim();
  }
  return rows;
};

const env = { ...mapEnv('.env'), ...(args.env ? mapEnv(args.env) : {}) };
const base = args.api ?? 'http://127.0.0.1:3200/api/v1';
const tag = args.tag ?? 'AUDIT-TEST-2026';
const stamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(4, 14);
/**
 * 🧪 الأكواد قصيرة والوسم كامل في الاسم — لأن `units.code` محدود بـ20 حرفاً (قِيس 2026-10-22:
 * `AUDIT-TEST-2026-PC-…` رُفض 400) بينما `itemCategories.code` يقبل أطول. الوسم المطلوب
 * «AUDIT-TEST-2026» يبقى في `nameAr`/`notes` وفي كل تقرير يُطبع، فلا تُفقد التتبّعية.
 */
const suffix = stamp.slice(4, 10);
const codeFor = (prefix) => `AT26-${prefix}-${suffix}`;

const call = async (method, path, body, token) => {
  const response = await fetch(base + path, {
    method,
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  let json = null;
  try {
    json = await response.json();
  } catch {
    /* 204 */
  }
  return { status: response.status, body: json };
};

const data = (body) => (body && typeof body === 'object' && 'data' in body ? body.data : body);
const money = (value) => (value === undefined || value === null ? null : Number(value).toFixed(4));

/**
 * 🔮 **المتوقّع قبل التنفيذ** — يُطبع ويُكتب في الدليل قبل أول طلب، حتى لو انهار السكربت
 * في منتصفه بقي التوقع في الملف ليُقارن. الأرقام من مستندات الاعتماد نفسها: بيع 100 + 15%
 * = 115، شراء 120 + 15% = 138، والقبض 50 يترك 65.
 */
const predicted = {
  'sale.total': '115.0000',
  'customer.balanceAfterSale.receivable': '115.0000',
  'customer.balanceAfterReceipt.receivable': '65.0000',
  'purchase.total': '138.0000',
  'supplier.balanceAfterPurchase.payable': '138.0000',
  'stock.valueQtys': '50 - 1 + 2 = 51 وحدة، بقيمة 2000 + 120 − 40 = 2080.0000',
  'gl.1270001': '2080.0000',
  'gl.3200004': '40.0000',
  'invariants.target': '21/21 (تُقاس بأداة invariants بعد الدورة، لا هنا)',
};
console.log('🔮 المتوقع قبل التنفيذ:', JSON.stringify(predicted, null, 2));

const out = { startedAt: new Date().toISOString(), tag, api: base, predicted };
const step = async (name, promise) => {
  const result = await promise;
  out[name] = { status: result.status, body: data(result.body) };
  if (result.status >= 300) {
    out.failedAt = name;
    console.error(`❌ ${name} ⇒ ${result.status}`, JSON.stringify(result.body));
    finish(1);
  }
  return data(result.body);
};

let exitCode = 0;
const finish = (code) => {
  out.finishedAt = new Date().toISOString();
  if (args.out) {
    mkdirSync(dirname(resolve(args.out)), { recursive: true });
    writeFileSync(resolve(args.out), JSON.stringify(out, null, 2));
  }
  console.log(JSON.stringify({ ...out, steps: undefined }, null, 2));
  process.exit(code);
};

const login = await call('post', '/auth/login', {
  tenantCode: env.DEMO_TENANT_CODE,
  email: env.DEMO_OWNER_EMAIL,
  password: env.DEMO_OWNER_PASSWORD,
});
const token = data(login.body)?.accessToken ?? login.body?.accessToken;
out.login = { status: login.status, token: Boolean(token) };
if (!token) {
  console.error('❌ لا توكن — تحقّق من DEMO_* في --env', login.status, JSON.stringify(login.body));
  finish(1);
}

const me = data(await call('get', '/auth/me', null, token).then((r) => r.body));
/**
 * 🧾 `/auth/me` غير موجود (404) — والمنشأة تُقرأ من حمولة التوكن نفسها، لا من استعلامٍ إضافي.
 * ويُطبع لأن أداة الثوابت تأخذه بـ`--tenant`: بيئةٌ أُعيد بناؤها تُنتج معرّفاً جديداً، وتشغيل
 * الأداة بمعرّفٍ قديم يُصفّر كل استعلامات القاعدة ويُعلن فشلاً كاذباً (قِيس 2026-10-22).
 */
const claims = JSON.parse(Buffer.from(token.split('.')[1], 'base64url').toString('utf8'));
out.tenantId = me?.tenantId ?? claims.tenantId ?? claims.tid ?? null;
// يُطبع لأن أداة الثوابت تأخذه بـ`--tenant`: بيئةٌ أُعيد بناؤها تُنتج معرّفاً جديداً، وتشغيل
// الأداة بمعرّفٍ قديم يُصفّر كل استعلامات القاعدة ويُعلن فشلاً كاذباً (قِيس 2026-10-22).
console.log('TENANT', out.tenantId);

const category = await step('category', call('post', '/organization/catalog/categories', { code: codeFor('CAT'), nameAr: `${tag} — أصناف م5` }, token));
const unit = await step('unit', call('post', '/organization/catalog/units', { code: codeFor('PC'), nameAr: `${tag} — حبة م5` }, token));
const item = await step('item', call('post', '/organization/catalog/items', {
  sku: codeFor('ITEM'),
  nameAr: `${tag} — صنف م5`,
  categoryId: category.id,
  baseUnitId: unit.id,
  salePrice: '100',
  purchasePrice: '60',
}, token));
const customer = await step('customer', call('post', '/parties', { kind: 'customer', code: codeFor('C'), name: `${tag} — عميل م5` }, token));
const supplier = await step('supplier', call('post', '/parties', { kind: 'supplier', code: codeFor('S'), name: `${tag} — مورّد م5` }, token));

const branches = data(await call('get', '/branches', null, token).then((r) => r.body));
const warehouses = data(await call('get', '/warehouses', null, token).then((r) => r.body));
const branchId = branches[0].id;
const warehouseId = warehouses[0].id;
out.branchId = branchId;
out.warehouseId = warehouseId;

// ① المخزون الافتتاحي — بسندٍ يُرحّل قيده (DEF-R8-013).
const voucher = await step('openingVoucher', call('post', '/inventory/vouchers', {
  branchId,
  warehouseId,
  kind: 'opening',
  voucherDate: new Date().toISOString().slice(0, 10),
  reason: `${tag} بضاعة أول المدة`,
  lines: [{ itemId: item.id, qty: '50', unitCost: '40' }],
}, token));
await step('openingVoucherPost', call('post', `/inventory/vouchers/${voucher.id}/post`, {}, token));

// ② بيع 1 × 100 + 15% ⇒ 115 على الحساب.
const sale = await step('sale', call('post', '/sales/invoices', {
  branchId,
  warehouseId,
  partyId: customer.id,
  lines: [{ itemId: item.id, quantity: '1', unitPrice: '100', taxRate: '15' }],
}, token));
const salePosted = await step('salePost', call('post', `/sales/invoices/${sale.id}/post`, { settlement: 'credit' }, token));
out.actual = {
  ...(out.actual ?? {}),
  'sale.total': money(salePosted.total),
  'sale.number': salePosted.number,
};

const balanceAfterSale = data(await call('get', `/parties/${customer.id}/balance`, null, token).then((r) => r.body));
out.actual['customer.balanceAfterSale.receivable'] = money(balanceAfterSale.receivable);

// ③ قبض 50 نقداً من العميل.
const cashLocations = data(await call('get', '/cash-locations', null, token).then((r) => r.body));
const safe = cashLocations.find((location) => location.kind === 'safe');
out.cashLocationId = safe?.id;
const receipt = await step('receipt', call('post', '/vouchers', {
  kind: 'receipt',
  subtype: 'customer',
  branchId,
  cashLocationId: safe.id,
  date: new Date().toISOString().slice(0, 10),
  partyId: customer.id,
  amount: '50',
  method: 'cash',
  description: `${tag} تحصيل`,
}, token));
await step('receiptPost', call('post', `/vouchers/${receipt.id}/post`, {}, token));
const balanceAfterReceipt = data(await call('get', `/parties/${customer.id}/balance`, null, token).then((r) => r.body));
out.actual['customer.balanceAfterReceipt.receivable'] = money(balanceAfterReceipt.receivable);

// ④ شراء 2 × 60 + 15% ⇒ 138 على المورّد.
const purchase = await step('purchase', call('post', '/purchase-invoices', {
  branchId,
  warehouseId,
  partyId: supplier.id,
  lines: [{ itemId: item.id, quantity: '2', unitPrice: '60', taxRate: '15' }],
}, token));
const purchasePosted = await step('purchasePost', call('post', `/purchase-invoices/${purchase.id}/post`, { settlement: 'credit' }, token));
const supplierBalance = data(await call('get', `/parties/${supplier.id}/balance`, null, token).then((r) => r.body));
out.actual['purchase.total'] = money(purchasePosted.total);
out.actual['purchase.number'] = purchasePosted.number;
out.actual['supplier.balanceAfterPurchase.payable'] = money(supplierBalance.payable);

// ⑤ الأرصدة: مرآة المخزون في الأستاذ.
const levels = data(await call('get', `/inventory/levels?warehouse_id=${warehouseId}&item_id=${item.id}`, null, token).then((r) => r.body));
out.actual['stock.quantity'] = money(levels[0]?.quantity);
out.actual['stock.value'] = money(levels[0]?.value);
/**
 * 🧾 الأستاذ يُقرأ من **ميزان المراجعة** لا من `/accounts`: شجرة الحسابات تُرجع البطاقة بلا
 * أرصدة (قِيس 2026-10-22: `1270001` بلا حقل رصيد)، فكان أوّل تشغيل يُخرج `null` ويُعلن
 * فشلاً كاذباً بينما القيد نفسه صحيح.
 */
const trial = data(await call('get', '/statements/trial-balance', null, token).then((r) => r.body));
const line = (code) => (Array.isArray(trial) ? trial : []).find((row) => row.code === code);
out.actual['gl.1270001'] = money(line('1270001')?.balance);
out.actual['gl.3200004'] = money(line('3200004')?.balance);
out.itemId = item.id;
out.customerId = customer.id;
out.supplierId = supplier.id;

const keys = Object.keys(predicted).filter((key) => key in out.actual && key !== 'invariants.target');
out.verdict = keys.map((key) => ({
  key,
  predicted: predicted[key],
  actual: out.actual[key],
  ok: String(out.actual[key]) === String(predicted[key]),
}));
exitCode = out.verdict.every((row) => row.ok) ? 0 : 1;
console.log(out.verdict);
finish(exitCode);
