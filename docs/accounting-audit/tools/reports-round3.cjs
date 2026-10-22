/* Existing business data only. No posting, saves, recalculation or settlement. */
const {open,before,snap,goto,evidence}=require('./browser.cjs');const fs=require('node:fs');const path=require('node:path');
(async()=>{
 const {b,p}=await open('state.json',{readOnly:true});
 const resultFile=path.join(evidence,'07-reports/ledger-itemcard-round3-api.json');
 const results=fs.existsSync(resultFile)?JSON.parse(fs.readFileSync(resultFile,'utf8')):[];
 try{
  if(!results.some(r=>r.id==='RPT-013')){
  await goto(p,'/inventory/item-card');
  await p.getByLabel(/^الصنف/).selectOption('01a1600c-910e-75a6-9af6-1aaca9060566');
  await p.getByLabel('من تاريخ',{exact:true}).fill('2026-10-21');await p.getByLabel('إلى تاريخ',{exact:true}).fill('2026-10-21');
  await before(p,'07-reports/RPT-013');
  const waiting=p.waitForResponse(r=>r.url().includes('/api/v1/inventory/item-card?')&&r.request().method()==='GET');
  await p.getByRole('button',{name:'عرض البطاقة',exact:true}).click();const response=await waiting;
  results.push({id:'RPT-013',url:response.url(),status:response.status(),body:await response.json()});
  await p.waitForTimeout(700);await snap(p,'07-reports/RPT-013-result','report-result');fs.writeFileSync(path.join(evidence,'07-reports/RPT-013-text.txt'),await p.locator('body').innerText());
  }
  await goto(p,'/accounting/ledger');
  await p.getByRole('checkbox',{name:'فترة كاملة (من البداية)',exact:true}).uncheck();
  await p.getByLabel('من تاريخ',{exact:true}).fill('2026-10-21');await p.getByLabel('إلى تاريخ',{exact:true}).fill('2026-10-21');
  for(const [i,code]of ['1270001','3200004','12310001','22111001','2222001'].entries()){
   const id='RPT-'+(14+i);const select=p.getByLabel(/^اسم الحساب/);
   const options=await select.locator('option').evaluateAll(options=>options.map(o=>({value:o.value,text:o.textContent})));
   const option=options.find(o=>o.text.includes(code));if(!option)throw Error('Account not found '+code);
   await select.selectOption(option.value);await before(p,'07-reports/'+id);
   const waiting=p.waitForResponse(r=>r.url().includes('/api/v1/statements/general-ledger/'+option.value)&&r.request().method()==='GET');
   await p.getByRole('button',{name:'عرض البيانات',exact:true}).click();const response=await waiting;
   results.push({id,code,url:response.url(),status:response.status(),body:await response.json()});
   await p.waitForTimeout(500);await snap(p,'07-reports/'+id+'-result','report-result');fs.writeFileSync(path.join(evidence,'07-reports/'+id+'-text.txt'),await p.locator('body').innerText());
   console.log(id,code,response.status());
  }
 }finally{fs.writeFileSync(path.join(evidence,'07-reports/ledger-itemcard-round3-api.json'),JSON.stringify(results,null,2));await b.close()}
})().catch(e=>{console.error(e.message);process.exit(1)});
