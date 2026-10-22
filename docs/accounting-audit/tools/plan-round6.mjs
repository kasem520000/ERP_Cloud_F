// Round-six plan: the 34 remaining static staff pages, plus a small, declared set of
// parameterised routes where either a real parameter exists or 404 handling IS the object.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const round = path.join(root, 'docs/accounting-audit');
const evidence = path.join(round, 'evidence/00-discovery');
const registers = fs.readFileSync(path.join(round, 'SCREEN_REGISTER.md'), 'utf8').split('\n');

const APPS = { staff: 3001, marketing: 3002, 'platform-admin': 3003, 'customer-portal': 3004 };
const routes = [];
const counters = {};
function add(app, route, source, kind, purpose) {
  const prefix = { staff: 'S', marketing: 'M', 'platform-admin': 'A', 'customer-portal': 'P' }[app];
  counters[app] = (counters[app] ?? 0) + 1;
  routes.push({ id: `RO6-${prefix}${String(counters[app]).padStart(3, '0')}`, app, port: APPS[app], route, source, kind, purpose });
}

for (const line of registers) {
  if (!line.startsWith('| SCR-')) continue;
  const cells = line.split('|').map((cell) => cell.trim());
  if (!cells[5].startsWith('NOT_RUN') || cells[2] !== 'staff') continue;
  if (cells[4].includes('[')) continue;
  const source = cells[4].replaceAll('`', '');
  add('staff', '/' + source.replace('apps/staff/app/', '').replace('/page.tsx', ''), source, 'STATIC_READ_ONLY', 'زحف قرائي لصفحة ثابتة لم تُزر بعد');
}

// Declared parameterised probes — never a fabricated document, only known values or 404 handling.
const probe = '00000000-0000-4000-8000-000000000000';
add('staff', '/settings/sync/invoices', 'apps/staff/app/settings/sync/[entity]/page.tsx', 'KNOWN_PARAM_READ_ONLY', 'المعرّف الحقيقي من شجرة التنقل: مزامنة الفواتير');
add('staff', `/accounting/journal-entries/${probe}`, 'apps/staff/app/accounting/journal-entries/[id]/page.tsx', 'NOT_FOUND_HANDLING', 'لا قيود في R4؛ المقصود سلوك 404 لا محتوى القيد');
add('staff', `/sales/quotations/${probe}`, 'apps/staff/app/sales/quotations/[id]/page.tsx', 'NOT_FOUND_HANDLING', 'لا عروض أسعار؛ اختبار معالجة المعرف الغائب');
add('staff', `/projects/${probe}/board`, 'apps/staff/app/projects/[id]/board/page.tsx', 'NOT_FOUND_HANDLING', 'لا مشاريع؛ اختبار معالجة المعرف الغائب');
add('marketing', `/help/${probe}`, 'apps/marketing/app/help/[slug]/page.tsx', 'NOT_FOUND_HANDLING', 'CMS فارغ؛ المتوقع 404 صريحة');
add('marketing', `/blog/${probe}`, 'apps/marketing/app/blog/[slug]/page.tsx', 'NOT_FOUND_HANDLING', 'CMS فارغ؛ المتوقع 404 صريحة');
add('platform-admin', `/tickets/${probe}`, 'apps/platform-admin/app/tickets/[id]/page.tsx', 'NOT_FOUND_HANDLING', 'لا تذاكر؛ اختبار معالجة المعرف الغائب');
add('platform-admin', `/invoices/${probe}/print`, 'apps/platform-admin/app/invoices/[id]/print/page.tsx', 'NOT_FOUND_HANDLING', 'لا فواتير منصة؛ اختبار معالجة المعرف الغائب');
add('customer-portal', `/portal/invoices/${probe}`, 'apps/customer-portal/app/portal/invoices/[id]/page.tsx', 'NOT_FOUND_HANDLING', 'لا فواتير للعميل R5؛ المتوقع رسالة عدم وجود لا بيانات');
add('customer-portal', `/portal/invoices/${probe}/pay`, 'apps/customer-portal/app/portal/invoices/[id]/pay/page.tsx', 'NOT_FOUND_HANDLING', 'لا فواتير؛ لا يُختبر دفع حقيقي');

fs.writeFileSync(path.join(evidence, 'round6-planned-routes.json'), JSON.stringify(routes, null, 2) + '\n');
console.log(JSON.stringify({ total: routes.length, byApp: Object.fromEntries(Object.entries(counters)) }));
