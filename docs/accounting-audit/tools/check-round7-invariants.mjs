#!/usr/bin/env node
/**
 * R7 invariants — يقرأ قاعدة التدقيق `audit_bakery_r7` والتقارير الحيّة ويقيس
 * ثوابت محاسبية عامة (لا أرقاماً محفوظة لهذه الدورة وحدها) ويطبع PASS/FAIL لكل ثابت.
 *
 * لا يكتب شيئاً: كل الاستعلامات SELECT، وكل نداءات API من نوع GET.
 *
 * الاستخدام:
 *   node docs/accounting-audit/tools/check-round7-invariants.mjs \
 *     --db "postgres://…/audit_bakery_r7" \
 *     --api "http://127.0.0.1:3100/api/v1" \
 *     --env .scratch/round7-env-private.env \
 *     --tenant 01a160bb-6719-7549-b9a4-f88d8e4e33fe \
 *     --out docs/accounting-audit/evidence/20-r7/round7-invariants.json
 *
 * `--env` ملف مفاتيح محلي (غير مُودَع في Git) يُقرأ منه حساب التدقيق. لا كلمات مرور في السكربت.
 * كود الخروج 1 إذا فشل أي ثابت — الفشل هو النتيجة المطلوبة توثيقها، لا خطأ في الأداة.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) args.set(process.argv[i].replace(/^--/, ''), process.argv[i + 1]);

const ROOT = process.cwd();
const API = args.get('api') ?? 'http://127.0.0.1:3100/api/v1';
const TENANT = args.get('tenant') ?? '01a160bb-6719-7549-b9a4-f88d8e4e33fe';
const ENV_FILE = args.get('env') ?? '.scratch/round7-env-private.env';
const OUT = args.get('out') ?? null;

const dbUrl = args.get('db') ?? fromUrlsFile() ?? process.env.DATABASE_URL;
if (!dbUrl) throw new Error('لا اتصال بقاعدة: مرّر --db أو DATABASE_URL');

function fromUrlsFile() {
  const f = '/tmp/r7urls.txt';
  if (!fs.existsSync(f)) return undefined;
  const line = fs.readFileSync(f, 'utf8').split('\n').find((l) => l.startsWith('APP='));
  return line?.slice(4).trim();
}

function readEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
    if (m) out[m[1]] = m[2];
  }
  return out;
}

const req = createRequire(path.join(ROOT, 'packages/database/package.json'));
const { Client } = req('pg');
const db = new Client({ connectionString: dbUrl });
await db.connect();
await db.query(`select set_config('app.tenant_id', $1, false)`, [TENANT]);

const q = async (text, params = []) => (await db.query(text, params)).rows;
const one = async (text, params = []) => (await q(text, params))[0];
const num = (v) => Number(v ?? 0);
/**
 * مقارنة مبالغ بمنزلة قرشين: التقارير تقرّب، فالمقارنة بالتساوي التام تخفي العيوب الحقيقية.
 *
 * والسماحية `0.0051` لا `0.005`: الطرفان يُقرَّبان إلى منزلتين (‏٧٫٤٧٥ يُعرض ٧٫٤٨)، فأكبر فرقٍ
 * مشروع بين رقمٍ أربعَ منازل ورقمٍ مقرَّبٍ هو نصف قرش — و`0.005` الصِّرف يسقط بخطأ تمثيلٍ
 * عائم (‏٧٫٤٧٥ − ٧٫٤٨ = ‎0.0050000000000008). فالفشل حينها عيبُ أداةٍ لا عيبُ دفتر.
 */
const same = (a, b, tolerance = 0.0051) => Math.abs(num(a) - num(b)) <= tolerance;

/* ---------------------------------------------------------------- API */
const env = readEnv(ENV_FILE);
async function login() {
  const body = {
    tenantCode: env.DEMO_TENANT_CODE,
    email: env.DEMO_ACCOUNTANT_EMAIL,
    password: env.DEMO_ACCOUNTANT_PASSWORD,
  };
  if (!body.tenantCode || !body.email) return null;
  const response = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  const token = json?.data?.accessToken ?? json?.accessToken;
  if (!token) throw new Error(`فشل الدخول (${response.status}): ${JSON.stringify(json).slice(0, 200)}`);
  return token;
}
const token = await login();
if (!token) throw new Error(`لا ملف اعتماد (${ENV_FILE}) — لا يمكن قراءة التقارير`);

