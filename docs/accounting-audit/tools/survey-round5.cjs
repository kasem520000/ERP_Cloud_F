/* Round-five read-only survey of the remaining UI surfaces.
 * Usage: node survey-round5.cjs marketing|portal|platform
 * Only GET/HEAD/while authenticated; financial writes impossible by policy.
 */
const {open,snap,evidence,root}=require('./browser.cjs');
const fs=require('node:fs');const path=require('node:path');
const {loadEnvFiles}=require(path.join(root,'scripts/dotenv.mjs'));loadEnvFiles(root);
const mode=process.argv[2];
const configs={
 marketing:{app:'marketing',port:3002,state:'r5-marketing-state.json',group:'marketing'},
 portal:{app:'customer-portal',port:3004,state:'r5-portal-state.json',group:'portal'},
 platform:{app:'platform-admin',port:3003,state:'r5-console-state.json',group:'console'},
}[mode];
if(!configs)throw new Error('Unknown mode');
const resultsFile=path.join(evidence,'00-discovery/round5-'+mode+'-results.json');
const results=fs.existsSync(resultsFile)?JSON.parse(fs.readFileSync(resultsFile)):[];
const done=new Set(results.map(r=>r.id));
const routes=JSON.parse(fs.readFileSync(path.join(evidence,'00-discovery/round5-planned-routes.json'))).filter(r=>r.app===configs.app);
(async()=>{
 const {b,p}=await open(configs.state,{readOnly:true});
 const save=()=>fs.writeFileSync(resultsFile,JSON.stringify(results,null,2)+'\n');
 try{
  await p.goto(`http://127.0.0.1:${configs.port}/`,{waitUntil:'networkidle',timeout:45000}).catch(()=>{});
  await p.waitForTimeout(600);
  if(mode==='platform'&&(await p.locator('input[type=password]').count())){
   await p.getByLabel(/^رمز المنشأة/).fill('platform');
   await p.getByLabel(/^البريد الإلكتروني/).fill(process.env.PLATFORM_ADMIN_EMAIL);
   await p.locator('input[type=password]').first().fill(process.env.PLATFORM_ADMIN_PASSWORD);
   const shot=await snap(p,'50-r5-console/R5-CONSOLE-LOGIN2-before-login','before-login-filled-verified');
   console.log('LOGIN_CARD_SHOWN_FILLED '+shot);
   const flag=path.join(root,'.scratch/browser/R5-CONSOLE-LOGIN2.approved');if(fs.existsSync(flag))throw Error('Stale approval');
   console.log('READY_FOR_IMAGE_CHECK R5-CONSOLE-LOGIN2');
   await new Promise(resolve=>{const w=fs.watch(path.dirname(flag),()=>{if(fs.existsSync(flag)){w.close();resolve()}}) });
   const login=p.waitForResponse(r=>r.request().method()==='POST'&&new URL(r.url()).pathname==='/api/v1/auth/login');
   await p.getByRole('button',{name:'دخول',exact:true}).click();const res=await login;
   fs.writeFileSync(path.join(evidence,'00-discovery/R5-CONSOLE-LOGIN1-result.json'),JSON.stringify({at:new Date().toISOString(),status:res.status()},null,2)+'\n');
   if(res.status()!==200)throw Error('Console login failed');
   await p.waitForTimeout(1200);await snap(p,'50-r5-console/R5-CONSOLE-LOGIN1-after','after-login');
  }
  if(mode==='portal'&&!await p.evaluate(()=>document.cookie.includes('erp_access_token'))){
   const priv=JSON.parse(fs.readFileSync(path.join(root,'.scratch/browser/r5-portal-private.json')));
   await p.goto(`http://127.0.0.1:${configs.port}/auth/login`,{waitUntil:'networkidle',timeout:45000});
   await p.getByLabel('tenant',{exact:true}).fill('audit-readonly-r4');
   await p.getByLabel('email',{exact:true}).fill(priv.email);
   await p.getByLabel('password',{exact:true}).fill(priv.nextPassword);
   await snap(p,'50-r5-portal/R5-PORTAL-REL2-before-login','before-login-filled-verified');
   const flag=path.join(root,'.scratch/browser/R5-PORTAL-REL2.approved');if(fs.existsSync(flag))throw Error('Stale approval');
   console.log('READY_FOR_IMAGE_CHECK R5-PORTAL-REL2');
   await new Promise(resolve=>{const w=fs.watch(path.dirname(flag),()=>{if(fs.existsSync(flag)){w.close();resolve()}}) });
   const login=p.waitForResponse(r=>r.request().method()==='POST'&&new URL(r.url()).pathname==='/api/v1/auth/login');
   await p.getByRole('button',{name:'تسجيل الدخول',exact:true}).click();const res=await login;
   fs.writeFileSync(path.join(evidence,'00-discovery/R5-PORTAL-REL2-result.json'),JSON.stringify({at:new Date().toISOString(),status:res.status(),actual:p.url()},null,2)+'\n');
   if(res.status()!==200)throw Error('Portal re-authentication failed');
   await p.waitForTimeout(900);await snap(p,'50-r5-portal/R5-PORTAL-REL2-after','after-portal-login');
   if(new URL(p.url()).pathname!=='/portal')throw Error('Portal session not established');
  }
  for(const route of routes){
   /// An unauthenticated observation is preserved; after login the same route is visited again under a distinct id.
   const prior=results.find(r=>r.id===route.id);
   const id=prior&&prior.finalUrl.endsWith('/auth/login')?route.id+'AUTH':route.id;
   if(done.has(id)){console.log('SKIP',id);continue}
   let navStatus=null,navError=null;
   const responsePromise=p.waitForResponse(r=>r.url().includes(route.route)||r.request().resourceType()==='document',{timeout:20000}).catch(()=>null);
   try{const response=await p.goto(`http://127.0.0.1:${configs.port}${route.route}`,{waitUntil:'networkidle',timeout:45000});navStatus=response?response.status():null}catch(error){navError=error.message.split('\n')[0]}
   const waited=await responsePromise;const finalUrl=p.url();
   await p.waitForTimeout(850);
   const bodyText=(await p.locator('body').innerText().catch(()=>'' )).slice(0,9000);
   const headings=await p.locator('h1,h2').allTextContents().catch(()=>[]);
   const row={...route,id,at:new Date().toISOString(),navStatus:navStatus??(waited?waited.status():null),finalUrl,
    redirected:new URL(finalUrl).pathname!==route.route,headings:headings.slice(0,8),
    loginCard:(await p.locator('input[type=password]').count())>0,
    errorBoundary:/Application error|حدث خطأ|Internal Server Error/i.test(bodyText),
    denial:/403|ممنوع|غير مصرح|لا تملك صلاحية|ليست لديك صلاحية|صلاحية/.test(bodyText),
    empty:/لا يوجد|لا توجد|فارغ|لم يتم العثور/.test(bodyText),
    textLength:bodyText.length,bodyText:bodyText.slice(0,4000),navError};
   try{await snap(p,'50-r5-'+configs.group+'/'+id,'screen-'+configs.group)}catch(error){row.snapshotError=error.message}
   results.push(row);done.add(id);save();console.log(id,route.route,row.navStatus,row.redirected?'REDIRECT':'',row.loginCard?'LOGIN':'',row.errorBoundary?'ERROR':'',row.denial?'DENIAL_TEXT':'');}
 }finally{await b.close();save()}
})().catch(e=>{console.error(e.message);process.exit(1)});
