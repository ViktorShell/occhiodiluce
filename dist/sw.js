if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>s(e,t),l={module:{uri:t},exports:o,require:d};i[t]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6Bhw8i_7.js",revision:null},{url:"assets/index-C0YcBRPt.css",revision:null},{url:"index.html",revision:"b21ed25ee7651720d2ab6281cc09f470"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-192x192.png",revision:"7b29ff1dca1ffb1a6b680c7cdee3610b"},{url:"pwa-512x512.png",revision:"88b2b74587a1c10f9a4af6bd02a5a28c"},{url:"pwa-maskable-192x192.png",revision:"bd50b900cfa553e118a780383915de2f"},{url:"pwa-maskable-512x512.png",revision:"3e1fe0eb4180d6639f359beb5b0665cf"},{url:"manifest.webmanifest",revision:"dfb3669c488f3f595de6638daee47508"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