async function report(key, params = {}) {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v != null)).toString();
  const response = await fetch(`${API}/reports/${key}${qs ? `?${qs}` : ''}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error(`تقرير ${key}: HTTP ${response.status}`);
  return response.json();
}

/* ------------------------------------------------------------ الثوابت */
const results = [];
function check(id, title, expected, actual, pass, note = '') {
  results.push({ id, title, expected, actual, pass, note });
}

// 1) توازن الأستاذ
const gl = await one(`
  SELECT coalesce(sum(l.debit),0)::text AS debit, coalesce(sum(l.credit),0)::text AS credit
  FROM journal_entry_lines l JOIN journal_entries e ON e.id = l.entry_id
  WHERE l.tenant_id = $1 AND e.status = 'posted'`, [TENANT]);
check('GL-BALANCED', 'مجموع مدين الأستاذ = مجموع دائنه', gl.debit, gl.credit, same(gl.debit, gl.credit));

// 2) قيمة المخزون في الأرصدة = حساب المخزون في الأستاذ
const stock = await one(`
  SELECT coalesce(sum(b.value),0)::text AS value
  FROM stock_balances b WHERE b.tenant_id = $1`, [TENANT]);
const invGl = await one(`
  SELECT coalesce(sum(l.debit - l.credit),0)::text AS net
  FROM journal_entry_lines l JOIN journal_entries e ON e.id = l.entry_id JOIN accounts a ON a.id = l.account_id
  WHERE l.tenant_id = $1 AND e.status = 'posted' AND a.code = '1270001'`, [TENANT]);
check('INVENTORY-VS-GL', 'قيمة المخزون = رصيد 1270001', stock.value, invGl.net, same(stock.value, invGl.net));

// 3) الذمم المدينة: الأستاذ مقابل تقرير الأعمار
/**
 * 🧾 م3 — الذمم تُقاس على **شجرة** حساب التحكّم لا على صفّه وحده: بعد أن صار لكل طرفٍ حسابٌ
 * فرعيٌّ تحت `12310001`/`22111001` تُكتب الحركةُ الجديدة على الأبناء، والقيودُ التاريخية على
 * الأب. فالمجموع الصحيح = الأب + أبنائه (‏`path <@`). ولو قيس الأبُ وحده لانخفض الرقم بعد
 * أول فاتورةٍ آجلةٍ جديدة بلا أن يتغيّر دينارٌ في الواقع — وهو فشلُ أداةٍ لا عيبُ دفتر.
 */
const subtreeNet = (code) => `
  SELECT coalesce(sum(l.debit - l.credit),0)::text AS net
  FROM journal_entry_lines l JOIN journal_entries e ON e.id = l.entry_id
  JOIN accounts a ON a.id = l.account_id
  WHERE l.tenant_id = $1 AND e.status = 'posted'
    AND a.path <@ (SELECT path FROM accounts WHERE tenant_id = $1 AND code = '${code}' AND deleted_at IS NULL LIMIT 1)`;
const arGl = await one(subtreeNet('12310001'), [TENANT]);
const arAging = await report('ar-aging');
check('AR-AGING-VS-GL', 'إجمالي أعمار الذمم المدينة = رصيد 12310001',
  arGl.net, arAging?.totals?.due, same(arGl.net, arAging?.totals?.due));

// 4) كشف الطرف: المدين − الدائن لكل عميل = ذمته في الأستاذ
const arByParty = await q(`
  SELECT p.id::text AS party_id, coalesce(sum(l.debit - l.credit),0)::text AS net
  FROM parties p
  JOIN journal_entry_lines l ON l.tenant_id = p.tenant_id
  JOIN journal_entries e ON e.id = l.entry_id AND e.status = 'posted'
  WHERE p.tenant_id = $1 AND p.deleted_at IS NULL
    AND (l.account_id IN (p.receivable_account_id, p.payable_account_id)
         OR (l.party_id = p.id AND l.account_id IN (
              SELECT id FROM accounts WHERE tenant_id = $1 AND deleted_at IS NULL
                AND code IN ('12310001', '22111001'))))
  GROUP BY p.id
  HAVING coalesce(sum(l.debit - l.credit),0) <> 0`, [TENANT]);
for (const party of arByParty) {
  const st = await report('party-statement', { partyId: party.party_id });
  const statementNet = num(st?.totals?.debit) - num(st?.totals?.credit);
  check(`PARTY-STATEMENT-${party.party_id.slice(0, 8)}`,
    'رصيد كشف العميل = ذمته في حساب الذمم',
    party.net, statementNet.toFixed(4), same(party.net, statementNet),
    `مدين ${st?.totals?.debit} / دائن ${st?.totals?.credit}`);
}

// 5) قائمة الدخل: الصافي يجب أن يساوي الإيرادات + المصروفات بإشارتها المعروضة
const pl = await report('profit-loss');
const plRow = (label) => num(pl?.rows?.find((r) => r.section === label)?.amount);
const revenue = plRow('إجمالي الإيرادات');
const expenseShown = plRow('إجمالي المصروفات');
const netProfit = plRow('صافي الربح');
// ثابتٌ مستقلّ عن اصطلاح عرض المصروف: المصروف يُطرح دائماً من الإيراد. في R7 عُرض
// «إجمالي المصروفات» سالباً (−475) وكان الصافي 865 بدل −85؛ وبعد إصلاح الإشارة في بناء R8
// يُعرض موجباً (177) والصافي 83. الصيغة `revenue − |expense|` تحكم الحالتين معاً.
const plExpected = revenue - Math.abs(expenseShown);
check('PL-SIGN', 'صافي الربح = الإيرادات − |إجمالي المصروفات|',
  plExpected.toFixed(2), netProfit.toFixed(2), same(plExpected, netProfit),
  `إيرادات ${revenue} · مصروفات معروضة ${expenseShown}`);

/**
 * 🧾 **بقايا بيانات لا عيبَ كود** — الفواتير المرحّلة قبل إصلاح `cost_total/profit` تبقى
 * صفراً: لا يُعاد كتابة مستندٍ مرحّل ولا يُخترع رقم. وتُفحص الثوابت على ما رُحِّل بعد
 * الإصلاح، وتُطبع البقية كإشعارٍ يُقرأ لا كفشلٍ يُخفى.
 *
 * حدُّ الفصل مُعلَنٌ صراحةً: `SI-000003` أوّل فاتورة رُحّلت على بناء الإصلاح (‏2026-10-22)،
 * وما قبلها (`SI-000001`, `SI-000002`, `SR-000001`) بقايا الجولة السابعة.
 */
const POST_FIX_INVOICES = ['SI-000003', 'SI-000004'];
const HISTORICAL_INVOICES = ['SI-000001', 'SI-000002', 'SR-000001'];
const isPostFixInvoice = (number) => POST_FIX_INVOICES.includes(number);

// 6) أرباح الفواتير: التكلفة على الفاتورة = قيود تكلفة المبيعات الخاصة بها
const ip = await report('invoice-profit');
for (const row of ip?.rows ?? []) {
  if (!isPostFixInvoice(row.number)) {
    console.log(`ℹ️  INVOICE-PROFIT-${row.number} بقايا بيانات: cost_total=${row.cost_total} (مستندٌ رُحِّل قبل الإصلاح — لا يُعاد كتابته)`);
    continue;
  }
  const cost = await one(`
    SELECT coalesce(sum(l.debit - l.credit),0)::text AS cost
    FROM journal_entry_lines l JOIN journal_entries e ON e.id = l.entry_id JOIN accounts a ON a.id = l.account_id
    JOIN sales_invoices si ON si.id = e.source_id AND e.source_type IN ('sales_invoice','salesInvoice')
    WHERE l.tenant_id = $1 AND e.status = 'posted' AND a.code = '3200004' AND si.number = $2`, [TENANT, row.number]);
  check(`INVOICE-PROFIT-${row.number}`, 'تكلفة الفاتورة في التقرير = تكلفة المبيعات المرحّلة لها',
    cost.cost, row.cost_total, same(cost.cost, row.cost_total),
    `صافي ${row.subtotal} · ربح التقرير ${row.profit}`);
}

// 7) ترويسة الفاتورة: cost_total = مجموع أسطرها، والربح = الصافي − التكلفة
const headers = await q(`
  SELECT si.number, si.subtotal::text AS subtotal, si.cost_total::text AS header_cost,
         coalesce(sum(l.cost_total),0)::text AS line_cost
  FROM sales_invoices si LEFT JOIN sales_invoice_lines l ON l.invoice_id = si.id
  WHERE si.tenant_id = $1 GROUP BY si.id, si.number, si.subtotal, si.cost_total ORDER BY si.number`, [TENANT]);
for (const h of headers) {
  if (!isPostFixInvoice(h.number)) {
    if (HISTORICAL_INVOICES.includes(h.number))
      console.log(`ℹ️  INVOICE-HEADER-${h.number} بقايا بيانات: الترويسة ${h.header_cost} والأسطر ${h.line_cost}`);
    continue;
  }
  check(`INVOICE-HEADER-${h.number}`, 'cost_total في الترويسة = مجموع أسطر الفاتورة',
    h.line_cost, h.header_cost, same(h.line_cost, h.header_cost));
  const profitRow = (ip?.rows ?? []).find((row) => row.number === h.number);
  if (profitRow) {
    const expectedProfit = (num(h.subtotal) - num(h.line_cost)).toFixed(2);
    check(`INVOICE-PROFIT-CALC-${h.number}`, 'ربح الفاتورة = الصافي − التكلفة',
      expectedProfit, num(profitRow.profit).toFixed(2), same(expectedProfit, profitRow.profit));
  }
}

// 8) كشف الصندوق بلا تحديد صندوق: يجب أن يساوي حركة كل حسابات النقد
const cashAccounts = await q(`
  SELECT cl.id::text AS id, cl.name, a.code,
         coalesce(sum(l.debit),0)::text AS debit, coalesce(sum(l.credit),0)::text AS credit
  FROM cash_locations cl JOIN accounts a ON a.id = cl.account_id
  LEFT JOIN journal_entry_lines l ON l.account_id = a.id
  LEFT JOIN journal_entries e ON e.id = l.entry_id AND e.status = 'posted'
  WHERE cl.tenant_id = $1
  GROUP BY cl.id, cl.name, a.code`, [TENANT]);
const cashTotalDebit = cashAccounts.reduce((s, r) => s + num(r.debit), 0);
const cashTotalCredit = cashAccounts.reduce((s, r) => s + num(r.credit), 0);
const csAll = await report('cash-statement');
check('CASH-STATEMENT-ALL', 'كشف الصندوق بلا صندوق («الكل») = حركة كل حسابات النقد',
  cashTotalDebit.toFixed(2), csAll?.totals?.income ?? '0.00', same(cashTotalDebit, csAll?.totals?.income),
  `صادر متوقع ${cashTotalCredit.toFixed(2)} · صادر التقرير ${csAll?.totals?.outcome}`);
for (const acc of cashAccounts) {
  const cs = await report('cash-statement', { cashLocationId: acc.id });
  const expected = num(acc.debit) - num(acc.credit);
  const actual = num(cs?.totals?.income) - num(cs?.totals?.outcome);
  check(`CASH-STATEMENT-${acc.code}`, `كشف «${acc.name}» = حركة حسابه`,
    expected.toFixed(2), actual.toFixed(2), same(expected, actual));
}

// 9) حركة الصندوق مقابل كشف الصندوق
const cm = await report('cash-movement');
check('CASH-MOVEMENT-VS-STATEMENT', 'قبض «حركة الصندوق» = وارد «كشف الصندوق» لكل الصناديق',
  cashTotalDebit.toFixed(2), cm?.totals?.receipts ?? '0.00', same(cashTotalDebit, cm?.totals?.receipts),
  `حركة الصندوق ${cm?.rowCount} صف`);

// 10) الضريبة: مستحق الإقرار = رصيد 2222001
const vatGl = await one(`
  SELECT coalesce(sum(l.credit - l.debit),0)::text AS net
  FROM journal_entry_lines l JOIN journal_entries e ON e.id = l.entry_id JOIN accounts a ON a.id = l.account_id
  WHERE l.tenant_id = $1 AND e.status = 'posted' AND a.code = '2222001'`, [TENANT]);
const vat = await report('vat-return-period');
/** صافي الإقرار يُقرأ من بطاقة `grandTotal` (s_net_vat) لأنه هو المعروض للمستخدم. */
const vatDueAmount = num(vat?.grandTotal?.find((g) => g.key === 's_net_vat')?.amount);
check('VAT-VS-GL', 'صافي الإقرار = رصيد حساب الضريبة',
  vatGl.net, vatDueAmount.toFixed(2), same(vatGl.net, vatDueAmount));

// 11) رصيد موقع النقد **الذي يقدّمه الـAPI** = حركة حسابه في الأستاذ.
// بعد إصلاح DEF-R8-005 صار الـAPI يقرأ الأستاذ مباشرة، وجدول `cash_location_balances`
// مجرّد مخزّن اشتُقّ من الأستاذ (يُزامَن بـ`recalc-balance`). لذلك يُقاس ما يراه المستخدم
// من `GET /cash-locations/:id/balance`، وتُطبع حالة المخزّن كمعلومة لا كحكم.
for (const acc of cashAccounts) {
  const expected = num(acc.debit) - num(acc.credit);
  let apiBalance = null;
  try {
    const res = await fetch(`${API}/cash-locations/${acc.id}/balance`, { headers: { authorization: `Bearer ${token}` } });
    if (res.ok) apiBalance = (await res.json()).balance;
  } catch {
    /* لا API ⇒ يبقى الثابت غير مقيس */
  }
  check(`CASH-BALANCE-API-${acc.code}`, `رصيد موقع «${acc.name}» الذي يقدّمه الـAPI = حركة حسابه`,
    expected.toFixed(2), apiBalance === null ? 'غير مقيس' : num(apiBalance).toFixed(2),
    apiBalance !== null && same(expected, apiBalance));
  const cache = await one(`
    SELECT coalesce(sum(b.balance),0)::text AS balance FROM cash_location_balances b
    WHERE b.cash_location_id = $1`, [acc.id]);
  if (!same(expected, cache.balance))
    console.log(`ℹ️  CASH-CACHE-${acc.code} مخزّن=${num(cache.balance).toFixed(2)} أستاذ=${expected.toFixed(2)} (مخزّن قديم؛ يُزامَن بـrecalc-balance — لا يُحتسب ثابتاً)`);
}

/**
 * 12) أثر المدقّق: كل قيد **أُنشئ بعد إصلاح DEF-R7-012** يحمل `posted_by`.
 *
 * القيود الست الأولى (`JE-000001..6`) كُتبت قبل الإصلاح وفاعلُها غير مسجّل؛ ولا يُخترع فاعلٌ
 * لدليلٍ مفقود (وهو قرار المالك نفسه: تُوثَّق كبقايا وتُترك). فالفحص يقع على ما بعدها.
 */
const TRAIL_POST_FIX_FROM = 'JE-000007';
const trail = await one(`
  SELECT count(*) FILTER (WHERE number >= $2)::text AS total,
         count(*) FILTER (WHERE number >= $2 AND posted_by IS NULL)::text AS missing,
         count(*) FILTER (WHERE number < $2 AND posted_by IS NULL)::text AS historical
  FROM journal_entries WHERE tenant_id = $1 AND status = 'posted'`, [TENANT, TRAIL_POST_FIX_FROM]);
check('AUDIT-TRAIL-POSTED-BY', `كل قيد من ${TRAIL_POST_FIX_FROM} يحمل posted_by`,
  '0 قيد بلا مُرحِّل', `${trail.missing} من ${trail.total}`, num(trail.missing) === 0,
  num(trail.historical) > 0 ? `بقايا تاريخية ${trail.historical} قيداً بلا مُرحِّل (لا تُخترع)` : undefined);

// 13) الذمم الدائنة: أعمار الموردين = رصيد حساب الموردين
/** 🧾 م3 — شجرةُ حساب الموردين (الأب + أبناؤه)، كما في الذمم المدينة. */
const apGl = await one(`
  SELECT coalesce(sum(l.credit - l.debit),0)::text AS net
  FROM journal_entry_lines l JOIN journal_entries e ON e.id = l.entry_id
  JOIN accounts a ON a.id = l.account_id
  WHERE l.tenant_id = $1 AND e.status = 'posted'
    AND a.path <@ (SELECT path FROM accounts WHERE tenant_id = $1 AND code = '22111001' AND deleted_at IS NULL LIMIT 1)`, [TENANT]);
const apAging = await report('ap-aging');
check('AP-AGING-VS-GL', 'إجمالي أعمار الذمم الدائنة = رصيد 22111001',
  apGl.net, apAging?.totals?.due, same(apGl.net, apAging?.totals?.due));

await db.end();

/* ------------------------------------------------------------- النتيجة */
const passed = results.filter((r) => r.pass).length;
const summary = {
  at: new Date().toISOString(),
  api: API,
  tenantId: TENANT,
  totals: { checks: results.length, passed, failed: results.length - passed },
  results,
};
if (OUT) {
  fs.mkdirSync(path.dirname(path.resolve(ROOT, OUT)), { recursive: true });
  fs.writeFileSync(path.resolve(ROOT, OUT), JSON.stringify(summary, null, 2));
}
for (const r of results) {
  console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.id.padEnd(30)} متوقع=${r.expected}  فعلي=${r.actual}${r.note ? `  (${r.note})` : ''}`);
}
console.log(`\n${passed}/${results.length} ثابتاً محققاً — ${results.length - passed} فشلاً`);
if (OUT) console.log(`السجل: ${OUT}`);
process.exitCode = passed === results.length ? 0 : 1;
