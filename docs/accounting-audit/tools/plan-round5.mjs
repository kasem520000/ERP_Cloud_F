// Read-only discovery of known local identities and published public routes.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

import { loadEnvFiles } from '../../../scripts/dotenv.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../..');
loadEnvFiles(root);
const db=new URL(process.env.DATABASE_MIGRATOR_URL);
if(db.pathname!=='/audit_readonly_r4'||db.hostname!=='127.0.0.1')throw Error('Wrong fixture');
const require=createRequire(path.join(root,'packages/database/package.json'));const {Client}=require('pg');
const client=new Client({connectionString:db.toString(),options:'-c default_transaction_read_only=on'});
await client.connect();
const known={};
try{
 known.tenant=(await client.query('SELECT id,code FROM tenants WHERE code=$1',['audit-readonly-r4'])).rows[0];
 known.operator=(await client.query('SELECT id,email FROM users WHERE email=$1',[process.env.PLATFORM_ADMIN_EMAIL])).rows[0];
}finally{await client.end()}
const e=path.join(root,'docs/accounting-audit/evidence/00-discovery');
fs.writeFileSync(path.join(e,'round5-known-identities.json'),JSON.stringify(known,null,2)+'\n');
for(const endpoint of ['/public/sitemap','/public/posts','/public/help']){
 const res=await fetch('http://127.0.0.1:3000/api/v1'+endpoint);const body=await res.json();
 fs.writeFileSync(path.join(e,'round5-'+endpoint.split('/').at(-1)+'-discovery.json'),JSON.stringify({endpoint,status:res.status,body},null,2)+'\n');
}
const routes=[];let counts={};
function add(app,port,route,source,kind='READ_ONLY_OPEN'){counts[app]=(counts[app]??0)+1;routes.push({id:'RO5-'+({'platform-admin':'A',marketing:'M','customer-portal':'P'}[app])+String(counts[app]).padStart(3,'0'),app,port,route,source,kind})}
function files(app){return fs.readdirSync(path.join(root,'apps',app,'app'),{recursive:true}).filter(f=>f.endsWith('page.tsx')).sort()}
for(const app of ['platform-admin','marketing','customer-portal']){
 const port={'platform-admin':3003,marketing:3002,'customer-portal':3004}[app];
 for(const f of files(app)){
  let route='/'+f.split(path.sep).slice(0,-1).join('/');let kind='READ_ONLY_OPEN';
  if(route.includes('[')){
   if(app==='platform-admin'&&route==='/tenants/[id]')route='/tenants/'+known.tenant.id;
   else if(app==='platform-admin'&&route==='/users/[id]')route='/users/'+known.operator.id;
   else if(app==='marketing'&&route==='/industries/[slug]')route='/industries/tailoring';
   else if(app==='marketing'&&route==='/not-found-view/[locale]'){route='/not-found-view/ar';kind='EXPLICIT_NOT_FOUND_VIEW'}
   else continue;
  }
  add(app,port,route,'apps/'+app+'/app/'+f,kind);
 }
}
fs.writeFileSync(path.join(e,'round5-planned-routes.json'),JSON.stringify(routes,null,2)+'\n');
console.log(JSON.stringify({knownTenant:known.tenant.code,plannedRoutes:routes.length,byApp:counts}));
