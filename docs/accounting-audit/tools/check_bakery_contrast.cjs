/* Computed styles from an actual anonymous browser page. Does not alter CSS or submit. */
const {open,evidence}=require('./browser.cjs');const fs=require('node:fs');const path=require('node:path');
(async()=>{const{b,p}=await open('r4-contrast-state.json',{readOnly:true});try{
 await p.goto('http://127.0.0.1:3005/',{waitUntil:'networkidle'});
 const measurement=await p.evaluate(()=>({at:new Date().toISOString(),theme:document.documentElement.dataset.theme,rootClass:document.documentElement.className,
  inputs:[...document.querySelectorAll('input')].map(el=>{const s=getComputedStyle(el);let ancestor=el;const surfaces=[];while(ancestor&&surfaces.length<7){const a=getComputedStyle(ancestor);surfaces.push({tag:ancestor.tagName,className:ancestor.className,background:a.backgroundColor,color:a.color,backgroundImage:a.backgroundImage});ancestor=ancestor.parentElement}return{type:el.type,className:el.className,color:s.color,textFillColor:s.webkitTextFillColor,backgroundColor:s.backgroundColor,surfaces}})}));
 const rgb=s=>{const n=s.match(/[\d.]+/g)?.map(Number);return n?.length>=3?n.slice(0,3):null};
 const luminance=rgb=>rgb.map(v=>{const n=v/255;return n<=0.04045?n/12.92:((n+0.055)/1.055)**2.4}).reduce((sum,n,i)=>sum+n*[0.2126,0.7152,0.0722][i],0);
 for(const input of measurement.inputs){const surface=input.surfaces.find(s=>s.background!=='rgba(0, 0, 0, 0)'&&s.background!=='transparent');const fg=rgb(input.textFillColor),bg=surface&&rgb(surface.background);if(fg&&bg){const l1=luminance(fg),l2=luminance(bg);input.measuredSolidColorContrast=(Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05);input.backgroundUsed=surface.background;input.meetsNormalText45=input.measuredSolidColorContrast>=4.5}}
 fs.writeFileSync(path.join(evidence,'00-discovery/round4-bakery-input-contrast.json'),JSON.stringify(measurement,null,2)+'\n');
 console.log(JSON.stringify({theme:measurement.theme,inputs:measurement.inputs.map(i=>({type:i.type,color:i.color,textFill:i.textFillColor,background:i.backgroundUsed,ratio:i.measuredSolidColorContrast,pass45:i.meetsNormalText45}))},null,2));
 if(measurement.inputs.some(input=>input.meetsNormalText45===false))process.exitCode=1;
}finally{await b.close()}})().catch(e=>{console.error(e.message);process.exit(1)});
