/* Seeded R4 rep, separate session; authenticated GETs only. No financial writes. */
const {open,before,snap,evidence,root}=require('./browser.cjs');
const fs=require('node:fs');const path=require('node:path');
(async()=>{
 const {loadEnvFiles}=await import(path.join(root,'scripts/dotenv.mjs'));loadEnvFiles(root);
 if(process.env.DEMO_TENANT_CODE!=='audit-readonly-r4')throw Error('Wrong fixture');
 const {b,p}=await open('r4-rep-state.json',{readOnly:true});
 const log=[];
 try{
  await p.goto('http://127.0.0.1:3005/rep',{waitUntil:'networkidle'});
  await p.getByLabel(/^رمز المنشأة/).fill('audit-readonly-r4');
  await p.getByLabel(/^البريد الإلكتروني/).fill(process.env.DEMO_REP_EMAIL);
  await p.locator('input[type=password]').fill(process.env.DEMO_REP_PASSWORD);
  await before(p,'00-discovery/R4-LOGIN-rep');
  console.log('READY_FOR_IMAGE_CHECK R4-LOGIN-rep');
  const flag=path.join(root,'.scratch/browser/R4-LOGIN-rep.approved');
  if(fs.existsSync(flag))throw Error('Stale approval');
  await new Promise(resolve=>{const watcher=fs.watch(path.dirname(flag),()=>{if(fs.existsSync(flag)){watcher.close();resolve()}})});
  await p.getByRole('button',{name:'تسجيل الدخول',exact:true}).click();
  await p.waitForTimeout(2200);
  if(await p.locator('input[type=password]').count())throw Error('Rep login failed');
  await snap(p,'00-discovery/R4-LOGIN-rep-after','after-login-new-r4-rep');
  await p.goto('http://127.0.0.1:3005/rep',{waitUntil:'networkidle'});await p.waitForTimeout(600);
  await snap(p,'00-discovery/R4-REP-001','read-only-rep-workspace');
  fs.writeFileSync(path.join(evidence,'00-discovery/R4-REP-001-text.txt'),await p.locator('body').innerText());
  for(const endpoint of ['/van-sales/me','/van-sales/dashboard','/van-sales/salesmen','/van-sales/reports']){
   const result=await p.evaluate(async endpoint=>{
    const token=localStorage.getItem('erp.admin.access');if(!token)throw Error('No rep access token');
    const response=await fetch('/api/v1'+endpoint,{method:'GET',headers:{authorization:'Bearer '+token}});
    return{endpoint,status:response.status,body:await response.json()};
   },endpoint);
   log.push(result);console.log(endpoint,result.status);
  }
  const me=log[0];const correct=me.status===200&&me.body.data?.isRep===true&&log.slice(1).every(r=>r.status===403&&r.body.code==='VAN_SALES_COMPANY_SCOPE_REQUIRED');
  fs.writeFileSync(path.join(evidence,'00-discovery/round4-rep-read-scope.json'),JSON.stringify({at:new Date().toISOString(),fixture:'audit_readonly_r4',principal:'seeded rep (not owner)',expected:'own workspace 200/isRep=true; company aggregates 403/VAN_SALES_COMPANY_SCOPE_REQUIRED',pass:correct,results:log},null,2)+'\n');
  if(!correct)throw Error('Rep scope expectations failed; inspect captured actual results');
 }finally{await b.close()}
})().catch(e=>{console.error(e.message);process.exit(1)});
