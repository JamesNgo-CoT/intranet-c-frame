!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e(require("react")):"function"===typeof define&&define.amd?define(["react"],e):"object"===typeof exports?exports.ReactLibrary=e(require("react")):t.ReactLibrary=e(t.React)}(self,(t=>(()=>{"use strict";var e={815:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(81),o=r.n(n),u=r(645),c=r.n(u)()(o());c.push([t.id,".intranet-c-frame-breadcrumb{background-color:#e5e5e5;color:#000}.intranet-c-frame-breadcrumb a{color:#2b5a83;font-weight:500;text-decoration:none}.intranet-c-frame-breadcrumb a:hover{color:#0d1b28}.intranet-c-frame-breadcrumb a svg{margin-top:-4px}",""]);const a=c},711:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(81),o=r.n(n),u=r(645),c=r.n(u)()(o());c.push([t.id,".intranet-c-frame-footer{background-color:#006159;color:#fff}",""]);const a=c},941:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(81),o=r.n(n),u=r(645),c=r.n(u)()(o());c.push([t.id,".intranet-c-frame-header{background-color:#006159;color:#fff}",""]);const a=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n="undefined"!==typeof e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,u){"string"===typeof t&&(t=[[null,t,void 0]]);var c={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(c[i]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);n&&c[f[0]]||("undefined"!==typeof u&&("undefined"===typeof f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=u),r&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=r):f[2]=r),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var u={},c=[],a=0;a<t.length;a++){var i=t[a],s=n.base?i[0]+n.base:i[0],f=u[s]||0,l="".concat(s," ").concat(f);u[s]=f+1;var y=r(l),d={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==y)e[y].references++,e[y].updater(d);else{var p=o(d,n);n.byIndex=a,e.splice(a,0,{identifier:l,updater:p,references:1})}c.push(l)}return c}function o(t,e){var r=e.domAPI(e);r.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var u=n(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<u.length;c++){var a=r(u[c]);e[a].references--}for(var i=n(t,o),s=0;s<u.length;s++){var f=r(u[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}u=i}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if("undefined"===typeof e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o="undefined"!==typeof r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var u=r.sourceMap;u&&"undefined"!==typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},359:e=>{e.exports=t}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var u=r[t]={id:t,exports:{}};return e[t](u,u.exports,n),u.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{var t;function e(e,r,n,o){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,c=arguments.length-3;if(r||0===c||(r={children:void 0}),1===c)r.children=o;else if(c>1){for(var a=new Array(c),i=0;i<c;i++)a[i]=arguments[i+3];r.children=a}if(r&&u)for(var s in u)void 0===r[s]&&(r[s]=u[s]);else r||(r=u||{});return{$$typeof:t,type:e,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){if(e&&("object"===s(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}n.r(o),n.d(o,{default:()=>H});var y=n(359),d=n.n(y),p=n(379),j=n.n(p),M=n(795),L=n.n(M),v=n(569),m=n.n(v),N=n(565),g=n.n(N),h=n(216),b=n.n(h),I=n(589),S=n.n(I),A=n(941),D={};D.styleTagTransform=S(),D.setAttributes=g(),D.insert=m().bind(null,"head"),D.domAPI=L(),D.insertStyleElement=b();j()(A.Z,D);A.Z&&A.Z.locals&&A.Z.locals;var C=n(815),x={};x.styleTagTransform=S(),x.setAttributes=g(),x.insert=m().bind(null,"head"),x.domAPI=L(),x.insertStyleElement=b();j()(C.Z,x);C.Z&&C.Z.locals&&C.Z.locals;var z;function O(){return O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},O.apply(this,arguments)}const w=function(t){return y.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"house-door-fill_svg__bi house-door-fill_svg__bi-house-door-fill"},t),z||(z=y.createElement("path",{d:"M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"})))};var E;function T(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var Y,R=function(t){i(o,t);var n=T(o);function o(){return r(this,o),n.apply(this,arguments)}return c(o,[{key:"render",value:function(){var t=this.props,r=t.text,n=t.link;return t.islast?e("li",{className:"breadcrumb-item active","aria-current":"page"},void 0,r):e("li",{className:"breadcrumb-item"},void 0,n?e("a",{href:n},void 0,r):r)}}]),o}(d().Component),Q=function(t){i(o,t);var n=T(o);function o(){return r(this,o),n.apply(this,arguments)}return c(o,[{key:"render",value:function(){var t=this.props.crumbs,r=void 0===t?[]:t;return e("div",{className:"intranet-c-frame-breadcrumb container-fluid py-3 px-4"},void 0,e("nav",{"aria-label":"breadcrumb"},void 0,e("ol",{className:"breadcrumb mb-0"},void 0,E||(E=e("li",{className:"breadcrumb-item"},void 0,e("a",{href:"https://insideto.toronto.ca"},void 0,e(w,{className:"me-1"}),"InsideTO"))),r.map((function(t,r,n){var o=t.text,u=t.link;return e(R,{text:o,link:u,islast:r===n.length-1},"".concat(o,"-").concat(u||"nolink"))})))))}}]),o}(d().Component);function Z(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var P=function(t){i(o,t);var n=Z(o);function o(){return r(this,o),n.apply(this,arguments)}return c(o,[{key:"render",value:function(){var t=this.props.breadcrumb,r=void 0===t?[]:t;return e("header",{className:"intranet-c-frame-header pt-3"},void 0,Y||(Y=e("div",{className:"container-fluid px-4"},void 0,e("h1",{className:"mb-3"},void 0,e("a",{href:"https://insideto.toronto.ca"},void 0,e("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OC42NiIgaGVpZ2h0PSIxNC44MyIgdmlld0JveD0iMCAwIDQ4LjY2IDE0LjgzIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTYuNzYgNi40MmMwLTEuMjkgMS4xNy0xLjc3IDIuNDctMS43N3MyLjQ2LjQ4IDIuNDYgMS43N3Y2LjQ4YzAgMS4zLTEuMTcgMS43Ny0yLjQ2IDEuNzdzLTIuNDctLjQ4LTIuNDctMS43N3ptMi44NC4yNWMwLS4yNyAwLS42NC0uMzctLjY0cy0uMzcuMzctLjM3LjY0djUuOTJjMCAuMjcgMCAuNjQuMzcuNjRzLjM3LS4zNy4zNy0uNjR6bTIuODggNy44MVY0Ljg0aDIuNDdjMS4yOSAwIDIuNDcuNDggMi40NyAydi43NmExLjUgMS41IDAgMCAxLTEuNjIgMS41OGMxLjMyLjA3IDEuNjIuNTMgMS42MiAxLjY0djEuOTJhNC40OCA0LjQ4IDAgMCAwIC4zMSAxLjcySDI1LjZhMi4zMiAyLjMyIDAgMCAxLS4yOC0xLjI1VjExYzAtLjYgMC0xLjA4LS43NC0xLjA4djQuNTR6bTIuMDYtNS42NmguMjVjLjM0IDAgLjQ5LS4xNS40OS0uNjFWNi43OGMwLS40Ni0uMTUtLjYxLS40OS0uNjFoLS4yNXptMy41OS0yLjRjMC0xLjI5IDEuMTctMS43NyAyLjQ3LTEuNzdzMi40Ni40OCAyLjQ2IDEuNzd2Ni40OGMwIDEuMy0xLjE3IDEuNzctMi40NiAxLjc3cy0yLjQ3LS40OC0yLjQ3LTEuNzd6bTIuODcuMjVjMC0uMjcgMC0uNjQtLjM3LS42NHMtLjM3LjM3LS4zNy42NHY1LjkyYzAgLjI3IDAgLjY0LjM3LjY0cy4zNy0uMzcuMzctLjY0em0yLjgzIDcuODFWNC44NGgyLjc3bC45NSA2LjE0LjAxLjIzaC4wM1Y0Ljg0aDEuNjd2OS42NGgtMi41OWwtMS4xNC03LjM2LS4wMS0uMjdoLS4wMnY3LjYzaC0xLjY3em05Ljg5LTguMDZjMC0xLjI5IDEuMTctMS43NyAyLjQ3LTEuNzdzMi40Ni40OCAyLjQ2IDEuNzd2Ni40OGMwIDEuMy0xLjE3IDEuNzctMi40NiAxLjc3cy0yLjQ3LS40OC0yLjQ3LTEuNzd6bTIuODQuMjVjMC0uMjcgMC0uNjQtLjM3LS42NHMtLjM3LjM3LS4zNy42NHY1LjkyYzAgLjI3IDAgLjY0LjM3LjY0cy4zNy0uMzcuMzctLjY0em0tMy4xOS0xLjgzaC0zLjd2MS40NWguOHY4LjE5aDIuMVY2LjI5aC44VjQuODR6TTE3LjU4IDIuNDhoLTUuMjV2MS41NWgxLjU1djEwLjQ1aDIuMTRWNC4wM2gxLjU2VjIuNDh6bS01LjQxIDEyLjM1di0uMDZBOS41OSA5LjU5IDAgMCAwIDcuNzggMTRIMHYuNTNoMTAuNWE2LjQ3IDYuNDcgMCAwIDEgMS42Ny4zNE05LjA3LjI5TDguNzYgMGEuMzcuMzcgMCAwIDAtLjI5IDBMOCAuMjZ2Mi4yOWEzLjcyIDMuNzIgMCAwIDEtMS40OSAxLjM3LjM1LjM1IDAgMCAwLS4yMS4zNnY4LjUzYy0uMzEgMC0uODEuMDctLjgxLjA3VjUuNjZjMC0uMjctLjEyLS4zNS0uMzctLjQxYTE0LjQyIDE0LjQyIDAgMCAxLTIuNzItLjkyVjIuODVsLS40LS4yYS41Mi41MiAwIDAgMC0uMzQgMCAzLjggMy44IDAgMCAwLS40OS4yOEEyLjMyIDIuMzIgMCAwIDAgMCA0Ljg1djguODJoLjc5VjQuODVhMS40OCAxLjQ4IDAgMCAxIC43NS0xLjMyaC4wNnYxMC4xNGguNzh2LTguNWMuNjIuMjMgMSAuMzkgMS42Ny42bC42NC4xN1YxM2E5LjUgOS41IDAgMCAwLTIuMTkuNjhINGE5LjIzIDkuMjMgMCAwIDEgMy43Ny0uOGwtLjcyLS4wNlY0LjVoLjA4QTQuMTEgNC4xMSAwIDAgMCA4IDMuNzl2OS44OGguODFWMS4yYTMuOCAzLjggMCAwIDEgLjc3IDIuMjN2MTAuMzJjLjI0IDAgLjU0LjA2Ljc5LjEzVjMuNDFBNC43MSA0LjcxIDAgMCAwIDkuMDcuMjkiLz48L3N2Zz4=",height:"70",width:"225",alt:"City of Toronto Intranet"}))))),e(Q,{crumbs:r}))}}]),o}(d().Component),k=n(711),V={};V.styleTagTransform=S(),V.setAttributes=g(),V.insert=m().bind(null,"head"),V.domAPI=L(),V.insertStyleElement=b();j()(k.Z,V);k.Z&&k.Z.locals&&k.Z.locals;var _;function G(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var U,B=function(t){i(o,t);var n=G(o);function o(){return r(this,o),n.apply(this,arguments)}return c(o,[{key:"render",value:function(){return _||(_=e("footer",{className:"intranet-c-frame-footer py-4"},void 0,e("div",{className:"container text-end"},void 0,e("p",{},void 0,"\xa9  City of Toronto 1998 \u2013 2020"))))}}]),o}(d().Component);function W(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var H=function(t){i(o,t);var n=W(o);function o(){return r(this,o),n.apply(this,arguments)}return c(o,[{key:"render",value:function(){var t=this.props,r=t.breadcrumb,n=t.children;return d().createElement(d().Fragment,null,e(P,{breadcrumb:r}),e("main",{className:"py-4"},void 0,e("div",{className:"container"},void 0,n)),U||(U=e(B,{})))}}]),o}(d().Component)})(),o})()));