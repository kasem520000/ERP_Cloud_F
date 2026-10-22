/* Round-six read-only survey: remaining static staff pages plus declared parameterised probes.
 * Every navigation is GET; save/mutating verbs are blocked and logged.
 */
const { open, snap, evidence, root } = require('./browser.cjs');
const fs = require('node:fs');
const path = require('node:path');

const plan = JSON.parse(fs.readFileSync(path.join(evidence, '00-discovery/round6-planned-routes.json'), 'utf8'));
const app = process.argv[2];
if (!app) throw new Error('Usage: survey-round6.cjs <staff|marketing|platform-admin>');
const state = { staff: 'r4-staff-state.json', marketing: 'r5-marketing-state.json', 'platform-admin': 'r5-console-state.json' }[app];
const group = { staff: '60-r6-staff', marketing: '60-r6-marketing', 'platform-admin': '60-r6-console' }[app];
const resultsFile = path.join(evidence, `00-discovery/round6-${app}-results.json`);
const results = fs.existsSync(resultsFile) ? JSON.parse(fs.readFileSync(resultsFile)) : [];
const done = new Set(results.map((row) => row.id));
const targets = plan.filter((row) => row.app === app);

(async () => {
  const { b, p } = await open(state, { readOnly: true });
  const save = () => fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2) + '\n');
  try {
    for (const route of targets) {
      if (done.has(route.id)) { console.log('SKIP', route.id); continue; }
      let status = null; let navError = null;
      try {
        const response = await p.goto(`http://127.0.0.1:${route.port}${route.route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
        status = response ? response.status() : null;
      } catch (error) { navError = error.message.split('\n')[0]; }
      // Let client components settle without depending on networkidle (blocked analytics keep it busy).
      await p.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
      await p.waitForTimeout(700);
      const bodyText = (await p.locator('body').innerText().catch(() => '')).slice(0, 9000);
      const headings = await p.locator('h1,h2').allTextContents().catch(() => []);
      const row = {
        ...route,
        at: new Date().toISOString(),
        navStatus: status,
        finalUrl: p.url(),
        redirected: new URL(p.url()).pathname !== route.route.split('?')[0],
        headings: headings.slice(0, 8),
        loginGate: (await p.locator('input[type=password]').count()) > 0 && /تسجيل الدخول|رمز المنشأة/.test(bodyText),
        notFound: /404|غير موجود|لم يعد موجوداً|لم يتم العثور|Not Found/.test(bodyText),
        errorBoundary: /Application error|حدث خطأ|Internal Server Error|Unexpected Application/.test(bodyText),
        empty: /لا يوجد|لا توجد|لم يصل|لم تُنشأ|فارغ/.test(bodyText),
        textLength: bodyText.length,
        bodyText: bodyText.slice(0, 4000),
        navError,
      };
      try { await snap(p, group + '/' + route.id, 'screen-' + app); } catch (error) { row.snapshotError = error.message; }
      results.push(row); done.add(route.id); save();
      console.log(route.id, route.route.slice(0, 46), row.navStatus, row.redirected ? 'REDIRECT' : '', row.loginGate ? 'LOGIN' : '', row.notFound ? '404TEXT' : '', row.errorBoundary ? 'ERROR' : '');
    }
  } finally { await b.close(); save(); }
})().catch((error) => { console.error(error.message); process.exit(1); });
