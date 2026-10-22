/* Round-six re-probe with an explicit settle condition: the panel state must leave "loading".
 * New ids only — the first captures stay as they are.
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
    await snap(p, '60-r6-portal/RO6-P010-before-login', 'before-login-filled-verified');
    const flag = path.join(root, '.scratch/browser/RO6-P010.approved');
    if (fs.existsSync(flag)) throw new Error('Stale approval');
    console.log('READY_FOR_IMAGE_CHECK RO6-P010');
    await new Promise((resolve) => { const w = fs.watch(path.dirname(flag), () => { if (fs.existsSync(flag)) { w.close(); resolve(); } }); });
    const response = p.waitForResponse((r) => r.request().method() === 'POST' && new URL(r.url()).pathname === '/api/v1/auth/login');
    await p.getByRole('button', { name: 'تسجيل الدخول', exact: true }).click();
    if ((await response).status() !== 200) throw new Error('Portal login failed');
    await p.waitForTimeout(1200);
    const rows = [];
    for (const [id, route] of [
      ['RO6-P011', `/portal/invoices/${probe}`],
      ['RO6-P012', `/portal/invoices/${probe}/pay`],
    ]) {
      const nav = await p.goto('http://127.0.0.1:3004' + route, { waitUntil: 'domcontentloaded', timeout: 45000 });
      // Settle: the shell finishes, then the page reports its own state.
      await p.locator('.portal').waitFor({ timeout: 20000 }).catch(() => {});
      await p.waitForTimeout(4000);
      const text = (await p.locator('body').innerText().catch(() => '')).slice(0, 8000);
      await snap(p, '60-r6-portal/' + id, 'screen-portal-probe-settled');
      rows.push({ id, route, app: 'customer-portal', navStatus: nav ? nav.status() : null, finalUrl: p.url(),
        loadingRemaining: /جارٍ/.test(text), notFound: /غير متاحة|غير موجود|لم يتم العثور|404/.test(text),
        payUi: /ادفع الآن|دفع|بطاقة|سداد/.test(text), bodyText: text.slice(0, 3000) });
      console.log(id, rows.at(-1).navStatus, 'loading=' + rows.at(-1).loadingRemaining, 'notFound=' + rows.at(-1).notFound);
      console.log('   ', text.split('\n').filter(Boolean).slice(-6).join(' | ').slice(0, 300));
    }
    fs.writeFileSync(path.join(evidence, '00-discovery/round6-customer-portal-settled.json'), JSON.stringify(rows, null, 2) + '\n');
  } finally { await b.close(); }
})().catch((error) => { console.error(error.message); process.exit(1); });
