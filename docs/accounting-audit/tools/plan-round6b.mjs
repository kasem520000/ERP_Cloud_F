// Round 6b: the remaining parameterised screens. One of them has a real document;
// the rest test the not-found path, which the brief lists as an acceptance case.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

import { loadEnvFiles } from '../../../scripts/dotenv.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
loadEnvFiles(root);
const db = new URL(process.env.DATABASE_MIGRATOR_URL);
if (db.pathname !== '/audit_readonly_r4' || db.hostname !== '127.0.0.1') throw new Error('Wrong fixture');
const require = createRequire(path.join(root, 'packages/database/package.json'));
const client = new (require('pg').Client)({ connectionString: db.toString(), options: '-c default_transaction_read_only=on' });
await client.connect();
let dashboard;
try {
  dashboard = (await client.query('SELECT id, name FROM dashboards ORDER BY created_at LIMIT 1')).rows[0];
} finally { await client.end(); }
if (!dashboard?.id) throw new Error('No real dashboard to test with');

const file = path.join(root, 'docs/accounting-audit/evidence/00-discovery/round6-planned-routes.json');
const plan = JSON.parse(fs.readFileSync(file, 'utf8'));
const probe = '00000000-0000-4000-8000-000000000000';
const count = (app) => plan.filter((row) => row.app === app).length;
const prefix = { staff: 'S', marketing: 'M', 'platform-admin': 'A', 'customer-portal': 'P' };
const ports = { staff: 3001, marketing: 3002, 'platform-admin': 3003, 'customer-portal': 3004 };
function add(app, route, source, kind, purpose) {
  if (plan.some((row) => row.route === route)) return;
  plan.push({ id: `RO6-${prefix[app]}${String(count(app) + 1).padStart(3, '0')}`, app, port: ports[app], route, source, kind, purpose });
}

add('staff', `/dashboards/${dashboard.id}`, 'apps/staff/app/dashboards/[id]/page.tsx', 'KNOWN_PARAM_READ_ONLY', `لوحة حقيقية موجودة في القاعدة: «${dashboard.name}»`);
add('staff', '/s/settings/prep-device', 'apps/staff/app/s/[...slug]/page.tsx', 'KNOWN_PARAM_READ_ONLY', 'مسار حقيقي من شجرة التنقل حالته planned؛ يختبر صفحة الهيكل');
for (const [route, source] of [
  [`/dashboards/${probe}`, 'apps/staff/app/dashboards/[id]/page.tsx'],
  [`/crm/deals/${probe}`, 'apps/staff/app/crm/deals/[id]/page.tsx'],
  [`/esign/${probe}`, 'apps/staff/app/esign/[token]/page.tsx'],
  [`/hrm/payroll/${probe}`, 'apps/staff/app/hrm/payroll/[id]/page.tsx'],
  [`/hrm/payroll/${probe}/wps`, 'apps/staff/app/hrm/payroll/[id]/wps/page.tsx'],
  [`/print/invoice/${probe}`, 'apps/staff/app/print/[doc]/[id]/page.tsx'],
  [`/projects/${probe}`, 'apps/staff/app/projects/[id]/page.tsx'],
  [`/projects/${probe}/cost`, 'apps/staff/app/projects/[id]/cost/page.tsx'],
  [`/projects/${probe}/gantt`, 'apps/staff/app/projects/[id]/gantt/page.tsx'],
  [`/projects/${probe}/time`, 'apps/staff/app/projects/[id]/time/page.tsx'],
  [`/projects/${probe}/tasks/${probe}`, 'apps/staff/app/projects/[id]/tasks/[taskId]/page.tsx'],
  [`/projects/tasks/${probe}`, 'apps/staff/app/projects/tasks/[taskId]/page.tsx'],
  [`/sales/quotations/${probe}/esign`, 'apps/staff/app/sales/quotations/[id]/esign/page.tsx'],
]) add('staff', route, source, 'NOT_FOUND_HANDLING', 'معرف غير موجود؛ المقصود حالة الفشل وحدها');

for (const [route, source] of [
  [`/legal/${probe}`, 'apps/marketing/app/legal/[slug]/page.tsx'],
  [`/en/legal/${probe}`, 'apps/marketing/app/en/legal/[slug]/page.tsx'],
  [`/changelog/${probe}`, 'apps/marketing/app/changelog/[slug]/page.tsx'],
  [`/cases/${probe}`, 'apps/marketing/app/cases/[slug]/page.tsx'],
  [`/en/cases/${probe}`, 'apps/marketing/app/en/cases/[slug]/page.tsx'],
  [`/en/blog/${probe}`, 'apps/marketing/app/en/blog/[slug]/page.tsx'],
  [`/en/help/${probe}`, 'apps/marketing/app/en/help/[slug]/page.tsx'],
]) add('marketing', route, source, 'NOT_FOUND_HANDLING', 'محتوى غير منشور؛ المتوقع404 صريحة');

fs.writeFileSync(file, JSON.stringify(plan, null, 2) + '\n');
console.log(JSON.stringify({ total: plan.length, added: plan.length - 44, dashboard: dashboard.name }));
