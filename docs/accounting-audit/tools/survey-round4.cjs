/* New R4 fixture only; opening coverage, NOT financial acceptance.
 * Login pauses after the verified PNG so the agent can inspect the actual image.
 * Continue by writing the corresponding ignored .scratch/browser/<ID>.approved file.
 */
const {open,snap,before,evidence,root}=require('./browser.cjs');
const fs=require('node:fs');const path=require('node:path');
const planned=JSON.parse(fs.readFileSync(path.join(evidence,'00-discovery/round4-planned-routes.json'),'utf8'));
const resultPath=path.join(evidence,'00-discovery/read-only-round4-results.json');
const results=fs.existsSync(resultPath)?JSON.parse(fs.readFileSync(resultPath,'utf8')):[];
const approved=(id)=>new Promise(resolve=>{
 const file=path.join(root,'.scratch/browser',id+'.approved');
 if(fs.existsSync(file))throw Error('Stale approval; use a new login ID');
 const watcher=fs.watch(path.dirname(file),()=>{if(fs.existsSync(file)){watcher.close();resolve()}});
});
async function go(p,port,route){
 await p.goto(`http://127.0.0.1:${port}${route}`,{waitUntil:'networkidle',timeout:45000});
 await p.waitForTimeout(1000);
}
(async()=>{
 const {loadEnvFiles}=await import(path.join(root,'scripts/dotenv.mjs'));loadEnvFiles(root);
 if(process.env.DEMO_TENANT_CODE!=='audit-readonly-r4')throw Error('Wrong diagnostic tenant');
 for(const app of ['staff','bakery']){
  const {b,p}=await open('r4-'+app+'-state.json',{readOnly:true});
  let apiErrors=[],pageErrors=[];let pagePending=[];
  p.on('pageerror',e=>pageErrors.push(e.message));
  p.on('response',r=>{
   if(r.url().includes('/api/')&&r.status()>=400){
    const entry={url:r.url(),status:r.status(),method:r.request().method()};apiErrors.push(entry);
    pagePending.push(r.json().then(body=>{entry.code=body.code??body.error?.code;entry.message=body.message??body.error?.message}).catch(()=>{}));
   }
  });
  try{
   const port=app==='staff'?3001:3005;await go(p,port,'/');
   if(await p.locator('input[type=password]').count()){
    await p.getByLabel(/^رمز المنشأة/).fill('audit-readonly-r4');
    await p.getByLabel(/^البريد الإلكتروني/).fill(process.env.DEMO_OWNER_EMAIL);
    await p.locator('input[type=password]').fill(process.env.DEMO_OWNER_PASSWORD);
    const id='R4-LOGIN-'+app;
    await before(p,'00-discovery/'+id);console.log('READY_FOR_IMAGE_CHECK '+id);
    await approved(id);
    await p.getByRole('button',{name:/^(دخول|تسجيل الدخول)$/}).click();
    await p.waitForTimeout(2200);
    if(await p.locator('input[type=password]').count())throw Error('Login did not reach authenticated content');
    await snap(p,'00-discovery/'+id+'-after','after-login-new-r4-fixture');
    console.log('AUTHENTICATED '+app);
   }
   for(const test of planned.filter(t=>t.app===app)){
    if(results.some(r=>r.id===test.id))continue;
    apiErrors=[];pageErrors=[];pagePending=[];
    try{
     await go(p,port,test.route);
     await p.waitForFunction(()=>!document.body.innerText.includes('جارٍ التحقق من الجلسة'),{},{timeout:15000});
     await Promise.allSettled(pagePending);
     const text=await p.locator('body').innerText();
     const mainText=await p.locator('main').first().innerText().catch(()=>text);
     const login=await p.locator('input[type=password]').count();
     const heading=await p.locator('h1').allTextContents();
     const loading=/جارٍ التحميل|جاري التحميل/.test(mainText.slice(-1800));
     const denial=/ليس لديك صلاحية|لا تملك صلاحية|ليس لديك إذن|غير مصرح|غير مسموح/.test(mainText);
     const crash=/Application error|Internal Server Error|This page could not be found/.test(mainText);
     const status=login?'AUTH_BLOCKED':loading?'LOADING_NOT_VERIFIED':denial?'ACCESS_DENIED_NOT_FUNCTIONALLY_TESTED':crash||apiErrors.length||pageErrors.length?'OPENED_WITH_ERROR_NOT_ACCEPTED':'OPENED_ONLY_NOT_FULLY_TESTED';
     fs.writeFileSync(path.join(evidence,'00-discovery',test.id+'-text.txt'),text);
     await snap(p,'00-discovery/'+test.id,'read-only-open-new-r4-fixture');
     results.push({...test,actual:p.url(),fixture:'audit_readonly_r4',at:new Date().toISOString(),status,heading,apiErrors:[...apiErrors],pageErrors:[...pageErrors],textExcerpt:mainText.slice(-700)});
     console.log(test.id,test.app,test.route,status);
    }catch(e){results.push({...test,at:new Date().toISOString(),fixture:'audit_readonly_r4',status:'BLOCKED',error:e.message});console.log(test.id,'BLOCKED',e.message.slice(0,160))}
    fs.writeFileSync(resultPath,JSON.stringify(results,null,2)+'\n');
   }
  }finally{await b.close()}
 }
 console.log('ROUND4_COMPLETE '+results.length);
})().catch(e=>{console.error(e.message);process.exit(1)});
