/* Test harness only. Install playwright and @sparticuz/chromium into ignored .scratch/browser.
 * Run with LD_LIBRARY_PATH=$PWD/.scratch/browser/libs/lib. Session state stays ignored.
 * Screenshots are real Chromium captures. before() verifies PNG/hash before save is enabled.
 */
const fs=require('node:fs');const path=require('node:path');const crypto=require('node:crypto');
const root=path.resolve(__dirname,'../../..');const {createRequire}=require('node:module');
const req=createRequire(path.join(root,'.scratch/browser/package.json'));
const {chromium}=req('playwright');const binary=req('@sparticuz/chromium').default;
const evidence=path.join(root,'docs/accounting-audit/evidence');
async function open(stateName='state.json', {readOnly=false}={}){
 if(!/^[a-z0-9-]+\.json$/.test(stateName))throw Error('Unsafe session filename');
 const b=await chromium.launch({executablePath:await binary.executablePath(),args:binary.args.filter(x=>!x.includes('disable-web-security')),headless:true});
 const state=path.join(root,'.scratch/browser',stateName);
 const context=await b.newContext({viewport:{width:1500,height:1100},serviceWorkers:'block',...(fs.existsSync(state)?{storageState:state}:{})});
 await context.route('**/*',route=>{
  const request=route.request();const u=new URL(request.url());
  if(!['127.0.0.1','localhost'].includes(u.hostname)&&!['data:','blob:'].includes(u.protocol))return route.abort('blockedbyclient');
  if(readOnly&&!['GET','HEAD','OPTIONS'].includes(request.method())&&!/^\/api\/v1\/auth\/(login|refresh)$/.test(u.pathname)){
   fs.appendFileSync(path.join(evidence,'read-only-blocks.ndjson'),JSON.stringify({at:new Date().toISOString(),method:request.method(),url:request.url()})+'\n');
   return route.abort('blockedbyclient');
  }
  return route.continue();
 });
 const p=await context.newPage();
 p.on('pageerror',e=>fs.appendFileSync(path.join(evidence,'browser-errors.ndjson'),JSON.stringify({at:new Date().toISOString(),url:p.url(),error:e.message})+'\n'));
 p.on('response',r=>{if(r.status()>=400&&r.url().includes('/api/'))fs.appendFileSync(path.join(evidence,'network-errors.ndjson'),JSON.stringify({at:new Date().toISOString(),url:r.url(),status:r.status()})+'\n')});
 const close=b.close.bind(b); b.close=async()=>{await context.storageState({path:state});await close()};
 return {b,p,context};
}
async function snap(p,name,phase){const dest=path.join(evidence,name+'.png');if(fs.existsSync(dest)&&phase!=='inspect')throw Error('Evidence already exists; use a new test ID. Save forbidden.');fs.mkdirSync(path.dirname(dest),{recursive:true});await p.screenshot({path:dest,fullPage:true});const bytes=fs.readFileSync(dest);if(bytes.length<1000||bytes.toString('hex',0,8)!=='89504e470d0a1a0a')throw Error('Screenshot invalid; save forbidden');fs.appendFileSync(path.join(evidence,'manifest.ndjson'),JSON.stringify({at:new Date().toISOString(),url:p.url(),phase,path:name+'.png',bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')})+'\n');return dest}
async function before(p,name){return snap(p,name+'-before-save','before-save-verified')}
async function goto(p,url){await p.goto('http://127.0.0.1:3001'+url,{waitUntil:'networkidle',timeout:120000});await p.waitForTimeout(1000)}
module.exports={open,snap,before,goto,root,evidence};
