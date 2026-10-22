/* Round-six portal probes: one monitored login, then the two missing-document screens.
 * Read-only; the only POST is the authentication itself.
 */
const { open, snap, evidence, root } = require('./browser.cjs');
const fs = require('node:fs');
const path = require('node:path');
const priv = JSON.parse(fs.readFileSync(path.join(root, '.scratch/browser/r5-portal-private.json'), 'utf8'));
const probe = '00000000-0000-4000-8000-000000000000';
(async () => {
  const { b, p } = await open('r6-portal-state.json', { readOnly: true });
  try {
    await p.goto('http://127.0.0.1:3004/auth/login', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await p.getByLabel('tenant', { exact: true }).fill('audit-readonly-r4');
    await p.getByLabel('email', { exact: true }).fill(priv.email);
    await p.getByLabel('password', { exact: true }).fill(priv.nextPassword);
    await snap(p, '60-r6-portal/RO6-P000-before-login', 'before-login-filled-verified');
    const flag = path.join(root, '.scratch/browser/RO6-P000.approved');
    if (fs.existsSync(flag)) throw new Error('Stale approval');
    console.log('READY_FOR_IMAGE_CHECK RO6-P000');
    await new Promise((resolve) => { const w = fs.watch(path.dirname(flag), () => { if (fs.existsSync(flag)) { w.close(); resolve(); } }); });
    const response = p.waitForResponse((r) => r.request().method() === 'POST' && new URL(r.url()).pathname === '/api/v1/auth/login');
    await p.getByRole('button', { name: 'تسجيل الدخول', exact: true }).click();
    const res = await response;
    if (res.status() !== 200) throw new Error('Portal login failed');
    await p.waitForTimeout(900);
    if (new URL(p.url()).pathname !== '/portal') throw new Error('No portal session');
    const rows = [];
    for (const [id, route, purpose] of [
      ['RO6-P001', `/portal/invoices/${probe}`, 'فاتورة غير موجودة: المتوقع رسالة عدم وجود، لا بيانات وهمية'],
      ['RO6-P002', `/portal/invoices/${probe}/pay`, 'صفحة دفع لفاتورة غير موجودة: لا دفع ولا نموذج يُرسل'],
    ]) {
      const nav = await p.goto('http://127.0.0.1:3004' + route, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await p.waitForTimeout(1200);
      const text = (await p.locator('body').innerText().catch(() => '')).slice(0, 6000);
      await snap(p, '60-r6-portal/' + id, 'screen-portal-probe');
      rows.push({ id, route, purpose, app: 'customer-portal', navStatus: nav ? nav.status() : null, finalUrl: p.url(), bodyText: text.slice(0, 3000),
        notFound: /غير موجود|لم يتم العثور|404|Not Found/.test(text), payForm: /ادفع|تحويل|بطاقة|سداد/.test(text) });
      console.log(id, rows.at(-1).navStatus, p.url().replace('http://127.0.0.1:3004', ''), rows.at(-1).notFound ? 'NOT_FOUND_TEXT' : 'NO_404_TEXT');
    }
    fs.writeFileSync(path.join(evidence, '00-discovery/round6-customer-portal-results.json'), JSON.stringify(rows, null, 2) + '\n');
  } finally { await b.close(); }
})().catch((error) => { console.error(error.message); process.exit(1); });
