"use strict";var precacheConfig=[["/10a/index.html","2d14af01c78a434bbb067fa76a9e15cc"],["/10b/index.html","68ee3d51b957cffa1be5db5c5ab0e3cf"],["/1a/index.html","d38240a82d9561abc0562a7b0e63bf1d"],["/1b/index.html","aa4cb1a99133195b937826db97c31306"],["/2a/index.html","760c4dae8663797c23ee619d9ae1c4f7"],["/2b/index.html","84b9881a707028f456647707213b6b75"],["/3a/index.html","0b62a874d812976b7ed1f0e93af98e2c"],["/3b/index.html","9845be9091833143f9301a3dfbccf4d0"],["/4a/index.html","0f28432fc1654f349d8af65fff664645"],["/4b/index.html","85d8c1f53912337e38c6885145fda65a"],["/5a/index.html","03cc74634eda0652b34784d6e29198df"],["/5b/index.html","002f7b9f0f17ac7a6fb95323ca8ebd7b"],["/6a/index.html","bc4e09e146d9a56fbb9f2bebe53ce10f"],["/6b/index.html","ccb3949a35922ba3f2b32ede526f6f82"],["/7a/index.html","a091dd75c7eb63b1c2f4ec5634ba7f19"],["/7b/index.html","541e84c646b2d92009c1075abca861d6"],["/8a/index.html","5e35ce5cf66dc7203fff9d291e9760ee"],["/8b/index.html","8bdd3d424fbd5d862de2199ad9003763"],["/9a/index.html","bdca99bae0afcc1b07acd32b1a43107f"],["/9b/index.html","91b9806e6243c8dc090a1e75153784da"],["/apple-touch-icon.png","1ebe4e4557b89a415e6f58aa077059e7"],["/assets/img/footer.png","a8bf6dc41ad297d6dd4347ec3b7c814f"],["/assets/themes/curtana/js/lightense.min.7d0fbd9b.js","7d0fbd9bafa4be89dc1d418ad2f9c923"],["/error/index.html","737a73e0cbb0b16a2f505d55d2e526c1"],["/favicon.png","1ebe4e4557b89a415e6f58aa077059e7"],["/mask-icon.svg","bb371909052ec5228c084440ee6cd9aa"]],cacheName="sw-precache-v3-learningsicp.com-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),n=urlsToCacheKeys.has(t));0,n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return fetch(e.request)}))}});