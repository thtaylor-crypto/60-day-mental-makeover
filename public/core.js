export const STORAGE_KEY='tef-60-day-workbook-v1';
export const freshState=()=>({version:1,day:1,entries:{},snapshots:['','',''],agreement:'',signature:'',readable:false});
export function validateState(input){
 if(!input||input.version!==1||typeof input.entries!=='object'||!input.entries||Array.isArray(input.entries))throw new Error('This is not a compatible workbook backup.');
 const out=freshState();out.day=Number.isInteger(input.day)&&input.day>=1&&input.day<=60?input.day:1;
 for(const [key,entry] of Object.entries(input.entries)){
  if(!/^([1-9]|[1-5][0-9]|60)$/.test(key)||!entry||typeof entry!=='object'||Array.isArray(entry))throw new Error('The backup contains invalid lesson data.');
  const copy={};for(const field of ['situation','practice','reflection','next','journal']){const value=entry[field]??'';if(typeof value!=='string'||value.length>(field==='journal'?20000:12000))throw new Error('The backup contains invalid writing fields.');copy[field]=value;}
  if(entry.mood!==undefined&&entry.mood!==''&&(!Number.isInteger(entry.mood)||entry.mood<1||entry.mood>10))throw new Error('Mood values must be whole numbers from 1 to 10.');
  copy.mood=entry.mood??'';copy.complete=entry.complete===true;copy.answer=Number.isInteger(entry.answer)&&entry.answer>=0&&entry.answer<3?entry.answer:null;out.entries[key]=copy;
 }
 for(const field of ['agreement','signature']){if(input[field]!==undefined&&typeof input[field]!=='string')throw new Error('Invalid profile field.');out[field]=(input[field]||'').slice(0,field==='signature'?100:12000);}
 if(input.snapshots!==undefined&&(!Array.isArray(input.snapshots)||input.snapshots.length!==3||input.snapshots.some(x=>typeof x!=='string'||x.length>12000)))throw new Error('Invalid snapshot data.');out.snapshots=input.snapshots||['','',''];out.readable=input.readable===true;return out;
}
export const completeCount=s=>Object.values(s.entries).filter(e=>e.complete===true).length;
export const escapeHTML=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
