(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Markazi Text", serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    font-size: 22px;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    padding: 30px;\n    background-color: rgba(239, 207, 227);\n    margin-bottom: 55px;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 18px;\n    padding: 16px 40px;\n    border-radius: 10px;\n    background-color: rgba(190, 86, 131, 0.5);\n}\n\nheader>nav>* {\n    background: none;\n    border: none;\n    height: 35px;\n    width: 100px;\n    font-size: 22px;\n    font-weight: 600;\n    color: rgba(255, 255, 255);\n}\n\nbutton:hover {\n    cursor: pointer;\n    color: rgba(110, 48, 75);\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    color: rgba(110, 48, 75);\n}\n\n#content>* {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n    padding: 45px 65px;\n    border-radius: 10px;\n    background-color: rgba(206, 195, 200);\n}\n\n#home {\n    width: 700px;\n    margin-bottom: 30px;\n\n    p {\n        font-style: italic;\n    }\n\n    #homepic {\n        width: 80%;\n        border-radius: 5px;\n    }\n}\n\n.menu-items {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n\n    ul>* {\n        margin-bottom: 10px;\n    }\n}\n\n#about {\n    width: 700px;\n}\n\nh1,\nh3 {\n    font-family: "Pattaya", serif;\n    font-weight: 400;\n    font-style: normal;\n}',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kCAAkC;IAClC,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,mBAAmB;;IAEnB;QACI,kBAAkB;IACtB;;IAEA;QACI,UAAU;QACV,kBAAkB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,6BAA6B;IAC7B,gBAAgB;IAChB,kBAAkB;AACtB",sourcesContent:['* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Markazi Text", serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    font-size: 22px;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    padding: 30px;\n    background-color: rgba(239, 207, 227);\n    margin-bottom: 55px;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 18px;\n    padding: 16px 40px;\n    border-radius: 10px;\n    background-color: rgba(190, 86, 131, 0.5);\n}\n\nheader>nav>* {\n    background: none;\n    border: none;\n    height: 35px;\n    width: 100px;\n    font-size: 22px;\n    font-weight: 600;\n    color: rgba(255, 255, 255);\n}\n\nbutton:hover {\n    cursor: pointer;\n    color: rgba(110, 48, 75);\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    color: rgba(110, 48, 75);\n}\n\n#content>* {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n    padding: 45px 65px;\n    border-radius: 10px;\n    background-color: rgba(206, 195, 200);\n}\n\n#home {\n    width: 700px;\n    margin-bottom: 30px;\n\n    p {\n        font-style: italic;\n    }\n\n    #homepic {\n        width: 80%;\n        border-radius: 5px;\n    }\n}\n\n.menu-items {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n\n    ul>* {\n        margin-bottom: 10px;\n    }\n}\n\n#about {\n    width: 700px;\n}\n\nh1,\nh3 {\n    font-family: "Pattaya", serif;\n    font-weight: 400;\n    font-style: normal;\n}'],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var A=n[c],s=r.base?A[0]+r.base:A[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),d={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var f=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var A=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=A}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),A=t.n(c),s=t(56),l=t.n(s),u=t(540),p=t.n(u),d=t(113),f=t.n(d),m=t(208),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=A().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(m.A,h),m.A&&m.A.locals&&m.A.locals;const g=t.p+"39478f89030701f3c751.jpg",C=function(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="home",e.innerHTML='<h1>Welcome to Rise n Shine Bakery</h1>\n       <p class="intro">Celebrate life\'s sweetest moments with \n       our handcrafted bakes.</p>';const t=document.createElement("img");t.id="homepic",t.src=g,t.alt="Our bakery items",e.appendChild(t),n.appendChild(e)},b=function(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="menu",e.innerHTML='<h1>Menu</h1>\n          <div class="menu-items">\n        <ul>\n            <h3>Slice Cakes</h3>\n            <li>Chocolate salted caramel cake</li>\n            <li>Blackforest cake</li>\n            <li>Hazelnut brownie</li>\n            <li>Blueberry cheesecake</li>\n            <li>Vanilla cake</li>\n        </ul>\n        <ul>\n            <h3>Bakery</h3>\n            <li>Croissant</li>\n            <li>Almond croissant</li>\n            <li>Cinnamon roll</li>\n            <li>Honey toast</li>\n        </ul>\n    </div>',n.appendChild(e)},B=function(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="about",e.innerHTML="<h1>About</h1>\n       <div class=\"about\">At Rise n Shine Bakery, we create fresh, \n       handcrafted pastries and breads with the finest local \n       ingredients. From buttery croissants to rich cakes, \n       each item is made with care and passion. \n       Whether you're stopping by for a daily treat or a \n       special celebration, we're here to bring a little \n       sweetness to your day.</div>",n.appendChild(e)};!function(){const n=document.querySelector("#content"),e={hometab:C,menutab:b,abouttab:B};C(),Object.keys(e).forEach((t=>{document.getElementById(t).addEventListener("click",(()=>{n.textContent="",e[t]()}))}))}()})();
//# sourceMappingURL=main.bundle.js.map