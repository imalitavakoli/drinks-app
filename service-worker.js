if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const c=e=>i(e,l),u={module:{uri:l},exports:o,require:c};s[l]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"drinks-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"202c77467a37761ee1949540044b6dd7"},{url:"css/232.cad8439b.css",revision:null},{url:"css/956.5b892873.css",revision:null},{url:"css/app.69fbf23d.css",revision:null},{url:"index.html",revision:"6202581febc2f1690e2c48c66442a870"},{url:"js/232.31873901.js",revision:null},{url:"js/956.8004610a.js",revision:null},{url:"js/app.baf86cdb.js",revision:null},{url:"js/chunk-vendors.2acb14af.js",revision:null},{url:"js/jquery.min.js",revision:"6dc493ec57a3d5e3cb254c8bb8f4ae8c"},{url:"manifest.json",revision:"25ebdbb62265c7269d56c6379f28769f"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
