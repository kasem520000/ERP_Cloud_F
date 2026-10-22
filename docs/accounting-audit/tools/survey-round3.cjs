/* Read-only opening coverage, NOT end-to-end functional acceptance. */
const {open,snap,before,goto,evidence,root}=require('./browser.cjs');
const fs=require('node:fs');const path=require('node:path');
const urls=[
'/accounting/accounts','/accounting/accounts/tree','/accounting/ledger','/accounting/journal-entries','/accounting/cost-centers','/accounting/cost-center-statement','/accounting/periods','/accounting/payment-methods','/accounting/expenses','/accounting/cash-locations',
'/inventory/overview','/inventory/warehouses','/inventory/levels','/inventory/movements','/inventory/item-card','/inventory/below-minimum','/inventory/bin-balances','/inventory/bins','/inventory/lots','/inventory/serials','/inventory/expiry','/inventory/in-transit','/inventory/adjustments','/inventory/production','/inventory/requests','/inventory/transfers','/inventory/deliveries','/inventory/vouchers','/inventory/barcodes',
'/treasury/banks','/treasury/vouchers','/treasury/transfers','/treasury/bank-reconciliation','/treasury/bank-statements','/treasury/cheques','/treasury/day-close',
'/sales/returns','/sales/invoices/01a1600f-8fa5-75ad-b64f-13906fd3d277','/purchases/invoices/01a1600e-c0c6-7491-826f-5c9b37407db2',
'/sales/notes/credit','/purchases/notes/debit',
];
(async()=>{
 const {b,p}=await open('state.json',{readOnly:true});const rows=[];let apiErrors=[];
 p.on('response',r=>{if(r.url().includes('/api/')&&r.status()>=400)apiErrors.push({url:r.url(),status:r.status()})});
 try{
  await goto(p,'/');
  if(await p.locator('input[type=password]').count()){
   const {loadEnvFiles}=await import(path.join(root,'scripts/dotenv.mjs'));loadEnvFiles(root);
   await p.getByLabel('رمز المنشأة',{exact:true}).fill('audit-test-2026');
   await p.getByLabel('البريد الإلكتروني',{exact:true}).fill(process.env.DEMO_OWNER_EMAIL);
   await p.locator('input[type=password]').fill(process.env.DEMO_OWNER_PASSWORD);
   await before(p,'00-discovery/LOGIN-003');
   await p.getByRole('button',{name:'دخول',exact:true}).click();await p.waitForTimeout(2500);
   await snap(p,'00-discovery/LOGIN-003-after','after-login');
  }
  for(const [i,url]of urls.entries()){
   const id='RO3-'+String(i+1).padStart(3,'0');apiErrors=[];
   try{
    await goto(p,url);
    await p.waitForFunction(()=>!document.body.innerText.includes('جارٍ التحقق من الجلسة'),{},{timeout:20000});
    const text=await p.locator('body').innerText();
    fs.writeFileSync(path.join(evidence,'00-discovery',id+'-text.txt'),text);
    await snap(p,'00-discovery/'+id,'read-only-open');
    const login=await p.locator('input[type=password]').count();
    const loading=/جارٍ التحميل|جاري التحميل/.test(text.slice(-2000));
    const error=/Application error|Internal Server Error|404|حدث خطأ|تعذر/.test(text.slice(-3000));
    rows.push({id,url,actual:p.url(),at:new Date().toISOString(),status:login?'AUTH_BLOCKED':loading?'LOADING_NOT_VERIFIED':error||apiErrors.length?'OPENED_WITH_ERROR_NOT_ACCEPTED':'OPENED_ONLY_NOT_FULLY_TESTED',apiErrors:[...apiErrors],textExcerpt:text.slice(-500)});
    console.log(id,url,rows.at(-1).status);
   }catch(e){rows.push({id,url,status:'BLOCKED',error:e.message});console.log(id,'BLOCKED',e.message.slice(0,120))}
   fs.writeFileSync(path.join(evidence,'00-discovery/read-only-round3-results.json'),JSON.stringify(rows,null,2));
  }
 }finally{await b.close()}
})().catch(e=>{console.error(e.message);process.exit(1)});
