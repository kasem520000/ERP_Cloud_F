/* R5 non-financial UI setup only: one test customer, portal grant and own password.
 * Financial writes are blocked even in the owner context. No raw auth responses in evidence.
 */
const {open,snap,before,evidence,root}=require('./browser.cjs');
const fs=require('node:fs');const path=require('node:path');const crypto=require('node:crypto');
const EMAIL='audit-portal-r5@example.test';
async function approve(p,id){await before(p,'00-discovery/'+id);const flag=path.join(root,'.scratch/browser',id+'.approved');if(fs.existsSync(flag))throw Error('Stale approval');console.log('READY_FOR_IMAGE_CHECK '+id);await new Promise(resolve=>{const w=fs.watch(path.dirname(flag),()=>{if(fs.existsSync(flag)){w.close();resolve()}})})}
async function go(p,port,route){await p.goto(`http://127.0.0.1:${port}${route}`,{waitUntil:'networkidle',timeout:45000});await p.waitForTimeout(700)}
function save(name,body){fs.writeFileSync(path.join(evidence,'00-discovery/'+name+'.json'),JSON.stringify(body,null,2)+'\n')}
async function controlled(name,allowed){
 const ctx=await open(name,{readOnly:false});
 await ctx.context.route('**/*',route=>{
  const r=route.request(),u=new URL(r.url());
  if(!['GET','HEAD','OPTIONS'].includes(r.method())&&!/^\/api\/v1\/auth\/(login|refresh)$/.test(u.pathname)&&!allowed(r,u)){
   fs.appendFileSync(path.join(evidence,'round5-write-blocks.ndjson'),JSON.stringify({at:new Date().toISOString(),method:r.method(),url:r.url()})+'\n');return route.abort('blockedbyclient');
  }return route.fallback();
 });return ctx;
}
(async()=>{
 const {loadEnvFiles}=await import(path.join(root,'scripts/dotenv.mjs'));loadEnvFiles(root);
 if(process.env.DEMO_TENANT_CODE!=='audit-readonly-r4'||process.env.MAIL_TRANSPORT!=='console'||process.env.WORKER!=='0')throw Error('Wrong fixture or unsafe mail/worker');
 let stage='customer',partyId='';
 const owner=await controlled('r4-staff-state.json',(r,u)=>{
  if(r.method()!=='POST')return false;const body=r.postDataJSON();
  if(stage==='customer'&&u.pathname==='/api/v1/parties')return body.code==='AUDIT-R5-PORTAL'&&body.kind==='customer'&&body.name==='AUDIT-TEST-2026-R5 عميل بوابة';
  return stage==='grant'&&u.pathname===`/api/v1/parties/${partyId}/portal-access`&&body.email===EMAIL;
 });
 let credentials;
 try{
  const p=owner.p;await go(p,3001,'/sales/customers');
  if(await p.locator('input[type=password]').count()){
   await p.getByLabel(/^رمز المنشأة/).fill('audit-readonly-r4');await p.getByLabel(/^البريد الإلكتروني/).fill(process.env.DEMO_OWNER_EMAIL);await p.locator('input[type=password]').fill(process.env.DEMO_OWNER_PASSWORD);await approve(p,'R5-OWNER-LOGIN');await p.getByRole('button',{name:'دخول',exact:true}).click();await p.waitForTimeout(1700);await snap(p,'00-discovery/R5-OWNER-LOGIN-after','after-login');await go(p,3001,'/sales/customers');
  }
  await p.getByRole('button',{name:'عميل جديد',exact:true}).click();
  await p.getByLabel(/^الرمز(?: \*)?$/).fill('AUDIT-R5-PORTAL');
  await p.getByLabel(/^الاسم(?: \*)?$/).fill('AUDIT-TEST-2026-R5 عميل بوابة');
  await approve(p,'R5-MD-001');
  const created=p.waitForResponse(r=>r.request().method()==='POST'&&new URL(r.url()).pathname==='/api/v1/parties');
  await p.getByRole('button',{name:'حفظ',exact:true}).click();const cr=await created;const raw=await cr.json();save('R5-MD-001-response',{at:new Date().toISOString(),status:cr.status(),body:raw});if(cr.status()!==201)throw Error('Customer creation failed');partyId=(raw.data??raw).id;
  await p.waitForTimeout(650);await snap(p,'00-discovery/R5-MD-001-after','after-non-financial-save');
  stage='grant';await go(p,3001,'/sales/portal-access');
  await p.getByLabel(/^العميل/).selectOption(partyId);await p.getByLabel(/^البريد الإلكتروني للدخول/).fill(EMAIL);await p.getByLabel(/^اسم المستخدم/).fill('AUDIT-TEST-2026-R5 مستخدم بوابة');
  await approve(p,'R5-ACCESS-001');
  const granted=p.waitForResponse(r=>r.request().method()==='POST'&&new URL(r.url()).pathname===`/api/v1/parties/${partyId}/portal-access`);
  await p.getByRole('button',{name:'إنشاء وصول',exact:true}).click();const gr=await granted;const body=await gr.json();const data=body.data??body;
  if(gr.status()!==201||!data.temporaryPassword)throw Error('Portal grant did not issue a temporary password');
  credentials={email:EMAIL,partyId,temporaryPassword:data.temporaryPassword,nextPassword:'Aa9!'+crypto.randomBytes(20).toString('base64url')};
  fs.writeFileSync(path.join(root,'.scratch/browser/r5-portal-private.json'),JSON.stringify(credentials),{mode:0o600});
  save('R5-ACCESS-001-response',{at:new Date().toISOString(),status:gr.status(),body:{...data,temporaryPassword:'[REDACTED: transient credential stored only in ignored private file]'}});
  await p.getByRole('button',{name:'إخفاء',exact:true}).click();
  if((await p.locator('body').innerText()).includes(credentials.temporaryPassword))throw Error('Secret still visible; refusing screenshot');
  await snap(p,'00-discovery/R5-ACCESS-001-after','after-non-financial-save-secret-hidden-with-ui');
  stage='done';
 }finally{await owner.b.close()}
 const portal=await controlled('r5-portal-state.json',(r,u)=>r.method()==='POST'&&u.pathname==='/api/v1/auth/change-password');
 try{
  const p=portal.p;
  for(const [index,password]of [credentials.temporaryPassword,credentials.nextPassword].entries()){
   await go(p,3004,'/auth/login');await p.getByLabel('tenant',{exact:true}).fill('audit-readonly-r4');await p.getByLabel('email',{exact:true}).fill(EMAIL);await p.getByLabel('password',{exact:true}).fill(password);
   const id='R5-PORTAL-LOGIN'+(index+1);await approve(p,id);
   const response=p.waitForResponse(r=>r.request().method()==='POST'&&new URL(r.url()).pathname==='/api/v1/auth/login');await p.getByRole('button',{name:'تسجيل الدخول',exact:true}).click();const res=await response;
   if(res.status()!==200)throw Error('Portal authentication failed');await p.waitForTimeout(850);await snap(p,'00-discovery/'+id+'-after','after-portal-login');
   save(id+'-result',{at:new Date().toISOString(),status:res.status(),actual:p.url(),temporary:index===0});
   if(index===0){
    if(new URL(p.url()).pathname!=='/auth/change-password')throw Error('Temporary password did not require change');
    await p.locator('input[name=current]').fill(credentials.temporaryPassword);await p.locator('input[name=next]').fill(credentials.nextPassword);await p.locator('input[name=confirm]').fill(credentials.nextPassword);
    await approve(p,'R5-PORTAL-PASSWORD');
    const changed=p.waitForResponse(r=>r.request().method()==='POST'&&new URL(r.url()).pathname==='/api/v1/auth/change-password');await p.getByRole('button',{name:'حفظ كلمة المرور',exact:true}).click();const result=await changed;
    save('R5-PORTAL-PASSWORD-result',{at:new Date().toISOString(),status:result.status()});if(!result.ok())throw Error('Password change failed');await p.waitForTimeout(250);await snap(p,'00-discovery/R5-PORTAL-PASSWORD-after','after-own-password-change');await p.waitForTimeout(1700);
   }
  }
  if(new URL(p.url()).pathname!=='/portal')throw Error('Final portal login did not reach dashboard');console.log('PORTAL_SETUP_COMPLETE');
 }finally{await portal.b.close()}
})().catch(e=>{console.error(e.message);process.exit(1)});
