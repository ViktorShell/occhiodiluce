var rp=Object.defineProperty;var hc=r=>{throw TypeError(r)};var ip=(r,e,t)=>e in r?rp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var me=(r,e,t)=>ip(r,typeof e!="symbol"?e+"":e,t),sp=(r,e,t)=>e.has(r)||hc("Cannot "+t);var dc=(r,e,t)=>e.has(r)?hc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);var _i=(r,e,t)=>(sp(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function de(){}function eh(r){return r()}function fc(){return Object.create(null)}function Qt(r){r.forEach(eh)}function th(r){return typeof r=="function"}function Ct(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let ks;function op(r,e){return r===e?!0:(ks||(ks=document.createElement("a")),ks.href=e,r===ks.href)}function ap(r){return Object.keys(r).length===0}function lp(r,...e){if(r==null){for(const n of e)n(void 0);return de}const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function pn(r,e,t){r.$$.on_destroy.push(lp(e,t))}function cp(r,e,t){return r.set(t),e}function D(r,e){r.appendChild(e)}function ve(r,e,t){r.insertBefore(e,t||null)}function Te(r){r.parentNode&&r.parentNode.removeChild(r)}function B(r){return document.createElement(r)}function Ft(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function kt(r){return document.createTextNode(r)}function q(){return kt(" ")}function Fa(){return kt("")}function Be(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function nh(r){return function(e){return e.preventDefault(),r.call(this,e)}}function x(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function up(r){return Array.from(r.childNodes)}function Kr(r,e){e=""+e,r.data!==e&&(r.data=e)}function yt(r,e){r.value=e??""}function Or(r,e,t,n){t==null?r.style.removeProperty(e):r.style.setProperty(e,t,"")}let Fi;function Ci(r){Fi=r}function hp(){if(!Fi)throw new Error("Function called outside component initialization");return Fi}function dp(r){hp().$$.on_mount.push(r)}function fp(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const kr=[],pc=[];let Lr=[];const gc=[],pp=Promise.resolve();let ca=!1;function gp(){ca||(ca=!0,pp.then(rh))}function ua(r){Lr.push(r)}const Wo=new Set;let Rr=0;function rh(){if(Rr!==0)return;const r=Fi;do{try{for(;Rr<kr.length;){const e=kr[Rr];Rr++,Ci(e),mp(e.$$)}}catch(e){throw kr.length=0,Rr=0,e}for(Ci(null),kr.length=0,Rr=0;pc.length;)pc.pop()();for(let e=0;e<Lr.length;e+=1){const t=Lr[e];Wo.has(t)||(Wo.add(t),t())}Lr.length=0}while(kr.length);for(;gc.length;)gc.pop()();ca=!1,Wo.clear(),Ci(r)}function mp(r){if(r.fragment!==null){r.update(),Qt(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(ua)}}function _p(r){const e=[],t=[];Lr.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Lr=e}const Us=new Set;let Zn;function cn(){Zn={r:0,c:[],p:Zn}}function un(){Zn.r||Qt(Zn.c),Zn=Zn.p}function Z(r,e){r&&r.i&&(Us.delete(r),r.i(e))}function ae(r,e,t,n){if(r&&r.o){if(Us.has(r))return;Us.add(r),Zn.c.push(()=>{Us.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function Ys(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function ih(r,e){r.d(1),e.delete(r.key)}function sh(r,e,t,n,i,s,a,l,c,h,f,y){let m=r.length,v=s.length,R=m;const P={};for(;R--;)P[r[R].key]=R;const k=[],U=new Map,M=new Map,V=[];for(R=v;R--;){const w=y(i,s,R),g=t(w);let _=a.get(g);_?V.push(()=>_.p(w,e)):(_=h(g,w),_.c()),U.set(g,k[R]=_),g in P&&M.set(g,Math.abs(R-P[g]))}const K=new Set,ee=new Set;function Y(w){Z(w,1),w.m(l,f),a.set(w.key,w),f=w.first,v--}for(;m&&v;){const w=k[v-1],g=r[m-1],_=w.key,T=g.key;w===g?(f=w.first,m--,v--):U.has(T)?!a.has(_)||K.has(_)?Y(w):ee.has(T)?m--:M.get(_)>M.get(T)?(ee.add(_),Y(w)):(K.add(T),m--):(c(g,a),m--)}for(;m--;){const w=r[m];U.has(w.key)||c(w,a)}for(;v;)Y(k[v-1]);return Qt(V),k}function ot(r){r&&r.c()}function Qe(r,e,t){const{fragment:n,after_update:i}=r.$$;n&&n.m(e,t),ua(()=>{const s=r.$$.on_mount.map(eh).filter(th);r.$$.on_destroy?r.$$.on_destroy.push(...s):Qt(s),r.$$.on_mount=[]}),i.forEach(ua)}function Ye(r,e){const t=r.$$;t.fragment!==null&&(_p(t.after_update),Qt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function yp(r,e){r.$$.dirty[0]===-1&&(kr.push(r),gp(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function Yt(r,e,t,n,i,s,a=null,l=[-1]){const c=Fi;Ci(r);const h=r.$$={fragment:null,ctx:[],props:s,update:de,not_equal:i,bound:fc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:fc(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};a&&a(h.root);let f=!1;if(h.ctx=t?t(r,e.props||{},(y,m,...v)=>{const R=v.length?v[0]:m;return h.ctx&&i(h.ctx[y],h.ctx[y]=R)&&(!h.skip_bound&&h.bound[y]&&h.bound[y](R),f&&yp(r,y)),m}):[],h.update(),f=!0,Qt(h.before_update),h.fragment=n?n(h.ctx):!1,e.target){if(e.hydrate){const y=up(e.target);h.fragment&&h.fragment.l(y),y.forEach(Te)}else h.fragment&&h.fragment.c();e.intro&&Z(r.$$.fragment),Qe(r,e.target,e.anchor),rh()}Ci(c)}class Xt{constructor(){me(this,"$$");me(this,"$$set")}$destroy(){Ye(this,1),this.$destroy=de}$on(e,t){if(!th(t))return de;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!ap(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ep="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ep);var mc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},wp=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],l=r[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,l=a?r[i+1]:0,c=i+2<r.length,h=c?r[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,a||(m=64)),n.push(t[f],t[y],t[m],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(oh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):wp(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],l=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const y=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||l==null||h==null||y==null)throw new Tp;const m=s<<2|l>>4;if(n.push(m),h!==64){const v=l<<4&240|h>>2;if(n.push(v),y!==64){const R=h<<6&192|y;n.push(R)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Tp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vp=function(r){const e=oh(r);return ah.encodeByteArray(e,!0)},Xs=function(r){return vp(r).replace(/\./g,"")},lh=function(r){try{return ah.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=()=>Ip().__FIREBASE_DEFAULTS__,bp=()=>{if(typeof process>"u"||typeof mc>"u")return;const r=mc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Rp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&lh(r[1]);return e&&JSON.parse(e)},_o=()=>{try{return Ap()||bp()||Rp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ch=r=>{var e,t;return(t=(e=_o())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Sp=r=>{const e=ch(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},uh=()=>{var r;return(r=_o())===null||r===void 0?void 0:r.config},hh=r=>{var e;return(e=_o())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Xs(JSON.stringify(t)),Xs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Dp(){var r;const e=(r=_o())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Op(){const r=Ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Lp(){return!Dp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vp(){try{return typeof indexedDB=="object"}catch{return!1}}function Mp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="FirebaseError";class wn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Fp,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Up(s,n):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new wn(i,l,n)}}function Up(r,e){return r.replace(Bp,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Bp=/\{\$([^}]+)}/g;function $p(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Js(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(_c(s)&&_c(a)){if(!Js(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function _c(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function bi(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ri(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function zp(r,e){const t=new jp(r,e);return t.subscribe.bind(t)}class jp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");qp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Go),i.error===void 0&&(i.error=Go),i.complete===void 0&&(i.complete=Go);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Go(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(r){return r&&r._delegate?r._delegate:r}class nr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new kp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gp(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Wp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wp(r){return r===Xn?void 0:r}function Gp(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(se||(se={}));const Qp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Yp=se.INFO,Xp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Jp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Xp[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ua{constructor(e){this.name=e,this._logLevel=Yp,this._logHandler=Jp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Zp=(r,e)=>e.some(t=>r instanceof t);let yc,Ec;function eg(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return Ec||(Ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dh=new WeakMap,ha=new WeakMap,fh=new WeakMap,Ko=new WeakMap,Ba=new WeakMap;function ng(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(Pn(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&dh.set(t,r)}).catch(()=>{}),Ba.set(e,r),e}function rg(r){if(ha.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});ha.set(r,e)}let da={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ha.get(r);if(e==="objectStoreNames")return r.objectStoreNames||fh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ig(r){da=r(da)}function sg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Qo(this),e,...t);return fh.set(n,e.sort?e.sort():[e]),Pn(n)}:tg().includes(r)?function(...e){return r.apply(Qo(this),e),Pn(dh.get(this))}:function(...e){return Pn(r.apply(Qo(this),e))}}function og(r){return typeof r=="function"?sg(r):(r instanceof IDBTransaction&&rg(r),Zp(r,eg())?new Proxy(r,da):r)}function Pn(r){if(r instanceof IDBRequest)return ng(r);if(Ko.has(r))return Ko.get(r);const e=og(r);return e!==r&&(Ko.set(r,e),Ba.set(e,r)),e}const Qo=r=>Ba.get(r);function ag(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),l=Pn(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Pn(a.result),c.oldVersion,c.newVersion,Pn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const lg=["get","getKey","getAll","getAllKeys","count"],cg=["put","add","delete","clear"],Yo=new Map;function wc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Yo.get(e))return Yo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=cg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||lg.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return Yo.set(e,s),s}ig(r=>({...r,get:(e,t,n)=>wc(e,t)||r.get(e,t,n),has:(e,t)=>!!wc(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function hg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fa="@firebase/app",Tc="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Ua("@firebase/app"),dg="@firebase/app-compat",fg="@firebase/analytics-compat",pg="@firebase/analytics",gg="@firebase/app-check-compat",mg="@firebase/app-check",_g="@firebase/auth",yg="@firebase/auth-compat",Eg="@firebase/database",wg="@firebase/database-compat",Tg="@firebase/functions",vg="@firebase/functions-compat",Ig="@firebase/installations",Ag="@firebase/installations-compat",bg="@firebase/messaging",Rg="@firebase/messaging-compat",Sg="@firebase/performance",kg="@firebase/performance-compat",Pg="@firebase/remote-config",Cg="@firebase/remote-config-compat",Dg="@firebase/storage",xg="@firebase/storage-compat",Ng="@firebase/firestore",Og="@firebase/vertexai-preview",Lg="@firebase/firestore-compat",Vg="firebase",Mg="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="[DEFAULT]",Fg={[fa]:"fire-core",[dg]:"fire-core-compat",[pg]:"fire-analytics",[fg]:"fire-analytics-compat",[mg]:"fire-app-check",[gg]:"fire-app-check-compat",[_g]:"fire-auth",[yg]:"fire-auth-compat",[Eg]:"fire-rtdb",[wg]:"fire-rtdb-compat",[Tg]:"fire-fn",[vg]:"fire-fn-compat",[Ig]:"fire-iid",[Ag]:"fire-iid-compat",[bg]:"fire-fcm",[Rg]:"fire-fcm-compat",[Sg]:"fire-perf",[kg]:"fire-perf-compat",[Pg]:"fire-rc",[Cg]:"fire-rc-compat",[Dg]:"fire-gcs",[xg]:"fire-gcs-compat",[Ng]:"fire-fst",[Lg]:"fire-fst-compat",[Og]:"fire-vertex","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map,Ug=new Map,ga=new Map;function vc(r,e){try{r.container.addComponent(e)}catch(t){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Br(r){const e=r.name;if(ga.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;ga.set(e,r);for(const t of Zs.values())vc(t,r);for(const t of Ug.values())vc(t,r);return!0}function $a(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ut(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new Qi("app","Firebase",Bg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=Mg;function ph(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:pa,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(t||(t=uh()),!t)throw Cn.create("no-options");const s=Zs.get(i);if(s){if(Js(t,s.options)&&Js(n,s.config))return s;throw Cn.create("duplicate-app",{appName:i})}const a=new Kp(i);for(const c of ga.values())a.addComponent(c);const l=new $g(t,n,a);return Zs.set(i,l),l}function gh(r=pa){const e=Zs.get(r);if(!e&&r===pa&&uh())return ph();if(!e)throw Cn.create("no-app",{appName:r});return e}function Dn(r,e,t){var n;let i=(n=Fg[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(l.join(" "));return}Br(new nr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="firebase-heartbeat-database",jg=1,Ui="firebase-heartbeat-store";let Xo=null;function mh(){return Xo||(Xo=ag(zg,jg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ui)}catch(t){console.warn(t)}}}}).catch(r=>{throw Cn.create("idb-open",{originalErrorMessage:r.message})})),Xo}async function qg(r){try{const t=(await mh()).transaction(Ui),n=await t.objectStore(Ui).get(_h(r));return await t.done,n}catch(e){if(e instanceof wn)rr.warn(e.message);else{const t=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(t.message)}}}async function Ic(r,e){try{const n=(await mh()).transaction(Ui,"readwrite");await n.objectStore(Ui).put(e,_h(r)),await n.done}catch(t){if(t instanceof wn)rr.warn(t.message);else{const n=Cn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rr.warn(n.message)}}}function _h(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=1024,Wg=30*24*60*60*1e3;class Gg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ac();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Wg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ac(),{heartbeatsToSend:n,unsentEntries:i}=Kg(this._heartbeatsCache.heartbeats),s=Xs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ac(){return new Date().toISOString().substring(0,10)}function Kg(r,e=Hg){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),bc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),bc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Qg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vp()?Mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bc(r){return Xs(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(r){Br(new nr("platform-logger",e=>new ug(e),"PRIVATE")),Br(new nr("heartbeat",e=>new Gg(e),"PRIVATE")),Dn(fa,Tc,r),Dn(fa,Tc,"esm2017"),Dn("fire-js","")}Yg("");var Xg="firebase",Jg="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(Xg,Jg,"app");function za(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zg=yh,Eh=new Qi("auth","Firebase",yh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Ua("@firebase/auth");function em(r,...e){eo.logLevel<=se.WARN&&eo.warn(`Auth (${Qr}): ${r}`,...e)}function Bs(r,...e){eo.logLevel<=se.ERROR&&eo.error(`Auth (${Qr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(r,...e){throw ja(r,...e)}function zt(r,...e){return ja(r,...e)}function wh(r,e,t){const n=Object.assign(Object.assign({},Zg()),{[e]:t});return new Qi("auth","Firebase",n).create(e,{appName:r.name})}function gn(r){return wh(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ja(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Eh.create(r,...e)}function G(r,e,...t){if(!r)throw ja(e,...t)}function hn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Bs(e),new Error(e)}function mn(r,e){r||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function tm(){return Rc()==="http:"||Rc()==="https:"}function Rc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tm()||xp()||"connection"in navigator)?navigator.onLine:!0}function rm(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.shortDelay=e,this.longDelay=t,mn(t>e,"Short delay should be less than long delay!"),this.isMobile=Cp()||Np()}get(){return nm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(r,e){mn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=new Xi(3e4,6e4);function Mn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Fn(r,e,t,n,i={}){return vh(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const l=Yi(Object.assign({key:r.config.apiKey},a)).slice(1),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),Th.fetch()(Ih(r,r.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function vh(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},im),e);try{const i=new am(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ps(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ps(r,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ps(r,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ps(r,"user-disabled",a);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wh(r,f,h);Pt(r,f)}}catch(i){if(i instanceof wn)throw i;Pt(r,"network-request-failed",{message:String(i)})}}async function Ji(r,e,t,n,i={}){const s=await Fn(r,e,t,n,i);return"mfaPendingCredential"in s&&Pt(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Ih(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?qa(r.config,i):`${r.config.apiScheme}://${i}`}function om(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class am{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(zt(this.auth,"network-request-failed")),sm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ps(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=zt(r,e,n);return i.customData._tokenResponse=t,i}function Sc(r){return r!==void 0&&r.enterprise!==void 0}class lm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return om(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cm(r,e){return Fn(r,"GET","/v2/recaptchaConfig",Mn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(r,e){return Fn(r,"POST","/v1/accounts:delete",e)}async function Ah(r,e){return Fn(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hm(r,e=!1){const t=Et(r),n=await t.getIdToken(e),i=Ha(n);G(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Di(Jo(i.auth_time)),issuedAtTime:Di(Jo(i.iat)),expirationTime:Di(Jo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jo(r){return Number(r)*1e3}function Ha(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Bs("JWT malformed, contained fewer than 3 sections"),null;try{const i=lh(t);return i?JSON.parse(i):(Bs("Failed to decode base64 JWT payload"),null)}catch(i){return Bs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kc(r){const e=Ha(r);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof wn&&dm(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function dm({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Bi(r,Ah(t,{idToken:n}));G(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bh(s.providerUserInfo):[],l=gm(r.providerData,a),c=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new _a(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,y)}async function pm(r){const e=Et(r);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gm(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function bh(r){return r.map(e=>{var{providerId:t}=e,n=za(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(r,e){const t=await vh(r,{},async()=>{const n=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=Ih(r,i,"/v1/token",`key=${s}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Th.fetch()(a,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _m(r,e){return Fn(r,"POST","/v2/accounts:revokeToken",Mn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=kc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await mm(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new Vr;return n&&(G(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(G(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(r,e){G(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _a(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Bi(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hm(this,e)}reload(){return pm(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await to(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await Bi(this,um(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,l,c,h,f;const y=(n=t.displayName)!==null&&n!==void 0?n:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,v=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:K,isAnonymous:ee,providerData:Y,stsTokenManager:w}=t;G(V&&w,e,"internal-error");const g=Vr.fromJSON(this.name,w);G(typeof V=="string",e,"internal-error"),In(y,e.name),In(m,e.name),G(typeof K=="boolean",e,"internal-error"),G(typeof ee=="boolean",e,"internal-error"),In(v,e.name),In(R,e.name),In(P,e.name),In(k,e.name),In(U,e.name),In(M,e.name);const _=new dn({uid:V,auth:e,email:m,emailVerified:K,displayName:y,isAnonymous:ee,photoURL:R,phoneNumber:v,tenantId:P,stsTokenManager:g,createdAt:U,lastLoginAt:M});return Y&&Array.isArray(Y)&&(_.providerData=Y.map(T=>Object.assign({},T))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,t,n=!1){const i=new Vr;i.updateFromServerResponse(t);const s=new dn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await to(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?bh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Vr;l.updateFromIdToken(n);const c=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _a(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map;function fn(r){mn(r instanceof Function,"Expected a class definition");let e=Pc.get(r);return e?(mn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Pc.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rh.type="NONE";const Cc=Rh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(r,e,t){return`firebase:${r}:${e}:${t}`}class Mr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=$s(this.userKey,i.apiKey,s),this.fullPersistenceKey=$s("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Mr(fn(Cc),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(Cc);const a=$s(n,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const y=dn._fromJSON(e,f);h!==s&&(l=y),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Mr(s,e,n):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Mr(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dh(e))return"Blackberry";if(xh(e))return"Webos";if(Wa(e))return"Safari";if((e.includes("chrome/")||kh(e))&&!e.includes("edge/"))return"Chrome";if(Ch(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Sh(r=Ze()){return/firefox\//i.test(r)}function Wa(r=Ze()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kh(r=Ze()){return/crios\//i.test(r)}function Ph(r=Ze()){return/iemobile/i.test(r)}function Ch(r=Ze()){return/android/i.test(r)}function Dh(r=Ze()){return/blackberry/i.test(r)}function xh(r=Ze()){return/webos/i.test(r)}function yo(r=Ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ym(r=Ze()){var e;return yo(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Em(){return Op()&&document.documentMode===10}function Nh(r=Ze()){return yo(r)||Ch(r)||xh(r)||Dh(r)||/windows phone/i.test(r)||Ph(r)}function wm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(r,e=[]){let t;switch(r){case"Browser":t=Dc(Ze());break;case"Worker":t=`${Dc(Ze())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(r,e={}){return Fn(r,"GET","/v2/passwordPolicy",Mn(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=6;class Am{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Im,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xc(this),this.idTokenSubscription=new xc(this),this.beforeStateQueue=new Tm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fn(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ah(this,{idToken:e}),n=await dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ut(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(gn(this));const t=e?Et(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vm(this),t=new Am(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await _m(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fn(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[fn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&em(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hr(r){return Et(r)}class xc{constructor(e){this.auth=e,this.observer=null,this.addObserver=zp(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rm(r){Eo=r}function Lh(r){return Eo.loadJS(r)}function Sm(){return Eo.recaptchaEnterpriseScript}function km(){return Eo.gapiScript}function Pm(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const Cm="recaptcha-enterprise",Dm="NO_RECAPTCHA";class xm{constructor(e){this.type=Cm,this.auth=hr(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{cm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new lm(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;Sc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(Dm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{n(this.auth).then(l=>{if(!t&&Sc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Sm();c.length!==0&&(c+=l),Lh(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Nc(r,e,t,n=!1){const i=new xm(r);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ya(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Nc(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Nc(r,e,t,t==="getOobCode");return n(r,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(r,e){const t=$a(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Js(s,e??{}))return i;Pt(i,"already-initialized")}return t.initialize({options:e})}function Om(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(fn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Lm(r,e,t){const n=hr(r);G(n._canInitEmulator,n,"emulator-config-failed"),G(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=Vh(e),{host:a,port:l}=Vm(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${s}//${a}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Mm()}function Vh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Vm(r){const e=Vh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Oc(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Oc(a)}}}function Oc(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Mm(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,t){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function Fm(r,e){return Fn(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(r,e){return Ji(r,"POST","/v1/accounts:signInWithPassword",Mn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(r,e){return Ji(r,"POST","/v1/accounts:signInWithEmailLink",Mn(r,e))}async function $m(r,e){return Ji(r,"POST","/v1/accounts:signInWithEmailLink",Mn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Ga{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new $i(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new $i(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,t,"signInWithPassword",Um);case"emailLink":return Bm(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,n,"signUpPassword",Fm);case"emailLink":return $m(e,{idToken:t,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(r,e){return Ji(r,"POST","/v1/accounts:signInWithIdp",Mn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="http://localhost";class ir extends Ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=za(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new ir(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:zm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qm(r){const e=bi(Ri(r)).link,t=e?bi(Ri(e)).deep_link_id:null,n=bi(Ri(r)).deep_link_id;return(n?bi(Ri(n)).link:null)||n||t||e||r}class Ka{constructor(e){var t,n,i,s,a,l;const c=bi(Ri(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(n=c.oobCode)!==null&&n!==void 0?n:null,y=jm((i=c.mode)!==null&&i!==void 0?i:null);G(h&&f&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=qm(e);try{return new Ka(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,t){return $i._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ka.parseLink(t);return G(n,"argument-error"),$i._fromEmailAndCode(e,n.code,n.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Mh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Zi{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ir._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return bn.credential(t,n)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Zi{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Zi{constructor(){super("twitter.com")}static credential(e,t){return ir._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Sn.credential(t,n)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(r,e){return Ji(r,"POST","/v1/accounts:signUp",Mn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await dn._fromIdTokenResponse(e,n,i),a=Lc(n);return new sr({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Lc(n);return new sr({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Lc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends wn{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new no(e,t,n,i)}}function Fh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(r,s,e,n):s})}async function Wm(r,e,t=!1){const n=await Bi(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return sr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(r,e,t=!1){const{auth:n}=r;if(Ut(n.app))return Promise.reject(gn(n));const i="reauthenticate";try{const s=await Bi(r,Fh(n,i,e,r),t);G(s.idToken,n,"internal-error");const a=Ha(s.idToken);G(a,n,"internal-error");const{sub:l}=a;return G(r.uid===l,n,"user-mismatch"),sr._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pt(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(r,e,t=!1){if(Ut(r.app))return Promise.reject(gn(r));const n="signIn",i=await Fh(r,n,e),s=await sr._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function Km(r,e){return Uh(hr(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh(r){const e=hr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qm(r,e,t){if(Ut(r.app))return Promise.reject(gn(r));const n=hr(r),a=await ya(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Bh(r),c}),l=await sr._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(l.user),l}function Ym(r,e,t){return Ut(r.app)?Promise.reject(gn(r)):Km(Et(r),Yr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Bh(r),n})}function Xm(r,e,t,n){return Et(r).onIdTokenChanged(e,t,n)}function Jm(r,e,t){return Et(r).beforeAuthStateChanged(e,t)}const ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(){const r=Ze();return Wa(r)||yo(r)}const e_=1e3,t_=10;class zh extends $h{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zm()&&wm(),this.fallbackToPolling=Nh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);Em()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,t_):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},e_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zh.type="LOCAL";const n_=zh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends $h{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jh.type="SESSION";const qh=jh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new wo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await r_(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=Qa("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(y){const m=y;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function s_(r){jt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function o_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a_(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function l_(){return Hh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="firebaseLocalStorageDb",c_=1,io="firebaseLocalStorage",Gh="fbase_key";class es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function To(r,e){return r.transaction([io],e?"readwrite":"readonly").objectStore(io)}function u_(){const r=indexedDB.deleteDatabase(Wh);return new es(r).toPromise()}function Ea(){const r=indexedDB.open(Wh,c_);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(io,{keyPath:Gh})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(io)?e(n):(n.close(),await u_(),e(await Ea()))})})}async function Vc(r,e,t){const n=To(r,!0).put({[Gh]:e,value:t});return new es(n).toPromise()}async function h_(r,e){const t=To(r,!1).get(e),n=await new es(t).toPromise();return n===void 0?null:n.value}function Mc(r,e){const t=To(r,!0).delete(e);return new es(t).toPromise()}const d_=800,f_=3;class Kh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ea(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>f_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(l_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await o_(),!this.activeServiceWorker)return;this.sender=new i_(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ea();return await Vc(e,ro,"1"),await Mc(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>h_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=To(i,!1).getAll();return new es(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kh.type="LOCAL";const p_=Kh;new Xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(r,e){return e?fn(e):(G(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends Ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function m_(r){return Uh(r.auth,new Ya(r),r.bypassAuthState)}function __(r){const{auth:e,user:t}=r;return G(t,e,"internal-error"),Gm(t,new Ya(r),r.bypassAuthState)}async function y_(r){const{auth:e,user:t}=r;return G(t,e,"internal-error"),Wm(t,new Ya(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m_;case"linkViaPopup":case"linkViaRedirect":return y_;case"reauthViaPopup":case"reauthViaRedirect":return __;default:Pt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=new Xi(2e3,1e4);class Nr extends Qh{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,E_.get())};e()}}Nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="pendingRedirect",zs=new Map;class T_ extends Qh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zs.get(this.auth._key());if(!e){try{const n=await v_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zs.set(this.auth._key(),e)}return this.bypassAuthState||zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v_(r,e){const t=b_(e),n=A_(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function I_(r,e){zs.set(r._key(),e)}function A_(r){return fn(r._redirectPersistence)}function b_(r){return $s(w_,r.config.apiKey,r.name)}async function R_(r,e,t=!1){if(Ut(r.app))return Promise.reject(gn(r));const n=hr(r),i=g_(n,e),a=await new T_(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=10*60*1e3;class k_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yh(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(zt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fc(e))}saveEventToCache(e){this.cachedEventUids.add(Fc(e)),this.lastProcessedEventTime=Date.now()}}function Fc(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Yh({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function P_(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yh(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(r,e={}){return Fn(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x_=/^https?/;async function N_(r){if(r.config.emulator)return;const{authorizedDomains:e}=await C_(r);for(const t of e)try{if(O_(t))return}catch{}Pt(r,"unauthorized-domain")}function O_(r){const e=ma(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!x_.test(t))return!1;if(D_.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=new Xi(3e4,6e4);function Uc(){const r=jt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function V_(r){return new Promise((e,t)=>{var n,i,s;function a(){Uc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uc(),t(zt(r,"network-request-failed"))},timeout:L_.get()})}if(!((i=(n=jt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jt().gapi)===null||s===void 0)&&s.load)a();else{const l=Pm("iframefcb");return jt()[l]=()=>{gapi.load?a():t(zt(r,"network-request-failed"))},Lh(`${km()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw js=null,e})}let js=null;function M_(r){return js=js||V_(r),js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Xi(5e3,15e3),U_="__/auth/iframe",B_="emulator/auth/iframe",$_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j_(r){const e=r.config;G(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?qa(e,B_):`https://${r.config.authDomain}/${U_}`,n={apiKey:e.apiKey,appName:r.name,v:Qr},i=z_.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Yi(n).slice(1)}`}async function q_(r){const e=await M_(r),t=jt().gapi;return G(t,r,"internal-error"),e.open({where:document.body,url:j_(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$_,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=zt(r,"network-request-failed"),l=jt().setTimeout(()=>{s(a)},F_.get());function c(){jt().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W_=500,G_=600,K_="_blank",Q_="http://localhost";class Bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Y_(r,e,t,n=W_,i=G_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},H_),{width:n.toString(),height:i.toString(),top:s,left:a}),h=Ze().toLowerCase();t&&(l=kh(h)?K_:t),Sh(h)&&(e=e||Q_,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,R])=>`${m}${v}=${R},`,"");if(ym(h)&&l!=="_self")return X_(e||"",l),new Bc(null);const y=window.open(e||"",l,f);G(y,r,"popup-blocked");try{y.focus()}catch{}return new Bc(y)}function X_(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="__/auth/handler",Z_="emulator/auth/handler",ey=encodeURIComponent("fac");async function $c(r,e,t,n,i,s){G(r.config.authDomain,r,"auth-domain-config-required"),G(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Qr,eventId:i};if(e instanceof Mh){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",$p(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))a[f]=y}if(e instanceof Zi){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await r._getAppCheckToken(),h=c?`#${ey}=${encodeURIComponent(c)}`:"";return`${ty(r)}?${Yi(l).slice(1)}${h}`}function ty({config:r}){return r.emulator?qa(r,Z_):`https://${r.authDomain}/${J_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="webStorageSupport";class ny{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qh,this._completeRedirectFn=R_,this._overrideRedirectResult=I_}async _openPopup(e,t,n,i){var s;mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await $c(e,t,n,ma(),i);return Y_(e,a,Qa())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await $c(e,t,n,ma(),i);return s_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(mn(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await q_(e),n=new k_(e);return t.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zo,{type:Zo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zo];a!==void 0&&t(!!a),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=N_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nh()||Wa()||yo()}}const ry=ny;var zc="@firebase/auth",jc="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oy(r){Br(new nr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oh(r)},h=new bm(n,i,s,c);return Om(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Br(new nr("auth-internal",e=>{const t=hr(e.getProvider("auth").getImmediate());return(n=>new iy(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(zc,jc,sy(r)),Dn(zc,jc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=5*60,ly=hh("authIdTokenMaxAge")||ay;let qc=null;const cy=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ly)return;const i=t==null?void 0:t.token;qc!==i&&(qc=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uy(r=gh()){const e=$a(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Nm(r,{popupRedirectResolver:ry,persistence:[p_,n_,qh]}),n=hh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=cy(s.toString());Jm(t,a,()=>a(t.currentUser)),Xm(t,l=>a(l))}}const i=ch("auth");return i&&Lm(t,`http://${i}`),t}function hy(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Rm({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=zt("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",hy().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oy("Browser");const Sr=[];function vo(r,e=de){let t;const n=new Set;function i(l){if(Ct(r,l)&&(r=l,t)){const c=!Sr.length;for(const h of n)h[1](),Sr.push(h,r);if(c){for(let h=0;h<Sr.length;h+=2)Sr[h][0](Sr[h+1]);Sr.length=0}}}function s(l){i(l(r))}function a(l,c=de){const h=[l,c];return n.add(h),n.size===1&&(t=e(i,s)||de),l(r),()=>{n.delete(h),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}const ts=vo("pageNews"),or=vo(null),Xh="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20297%20297'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3ccircle%20style='fill:%23345065;'%20cx='148.5'%20cy='148.5'%20r='148.5'/%3e%3c/g%3e%3cpath%20style='fill:%23213947;'%20d='M226.9,121.35L68.119,173.689l118.393,118.393c51.458-13.587,91.973-54.098,105.566-105.554%20L226.9,121.35z'/%3e%3cpath%20style='fill:%23FFFFFF;'%20d='M148.5,90.189c-43.836,0-81.503,23.989-98,58.311c16.497,34.322,54.164,58.311,98,58.311%20s81.503-23.989,98-58.311C230.003,114.178,192.336,90.189,148.5,90.189z'/%3e%3cpath%20style='fill:%23EDECEB;'%20d='M148.5,90.189c-0.335,0-0.666,0.014-1,0.017v116.588c0.334,0.003,0.665,0.017,1,0.017%20c43.836,0,81.503-23.989,98-58.311C230.003,114.178,192.336,90.189,148.5,90.189z'/%3e%3ccircle%20style='fill:%239ADAD9;'%20cx='148.5'%20cy='148.5'%20r='49.5'/%3e%3cpath%20style='fill:%2380B7B4;'%20d='M148.5,99c-0.335,0-0.666,0.019-1,0.025v98.949c0.334,0.007,0.665,0.025,1,0.025%20c27.338,0,49.5-22.162,49.5-49.5C198,121.162,175.838,99,148.5,99z'/%3e%3ccircle%20style='fill:%235D7486;'%20cx='148.5'%20cy='148.5'%20r='23'/%3e%3cpath%20style='fill:%23345065;'%20d='M148.5,125.5c-0.335,0-0.668,0.011-1,0.025v45.949c0.332,0.014,0.665,0.025,1,0.025%20c12.703,0,23-10.297,23-23C171.5,135.797,161.203,125.5,148.5,125.5z'/%3e%3ccircle%20style='fill:%23FFFFFF;'%20cx='140.25'%20cy='140.25'%20r='8.25'/%3e%3c/g%3e%3c/svg%3e";function dy(r){let e,t,n,i;return{c(){e=B("button"),t=kt(r[0]),x(e,"class","svelte-1dm22il")},m(s,a){ve(s,e,a),D(e,t),n||(i=Be(e,"click",r[1]),n=!0)},p(s,[a]){a&1&&Kr(t,s[0])},i:de,o:de,d(s){s&&Te(e),n=!1,i()}}}function fy(r,e,t){let{text:n}=e,{renderPageProp:i}=e;function s(){ts.update(()=>i)}return r.$$set=a=>{"text"in a&&t(0,n=a.text),"renderPageProp"in a&&t(2,i=a.renderPageProp)},[n,s,i]}class Pr extends Xt{constructor(e){super(),Yt(this,e,fy,dy,Ct,{text:0,renderPageProp:2,handleClick:1})}get handleClick(){return this.$$.ctx[1]}}function py(r){let e,t,n,i,s,a;return{c(){e=B("p"),t=kt(r[1]),n=B("p"),i=B("button"),i.textContent="Logout",x(e,"class","text-sm font-semibold pr-3"),x(i,"id","logout"),x(i,"class","svelte-sbs7s3")},m(l,c){ve(l,e,c),D(e,t),ve(l,n,c),D(n,i),s||(a=Be(i,"click",r[2]),s=!0)},p(l,c){c&2&&Kr(t,l[1])},i:de,o:de,d(l){l&&(Te(e),Te(n)),s=!1,a()}}}function gy(r){let e,t;return e=new Pr({props:{text:"Login",renderPageProp:"pageLogin"}}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},p:de,i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function my(r){let e,t,n,i,s,a,l,c,h,f,y,m,v,R,P,k,U,M,V;a=new Pr({props:{text:"News",renderPageProp:"pageNews"}}),c=new Pr({props:{text:"Pubblica",renderPageProp:"pagePubblica"}}),f=new Pr({props:{text:"My News",renderPageProp:"pageMyNews"}}),m=new Pr({props:{text:"Come Lavoriamo",renderPageProp:"pageComeLavoriamo"}});const K=[gy,py],ee=[];function Y(w,g){return w[0]==null?0:1}return P=Y(r),k=ee[P]=K[P](r),M=new Pr({props:{text:"Register",renderPageProp:"pageRegister"}}),{c(){e=B("div"),t=B("div"),n=B("img"),s=q(),ot(a.$$.fragment),l=q(),ot(c.$$.fragment),h=q(),ot(f.$$.fragment),y=q(),ot(m.$$.fragment),v=q(),R=B("div"),k.c(),U=q(),ot(M.$$.fragment),op(n.src,i=Xh)||x(n,"src",i),x(n,"width","50px"),x(n,"height","50px"),x(n,"alt",""),x(n,"class","mr-2"),x(e,"class","navbar bg-base-300 flex justify-between")},m(w,g){ve(w,e,g),D(e,t),D(t,n),D(t,s),Qe(a,t,null),D(t,l),Qe(c,t,null),D(t,h),Qe(f,t,null),D(t,y),Qe(m,t,null),D(e,v),D(e,R),ee[P].m(R,null),D(R,U),Qe(M,R,null),V=!0},p(w,[g]){let _=P;P=Y(w),P===_?ee[P].p(w,g):(cn(),ae(ee[_],1,1,()=>{ee[_]=null}),un(),k=ee[P],k?k.p(w,g):(k=ee[P]=K[P](w),k.c()),Z(k,1),k.m(R,U))},i(w){V||(Z(a.$$.fragment,w),Z(c.$$.fragment,w),Z(f.$$.fragment,w),Z(m.$$.fragment,w),Z(k),Z(M.$$.fragment,w),V=!0)},o(w){ae(a.$$.fragment,w),ae(c.$$.fragment,w),ae(f.$$.fragment,w),ae(m.$$.fragment,w),ae(k),ae(M.$$.fragment,w),V=!1},d(w){w&&Te(e),Ye(a),Ye(c),Ye(f),Ye(m),ee[P].d(),Ye(M)}}}function _y(r,e,t){let n,i;pn(r,or,a=>t(0,i=a));let s=()=>{or.update(a=>null)};return r.$$.update=()=>{r.$$.dirty&1&&t(1,n=i!=null?i.user.email.substring(0,i.user.email.indexOf("@")):"user")},[i,n,s]}class yy extends Xt{constructor(e){super(),Yt(this,e,_y,my,Ct,{})}}function Ey(r){let e;return{c(){e=B("footer"),e.innerHTML="<aside><p>Copyright © 2024 - All right reserved by Occhio di Luce S.P.A.</p></aside>",x(e,"class","footer footer-center p-4 bg-base-300 text-base-content svelte-a8karz")},m(t,n){ve(t,e,n)},p:de,i:de,o:de,d(t){t&&Te(e)}}}class wy extends Xt{constructor(e){super(),Yt(this,e,null,Ey,Ct,{})}}const Ty="/assets/fungo-CAHdV4qg.jpg";function Hc(r){let e,t;return{c(){e=B("p"),t=kt(r[4]),x(e,"class","text-sm pl-1 text-rose-500")},m(n,i){ve(n,e,i),D(e,t)},p(n,i){i&16&&Kr(t,n[4])},d(n){n&&Te(e)}}}function Wc(r){let e;return{c(){e=B("p"),e.textContent="password errata",x(e,"class","text-sm pl-1 text-rose-500")},m(t,n){ve(t,e,n)},d(t){t&&Te(e)}}}function vy(r){let e,t,n,i,s,a,l,c,h,f,y,m,v,R,P,k,U,M,V,K,ee,Y,w,g,_,T,b,I,E,We,lt,Jt,ht,Ae,ze,ye,xe,le,Ee,fe,te=r[2]!==""&&Hc(r),ce=r[3]!==""&&Wc();return{c(){e=B("div"),t=B("div"),n=B("figure"),n.innerHTML=`<img src="${Ty}" alt="bgn"/>`,i=q(),s=B("div"),a=B("h2"),a.textContent="Login",l=q(),c=B("form"),h=B("p"),h.textContent="Email",f=q(),y=B("label"),m=Ft("svg"),v=Ft("path"),R=Ft("path"),P=q(),k=B("input"),M=q(),te&&te.c(),V=q(),K=B("br"),ee=q(),Y=B("p"),Y.textContent="Password",w=q(),g=B("label"),_=Ft("svg"),T=Ft("path"),b=q(),I=B("input"),We=q(),ce&&ce.c(),lt=q(),Jt=B("br"),ht=q(),Ae=B("div"),ze=B("button"),ze.textContent="Cancel",ye=q(),xe=B("button"),le=kt("Login"),x(a,"class","card-title"),x(h,"class","text-lg pl-1 pb-2"),x(v,"d","M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"),x(R,"d","M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"),x(m,"xmlns","http://www.w3.org/2000/svg"),x(m,"viewBox","0 0 16 16"),x(m,"fill","currentColor"),x(m,"class","w-4 h-4 opacity-70"),x(k,"type","text"),x(k,"class","grow"),x(k,"placeholder","Email"),x(y,"class",U="input input-bordered flex items-center gap-2 "+r[2]),x(Y,"class","text-lg pl-1 pb-2"),x(T,"fill-rule","evenodd"),x(T,"d","M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"),x(T,"clip-rule","evenodd"),x(_,"xmlns","http://www.w3.org/2000/svg"),x(_,"viewBox","0 0 16 16"),x(_,"fill","currentColor"),x(_,"class","w-4 h-4 opacity-70"),x(I,"type","password"),x(I,"class","grow"),x(I,"placeholder","Password"),x(g,"class",E="input input-bordered flex items-center gap-2 "+r[3]),x(ze,"class","btn btn-outline btn-error justify-start"),x(xe,"type","submit"),x(xe,"class","btn btn-outline btn-success justify-end"),xe.disabled=r[5],Or(Ae,"witdh","100%"),Or(Ae,"display","flex"),Or(Ae,"justify-content","space-between"),x(s,"class","card-body"),x(t,"class","m-10 flex justify-center align-top card w-96 bg-gray-800 shadow-xl"),x(e,"id","center"),x(e,"class","svelte-11w4xhu")},m(ne,ke){ve(ne,e,ke),D(e,t),D(t,n),D(t,i),D(t,s),D(s,a),D(s,l),D(s,c),D(c,h),D(c,f),D(c,y),D(y,m),D(m,v),D(m,R),D(y,P),D(y,k),yt(k,r[0]),D(c,M),te&&te.m(c,null),D(c,V),D(c,K),D(c,ee),D(c,Y),D(c,w),D(c,g),D(g,_),D(_,T),D(g,b),D(g,I),yt(I,r[1]),D(c,We),ce&&ce.m(c,null),D(c,lt),D(c,Jt),D(c,ht),D(c,Ae),D(Ae,ze),D(Ae,ye),D(Ae,xe),D(xe,le),Ee||(fe=[Be(k,"input",r[9]),Be(I,"input",r[10]),Be(ze,"click",r[6]),Be(c,"submit",nh(r[7]))],Ee=!0)},p(ne,[ke]){ke&1&&k.value!==ne[0]&&yt(k,ne[0]),ke&4&&U!==(U="input input-bordered flex items-center gap-2 "+ne[2])&&x(y,"class",U),ne[2]!==""?te?te.p(ne,ke):(te=Hc(ne),te.c(),te.m(c,V)):te&&(te.d(1),te=null),ke&2&&I.value!==ne[1]&&yt(I,ne[1]),ke&8&&E!==(E="input input-bordered flex items-center gap-2 "+ne[3])&&x(g,"class",E),ne[3]!==""?ce||(ce=Wc(),ce.c(),ce.m(c,lt)):ce&&(ce.d(1),ce=null),ke&32&&(xe.disabled=ne[5])},i:de,o:de,d(ne){ne&&Te(e),te&&te.d(),ce&&ce.d(),Ee=!1,Qt(fe)}}}function Iy(r,e,t){let n,{auth:i}=e,s="",a="",l="",c="",h="",f=()=>{t(0,s=""),t(1,a="")},y=R=>{Ym(i,s,a).then(P=>{or.update(k=>P),ts.update(()=>"pageNews")}).catch(P=>{const k=P.code;(k==="auth/invalid-email"||k==="auth/user-not-found")&&(t(2,l="border-2 border-rose-500"),t(4,h="mail o password errata")),k==="auth/wrong-password"&&t(3,c="border-2 border-rose-500")}),f()};function m(){s=this.value,t(0,s)}function v(){a=this.value,t(1,a)}return r.$$set=R=>{"auth"in R&&t(8,i=R.auth)},r.$$.update=()=>{r.$$.dirty&3&&t(5,n=s===""||a==="")},[s,a,l,c,h,n,f,y,i,m,v]}class Ay extends Xt{constructor(e){super(),Yt(this,e,Iy,vy,Ct,{auth:8})}}const by="/assets/mementomori-CYikS-5i.jpg";function Gc(r){let e,t;return{c(){e=B("p"),t=kt(r[4]),x(e,"class","text-sm pl-1 text-rose-500")},m(n,i){ve(n,e,i),D(e,t)},p(n,i){i&16&&Kr(t,n[4])},d(n){n&&Te(e)}}}function Kc(r){let e;return{c(){e=B("p"),e.textContent='"password debole"',x(e,"class","text-sm pl-1 text-rose-500")},m(t,n){ve(t,e,n)},d(t){t&&Te(e)}}}function Ry(r){let e,t,n,i,s,a,l,c,h,f,y,m,v,R,P,k,U,M,V,K,ee,Y,w,g,_,T,b,I,E,We,lt,Jt,ht,Ae,ze,ye,xe,le,Ee,fe,te=r[2]!==""&&Gc(r),ce=r[3]!==""&&Kc();return{c(){e=B("div"),t=B("div"),n=B("figure"),n.innerHTML=`<img src="${by}" alt="bgn"/>`,i=q(),s=B("div"),a=B("h2"),a.textContent="Register",l=q(),c=B("form"),h=B("p"),h.textContent="Email",f=q(),y=B("label"),m=Ft("svg"),v=Ft("path"),R=Ft("path"),P=q(),k=B("input"),M=q(),te&&te.c(),V=q(),K=B("br"),ee=q(),Y=B("p"),Y.textContent="Password",w=q(),g=B("label"),_=Ft("svg"),T=Ft("path"),b=q(),I=B("input"),We=q(),ce&&ce.c(),lt=q(),Jt=B("br"),ht=q(),Ae=B("div"),ze=B("button"),ze.textContent="Cancel",ye=q(),xe=B("button"),le=kt("Register"),x(a,"class","card-title"),x(h,"class","text-lg pl-1 pb-2"),x(v,"d","M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"),x(R,"d","M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"),x(m,"xmlns","http://www.w3.org/2000/svg"),x(m,"viewBox","0 0 16 16"),x(m,"fill","currentColor"),x(m,"class","w-4 h-4 opacity-70"),x(k,"type","text"),x(k,"class","grow"),x(k,"placeholder","Email"),x(y,"class",U="input input-bordered flex items-center gap-2 "+r[2]),x(Y,"class","text-lg pl-1 pb-2"),x(T,"fill-rule","evenodd"),x(T,"d","M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"),x(T,"clip-rule","evenodd"),x(_,"xmlns","http://www.w3.org/2000/svg"),x(_,"viewBox","0 0 16 16"),x(_,"fill","currentColor"),x(_,"class","w-4 h-4 opacity-70"),x(I,"id","passwdInput"),x(I,"type","password"),x(I,"class","grow"),x(I,"placeholder","Password"),x(g,"class",E="input input-bordered flex items-center gap-2 "+r[3]),x(ze,"class","btn btn-outline btn-error justify-start"),x(xe,"class","btn btn-outline btn-success justify-end"),xe.disabled=r[5],Or(Ae,"witdh","100%"),Or(Ae,"display","flex"),Or(Ae,"justify-content","space-between"),x(s,"class","card-body"),x(t,"class","m-10 flex justify-center align-top card w-96 bg-gray-800 shadow-xl"),x(e,"id","center"),x(e,"class","svelte-11w4xhu")},m(ne,ke){ve(ne,e,ke),D(e,t),D(t,n),D(t,i),D(t,s),D(s,a),D(s,l),D(s,c),D(c,h),D(c,f),D(c,y),D(y,m),D(m,v),D(m,R),D(y,P),D(y,k),yt(k,r[0]),D(c,M),te&&te.m(c,null),D(c,V),D(c,K),D(c,ee),D(c,Y),D(c,w),D(c,g),D(g,_),D(_,T),D(g,b),D(g,I),yt(I,r[1]),D(c,We),ce&&ce.m(c,null),D(c,lt),D(c,Jt),D(c,ht),D(c,Ae),D(Ae,ze),D(Ae,ye),D(Ae,xe),D(xe,le),Ee||(fe=[Be(k,"input",r[10]),Be(I,"input",r[11]),Be(ze,"click",r[6]),Be(xe,"click",r[7]),Be(c,"submit",nh(r[9]))],Ee=!0)},p(ne,[ke]){ke&1&&k.value!==ne[0]&&yt(k,ne[0]),ke&4&&U!==(U="input input-bordered flex items-center gap-2 "+ne[2])&&x(y,"class",U),ne[2]!==""?te?te.p(ne,ke):(te=Gc(ne),te.c(),te.m(c,V)):te&&(te.d(1),te=null),ke&2&&I.value!==ne[1]&&yt(I,ne[1]),ke&8&&E!==(E="input input-bordered flex items-center gap-2 "+ne[3])&&x(g,"class",E),ne[3]!==""?ce||(ce=Kc(),ce.c(),ce.m(c,lt)):ce&&(ce.d(1),ce=null),ke&32&&(xe.disabled=ne[5])},i:de,o:de,d(ne){ne&&Te(e),te&&te.d(),ce&&ce.d(),Ee=!1,Qt(fe)}}}function Sy(r,e,t){let n,{auth:i}=e,s="",a="",l=()=>{t(0,s=""),t(1,a="")},c="",h="",f="",y=()=>{Qm(i,s,a).then(P=>{t(2,c=""),t(3,h=""),or.update(k=>P),ts.update(()=>"pageNews")}).catch(P=>{const k=P.code;k==="auth/email-already-in-use"&&(t(2,c="border-2 border-rose-500"),t(4,f="mail registrata")),k==="auth/invalid-email"&&(t(2,c="border-2 border-rose-500"),t(4,f="mail malformata")),k==="auth/weak-password"&&t(3,h="border-2 border-rose-500"),k==="auth/network-error"&&alert("Connessione ad internet assente"),k==="auth/internal-error"&&alert("Il sistema è momentaneamento sospeso")}),t(1,a=t(0,s=""))};function m(P){fp.call(this,r,P)}function v(){s=this.value,t(0,s)}function R(){a=this.value,t(1,a)}return r.$$set=P=>{"auth"in P&&t(8,i=P.auth)},r.$$.update=()=>{r.$$.dirty&3&&t(5,n=s===""||a==="")},[s,a,c,h,f,n,l,y,i,m,v,R]}class ky extends Xt{constructor(e){super(),Yt(this,e,Sy,Ry,Ct,{auth:8})}}/*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */const{entries:Jh,setPrototypeOf:Qc,isFrozen:Py,getPrototypeOf:Cy,getOwnPropertyDescriptor:Dy}=Object;let{freeze:ut,seal:wt,create:Zh}=Object,{apply:wa,construct:Ta}=typeof Reflect<"u"&&Reflect;ut||(ut=function(e){return e});wt||(wt=function(e){return e});wa||(wa=function(e,t,n){return e.apply(t,n)});Ta||(Ta=function(e,t){return new e(...t)});const Cs=gt(Array.prototype.forEach),Yc=gt(Array.prototype.pop),yi=gt(Array.prototype.push),qs=gt(String.prototype.toLowerCase),ea=gt(String.prototype.toString),Xc=gt(String.prototype.match),Ei=gt(String.prototype.replace),xy=gt(String.prototype.indexOf),Ny=gt(String.prototype.trim),bt=gt(Object.prototype.hasOwnProperty),ct=gt(RegExp.prototype.test),wi=Oy(TypeError);function gt(r){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return wa(r,e,n)}}function Oy(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ta(r,t)}}function re(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qs;Qc&&Qc(r,null);let n=e.length;for(;n--;){let i=e[n];if(typeof i=="string"){const s=t(i);s!==i&&(Py(e)||(e[n]=s),i=s)}r[i]=!0}return r}function Ly(r){for(let e=0;e<r.length;e++)bt(r,e)||(r[e]=null);return r}function Jn(r){const e=Zh(null);for(const[t,n]of Jh(r))bt(r,t)&&(Array.isArray(n)?e[t]=Ly(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=Jn(n):e[t]=n);return e}function Ds(r,e){for(;r!==null;){const n=Dy(r,e);if(n){if(n.get)return gt(n.get);if(typeof n.value=="function")return gt(n.value)}r=Cy(r)}function t(){return null}return t}const Jc=ut(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ta=ut(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),na=ut(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Vy=ut(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ra=ut(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),My=ut(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Zc=ut(["#text"]),eu=ut(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ia=ut(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),tu=ut(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),xs=ut(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Fy=wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Uy=wt(/<%[\w\W]*|[\w\W]*%>/gm),By=wt(/\${[\w\W]*}/gm),$y=wt(/^data-[\-\w.\u00B7-\uFFFF]/),zy=wt(/^aria-[\-\w]+$/),ed=wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),jy=wt(/^(?:\w+script|data):/i),qy=wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),td=wt(/^html$/i),Hy=wt(/^[a-z][.\w]*(-[.\w]+)+$/i);var nu=Object.freeze({__proto__:null,MUSTACHE_EXPR:Fy,ERB_EXPR:Uy,TMPLIT_EXPR:By,DATA_ATTR:$y,ARIA_ATTR:zy,IS_ALLOWED_URI:ed,IS_SCRIPT_OR_DATA:jy,ATTR_WHITESPACE:qy,DOCTYPE_NAME:td,CUSTOM_ELEMENT:Hy});const Ti={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Wy=function(){return typeof window>"u"?null:window},Gy=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(n=t.getAttribute(i));const s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function nd(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wy();const e=j=>nd(j);if(e.version="3.1.5",e.removed=[],!r||!r.document||r.document.nodeType!==Ti.document)return e.isSupported=!1,e;let{document:t}=r;const n=t,i=n.currentScript,{DocumentFragment:s,HTMLTemplateElement:a,Node:l,Element:c,NodeFilter:h,NamedNodeMap:f=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:y,DOMParser:m,trustedTypes:v}=r,R=c.prototype,P=Ds(R,"cloneNode"),k=Ds(R,"nextSibling"),U=Ds(R,"childNodes"),M=Ds(R,"parentNode");if(typeof a=="function"){const j=t.createElement("template");j.content&&j.content.ownerDocument&&(t=j.content.ownerDocument)}let V,K="";const{implementation:ee,createNodeIterator:Y,createDocumentFragment:w,getElementsByTagName:g}=t,{importNode:_}=n;let T={};e.isSupported=typeof Jh=="function"&&typeof M=="function"&&ee&&ee.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:b,ERB_EXPR:I,TMPLIT_EXPR:E,DATA_ATTR:We,ARIA_ATTR:lt,IS_SCRIPT_OR_DATA:Jt,ATTR_WHITESPACE:ht,CUSTOM_ELEMENT:Ae}=nu;let{IS_ALLOWED_URI:ze}=nu,ye=null;const xe=re({},[...Jc,...ta,...na,...ra,...Zc]);let le=null;const Ee=re({},[...eu,...ia,...tu,...xs]);let fe=Object.seal(Zh(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),te=null,ce=null,ne=!0,ke=!0,us=!1,Un=!0,Tt=!1,Bn=!0,vt=!1,$n=!1,zn=!1,Zt=!1,gr=!1,mr=!1,ti=!0,_r=!1;const hs="user-content-";let ni=!0,en=!1,Dt={},tn=null;const Ve=re({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let je=null;const jn=re({},["audio","video","img","source","image","track"]);let yr=null;const ri=re({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Er="http://www.w3.org/1998/Math/MathML",xt="http://www.w3.org/2000/svg",mt="http://www.w3.org/1999/xhtml";let nn=mt,qn=!1,ii=null;const Fo=re({},[Er,xt,mt],ea);let rn=null;const ds=["application/xhtml+xml","text/html"],fs="text/html";let Re=null,Nt=null;const si=t.createElement("form"),Ot=function(A){return A instanceof RegExp||A instanceof Function},wr=function(){let A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Nt&&Nt===A)){if((!A||typeof A!="object")&&(A={}),A=Jn(A),rn=ds.indexOf(A.PARSER_MEDIA_TYPE)===-1?fs:A.PARSER_MEDIA_TYPE,Re=rn==="application/xhtml+xml"?ea:qs,ye=bt(A,"ALLOWED_TAGS")?re({},A.ALLOWED_TAGS,Re):xe,le=bt(A,"ALLOWED_ATTR")?re({},A.ALLOWED_ATTR,Re):Ee,ii=bt(A,"ALLOWED_NAMESPACES")?re({},A.ALLOWED_NAMESPACES,ea):Fo,yr=bt(A,"ADD_URI_SAFE_ATTR")?re(Jn(ri),A.ADD_URI_SAFE_ATTR,Re):ri,je=bt(A,"ADD_DATA_URI_TAGS")?re(Jn(jn),A.ADD_DATA_URI_TAGS,Re):jn,tn=bt(A,"FORBID_CONTENTS")?re({},A.FORBID_CONTENTS,Re):Ve,te=bt(A,"FORBID_TAGS")?re({},A.FORBID_TAGS,Re):{},ce=bt(A,"FORBID_ATTR")?re({},A.FORBID_ATTR,Re):{},Dt=bt(A,"USE_PROFILES")?A.USE_PROFILES:!1,ne=A.ALLOW_ARIA_ATTR!==!1,ke=A.ALLOW_DATA_ATTR!==!1,us=A.ALLOW_UNKNOWN_PROTOCOLS||!1,Un=A.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Tt=A.SAFE_FOR_TEMPLATES||!1,Bn=A.SAFE_FOR_XML!==!1,vt=A.WHOLE_DOCUMENT||!1,Zt=A.RETURN_DOM||!1,gr=A.RETURN_DOM_FRAGMENT||!1,mr=A.RETURN_TRUSTED_TYPE||!1,zn=A.FORCE_BODY||!1,ti=A.SANITIZE_DOM!==!1,_r=A.SANITIZE_NAMED_PROPS||!1,ni=A.KEEP_CONTENT!==!1,en=A.IN_PLACE||!1,ze=A.ALLOWED_URI_REGEXP||ed,nn=A.NAMESPACE||mt,fe=A.CUSTOM_ELEMENT_HANDLING||{},A.CUSTOM_ELEMENT_HANDLING&&Ot(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(fe.tagNameCheck=A.CUSTOM_ELEMENT_HANDLING.tagNameCheck),A.CUSTOM_ELEMENT_HANDLING&&Ot(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(fe.attributeNameCheck=A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),A.CUSTOM_ELEMENT_HANDLING&&typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(fe.allowCustomizedBuiltInElements=A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Tt&&(ke=!1),gr&&(Zt=!0),Dt&&(ye=re({},Zc),le=[],Dt.html===!0&&(re(ye,Jc),re(le,eu)),Dt.svg===!0&&(re(ye,ta),re(le,ia),re(le,xs)),Dt.svgFilters===!0&&(re(ye,na),re(le,ia),re(le,xs)),Dt.mathMl===!0&&(re(ye,ra),re(le,tu),re(le,xs))),A.ADD_TAGS&&(ye===xe&&(ye=Jn(ye)),re(ye,A.ADD_TAGS,Re)),A.ADD_ATTR&&(le===Ee&&(le=Jn(le)),re(le,A.ADD_ATTR,Re)),A.ADD_URI_SAFE_ATTR&&re(yr,A.ADD_URI_SAFE_ATTR,Re),A.FORBID_CONTENTS&&(tn===Ve&&(tn=Jn(tn)),re(tn,A.FORBID_CONTENTS,Re)),ni&&(ye["#text"]=!0),vt&&re(ye,["html","head","body"]),ye.table&&(re(ye,["tbody"]),delete te.tbody),A.TRUSTED_TYPES_POLICY){if(typeof A.TRUSTED_TYPES_POLICY.createHTML!="function")throw wi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof A.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw wi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');V=A.TRUSTED_TYPES_POLICY,K=V.createHTML("")}else V===void 0&&(V=Gy(v,i)),V!==null&&typeof K=="string"&&(K=V.createHTML(""));ut&&ut(A),Nt=A}},Hn=re({},["mi","mo","mn","ms","mtext"]),oi=re({},["foreignobject","annotation-xml"]),Wn=re({},["title","style","font","a","script"]),ai=re({},[...ta,...na,...Vy]),qe=re({},[...ra,...My]),ps=function(A){let L=M(A);(!L||!L.tagName)&&(L={namespaceURI:nn,tagName:"template"});const $=qs(A.tagName),pe=qs(L.tagName);return ii[A.namespaceURI]?A.namespaceURI===xt?L.namespaceURI===mt?$==="svg":L.namespaceURI===Er?$==="svg"&&(pe==="annotation-xml"||Hn[pe]):!!ai[$]:A.namespaceURI===Er?L.namespaceURI===mt?$==="math":L.namespaceURI===xt?$==="math"&&oi[pe]:!!qe[$]:A.namespaceURI===mt?L.namespaceURI===xt&&!oi[pe]||L.namespaceURI===Er&&!Hn[pe]?!1:!qe[$]&&(Wn[$]||!ai[$]):!!(rn==="application/xhtml+xml"&&ii[A.namespaceURI]):!1},et=function(A){yi(e.removed,{element:A});try{A.parentNode.removeChild(A)}catch{A.remove()}},Lt=function(A,L){try{yi(e.removed,{attribute:L.getAttributeNode(A),from:L})}catch{yi(e.removed,{attribute:null,from:L})}if(L.removeAttribute(A),A==="is"&&!le[A])if(Zt||gr)try{et(L)}catch{}else try{L.setAttribute(A,"")}catch{}},gs=function(A){let L=null,$=null;if(zn)A="<remove></remove>"+A;else{const Fe=Xc(A,/^[\r\n\t ]+/);$=Fe&&Fe[0]}rn==="application/xhtml+xml"&&nn===mt&&(A='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+A+"</body></html>");const pe=V?V.createHTML(A):A;if(nn===mt)try{L=new m().parseFromString(pe,rn)}catch{}if(!L||!L.documentElement){L=ee.createDocument(nn,"template",null);try{L.documentElement.innerHTML=qn?K:pe}catch{}}const Me=L.body||L.documentElement;return A&&$&&Me.insertBefore(t.createTextNode($),Me.childNodes[0]||null),nn===mt?g.call(L,vt?"html":"body")[0]:vt?L.documentElement:Me},ms=function(A){return Y.call(A.ownerDocument||A,A,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},sn=function(A){return A instanceof y&&(typeof A.nodeName!="string"||typeof A.textContent!="string"||typeof A.removeChild!="function"||!(A.attributes instanceof f)||typeof A.removeAttribute!="function"||typeof A.setAttribute!="function"||typeof A.namespaceURI!="string"||typeof A.insertBefore!="function"||typeof A.hasChildNodes!="function")},_s=function(A){return typeof l=="function"&&A instanceof l},It=function(A,L,$){T[A]&&Cs(T[A],pe=>{pe.call(e,L,$,Nt)})},Gn=function(A){let L=null;if(It("beforeSanitizeElements",A,null),sn(A))return et(A),!0;const $=Re(A.nodeName);if(It("uponSanitizeElement",A,{tagName:$,allowedTags:ye}),A.hasChildNodes()&&!_s(A.firstElementChild)&&ct(/<[/\w]/g,A.innerHTML)&&ct(/<[/\w]/g,A.textContent)||A.nodeType===Ti.progressingInstruction||Bn&&A.nodeType===Ti.comment&&ct(/<[/\w]/g,A.data))return et(A),!0;if(!ye[$]||te[$]){if(!te[$]&&Tr($)&&(fe.tagNameCheck instanceof RegExp&&ct(fe.tagNameCheck,$)||fe.tagNameCheck instanceof Function&&fe.tagNameCheck($)))return!1;if(ni&&!tn[$]){const pe=M(A)||A.parentNode,Me=U(A)||A.childNodes;if(Me&&pe){const Fe=Me.length;for(let Ue=Fe-1;Ue>=0;--Ue){const dt=P(Me[Ue],!0);dt.__removalCount=(A.__removalCount||0)+1,pe.insertBefore(dt,k(A))}}}return et(A),!0}return A instanceof c&&!ps(A)||($==="noscript"||$==="noembed"||$==="noframes")&&ct(/<\/no(script|embed|frames)/i,A.innerHTML)?(et(A),!0):(Tt&&A.nodeType===Ti.text&&(L=A.textContent,Cs([b,I,E],pe=>{L=Ei(L,pe," ")}),A.textContent!==L&&(yi(e.removed,{element:A.cloneNode()}),A.textContent=L)),It("afterSanitizeElements",A,null),!1)},li=function(A,L,$){if(ti&&(L==="id"||L==="name")&&($ in t||$ in si))return!1;if(!(ke&&!ce[L]&&ct(We,L))){if(!(ne&&ct(lt,L))){if(!le[L]||ce[L]){if(!(Tr(A)&&(fe.tagNameCheck instanceof RegExp&&ct(fe.tagNameCheck,A)||fe.tagNameCheck instanceof Function&&fe.tagNameCheck(A))&&(fe.attributeNameCheck instanceof RegExp&&ct(fe.attributeNameCheck,L)||fe.attributeNameCheck instanceof Function&&fe.attributeNameCheck(L))||L==="is"&&fe.allowCustomizedBuiltInElements&&(fe.tagNameCheck instanceof RegExp&&ct(fe.tagNameCheck,$)||fe.tagNameCheck instanceof Function&&fe.tagNameCheck($))))return!1}else if(!yr[L]){if(!ct(ze,Ei($,ht,""))){if(!((L==="src"||L==="xlink:href"||L==="href")&&A!=="script"&&xy($,"data:")===0&&je[A])){if(!(us&&!ct(Jt,Ei($,ht,"")))){if($)return!1}}}}}}return!0},Tr=function(A){return A!=="annotation-xml"&&Xc(A,Ae)},Kn=function(A){It("beforeSanitizeAttributes",A,null);const{attributes:L}=A;if(!L)return;const $={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:le};let pe=L.length;for(;pe--;){const Me=L[pe],{name:Fe,namespaceURI:Ue,value:dt}=Me,on=Re(Fe);let De=Fe==="value"?dt:Ny(dt);if($.attrName=on,$.attrValue=De,$.keepAttr=!0,$.forceKeepAttr=void 0,It("uponSanitizeAttribute",A,$),De=$.attrValue,$.forceKeepAttr||(Lt(Fe,A),!$.keepAttr))continue;if(!Un&&ct(/\/>/i,De)){Lt(Fe,A);continue}if(Bn&&ct(/((--!?|])>)|<\/(style|title)/i,De)){Lt(Fe,A);continue}Tt&&Cs([b,I,E],vr=>{De=Ei(De,vr," ")});const Mt=Re(A.nodeName);if(li(Mt,on,De)){if(_r&&(on==="id"||on==="name")&&(Lt(Fe,A),De=hs+De),V&&typeof v=="object"&&typeof v.getAttributeType=="function"&&!Ue)switch(v.getAttributeType(Mt,on)){case"TrustedHTML":{De=V.createHTML(De);break}case"TrustedScriptURL":{De=V.createScriptURL(De);break}}try{Ue?A.setAttributeNS(Ue,Fe,De):A.setAttribute(Fe,De),sn(A)?et(A):Yc(e.removed)}catch{}}}It("afterSanitizeAttributes",A,null)},Vt=function j(A){let L=null;const $=ms(A);for(It("beforeSanitizeShadowDOM",A,null);L=$.nextNode();)It("uponSanitizeShadowNode",L,null),!Gn(L)&&(L.content instanceof s&&j(L.content),Kn(L));It("afterSanitizeShadowDOM",A,null)};return e.sanitize=function(j){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,$=null,pe=null,Me=null;if(qn=!j,qn&&(j="<!-->"),typeof j!="string"&&!_s(j))if(typeof j.toString=="function"){if(j=j.toString(),typeof j!="string")throw wi("dirty is not a string, aborting")}else throw wi("toString is not a function");if(!e.isSupported)return j;if($n||wr(A),e.removed=[],typeof j=="string"&&(en=!1),en){if(j.nodeName){const dt=Re(j.nodeName);if(!ye[dt]||te[dt])throw wi("root node is forbidden and cannot be sanitized in-place")}}else if(j instanceof l)L=gs("<!---->"),$=L.ownerDocument.importNode(j,!0),$.nodeType===Ti.element&&$.nodeName==="BODY"||$.nodeName==="HTML"?L=$:L.appendChild($);else{if(!Zt&&!Tt&&!vt&&j.indexOf("<")===-1)return V&&mr?V.createHTML(j):j;if(L=gs(j),!L)return Zt?null:mr?K:""}L&&zn&&et(L.firstChild);const Fe=ms(en?j:L);for(;pe=Fe.nextNode();)Gn(pe)||(pe.content instanceof s&&Vt(pe.content),Kn(pe));if(en)return j;if(Zt){if(gr)for(Me=w.call(L.ownerDocument);L.firstChild;)Me.appendChild(L.firstChild);else Me=L;return(le.shadowroot||le.shadowrootmode)&&(Me=_.call(n,Me,!0)),Me}let Ue=vt?L.outerHTML:L.innerHTML;return vt&&ye["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&ct(td,L.ownerDocument.doctype.name)&&(Ue="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+Ue),Tt&&Cs([b,I,E],dt=>{Ue=Ei(Ue,dt," ")}),V&&mr?V.createHTML(Ue):Ue},e.setConfig=function(){let j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};wr(j),$n=!0},e.clearConfig=function(){Nt=null,$n=!1},e.isValidAttribute=function(j,A,L){Nt||wr({});const $=Re(j),pe=Re(A);return li($,pe,L)},e.addHook=function(j,A){typeof A=="function"&&(T[j]=T[j]||[],yi(T[j],A))},e.removeHook=function(j){if(T[j])return Yc(T[j])},e.removeHooks=function(j){T[j]&&(T[j]=[])},e.removeAllHooks=function(){T={}},e}var Ky=nd();function Xa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let dr=Xa();function rd(r){dr=r}const id=/[&<>"']/,Qy=new RegExp(id.source,"g"),sd=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Yy=new RegExp(sd.source,"g"),Xy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ru=r=>Xy[r];function pt(r,e){if(e){if(id.test(r))return r.replace(Qy,ru)}else if(sd.test(r))return r.replace(Yy,ru);return r}const Jy=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Zy(r){return r.replace(Jy,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const eE=/(^|[^\[])\^/g;function _e(r,e){let t=typeof r=="string"?r:r.source;e=e||"";const n={replace:(i,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(eE,"$1"),t=t.replace(i,a),n},getRegex:()=>new RegExp(t,e)};return n}function iu(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const xi={exec:()=>null};function su(r,e){const t=r.replace(/\|/g,(s,a,l)=>{let c=!1,h=a;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function vi(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function tE(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return-1}function ou(r,e,t,n){const i=e.href,s=e.title?pt(e.title):null,a=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:i,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:i,title:s,text:pt(a)}}function nE(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[a]=s;return a.length>=n.length?i.slice(n.length):i}).join(`
`)}class so{constructor(e){me(this,"options");me(this,"rules");me(this,"lexer");this.options=e||dr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:vi(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=nE(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=vi(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:vi(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=vi(t[0],`
`).split(`
`),i="",s="";const a=[];for(;n.length>0;){let l=!1;const c=[];let h;for(h=0;h<n.length;h++)if(/^ {0,3}>/.test(n[h]))c.push(n[h]),l=!0;else if(!l)c.push(n[h]);else break;n=n.slice(h);const f=c.join(`
`),y=f.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${f}`:f,s=s?`${s}
${y}`:y;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(y,a,!0),this.lexer.state.top=m,n.length===0)break;const v=a[a.length-1];if((v==null?void 0:v.type)==="code")break;if((v==null?void 0:v.type)==="blockquote"){const R=v,P=R.raw+`
`+n.join(`
`),k=this.blockquote(P);a[a.length-1]=k,i=i.substring(0,i.length-R.raw.length)+k.raw,s=s.substring(0,s.length-R.text.length)+k.text;break}else if((v==null?void 0:v.type)==="list"){const R=v,P=R.raw+`
`+n.join(`
`),k=this.list(P);a[a.length-1]=k,i=i.substring(0,i.length-v.raw.length)+k.raw,s=s.substring(0,s.length-R.raw.length)+k.raw,n=P.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const a=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",c="",h=!1;for(;e;){let f=!1;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let y=t[2].split(`
`,1)[0].replace(/^\t+/,U=>" ".repeat(3*U.length)),m=e.split(`
`,1)[0],v=0;this.options.pedantic?(v=2,c=y.trimStart()):(v=t[2].search(/[^ ]/),v=v>4?1:v,c=y.slice(v),v+=t[1].length);let R=!1;if(!y&&/^ *$/.test(m)&&(l+=m+`
`,e=e.substring(m.length+1),f=!0),!f){const U=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),M=new RegExp(`^ {0,${Math.min(3,v-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),V=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:\`\`\`|~~~)`),K=new RegExp(`^ {0,${Math.min(3,v-1)}}#`);for(;e;){const ee=e.split(`
`,1)[0];if(m=ee,this.options.pedantic&&(m=m.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),V.test(m)||K.test(m)||U.test(m)||M.test(e))break;if(m.search(/[^ ]/)>=v||!m.trim())c+=`
`+m.slice(v);else{if(R||y.search(/[^ ]/)>=4||V.test(y)||K.test(y)||M.test(y))break;c+=`
`+m}!R&&!m.trim()&&(R=!0),l+=ee+`
`,e=e.substring(ee.length+1),y=m.slice(v)}}s.loose||(h?s.loose=!0:/\n *\n *$/.test(l)&&(h=!0));let P=null,k;this.options.gfm&&(P=/^\[[ xX]\] /.exec(c),P&&(k=P[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:l,task:!!P,checked:k,loose:!1,text:c,tokens:[]}),s.raw+=l}s.items[s.items.length-1].raw=l.trimEnd(),s.items[s.items.length-1].text=c.trimEnd(),s.raw=s.raw.trimEnd();for(let f=0;f<s.items.length;f++)if(this.lexer.state.top=!1,s.items[f].tokens=this.lexer.blockTokens(s.items[f].text,[]),!s.loose){const y=s.items[f].tokens.filter(v=>v.type==="space"),m=y.length>0&&y.some(v=>/\n.*\n/.test(v.raw));s.loose=m}if(s.loose)for(let f=0;f<s.items.length;f++)s.items[f].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=su(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?a.align.push("right"):/^ *:-+: *$/.test(l)?a.align.push("center"):/^ *:-+ *$/.test(l)?a.align.push("left"):a.align.push(null);for(let l=0;l<n.length;l++)a.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:a.align[l]});for(const l of s)a.rows.push(su(l,a.header.length).map((c,h)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:a.align[h]})));return a}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:pt(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=vi(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=tE(t[2],"()");if(a>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],s=a[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),ou(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),s=t[i.toLowerCase()];if(!s){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return ou(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const a=[...i[0]].length-1;let l,c,h=a,f=0;const y=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(y.lastIndex=0,t=t.slice(-1*e.length+a);(i=y.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(c=[...l].length,i[3]||i[4]){h+=c;continue}else if((i[5]||i[6])&&a%3&&!((a+c)%3)){f+=c;continue}if(h-=c,h>0)continue;c=Math.min(c,c+h+f);const m=[...i[0]][0].length,v=e.slice(0,a+i.index+m+c);if(Math.min(a,c)%2){const P=v.slice(1,-1);return{type:"em",raw:v,text:P,tokens:this.lexer.inlineTokens(P)}}const R=v.slice(2,-2);return{type:"strong",raw:v,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=pt(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=pt(t[1]),i="mailto:"+n):(n=pt(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=pt(t[0]),s="mailto:"+i;else{let a;do a=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(a!==t[0]);i=pt(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=pt(t[0]),{type:"text",raw:t[0],text:n}}}}const rE=/^(?: *(?:\n|$))+/,iE=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,sE=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ns=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,oE=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,od=/(?:[*+-]|\d{1,9}[.)])/,ad=_e(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,od).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Ja=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,aE=/^[^\n]+/,Za=/(?!\s*\])(?:\\.|[^\[\]\\])+/,lE=_e(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Za).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),cE=_e(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,od).getRegex(),Io="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",el=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,uE=_e("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",el).replace("tag",Io).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ld=_e(Ja).replace("hr",ns).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Io).getRegex(),hE=_e(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ld).getRegex(),tl={blockquote:hE,code:iE,def:lE,fences:sE,heading:oE,hr:ns,html:uE,lheading:ad,list:cE,newline:rE,paragraph:ld,table:xi,text:aE},au=_e("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ns).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Io).getRegex(),dE={...tl,table:au,paragraph:_e(Ja).replace("hr",ns).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",au).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Io).getRegex()},fE={...tl,html:_e(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",el).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:_e(Ja).replace("hr",ns).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ad).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},cd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,pE=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ud=/^( {2,}|\\)\n(?!\s*$)/,gE=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,rs="\\p{P}\\p{S}",mE=_e(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,rs).getRegex(),_E=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,yE=_e(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,rs).getRegex(),EE=_e("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,rs).getRegex(),wE=_e("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,rs).getRegex(),TE=_e(/\\([punct])/,"gu").replace(/punct/g,rs).getRegex(),vE=_e(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),IE=_e(el).replace("(?:-->|$)","-->").getRegex(),AE=_e("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",IE).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),oo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,bE=_e(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",oo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),hd=_e(/^!?\[(label)\]\[(ref)\]/).replace("label",oo).replace("ref",Za).getRegex(),dd=_e(/^!?\[(ref)\](?:\[\])?/).replace("ref",Za).getRegex(),RE=_e("reflink|nolink(?!\\()","g").replace("reflink",hd).replace("nolink",dd).getRegex(),nl={_backpedal:xi,anyPunctuation:TE,autolink:vE,blockSkip:_E,br:ud,code:pE,del:xi,emStrongLDelim:yE,emStrongRDelimAst:EE,emStrongRDelimUnd:wE,escape:cd,link:bE,nolink:dd,punctuation:mE,reflink:hd,reflinkSearch:RE,tag:AE,text:gE,url:xi},SE={...nl,link:_e(/^!?\[(label)\]\((.*?)\)/).replace("label",oo).getRegex(),reflink:_e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",oo).getRegex()},va={...nl,escape:_e(cd).replace("])","~|])").getRegex(),url:_e(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},kE={...va,br:_e(ud).replace("{2,}","*").getRegex(),text:_e(va.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ns={normal:tl,gfm:dE,pedantic:fE},Ii={normal:nl,gfm:va,breaks:kE,pedantic:SE};class Bt{constructor(e){me(this,"tokens");me(this,"options");me(this,"state");me(this,"tokenizer");me(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||dr,this.options.tokenizer=this.options.tokenizer||new so,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Ns.normal,inline:Ii.normal};this.options.pedantic?(t.block=Ns.pedantic,t.inline=Ii.pedantic):this.options.gfm&&(t.block=Ns.gfm,this.options.breaks?t.inline=Ii.breaks:t.inline=Ii.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ns,inline:Ii}}static lex(e,t){return new Bt(t).lex(e)}static lexInline(e,t){return new Bt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,c,h)=>c+"    ".repeat(h.length));let i,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(i=l.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const c=e.slice(1);let h;this.options.extensions.startBlock.forEach(f=>{h=f.call({lexer:this},c),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(a=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){s=t[t.length-1],n&&(s==null?void 0:s.type)==="paragraph"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,a=e,l,c,h;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)f.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,l.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(c||(h=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(n=f.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const y=e.slice(1);let m;this.options.extensions.startInline.forEach(v=>{m=v.call({lexer:this},y),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(s=e.substring(0,f+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),c=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}}class ao{constructor(e){me(this,"options");me(this,"parser");this.options=e||dr}space(e){return""}code({text:e,lang:t,escaped:n}){var a;const i=(a=(t||"").match(/^\S*/))==null?void 0:a[0],s=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+pt(i)+'">'+(n?s:pt(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:pt(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let i="";for(let l=0;l<e.items.length;l++){const c=e.items[l];i+=this.listitem(c)}const s=t?"ol":"ul",a=t&&n!==1?' start="'+n+'"':"";return"<"+s+a+`>
`+i+"</"+s+`>
`}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" "}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let i="";for(let s=0;s<e.rows.length;s++){const a=e.rows[s];n="";for(let l=0;l<a.length;l++)n+=this.tablecell(a[l]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const i=this.parser.parseInline(n),s=iu(e);if(s===null)return i;e=s;let a='<a href="'+e+'"';return t&&(a+=' title="'+t+'"'),a+=">"+i+"</a>",a}image({href:e,title:t,text:n}){const i=iu(e);if(i===null)return n;e=i;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class rl{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class $t{constructor(e){me(this,"options");me(this,"renderer");me(this,"textRenderer");this.options=e||dr,this.options.renderer=this.options.renderer||new ao,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new rl}static parse(e,t){return new $t(t).parse(e)}static parseInline(e,t){return new $t(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const l=s,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){n+=c||"";continue}}const a=s;switch(a.type){case"space":{n+=this.renderer.space(a);continue}case"hr":{n+=this.renderer.hr(a);continue}case"heading":{n+=this.renderer.heading(a);continue}case"code":{n+=this.renderer.code(a);continue}case"table":{n+=this.renderer.table(a);continue}case"blockquote":{n+=this.renderer.blockquote(a);continue}case"list":{n+=this.renderer.list(a);continue}case"html":{n+=this.renderer.html(a);continue}case"paragraph":{n+=this.renderer.paragraph(a);continue}case"text":{let l=a,c=this.renderer.text(l);for(;i+1<e.length&&e[i+1].type==="text";)l=e[++i],c+=`
`+this.renderer.text(l);t?n+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c}]}):n+=c;continue}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=l||"";continue}}const a=s;switch(a.type){case"escape":{n+=t.text(a);break}case"html":{n+=t.html(a);break}case"link":{n+=t.link(a);break}case"image":{n+=t.image(a);break}case"strong":{n+=t.strong(a);break}case"em":{n+=t.em(a);break}case"codespan":{n+=t.codespan(a);break}case"br":{n+=t.br(a);break}case"del":{n+=t.del(a);break}case"text":{n+=t.text(a);break}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}}class Ni{constructor(e){me(this,"options");this.options=e||dr}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}me(Ni,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var En,fd,Ia,pd;class PE{constructor(...e){dc(this,En);me(this,"defaults",Xa());me(this,"options",this.setOptions);me(this,"parse",_i(this,En,Ia).call(this,Bt.lex,$t.parse));me(this,"parseInline",_i(this,En,Ia).call(this,Bt.lexInline,$t.parseInline));me(this,"Parser",$t);me(this,"Renderer",ao);me(this,"TextRenderer",rl);me(this,"Lexer",Bt);me(this,"Tokenizer",so);me(this,"Hooks",Ni);this.use(...e)}walkTokens(e,t){var i,s;let n=[];for(const a of e)switch(n=n.concat(t.call(this,a)),a.type){case"table":{const l=a;for(const c of l.header)n=n.concat(this.walkTokens(c.tokens,t));for(const c of l.rows)for(const h of c)n=n.concat(this.walkTokens(h.tokens,t));break}case"list":{const l=a;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=a;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[l.type]?this.defaults.extensions.childTokens[l.type].forEach(c=>{const h=l[c].flat(1/0);n=n.concat(this.walkTokens(h,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const a=t.renderers[s.name];a?t.renderers[s.name]=function(...l){let c=s.renderer.apply(this,l);return c===!1&&(c=a.apply(this,l)),c}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=t[s.level];a?a.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){const s=this.defaults.renderer||new ao(this.defaults);for(const a in n.renderer){if(!(a in s))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const l=a;let c=n.renderer[l];const h=s[l];s[l]=(...f)=>{n.useNewRenderer||(c=_i(this,En,fd).call(this,c,l,s));let y=c.apply(s,f);return y===!1&&(y=h.apply(s,f)),y||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new so(this.defaults);for(const a in n.tokenizer){if(!(a in s))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const l=a,c=n.tokenizer[l],h=s[l];s[l]=(...f)=>{let y=c.apply(s,f);return y===!1&&(y=h.apply(s,f)),y}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Ni;for(const a in n.hooks){if(!(a in s))throw new Error(`hook '${a}' does not exist`);if(a==="options")continue;const l=a,c=n.hooks[l],h=s[l];Ni.passThroughHooks.has(a)?s[l]=f=>{if(this.defaults.async)return Promise.resolve(c.call(s,f)).then(m=>h.call(s,m));const y=c.call(s,f);return h.call(s,y)}:s[l]=(...f)=>{let y=c.apply(s,f);return y===!1&&(y=h.apply(s,f)),y}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,a=n.walkTokens;i.walkTokens=function(l){let c=[];return c.push(a.call(this,l)),s&&(c=c.concat(s.call(this,l))),c}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Bt.lex(e,t??this.defaults)}parser(e,t){return $t.parse(e,t??this.defaults)}}En=new WeakSet,fd=function(e,t,n){switch(t){case"heading":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,n.parser.parseInline(i.tokens),i.depth,Zy(n.parser.parseInline(i.tokens,n.parser.textRenderer)))};case"code":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,i.text,i.lang,!!i.escaped)};case"table":return function(i){if(!i.type||i.type!==t)return e.apply(this,arguments);let s="",a="";for(let c=0;c<i.header.length;c++)a+=this.tablecell({text:i.header[c].text,tokens:i.header[c].tokens,header:!0,align:i.align[c]});s+=this.tablerow({text:a});let l="";for(let c=0;c<i.rows.length;c++){const h=i.rows[c];a="";for(let f=0;f<h.length;f++)a+=this.tablecell({text:h[f].text,tokens:h[f].tokens,header:!1,align:i.align[f]});l+=this.tablerow({text:a})}return e.call(this,s,l)};case"blockquote":return function(i){if(!i.type||i.type!==t)return e.apply(this,arguments);const s=this.parser.parse(i.tokens);return e.call(this,s)};case"list":return function(i){if(!i.type||i.type!==t)return e.apply(this,arguments);const s=i.ordered,a=i.start,l=i.loose;let c="";for(let h=0;h<i.items.length;h++){const f=i.items[h],y=f.checked,m=f.task;let v="";if(f.task){const R=this.checkbox({checked:!!y});l?f.tokens.length>0&&f.tokens[0].type==="paragraph"?(f.tokens[0].text=R+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text"&&(f.tokens[0].tokens[0].text=R+" "+f.tokens[0].tokens[0].text)):f.tokens.unshift({type:"text",text:R+" "}):v+=R+" "}v+=this.parser.parse(f.tokens,l),c+=this.listitem({type:"list_item",raw:v,text:v,task:m,checked:!!y,loose:l,tokens:f.tokens})}return e.call(this,c,s,a)};case"html":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,i.text,i.block)};case"paragraph":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,this.parser.parseInline(i.tokens))};case"escape":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,i.text)};case"link":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,i.href,i.title,this.parser.parseInline(i.tokens))};case"image":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,i.href,i.title,i.text)};case"strong":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,this.parser.parseInline(i.tokens))};case"em":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,this.parser.parseInline(i.tokens))};case"codespan":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,i.text)};case"del":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,this.parser.parseInline(i.tokens))};case"text":return function(i){return!i.type||i.type!==t?e.apply(this,arguments):e.call(this,i.text)}}return e},Ia=function(e,t){return(n,i)=>{const s={...i},a={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(a.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),a.async=!0);const l=_i(this,En,pd).call(this,!!a.silent,!!a.async);if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(a.hooks&&(a.hooks.options=a),a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(n):n).then(c=>e(c,a)).then(c=>a.hooks?a.hooks.processAllTokens(c):c).then(c=>a.walkTokens?Promise.all(this.walkTokens(c,a.walkTokens)).then(()=>c):c).then(c=>t(c,a)).then(c=>a.hooks?a.hooks.postprocess(c):c).catch(l);try{a.hooks&&(n=a.hooks.preprocess(n));let c=e(n,a);a.hooks&&(c=a.hooks.processAllTokens(c)),a.walkTokens&&this.walkTokens(c,a.walkTokens);let h=t(c,a);return a.hooks&&(h=a.hooks.postprocess(h)),h}catch(c){return l(c)}}},pd=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+pt(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const ar=new PE;function ge(r,e){return ar.parse(r,e)}ge.options=ge.setOptions=function(r){return ar.setOptions(r),ge.defaults=ar.defaults,rd(ge.defaults),ge};ge.getDefaults=Xa;ge.defaults=dr;ge.use=function(...r){return ar.use(...r),ge.defaults=ar.defaults,rd(ge.defaults),ge};ge.walkTokens=function(r,e){return ar.walkTokens(r,e)};ge.parseInline=ar.parseInline;ge.Parser=$t;ge.parser=$t.parse;ge.Renderer=ao;ge.TextRenderer=rl;ge.Lexer=Bt;ge.lexer=Bt.lex;ge.Tokenizer=so;ge.Hooks=Ni;ge.parse=ge;ge.options;ge.setOptions;ge.use;ge.walkTokens;ge.parseInline;$t.parse;Bt.lex;var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,gd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function _(){}_.prototype=g.prototype,w.D=g.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(T,b,I){for(var E=Array(arguments.length-2),We=2;We<arguments.length;We++)E[We-2]=arguments[We];return g.prototype[b].apply(T,E)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,_){_||(_=0);var T=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)T[b]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(b=0;16>b;++b)T[b]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=w.g[0],_=w.g[1],b=w.g[2];var I=w.g[3],E=g+(I^_&(b^I))+T[0]+3614090360&4294967295;g=_+(E<<7&4294967295|E>>>25),E=I+(b^g&(_^b))+T[1]+3905402710&4294967295,I=g+(E<<12&4294967295|E>>>20),E=b+(_^I&(g^_))+T[2]+606105819&4294967295,b=I+(E<<17&4294967295|E>>>15),E=_+(g^b&(I^g))+T[3]+3250441966&4294967295,_=b+(E<<22&4294967295|E>>>10),E=g+(I^_&(b^I))+T[4]+4118548399&4294967295,g=_+(E<<7&4294967295|E>>>25),E=I+(b^g&(_^b))+T[5]+1200080426&4294967295,I=g+(E<<12&4294967295|E>>>20),E=b+(_^I&(g^_))+T[6]+2821735955&4294967295,b=I+(E<<17&4294967295|E>>>15),E=_+(g^b&(I^g))+T[7]+4249261313&4294967295,_=b+(E<<22&4294967295|E>>>10),E=g+(I^_&(b^I))+T[8]+1770035416&4294967295,g=_+(E<<7&4294967295|E>>>25),E=I+(b^g&(_^b))+T[9]+2336552879&4294967295,I=g+(E<<12&4294967295|E>>>20),E=b+(_^I&(g^_))+T[10]+4294925233&4294967295,b=I+(E<<17&4294967295|E>>>15),E=_+(g^b&(I^g))+T[11]+2304563134&4294967295,_=b+(E<<22&4294967295|E>>>10),E=g+(I^_&(b^I))+T[12]+1804603682&4294967295,g=_+(E<<7&4294967295|E>>>25),E=I+(b^g&(_^b))+T[13]+4254626195&4294967295,I=g+(E<<12&4294967295|E>>>20),E=b+(_^I&(g^_))+T[14]+2792965006&4294967295,b=I+(E<<17&4294967295|E>>>15),E=_+(g^b&(I^g))+T[15]+1236535329&4294967295,_=b+(E<<22&4294967295|E>>>10),E=g+(b^I&(_^b))+T[1]+4129170786&4294967295,g=_+(E<<5&4294967295|E>>>27),E=I+(_^b&(g^_))+T[6]+3225465664&4294967295,I=g+(E<<9&4294967295|E>>>23),E=b+(g^_&(I^g))+T[11]+643717713&4294967295,b=I+(E<<14&4294967295|E>>>18),E=_+(I^g&(b^I))+T[0]+3921069994&4294967295,_=b+(E<<20&4294967295|E>>>12),E=g+(b^I&(_^b))+T[5]+3593408605&4294967295,g=_+(E<<5&4294967295|E>>>27),E=I+(_^b&(g^_))+T[10]+38016083&4294967295,I=g+(E<<9&4294967295|E>>>23),E=b+(g^_&(I^g))+T[15]+3634488961&4294967295,b=I+(E<<14&4294967295|E>>>18),E=_+(I^g&(b^I))+T[4]+3889429448&4294967295,_=b+(E<<20&4294967295|E>>>12),E=g+(b^I&(_^b))+T[9]+568446438&4294967295,g=_+(E<<5&4294967295|E>>>27),E=I+(_^b&(g^_))+T[14]+3275163606&4294967295,I=g+(E<<9&4294967295|E>>>23),E=b+(g^_&(I^g))+T[3]+4107603335&4294967295,b=I+(E<<14&4294967295|E>>>18),E=_+(I^g&(b^I))+T[8]+1163531501&4294967295,_=b+(E<<20&4294967295|E>>>12),E=g+(b^I&(_^b))+T[13]+2850285829&4294967295,g=_+(E<<5&4294967295|E>>>27),E=I+(_^b&(g^_))+T[2]+4243563512&4294967295,I=g+(E<<9&4294967295|E>>>23),E=b+(g^_&(I^g))+T[7]+1735328473&4294967295,b=I+(E<<14&4294967295|E>>>18),E=_+(I^g&(b^I))+T[12]+2368359562&4294967295,_=b+(E<<20&4294967295|E>>>12),E=g+(_^b^I)+T[5]+4294588738&4294967295,g=_+(E<<4&4294967295|E>>>28),E=I+(g^_^b)+T[8]+2272392833&4294967295,I=g+(E<<11&4294967295|E>>>21),E=b+(I^g^_)+T[11]+1839030562&4294967295,b=I+(E<<16&4294967295|E>>>16),E=_+(b^I^g)+T[14]+4259657740&4294967295,_=b+(E<<23&4294967295|E>>>9),E=g+(_^b^I)+T[1]+2763975236&4294967295,g=_+(E<<4&4294967295|E>>>28),E=I+(g^_^b)+T[4]+1272893353&4294967295,I=g+(E<<11&4294967295|E>>>21),E=b+(I^g^_)+T[7]+4139469664&4294967295,b=I+(E<<16&4294967295|E>>>16),E=_+(b^I^g)+T[10]+3200236656&4294967295,_=b+(E<<23&4294967295|E>>>9),E=g+(_^b^I)+T[13]+681279174&4294967295,g=_+(E<<4&4294967295|E>>>28),E=I+(g^_^b)+T[0]+3936430074&4294967295,I=g+(E<<11&4294967295|E>>>21),E=b+(I^g^_)+T[3]+3572445317&4294967295,b=I+(E<<16&4294967295|E>>>16),E=_+(b^I^g)+T[6]+76029189&4294967295,_=b+(E<<23&4294967295|E>>>9),E=g+(_^b^I)+T[9]+3654602809&4294967295,g=_+(E<<4&4294967295|E>>>28),E=I+(g^_^b)+T[12]+3873151461&4294967295,I=g+(E<<11&4294967295|E>>>21),E=b+(I^g^_)+T[15]+530742520&4294967295,b=I+(E<<16&4294967295|E>>>16),E=_+(b^I^g)+T[2]+3299628645&4294967295,_=b+(E<<23&4294967295|E>>>9),E=g+(b^(_|~I))+T[0]+4096336452&4294967295,g=_+(E<<6&4294967295|E>>>26),E=I+(_^(g|~b))+T[7]+1126891415&4294967295,I=g+(E<<10&4294967295|E>>>22),E=b+(g^(I|~_))+T[14]+2878612391&4294967295,b=I+(E<<15&4294967295|E>>>17),E=_+(I^(b|~g))+T[5]+4237533241&4294967295,_=b+(E<<21&4294967295|E>>>11),E=g+(b^(_|~I))+T[12]+1700485571&4294967295,g=_+(E<<6&4294967295|E>>>26),E=I+(_^(g|~b))+T[3]+2399980690&4294967295,I=g+(E<<10&4294967295|E>>>22),E=b+(g^(I|~_))+T[10]+4293915773&4294967295,b=I+(E<<15&4294967295|E>>>17),E=_+(I^(b|~g))+T[1]+2240044497&4294967295,_=b+(E<<21&4294967295|E>>>11),E=g+(b^(_|~I))+T[8]+1873313359&4294967295,g=_+(E<<6&4294967295|E>>>26),E=I+(_^(g|~b))+T[15]+4264355552&4294967295,I=g+(E<<10&4294967295|E>>>22),E=b+(g^(I|~_))+T[6]+2734768916&4294967295,b=I+(E<<15&4294967295|E>>>17),E=_+(I^(b|~g))+T[13]+1309151649&4294967295,_=b+(E<<21&4294967295|E>>>11),E=g+(b^(_|~I))+T[4]+4149444226&4294967295,g=_+(E<<6&4294967295|E>>>26),E=I+(_^(g|~b))+T[11]+3174756917&4294967295,I=g+(E<<10&4294967295|E>>>22),E=b+(g^(I|~_))+T[2]+718787259&4294967295,b=I+(E<<15&4294967295|E>>>17),E=_+(I^(b|~g))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+I&4294967295}n.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var _=g-this.blockSize,T=this.B,b=this.h,I=0;I<g;){if(b==0)for(;I<=_;)i(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<g;)if(T[b++]=w.charCodeAt(I++),b==this.blockSize){i(this,T),b=0;break}}else for(;I<g;)if(T[b++]=w[I++],b==this.blockSize){i(this,T),b=0;break}}this.h=b,this.o+=g},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var _=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=_&255,_/=256;for(this.u(w),w=Array(16),g=_=0;4>g;++g)for(var T=0;32>T;T+=8)w[_++]=this.g[g]>>>T&255;return w};function s(w,g){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=g(w)}function a(w,g){this.h=g;for(var _=[],T=!0,b=w.length-1;0<=b;b--){var I=w[b]|0;T&&I==g||(_[b]=I,T=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?s(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return k(h(-w));for(var g=[],_=1,T=0;w>=_;T++)g[T]=w/_|0,_*=4294967296;return new a(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return k(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),T=y,b=0;b<w.length;b+=8){var I=Math.min(8,w.length-b),E=parseInt(w.substring(b,b+I),g);8>I?(I=h(Math.pow(g,I)),T=T.j(I).add(h(E))):(T=T.j(_),T=T.add(h(E)))}return T}var y=c(0),m=c(1),v=c(16777216);r=a.prototype,r.m=function(){if(P(this))return-k(this).m();for(var w=0,g=1,_=0;_<this.g.length;_++){var T=this.i(_);w+=(0<=T?T:4294967296+T)*g,g*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+k(this).toString(w);for(var g=h(Math.pow(w,6)),_=this,T="";;){var b=K(_,g).g;_=U(_,b.j(g));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=b,R(_))return I+T;for(;6>I.length;)I="0"+I;T=I+T}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function P(w){return w.h==-1}r.l=function(w){return w=U(this,w),P(w)?-1:R(w)?0:1};function k(w){for(var g=w.g.length,_=[],T=0;T<g;T++)_[T]=~w.g[T];return new a(_,~w.h).add(m)}r.abs=function(){return P(this)?k(this):this},r.add=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],T=0,b=0;b<=g;b++){var I=T+(this.i(b)&65535)+(w.i(b)&65535),E=(I>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);T=E>>>16,I&=65535,E&=65535,_[b]=E<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function U(w,g){return w.add(k(g))}r.j=function(w){if(R(this)||R(w))return y;if(P(this))return P(w)?k(this).j(k(w)):k(k(this).j(w));if(P(w))return k(this.j(k(w)));if(0>this.l(v)&&0>w.l(v))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,_=[],T=0;T<2*g;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<w.g.length;b++){var I=this.i(T)>>>16,E=this.i(T)&65535,We=w.i(b)>>>16,lt=w.i(b)&65535;_[2*T+2*b]+=E*lt,M(_,2*T+2*b),_[2*T+2*b+1]+=I*lt,M(_,2*T+2*b+1),_[2*T+2*b+1]+=E*We,M(_,2*T+2*b+1),_[2*T+2*b+2]+=I*We,M(_,2*T+2*b+2)}for(T=0;T<g;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=g;T<2*g;T++)_[T]=0;return new a(_,0)};function M(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function V(w,g){this.g=w,this.h=g}function K(w,g){if(R(g))throw Error("division by zero");if(R(w))return new V(y,y);if(P(w))return g=K(k(w),g),new V(k(g.g),k(g.h));if(P(g))return g=K(w,k(g)),new V(k(g.g),g.h);if(30<w.g.length){if(P(w)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var _=m,T=g;0>=T.l(w);)_=ee(_),T=ee(T);var b=Y(_,1),I=Y(T,1);for(T=Y(T,2),_=Y(_,2);!R(T);){var E=I.add(T);0>=E.l(w)&&(b=b.add(_),I=E),T=Y(T,1),_=Y(_,1)}return g=U(w,b.j(g)),new V(b,g)}for(b=y;0<=w.l(g);){for(_=Math.max(1,Math.floor(w.m()/g.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),I=h(_),E=I.j(g);P(E)||0<E.l(w);)_-=T,I=h(_),E=I.j(g);R(I)&&(I=m),b=b.add(I),w=U(w,E)}return new V(b,w)}r.A=function(w){return K(this,w).h},r.and=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)&w.i(T);return new a(_,this.h&w.h)},r.or=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)|w.i(T);return new a(_,this.h|w.h)},r.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)^w.i(T);return new a(_,this.h^w.h)};function ee(w){for(var g=w.g.length+1,_=[],T=0;T<g;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(_,w.h)}function Y(w,g){var _=g>>5;g%=32;for(var T=w.g.length-_,b=[],I=0;I<T;I++)b[I]=0<g?w.i(I+_)>>>g|w.i(I+_+1)<<32-g:w.i(I+_);return new a(b,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,gd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,tr=a}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});var Os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var md,_d,Si,yd,Hs,Aa,Ed,wd,Td;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Os=="object"&&Os];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(o,u){if(u)e:{var d=n;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function y(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,m.apply(null,arguments)}function v(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function R(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var F=Array(arguments.length-2),we=2;we<arguments.length;we++)F[we-2]=arguments[we];return u.prototype[S].apply(p,F)}}function P(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function k(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let F=0;F<C;F++)o[S+F]=p[F]}else o.push(p)}}class U{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var ee=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function Y(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function g(o){const u={};for(const d in o)u[d]=o[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let C=0;C<_.length;C++)d=_[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function I(o){l.setTimeout(()=>{throw o},0)}function E(){var o=ze;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class We{constructor(){this.h=this.g=null}add(u,d){const p=lt.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var lt=new U(()=>new Jt,o=>o.reset());class Jt{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,Ae=!1,ze=new We,ye=()=>{const o=l.Promise.resolve(void 0);ht=()=>{o.then(xe)}};var xe=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){I(d)}var u=lt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Ae=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function te(o,u){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ee){e:{try{K(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ce[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&te.aa.h.call(this)}}R(te,Ee);var ce={2:"touch",3:"pen",4:"mouse"};te.prototype.h=function(){te.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),ke=0;function us(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++ke,this.da=this.fa=!1}function Un(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Tt(o){this.src=o,this.g={},this.h=0}Tt.prototype.add=function(o,u,d,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var F=vt(o,u,p,S);return-1<F?(u=o[F],d||(u.fa=!1)):(u=new us(u,this.src,C,!!p,S),u.fa=d,o.push(u)),u};function Bn(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(Un(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function vt(o,u,d,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return S}return-1}var $n="closure_lm_"+(1e6*Math.random()|0),zn={};function Zt(o,u,d,p,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Zt(o,u[C],d,p,S);return null}return d=tn(d),o&&o[ne]?o.K(u,d,h(p)?!!p.capture:!!p,S):gr(o,u,d,!1,p,S)}function gr(o,u,d,p,S,C){if(!u)throw Error("Invalid event type");var F=h(S)?!!S.capture:!!S,we=en(o);if(we||(o[$n]=we=new Tt(o)),d=we.add(u,d,p,F,C),d.proxy)return d;if(p=mr(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)fe||(S=F),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(hs(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function mr(){function o(d){return u.call(o.src,o.listener,d)}const u=ni;return o}function ti(o,u,d,p,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)ti(o,u[C],d,p,S);else p=h(p)?!!p.capture:!!p,d=tn(d),o&&o[ne]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=vt(C,d,p,S),-1<d&&(Un(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=en(o))&&(u=o.g[u.toString()],o=-1,u&&(o=vt(u,d,p,S)),(d=-1<o?u[o]:null)&&_r(d))}function _r(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ne])Bn(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(hs(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=en(u))?(Bn(d,o),d.h==0&&(d.src=null,u[$n]=null)):Un(o)}}}function hs(o){return o in zn?zn[o]:zn[o]="on"+o}function ni(o,u){if(o.da)o=!0;else{u=new te(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&_r(o),o=d.call(p,u)}return o}function en(o){return o=o[$n],o instanceof Tt?o:null}var Dt="__closure_events_fn_"+(1e9*Math.random()>>>0);function tn(o){return typeof o=="function"?o:(o[Dt]||(o[Dt]=function(u){return o.handleEvent(u)}),o[Dt])}function Ve(){le.call(this),this.i=new Tt(this),this.M=this,this.F=null}R(Ve,le),Ve.prototype[ne]=!0,Ve.prototype.removeEventListener=function(o,u,d,p){ti(this,o,u,d,p)};function je(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ee(u,o);else if(u instanceof Ee)u.target=u.target||o;else{var S=u;u=new Ee(p,o),T(u,S)}if(S=!0,d)for(var C=d.length-1;0<=C;C--){var F=u.g=d[C];S=jn(F,p,!0,u)&&S}if(F=u.g=o,S=jn(F,p,!0,u)&&S,S=jn(F,p,!1,u)&&S,d)for(C=0;C<d.length;C++)F=u.g=d[C],S=jn(F,p,!1,u)&&S}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Un(d[p]);delete o.g[u],o.h--}}this.F=null},Ve.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Ve.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function jn(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var F=u[C];if(F&&!F.da&&F.capture==d){var we=F.listener,Ge=F.ha||F.src;F.fa&&Bn(o.i,F),S=we.call(Ge,p)!==!1&&S}}return S&&!p.defaultPrevented}function yr(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function ri(o){o.g=yr(()=>{o.g=null,o.i&&(o.i=!1,ri(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Er extends le{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ri(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xt(o){le.call(this),this.h=o,this.g={}}R(xt,le);var mt=[];function nn(o){Y(o.g,function(u,d){this.g.hasOwnProperty(d)&&_r(u)},o),o.g={}}xt.prototype.N=function(){xt.aa.N.call(this),nn(this)},xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qn=l.JSON.stringify,ii=l.JSON.parse,Fo=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function rn(){}rn.prototype.h=null;function ds(o){return o.h||(o.h=o.i())}function fs(){}var Re={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nt(){Ee.call(this,"d")}R(Nt,Ee);function si(){Ee.call(this,"c")}R(si,Ee);var Ot={},wr=null;function Hn(){return wr=wr||new Ve}Ot.La="serverreachability";function oi(o){Ee.call(this,Ot.La,o)}R(oi,Ee);function Wn(o){const u=Hn();je(u,new oi(u))}Ot.STAT_EVENT="statevent";function ai(o,u){Ee.call(this,Ot.STAT_EVENT,o),this.stat=u}R(ai,Ee);function qe(o){const u=Hn();je(u,new ai(u,o))}Ot.Ma="timingevent";function ps(o,u){Ee.call(this,Ot.Ma,o),this.size=u}R(ps,Ee);function et(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Lt(){this.g=!0}Lt.prototype.xa=function(){this.g=!1};function gs(o,u,d,p,S,C){o.info(function(){if(o.g)if(C)for(var F="",we=C.split("&"),Ge=0;Ge<we.length;Ge++){var ue=we[Ge].split("=");if(1<ue.length){var tt=ue[0];ue=ue[1];var nt=tt.split("_");F=2<=nt.length&&nt[1]=="type"?F+(tt+"="+ue+"&"):F+(tt+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+F})}function ms(o,u,d,p,S,C,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+C+" "+F})}function sn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+It(o,d)+(p?" "+p:"")})}function _s(o,u){o.info(function(){return"TIMEOUT: "+u})}Lt.prototype.info=function(){};function It(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return qn(d)}catch{return u}}var Gn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},li={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tr;function Kn(){}R(Kn,rn),Kn.prototype.g=function(){return new XMLHttpRequest},Kn.prototype.i=function(){return{}},Tr=new Kn;function Vt(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new j}function j(){this.i=null,this.g="",this.h=!1}var A={},L={};function $(o,u,d){o.L=1,o.v=ws(an(u)),o.m=d,o.P=!0,pe(o,null)}function pe(o,u){o.F=Date.now(),Ue(o),o.A=an(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),jl(d.i,"t",p),o.C=0,d=o.j.J,o.h=new j,o.g=ac(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Er(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(mt[0]=S.toString()),S=mt);for(var C=0;C<S.length;C++){var F=Zt(d,S[C],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Wn(),gs(o.i,o.u,o.A,o.l,o.R,o.m)}Vt.prototype.ca=function(o){o=o.target;const u=this.M;u&&ln(o)==3?u.j():this.Y(o)},Vt.prototype.Y=function(o){try{if(o==this.g)e:{const nt=ln(this.g);var u=this.g.Ba();const br=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Yl(this.g)))){this.J||nt!=4||u==7||(u==8||0>=br?Wn(3):Wn(2)),on(this);var d=this.g.Z();this.X=d;t:if(Me(this)){var p=Yl(this.g);o="";var S=p.length,C=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),De(this);var F="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,ms(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Ge=this.g;if((we=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(we)){var ue=we;break t}}ue=null}if(d=ue)sn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vr(this,d);else{this.o=!1,this.s=3,qe(12),Mt(this),De(this);break e}}if(this.P){d=!0;let At;for(;!this.J&&this.C<F.length;)if(At=Fe(this,F),At==L){nt==4&&(this.s=4,qe(14),d=!1),sn(this.i,this.l,null,"[Incomplete Response]");break}else if(At==A){this.s=4,qe(15),sn(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else sn(this.i,this.l,At,null),vr(this,At);if(Me(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||F.length!=0||this.h.h||(this.s=1,qe(16),d=!1),this.o=this.o&&d,!d)sn(this.i,this.l,F,"[Invalid Chunked Response]"),Mt(this),De(this);else if(0<F.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),qo(tt),tt.M=!0,qe(11))}}else sn(this.i,this.l,F,null),vr(this,F);nt==4&&Mt(this),this.o&&!this.J&&(nt==4?rc(this.j,this):(this.o=!1,Ue(this)))}else tp(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),Mt(this),De(this)}}}catch{}finally{}};function Me(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Fe(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?L:(d=Number(u.substring(d,p)),isNaN(d)?A:(p+=1,p+d>u.length?L:(u=u.slice(p,p+d),o.C=p+d,u)))}Vt.prototype.cancel=function(){this.J=!0,Mt(this)};function Ue(o){o.S=Date.now()+o.I,dt(o,o.I)}function dt(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=et(m(o.ba,o),u)}function on(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(_s(this.i,this.A),this.L!=2&&(Wn(),qe(17)),Mt(this),this.s=2,De(this)):dt(this,this.S-o)};function De(o){o.j.G==0||o.J||rc(o.j,o)}function Mt(o){on(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,nn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function vr(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Uo(d.h,o))){if(!o.K&&Uo(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)bs(d),Is(d);else break e;jo(d),qe(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=et(m(d.Za,d),6e3));if(1>=Ol(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Yn(d,11)}else if((o.K||d.g==o)&&bs(d),!M(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let ue=S[u];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const tt=ue[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=ue[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const br=ue[5];br!=null&&typeof br=="number"&&0<br&&(p=1.5*br,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const At=o.g;if(At){const Ss=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ss){var C=p.h;C.g||Ss.indexOf("spdy")==-1&&Ss.indexOf("quic")==-1&&Ss.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Bo(C,C.h),C.h=null))}if(p.D){const Ho=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(p.ya=Ho,be(p.I,p.D,Ho))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=o;if(p.qa=oc(p,p.J?p.ia:null,p.W),F.K){Ll(p.h,F);var we=F,Ge=p.L;Ge&&(we.I=Ge),we.B&&(on(we),Ue(we)),p.g=F}else tc(p);0<d.i.length&&As(d)}else ue[0]!="stop"&&ue[0]!="close"||Yn(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Yn(d,7):zo(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}Wn(4)}catch{}}var Uf=class{constructor(o,u){this.g=o,this.map=u}};function xl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ol(o){return o.h?1:o.g?o.g.size:0}function Uo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Bo(o,u){o.g?o.g.add(u):o.h=u}function Ll(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}xl.prototype.cancel=function(){if(this.i=Vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Vl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return P(o.i)}function Bf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function $f(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function Ml(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=$f(o),p=Bf(o),S=p.length,C=0;C<S;C++)u.call(void 0,p[C],d&&d[C],o)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zf(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var C=o[d].substring(0,p);S=o[d].substring(p+1)}else C=o[d];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Qn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qn){this.h=o.h,ys(this,o.j),this.o=o.o,this.g=o.g,Es(this,o.s),this.l=o.l;var u=o.i,d=new hi;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Ul(this,d),this.m=o.m}else o&&(u=String(o).match(Fl))?(this.h=!1,ys(this,u[1]||"",!0),this.o=ci(u[2]||""),this.g=ci(u[3]||"",!0),Es(this,u[4]),this.l=ci(u[5]||"",!0),Ul(this,u[6]||"",!0),this.m=ci(u[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}Qn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ui(u,Bl,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ui(u,Bl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ui(d,d.charAt(0)=="/"?Hf:qf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ui(d,Gf)),o.join("")};function an(o){return new Qn(o)}function ys(o,u,d){o.j=d?ci(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Es(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Ul(o,u,d){u instanceof hi?(o.i=u,Kf(o.i,o.h)):(d||(u=ui(u,Wf)),o.i=new hi(u,o.h))}function be(o,u,d){o.i.set(u,d)}function ws(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ci(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ui(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,jf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function jf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Bl=/[#\/\?@]/g,qf=/[#\?:]/g,Hf=/[#\?]/g,Wf=/[#\?@]/g,Gf=/#/g;function hi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&zf(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=hi.prototype,r.add=function(o,u){Tn(this),this.i=null,o=Ir(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function $l(o,u){Tn(o),u=Ir(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function zl(o,u){return Tn(o),u=Ir(o,u),o.g.has(u)}r.forEach=function(o,u){Tn(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},r.na=function(){Tn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let C=0;C<S.length;C++)d.push(u[p])}return d},r.V=function(o){Tn(this);let u=[];if(typeof o=="string")zl(this,o)&&(u=u.concat(this.g.get(Ir(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},r.set=function(o,u){return Tn(this),this.i=null,o=Ir(this,o),zl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},r.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function jl(o,u,d){$l(o,u),0<d.length&&(o.i=null,o.g.set(Ir(o,u),P(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var S=C;F[p]!==""&&(S+="="+encodeURIComponent(String(F[p]))),o.push(S)}}return this.i=o.join("&")};function Ir(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Kf(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&($l(this,p),jl(this,S,d))},o)),o.j=u}function Qf(o,u){const d=new Lt;if(l.Image){const p=new Image;p.onload=v(vn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=v(vn,d,"TestLoadImage: error",!1,u,p),p.onabort=v(vn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=v(vn,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Yf(o,u){const d=new Lt,p=new AbortController,S=setTimeout(()=>{p.abort(),vn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?vn(d,"TestPingServer: ok",!0,u):vn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),vn(d,"TestPingServer: error",!1,u)})}function vn(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function Xf(){this.g=new Fo}function Jf(o,u,d){const p=d||"";try{Ml(o,function(S,C){let F=S;h(S)&&(F=qn(S)),u.push(p+C+"="+encodeURIComponent(F))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function di(o){this.l=o.Ub||null,this.j=o.eb||!1}R(di,rn),di.prototype.g=function(){return new Ts(this.l,this.j)},di.prototype.i=function(o){return function(){return o}}({});function Ts(o,u){Ve.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ts,Ve),r=Ts.prototype,r.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,pi(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ql(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ql(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?fi(this):pi(this),this.readyState==3&&ql(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,fi(this))},r.Qa=function(o){this.g&&(this.response=o,fi(this))},r.ga=function(){this.g&&fi(this)};function fi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,pi(o)}r.setRequestHeader=function(o,u){this.u.append(o,u)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function pi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Hl(o){let u="";return Y(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function $o(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Hl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):be(o,u,d))}function Ce(o){Ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ce,Ve);var Zf=/^https?$/i,ep=["POST","PUT"];r=Ce.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tr.g(),this.v=this.o?ds(this.o):ds(Tr),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Wl(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ep,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,F]of d)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ql(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Wl(this,C)}};function Wl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Gl(o),vs(o)}function Gl(o){o.A||(o.A=!0,je(o,"complete"),je(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,je(this,"complete"),je(this,"abort"),vs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vs(this,!0)),Ce.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Kl(this):this.bb())},r.bb=function(){Kl(this)};function Kl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ln(o)!=4||o.Z()!=2)){if(o.u&&ln(o)==4)yr(o.Ea,0,o);else if(je(o,"readystatechange"),ln(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=F===0){var S=String(o.D).match(Fl)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Zf.test(S?S.toLowerCase():"")}d=p}if(d)je(o,"complete"),je(o,"success");else{o.m=6;try{var C=2<ln(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Gl(o)}}finally{vs(o)}}}}function vs(o,u){if(o.g){Ql(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||je(o,"ready");try{d.onreadystatechange=p}catch{}}}function Ql(o){o.I&&(l.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ln(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ii(u)}};function Yl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function tp(o){const u={};o=(o.g&&2<=ln(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var d=b(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[S]||[];u[S]=C,C.push(d)}w(u,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Xl(o){this.Aa=0,this.i=[],this.j=new Lt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gi("baseRetryDelayMs",5e3,o),this.cb=gi("retryDelaySeedMs",1e4,o),this.Wa=gi("forwardChannelMaxRetries",2,o),this.wa=gi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new xl(o&&o.concurrentRequestLimit),this.Da=new Xf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Xl.prototype,r.la=8,r.G=1,r.connect=function(o,u,d,p){qe(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=oc(this,null,this.W),As(this)};function zo(o){if(Jl(o),o.G==3){var u=o.U++,d=an(o.I);if(be(d,"SID",o.K),be(d,"RID",u),be(d,"TYPE","terminate"),mi(o,d),u=new Vt(o,o.j,u),u.L=2,u.v=ws(an(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=ac(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ue(u)}sc(o)}function Is(o){o.g&&(qo(o),o.g.cancel(),o.g=null)}function Jl(o){Is(o),o.u&&(l.clearTimeout(o.u),o.u=null),bs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function As(o){if(!Nl(o.h)&&!o.s){o.s=!0;var u=o.Ga;ht||ye(),Ae||(ht(),Ae=!0),ze.add(u,o),o.B=0}}function np(o,u){return Ol(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=et(m(o.Ga,o,u),ic(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Vt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ec(this,S,u),d=an(this.I),be(d,"RID",o),be(d,"CVER",22),this.D&&be(d,"X-HTTP-Session-Id",this.D),mi(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Hl(C)))+"&"+u:this.m&&$o(d,this.m,C)),Bo(this.h,S),this.Ua&&be(d,"TYPE","init"),this.P?(be(d,"$req",u),be(d,"SID","null"),S.T=!0,$(S,d,null)):$(S,d,u),this.G=2}}else this.G==3&&(o?Zl(this,o):this.i.length==0||Nl(this.h)||Zl(this))};function Zl(o,u){var d;u?d=u.l:d=o.U++;const p=an(o.I);be(p,"SID",o.K),be(p,"RID",d),be(p,"AID",o.T),mi(o,p),o.m&&o.o&&$o(p,o.m,o.o),d=new Vt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=ec(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Bo(o.h,d),$(d,p,u)}function mi(o,u){o.H&&Y(o.H,function(d,p){be(u,p,d)}),o.l&&Ml({},function(d,p){be(u,p,d)})}function ec(o,u,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const F=["count="+d];C==-1?0<d?(C=S[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let we=!0;for(let Ge=0;Ge<d;Ge++){let ue=S[Ge].g;const tt=S[Ge].map;if(ue-=C,0>ue)C=Math.max(0,S[Ge].g-100),we=!1;else try{Jf(tt,F,"req"+ue+"_")}catch{p&&p(tt)}}if(we){p=F.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function tc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ht||ye(),Ae||(ht(),Ae=!0),ze.add(u,o),o.v=0}}function jo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=et(m(o.Fa,o),ic(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=et(m(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),Is(this),nc(this))};function qo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function nc(o){o.g=new Vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=an(o.qa);be(u,"RID","rpc"),be(u,"SID",o.K),be(u,"AID",o.T),be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(u,"TO",o.ja),be(u,"TYPE","xmlhttp"),mi(o,u),o.m&&o.o&&$o(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ws(an(u)),d.m=null,d.P=!0,pe(d,o)}r.Za=function(){this.C!=null&&(this.C=null,Is(this),jo(this),qe(19))};function bs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function rc(o,u){var d=null;if(o.g==u){bs(o),qo(o),o.g=null;var p=2}else if(Uo(o.h,u))d=u.D,Ll(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=Hn(),je(p,new ps(p,d)),As(o)}else tc(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&np(o,u)||p==2&&jo(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:Yn(o,5);break;case 4:Yn(o,10);break;case 3:Yn(o,6);break;default:Yn(o,2)}}}function ic(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Yn(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),p=o.Xa;const S=!p;p=new Qn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ys(p,"https"),ws(p),S?Qf(p.toString(),d):Yf(p.toString(),d)}else qe(2);o.G=0,o.l&&o.l.sa(u),sc(o),Jl(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function sc(o){if(o.G=0,o.ka=[],o.l){const u=Vl(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function oc(o,u,d){var p=d instanceof Qn?an(d):new Qn(d);if(p.g!="")u&&(p.g=u+"."+p.g),Es(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new Qn(null);p&&ys(C,p),u&&(C.g=u),S&&Es(C,S),d&&(C.l=d),p=C}return d=o.D,u=o.ya,d&&u&&be(p,d,u),be(p,"VER",o.la),mi(o,p),p}function ac(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ce(new di({eb:d})):new Ce(o.pa),u.Ha(o.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function lc(){}r=lc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Rs(){}Rs.prototype.g=function(o,u){return new ft(o,u)};function ft(o,u){Ve.call(this),this.g=new Xl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!M(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ar(this)}R(ft,Ve),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){zo(this.g)},ft.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=qn(o),o=d);u.i.push(new Uf(u.Ya++,o)),u.G==3&&As(u)},ft.prototype.N=function(){this.g.l=null,delete this.j,zo(this.g),delete this.g,ft.aa.N.call(this)};function cc(o){Nt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(cc,Nt);function uc(){si.call(this),this.status=1}R(uc,si);function Ar(o){this.g=o}R(Ar,lc),Ar.prototype.ua=function(){je(this.g,"a")},Ar.prototype.ta=function(o){je(this.g,new cc(o))},Ar.prototype.sa=function(o){je(this.g,new uc)},Ar.prototype.ra=function(){je(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,Td=function(){return new Rs},wd=function(){return Hn()},Ed=Ot,Aa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gn.NO_ERROR=0,Gn.TIMEOUT=8,Gn.HTTP_ERROR=6,Hs=Gn,li.COMPLETE="complete",yd=li,fs.EventType=Re,Re.OPEN="a",Re.CLOSE="b",Re.ERROR="c",Re.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,Si=fs,_d=di,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,md=Ce}).apply(typeof Os<"u"?Os:typeof self<"u"?self:typeof window<"u"?window:{});const cu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Ua("@firebase/firestore");function Ai(){return lr.logLevel}function z(r,...e){if(lr.logLevel<=se.DEBUG){const t=e.map(il);lr.debug(`Firestore (${Xr}): ${r}`,...t)}}function _n(r,...e){if(lr.logLevel<=se.ERROR){const t=e.map(il);lr.error(`Firestore (${Xr}): ${r}`,...t)}}function $r(r,...e){if(lr.logLevel<=se.WARN){const t=e.map(il);lr.warn(`Firestore (${Xr}): ${r}`,...t)}}function il(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(r="Unexpected state"){const e=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+r;throw _n(e),new Error(e)}function Ie(r,e){r||Q()}function J(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(it.UNAUTHENTICATED))}shutdown(){}}class DE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xE{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ie(typeof n.accessToken=="string"),new vd(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new it(e)}}class NE{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OE{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new NE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ie(typeof t.token=="string"),this.R=t.token,new LE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=ME(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function he(r,e){return r<e?-1:r>e?1:0}function zr(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Le(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,n){t===void 0?t=0:t>e.length&&Q(),n===void 0?n=e.length-t:n>e.length-t&&Q(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return zi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zi?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Se extends zi{construct(e,t,n){return new Se(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new H(O.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const FE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends zi{construct(e,t,n){return new Xe(e,t,n)}static isValidIdentifier(e){return FE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(n+=l,i++):(s(),i++)}if(s(),a)throw new H(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Se.fromString(e))}static fromName(e){return new W(Se.fromString(e).popFirst(5))}static empty(){return new W(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Se(e.slice()))}}function UE(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=X.fromTimestamp(n===1e9?new Le(t+1,0):new Le(t,n));return new On(i,W.empty(),e)}function BE(r){return new On(r.readTime,r.key,-1)}class On{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new On(X.min(),W.empty(),-1)}static max(){return new On(X.max(),W.empty(),-1)}}function $E(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(r.documentKey,e.documentKey),t!==0?t:he(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(r){if(r.code!==O.FAILED_PRECONDITION||r.message!==zE)throw r;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,n)=>{t(e)})}static reject(e){return new N((t,n)=>{n(e)})}static waitFor(e){return new N((t,n)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},c=>n(c))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const n of e)t=t.next(i=>i?N.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new N((n,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===s&&n(a)},f=>i(f))}})}static doWhile(e,t){return new N((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}function qE(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ss(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sl.oe=-1;function Ao(r){return r==null}function lo(r){return r===0&&1/r==-1/0}function HE(r){return typeof r=="number"&&Number.isInteger(r)&&!lo(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Jr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Ad(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||Ke.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ls(this.root,e,this.comparator,!0)}}class Ls{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Ke(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hu(this.data.getIterator())}getIteratorFrom(e){return new hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Rt([])}unionWith(e){let t=new Je(Xe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bd("Invalid base64 string: "+s):s}}(e);return new at(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new at(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const WE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(r){if(Ie(!!r),typeof r=="string"){let e=0;const t=WE.exec(r);if(Ie(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Oe(r.seconds),nanos:Oe(r.nanos)}}function Oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function cr(r){return typeof r=="string"?at.fromBase64String(r):at.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function al(r){const e=r.mapValue.fields.__previous_value__;return ol(e)?al(e):e}function ji(r){const e=Ln(r.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t,n,i,s,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class qi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ur(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ol(r)?4:KE(r)?9007199254740991:10:Q()}function Gt(r,e){if(r===e)return!0;const t=ur(r);if(t!==ur(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ji(r).isEqual(ji(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ln(i.timestampValue),l=Ln(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return cr(i.bytesValue).isEqual(cr(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Oe(i.doubleValue),l=Oe(s.doubleValue);return a===l?lo(a)===lo(l):isNaN(a)&&isNaN(l)}return!1}(r,e);case 9:return zr(r.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(uu(a)!==uu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Gt(a[c],l[c])))return!1;return!0}(r,e);default:return Q()}}function Hi(r,e){return(r.values||[]).find(t=>Gt(t,e))!==void 0}function jr(r,e){if(r===e)return 0;const t=ur(r),n=ur(e);if(t!==n)return he(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return he(r.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Oe(s.integerValue||s.doubleValue),c=Oe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return du(r.timestampValue,e.timestampValue);case 4:return du(ji(r),ji(e));case 5:return he(r.stringValue,e.stringValue);case 6:return function(s,a){const l=cr(s),c=cr(a);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=he(l[h],c[h]);if(f!==0)return f}return he(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const l=he(Oe(s.latitude),Oe(a.latitude));return l!==0?l:he(Oe(s.longitude),Oe(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const f=jr(l[h],c[h]);if(f)return f}return he(l.length,c.length)}(r.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Vs.mapValue&&a===Vs.mapValue)return 0;if(s===Vs.mapValue)return 1;if(a===Vs.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let y=0;y<c.length&&y<f.length;++y){const m=he(c[y],f[y]);if(m!==0)return m;const v=jr(l[c[y]],h[f[y]]);if(v!==0)return v}return he(c.length,f.length)}(r.mapValue,e.mapValue);default:throw Q()}}function du(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return he(r,e);const t=Ln(r),n=Ln(e),i=he(t.seconds,n.seconds);return i!==0?i:he(t.nanos,n.nanos)}function qr(r){return ba(r)}function ba(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Ln(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return cr(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return W.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=ba(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${ba(t.fields[a])}`;return i+"}"}(r.mapValue):Q()}function Ra(r){return!!r&&"integerValue"in r}function ll(r){return!!r&&"arrayValue"in r}function fu(r){return!!r&&"nullValue"in r}function pu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ws(r){return!!r&&"mapValue"in r}function Oi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Jr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Oi(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function KE(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ws(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(t)}setAll(e){let t=Xe.emptyPath(),n={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=l.popLast()}a?n[l.lastSegment()]=Oi(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Ws(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Ws(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Jr(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new _t(Oi(this.value))}}function Rd(r){const e=[];return Jr(r.fields,(t,n)=>{const i=new Xe([t]);if(Ws(n)){const s=Rd(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,n,i,s,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new st(e,0,X.min(),X.min(),X.min(),_t.empty(),0)}static newFoundDocument(e,t,n,i){return new st(e,1,t,X.min(),n,i,0)}static newNoDocument(e,t){return new st(e,2,t,X.min(),X.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,X.min(),X.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.position=e,this.inclusive=t}}function gu(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=W.comparator(W.fromName(a.referenceValue),t.key):n=jr(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function mu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Gt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t="asc"){this.field=e,this.dir=t}}function QE(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{}class $e extends Sd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new XE(e,t,n):t==="array-contains"?new ew(e,n):t==="in"?new tw(e,n):t==="not-in"?new nw(e,n):t==="array-contains-any"?new rw(e,n):new $e(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new JE(e,n):new ZE(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jr(t,this.value)):t!==null&&ur(this.value)===ur(t)&&this.matchesComparison(jr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Sd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Kt(e,t)}matches(e){return kd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function kd(r){return r.op==="and"}function Pd(r){return YE(r)&&kd(r)}function YE(r){for(const e of r.filters)if(e instanceof Kt)return!1;return!0}function Sa(r){if(r instanceof $e)return r.field.canonicalString()+r.op.toString()+qr(r.value);if(Pd(r))return r.filters.map(e=>Sa(e)).join(",");{const e=r.filters.map(t=>Sa(t)).join(",");return`${r.op}(${e})`}}function Cd(r,e){return r instanceof $e?function(n,i){return i instanceof $e&&n.op===i.op&&n.field.isEqual(i.field)&&Gt(n.value,i.value)}(r,e):r instanceof Kt?function(n,i){return i instanceof Kt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,l)=>s&&Cd(a,i.filters[l]),!0):!1}(r,e):void Q()}function Dd(r){return r instanceof $e?function(t){return`${t.field.canonicalString()} ${t.op} ${qr(t.value)}`}(r):r instanceof Kt?function(t){return t.op.toString()+" {"+t.getFilters().map(Dd).join(" ,")+"}"}(r):"Filter"}class XE extends $e{constructor(e,t,n){super(e,t,n),this.key=W.fromName(n.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class JE extends $e{constructor(e,t){super(e,"in",t),this.keys=xd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ZE extends $e{constructor(e,t){super(e,"not-in",t),this.keys=xd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>W.fromName(n.referenceValue))}class ew extends $e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ll(t)&&Hi(t.arrayValue,this.value)}}class tw extends $e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hi(this.value.arrayValue,t)}}class nw extends $e{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Hi(this.value.arrayValue,t)}}class rw extends $e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ll(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Hi(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t=null,n=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function _u(r,e=null,t=[],n=[],i=null,s=null,a=null){return new iw(r,e,t,n,i,s,a)}function cl(r){const e=J(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Sa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ao(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>qr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>qr(n)).join(",")),e.ue=t}return e.ue}function ul(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!QE(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Cd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!mu(r.startAt,e.startAt)&&mu(r.endAt,e.endAt)}function ka(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t=null,n=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sw(r,e,t,n,i,s,a,l){return new bo(r,e,t,n,i,s,a,l)}function Nd(r){return new bo(r)}function yu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ow(r){return r.collectionGroup!==null}function Li(r){const e=J(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Je(Xe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new uo(s,n))}),t.has(Xe.keyField().canonicalString())||e.ce.push(new uo(Xe.keyField(),n))}return e.ce}function qt(r){const e=J(r);return e.le||(e.le=aw(e,Li(r))),e.le}function aw(r,e){if(r.limitType==="F")return _u(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new uo(i.field,s)});const t=r.endAt?new co(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new co(r.startAt.position,r.startAt.inclusive):null;return _u(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Pa(r,e,t){return new bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ro(r,e){return ul(qt(r),qt(e))&&r.limitType===e.limitType}function Od(r){return`${cl(qt(r))}|lt:${r.limitType}`}function Cr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Dd(i)).join(", ")}]`),Ao(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>qr(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>qr(i)).join(",")),`Target(${n})`}(qt(r))}; limitType=${r.limitType})`}function So(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):W.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Li(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,l,c){const h=gu(a,l,c);return a.inclusive?h<=0:h<0}(n.startAt,Li(n),i)||n.endAt&&!function(a,l,c){const h=gu(a,l,c);return a.inclusive?h>=0:h>0}(n.endAt,Li(n),i))}(r,e)}function lw(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ld(r){return(e,t)=>{let n=!1;for(const i of Li(r)){const s=cw(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function cw(r,e,t){const n=r.field.isKeyField()?W.comparator(e.key,t.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?jr(c,h):Q()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Ad(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Pe(W.comparator);function yn(){return uw}const Vd=new Pe(W.comparator);function ki(...r){let e=Vd;for(const t of r)e=e.insert(t.key,t);return e}function Md(r){let e=Vd;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function er(){return Vi()}function Fd(){return Vi()}function Vi(){return new Zr(r=>r.toString(),(r,e)=>r.isEqual(e))}const hw=new Pe(W.comparator),dw=new Je(W.comparator);function ie(...r){let e=dw;for(const t of r)e=e.add(t);return e}const fw=new Je(he);function pw(){return fw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lo(e)?"-0":e}}function Bd(r){return{integerValue:""+r}}function gw(r,e){return HE(e)?Bd(e):Ud(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this._=void 0}}function mw(r,e,t){return r instanceof ho?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ol(s)&&(s=al(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):r instanceof Wi?zd(r,e):r instanceof Gi?jd(r,e):function(i,s){const a=$d(i,s),l=Eu(a)+Eu(i.Pe);return Ra(a)&&Ra(i.Pe)?Bd(l):Ud(i.serializer,l)}(r,e)}function _w(r,e,t){return r instanceof Wi?zd(r,e):r instanceof Gi?jd(r,e):t}function $d(r,e){return r instanceof fo?function(n){return Ra(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class ho extends ko{}class Wi extends ko{constructor(e){super(),this.elements=e}}function zd(r,e){const t=qd(e);for(const n of r.elements)t.some(i=>Gt(i,n))||t.push(n);return{arrayValue:{values:t}}}class Gi extends ko{constructor(e){super(),this.elements=e}}function jd(r,e){let t=qd(e);for(const n of r.elements)t=t.filter(i=>!Gt(i,n));return{arrayValue:{values:t}}}class fo extends ko{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Eu(r){return Oe(r.integerValue||r.doubleValue)}function qd(r){return ll(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function yw(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof Wi&&i instanceof Wi||n instanceof Gi&&i instanceof Gi?zr(n.elements,i.elements,Gt):n instanceof fo&&i instanceof fo?Gt(n.Pe,i.Pe):n instanceof ho&&i instanceof ho}(r.transform,e.transform)}class Ew{constructor(e,t){this.version=e,this.transformResults=t}}class Ht{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gs(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Po{}function Hd(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new hl(r.key,Ht.none()):new os(r.key,r.data,Ht.none());{const t=r.data,n=_t.empty();let i=new Je(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new fr(r.key,n,new Rt(i.toArray()),Ht.none())}}function ww(r,e,t){r instanceof os?function(i,s,a){const l=i.value.clone(),c=Tu(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):r instanceof fr?function(i,s,a){if(!Gs(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Tu(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Wd(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Mi(r,e,t,n){return r instanceof os?function(s,a,l,c){if(!Gs(s.precondition,a))return l;const h=s.value.clone(),f=vu(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof fr?function(s,a,l,c){if(!Gs(s.precondition,a))return l;const h=vu(s.fieldTransforms,c,a),f=a.data;return f.setAll(Wd(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(r,e,t,n):function(s,a,l){return Gs(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,e,t)}function Tw(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=$d(n.transform,i||null);s!=null&&(t===null&&(t=_t.empty()),t.set(n.field,s))}return t||null}function wu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&zr(n,i,(s,a)=>yw(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class os extends Po{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fr extends Po{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Wd(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Tu(r,e,t){const n=new Map;Ie(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,l=e.data.field(s.field);n.set(s.field,_w(a,l,t[i]))}return n}function vu(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,mw(s,a,e))}return n}class hl extends Po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vw extends Po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ww(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Mi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Mi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Fd();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=Hd(a,l);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(X.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ie())}isEqual(e){return this.batchId===e.batchId&&zr(this.mutations,e.mutations,(t,n)=>wu(t,n))&&zr(this.baseMutations,e.baseMutations,(t,n)=>wu(t,n))}}class dl{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Ie(e.mutations.length===n.length);let i=function(){return hw}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new dl(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,oe;function Rw(r){switch(r){default:return Q();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Gd(r){if(r===void 0)return _n("GRPC error has no .code"),O.UNKNOWN;switch(r){case Ne.OK:return O.OK;case Ne.CANCELLED:return O.CANCELLED;case Ne.UNKNOWN:return O.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return O.INTERNAL;case Ne.UNAVAILABLE:return O.UNAVAILABLE;case Ne.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ne.NOT_FOUND:return O.NOT_FOUND;case Ne.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ne.ABORTED:return O.ABORTED;case Ne.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ne.DATA_LOSS:return O.DATA_LOSS;default:return Q()}}(oe=Ne||(Ne={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new tr([4294967295,4294967295],0);function Iu(r){const e=Sw().encode(r),t=new gd;return t.update(e),new Uint8Array(t.digest())}function Au(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new tr([t,n],0),new tr([i,s],0)]}class fl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Pi(`Invalid padding: ${t}`);if(n<0)throw new Pi(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Pi(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Pi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=tr.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(tr.fromNumber(n)));return i.compare(kw)===1&&(i=new tr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Iu(e),[n,i]=Au(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);if(!this.de(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new fl(s,i,t);return n.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Iu(e),[n,i]=Au(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,as.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Co(X.min(),i,new Pe(he),yn(),ie())}}class as{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new as(n,t,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Kd{constructor(e,t){this.targetId=e,this.me=t}}class Qd{constructor(e,t,n=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class bu{constructor(){this.fe=0,this.ge=Su(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ie(),t=ie(),n=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Q()}}),new as(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=Su()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Pw{constructor(e){this.Le=e,this.Be=new Map,this.ke=yn(),this.qe=Ru(),this.Qe=new Pe(he)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(ka(s))if(n===0){const a=new W(s.path);this.Ue(t,a,st.newNoDocument(a,X.min()))}else Ie(n===1);else{const a=this.Ye(t);if(a!==n){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=cr(n).toUint8Array()}catch(c){if(c instanceof bd)return $r("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new fl(a,i,s)}catch(c){return $r(c instanceof Pi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&ka(l.target)){const c=new W(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,st.newNoDocument(c,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let n=ie();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Co(e,t,this.Qe,this.ke,n);return this.ke=yn(),this.qe=Ru(),this.Qe=new Pe(he),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Je(he),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ru(){return new Pe(W.comparator)}function Su(){return new Pe(W.comparator)}const Cw={asc:"ASCENDING",desc:"DESCENDING"},Dw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xw={and:"AND",or:"OR"};class Nw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ca(r,e){return r.useProto3Json||Ao(e)?e:{value:e}}function po(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yd(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Ow(r,e){return po(r,e.toTimestamp())}function Wt(r){return Ie(!!r),X.fromTimestamp(function(t){const n=Ln(t);return new Le(n.seconds,n.nanos)}(r))}function pl(r,e){return Da(r,e).canonicalString()}function Da(r,e){const t=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Xd(r){const e=Se.fromString(r);return Ie(nf(e)),e}function xa(r,e){return pl(r.databaseId,e.path)}function sa(r,e){const t=Xd(e);if(t.get(1)!==r.databaseId.projectId)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new W(Zd(t))}function Jd(r,e){return pl(r.databaseId,e)}function Lw(r){const e=Xd(r);return e.length===4?Se.emptyPath():Zd(e)}function Na(r){return new Se(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Zd(r){return Ie(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ku(r,e,t){return{name:xa(r,e),fields:t.value.mapValue.fields}}function Vw(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(Ie(f===void 0||typeof f=="string"),at.fromBase64String(f||"")):(Ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array),at.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?O.UNKNOWN:Gd(h.code);return new H(f,h.message||"")}(a);t=new Qd(n,i,s,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=sa(r,n.document.name),s=Wt(n.document.updateTime),a=n.document.createTime?Wt(n.document.createTime):X.min(),l=new _t({mapValue:{fields:n.document.fields}}),c=st.newFoundDocument(i,s,a,l),h=n.targetIds||[],f=n.removedTargetIds||[];t=new Ks(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=sa(r,n.document),s=n.readTime?Wt(n.readTime):X.min(),a=st.newNoDocument(i,s),l=n.removedTargetIds||[];t=new Ks([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=sa(r,n.document),s=n.removedTargetIds||[];t=new Ks([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new bw(i,s),l=n.targetId;t=new Kd(l,a)}}return t}function Mw(r,e){let t;if(e instanceof os)t={update:ku(r,e.key,e.value)};else if(e instanceof hl)t={delete:xa(r,e.key)};else if(e instanceof fr)t={update:ku(r,e.key,e.data),updateMask:Ww(e.fieldMask)};else{if(!(e instanceof vw))return Q();t={verify:xa(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const l=a.transform;if(l instanceof ho)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Wi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw Q()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ow(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(r,e.precondition)),t}function Fw(r,e){return r&&r.length>0?(Ie(e!==void 0),r.map(t=>function(i,s){let a=i.updateTime?Wt(i.updateTime):Wt(s);return a.isEqual(X.min())&&(a=Wt(s)),new Ew(a,i.transformResults||[])}(t,e))):[]}function Uw(r,e){return{documents:[Jd(r,e.path)]}}function Bw(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Jd(r,i);const s=function(h){if(h.length!==0)return tf(Kt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Dr(m.field),direction:jw(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ca(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function $w(r){let e=Lw(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){Ie(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(y){const m=ef(y);return m instanceof Kt&&Pd(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(m=>function(R){return new uo(xr(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(y){let m;return m=typeof y=="object"?y.value:y,Ao(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(y){const m=!!y.before,v=y.values||[];return new co(v,m)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const m=!y.before,v=y.values||[];return new co(v,m)}(t.endAt)),sw(e,i,a,s,l,"F",c,h)}function zw(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ef(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=xr(t.unaryFilter.field);return $e.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=xr(t.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xr(t.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(t.unaryFilter.field);return $e.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(r):r.fieldFilter!==void 0?function(t){return $e.create(xr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Kt.create(t.compositeFilter.filters.map(n=>ef(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(r):Q()}function jw(r){return Cw[r]}function qw(r){return Dw[r]}function Hw(r){return xw[r]}function Dr(r){return{fieldPath:r.canonicalString()}}function xr(r){return Xe.fromServerFormat(r.fieldPath)}function tf(r){return r instanceof $e?function(t){if(t.op==="=="){if(pu(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NAN"}};if(fu(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pu(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NAN"}};if(fu(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(t.field),op:qw(t.op),value:t.value}}}(r):r instanceof Kt?function(t){const n=t.getFilters().map(i=>tf(i));return n.length===1?n[0]:{compositeFilter:{op:Hw(t.op),filters:n}}}(r):Q()}function Ww(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function nf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,n,i,s=X.min(),a=X.min(),l=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.ct=e}}function Kw(r){const e=$w({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Pa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this._n=new Yw}addToCollectionParentIndex(e,t){return this._n.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(On.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(On.min())}updateCollectionGroup(e,t,n){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Yw{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Je(Se.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Je(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Hr(0)}static Ln(){return new Hr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.changes=new Zr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?N.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Mi(n.mutation,i,Rt.empty(),Le.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ie()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ie()){const i=er();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=ki();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=er();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ie()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,n,i){let s=yn();const a=Vi(),l=function(){return Vi()}();return t.forEach((c,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof fr)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Mi(f.mutation,h,f.mutation.getFieldMask(),Le.now())):a.set(h.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var y;return l.set(h,new Jw(f,(y=a.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const n=Vi();let i=new Pe((a,l)=>a-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Rt.empty();f=l.applyToLocalView(h,f),n.set(c,f);const y=(i.get(l.batchId)||ie()).add(c);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,y=Fd();f.forEach(m=>{if(!s.has(m)){const v=Hd(t.get(m),n.get(m));v!==null&&y.set(m,v),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,y))}return N.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ow(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):N.resolve(er());let l=-1,c=s;return a.next(h=>N.forEach(h,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,ie())).next(f=>({batchId:l,changes:Md(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(n=>{let i=ki();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=ki();return this.indexManager.getCollectionParents(e,s).next(l=>N.forEach(l,c=>{const h=function(y,m){return new bo(m,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((y,m)=>{a=a.insert(y,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,st.newInvalidDocument(f)))});let l=ki();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Mi(f.mutation,h,Rt.empty(),Le.now()),So(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return N.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Wt(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:Kw(i.bundledQuery),readTime:Wt(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.overlays=new Pe(W.comparator),this.hr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const n=er();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.hr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(n)),N.resolve()}getOverlaysForCollection(e,t,n){const i=er(),s=t.length+1,a=new W(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new Pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=er(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=er(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return N.resolve(l)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Aw(t,n));let s=this.hr.get(t);s===void 0&&(s=ie(),this.hr.set(t,s)),this.hr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.Pr=new Je(He.Ir),this.Tr=new Je(He.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new He(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Ar(new He(e,t))}Rr(e,t){e.forEach(n=>this.removeReference(n,t))}Vr(e){const t=new W(new Se([])),n=new He(t,e),i=new He(t,e+1),s=[];return this.Tr.forEachInRange([n,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new W(new Se([])),n=new He(t,e),i=new He(t,e+1);let s=ie();return this.Tr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new He(e,0),n=this.Pr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class He{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return W.comparator(e.key,t.key)||he(e.pr,t.pr)}static Er(e,t){return he(e.pr,t.pr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Je(He.Ir)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Iw(s,t,n,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.br(n),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new He(t,0),i=new He(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([n,i],a=>{const l=this.Sr(a.pr);s.push(l)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Je(he);return t.forEach(i=>{const s=new He(i,0),a=new He(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],l=>{n=n.add(l.pr)})}),N.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;W.isDocumentKey(s)||(s=s.child(""));const a=new He(new W(s),0);let l=new Je(he);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},a),N.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(n=>{const i=this.Sr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ie(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return N.forEach(t.mutations,i=>{const s=new He(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){const n=new He(t,0),i=this.wr.firstAfterOrEqual(n);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.vr=e,this.docs=function(){return new Pe(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return N.resolve(n?n.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let n=yn();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),N.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=yn();const a=t.path,l=new W(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||$E(BE(f),n)<=0||(i.has(f.key)||So(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,n,i){Q()}Fr(e,t){return N.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new iT(this)}getSize(e){return N.resolve(this.size)}}class iT extends Xw{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(n)}),N.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.persistence=e,this.Mr=new Zr(t=>cl(t),ul),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new gl,this.targetCount=0,this.Lr=Hr.Nn()}forEachTarget(e,t){return this.Mr.forEach((n,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),N.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Hr(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.qn(t),N.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return N.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),N.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return N.resolve(n)}containsKey(e,t){return N.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t){this.Br={},this.overlays={},this.kr=new sl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new sT(this),this.indexManager=new Qw,this.remoteDocumentCache=function(i){return new rT(i)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new Gw(t),this.$r=new eT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new nT(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){z("MemoryPersistence","Starting transaction:",e);const i=new aT(this.kr.next());return this.referenceDelegate.Ur(),n(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return N.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}class aT extends jE{constructor(e){super(),this.currentSequenceNumber=e}}class ml{constructor(e){this.persistence=e,this.zr=new gl,this.jr=null}static Hr(e){return new ml(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),N.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),N.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,n=>{const i=W.fromPath(n);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,X.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(n=>{n?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return N.or([()=>N.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=i}static Ki(e,t){let n=ie(),i=ie();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _l(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Lp()?8:qE(Ze())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new lT;return this.Ji(e,t,a).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>s.result)}Yi(e,t,n,i){return n.documentReadCount<this.Wi?(Ai()<=se.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Cr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),N.resolve()):(Ai()<=se.DEBUG&&z("QueryEngine","Query:",Cr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(Ai()<=se.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Cr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(t))):N.resolve())}ji(e,t){if(yu(t))return N.resolve(null);let n=qt(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Pa(t,null,"F"),n=qt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=ie(...s);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.Zi(t,l);return this.Xi(t,h,a,c.readTime)?this.ji(e,Pa(t,null,"F")):this.es(e,h,t,c)}))})))}Hi(e,t,n,i){return yu(t)||i.isEqual(X.min())?N.resolve(null):this.zi.getDocuments(e,n).next(s=>{const a=this.Zi(t,s);return this.Xi(t,a,n,i)?N.resolve(null):(Ai()<=se.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cr(t)),this.es(e,a,t,UE(i,-1)).next(l=>l))})}Zi(e,t){let n=new Je(Ld(e));return t.forEach((i,s)=>{So(e,s)&&(n=n.add(s))}),n}Xi(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,n){return Ai()<=se.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Cr(t)),this.zi.getDocumentsMatchingQuery(e,t,On.min(),n)}es(e,t,n,i){return this.zi.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,n,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new Pe(he),this.rs=new Zr(s=>cl(s),ul),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zw(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function hT(r,e,t,n){return new uT(r,e,t,n)}async function rf(r,e){const t=J(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],l=[];let c=ie();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function dT(r,e){const t=J(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const y=h.batch,m=y.keys();let v=N.resolve();return m.forEach(R=>{v=v.next(()=>f.getEntry(c,R)).next(P=>{const k=h.docVersions.get(R);Ie(k!==null),P.version.compareTo(k)<0&&(y.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,y))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function sf(r){const e=J(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function fT(r,e){const t=J(r),n=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const l=[];e.targetChanges.forEach((f,y)=>{const m=i.get(y);if(!m)return;l.push(t.Qr.removeMatchingKeys(s,f.removedDocuments,y).next(()=>t.Qr.addMatchingKeys(s,f.addedDocuments,y)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?v=v.withResumeToken(at.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,n)),i=i.insert(y,v),function(P,k,U){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(m,v,f)&&l.push(t.Qr.updateTargetData(s,v))});let c=yn(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(pT(s,a,e.documentUpdates).next(f=>{c=f.cs,h=f.ls})),!n.isEqual(X.min())){const f=t.Qr.getLastRemoteSnapshotVersion(s).next(y=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(f)}return N.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.ns=i,s))}function pT(r,e,t){let n=ie(),i=ie();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=yn();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:i}})}function gT(r,e){const t=J(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function mT(r,e){const t=J(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Qr.getTargetData(n,e).next(s=>s?(i=s,N.resolve(i)):t.Qr.allocateTargetId(n).next(a=>(i=new kn(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Qr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.ns.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(n.targetId,n),t.rs.set(e,n.targetId)),n})}async function Oa(r,e,t){const n=J(r),i=n.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ss(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.ns=n.ns.remove(e),n.rs.delete(i.target)}function Pu(r,e,t){const n=J(r);let i=X.min(),s=ie();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const y=J(c),m=y.rs.get(f);return m!==void 0?N.resolve(y.ns.get(m)):y.Qr.getTargetData(h,f)}(n,a,qt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>n.ts.getDocumentsMatchingQuery(a,e,t?i:X.min(),t?s:ie())).next(l=>(_T(n,lw(e),l),{documents:l,hs:s})))}function _T(r,e,t){let n=r.ss.get(e)||X.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.ss.set(e,n)}class Cu{constructor(){this.activeTargetIds=pw()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yT{constructor(){this.no=new Cu,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Cu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms=null;function oa(){return Ms===null?Ms=function(){return 268435456+Math.round(2147483648*Math.random())}():Ms++,"0x"+Ms.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class vT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,n,i,s,a){const l=oa(),c=this.vo(t,n.toUriEncodedString());z("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,a),this.Mo(t,c,h,i).then(f=>(z("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw $r("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}xo(t,n,i,s,a,l){return this.Co(t,n,i,s,a)}Fo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}vo(t,n){const i=wT[t];return`${this.wo}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,n,i){const s=oa();return new Promise((a,l)=>{const c=new md;c.setWithCredentials(!0),c.listenOnce(yd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hs.NO_ERROR:const f=c.getResponseJson();z(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Hs.TIMEOUT:z(rt,`RPC '${e}' ${s} timed out`),l(new H(O.DEADLINE_EXCEEDED,"Request time out"));break;case Hs.HTTP_ERROR:const y=c.getStatus();if(z(rt,`RPC '${e}' ${s} failed with status:`,y,"response text:",c.getResponseText()),y>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const R=function(k){const U=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(U)>=0?U:O.UNKNOWN}(v.status);l(new H(R,v.message))}else l(new H(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new H(O.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{z(rt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);z(rt,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,n,15)})}Oo(e,t,n){const i=oa(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Td(),l=wd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new _d({})),this.Fo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=s.join("");z(rt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const y=a.createWebChannel(f,c);let m=!1,v=!1;const R=new TT({lo:k=>{v?z(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||(z(rt,`Opening RPC '${e}' stream ${i} transport.`),y.open(),m=!0),z(rt,`RPC '${e}' stream ${i} sending:`,k),y.send(k))},ho:()=>y.close()}),P=(k,U,M)=>{k.listen(U,V=>{try{M(V)}catch(K){setTimeout(()=>{throw K},0)}})};return P(y,Si.EventType.OPEN,()=>{v||(z(rt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),P(y,Si.EventType.CLOSE,()=>{v||(v=!0,z(rt,`RPC '${e}' stream ${i} transport closed`),R.po())}),P(y,Si.EventType.ERROR,k=>{v||(v=!0,$r(rt,`RPC '${e}' stream ${i} transport errored:`,k),R.po(new H(O.UNAVAILABLE,"The operation could not be completed")))}),P(y,Si.EventType.MESSAGE,k=>{var U;if(!v){const M=k.data[0];Ie(!!M);const V=M,K=V.error||((U=V[0])===null||U===void 0?void 0:U.error);if(K){z(rt,`RPC '${e}' stream ${i} received error:`,K);const ee=K.status;let Y=function(_){const T=Ne[_];if(T!==void 0)return Gd(T)}(ee),w=K.message;Y===void 0&&(Y=O.INTERNAL,w="Unknown error status: "+ee+" with message "+K.message),v=!0,R.po(new H(Y,w)),y.close()}else z(rt,`RPC '${e}' stream ${i} received:`,M),R.yo(M)}}),P(l,Ed.STAT_EVENT,k=>{k.stat===Aa.PROXY?z(rt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Aa.NOPROXY&&z(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}function aa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(r){return new Nw(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,n=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=n,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-n);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t,n,i,s,a,l,c){this.oi=e,this.Go=n,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new of(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(_n(t.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.jo===t&&this.u_(n,i)},n=>{e(()=>{const i=new H(O.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(i)})})}u_(e,t){const n=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{n(()=>this.c_(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IT extends af{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=Vw(this.serializer,e),n=function(s){if(!("targetChange"in s))return X.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?Wt(a.readTime):X.min()}(e);return this.listener.h_(t,n)}P_(e){const t={};t.database=Na(this.serializer),t.addTarget=function(s,a){let l;const c=a.target;if(l=ka(c)?{documents:Uw(s,c)}:{query:Bw(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Yd(s,a.resumeToken);const h=Ca(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(X.min())>0){l.readTime=po(s,a.snapshotVersion.toTimestamp());const h=Ca(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const n=zw(this.serializer,e);n&&(t.labels=n),this.i_(t)}I_(e){const t={};t.database=Na(this.serializer),t.removeTarget=e,this.i_(t)}}class AT extends af{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Fw(e.writeResults,e.commitTime),n=Wt(e.commitTime);return this.listener.A_(n,t)}return Ie(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Na(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Mw(this.serializer,n))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,n,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,Da(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(O.UNKNOWN,s.toString())})}xo(e,t,n,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,Da(t,n),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(O.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class RT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(_n(t),this.y_=!1):z("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{n.enqueueAndForget(async()=>{pr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=J(c);h.M_.add(4),await ls(h),h.N_.set("Unknown"),h.M_.delete(4),await xo(h)}(this))})}),this.N_=new RT(n,i)}}async function xo(r){if(pr(r))for(const e of r.x_)await e(!0)}async function ls(r){for(const e of r.x_)await e(!1)}function lf(r,e){const t=J(r);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),Tl(t)?wl(t):ei(t).Xo()&&El(t,e))}function yl(r,e){const t=J(r),n=ei(t);t.F_.delete(e),n.Xo()&&cf(t,e),t.F_.size===0&&(n.Xo()?n.n_():pr(t)&&t.N_.set("Unknown"))}function El(r,e){if(r.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ei(r).P_(e)}function cf(r,e){r.L_.xe(e),ei(r).I_(e)}function wl(r){r.L_=new Pw({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.F_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),ei(r).start(),r.N_.w_()}function Tl(r){return pr(r)&&!ei(r).Zo()&&r.F_.size>0}function pr(r){return J(r).M_.size===0}function uf(r){r.L_=void 0}async function kT(r){r.N_.set("Online")}async function PT(r){r.F_.forEach((e,t)=>{El(r,e)})}async function CT(r,e){uf(r),Tl(r)?(r.N_.D_(e),wl(r)):r.N_.set("Unknown")}async function DT(r,e,t){if(r.N_.set("Online"),e instanceof Qd&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(r,e)}catch(n){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await go(r,n)}else if(e instanceof Ks?r.L_.Ke(e):e instanceof Kd?r.L_.He(e):r.L_.We(e),!t.isEqual(X.min()))try{const n=await sf(r.localStore);t.compareTo(n)>=0&&await function(s,a){const l=s.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.F_.get(h);f&&s.F_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=s.F_.get(c);if(!f)return;s.F_.set(c,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),cf(s,c);const y=new kn(f.target,c,h,f.sequenceNumber);El(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){z("RemoteStore","Failed to raise snapshot:",n),await go(r,n)}}async function go(r,e,t){if(!ss(e))throw e;r.M_.add(1),await ls(r),r.N_.set("Offline"),t||(t=()=>sf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await t(),r.M_.delete(1),await xo(r)})}function hf(r,e){return e().catch(t=>go(r,t,e))}async function No(r){const e=J(r),t=Vn(e);let n=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;xT(e);)try{const i=await gT(e.localStore,n);if(i===null){e.v_.length===0&&t.n_();break}n=i.batchId,NT(e,i)}catch(i){await go(e,i)}df(e)&&ff(e)}function xT(r){return pr(r)&&r.v_.length<10}function NT(r,e){r.v_.push(e);const t=Vn(r);t.Xo()&&t.E_&&t.d_(e.mutations)}function df(r){return pr(r)&&!Vn(r).Zo()&&r.v_.length>0}function ff(r){Vn(r).start()}async function OT(r){Vn(r).V_()}async function LT(r){const e=Vn(r);for(const t of r.v_)e.d_(t.mutations)}async function VT(r,e,t){const n=r.v_.shift(),i=dl.from(n,e,t);await hf(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await No(r)}async function MT(r,e){e&&Vn(r).E_&&await async function(n,i){if(function(a){return Rw(a)&&a!==O.ABORTED}(i.code)){const s=n.v_.shift();Vn(n).t_(),await hf(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await No(n)}}(r,e),df(r)&&ff(r)}async function xu(r,e){const t=J(r);t.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const n=pr(t);t.M_.add(3),await ls(t),n&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await xo(t)}async function FT(r,e){const t=J(r);e?(t.M_.delete(2),await xo(t)):e||(t.M_.add(2),await ls(t),t.N_.set("Unknown"))}function ei(r){return r.B_||(r.B_=function(t,n,i){const s=J(t);return s.f_(),new IT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Po:kT.bind(null,r),To:PT.bind(null,r),Ao:CT.bind(null,r),h_:DT.bind(null,r)}),r.x_.push(async e=>{e?(r.B_.t_(),Tl(r)?wl(r):r.N_.set("Unknown")):(await r.B_.stop(),uf(r))})),r.B_}function Vn(r){return r.k_||(r.k_=function(t,n,i){const s=J(t);return s.f_(),new AT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:OT.bind(null,r),Ao:MT.bind(null,r),R_:LT.bind(null,r),A_:VT.bind(null,r)}),r.x_.push(async e=>{e?(r.k_.t_(),await No(r)):(await r.k_.stop(),r.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,l=new vl(e,t,a,i,s);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Il(r,e){if(_n("AsyncQueue",`${e}: ${r}`),ss(r))return new H(O.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.comparator=e?(t,n)=>e(t,n)||W.comparator(t.key,n.key):(t,n)=>W.comparator(t.key,n.key),this.keyedMap=ki(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Ur;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.q_=new Pe(W.comparator)}track(e){const t=e.doc.key,n=this.q_.get(t);n?e.type!==0&&n.type===3?this.q_=this.q_.insert(t,e):e.type===3&&n.type!==1?this.q_=this.q_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.q_=this.q_.remove(t):e.type===1&&n.type===2?this.q_=this.q_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):Q():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Wr{constructor(e,t,n,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Wr(e,t,Ur.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ro(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class BT{constructor(){this.queries=new Zr(e=>Od(e),Ro),this.onlineState="Unknown",this.z_=new Set}}async function $T(r,e){const t=J(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(n=2):(s=new UT,n=e.G_()?0:1);try{switch(n){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Il(a,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&Al(t)}async function zT(r,e){const t=J(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function jT(r,e){const t=J(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.U_)l.H_(i)&&(n=!0);a.K_=i}}n&&Al(t)}function qT(r,e,t){const n=J(r),i=n.queries.get(e);if(i)for(const s of i.U_)s.onError(t);n.queries.delete(e)}function Al(r){r.z_.forEach(e=>{e.next()})}var La,Ou;(Ou=La||(La={})).J_="default",Ou.Cache="cache";class HT{constructor(e,t,n){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Wr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const n=t!=="Offline";return(!this.options.ra||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==La.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.key=e}}class gf{constructor(e){this.key=e}}class WT{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ie(),this.mutatedKeys=ie(),this.Ia=Ld(e),this.Ta=new Ur(this.Ia)}get Ea(){return this.la}da(e,t){const n=t?t.Aa:new Nu,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const m=i.get(f),v=So(this.query,y)?y:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;m&&v?m.data.isEqual(v.data)?R!==P&&(n.track({type:3,doc:v}),k=!0):this.Ra(m,v)||(n.track({type:2,doc:v}),k=!0,(c&&this.Ia(v,c)>0||h&&this.Ia(v,h)<0)&&(l=!0)):!m&&v?(n.track({type:0,doc:v}),k=!0):m&&!v&&(n.track({type:1,doc:m}),k=!0,(c||h)&&(l=!0)),k&&(v?(a=a.add(v),s=P?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ta:a,Aa:n,Xi:l,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((f,y)=>function(v,R){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(v)-P(R)}(f.type,y.type)||this.Ia(f.doc,y.doc)),this.Va(n),i=i!=null&&i;const l=t&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new Wr(this.query,e.Ta,s,a,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Nu,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ie(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const t=[];return e.forEach(n=>{this.Pa.has(n)||t.push(new gf(n))}),this.Pa.forEach(n=>{e.has(n)||t.push(new pf(n))}),t}pa(e){this.la=e.hs,this.Pa=ie();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Wr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class GT{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class KT{constructor(e){this.key=e,this.wa=!1}}class QT{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Zr(l=>Od(l),Ro),this.Da=new Map,this.Ca=new Set,this.va=new Pe(W.comparator),this.Fa=new Map,this.Ma=new gl,this.xa={},this.Oa=new Map,this.Na=Hr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function YT(r,e,t=!0){const n=Tf(r);let i;const s=n.ba.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await mf(n,e,t,!0),i}async function XT(r,e){const t=Tf(r);await mf(t,e,!0,!1)}async function mf(r,e,t,n){const i=await mT(r.localStore,qt(e)),s=i.targetId,a=t?r.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return n&&(l=await JT(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&lf(r.remoteStore,i),l}async function JT(r,e,t,n,i){r.Ba=(y,m,v)=>async function(P,k,U,M){let V=k.view.da(U);V.Xi&&(V=await Pu(P.localStore,k.query,!1).then(({documents:w})=>k.view.da(w,V)));const K=M&&M.targetChanges.get(k.targetId),ee=M&&M.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(V,P.isPrimaryClient,K,ee);return Vu(P,k.targetId,Y.fa),Y.snapshot}(r,y,m,v);const s=await Pu(r.localStore,e,!0),a=new WT(e,s.hs),l=a.da(s.documents),c=as.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=a.applyChanges(l,r.isPrimaryClient,c);Vu(r,t,h.fa);const f=new GT(e,t,a);return r.ba.set(e,f),r.Da.has(t)?r.Da.get(t).push(e):r.Da.set(t,[e]),h.snapshot}async function ZT(r,e,t){const n=J(r),i=n.ba.get(e),s=n.Da.get(i.targetId);if(s.length>1)return n.Da.set(i.targetId,s.filter(a=>!Ro(a,e))),void n.ba.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Oa(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&yl(n.remoteStore,i.targetId),Va(n,i.targetId)}).catch(is)):(Va(n,i.targetId),await Oa(n.localStore,i.targetId,!0))}async function ev(r,e){const t=J(r),n=t.ba.get(e),i=t.Da.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),yl(t.remoteStore,n.targetId))}async function tv(r,e,t){const n=lv(r);try{const i=await function(a,l){const c=J(a),h=Le.now(),f=l.reduce((v,R)=>v.add(R.key),ie());let y,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let R=yn(),P=ie();return c.os.getEntries(v,f).next(k=>{R=k,R.forEach((U,M)=>{M.isValidDocument()||(P=P.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,R)).next(k=>{y=k;const U=[];for(const M of l){const V=Tw(M,y.get(M.key).overlayedDocument);V!=null&&U.push(new fr(M.key,V,Rd(V.value.mapValue),Ht.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,U,l)}).next(k=>{m=k;const U=k.applyToLocalDocumentSet(y,P);return c.documentOverlayCache.saveOverlays(v,k.batchId,U)})}).then(()=>({batchId:m.batchId,changes:Md(y)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new Pe(he)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(n,i.batchId,t),await cs(n,i.changes),await No(n.remoteStore)}catch(i){const s=Il(i,"Failed to persist write");t.reject(s)}}async function _f(r,e){const t=J(r);try{const n=await fT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Fa.get(s);a&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?Ie(a.wa):i.removedDocuments.size>0&&(Ie(a.wa),a.wa=!1))}),await cs(t,n,e)}catch(n){await is(n)}}function Lu(r,e,t){const n=J(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.ba.forEach((s,a)=>{const l=a.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=J(a);c.onlineState=l;let h=!1;c.queries.forEach((f,y)=>{for(const m of y.U_)m.j_(l)&&(h=!0)}),h&&Al(c)}(n.eventManager,e),i.length&&n.Sa.h_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function nv(r,e,t){const n=J(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Fa.get(e),s=i&&i.key;if(s){let a=new Pe(W.comparator);a=a.insert(s,st.newNoDocument(s,X.min()));const l=ie().add(s),c=new Co(X.min(),new Map,new Pe(he),a,l);await _f(n,c),n.va=n.va.remove(s),n.Fa.delete(e),bl(n)}else await Oa(n.localStore,e,!1).then(()=>Va(n,e,t)).catch(is)}async function rv(r,e){const t=J(r),n=e.batch.batchId;try{const i=await dT(t.localStore,e);Ef(t,n,null),yf(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await cs(t,i)}catch(i){await is(i)}}async function iv(r,e,t){const n=J(r);try{const i=await function(a,l){const c=J(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(y=>(Ie(y!==null),f=y.keys(),c.mutationQueue.removeMutationBatch(h,y))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);Ef(n,e,t),yf(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await cs(n,i)}catch(i){await is(i)}}function yf(r,e){(r.Oa.get(e)||[]).forEach(t=>{t.resolve()}),r.Oa.delete(e)}function Ef(r,e,t){const n=J(r);let i=n.xa[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.xa[n.currentUser.toKey()]=i}}function Va(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Da.get(e))r.ba.delete(n),t&&r.Sa.ka(n,t);r.Da.delete(e),r.isPrimaryClient&&r.Ma.Vr(e).forEach(n=>{r.Ma.containsKey(n)||wf(r,n)})}function wf(r,e){r.Ca.delete(e.path.canonicalString());const t=r.va.get(e);t!==null&&(yl(r.remoteStore,t),r.va=r.va.remove(e),r.Fa.delete(t),bl(r))}function Vu(r,e,t){for(const n of t)n instanceof pf?(r.Ma.addReference(n.key,e),sv(r,n)):n instanceof gf?(z("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,e),r.Ma.containsKey(n.key)||wf(r,n.key)):Q()}function sv(r,e){const t=e.key,n=t.path.canonicalString();r.va.get(t)||r.Ca.has(n)||(z("SyncEngine","New document in limbo: "+t),r.Ca.add(n),bl(r))}function bl(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const e=r.Ca.values().next().value;r.Ca.delete(e);const t=new W(Se.fromString(e)),n=r.Na.next();r.Fa.set(n,new KT(t)),r.va=r.va.insert(t,n),lf(r.remoteStore,new kn(qt(Nd(t.path)),n,"TargetPurposeLimboResolution",sl.oe))}}async function cs(r,e,t){const n=J(r),i=[],s=[],a=[];n.ba.isEmpty()||(n.ba.forEach((l,c)=>{a.push(n.Ba(c,e,t).then(h=>{if((h||t)&&n.isPrimaryClient){const f=h&&!h.fromCache;n.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){i.push(h);const f=_l.Ki(c.targetId,h);s.push(f)}}))}),await Promise.all(a),n.Sa.h_(i),await async function(c,h){const f=J(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>N.forEach(h,m=>N.forEach(m.qi,v=>f.persistence.referenceDelegate.addReference(y,m.targetId,v)).next(()=>N.forEach(m.Qi,v=>f.persistence.referenceDelegate.removeReference(y,m.targetId,v)))))}catch(y){if(!ss(y))throw y;z("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const m=y.targetId;if(!y.fromCache){const v=f.ns.get(m),R=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(R);f.ns=f.ns.insert(m,P)}}}(n.localStore,s))}async function ov(r,e){const t=J(r);if(!t.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const n=await rf(t.localStore,e);t.currentUser=e,function(s,a){s.Oa.forEach(l=>{l.forEach(c=>{c.reject(new H(O.CANCELLED,a))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await cs(t,n.us)}}function av(r,e){const t=J(r),n=t.Fa.get(e);if(n&&n.wa)return ie().add(n.key);{let i=ie();const s=t.Da.get(e);if(!s)return i;for(const a of s){const l=t.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function Tf(r){const e=J(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=_f.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=av.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nv.bind(null,e),e.Sa.h_=jT.bind(null,e.eventManager),e.Sa.ka=qT.bind(null,e.eventManager),e}function lv(r){const e=J(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iv.bind(null,e),e}class Mu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Do(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return hT(this.persistence,new cT,e.initialUser,this.serializer)}createPersistence(e){return new oT(ml.Hr,this.serializer)}createSharedClientState(e){return new yT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Lu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ov.bind(null,this.syncEngine),await FT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BT}()}createDatastore(e){const t=Do(e.databaseInfo.databaseId),n=function(s){return new vT(s)}(e.databaseInfo);return function(s,a,l,c){return new bT(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,l){return new ST(n,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Lu(this.syncEngine,t,0),function(){return Du.D()?new Du:new ET}())}createSyncEngine(e,t){return function(i,s,a,l,c,h,f){const y=new QT(i,s,a,l,c,h);return f&&(y.La=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(n){const i=J(n);z("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ls(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=Id.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Il(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function la(r,e){r.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await rf(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Fu(r,e){r.asyncQueue.verifyOperationInProgress();const t=await fv(r);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>xu(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>xu(e.remoteStore,i)),r._onlineComponents=e}function dv(r){return r.name==="FirebaseError"?r.code===O.FAILED_PRECONDITION||r.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function fv(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await la(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!dv(t))throw t;$r("Error using user provided cache. Falling back to memory cache: "+t),await la(r,new Mu)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await la(r,new Mu);return r._offlineComponents}async function vf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Fu(r,r._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Fu(r,new cv))),r._onlineComponents}function pv(r){return vf(r).then(e=>e.syncEngine)}async function gv(r){const e=await vf(r),t=e.eventManager;return t.onListen=YT.bind(null,e.syncEngine),t.onUnlisten=ZT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=XT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ev.bind(null,e.syncEngine),t}function mv(r,e,t={}){const n=new xn;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const f=new uv({next:m=>{a.enqueueAndForget(()=>zT(s,y)),m.fromCache&&c.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),y=new HT(l,f,{includeMetadataChanges:!0,ra:!0});return $T(s,y)}(await gv(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(r,e,t){if(!t)throw new H(O.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function _v(r,e,t,n){if(e===!0&&n===!0)throw new H(O.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Bu(r){if(!W.isDocumentKey(r))throw new H(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $u(r){if(W.isDocumentKey(r))throw new H(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Rl(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Q()}function Ki(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new H(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rl(r);throw new H(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_v("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=If((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oo{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CE;switch(n.type){case"firstParty":return new OE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Uu.get(t);n&&(z("ComponentProvider","Removing Datastore"),Uu.delete(t),n.terminate())}(this),Promise.resolve()}}function yv(r,e,t,n={}){var i;const s=(r=Ki(r,Oo))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&$r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=it.MOCK_USER;else{l=Pp(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const h=n.mockUserToken.sub||n.mockUserToken.user_id;if(!h)throw new H(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new it(h)}r._authCredentials=new DE(new vd(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Lo(this.firestore,e,this._query)}}class St{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Nn extends Lo{constructor(e,t,n){super(e,t,Nd(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new W(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function bf(r,e,...t){if(r=Et(r),Af("collection","path",e),r instanceof Oo){const n=Se.fromString(e,...t);return $u(n),new Nn(r,null,n)}{if(!(r instanceof St||r instanceof Nn))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Se.fromString(e,...t));return $u(n),new Nn(r.firestore,null,n)}}function Sl(r,e,...t){if(r=Et(r),arguments.length===1&&(e=Id.newId()),Af("doc","path",e),r instanceof Oo){const n=Se.fromString(e,...t);return Bu(n),new St(r,null,new W(n))}{if(!(r instanceof St||r instanceof Nn))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Se.fromString(e,...t));return Bu(n),new St(r.firestore,r instanceof Nn?r.converter:null,new W(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new of(this,"async_queue_retry"),this.hu=()=>{const t=aa();t&&z("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=aa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=aa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new xn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ss(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(n=>{this.au=n,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(n);throw _n("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.uu=!1,n))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=vl.createAndSchedule(this,e,t,n,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class Vo extends Oo{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new Ev}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Sf(this),this._firestoreClient.terminate()}}function wv(r,e){const t=typeof r=="object"?r:gh(),n=typeof r=="string"?r:"(default)",i=$a(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=Sp("firestore");s&&yv(i,...s)}return i}function Rf(r){return r._firestoreClient||Sf(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function Sf(r){var e,t,n;const i=r._freezeSettings(),s=function(l,c,h,f){return new GE(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,If(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._firestoreClient=new hv(r._authCredentials,r._appCheckCredentials,r._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gr(at.fromBase64String(e))}catch(t){throw new H(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gr(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=/^__.*__$/;class vv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,t,this.fieldTransforms):new os(e,this.data,t,this.fieldTransforms)}}function Pf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Cl{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Cl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:n,yu:!1});return i.wu(e),i}Su(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:n,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return mo(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Pf(this.fu)&&Tv.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Iv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Do(e)}Fu(e,t,n,i=!1){return new Cl({fu:e,methodName:t,vu:n,path:Xe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Av(r){const e=r._freezeSettings(),t=Do(r._databaseId);return new Iv(r._databaseId,!!e.ignoreUndefinedProperties,t)}function bv(r,e,t,n,i,s={}){const a=r.Fu(s.merge||s.mergeFields?2:0,e,t,i);Nf("Data must be an object, but it was:",a,n);const l=Df(n,a);let c,h;if(s.merge)c=new Rt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const m=Rv(e,y,t);if(!a.contains(m))throw new H(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kv(f,m)||f.push(m)}c=new Rt(f),h=a.fieldTransforms.filter(y=>c.covers(y.field))}else c=null,h=a.fieldTransforms;return new vv(new _t(l),c,h)}function Cf(r,e){if(xf(r=Et(r)))return Nf("Unsupported field value:",e,r),Df(r,e);if(r instanceof kf)return function(n,i){if(!Pf(i.fu))throw i.Du(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const l of n){let c=Cf(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gw(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Le.fromDate(n);return{timestampValue:po(i.serializer,s)}}if(n instanceof Le){const s=new Le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:po(i.serializer,s)}}if(n instanceof Pl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gr)return{bytesValue:Yd(i.serializer,n._byteString)};if(n instanceof St){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pl(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Du(`Unsupported field value: ${Rl(n)}`)}(r,e)}function Df(r,e){const t={};return Ad(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(r,(n,i)=>{const s=Cf(i,e.pu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function xf(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Le||r instanceof Pl||r instanceof Gr||r instanceof St||r instanceof kf)}function Nf(r,e,t){if(!xf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=Rl(t);throw n==="an object"?e.Du(r+" a custom object"):e.Du(r+" "+n)}}function Rv(r,e,t){if((e=Et(e))instanceof kl)return e._internalPath;if(typeof e=="string")return Of(r,e);throw mo("Field path arguments must be of type string or ",r,!1,void 0,t)}const Sv=new RegExp("[~\\*/\\[\\]]");function Of(r,e,t){if(e.search(Sv)>=0)throw mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kl(...e.split("."))._internalPath}catch{throw mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function mo(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new H(O.INVALID_ARGUMENT,l+r+c)}function kv(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Pv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Pv extends Lf{data(){return super.data()}}function Vf(r,e){return typeof e=="string"?Of(r,e):e instanceof kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new H(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dv{convertValue(e,t="none"){switch(ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Jr(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertGeoPoint(e){return new Pl(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=al(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const t=Ln(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Se.fromString(e);Ie(nf(n));const i=new qi(n.get(1),n.get(3)),s=new W(n.popFirst(5));return i.isEqual(t)||_n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nv extends Lf{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Qs extends Nv{data(e={}){return super.data(e)}}class Ov{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Fs(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Qs(this._firestore,this._userDataWriter,n.key,n,new Fs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Qs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Fs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Qs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Fs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Lv(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lv(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class Vv extends Dv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}function Mv(r){r=Ki(r,Lo);const e=Ki(r.firestore,Vo),t=Rf(e),n=new Vv(e);return Cv(r._query),mv(t,r._query).then(i=>new Ov(e,n,r,i))}function Mf(r){return Ff(Ki(r.firestore,Vo),[new hl(r._key,Ht.none())])}function Fv(r,e){const t=Ki(r.firestore,Vo),n=Sl(r),i=xv(r.converter,e);return Ff(t,[bv(Av(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Ht.exists(!1))]).then(()=>n)}function Ff(r,e){return function(n,i){const s=new xn;return n.asyncQueue.enqueueAndForget(async()=>tv(await pv(n),i,s)),s.promise}(Rf(r),e)}(function(e,t=!0){(function(i){Xr=i})(Qr),Br(new nr("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),l=new Vo(new xE(n.getProvider("auth-internal")),new VE(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dn(cu,"4.6.3",e),Dn(cu,"4.6.3","esm2017")})();const Mo=vo(null),Uv=r=>{Mo.update(()=>wv(r))},ju=async r=>{const e=await Mv(bf(r,"news"));let t=[];return e.forEach(n=>{t.push({id:n.id,data:n.data()})}),t},Ma=vo(null);function Bv(r){let e,t,n,i,s,a,l,c,h,f,y,m,v,R,P,k,U,M,V,K,ee,Y,w,g,_,T,b;return{c(){e=B("div"),t=B("div"),n=B("p"),n.textContent="Titolo",i=q(),s=B("input"),a=q(),l=B("br"),c=q(),h=B("p"),h.textContent="Testo articolo",f=q(),y=B("textarea"),m=q(),v=B("div"),R=B("button"),R.textContent="Cancella",P=q(),k=B("button"),U=kt("Pubblica"),M=q(),V=B("div"),K=B("p"),K.textContent="Live View",ee=q(),Y=B("h1"),w=kt(r[0]),g=q(),_=B("div"),x(n,"class","text-lg font-bold"),x(s,"type","text"),x(s,"placeholder","Titolo"),x(s,"class","input input-border input-accent w-full mb-4"),x(h,"class","text-base font-bold"),x(y,"class","textarea textarea-bordere textarea-md h-1/2 w-full textarea-info mb-4"),x(y,"placeholder","Articolo"),x(y,"rows","10"),x(R,"class","btn btn-error"),x(k,"class","btn btn-success"),k.disabled=r[3],x(v,"class","flex justify-between"),x(t,"class","w-1/2"),x(K,"class","text-lg font-bold"),x(Y,"class","text-lg font-bold"),x(_,"class","prose"),x(V,"class","w-1/2 ml-4"),x(e,"class","flex h-screen p-4")},m(I,E){ve(I,e,E),D(e,t),D(t,n),D(t,i),D(t,s),yt(s,r[0]),D(t,a),D(t,l),D(t,c),D(t,h),D(t,f),D(t,y),yt(y,r[1]),D(t,m),D(t,v),D(v,R),D(v,P),D(v,k),D(k,U),D(e,M),D(e,V),D(V,K),D(V,ee),D(V,Y),D(Y,w),D(V,g),D(V,_),_.innerHTML=r[2],T||(b=[Be(s,"input",r[6]),Be(y,"input",r[7]),Be(R,"click",r[8]),Be(k,"click",r[5])],T=!0)},p(I,[E]){E&1&&s.value!==I[0]&&yt(s,I[0]),E&2&&yt(y,I[1]),E&8&&(k.disabled=I[3]),E&1&&Kr(w,I[0]),E&4&&(_.innerHTML=I[2])},i:de,o:de,d(I){I&&Te(e),T=!1,Qt(b)}}}function $v(r,e,t){let n,i,s,a,l;pn(r,Ma,R=>t(4,s=R)),pn(r,Mo,R=>t(9,a=R)),pn(r,or,R=>t(10,l=R));let{title:c=""}=e,{text:h=""}=e;s!=null?(c=s.title,h=s.title):c=h="";const f=async()=>{const R={author_uid:l.user.uid,date:Le.now(),title:c,text:n};s!=null&&await Mf(Sl(a,"news",s.id)).catch(P=>console.log(P)),await Fv(bf(a,"news"),R).catch(P=>{console.log(P)}),t(0,c=t(1,h="")),cp(Ma,s=null,s)};function y(){c=this.value,t(0,c)}function m(){h=this.value,t(1,h)}const v=()=>{t(0,c=t(1,h="")),s.update(()=>null)};return r.$$set=R=>{"title"in R&&t(0,c=R.title),"text"in R&&t(1,h=R.text)},r.$$.update=()=>{r.$$.dirty&2&&t(2,n=Ky.sanitize(ge.parse(h))),r.$$.dirty&3&&t(3,i=h==""||c=="")},[c,h,n,i,s,f,y,m,v]}class zv extends Xt{constructor(e){super(),Yt(this,e,$v,Bv,Ct,{title:0,text:1})}}function qu(r,e,t){const n=r.slice();return n[5]=e[t],n}function jv(r){let e,t,n,i=r[1].data.text+"",s,a;return{c(){e=B("button"),e.textContent="Back to News",t=q(),n=B("div"),x(e,"class","btn"),x(n,"class","prose mx-4")},m(l,c){ve(l,e,c),ve(l,t,c),ve(l,n,c),n.innerHTML=i,s||(a=Be(e,"click",r[4]),s=!0)},p(l,c){c&2&&i!==(i=l[1].data.text+"")&&(n.innerHTML=i)},d(l){l&&(Te(e),Te(t),Te(n)),s=!1,a()}}}function qv(r){let e,t=[],n=new Map,i=Ys(r[0]);const s=a=>a[5].id;for(let a=0;a<i.length;a+=1){let l=qu(r,i,a),c=s(l);n.set(c,t[a]=Hu(c,l))}return{c(){e=B("div");for(let a=0;a<t.length;a+=1)t[a].c();x(e,"class","flex flex-col")},m(a,l){ve(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p(a,l){l&3&&(i=Ys(a[0]),t=sh(t,l,s,1,a,i,n,e,ih,Hu,null,qu))},d(a){a&&Te(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Hu(r,e){let t,n=e[5].data.title+"",i,s,a,l;function c(){return e[3](e[5])}return{key:r,first:null,c(){t=B("button"),i=kt(n),s=q(),x(t,"class","btn btn-outline btn-info text-right text-lg text-white mt-2 mx-4 justify-start font-bold"),this.first=t},m(h,f){ve(h,t,f),D(t,i),D(t,s),a||(l=Be(t,"click",c),a=!0)},p(h,f){e=h,f&1&&n!==(n=e[5].data.title+"")&&Kr(i,n)},d(h){h&&Te(t),a=!1,l()}}}function Hv(r){let e;function t(s,a){return s[2]=="newsList"?qv:jv}let n=t(r),i=n(r);return{c(){i.c(),e=Fa()},m(s,a){i.m(s,a),ve(s,e,a)},p(s,[a]){n===(n=t(s))&&i?i.p(s,a):(i.d(1),i=n(s),i&&(i.c(),i.m(e.parentNode,e)))},i:de,o:de,d(s){s&&Te(e),i.d(s)}}}function Wv(r,e,t){let n,{news:i=null}=e,s="newsList";const a=c=>t(1,s=c),l=()=>t(1,s="newsList");return r.$$set=c=>{"news"in c&&t(0,i=c.news)},r.$$.update=()=>{r.$$.dirty&2&&t(2,n=s)},[i,s,n,a,l]}class Dl extends Xt{constructor(e){super(),Yt(this,e,Wv,Hv,Ct,{news:0})}}function Wu(r,e,t){const n=r.slice();return n[9]=e[t],n}function Gu(r,e){let t,n,i,s,a,l,c,h,f,y;function m(){return e[4](e[9])}function v(){return e[5](e[9])}return{key:r,first:null,c(){t=B("div"),n=B("p"),n.textContent=`${e[9].data.title}`,i=q(),s=B("div"),a=B("button"),a.textContent="Modify",l=q(),c=B("button"),c.textContent="Elimina",h=q(),x(n,"class","text-lg font-bold flex-start"),x(a,"class","btn btn-success mx-4"),x(c,"class","btn btn-error "),x(s,"class","mx-4 mt-2"),x(t,"class","flex justify-between"),this.first=t},m(R,P){ve(R,t,P),D(t,n),D(t,i),D(t,s),D(s,a),D(s,l),D(s,c),D(t,h),f||(y=[Be(a,"click",m),Be(c,"click",v)],f=!0)},p(R,P){e=R},d(R){R&&Te(t),f=!1,Qt(y)}}}function Gv(r){let e,t=[],n=new Map,i=Ys(r[0]);const s=a=>a[9].id;for(let a=0;a<i.length;a+=1){let l=Wu(r,i,a),c=s(l);n.set(c,t[a]=Gu(c,l))}return{c(){e=B("div");for(let a=0;a<t.length;a+=1)t[a].c();x(e,"class","flex flex-col ")},m(a,l){ve(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p(a,[l]){l&7&&(i=Ys(a[0]),t=sh(t,l,s,1,a,i,n,e,ih,Gu,null,Wu))},i:de,o:de,d(a){a&&Te(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Kv(r,e,t){let n,i;pn(r,Mo,m=>t(6,n=m)),pn(r,or,m=>t(7,i=m));let{news:s}=e,l=(()=>{let m=[];return s.forEach(v=>{v.data.author_uid===i.user.uid&&m.push(v)}),m})(),c=m=>{let v={id:m.id,title:m.data.title,text:m.data.text};Ma.update(()=>v),ts.update(()=>"pagePubblica")},h=async m=>{await Mf(Sl(n,"news",m.id)).catch(R=>console.log(R));const v=s.indexOf(m);v>-1&&s.splice(v,1),t(3,s=[...s])};const f=m=>c(m),y=m=>h(m);return r.$$set=m=>{"news"in m&&t(3,s=m.news)},[l,c,h,s,f,y]}class Qv extends Xt{constructor(e){super(),Yt(this,e,Kv,Gv,Ct,{news:3})}}const Yv="/assets/albero-B33tgkX7.webp",Xv="/assets/tecnologia-DCBUOubN.webp",Jv="/assets/esplorazione-BsLaPbeu.webp",Zv="/assets/occhiovunque-C_PzuFIq.webp",e0="data:image/webp;base64,UklGRqYNAABXRUJQVlA4WAoAAAAIAAAAywAA7gAAVlA4IMYMAACQYgCdASrMAO8APm00lkgkIqIlo/FbCLANiWdprsgQXJ+/3F9bMW82/y///19f+EH5vwM8nqvzz/pQ7Z0T4/Bz7sPlO78Tf7N/GIse2fxGMU/4qDZWauUwb38bVOFvU+RxoO9AU9Gr8khxwP6Aef8pR+Xg631TtZarKX1Zf/JlsqNYsWRD3RlrpJjR4lDvVgge424YPF567zddXQwT4N13E/iLN1AFlAFi6vH14+JXGtjS2+sgKQaMi8DMF0ALQ5PwpJUBdoPJKZzPrpMs8QFlnIsmhibfFx/AZRojK4GzzIt5gEGfunqdEim1AxJK5JNRP+2z2ZhDAAu1/xvWPLPB8DtrVEFlwfjrPfY5kzEMCeiZft5AW9EsqXM49l6zc9g1o/TkGmisJWu/Pv2pAGEgnhaw8SQ69HAKQR9eRmKWSnWR5MGnbmFOF9JSrmiWEdZ7pTVOAIzTyhDHuxJHLHBg2reQtcNspi1mRG/k6+X7T7mb863NAhpHmSimf48rDIcCeMLXzr+2eEd2NtFiIL3DL6Kdydm3BVPub/crD98MvF6eZerUjsGtvVgLis7SmSAq7MjOVAn8toBKSRsYWDDky+Z7hxfuTYR8fPia01D8WPvxT4EiB/HbKGdR1PxyxO0OaEopV6ZBWRtE2Oz96yj/GG2p82n1ow9BGNNiw3DaoOnSASElHPc53sOj6cbZqkuIrG09aLTfHkaoiFOP/HYsKr+GWH9y26u/d1FUMr3YRQ+iI5N/1uNTIV2AydEuklxT7lXEH3qdu13ajohNfbKtpQS/qkc4A3D5cSjqLQW45SafVsMVYq82KTHW2ts5LygAD/4drS/kfagLK2zLp73shuPe7pVbAWMSs6n3tOlSjIYqcUmIsQRW/ikRaD1jU2n/xLKJEdtLGQeqzBbL/oHozEwTiRBFBvdgvKbHHBjk1sra2+ezcK2XN02KXHxWaCGJLw9aOdm5M+RwktVhiVq0wmrWwMecvVu1zKiGkzH0P+H/ooE6lSdzUl5Nt4TSB5u7UIUvEuwwMTOEXEfxX/x0dxd5GFUl9DO6xWBKgAD+6nqMNtbzSr2dg05sdo7xvyTWVO1SsgqfgvicaN4QMkcjDAi+K8eMtyAvdJ0idvqgAv4ssAMD9FljZLKFARoNy1huNEdYZacSsE5FurDoFMznCQuIK+vsFoSZRxYql6IPoieY2r8dxwB81m/j+TGAG9iVE3q+H8vZkBpoVpbigGBPwnes+b4dLYvEWubL3AYQcJXQ44FZAOXtsv/HmnaMFN2Bu8acSsEyKew9ncmCM2c8zIWYO6uepABB8KhgK7FAqoVHccAvpVqIin/4oKvoFWevfSZK9orsRgQWI2Obw2VqRT9vz0XgEvU+7cUNg8XfgpHXmz88kFu2w45jyiFvy4H2UN+FO7Z/DlBpi1yh8g07nu1NbKpCh5GoyxT5bcmsvdq/rVSjVdw2nysJCwVlrzWSHm4J+OE52o8SQWihoXSnY4OP/pdSvbSEpUrvcQCgKA0FUycIjDFc9jOzYZzAotBBe1feEsjdtTHNmcirE27vZTP34Bj91fsvFYmBY69FxaHP9TyAcc4bWfTNJQnoKP4/ugjHFOq4LWzgfrKQARYDheGvFq3obVuA9xiQudqzx16j31rDlpW68KOwRiHdN8pPdwYlHppJKOAFMqTbI2XUrvm+wSJ2rtQtG7Z4zO2ohmcc4OGCx08IqALLU/ofWL4KlhoqAb3CgMGRMwg9J90XySN72VErsIw9KkhzZeW5sd2pzyVdAgJuYVSA2TE5MJLe3Ghb7mp9sQQs7/zhBEzMTYXN/xMT4essoO9/ZbAqj9GVflFPhWwRnG+IAupVkUvLdSHQJuz6epnQ9cVcU24yQMiE6qlraafnb04z90i742nDx0OAXzPo6LOz9wry1KkG8poxAfJ5piFwyWogQwcDh/OQO2d3+lGUacSMCzQah4jCCFKlipokO63a+mSrPl0c13bNH6jhweMvjcwWxg67ZjzqwdrwfLlyRzfftdDovvpsTc6sBCRO5u5UOdGAk/o9aRmTAXoOpsMJMyglNpQzSEDz7Mes2dGR+QlXtVv/28cfULg+abp2TNsNkH87iZCB1aI0FlpiZ9ughxKFZBImXkbYnxbkYjLIe4XJMcHu5vQOkoDDM5l0boEK9/93xNqSQckRGK3BJO/LixrnClkbGeEwnLof6S+ui4MIkvdm2I5zxa3nhNDmSBywP5nTviHCSWl0e5pNkpUsie7rGgCd6SF0BD7HbmNOSpklBDXU1AiFQKLziHiWn21tXix+m+Sez1QFkpzlTx7phqWIjGXbPDRf76BaFGfLMLrteoggiNifsSyJia7HQUQ6KoZuCdhT1l2KkOLgcI9BbsnU82zYMrbXNKEJVbgbpNU+XcQbdIYfbnm2YRKimHUKydlj4TvnKZZOK56LE5azyJnnvqFJnBs2711g4fRXa2e93IabMBXFkyBOFiDyklXLvZMmMOEZC9AT/hb92+QHicXZvMEYbCjDppalAGfg1rQ1VziLKYdG5MlvbajexetMfsEi+tjDX8I5v2arqyk8fuiI+6NsM+NRhs23hUbn8JoEV/C9QBUqm8ep8WbWDMGeYzKBvLeZMhqVlxT+vfMqti7HVQdmDtgY6ctWwSIlukEyyhXoauTZTTqahS6M9wQ8DEHEs3C4RPQOb0SgN1UPq2aZXNItBExvIsj4dz4krjIE0L6lzO1RUtly/S9q9DlQMruAJDtXUuxLJnzAQATEqK3IIVi3XH6Z9WGAh0amB7hFYT7wcdGUnYY485Qj2ETVU4uuhh2sDcDlMNLLrnz4nX6tr++gIlvJ/uzGipU6wRwZP4i5k7bX9UzZF74a4iXKJXtPCqbGbIenHQeoNS7L37ZAQECsEM+5W8LxaJXzmriEMS+NJP/gPz6R26yJBRFyXKrTOWmo1M6T7Ahb42ZUxdQisz34Xna9rPCrLd/G797j7SKh/VAP1nZfFWggU1cP3pdzRsei+vXj1gDNmL6rx6NKo/4ySHkkP2NYFooqPAabfBskBJ0zohEY+2UVeF+n3Yc7Sb67iHxYqAmhPWUqqLaIPWrnwA0upT701XI4rKPh8qhaSjctJB39pAKYrLmyRgnVOlwV9JHa6qlPyF+roRVoUey9nb5KtIMhgDgs57vnvjJo6ZnVApHStnEafxivdPLXAoXKDb1xkPC/o0XN6qmEW5Jdp2iZJlZhBo42tGey89IUf9Ap8Z23zWwwbkCE0CGx2OvYkuFdqqKrtWm8QP3hsxlFIc3Kkgp9mEvw4733Iz1x6ccAuPNuloQffDdRI0vJE/a+Q46iH47iby4sjQMQ9co+C/ex1zBJv2J48yH10rGAnxAi/cCnQ8SMJxt/mCEzKS4nBowDkZpb4hKOiux9VOEGx/045I/tm1RU5xHYyMyf4U/BAWEZiltEGCxHLqX8JgbIAsjp3hPaD18LxK3xD1sy81/i+F8NmVwgdyOMDfqZDj3fEeyVZ6rZKUS2RKhV1zTb+aUUS1Q+XH/k2ibU7h1haAI3XVRntg+fYfrAd/DXM4p5mt2Laq5D7drc228Gpy0GnCPpR9n8eO/rzWbvMzwU8E+ameNC7Z3YKH+Je06r9RXdIzgZ6eCkqLHtZepvRw6L519LpiLV3atvLWSQgsVAfVn/e+JrtXCvMo4qWyDC13UAobEmefZi3jFy48pBErmNAqEBX2/PHvwZQVxUj6Y5/jORapnPzk3OgfJY5DFowtJwBD3+MbQhjpsKyJ9/rQf/k8yXr4Zb2OU4Zaakevxo+Zv5Q27PXl1RWU7BuRSxS5h27Q5e/w2BtDXZszsP7H9/wLgWeLmfRC376COKbqX8Krjb0s57K1+3oJ3RvAaEzjzBwHXaKqLHCCanweaQu7ywxzcjAiseR0Zj3pyrI4imt7kFo3FdbkVfOJfiGASZPST6FoUY2zQMq87BZnTdVDrbayrqgE2kaKsSQbJgaE+ql0x9e1BHgTL+M3sSd/NYKbLfEcgfBIFJJoWpVAs2TU2dAuA8EVBL1LvyhvlAd6UWDqMZ0Hx15kH8mI5WfFaID+0FLfprYGeTGJRHdphRuS1PcyfCdvUwc3hnxWMCDZkYFrL98C0nN3lq0JdIVdxAfYgEo1QUkpev4QcKudUGZRSDeYZVf5Gi6PV96GzVTypcHmSo34Y/Ha0dY3U4+Tn1t7LNTAKsjw11Qy9YPPd3W4xc4HVb5if8K5ICtmF30BhbKgBo6gHJcirxcVFIUNawKKHSVTK8Ac+v8o3Ng/RY74faFwghJb1M+EBf7J3zCbdy43cMJLG/JMmgNG/E1w0Vg/H/iN8rAmrzd2cTsjFTv0yhDtHsuABFWElGugAAAEV4aWYAAElJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAGYAAAAAAAAASAAAAAEAAABIAAAAAQAAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAADMAAAAA6AEAAEAAADvAAAAAAAAAA==",t0="/assets/libro-4wk3q1KG.webp";function n0(r){let e,t,n;return{c(){e=B("p"),e.textContent="Come Lavoriamo",t=q(),n=B("div"),n.innerHTML=`<div class="flex mb-10 justify-between"><div class="card bg-base-100 w-64 ml-20"><img src="${Yv}" alt=""/> <p>Cerchiamo la verità ovunque, anche nei posti più impensabili</p></div> <div class="card bg-base-100 w-64"><img src="${Xv}" alt="" width="192" height="192"/> <p>Utilizziamo le tecnologie più moderne per le nostre ricerche</p></div> <div class="card bg-base-100 w-64 mr-20"><img src="${Jv}" alt="" width="192" height="192"/> <p>Mandiamo sempre i nostri inviati ad investigare direttamente sul posto</p></div></div> <div class="flex justify-between"><div class="card bg-base-100 w-64 ml-20"><img src="${Zv}" alt="" width="192" height="192"/> <p>Abbiamo occhi e orecchie ovunque per cogliere ogni informazione.</p></div> <div class="card bg-base-100 w-64"><img src="${e0}" alt="" width="192" height="192"/> <p>Siamo costantemente pronti all&#39;azione, anche se questo dovesse comportare l&#39;uscire in ciabatte a metà dicembre</p></div> <div class="card bg-base-100 w-64 mr-20"><img src="${t0}" alt="" width="192" height="192"/> <p>Leggiamo spesso le opere del passato per capire come siamo arrivati al presente</p></div></div>`,x(e,"class","text-3xl font-bold text-center"),x(n,"class","flex flex-col ")},m(i,s){ve(i,e,s),ve(i,t,s),ve(i,n,s)},p:de,i:de,o:de,d(i){i&&(Te(e),Te(t),Te(n))}}}class r0 extends Xt{constructor(e){super(),Yt(this,e,null,n0,Ct,{})}}function Ku(r){let e,t;return e=new Ay({props:{auth:r[3]}}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},p:de,i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function Qu(r){let e,t;return e=new Dl({props:{news:r[0]}}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.news=n[0]),e.$set(s)},i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function Yu(r){let e,t,n,i;const s=[s0,i0],a=[];function l(c,h){return c[2]==null?0:1}return e=l(r),t=a[e]=s[e](r),{c(){t.c(),n=Fa()},m(c,h){a[e].m(c,h),ve(c,n,h),i=!0},p(c,h){let f=e;e=l(c),e===f?a[e].p(c,h):(cn(),ae(a[f],1,1,()=>{a[f]=null}),un(),t=a[e],t?t.p(c,h):(t=a[e]=s[e](c),t.c()),Z(t,1),t.m(n.parentNode,n))},i(c){i||(Z(t),i=!0)},o(c){ae(t),i=!1},d(c){c&&Te(n),a[e].d(c)}}}function i0(r){let e,t;return e=new Qv({props:{news:r[0]}}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.news=n[0]),e.$set(s)},i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function s0(r){let e,t;return e=new Dl({props:{news:r[0]}}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.news=n[0]),e.$set(s)},i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function Xu(r){let e,t;return e=new r0({}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function Ju(r){let e,t;return e=new ky({props:{auth:r[3]}}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},p:de,i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function Zu(r){let e,t,n,i;const s=[a0,o0],a=[];function l(c,h){return c[2]==null?0:1}return e=l(r),t=a[e]=s[e](r),{c(){t.c(),n=Fa()},m(c,h){a[e].m(c,h),ve(c,n,h),i=!0},p(c,h){let f=e;e=l(c),e===f?a[e].p(c,h):(cn(),ae(a[f],1,1,()=>{a[f]=null}),un(),t=a[e],t?t.p(c,h):(t=a[e]=s[e](c),t.c()),Z(t,1),t.m(n.parentNode,n))},i(c){i||(Z(t),i=!0)},o(c){ae(t),i=!1},d(c){c&&Te(n),a[e].d(c)}}}function o0(r){let e,t;return e=new zv({}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},p:de,i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function a0(r){let e,t;return e=new Dl({props:{news:r[0]}}),{c(){ot(e.$$.fragment)},m(n,i){Qe(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.news=n[0]),e.$set(s)},i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function l0(r){let e,t,n,i,s,a,l,c,h,f,y;t=new yy({});let m=r[1]=="pageLogin"&&Ku(r),v=r[1]=="pageNews"&&Qu(r),R=r[1]=="pageMyNews"&&Yu(r),P=r[1]=="pageComeLavoriamo"&&Xu(),k=r[1]=="pageRegister"&&Ju(r),U=r[1]=="pagePubblica"&&Zu(r);return f=new wy({}),{c(){e=B("main"),ot(t.$$.fragment),n=q(),m&&m.c(),i=q(),v&&v.c(),s=q(),R&&R.c(),a=q(),P&&P.c(),l=q(),k&&k.c(),c=q(),U&&U.c(),h=q(),ot(f.$$.fragment)},m(M,V){ve(M,e,V),Qe(t,e,null),D(e,n),m&&m.m(e,null),D(e,i),v&&v.m(e,null),D(e,s),R&&R.m(e,null),D(e,a),P&&P.m(e,null),D(e,l),k&&k.m(e,null),D(e,c),U&&U.m(e,null),D(e,h),Qe(f,e,null),y=!0},p(M,[V]){M[1]=="pageLogin"?m?(m.p(M,V),V&2&&Z(m,1)):(m=Ku(M),m.c(),Z(m,1),m.m(e,i)):m&&(cn(),ae(m,1,1,()=>{m=null}),un()),M[1]=="pageNews"?v?(v.p(M,V),V&2&&Z(v,1)):(v=Qu(M),v.c(),Z(v,1),v.m(e,s)):v&&(cn(),ae(v,1,1,()=>{v=null}),un()),M[1]=="pageMyNews"?R?(R.p(M,V),V&2&&Z(R,1)):(R=Yu(M),R.c(),Z(R,1),R.m(e,a)):R&&(cn(),ae(R,1,1,()=>{R=null}),un()),M[1]=="pageComeLavoriamo"?P?V&2&&Z(P,1):(P=Xu(),P.c(),Z(P,1),P.m(e,l)):P&&(cn(),ae(P,1,1,()=>{P=null}),un()),M[1]=="pageRegister"?k?(k.p(M,V),V&2&&Z(k,1)):(k=Ju(M),k.c(),Z(k,1),k.m(e,c)):k&&(cn(),ae(k,1,1,()=>{k=null}),un()),M[1]=="pagePubblica"?U?(U.p(M,V),V&2&&Z(U,1)):(U=Zu(M),U.c(),Z(U,1),U.m(e,h)):U&&(cn(),ae(U,1,1,()=>{U=null}),un())},i(M){y||(Z(t.$$.fragment,M),Z(m),Z(v),Z(R),Z(P),Z(k),Z(U),Z(f.$$.fragment,M),y=!0)},o(M){ae(t.$$.fragment,M),ae(m),ae(v),ae(R),ae(P),ae(k),ae(U),ae(f.$$.fragment,M),y=!1},d(M){M&&Te(e),Ye(t),m&&m.d(),v&&v.d(),R&&R.d(),P&&P.d(),k&&k.d(),U&&U.d(),Ye(f)}}}function c0(r,e,t){let n,i,s;pn(r,Mo,m=>t(4,n=m)),pn(r,ts,m=>t(1,i=m)),pn(r,or,m=>t(2,s=m));const l=ph({apiKey:"AIzaSyA5aeP-yy8s80OMxbpZKCsJgjlCbKfuzbU",authDomain:"occhiodiluce-1418a.firebaseapp.com",projectId:"occhiodiluce-1418a",storageBucket:"occhiodiluce-1418a.appspot.com",messagingSenderId:"620714237789",appId:"1:620714237789:web:f706bc98e918332136d2b4",measurementId:"G-3S3JP0WNW9"}),c=uy(l),h=m=>{"Notification"in window&&Notification.requestPermission().then(v=>{v==="granted"&&new Notification("Occhio di Luce",{lang:"it",body:m,icon:Xh})})};let f=(m,v)=>{let R=[],P=!1;for(let k of m){P=!1;for(let U of v)if(k.id===U.id){P=!0;break}P||R.push(k)}return R},y=[];return dp(async()=>{Uv(l);let m=await ju(n),v=m.slice();t(0,y=m);let R=!1;setInterval(async()=>{if(R){m=await ju(n);let P=f(m,v);P.length>0&&h(`Sono presenti ${P.length} nuove News`),v=m,t(0,y=m)}else R=!0},3e4)}),[y,i,s,c]}class u0 extends Xt{constructor(e){super(),Yt(this,e,c0,l0,Ct,{})}}new u0({target:document.getElementById("app")});
