"use strict";var o=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var p=(t,s)=>{for(var r in s)o(t,r,{get:s[r],enumerable:!0})},h=(t,s,r,e)=>{if(s&&typeof s=="object"||typeof s=="function")for(let n of l(s))!u.call(t,n)&&n!==r&&o(t,n,{get:()=>s[n],enumerable:!(e=a(s,n))||e.enumerable});return t};var f=t=>h(o({},"__esModule",{value:!0}),t);var m={};p(m,{fetchClientID:()=>x,testClientID:()=>w});module.exports=f(m);var i=class extends Error{constructor(s){super(s),this.name="FetchClientError"}};function d(t,s){let r,e=null;do r=s.exec(t),r&&(e=r);while(r);return e}async function x(){let t=await fetch("https://soundcloud.com/");if(t.status>=400)throw new i(`Initial request failed: ${t.status} ${t.statusText}`);let s=await t.text(),r=d(s,/<script\s+crossorigin\s+src=["'](https?:\/\/[^"']+)["']><\/script>/gi);if(!r)throw new i("Failed to parse script URL");let e=await fetch(r[1]);if(e.status>=400)throw new i(`Script request failed: ${e.status} ${e.statusText}`);let c=(await e.text()).match(/\bclient_id:\s*["']([^"']+)["']/i);if(!c)throw new i("Failed to parse client ID from script");return c[1]}async function w(t){let{status:s}=await fetch(`https://api-v2.soundcloud.com/?client_id=${t}`,{method:"HEAD"});return s===404}0&&(module.exports={fetchClientID,testClientID});
//# sourceMappingURL=index.js.map