/* Read-only authorization boundary checks across the three identities. No writes, no invites. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnvFiles } from '../../../scripts/dotenv.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../..');
loadEnvFiles(root);
const base='http://127.0.0.1:3000/api/v1';
const evidence=path.join(root,'docs/accounting-audit/evidence/00-discovery');
const state=JSON.parse(fs.readFileSync(path.join(root,'.scratch/browser/r5-portal-state.json'),'utf8'));
const token=n=>state.cookies.find(c=>c.name===n)?.value;
const portalToken=token('erp_access_token');
if(!portalToken)throw Error('No portal token in local session state');
async function call(label,method,pathname,{bearer,body}={}){
 const res=await fetch(base+pathname,{method,headers:{...(bearer?{authorization:`Bearer ${bearer}`}:{}),...(body?{'content-type':'application/json'}:{})},...(body?{body:JSON.stringify(body)}:{})});
 const text=await res.text();let json=null;try{json=JSON.parse(text)}catch{}
 const data=json?.data??json;
 return {label,method,path:pathname,status:res.status,detail:json?.detail??json?.code??null,summary:method==='GET'?{rows:Array.isArray(data)?data.length:data&&typeof data==='object'?Object.keys(data).slice(0,6):null}:null};
}
async function login(email,password,tenantCode){
 const res=await fetch(base+'/auth/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email,password,tenantCode})});
 const json=await res.json();const data=json.data??json;
 const body={status:res.status,ok:res.ok,firstMembership:data?.memberships?.[0]?.kind??null,platformAdmin:data?.user?.isPlatformAdmin??null};
 if(!res.ok)throw Error('Login failed for '+email+' status '+res.status);
 return {token:data.accessToken??data.access_token,body};
}
const out=[];
out.push(await call('anonymous invoices','GET','/sales/invoices'));
out.push(await call('portal me','GET','/portal/me',{bearer:portalToken}));
out.push(await call('portal invoices','GET','/portal/invoices',{bearer:portalToken}));
out.push(await call('portal statement','GET','/portal/statement',{bearer:portalToken}));
out.push(await call('portal payments','GET','/portal/payments',{bearer:portalToken}));
out.push(await call('portal foreign invoice','GET','/portal/invoices/01a16000-0000-7000-8000-000000000000',{bearer:portalToken}));
for(const p of ['/sales/invoices','/purchases/invoices','/tenants','/parties','/platform/overview','/platform/backups'])out.push(await call('portal→'+p,'GET',p,{bearer:portalToken}));
const owner=await login(process.env.DEMO_OWNER_EMAIL,process.env.DEMO_OWNER_PASSWORD,'audit-readonly-r4');
out.push({label:'owner login shape',status:owner.body.status,firstMembership:owner.body.firstMembership,platformAdmin:owner.body.platformAdmin});
out.push(await call('owner→/sales/invoices','GET','/sales/invoices',{bearer:owner.token}));
for(const p of ['/platform/overview','/platform/backups','/platform/tenants'])out.push(await call('owner→'+p,'GET',p,{bearer:owner.token}));
const operator=await login(process.env.PLATFORM_ADMIN_EMAIL,process.env.PLATFORM_ADMIN_PASSWORD,'platform');
out.push({label:'operator login shape',status:operator.body.status,firstMembership:operator.body.firstMembership,platformAdmin:operator.body.platformAdmin});
out.push(await call('operator→/platform/overview','GET','/platform/overview',{bearer:operator.token}));
out.push(await call('operator→/platform/tenants','GET','/platform/tenants',{bearer:operator.token}));
out.push(await call('operator→/sales/invoices','GET','/sales/invoices',{bearer:operator.token}));
const summary={at:new Date().toISOString(),note:'GET only; no role, setting, invoice, or password change',out};
fs.writeFileSync(path.join(evidence,'round5-access-boundaries.json'),JSON.stringify(summary,null,2)+'\n');
console.log(out.map(r=>`${r.label}: ${r.status}${r.detail?' '+String(r.detail).slice(0,90):''}`).join('\n'));
