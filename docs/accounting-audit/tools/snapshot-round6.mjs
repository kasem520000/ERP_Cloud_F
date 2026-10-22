// Read-only inspection of the NEW diagnostic fixture. Never accepts the historical DB.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadEnvFiles } from '../../../scripts/dotenv.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
loadEnvFiles(root);
const url = new URL(process.env.DATABASE_MIGRATOR_URL);
if (url.pathname !== '/audit_readonly_r4' || !['127.0.0.1', 'localhost'].includes(url.hostname)) {
  throw new Error('Refusing any database other than the local round-five continuation of the R4 diagnostic fixture');
}
const phase = process.argv[2];
if (!['before', 'after'].includes(phase)) throw new Error('Expected before or after');
const dest = path.join(root, `docs/accounting-audit/evidence/00-discovery/round6-db-${phase}.json`);
if (fs.existsSync(dest)) throw new Error('Refusing to overwrite evidence');
const require = createRequire(path.join(root, 'packages/database/package.json'));
const { Client } = require('pg');
const client = new Client({ connectionString: url.toString(), options: '-c default_transaction_read_only=on' });
await client.connect();
try {
  const rows = (await client.query(`SELECT json_build_object(
    'database',current_database(), 'databaseReadOnly',current_setting('default_transaction_read_only'),
    'tenants',(SELECT json_agg(json_build_object('id',id,'code',code,'name',name)) FROM tenants),
    'roles',(SELECT json_agg(json_build_object('name',rolname,'superuser',rolsuper,'bypassrls',rolbypassrls)) FROM pg_roles WHERE rolname IN ('erp_api','erp_migrator')),
    'users',(SELECT count(*) FROM users), 'refreshTokens',(SELECT count(*) FROM refresh_tokens),
    'parties',(SELECT count(*) FROM parties), 'portalAccounts',(SELECT count(*) FROM portal_accounts),
    'sales',(SELECT count(*) FROM sales_invoices), 'purchases',(SELECT count(*) FROM purchase_invoices),
    'journals',(SELECT count(*) FROM journal_entries), 'movements',(SELECT count(*) FROM inventory_transactions),
    'stock',(SELECT count(*) FROM stock_balances),
    'einvoiceSettings',(SELECT count(*) FROM einvoice_settings),
    'webhooks',(SELECT count(*) FROM webhook_endpoints)
  ) AS state`)).rows;
  const result = { at: new Date().toISOString(), fixture: 'AUDIT-TEST-2026-R4',
    apiEnvironment: process.env.NODE_ENV, worker: process.env.WORKER,
    mailTransport: process.env.MAIL_TRANSPORT, openingSeedEnabled: process.env.DEMO_OPENING_ENTRY,
    rows };
  fs.writeFileSync(dest, JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify(result, null, 2));
} finally { await client.end(); }
