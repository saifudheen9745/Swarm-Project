import{q as vr,r as y,R,t as br,d as ee,j as B,v as yr,_ as fn,u as wr,w as _r,e as xt,f as kr,x as xr,A as Cr,N as Sr}from"./index-77a47547.js";import{w as Er}from"./workspaceApi-63e324ee.js";import{p as Te}from"./index-4d501b15.js";import{I as $r}from"./index.esm-3a643b38.js";const pn=()=>{const n=vr();return{getAChat:async r=>{try{return n.get(`/chat/create/${r}`)}catch(i){throw{error:i}}},sentMessage:async r=>{try{return n.post("/chat/send",r)}catch(i){throw{error:i}}}}};function Tr(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var Or=`.react-input-emoji--container {
  color: #4b4b4b;
  text-rendering: optimizeLegibility;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 21px;
  margin: 5px 10px;
  box-sizing: border-box;
  flex: 1 1 auto;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 0;
  outline: none;
  width: inherit;
  will-change: width;
  vertical-align: baseline;
  border: 1px solid #eaeaea;
  margin-right: 0;
}

.react-input-emoji--wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;
  position: relative;
  padding-right: 0;
  vertical-align: baseline;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.react-input-emoji--input {
  font-weight: 400;
  max-height: 100px;
  min-height: 20px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 1;
  width: 100%;
  user-select: text;
  padding: 9px 12px 11px;
  text-align: left;
}

.react-input-emoji--input img {
  vertical-align: middle;
  width: 18px !important;
  height: 18px !important;
  display: inline !important;
  margin-left: 1px;
  margin-right: 1px;
}

.react-input-emoji--overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}

.react-input-emoji--placeholder {
  color: #a0a0a0;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 2;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 22px);
}

.react-input-emoji--button {
  position: relative;
  display: block;
  text-align: center;
  padding: 0 10px;
  overflow: hidden;
  transition: color 0.1s ease-out;
  margin: 0;
  box-shadow: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
}

.react-input-emoji--button svg {
  fill: #858585;
}

.react-input-emoji--button__show svg {
  fill: #128b7e;
}

.react-emoji {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.react-emoji-picker--container {
  position: absolute;
  top: 0;
  width: 100%;
}

.react-emoji-picker--wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 435px;
  width: 352px;
  overflow: hidden;
  z-index: 10;
}

.react-emoji-picker {
  position: absolute;
  top: 0;
  left: 0;
  animation: slidein 0.1s ease-in-out;
}

.react-emoji-picker__show {
  top: 0;
}

.react-input-emoji--mention--container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.react-input-emoji--mention--list {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}

.react-input-emoji--mention--item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: transparent;
  width: 100%;
  margin: 0;
  border: 0;
}

.react-input-emoji--mention--item__selected {
  background-color: #eeeeee;
}

.react-input-emoji--mention--item--img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.react-input-emoji--mention--item--name {
  font-size: 16px;
  color: #333;
}

.react-input-emoji--mention--item--name__selected {
  color: green;
}

.react-input-emoji--mention--text {
  color: #039be5;
}

.react-input-emoji--mention--loading {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.react-input-emoji--mention--loading--spinner,
.react-input-emoji--mention--loading--spinner::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.react-input-emoji--mention--loading--spinner {
  margin: 1px auto;
  font-size: 2px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.1);
  border-right: 1.1em solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.1);
  border-left: 1.1em solid rgba(0, 0, 0, 0.4);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slidein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;Tr(Or);function Ct(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function St(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ct(Object(t),!0).forEach(function(r){Rr(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ct(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Oe(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Oe=function(){return n};var n={},e=Object.prototype,t=e.hasOwnProperty,r=typeof Symbol=="function"?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function l(v,g,k){return Object.defineProperty(v,g,{value:k,enumerable:!0,configurable:!0,writable:!0}),v[g]}try{l({},"")}catch{l=function(g,k,O){return g[k]=O}}function c(v,g,k,O){var x=g&&g.prototype instanceof f?g:f,j=Object.create(x.prototype),A=new z(O||[]);return j._invoke=function(W,X,D){var F="suspendedStart";return function(K,he){if(F==="executing")throw new Error("Generator is already running");if(F==="completed"){if(K==="throw")throw he;return U()}for(D.method=K,D.arg=he;;){var je=D.delegate;if(je){var ve=E(je,D);if(ve){if(ve===a)continue;return ve}}if(D.method==="next")D.sent=D._sent=D.arg;else if(D.method==="throw"){if(F==="suspendedStart")throw F="completed",D.arg;D.dispatchException(D.arg)}else D.method==="return"&&D.abrupt("return",D.arg);F="executing";var fe=u(W,X,D);if(fe.type==="normal"){if(F=D.done?"completed":"suspendedYield",fe.arg===a)continue;return{value:fe.arg,done:D.done}}fe.type==="throw"&&(F="completed",D.method="throw",D.arg=fe.arg)}}}(v,k,A),j}function u(v,g,k){try{return{type:"normal",arg:v.call(g,k)}}catch(O){return{type:"throw",arg:O}}}n.wrap=c;var a={};function f(){}function d(){}function p(){}var h={};l(h,i,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(oe([])));w&&w!==e&&t.call(w,i)&&(h=w);var C=p.prototype=f.prototype=Object.create(h);function T(v){["next","throw","return"].forEach(function(g){l(v,g,function(k){return this._invoke(g,k)})})}function $(v,g){function k(x,j,A,W){var X=u(v[x],v,j);if(X.type!=="throw"){var D=X.arg,F=D.value;return F&&typeof F=="object"&&t.call(F,"__await")?g.resolve(F.__await).then(function(K){k("next",K,A,W)},function(K){k("throw",K,A,W)}):g.resolve(F).then(function(K){D.value=K,A(D)},function(K){return k("throw",K,A,W)})}W(X.arg)}var O;this._invoke=function(x,j){function A(){return new g(function(W,X){k(x,j,W,X)})}return O=O?O.then(A,A):A()}}function E(v,g){var k=v.iterator[g.method];if(k===void 0){if(g.delegate=null,g.method==="throw"){if(v.iterator.return&&(g.method="return",g.arg=void 0,E(v,g),g.method==="throw"))return a;g.method="throw",g.arg=new TypeError("The iterator does not provide a 'throw' method")}return a}var O=u(k,v.iterator,g.arg);if(O.type==="throw")return g.method="throw",g.arg=O.arg,g.delegate=null,a;var x=O.arg;return x?x.done?(g[v.resultName]=x.value,g.next=v.nextLoc,g.method!=="return"&&(g.method="next",g.arg=void 0),g.delegate=null,a):x:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,a)}function _(v){var g={tryLoc:v[0]};1 in v&&(g.catchLoc=v[1]),2 in v&&(g.finallyLoc=v[2],g.afterLoc=v[3]),this.tryEntries.push(g)}function L(v){var g=v.completion||{};g.type="normal",delete g.arg,v.completion=g}function z(v){this.tryEntries=[{tryLoc:"root"}],v.forEach(_,this),this.reset(!0)}function oe(v){if(v){var g=v[i];if(g)return g.call(v);if(typeof v.next=="function")return v;if(!isNaN(v.length)){var k=-1,O=function x(){for(;++k<v.length;)if(t.call(v,k))return x.value=v[k],x.done=!1,x;return x.value=void 0,x.done=!0,x};return O.next=O}}return{next:U}}function U(){return{value:void 0,done:!0}}return d.prototype=p,l(C,"constructor",p),l(p,"constructor",d),d.displayName=l(p,s,"GeneratorFunction"),n.isGeneratorFunction=function(v){var g=typeof v=="function"&&v.constructor;return!!g&&(g===d||(g.displayName||g.name)==="GeneratorFunction")},n.mark=function(v){return Object.setPrototypeOf?Object.setPrototypeOf(v,p):(v.__proto__=p,l(v,s,"GeneratorFunction")),v.prototype=Object.create(C),v},n.awrap=function(v){return{__await:v}},T($.prototype),l($.prototype,o,function(){return this}),n.AsyncIterator=$,n.async=function(v,g,k,O,x){x===void 0&&(x=Promise);var j=new $(c(v,g,k,O),x);return n.isGeneratorFunction(g)?j:j.next().then(function(A){return A.done?A.value:j.next()})},T(C),l(C,s,"Generator"),l(C,i,function(){return this}),l(C,"toString",function(){return"[object Generator]"}),n.keys=function(v){var g=[];for(var k in v)g.push(k);return g.reverse(),function O(){for(;g.length;){var x=g.pop();if(x in v)return O.value=x,O.done=!1,O}return O.done=!0,O}},n.values=oe,z.prototype={constructor:z,reset:function(v){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!v)for(var g in this)g.charAt(0)==="t"&&t.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=void 0)},stop:function(){this.done=!0;var v=this.tryEntries[0].completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(v){if(this.done)throw v;var g=this;function k(X,D){return j.type="throw",j.arg=v,g.next=X,D&&(g.method="next",g.arg=void 0),!!D}for(var O=this.tryEntries.length-1;O>=0;--O){var x=this.tryEntries[O],j=x.completion;if(x.tryLoc==="root")return k("end");if(x.tryLoc<=this.prev){var A=t.call(x,"catchLoc"),W=t.call(x,"finallyLoc");if(A&&W){if(this.prev<x.catchLoc)return k(x.catchLoc,!0);if(this.prev<x.finallyLoc)return k(x.finallyLoc)}else if(A){if(this.prev<x.catchLoc)return k(x.catchLoc,!0)}else{if(!W)throw new Error("try statement without catch or finally");if(this.prev<x.finallyLoc)return k(x.finallyLoc)}}}},abrupt:function(v,g){for(var k=this.tryEntries.length-1;k>=0;--k){var O=this.tryEntries[k];if(O.tryLoc<=this.prev&&t.call(O,"finallyLoc")&&this.prev<O.finallyLoc){var x=O;break}}x&&(v==="break"||v==="continue")&&x.tryLoc<=g&&g<=x.finallyLoc&&(x=null);var j=x?x.completion:{};return j.type=v,j.arg=g,x?(this.method="next",this.next=x.finallyLoc,a):this.complete(j)},complete:function(v,g){if(v.type==="throw")throw v.arg;return v.type==="break"||v.type==="continue"?this.next=v.arg:v.type==="return"?(this.rval=this.arg=v.arg,this.method="return",this.next="end"):v.type==="normal"&&g&&(this.next=g),a},finish:function(v){for(var g=this.tryEntries.length-1;g>=0;--g){var k=this.tryEntries[g];if(k.finallyLoc===v)return this.complete(k.completion,k.afterLoc),L(k),a}},catch:function(v){for(var g=this.tryEntries.length-1;g>=0;--g){var k=this.tryEntries[g];if(k.tryLoc===v){var O=k.completion;if(O.type==="throw"){var x=O.arg;L(k)}return x}}throw new Error("illegal catch attempt")},delegateYield:function(v,g,k){return this.delegate={iterator:oe(v),resultName:g,nextLoc:k},this.method==="next"&&(this.arg=void 0),a}},n}function Et(n,e,t,r,i,o,s){try{var l=n[o](s),c=l.value}catch(u){t(u);return}l.done?e(c):Promise.resolve(c).then(r,i)}function $t(n){return function(){var e=this,t=arguments;return new Promise(function(r,i){var o=n.apply(e,t);function s(c){Et(o,r,i,s,l,"next",c)}function l(c){Et(o,r,i,s,l,"throw",c)}s(void 0)})}}function Rr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Pr(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function jr(n,e){if(n==null)return{};var t=Pr(n,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function ue(n,e){return Ar(n)||Dr(n,e)||gn(n,e)||Br()}function mn(n){return Mr(n)||Lr(n)||gn(n)||Nr()}function Mr(n){if(Array.isArray(n))return ot(n)}function Ar(n){if(Array.isArray(n))return n}function Lr(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Dr(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],i=!0,o=!1,s,l;try{for(t=t.call(n);!(i=(s=t.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(c){o=!0,l=c}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw l}}return r}}function gn(n,e){if(n){if(typeof n=="string")return ot(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ot(n,e)}}function ot(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Nr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Br(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zr="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";function vn(n){var e=Ir(n);return e&&(e=mn(new Set(e)),e.forEach(function(t){n=bn(n,t,yn(t))})),n}function bn(n,e,t){return n.replace(new RegExp(e,"g"),t)}function Ir(n){return n.match(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g)}function Ur(n){var e,t=document.querySelector("em-emoji-picker");if(!t)return Tt(n.native);var r=t==null||(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelector('[title="'.concat(n.name,'"] > span > span'));if(!r)return Tt(n.native);var i=bn(r.style.cssText,'"',"'");return yn(i,n.native)}function yn(n,e){return'<img style="'.concat(n,'; display: inline-block" data-emoji="').concat(e,'" src="').concat(zr,'" />')}function Tt(n){return'<span class="width: 18px; height: 18px; display: inline-block; margin: 0 1px;">'.concat(n,"</span>")}function Fr(n){var e=document.createElement("div");e.innerHTML=n;var t=Array.prototype.slice.call(e.querySelectorAll("img"));return t.forEach(function(r){e.innerHTML=e.innerHTML.replace(r.outerHTML,r.dataset.emoji)}),e.innerHTML}function Hr(n){var e,t;if(window.getSelection){if(e=window.getSelection(),e===null)return;if(e.getRangeAt&&e.rangeCount){t=e.getRangeAt(0),t.deleteContents();var r=document.createElement("div");r.innerHTML=n;for(var i=document.createDocumentFragment(),o,s;o=r.firstChild;)s=i.appendChild(o);t.insertNode(i),s&&(t=t.cloneRange(),t.setStartAfter(s),t.collapse(!0),e.removeAllRanges(),e.addRange(t))}}}function Ot(n){var e=n.text,t=n.html,r=e.length,i=(t.match(/<img/g)||[]).length;return r+i}function wn(){var n=y.useRef([]),e=y.useRef(""),t=y.useCallback(function(i){n.current.push(i)},[]),r=y.useCallback(function(i){var o=n.current.reduce(function(s,l){return l(s)},i);return o=Wr(o),e.current=o,o},[]);return{addSanitizeFn:t,sanitize:r,sanitizedTextRef:e}}function Wr(n){var e=document.createElement("div");e.innerHTML=n;var t=e.innerText||"";return t=t.replace(/\n/gi,""),t}function qr(n){var e=n.ref,t=n.textInputRef,r=n.setValue,i=n.emitChange,o=wn(),s=o.sanitize,l=o.sanitizedTextRef;y.useImperativeHandle(e,function(){return{get value(){return l.current},set value(c){r(c)},focus:function(){t.current!==null&&t.current.focus()},blur:function(){t.current!==null&&s(t.current.html),i()}}})}function Vr(n,e,t){var r=y.useRef(null),i=y.useRef(t),o=y.useCallback(function(){if(n.current!==null){var l=r.current,c=n.current.size;(!l||l.width!==c.width||l.height!==c.height)&&typeof e=="function"&&e(c),r.current=c}},[e,n]),s=y.useCallback(function(l){typeof i.current=="function"&&i.current(l),typeof e=="function"&&o()},[o,e]);return y.useEffect(function(){n.current&&o()},[o,n]),s}var Yr=["placeholder","style","tabIndex","className","onChange"],Kr=function(e,t){var r=e.placeholder,i=e.style,o=e.tabIndex,s=e.className,l=e.onChange,c=jr(e,Yr);y.useImperativeHandle(t,function(){return{appendContent:function(b){a.current&&a.current.focus(),Hr(b),a.current&&a.current.focus(),a.current&&u.current&&a.current.innerHTML.trim()===""?u.current.style.visibility="visible":u.current&&(u.current.style.visibility="hidden"),a.current&&typeof l=="function"&&l(a.current.innerHTML)},set html(h){a.current&&(a.current.innerHTML=h),u.current&&(h.trim()===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"),typeof l=="function"&&a.current&&l(a.current.innerHTML)},get html(){return a.current?a.current.innerHTML:""},get text(){return a.current?a.current.innerText:""},get size(){return a.current?{width:a.current.offsetWidth,height:a.current.offsetHeight}:{width:0,height:0}},focus:function(){a.current&&a.current.focus()}}});var u=y.useRef(null),a=y.useRef(null);function f(h){h.key==="Enter"?c.onEnter(h):h.key==="ArrowUp"?c.onArrowUp(h):h.key==="ArrowDown"?c.onArrowDown(h):h.key.length===1&&u.current&&(u.current.style.visibility="hidden"),c.onKeyDown(h)}function d(){c.onFocus()}function p(h){c.onKeyUp(h);var b=a.current;if(u.current){var w;(b==null||(w=b.innerText)===null||w===void 0?void 0:w.trim())===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"}typeof l=="function"&&a.current&&l(a.current.innerHTML)}return R.createElement("div",{className:"react-input-emoji--container",style:i},R.createElement("div",{className:"react-input-emoji--wrapper",onClick:d},R.createElement("div",{ref:u,className:"react-input-emoji--placeholder"},r),R.createElement("div",{ref:a,onKeyDown:f,onKeyUp:p,tabIndex:o,contentEditable:!0,className:"react-input-emoji--input".concat(s?" ".concat(s):""),onBlur:c.onBlur,onCopy:c.onCopy,onPaste:c.onPaste,"data-testid":"react-input-emoji--input"})))},Gr=y.forwardRef(Kr);function Rt(n){var e=n.showPicker,t=n.toggleShowPicker,r=n.buttonElement,i=y.useRef(null),o=y.useState(!1),s=ue(o,2),l=s[0],c=s[1];return y.useEffect(function(){var u,a;((u=r==null||(a=r.childNodes)===null||a===void 0?void 0:a.length)!==null&&u!==void 0?u:0)>2&&(i.current.appendChild(r==null?void 0:r.childNodes[0]),c(!0))},[r==null?void 0:r.childNodes]),R.createElement("button",{ref:i,type:"button",className:"react-input-emoji--button".concat(e?" react-input-emoji--button__show":""),onClick:t},!l&&R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"react-input-emoji--button--icon"},R.createElement("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),R.createElement("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})))}function _n(n){return n&&n.__esModule?n.default:n}function Q(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Xe,S,kn,Pe,xn,Pt,Fe={},Cn=[],Xr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function le(n,e){for(var t in e)n[t]=e[t];return n}function Sn(n){var e=n.parentNode;e&&e.removeChild(n)}function st(n,e,t){var r,i,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?Xe.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(o in n.defaultProps)s[o]===void 0&&(s[o]=n.defaultProps[o]);return Ne(n,s,r,i,null)}function Ne(n,e,t,r,i){var o={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++kn};return i==null&&S.vnode!=null&&S.vnode(o),o}function se(){return{current:null}}function ke(n){return n.children}function te(n,e){this.props=n,this.context=e}function xe(n,e){if(e==null)return n.__?xe(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?xe(n):null}function En(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return En(n)}}function jt(n){(!n.__d&&(n.__d=!0)&&Pe.push(n)&&!He.__r++||Pt!==S.debounceRendering)&&((Pt=S.debounceRendering)||xn)(He)}function He(){for(var n;He.__r=Pe.length;)n=Pe.sort(function(e,t){return e.__v.__b-t.__v.__b}),Pe=[],n.some(function(e){var t,r,i,o,s,l;e.__d&&(s=(o=(t=e).__v).__e,(l=t.__P)&&(r=[],(i=le({},o)).__v=o.__v+1,yt(l,o,i,t.__n,l.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??xe(o),o.__h),Rn(r,o),o.__e!=s&&En(o)))})}function $n(n,e,t,r,i,o,s,l,c,u){var a,f,d,p,h,b,w,C=r&&r.__k||Cn,T=C.length;for(t.__k=[],a=0;a<e.length;a++)if((p=t.__k[a]=(p=e[a])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Ne(null,p,null,null,p):Array.isArray(p)?Ne(ke,{children:p},null,null,null):p.__b>0?Ne(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=t,p.__b=t.__b+1,(d=C[a])===null||d&&p.key==d.key&&p.type===d.type)C[a]=void 0;else for(f=0;f<T;f++){if((d=C[f])&&p.key==d.key&&p.type===d.type){C[f]=void 0;break}d=null}yt(n,p,d=d||Fe,i,o,s,l,c,u),h=p.__e,(f=p.ref)&&d.ref!=f&&(w||(w=[]),d.ref&&w.push(d.ref,null,p),w.push(f,p.__c||h,p)),h!=null?(b==null&&(b=h),typeof p.type=="function"&&p.__k===d.__k?p.__d=c=Tn(p,c,n):c=On(n,p,d,C,h,c),typeof t.type=="function"&&(t.__d=c)):c&&d.__e==c&&c.parentNode!=n&&(c=xe(d))}for(t.__e=b,a=T;a--;)C[a]!=null&&(typeof t.type=="function"&&C[a].__e!=null&&C[a].__e==t.__d&&(t.__d=xe(r,a+1)),jn(C[a],C[a]));if(w)for(a=0;a<w.length;a++)Pn(w[a],w[++a],w[++a])}function Tn(n,e,t){for(var r,i=n.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=n,e=typeof r.type=="function"?Tn(r,e,t):On(t,r,r,i,r.__e,e));return e}function We(n,e){return e=e||[],n==null||typeof n=="boolean"||(Array.isArray(n)?n.some(function(t){We(t,e)}):e.push(n)),e}function On(n,e,t,r,i,o){var s,l,c;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(t==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==n)n.appendChild(i),s=null;else{for(l=o,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==i)break e;n.insertBefore(i,o),s=o}return s!==void 0?s:i.nextSibling}function Qr(n,e,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in e||qe(n,o,null,t[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||qe(n,o,e[o],t[o],r)}function Mt(n,e,t){e[0]==="-"?n.setProperty(e,t):n[e]=t==null?"":typeof t!="number"||Xr.test(e)?t:t+"px"}function qe(n,e,t,r,i){var o;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Mt(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||Mt(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+o]=t,t?r||n.addEventListener(e,o?Lt:At,o):n.removeEventListener(e,o?Lt:At,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?n.setAttribute(e,t):n.removeAttribute(e))}}function At(n){this.l[n.type+!1](S.event?S.event(n):n)}function Lt(n){this.l[n.type+!0](S.event?S.event(n):n)}function yt(n,e,t,r,i,o,s,l,c){var u,a,f,d,p,h,b,w,C,T,$,E=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,l=e.__e=t.__e,e.__h=null,o=[l]),(u=S.__b)&&u(e);try{e:if(typeof E=="function"){if(w=e.props,C=(u=E.contextType)&&r[u.__c],T=u?C?C.props.value:u.__:r,t.__c?b=(a=e.__c=t.__c).__=a.__E:("prototype"in E&&E.prototype.render?e.__c=a=new E(w,T):(e.__c=a=new te(w,T),a.constructor=E,a.render=Zr),C&&C.sub(a),a.props=w,a.state||(a.state={}),a.context=T,a.__n=r,f=a.__d=!0,a.__h=[]),a.__s==null&&(a.__s=a.state),E.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=le({},a.__s)),le(a.__s,E.getDerivedStateFromProps(w,a.__s))),d=a.props,p=a.state,f)E.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(E.getDerivedStateFromProps==null&&w!==d&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(w,T),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(w,a.__s,T)===!1||e.__v===t.__v){a.props=w,a.state=a.__s,e.__v!==t.__v&&(a.__d=!1),a.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(_){_&&(_.__=e)}),a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(w,a.__s,T),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(d,p,h)})}a.context=T,a.props=w,a.state=a.__s,(u=S.__r)&&u(e),a.__d=!1,a.__v=e,a.__P=n,u=a.render(a.props,a.state,a.context),a.state=a.__s,a.getChildContext!=null&&(r=le(le({},r),a.getChildContext())),f||a.getSnapshotBeforeUpdate==null||(h=a.getSnapshotBeforeUpdate(d,p)),$=u!=null&&u.type===ke&&u.key==null?u.props.children:u,$n(n,Array.isArray($)?$:[$],e,t,r,i,o,s,l,c),a.base=e.__e,e.__h=null,a.__h.length&&s.push(a),b&&(a.__E=a.__=null),a.__e=!1}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Jr(t.__e,e,t,r,i,o,s,c);(u=S.diffed)&&u(e)}catch(_){e.__v=null,(c||o!=null)&&(e.__e=l,e.__h=!!c,o[o.indexOf(l)]=null),S.__e(_,e,t)}}function Rn(n,e){S.__c&&S.__c(e,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(r){r.call(t)})}catch(r){S.__e(r,t.__v)}})}function Jr(n,e,t,r,i,o,s,l){var c,u,a,f=t.props,d=e.props,p=e.type,h=0;if(p==="svg"&&(i=!0),o!=null){for(;h<o.length;h++)if((c=o[h])&&"setAttribute"in c==!!p&&(p?c.localName===p:c.nodeType===3)){n=c,o[h]=null;break}}if(n==null){if(p===null)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,d.is&&d),o=null,l=!1}if(p===null)f===d||l&&n.data===d||(n.data=d);else{if(o=o&&Xe.call(n.childNodes),u=(f=t.props||Fe).dangerouslySetInnerHTML,a=d.dangerouslySetInnerHTML,!l){if(o!=null)for(f={},h=0;h<n.attributes.length;h++)f[n.attributes[h].name]=n.attributes[h].value;(a||u)&&(a&&(u&&a.__html==u.__html||a.__html===n.innerHTML)||(n.innerHTML=a&&a.__html||""))}if(Qr(n,d,f,i,l),a)e.__k=[];else if(h=e.props.children,$n(n,Array.isArray(h)?h:[h],e,t,r,i&&p!=="foreignObject",o,s,o?o[0]:t.__k&&xe(t,0),l),o!=null)for(h=o.length;h--;)o[h]!=null&&Sn(o[h]);l||("value"in d&&(h=d.value)!==void 0&&(h!==f.value||h!==n.value||p==="progress"&&!h)&&qe(n,"value",h,f.value,!1),"checked"in d&&(h=d.checked)!==void 0&&h!==n.checked&&qe(n,"checked",h,f.checked,!1))}return n}function Pn(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(r){S.__e(r,t)}}function jn(n,e,t){var r,i;if(S.unmount&&S.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||Pn(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){S.__e(o,e)}r.base=r.__P=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&jn(r[i],e,typeof n.type!="function");t||n.__e==null||Sn(n.__e),n.__e=n.__d=void 0}function Zr(n,e,t){return this.constructor(n,t)}function Mn(n,e,t){var r,i,o;S.__&&S.__(n,e),i=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],yt(e,n=(!r&&t||e).__k=st(ke,null,[n]),i||Fe,Fe,e.ownerSVGElement!==void 0,!r&&t?[t]:i?null:e.firstChild?Xe.call(e.childNodes):null,o,!r&&t?t:i?i.__e:e.firstChild,r),Rn(o,n)}Xe=Cn.slice,S={__e:function(n,e){for(var t,r,i;e=e.__;)if((t=e.__c)&&!t.__)try{if((r=t.constructor)&&r.getDerivedStateFromError!=null&&(t.setState(r.getDerivedStateFromError(n)),i=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(n),i=t.__d),i)return t.__E=t}catch(o){n=o}throw n}},kn=0,te.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=le({},this.state),typeof n=="function"&&(n=n(le({},t),this.props)),n&&le(t,n),n!=null&&this.__v&&(e&&this.__h.push(e),jt(this))},te.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),jt(this))},te.prototype.render=ke,Pe=[],xn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,He.__r=0;var ei=0;function m(n,e,t,r,i){var o,s,l={};for(s in e)s=="ref"?o=e[s]:l[s]=e[s];var c={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ei,__source:r,__self:i};if(typeof n=="function"&&(o=n.defaultProps))for(s in o)l[s]===void 0&&(l[s]=o[s]);return S.vnode&&S.vnode(c),c}function ti(n,e){try{window.localStorage[`emoji-mart.${n}`]=JSON.stringify(e)}catch{}}function ni(n){try{const e=window.localStorage[`emoji-mart.${n}`];if(e)return JSON.parse(e)}catch{}}var de={set:ti,get:ni};const et=new Map,ri=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function ii(){for(const{v:n,emoji:e}of ri)if(An(e))return n}function oi(){return!An("🇨🇦")}function An(n){if(et.has(n))return et.get(n);const e=si(n);return et.set(n,e),e}const si=(()=>{let n=null;try{navigator.userAgent.includes("jsdom")||(n=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!n)return()=>!1;const e=25,t=20,r=Math.floor(e/2);return n.font=r+"px Arial, Sans-Serif",n.textBaseline="top",n.canvas.width=t*2,n.canvas.height=e,i=>{n.clearRect(0,0,t*2,e),n.fillStyle="#FF0000",n.fillText(i,0,22),n.fillStyle="#0000FF",n.fillText(i,t,22);const o=n.getImageData(0,0,t,e).data,s=o.length;let l=0;for(;l<s&&!o[l+3];l+=4);if(l>=s)return!1;const c=t+l/4%t,u=Math.floor(l/4/t),a=n.getImageData(c,u,1,1).data;return!(o[l]!==a[0]||o[l+2]!==a[2]||n.measureText(i).width>=t)}})();var Dt={latestVersion:ii,noCountryFlags:oi};const at=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let q=null;function ai(n){q||(q=de.get("frequently")||{});const e=n.id||n;e&&(q[e]||(q[e]=0),q[e]+=1,de.set("last",e),de.set("frequently",q))}function ci({maxFrequentRows:n,perLine:e}){if(!n)return[];q||(q=de.get("frequently"));let t=[];if(!q){q={};for(let o in at.slice(0,e)){const s=at[o];q[s]=e-o,t.push(s)}return t}const r=n*e,i=de.get("last");for(let o in q)t.push(o);if(t.sort((o,s)=>{const l=q[s],c=q[o];return l==c?o.localeCompare(s):l-c}),t.length>r){const o=t.slice(r);t=t.slice(0,r);for(let s of o)s!=i&&delete q[s];i&&t.indexOf(i)==-1&&(delete q[t[t.length-1]],t.splice(-1,1,i)),de.set("frequently",q)}return t}var Ln={add:ai,get:ci,DEFAULTS:at},Dn={};Dn=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var ae={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let V=null,P=null;const tt={};async function Nt(n){if(tt[n])return tt[n];const t=await(await fetch(n)).json();return tt[n]=t,t}let nt=null,Nn=null,Bn=!1;function Qe(n,{caller:e}={}){return nt||(nt=new Promise(t=>{Nn=t})),n?li(n):e&&!Bn&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),nt}async function li(n){Bn=!0;let{emojiVersion:e,set:t,locale:r}=n;if(e||(e=ae.emojiVersion.value),t||(t=ae.set.value),r||(r=ae.locale.value),P)P.categories=P.categories.filter(c=>!c.name);else{P=(typeof n.data=="function"?await n.data():n.data)||await Nt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${t}.json`),P.emoticons={},P.natives={},P.categories.unshift({id:"frequent",emojis:[]});for(const c in P.aliases){const u=P.aliases[c],a=P.emojis[u];a&&(a.aliases||(a.aliases=[]),a.aliases.push(c))}P.originalCategories=P.categories}if(V=(typeof n.i18n=="function"?await n.i18n():n.i18n)||(r=="en"?_n(Dn):await Nt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),n.custom)for(let c in n.custom){c=parseInt(c);const u=n.custom[c],a=n.custom[c-1];if(!(!u.emojis||!u.emojis.length)){u.id||(u.id=`custom_${c+1}`),u.name||(u.name=V.categories.custom),a&&!u.icon&&(u.target=a.target||a),P.categories.push(u);for(const f of u.emojis)P.emojis[f.id]=f}}n.categories&&(P.categories=P.originalCategories.filter(c=>n.categories.indexOf(c.id)!=-1).sort((c,u)=>{const a=n.categories.indexOf(c.id),f=n.categories.indexOf(u.id);return a-f}));let i=null,o=null;t=="native"&&(i=Dt.latestVersion(),o=n.noCountryFlags||Dt.noCountryFlags());let s=P.categories.length,l=!1;for(;s--;){const c=P.categories[s];if(c.id=="frequent"){let{maxFrequentRows:f,perLine:d}=n;f=f>=0?f:ae.maxFrequentRows.value,d||(d=ae.perLine.value),c.emojis=Ln.get({maxFrequentRows:f,perLine:d})}if(!c.emojis||!c.emojis.length){P.categories.splice(s,1);continue}const{categoryIcons:u}=n;if(u){const f=u[c.id];f&&!c.icon&&(c.icon=f)}let a=c.emojis.length;for(;a--;){const f=c.emojis[a],d=f.id?f:P.emojis[f],p=()=>{c.emojis.splice(a,1)};if(!d||n.exceptEmojis&&n.exceptEmojis.includes(d.id)){p();continue}if(i&&d.version>i){p();continue}if(o&&c.id=="flags"&&!pi.includes(d.id)){p();continue}if(!d.search){if(l=!0,d.search=","+[[d.id,!1],[d.name,!0],[d.keywords,!1],[d.emoticons,!1]].map(([b,w])=>{if(b)return(Array.isArray(b)?b:[b]).map(C=>(w?C.split(/[-|_|\s]+/):[C]).map(T=>T.toLowerCase())).flat()}).flat().filter(b=>b&&b.trim()).join(","),d.emoticons)for(const b of d.emoticons)P.emoticons[b]||(P.emoticons[b]=d.id);let h=0;for(const b of d.skins){if(!b)continue;h++;const{native:w}=b;w&&(P.natives[w]=d.id,d.search+=`,${w}`);const C=h==1?"":`:skin-tone-${h}:`;b.shortcodes=`:${d.id}:${C}`}}}}l&&_e.reset(),Nn()}function zn(n,e,t){n||(n={});const r={};for(let i in e)r[i]=In(i,n,e,t);return r}function In(n,e,t,r){const i=t[n];let o=r&&r.getAttribute(n)||(e[n]!=null&&e[n]!=null?e[n]:null);return i&&(o!=null&&i.value&&typeof i.value!=typeof o&&(typeof i.value=="boolean"?o=o!="false":o=i.value.constructor(o)),i.transform&&o&&(o=i.transform(o)),(o==null||i.choices&&i.choices.indexOf(o)==-1)&&(o=i.value)),o}const ui=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let ct=null;function di(n){return n.id?n:P.emojis[n]||P.emojis[P.aliases[n]]||P.emojis[P.natives[n]]}function hi(){ct=null}async function fi(n,{maxResults:e,caller:t}={}){if(!n||!n.trim().length)return null;e||(e=90),await Qe(null,{caller:t||"SearchIndex.search"});const r=n.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((l,c,u)=>l.trim()&&u.indexOf(l)==c);if(!r.length)return;let i=ct||(ct=Object.values(P.emojis)),o,s;for(const l of r){if(!i.length)break;o=[],s={};for(const c of i){if(!c.search)continue;const u=c.search.indexOf(`,${l}`);u!=-1&&(o.push(c),s[c.id]||(s[c.id]=0),s[c.id]+=c.id==l?0:u+1)}i=o}return o.length<2||(o.sort((l,c)=>{const u=s[l.id],a=s[c.id];return u==a?l.id.localeCompare(c.id):u-a}),o.length>e&&(o=o.slice(0,e))),o}var _e={search:fi,get:di,reset:hi,SHORTCODES_REGEX:ui};const pi=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function mi(n,e){return Array.isArray(n)&&Array.isArray(e)&&n.length===e.length&&n.every((t,r)=>t==e[r])}async function gi(n=1){for(let e in[...Array(n).keys()])await new Promise(requestAnimationFrame)}function vi(n,{skinIndex:e=0}={}){const t=n.skins[e]||(()=>(e=0,n.skins[e]))(),r={id:n.id,name:n.name,native:t.native,unified:t.unified,keywords:n.keywords,shortcodes:t.shortcodes||n.shortcodes};return n.skins.length>1&&(r.skin=e+1),t.src&&(r.src=t.src),n.aliases&&n.aliases.length&&(r.aliases=n.aliases),n.emoticons&&n.emoticons.length&&(r.emoticons=n.emoticons),r}const bi={activity:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:m("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),m("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),m("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:m("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),m("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:m("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),m("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),m("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},yi={loupe:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:m("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:m("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ve={categories:bi,search:yi};function lt(n){let{id:e,skin:t,emoji:r}=n;if(n.shortcodes){const l=n.shortcodes.match(_e.SHORTCODES_REGEX);l&&(e=l[1],l[2]&&(t=l[2]))}if(r||(r=_e.get(e||n.native)),!r)return n.fallback;const i=r.skins[t-1]||r.skins[0],o=i.src||(n.set!="native"&&!n.spritesheet?typeof n.getImageURL=="function"?n.getImageURL(n.set,i.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${n.set}@14.0.0/img/${n.set}/64/${i.unified}.png`:void 0),s=typeof n.getSpritesheetURL=="function"?n.getSpritesheetURL(n.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${n.set}@14.0.0/img/${n.set}/sheets-256/64.png`;return m("span",{class:"emoji-mart-emoji","data-emoji-set":n.set,children:o?m("img",{style:{maxWidth:n.size||"1em",maxHeight:n.size||"1em",display:"inline-block"},alt:i.native||i.shortcodes,src:o}):n.set=="native"?m("span",{style:{fontSize:n.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:i.native}):m("span",{style:{display:"block",width:n.size,height:n.size,backgroundImage:`url(${s})`,backgroundSize:`${100*P.sheet.cols}% ${100*P.sheet.rows}%`,backgroundPosition:`${100/(P.sheet.cols-1)*i.x}% ${100/(P.sheet.rows-1)*i.y}%`}})})}const wi=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Un extends wi{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let t in e)this.attributeChangedCallback(t,null,e[t])}attributeChangedCallback(e,t,r){if(!this.component)return;const i=In(e,{[e]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:i}):(this.component.props[e]=i,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let t=null;const r=e.parent||(t=e.ref&&e.ref.current);t&&(t.innerHTML=""),r&&r.appendChild(this)}}}class _i extends Un{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const t=document.createElement("style");t.textContent=e,this.shadowRoot.insertBefore(t,this.shadowRoot.firstChild)}constructor(e,{styles:t}={}){super(e),this.setShadow(),this.injectStyles(t)}}var Fn={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:n=>/\D/.test(n)?n:`${n}px`},set:ae.set,skin:ae.skin};class Hn extends Un{async connectedCallback(){const e=zn(this.props,Fn,this);e.element=this,e.ref=t=>{this.component=t},await Qe(),!this.disconnected&&Mn(m(lt,{...e}),this)}constructor(e){super(e)}}Q(Hn,"Props",Fn);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Hn);var Bt,ut=[],zt=S.__b,It=S.__r,Ut=S.diffed,Ft=S.__c,Ht=S.unmount;function ki(){var n;for(ut.sort(function(e,t){return e.__v.__b-t.__v.__b});n=ut.pop();)if(n.__P)try{n.__H.__h.forEach(Be),n.__H.__h.forEach(dt),n.__H.__h=[]}catch(e){n.__H.__h=[],S.__e(e,n.__v)}}S.__b=function(n){zt&&zt(n)},S.__r=function(n){It&&It(n);var e=n.__c.__H;e&&(e.__h.forEach(Be),e.__h.forEach(dt),e.__h=[])},S.diffed=function(n){Ut&&Ut(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(ut.push(e)!==1&&Bt===S.requestAnimationFrame||((Bt=S.requestAnimationFrame)||function(t){var r,i=function(){clearTimeout(o),Wt&&cancelAnimationFrame(r),setTimeout(t)},o=setTimeout(i,100);Wt&&(r=requestAnimationFrame(i))})(ki))},S.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Be),t.__h=t.__h.filter(function(r){return!r.__||dt(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],S.__e(r,t.__v)}}),Ft&&Ft(n,e)},S.unmount=function(n){Ht&&Ht(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{Be(r)}catch(i){e=i}}),e&&S.__e(e,t.__v))};var Wt=typeof requestAnimationFrame=="function";function Be(n){var e=n.__c;typeof e=="function"&&(n.__c=void 0,e())}function dt(n){n.__c=n.__()}function xi(n,e){for(var t in e)n[t]=e[t];return n}function qt(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var r in e)if(r!=="__source"&&n[r]!==e[r])return!0;return!1}function Ye(n){this.props=n}(Ye.prototype=new te).isPureReactComponent=!0,Ye.prototype.shouldComponentUpdate=function(n,e){return qt(this.props,n)||qt(this.state,e)};var Vt=S.__b;S.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Vt&&Vt(n)};var Ci=S.__e;S.__e=function(n,e,t){if(n.then){for(var r,i=e;i=i.__;)if((r=i.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e)}Ci(n,e,t)};var Yt=S.unmount;function rt(){this.__u=0,this.t=null,this.__b=null}function Wn(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function Me(){this.u=null,this.o=null}S.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&n.__h===!0&&(n.type=null),Yt&&Yt(n)},(rt.prototype=new te).__c=function(n,e){var t=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(t);var i=Wn(r.__v),o=!1,s=function(){o||(o=!0,t.__R=null,i?i(l):l())};t.__R=s;var l=function(){if(!--r.__u){if(r.state.__e){var u=r.state.__e;r.__v.__k[0]=function f(d,p,h){return d&&(d.__v=null,d.__k=d.__k&&d.__k.map(function(b){return f(b,p,h)}),d.__c&&d.__c.__P===p&&(d.__e&&h.insertBefore(d.__e,d.__d),d.__c.__e=!0,d.__c.__P=h)),d}(u,u.__c.__P,u.__c.__O)}var a;for(r.setState({__e:r.__b=null});a=r.t.pop();)a.forceUpdate()}},c=e.__h===!0;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(s,s)},rt.prototype.componentWillUnmount=function(){this.t=[]},rt.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(s,l,c){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),s.__c.__H=null),(s=xi({},s)).__c!=null&&(s.__c.__P===c&&(s.__c.__P=l),s.__c=null),s.__k=s.__k&&s.__k.map(function(u){return o(u,l,c)})),s}(this.__b,t,r.__O=r.__P)}this.__b=null}var i=e.__e&&st(ke,null,n.fallback);return i&&(i.__h=null),[st(ke,null,e.__e?null:n.children),i]};var Kt=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(Me.prototype=new te).__e=function(n){var e=this,t=Wn(e.__v),r=e.o.get(n);return r[0]++,function(i){var o=function(){e.props.revealOrder?(r.push(i),Kt(e,n,r)):i()};t?t(o):o()}},Me.prototype.render=function(n){this.u=null,this.o=new Map;var e=We(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Me.prototype.componentDidUpdate=Me.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){Kt(n,t,e)})};var Si=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ei=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$i=typeof document<"u",Ti=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(n)};te.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(te.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var Gt=S.event;function Oi(){}function Ri(){return this.cancelBubble}function Pi(){return this.defaultPrevented}S.event=function(n){return Gt&&(n=Gt(n)),n.persist=Oi,n.isPropagationStopped=Ri,n.isDefaultPrevented=Pi,n.nativeEvent=n};var Xt={configurable:!0,get:function(){return this.class}},Qt=S.vnode;S.vnode=function(n){var e=n.type,t=n.props,r=t;if(typeof e=="string"){var i=e.indexOf("-")===-1;for(var o in r={},t){var s=t[o];$i&&o==="children"&&e==="noscript"||o==="value"&&"defaultValue"in t&&s==null||(o==="defaultValue"&&"value"in t&&t.value==null?o="value":o==="download"&&s===!0?s="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!Ti(t.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():i&&Ei.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),r[o]=s)}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=We(t.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=We(t.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),n.props=r,t.class!=t.className&&(Xt.enumerable="className"in t,t.className!=null&&(r.class=t.className),Object.defineProperty(r,"className",Xt))}n.$$typeof=Si,Qt&&Qt(n)};var Jt=S.__r;S.__r=function(n){Jt&&Jt(n),n.__c};const ji={light:"outline",dark:"solid"};class Mi extends Ye{renderIcon(e){const{icon:t}=e;if(t){if(t.svg)return m("span",{class:"flex",dangerouslySetInnerHTML:{__html:t.svg}});if(t.src)return m("img",{src:t.src})}const r=Ve.categories[e.id]||Ve.categories.custom,i=this.props.icons=="auto"?ji[this.props.theme]:this.props.icons;return r[i]||r}render(){let e=null;return m("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:m("div",{class:"flex relative",children:[this.categories.map((t,r)=>{const i=t.name||V.categories[t.id],o=!this.props.unfocused&&t.id==this.state.categoryId;return o&&(e=r),m("button",{"aria-label":i,"aria-selected":o||void 0,title:i,type:"button",class:"flex flex-grow flex-center",onMouseDown:s=>s.preventDefault(),onClick:()=>{this.props.onClick({category:t,i:r})},children:this.renderIcon(t)})}),m("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=P.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class Ai extends Ye{shouldComponentUpdate(e){for(let t in e)if(t!="children"&&e[t]!=this.props[t])return!0;return!1}render(){return this.props.children}}const Ae={rowsPerRender:10};class Li extends te{getInitialState(e=this.props){return{skin:de.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=V.rtl?"rtl":"ltr",this.refs={menu:se(),navigation:se(),scroll:se(),search:se(),searchInput:se(),skinToneButton:se(),skinToneRadio:se()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const t in e)this.nextState[t]=e[t];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let t=!1;for(const i in this.nextState)this.props[i]=this.nextState[i],(i==="custom"||i==="categories")&&(t=!0);delete this.nextState;const r=this.getInitialState();if(t)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(e={}){await Qe(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const t of this.observers)e.includes(t)||t.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=P;this.refs.categories=new Map;const t=P.categories.map(i=>i.id).join(",");this.navKey&&this.navKey!=t&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=t,this.grid=[],this.grid.setsize=0;const r=(i,o)=>{const s=[];s.__categoryId=o.id,s.__index=i.length,this.grid.push(s);const l=this.grid.length-1,c=l%Ae.rowsPerRender?{}:se();return c.index=l,c.posinset=this.grid.setsize+1,i.push(c),s};for(let i of e){const o=[];let s=r(o,i);for(let l of i.emojis)s.length==this.getPerLine()&&(s=r(o,i)),this.grid.setsize+=1,s.push(l);this.refs.categories.set(i.id,{root:se(),rows:o})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:t,emojiButtonSize:r}=e,i=()=>{const{width:s}=t.getBoundingClientRect();return Math.floor(s/r)},o=new ResizeObserver(()=>{this.unobserve({except:o}),this.setState({perLine:i()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return o.observe(t),this.observers.push(o),i()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,t]){const r=this.state.searchResults||this.grid,i=r[e]&&r[e][t];if(i)return _e.get(i)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const t=new Map,r=s=>{s!=e.state.categoryId&&e.setState({categoryId:s})},i={root:this.refs.scroll.current,threshold:[0,1]},o=new IntersectionObserver(s=>{for(const c of s){const u=c.target.dataset.id;t.set(u,c.intersectionRatio)}const l=[...t];for(const[c,u]of l)if(u){r(c);break}},i);for(const{root:s}of this.refs.categories.values())o.observe(s.current);this.observers.push(o)}observeRows(){const e={...this.state.visibleRows},t=new IntersectionObserver(r=>{for(const i of r){const o=parseInt(i.target.dataset.index);i.isIntersecting?e[o]=!0:delete e[o]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Ae.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Ae.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const i of r)i.current&&t.observe(i.current);this.observers.push(t)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:t,left:r,right:i,up:o,down:s}){const l=this.state.searchResults||this.grid;if(!l.length)return;let[c,u]=this.state.pos;const a=(()=>{if(c==0&&u==0&&!e.repeat&&(r||o))return null;if(c==-1)return!e.repeat&&(i||s)&&t.selectionStart==t.value.length?[0,0]:null;if(r||i){let f=l[c];const d=r?-1:1;if(u+=d,!f[u]){if(c+=d,f=l[c],!f)return c=r?0:l.length-1,u=r?0:l[c].length-1,[c,u];u=r?f.length-1:0}return[c,u]}if(o||s){c+=o?-1:1;const f=l[c];return f?(f[u]||(u=f.length-1),[c,u]):(c=o?0:l.length-1,u=o?0:l[c].length-1,[c,u])}})();if(a)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:a,keyboard:!0},()=>{this.scrollTo({row:a[0]})})}scrollTo({categoryId:e,row:t}){const r=this.state.searchResults||this.grid;if(!r.length)return;const i=this.refs.scroll.current,o=i.getBoundingClientRect();let s=0;if(t>=0&&(e=r[t].__categoryId),e&&(s=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(o.top-i.scrollTop)+1),t>=0)if(!t)s=0;else{const l=r[t].__index,c=s+l*this.props.emojiButtonSize,u=c+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(c<i.scrollTop)s=c;else if(u>i.scrollTop+o.height)s=u-o.height;else return}this.ignoreMouse(),i.scrollTop=s}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:t,pos:r}){if(this.props.onEmojiSelect&&(!t&&r&&(t=this.getEmojiByPos(r)),t)){const i=vi(t,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Ln.add(i,this.props),this.props.onEmojiSelect(i,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),de.set("skin",e)}renderNav(){return m(Mi,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),t=this.state.searchResults&&!this.state.searchResults.length;return m("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[m("div",{class:"flex flex-middle flex-grow",children:[m("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:m(lt,{emoji:e,id:t?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),m("div",{class:`margin-${this.dir[0]}`,children:e||t?m("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[m("div",{class:"preview-title ellipsis",children:e?e.name:V.search_no_results_1}),m("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:V.search_no_results_2})]}):m("div",{class:"preview-placeholder color-c",children:V.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:t,posinset:r,grid:i}){const o=this.props.emojiButtonSize,s=this.state.tempSkin||this.state.skin,c=(e.skins[s-1]||e.skins[0]).native,u=mi(this.state.pos,t),a=t.concat(e.id).join("");return m(Ai,{selected:u,skin:s,size:o,children:m("button",{"aria-label":c,"aria-selected":u||void 0,"aria-posinset":r,"aria-setsize":i.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:f=>this.handleEmojiClick({e:f,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(t),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[m("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),m(lt,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:s,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},a)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return m("div",{children:[m("div",{class:"spacer"}),m("div",{class:"flex flex-middle",children:[m("div",{class:"search relative flex-grow",children:[m("input",{type:"search",ref:this.refs.searchInput,placeholder:V.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),m("span",{class:"icon loupe flex",children:Ve.search.loupe}),this.state.searchResults&&m("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ve.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?m("div",{class:"category",ref:this.refs.search,children:[m("div",{class:`sticky padding-small align-${this.dir[0]}`,children:V.categories.search}),m("div",{children:e.length?e.map((t,r)=>m("div",{class:"flex",children:t.map((i,o)=>this.renderEmojiButton(i,{pos:[r,o],posinset:r*this.props.perLine+o+1,grid:e}))})):m("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&m("a",{onClick:this.props.onAddCustomEmoji,children:V.add_custom})})})]}):null}renderCategories(){const{categories:e}=P,t=!!this.state.searchResults,r=this.getPerLine();return m("div",{style:{visibility:t?"hidden":void 0,display:t?"none":void 0,height:"100%"},children:e.map(i=>{const{root:o,rows:s}=this.refs.categories.get(i.id);return m("div",{"data-id":i.target?i.target.id:i.id,class:"category",ref:o,children:[m("div",{class:`sticky padding-small align-${this.dir[0]}`,children:i.name||V.categories[i.id]}),m("div",{class:"relative",style:{height:s.length*this.props.emojiButtonSize},children:s.map((l,c)=>{const u=l.index-l.index%Ae.rowsPerRender,a=this.state.visibleRows[u],f="current"in l?l:void 0;if(!a&&!f)return null;const d=c*r,p=d+r,h=i.emojis.slice(d,p);return h.length<r&&h.push(...new Array(r-h.length)),m("div",{"data-index":l.index,ref:f,class:"flex row",style:{top:c*this.props.emojiButtonSize},children:a&&h.map((b,w)=>{if(!b)return m("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=_e.get(b);return this.renderEmojiButton(C,{pos:[l.index,w],posinset:l.posinset+w,grid:this.grid})})},l.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:m("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:m("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":V.skins.choose,title:V.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:m("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),t=e?e.name:"";return m("div",{"aria-live":"polite",class:"sr-only",children:t})}renderSkins(){const t=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),i={};return this.dir=="ltr"?i.right=r.right-t.right-3:i.left=t.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?i.bottom=r.bottom-t.top+6:(i.top=t.bottom-r.top+3,i.bottom="auto"),m("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":V.skins.choose,class:"menu hidden","data-position":i.top?"top":"bottom",style:i,children:[...Array(6).keys()].map(o=>{const s=o+1,l=this.state.skin==s;return m("div",{children:[m("input",{type:"radio",name:"skin-tone",value:s,"aria-label":V.skins[s],ref:l?this.refs.skinToneRadio:null,defaultChecked:l,onChange:()=>this.handleSkinMouseOver(s),onKeyDown:c=>{(c.code=="Enter"||c.code=="Space"||c.code=="Tab")&&(c.preventDefault(),this.handleSkinClick(s))}}),m("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(s),onMouseEnter:()=>this.handleSkinMouseOver(s),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[m("span",{class:`skin-tone skin-tone-${s}`}),m("span",{class:"margin-small-lr",children:V.skins[s]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return m("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&m("div",{class:"padding-lr",children:this.renderSearch()}),m("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:m("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),Q(this,"handleClickOutside",t=>{const{element:r}=this.props;t.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(t))}),Q(this,"handleBaseClick",t=>{this.state.showSkins&&(t.target.closest(".menu")||(t.preventDefault(),t.stopImmediatePropagation(),this.closeSkins()))}),Q(this,"handleBaseKeydown",t=>{this.state.showSkins&&t.key=="Escape"&&(t.preventDefault(),t.stopImmediatePropagation(),this.closeSkins())}),Q(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Q(this,"handleSearchInput",async()=>{const t=this.refs.searchInput.current;if(!t)return;const{value:r}=t,i=await _e.search(r),o=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!i)return this.setState({searchResults:i,pos:[-1,-1]},o);const s=t.selectionStart==t.value.length?[0,0]:[-1,-1],l=[];l.setsize=i.length;let c=null;for(let u of i)(!l.length||c.length==this.getPerLine())&&(c=[],c.__categoryId="search",c.__index=l.length,l.push(c)),c.push(u);this.ignoreMouse(),this.setState({searchResults:l,pos:s},o)}),Q(this,"handleSearchKeyDown",t=>{const r=t.currentTarget;switch(t.stopImmediatePropagation(),t.key){case"ArrowLeft":this.navigate({e:t,input:r,left:!0});break;case"ArrowRight":this.navigate({e:t,input:r,right:!0});break;case"ArrowUp":this.navigate({e:t,input:r,up:!0});break;case"ArrowDown":this.navigate({e:t,input:r,down:!0});break;case"Enter":t.preventDefault(),this.handleEmojiClick({e:t,pos:this.state.pos});break;case"Escape":t.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Q(this,"clearSearch",()=>{const t=this.refs.searchInput.current;t&&(t.value="",t.focus(),this.handleSearchInput())}),Q(this,"handleCategoryClick",({category:t,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:t.id})}),Q(this,"openSkins",t=>{const{currentTarget:r}=t,i=r.getBoundingClientRect();this.setState({showSkins:i},async()=>{await gi(2);const o=this.refs.menu.current;o&&(o.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class wt extends _i{async connectedCallback(){const e=zn(this.props,ae,this);e.element=this,e.ref=t=>{this.component=t},await Qe(e),!this.disconnected&&Mn(m(Li,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:_n(qn)})}}Q(wt,"Props",ae);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",wt);var qn={};qn=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;function Di(n){const e=y.useRef(null),t=y.useRef(null);return t.current&&t.current.update(n),y.useEffect(()=>(t.current=new wt({...n,ref:e}),()=>{t.current=null}),[]),R.createElement("div",{ref:e})}function Vn(n){var e=n.theme,t=n.onSelectEmoji,r=n.disableRecent,i=n.customEmojis,o=y.useMemo(function(){var s=[];return r||s.push("frequent"),s=[].concat(mn(s),["people","nature","foods","activity","places","objects","symbols","flags"]),s},[r]);return R.createElement(Di,{data:void 0,theme:e,previewPosition:"none",onEmojiSelect:t,custom:i,categories:o,set:"apple"})}Vn.propTypes={theme:Te.oneOf(["light","dark","auto"]),onSelectEmoji:Te.func,disableRecent:Te.bool,customEmojis:Te.array};var Ni=y.memo(Vn);function Zt(n){var e=n.showPicker,t=n.theme,r=n.handleSelectEmoji,i=n.disableRecent,o=n.customEmojis;return R.createElement("div",{className:"react-emoji-picker--container"},e&&R.createElement("div",{className:"react-emoji-picker--wrapper",onClick:function(l){return l.stopPropagation()}},R.createElement("div",{className:"react-emoji-picker"},R.createElement(Ni,{theme:t,onSelectEmoji:r,disableRecent:i,customEmojis:o}))))}var Bi=function(e){var t=e.theme,r=e.keepOpened,i=e.disableRecent,o=e.customEmojis,s=e.addSanitizeFn,l=e.addPolluteFn,c=e.appendContent,u=e.buttonElement,a=y.useState(!1),f=ue(a,2),d=f[0],p=f[1],h=y.useState(),b=ue(h,2),w=b[0],C=b[1];y.useEffect(function(){s(Fr)},[s]),y.useEffect(function(){l(vn)},[l]),y.useEffect(function(){function E(_){var L=_.target;L.classList.contains("react-input-emoji--button")||L.classList.contains("react-input-emoji--button--icon")||p(!1)}return document.addEventListener("click",E),function(){document.removeEventListener("click",E)}},[]);function T(E){E.stopPropagation(),E.preventDefault(),p(function(_){return!_})}function $(E){c(Ur(E)),r||p(function(_){return!_})}return y.useEffect(function(){u!=null&&u.style&&(u.style.position="relative",C(u))},[u]),w?br.createPortal(R.createElement(R.Fragment,null,R.createElement(Zt,{showPicker:d,theme:t,handleSelectEmoji:$,disableRecent:i,customEmojis:o}),R.createElement(Rt,{showPicker:d,toggleShowPicker:T,buttonElement:w})),w):R.createElement(R.Fragment,null,R.createElement(Zt,{showPicker:d,theme:t,handleSelectEmoji:$,disableRecent:i,customEmojis:o}),R.createElement(Rt,{showPicker:d,toggleShowPicker:T}))};function zi(){var n=Yn();if(!n)return null;var e=n.text.substring(n.begin,n.end);return e||null}function Ii(){var n=Yn();n&&n.element.deleteData(n.begin,n.end-n.begin)}function Yn(){var n=ht();if(!n)return null;var e=n.element,t=n.caretOffset,r=e.textContent,i=r.lastIndexOf("@");return i===-1||i>=t||i!==0&&r[i-1]!==" "?null:{begin:i,end:t,text:r,element:e}}function ht(){var n=Ui();if(n===null)return null;var e=0;if(typeof window.getSelection<"u"){var t=window.getSelection().getRangeAt(0),r=t.cloneRange();r.selectNodeContents(n),r.setEnd(t.endContainer,t.endOffset),e=r.toString().length}else if(typeof document.selection<"u"&&document.selection.type!="Control"){var i=document.selection.createRange(),o=document.body.createTextRange();o.moveToElementText(n),o.setEndPoint("EndToEnd",i),e=o.text.length}return{element:n,caretOffset:e}}function Ui(){var n=document.getSelection().anchorNode;return(n==null?void 0:n.nodeType)==3?n:null}function Fi(n){var e=y.useState(!1),t=ue(e,2),r=t[0],i=t[1],o=y.useState([]),s=ue(o,2),l=s[0],c=s[1],u=y.useState(null),a=ue(u,2),f=a[0],d=a[1],p=y.useCallback(function(){Ii(),c([])},[]),h=y.useCallback($t(Oe().mark(function C(){var T,$;return Oe().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(T=zi(),d(T),T!==null){_.next=6;break}c([]),_.next=12;break;case 6:return i(!0),_.next=9,n(T);case 9:$=_.sent,i(!1),c($);case 12:case"end":return _.stop()}},C)})),[n]),b=y.useCallback(function(){var C=$t(Oe().mark(function T($){var E,_;return Oe().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(typeof n=="function"){z.next=2;break}return z.abrupt("return");case 2:$.key==="Backspace"&&(E=ht())!==null&&E!==void 0&&E.element.parentElement.hasAttribute("data-mention-id")?(_=ht(),_.element.parentElement.remove()):["ArrowUp","ArrowDown","Esc","Escape"].includes($.key)||h();case 3:case"end":return z.stop()}},T)}));return function(T){return C.apply(this,arguments)}}(),[h,n]),w=y.useCallback(function(){h()},[h]);return{mentionSearchText:f,mentionUsers:l,onKeyUp:b,onFocus:w,onSelectUser:p,loading:r}}var Hi=function(e,t){var r=e.users,i=e.mentionSearchText,o=e.onSelect,s=e.addEventListener,l=y.useState(0),c=ue(l,2),u=c[0],a=c[1];y.useImperativeHandle(t,function(){return{prevUser:function(){a(function(b){return b===0?0:b-1})},nextUser:function(){a(function(b){return b===r.length-1?r.length-1:b+1})}}}),y.useEffect(function(){a(0)},[r]);function f(h,b){return'<span class="react-input-emoji--mention--item--name__selected" data-testid="metion-selected-word">'.concat(h,"</span>").concat(b)}var d=y.useMemo(function(){var h=i?i.substring(1).toLocaleLowerCase():"";return r.map(function(b){var w=b.name;if(i&&i.length>1)if(b.name.toLowerCase().startsWith(h))w=f(b.name.substring(0,h.length),b.name.substring(h.length));else{var C=b.name.split(" ");w=C.map(function(T){return T.toLocaleLowerCase().startsWith(h)?f(T.substring(0,h.length),T.substring(h.length)):T}).join(" ")}return St(St({},b),{},{nameHtml:w})})},[i,r]);function p(h){return function(b){b.stopPropagation(),b.preventDefault(),o(h)}}return y.useEffect(function(){var h=s("enter",function(b){b.stopPropagation(),b.preventDefault(),o(d[u])});return function(){h()}},[s,o,u,d]),R.createElement("ul",{className:"react-input-emoji--mention--list","data-testid":"mention-user-list"},d.map(function(h,b){return R.createElement("li",{key:h.id},R.createElement("button",{type:"button",onClick:p(h),className:"react-input-emoji--mention--item".concat(u===b?" react-input-emoji--mention--item__selected":""),onMouseOver:function(){return a(b)}},R.createElement("img",{className:"react-input-emoji--mention--item--img",src:h.image}),R.createElement("div",{className:"react-input-emoji--mention--item--name",dangerouslySetInnerHTML:{__html:h.nameHtml}})))}))},Kn=y.forwardRef(Hi);Kn.propTypes={users:Te.array.isRequired};var Wi=function(e){var t=e.searchMention,r=e.addEventListener,i=e.appendContent,o=e.addSanitizeFn,s=y.useRef(null),l=y.useState(!1),c=ue(l,2),u=c[0],a=c[1],f=Fi(t),d=f.mentionSearchText,p=f.mentionUsers,h=f.loading,b=f.onKeyUp,w=f.onFocus,C=f.onSelectUser;y.useEffect(function(){o(function($){var E=document.createElement("div");E.innerHTML=$;var _=Array.prototype.slice.call(E.querySelectorAll(".react-input-emoji--mention--text"));return _.forEach(function(L){E.innerHTML=E.innerHTML.replace(L.outerHTML,"@[".concat(L.dataset.mentionName,"](userId:").concat(L.dataset.mentionId,")"))}),E.innerHTML})},[o]),y.useEffect(function(){a(p.length>0)},[p]),y.useEffect(function(){function $(){a(!1)}return document.addEventListener("click",$),function(){document.removeEventListener("click",$)}},[]),y.useEffect(function(){var $=r("keyUp",b);return function(){$()}},[r,b]),y.useEffect(function(){function $(_){switch(_.key){case"Esc":case"Escape":a(!1);break}}var E=r("keyDown",$);return function(){E()}},[r]),y.useEffect(function(){var $=r("focus",w);return function(){$()}},[r,w]),y.useEffect(function(){if(u){var $=r("arrowUp",function(_){_.stopPropagation(),_.preventDefault(),s.current.prevUser()}),E=r("arrowDown",function(_){_.stopPropagation(),_.preventDefault(),s.current.nextUser()});return function(){$(),E()}}},[r,u]);function T($){C(),i('<span class="react-input-emoji--mention--text" data-mention-id="'.concat($.id,'" data-mention-name="').concat($.name,'">@').concat($.name,"</span> "))}return R.createElement(R.Fragment,null,h?R.createElement("div",{className:"react-input-emoji--mention--container"},R.createElement("div",{className:"react-input-emoji--mention--loading"},R.createElement("div",{className:"react-input-emoji--mention--loading--spinner"},"Loading..."))):u&&R.createElement("div",{className:"react-input-emoji--mention--container",onClick:function(E){return E.stopPropagation()}},R.createElement(Kn,{ref:s,mentionSearchText:d,users:p,onSelect:T,addEventListener:r})))};function pe(){var n=[];return{subscribe:function(t){return n.push(t),function(){n=n.filter(function(r){return r!==t})}},publish:function(t){n.forEach(function(r){return r(t)})},get currentListerners(){return n}}}function qi(){var n=y.useMemo(function(){return{keyDown:pe(),keyUp:pe(),arrowUp:pe(),arrowDown:pe(),enter:pe(),focus:pe(),blur:pe()}},[]),e=y.useCallback(function(t,r){return n[t].subscribe(r)},[n]);return{addEventListener:e,listeners:n}}function Vi(){var n=y.useRef([]),e=y.useCallback(function(r){n.current.push(r)},[]),t=y.useCallback(function(r){var i=n.current.reduce(function(o,s){return s(o)},r);return i},[]);return{addPolluteFn:e,pollute:t}}function Yi(n,e){var t=n.onChange,r=n.onEnter,i=n.onResize,o=n.onClick,s=n.onFocus,l=n.onBlur,c=n.onKeyDown,u=n.theme,a=n.cleanOnEnter,f=n.placeholder,d=n.maxLength,p=n.keepOpened,h=n.inputClass,b=n.disableRecent,w=n.tabIndex,C=n.value,T=n.customEmojis,$=n.searchMention,E=n.buttonElement,_=n.borderRadius,L=n.borderColor,z=n.fontSize,oe=n.fontFamily,U=y.useRef(null),v=qi(),g=v.addEventListener,k=v.listeners,O=wn(),x=O.addSanitizeFn,j=O.sanitize,A=O.sanitizedTextRef,W=Vi(),X=W.addPolluteFn,D=W.pollute,F=y.useCallback(function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";U.current!==null&&(U.current.html=vn(I),A.current=I)},[A]),K=y.useCallback(function(I){F(I)},[F]),he=Vr(U,i,t);qr({ref:e,setValue:K,textInputRef:U,emitChange:he}),y.useEffect(function(){A.current!==C&&K(C)},[A,K,C]),y.useEffect(function(){F()},[F]),y.useEffect(function(){function I(be){if(typeof d<"u"&&be.key!=="Backspace"&&U.current!==null&&Ot(U.current)>=d&&be.preventDefault(),be.key==="Enter"&&U.current){be.preventDefault();var gr=j(U.current.html);return he(A.current),typeof r=="function"&&k.enter.currentListerners.length===0&&r(gr),a&&k.enter.currentListerners.length===0&&F(""),typeof c=="function"&&c(be.nativeEvent),!1}return typeof c=="function"&&c(be.nativeEvent),!0}var Z=g("keyDown",I);return function(){Z()}},[g,a,he,k.enter.currentListerners.length,d,r,c,j,A,F]),y.useEffect(function(){function I(){typeof o=="function"&&o(),typeof s=="function"&&s()}var Z=g("focus",I);return function(){Z()}},[g,o,s]),y.useEffect(function(){function I(){typeof l=="function"&&l()}var Z=g("blur",I);return function(){Z()}},[g,l]);function je(I){j(I),he(A.current)}function ve(I){typeof d<"u"&&U.current!==null&&Ot(U.current)>=d||U.current!==null&&U.current.appendContent(I)}function fe(I){I.clipboardData.setData("text",A.current),I.preventDefault()}function mr(I){I.preventDefault();var Z;I.clipboardData&&(Z=I.clipboardData.getData("text/plain"),Z=D(Z),document.execCommand("insertHTML",!1,Z))}return R.createElement("div",{className:"react-emoji"},R.createElement(Wi,{searchMention:$,addEventListener:g,appendContent:ve,addSanitizeFn:x}),R.createElement(Gr,{ref:U,onCopy:fe,onPaste:mr,onBlur:k.blur.publish,onFocus:k.focus.publish,onArrowUp:k.arrowUp.publish,onArrowDown:k.arrowDown.publish,onKeyUp:k.keyUp.publish,onKeyDown:k.keyDown.publish,onEnter:k.enter.publish,placeholder:f,style:{borderRadius:_,borderColor:L,fontSize:z,fontFamily:oe},tabIndex:w,className:h,onChange:je}),R.createElement(Bi,{theme:u,keepOpened:p,disableRecent:b,customEmojis:T,addSanitizeFn:x,addPolluteFn:X,appendContent:ve,buttonElement:E}))}var Gn=y.forwardRef(Yi);Gn.defaultProps={theme:"auto",height:30,placeholder:"Type a message",borderRadius:21,borderColor:"#EAEAEA",fontSize:15,fontFamily:"sans-serif",tabIndex:0,customEmojis:[]};function Ki({data:n}){const{getAChat:e,sentMessage:t}=pn(),{chatId:r,userId:i,socket:o,setChat:s,chat:l}=n,[c,u]=y.useState("");async function a(d){try{const p={chatId:r,sender:i,message:d};u("");const h=await t(p);await o.emit("newMessage",h.data);const b=h.data;s(w=>({...w,messages:[...w.messages,b]}))}catch(p){console.log(p)}}return ee("div",{className:"flex justify-center items-center",children:[B("div",{className:"w-[100%]",children:B(Gn,{value:c,onChange:u,cleanOnEnter:!0,onEnter:a,placeholder:"Type a message"})}),B("p",{className:"dark:text-white text-gray-600 text-2xl hover:cursor-pointer",onClick:async()=>{try{const d={chatId:r,sender:i,message:c};u("");const p=await t(d);await o.emit("newMessage",p.data);const h=p.data;s(b=>({...b,messages:[...b.messages,h]}))}catch(d){console.log(d)}},children:B(yr,{})})]})}function ge(n){if(n===null||n===!0||n===!1)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Y(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function ie(n){Y(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||fn(n)==="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Gi(n,e){Y(2,arguments);var t=ie(n).getTime(),r=ge(e);return new Date(t+r)}var Xi={};function Je(){return Xi}function Qi(n){var e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),n.getTime()-e.getTime()}function Ji(n){return Y(1,arguments),n instanceof Date||fn(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Zi(n){if(Y(1,arguments),!Ji(n)&&typeof n!="number")return!1;var e=ie(n);return!isNaN(Number(e))}function eo(n,e){Y(2,arguments);var t=ge(e);return Gi(n,-t)}var to=864e5;function no(n){Y(1,arguments);var e=ie(n),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=t-r;return Math.floor(i/to)+1}function Ke(n){Y(1,arguments);var e=1,t=ie(n),r=t.getUTCDay(),i=(r<e?7:0)+r-e;return t.setUTCDate(t.getUTCDate()-i),t.setUTCHours(0,0,0,0),t}function Xn(n){Y(1,arguments);var e=ie(n),t=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(t+1,0,4),r.setUTCHours(0,0,0,0);var i=Ke(r),o=new Date(0);o.setUTCFullYear(t,0,4),o.setUTCHours(0,0,0,0);var s=Ke(o);return e.getTime()>=i.getTime()?t+1:e.getTime()>=s.getTime()?t:t-1}function ro(n){Y(1,arguments);var e=Xn(n),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var r=Ke(t);return r}var io=6048e5;function oo(n){Y(1,arguments);var e=ie(n),t=Ke(e).getTime()-ro(e).getTime();return Math.round(t/io)+1}function Ge(n,e){var t,r,i,o,s,l,c,u;Y(1,arguments);var a=Je(),f=ge((t=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&i!==void 0?i:a.weekStartsOn)!==null&&r!==void 0?r:(c=a.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=ie(n),p=d.getUTCDay(),h=(p<f?7:0)+p-f;return d.setUTCDate(d.getUTCDate()-h),d.setUTCHours(0,0,0,0),d}function Qn(n,e){var t,r,i,o,s,l,c,u;Y(1,arguments);var a=ie(n),f=a.getUTCFullYear(),d=Je(),p=ge((t=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:d.firstWeekContainsDate)!==null&&r!==void 0?r:(c=d.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(f+1,0,p),h.setUTCHours(0,0,0,0);var b=Ge(h,e),w=new Date(0);w.setUTCFullYear(f,0,p),w.setUTCHours(0,0,0,0);var C=Ge(w,e);return a.getTime()>=b.getTime()?f+1:a.getTime()>=C.getTime()?f:f-1}function so(n,e){var t,r,i,o,s,l,c,u;Y(1,arguments);var a=Je(),f=ge((t=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:a.firstWeekContainsDate)!==null&&r!==void 0?r:(c=a.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1),d=Qn(n,e),p=new Date(0);p.setUTCFullYear(d,0,f),p.setUTCHours(0,0,0,0);var h=Ge(p,e);return h}var ao=6048e5;function co(n,e){Y(1,arguments);var t=ie(n),r=Ge(t,e).getTime()-so(t,e).getTime();return Math.round(r/ao)+1}function N(n,e){for(var t=n<0?"-":"",r=Math.abs(n).toString();r.length<e;)r="0"+r;return t+r}var lo={y:function(e,t){var r=e.getUTCFullYear(),i=r>0?r:1-r;return N(t==="yy"?i%100:i,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):N(r+1,2)},d:function(e,t){return N(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return N(e.getUTCHours()%12||12,t.length)},H:function(e,t){return N(e.getUTCHours(),t.length)},m:function(e,t){return N(e.getUTCMinutes(),t.length)},s:function(e,t){return N(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return N(o,t.length)}};const ce=lo;var ye={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},uo={G:function(e,t,r){var i=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return ce.y(e,t)},Y:function(e,t,r,i){var o=Qn(e,i),s=o>0?o:1-o;if(t==="YY"){var l=s%100;return N(l,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):N(s,t.length)},R:function(e,t){var r=Xn(e);return N(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return N(r,t.length)},Q:function(e,t,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return N(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return N(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,r){var i=e.getUTCMonth();switch(t){case"M":case"MM":return ce.M(e,t);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,r){var i=e.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return N(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,r,i){var o=co(e,i);return t==="wo"?r.ordinalNumber(o,{unit:"week"}):N(o,t.length)},I:function(e,t,r){var i=oo(e);return t==="Io"?r.ordinalNumber(i,{unit:"week"}):N(i,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):ce.d(e,t)},D:function(e,t,r){var i=no(e);return t==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):N(i,t.length)},E:function(e,t,r){var i=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return N(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return N(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,r){var i=e.getUTCDay(),o=i===0?7:i;switch(t){case"i":return String(o);case"ii":return N(o,t.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,r){var i=e.getUTCHours(),o;switch(i===12?o=ye.noon:i===0?o=ye.midnight:o=i/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,r){var i=e.getUTCHours(),o;switch(i>=17?o=ye.evening:i>=12?o=ye.afternoon:i>=4?o=ye.morning:o=ye.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return ce.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):ce.H(e,t)},K:function(e,t,r){var i=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(i,{unit:"hour"}):N(i,t.length)},k:function(e,t,r){var i=e.getUTCHours();return i===0&&(i=24),t==="ko"?r.ordinalNumber(i,{unit:"hour"}):N(i,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):ce.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):ce.s(e,t)},S:function(e,t){return ce.S(e,t)},X:function(e,t,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return tn(s);case"XXXX":case"XX":return me(s);case"XXXXX":case"XXX":default:return me(s,":")}},x:function(e,t,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(t){case"x":return tn(s);case"xxxx":case"xx":return me(s);case"xxxxx":case"xxx":default:return me(s,":")}},O:function(e,t,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+en(s,":");case"OOOO":default:return"GMT"+me(s,":")}},z:function(e,t,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+en(s,":");case"zzzz":default:return"GMT"+me(s,":")}},t:function(e,t,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return N(s,t.length)},T:function(e,t,r,i){var o=i._originalDate||e,s=o.getTime();return N(s,t.length)}};function en(n,e){var t=n>0?"-":"+",r=Math.abs(n),i=Math.floor(r/60),o=r%60;if(o===0)return t+String(i);var s=e||"";return t+String(i)+s+N(o,2)}function tn(n,e){if(n%60===0){var t=n>0?"-":"+";return t+N(Math.abs(n)/60,2)}return me(n,e)}function me(n,e){var t=e||"",r=n>0?"-":"+",i=Math.abs(n),o=N(Math.floor(i/60),2),s=N(i%60,2);return r+o+t+s}const ho=uo;var nn=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Jn=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},fo=function(e,t){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return nn(e,t);var s;switch(i){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",nn(i,t)).replace("{{time}}",Jn(o,t))},po={p:Jn,P:fo};const mo=po;var go=["D","DD"],vo=["YY","YYYY"];function bo(n){return go.indexOf(n)!==-1}function yo(n){return vo.indexOf(n)!==-1}function rn(n,e,t){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var wo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_o=function(e,t,r){var i,o=wo[e];return typeof o=="string"?i=o:t===1?i=o.one:i=o.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const ko=_o;function it(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,r=n.formats[t]||n.formats[n.defaultWidth];return r}}var xo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Co={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},So={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Eo={date:it({formats:xo,defaultWidth:"full"}),time:it({formats:Co,defaultWidth:"full"}),dateTime:it({formats:So,defaultWidth:"full"})};const $o=Eo;var To={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Oo=function(e,t,r,i){return To[e]};const Ro=Oo;function Se(n){return function(e,t){var r=t!=null&&t.context?String(t.context):"standalone",i;if(r==="formatting"&&n.formattingValues){var o=n.defaultFormattingWidth||n.defaultWidth,s=t!=null&&t.width?String(t.width):o;i=n.formattingValues[s]||n.formattingValues[o]}else{var l=n.defaultWidth,c=t!=null&&t.width?String(t.width):n.defaultWidth;i=n.values[c]||n.values[l]}var u=n.argumentCallback?n.argumentCallback(e):e;return i[u]}}var Po={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Mo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ao={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Lo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Do={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},No=function(e,t){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Bo={ordinalNumber:No,era:Se({values:Po,defaultWidth:"wide"}),quarter:Se({values:jo,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Se({values:Mo,defaultWidth:"wide"}),day:Se({values:Ao,defaultWidth:"wide"}),dayPeriod:Se({values:Lo,defaultWidth:"wide",formattingValues:Do,defaultFormattingWidth:"wide"})};const zo=Bo;function Ee(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,i=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],l=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(l)?Uo(l,function(f){return f.test(s)}):Io(l,function(f){return f.test(s)}),u;u=n.valueCallback?n.valueCallback(c):c,u=t.valueCallback?t.valueCallback(u):u;var a=e.slice(s.length);return{value:u,rest:a}}}function Io(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function Uo(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}function Fo(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(n.matchPattern);if(!r)return null;var i=r[0],o=e.match(n.parsePattern);if(!o)return null;var s=n.valueCallback?n.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;var l=e.slice(i.length);return{value:s,rest:l}}}var Ho=/^(\d+)(th|st|nd|rd)?/i,Wo=/\d+/i,qo={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Vo={any:[/^b/i,/^(a|c)/i]},Yo={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ko={any:[/1/i,/2/i,/3/i,/4/i]},Go={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Xo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Qo={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Jo={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Zo={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},es={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ts={ordinalNumber:Fo({matchPattern:Ho,parsePattern:Wo,valueCallback:function(e){return parseInt(e,10)}}),era:Ee({matchPatterns:qo,defaultMatchWidth:"wide",parsePatterns:Vo,defaultParseWidth:"any"}),quarter:Ee({matchPatterns:Yo,defaultMatchWidth:"wide",parsePatterns:Ko,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ee({matchPatterns:Go,defaultMatchWidth:"wide",parsePatterns:Xo,defaultParseWidth:"any"}),day:Ee({matchPatterns:Qo,defaultMatchWidth:"wide",parsePatterns:Jo,defaultParseWidth:"any"}),dayPeriod:Ee({matchPatterns:Zo,defaultMatchWidth:"any",parsePatterns:es,defaultParseWidth:"any"})};const ns=ts;var rs={code:"en-US",formatDistance:ko,formatLong:$o,formatRelative:Ro,localize:zo,match:ns,options:{weekStartsOn:0,firstWeekContainsDate:1}};const is=rs;var os=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ss=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,as=/^'([^]*?)'?$/,cs=/''/g,ls=/[a-zA-Z]/;function us(n,e,t){var r,i,o,s,l,c,u,a,f,d,p,h,b,w,C,T,$,E;Y(2,arguments);var _=String(e),L=Je(),z=(r=(i=t==null?void 0:t.locale)!==null&&i!==void 0?i:L.locale)!==null&&r!==void 0?r:is,oe=ge((o=(s=(l=(c=t==null?void 0:t.firstWeekContainsDate)!==null&&c!==void 0?c:t==null||(u=t.locale)===null||u===void 0||(a=u.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&l!==void 0?l:L.firstWeekContainsDate)!==null&&s!==void 0?s:(f=L.locale)===null||f===void 0||(d=f.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(oe>=1&&oe<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=ge((p=(h=(b=(w=t==null?void 0:t.weekStartsOn)!==null&&w!==void 0?w:t==null||(C=t.locale)===null||C===void 0||(T=C.options)===null||T===void 0?void 0:T.weekStartsOn)!==null&&b!==void 0?b:L.weekStartsOn)!==null&&h!==void 0?h:($=L.locale)===null||$===void 0||(E=$.options)===null||E===void 0?void 0:E.weekStartsOn)!==null&&p!==void 0?p:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!z.localize)throw new RangeError("locale must contain localize property");if(!z.formatLong)throw new RangeError("locale must contain formatLong property");var v=ie(n);if(!Zi(v))throw new RangeError("Invalid time value");var g=Qi(v),k=eo(v,g),O={firstWeekContainsDate:oe,weekStartsOn:U,locale:z,_originalDate:v},x=_.match(ss).map(function(j){var A=j[0];if(A==="p"||A==="P"){var W=mo[A];return W(j,z.formatLong)}return j}).join("").match(os).map(function(j){if(j==="''")return"'";var A=j[0];if(A==="'")return ds(j);var W=ho[A];if(W)return!(t!=null&&t.useAdditionalWeekYearTokens)&&yo(j)&&rn(j,e,String(n)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&bo(j)&&rn(j,e,String(n)),W(k,j,z.localize,O);if(A.match(ls))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return j}).join("");return x}function ds(n){var e=n.match(as);return e?e[1].replace(cs,"'"):n}const re=Object.create(null);re.open="0";re.close="1";re.ping="2";re.pong="3";re.message="4";re.upgrade="5";re.noop="6";const ze=Object.create(null);Object.keys(re).forEach(n=>{ze[re[n]]=n});const hs={type:"error",data:"parser error"},fs=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ps=typeof ArrayBuffer=="function",ms=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Zn=({type:n,data:e},t,r)=>fs&&e instanceof Blob?t?r(e):on(e,r):ps&&(e instanceof ArrayBuffer||ms(e))?t?r(e):on(new Blob([e]),r):r(re[n]+(e||"")),on=(n,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(n)},sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Re=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<sn.length;n++)Re[sn.charCodeAt(n)]=n;const gs=n=>{let e=n.length*.75,t=n.length,r,i=0,o,s,l,c;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const u=new ArrayBuffer(e),a=new Uint8Array(u);for(r=0;r<t;r+=4)o=Re[n.charCodeAt(r)],s=Re[n.charCodeAt(r+1)],l=Re[n.charCodeAt(r+2)],c=Re[n.charCodeAt(r+3)],a[i++]=o<<2|s>>4,a[i++]=(s&15)<<4|l>>2,a[i++]=(l&3)<<6|c&63;return u},vs=typeof ArrayBuffer=="function",er=(n,e)=>{if(typeof n!="string")return{type:"message",data:tr(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:bs(n.substring(1),e)}:ze[t]?n.length>1?{type:ze[t],data:n.substring(1)}:{type:ze[t]}:hs},bs=(n,e)=>{if(vs){const t=gs(n);return tr(t,e)}else return{base64:!0,data:n}},tr=(n,e)=>{switch(e){case"blob":return n instanceof ArrayBuffer?new Blob([n]):n;case"arraybuffer":default:return n}},nr=String.fromCharCode(30),ys=(n,e)=>{const t=n.length,r=new Array(t);let i=0;n.forEach((o,s)=>{Zn(o,!1,l=>{r[s]=l,++i===t&&e(r.join(nr))})})},ws=(n,e)=>{const t=n.split(nr),r=[];for(let i=0;i<t.length;i++){const o=er(t[i],e);if(r.push(o),o.type==="error")break}return r},rr=4;function H(n){if(n)return _s(n)}function _s(n){for(var e in H.prototype)n[e]=H.prototype[e];return n}H.prototype.on=H.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};H.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};H.prototype.off=H.prototype.removeListener=H.prototype.removeAllListeners=H.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var r,i=0;i<t.length;i++)if(r=t[i],r===e||r.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+n],this};H.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,i=t.length;r<i;++r)t[r].apply(this,e)}return this};H.prototype.emitReserved=H.prototype.emit;H.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};H.prototype.hasListeners=function(n){return!!this.listeners(n).length};const G=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function ir(n,...e){return e.reduce((t,r)=>(n.hasOwnProperty(r)&&(t[r]=n[r]),t),{})}const ks=G.setTimeout,xs=G.clearTimeout;function Ze(n,e){e.useNativeTimers?(n.setTimeoutFn=ks.bind(G),n.clearTimeoutFn=xs.bind(G)):(n.setTimeoutFn=G.setTimeout.bind(G),n.clearTimeoutFn=G.clearTimeout.bind(G))}const Cs=1.33;function Ss(n){return typeof n=="string"?Es(n):Math.ceil((n.byteLength||n.size)*Cs)}function Es(n){let e=0,t=0;for(let r=0,i=n.length;r<i;r++)e=n.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}class $s extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class or extends H{constructor(e){super(),this.writable=!1,Ze(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,r){return super.emitReserved("error",new $s(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=er(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}}const sr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),ft=64,Ts={};let an=0,Le=0,cn;function ln(n){let e="";do e=sr[n%ft]+e,n=Math.floor(n/ft);while(n>0);return e}function ar(){const n=ln(+new Date);return n!==cn?(an=0,cn=n):n+"."+ln(an++)}for(;Le<ft;Le++)Ts[sr[Le]]=Le;function cr(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function Os(n){let e={},t=n.split("&");for(let r=0,i=t.length;r<i;r++){let o=t[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}let lr=!1;try{lr=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Rs=lr;function ur(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Rs))return new XMLHttpRequest}catch{}if(!e)try{return new G[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Ps(){}const js=function(){return new ur({xdomain:!1}).responseType!=null}();class Ms extends or{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==r}const t=e&&e.forceBase64;this.supportsBinary=js&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};ws(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ys(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let r="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=ar()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port);const i=cr(e),o=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(o?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new ne(this.uri(),e)}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class ne extends H{constructor(e,t){super(),Ze(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=ir(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new ur(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&t.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document<"u"&&(this.index=ne.requestsCount++,ne.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Ps,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete ne.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}ne.requestsCount=0;ne.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",un);else if(typeof addEventListener=="function"){const n="onpagehide"in G?"pagehide":"unload";addEventListener(n,un,!1)}}function un(){for(let n in ne.requests)ne.requests.hasOwnProperty(n)&&ne.requests[n].abort()}const dr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),De=G.WebSocket||G.MozWebSocket,dn=!0,As="arraybuffer",hn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ls extends or{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,r=hn?{}:ir(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=dn&&!hn?t?new De(e,t):new De(e):new De(e,t,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||As,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],i=t===e.length-1;Zn(r,this.supportsBinary,o=>{const s={};try{dn&&this.ws.send(o)}catch{}i&&dr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let r="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=ar()),this.supportsBinary||(e.b64=1);const i=cr(e),o=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(o?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}check(){return!!De}}const Ds={websocket:Ls,polling:Ms},Ns=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Bs=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function pt(n){const e=n,t=n.indexOf("["),r=n.indexOf("]");t!=-1&&r!=-1&&(n=n.substring(0,t)+n.substring(t,r).replace(/:/g,";")+n.substring(r,n.length));let i=Ns.exec(n||""),o={},s=14;for(;s--;)o[Bs[s]]=i[s]||"";return t!=-1&&r!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=zs(o,o.path),o.queryKey=Is(o,o.query),o}function zs(n,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Is(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,o){i&&(t[i]=o)}),t}let hr=class we extends H{constructor(e,t={}){super(),this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=pt(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=pt(t.host).host),Ze(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Os(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=rr,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new Ds[e](r)}open(){let e;if(this.opts.rememberUpgrade&&we.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),r=!1;we.priorWebsocketSuccess=!1;const i=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!r)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;we.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(a(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function o(){r||(r=!0,a(),t.close(),t=null)}const s=f=>{const d=new Error("probe error: "+f);d.transport=t.name,o(),this.emitReserved("upgradeError",d)};function l(){s("transport closed")}function c(){s("socket closed")}function u(f){t&&f.name!==t.name&&o()}const a=()=>{t.removeListener("open",i),t.removeListener("error",s),t.removeListener("close",l),this.off("close",c),this.off("upgrading",u)};t.once("open",i),t.once("error",s),t.once("close",l),this.once("close",c),this.once("upgrading",u),t.open()}onOpen(){if(this.readyState="open",we.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(t+=Ss(i)),r>0&&t>this.maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}write(e,t,r){return this.sendPacket("message",e,t,r),this}send(e,t,r){return this.sendPacket("message",e,t,r),this}sendPacket(e,t,r,i){if(typeof t=="function"&&(i=t,t=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const o={type:e,data:t,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){we.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let r=0;const i=e.length;for(;r<i;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}};hr.protocol=rr;function Us(n,e="",t){let r=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),r=pt(n)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+e,r.href=r.protocol+"://"+o+(t&&t.port===r.port?"":":"+r.port),r}const Fs=typeof ArrayBuffer=="function",Hs=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,fr=Object.prototype.toString,Ws=typeof Blob=="function"||typeof Blob<"u"&&fr.call(Blob)==="[object BlobConstructor]",qs=typeof File=="function"||typeof File<"u"&&fr.call(File)==="[object FileConstructor]";function _t(n){return Fs&&(n instanceof ArrayBuffer||Hs(n))||Ws&&n instanceof Blob||qs&&n instanceof File}function Ie(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,r=n.length;t<r;t++)if(Ie(n[t]))return!0;return!1}if(_t(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Ie(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&Ie(n[t]))return!0;return!1}function Vs(n){const e=[],t=n.data,r=n;return r.data=mt(t,e),r.attachments=e.length,{packet:r,buffers:e}}function mt(n,e){if(!n)return n;if(_t(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let r=0;r<n.length;r++)t[r]=mt(n[r],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=mt(n[r],e));return t}return n}function Ys(n,e){return n.data=gt(n.data,e),delete n.attachments,n}function gt(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=gt(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=gt(n[t],e));return n}const Ks=5;var M;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(M||(M={}));class Gs{constructor(e){this.replacer=e}encode(e){return(e.type===M.EVENT||e.type===M.ACK)&&Ie(e)?this.encodeAsBinary({type:e.type===M.EVENT?M.BINARY_EVENT:M.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===M.BINARY_EVENT||e.type===M.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Vs(e),r=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(r),i}}class kt extends H{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===M.BINARY_EVENT;r||t.type===M.BINARY_ACK?(t.type=r?M.EVENT:M.ACK,this.reconstructor=new Xs(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(_t(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(M[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===M.BINARY_EVENT||r.type===M.BINARY_ACK){const o=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const s=e.substring(o,t);if(s!=Number(s)||e.charAt(t)!=="-")throw new Error("Illegal attachments");r.attachments=Number(s)}if(e.charAt(t+1)==="/"){const o=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(o,t)}else r.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const o=t+1;for(;++t;){const s=e.charAt(t);if(s==null||Number(s)!=s){--t;break}if(t===e.length)break}r.id=Number(e.substring(o,t+1))}if(e.charAt(++t)){const o=this.tryParse(e.substr(t));if(kt.isPayloadValid(r.type,o))r.data=o;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case M.CONNECT:return typeof t=="object";case M.DISCONNECT:return t===void 0;case M.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case M.EVENT:case M.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="string"||typeof t[0]=="number");case M.ACK:case M.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Xs{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Ys(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Qs=Object.freeze(Object.defineProperty({__proto__:null,Decoder:kt,Encoder:Gs,get PacketType(){return M},protocol:Ks},Symbol.toStringTag,{value:"Module"}));function J(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const Js=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class pr extends H{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[J(e,"open",this.onopen.bind(this)),J(e,"packet",this.onpacket.bind(this)),J(e,"error",this.onerror.bind(this)),J(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Js.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const r={type:M.EVENT,data:t};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const s=this.ids++,l=t.pop();this._registerAckCallback(s,l),r.id=s}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,t){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===e&&this.sendBuffer.splice(s,1);t.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...s)=>{this.io.clearTimeoutFn(o),t.apply(this,[null,...s])}}emitWithAck(e,...t){const r=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,o)=>{t.push((s,l)=>r?s?o(s):i(l):i(s)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>r!==this._queue[0]?void 0:(i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...o)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:M.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case M.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case M.EVENT:case M.BINARY_EVENT:this.onevent(e);break;case M.ACK:case M.BINARY_ACK:this.onack(e);break;case M.DISCONNECT:this.ondisconnect();break;case M.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...i){r||(r=!0,t.packet({type:M.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:M.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function Ce(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}Ce.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};Ce.prototype.reset=function(){this.attempts=0};Ce.prototype.setMin=function(n){this.ms=n};Ce.prototype.setMax=function(n){this.max=n};Ce.prototype.setJitter=function(n){this.jitter=n};class vt extends H{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Ze(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Ce({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||Qs;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new hr(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=J(t,"open",function(){r.onopen(),e&&e()}),o=J(t,"error",s=>{r.cleanup(),r._readyState="closed",this.emitReserved("error",s),e?e(s):r.maybeReconnectOnOpen()});if(this._timeout!==!1){const s=this._timeout;s===0&&i();const l=this.setTimeoutFn(()=>{i(),t.close(),t.emit("error",new Error("timeout"))},s);this.opts.autoUnref&&l.unref(),this.subs.push(function(){clearTimeout(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(J(e,"ping",this.onping.bind(this)),J(e,"data",this.ondata.bind(this)),J(e,"error",this.onerror.bind(this)),J(e,"close",this.onclose.bind(this)),J(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){dr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new pr(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(function(){clearTimeout(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const $e={};function Ue(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=Us(n,e.path||"/socket.io"),r=t.source,i=t.id,o=t.path,s=$e[i]&&o in $e[i].nsps,l=e.forceNew||e["force new connection"]||e.multiplex===!1||s;let c;return l?c=new vt(r,e):($e[i]||($e[i]=new vt(r,e)),c=$e[i]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(Ue,{Manager:vt,Socket:pr,io:Ue,connect:Ue});/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var bt=function(n,e){return bt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])},bt(n,e)};function Zs(n,e){bt(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function ea(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var ta=`.styles_scrollable-div__prSCv {\r
  max-height: inherit;\r
  height: inherit;\r
  overflow-y: auto;\r
}\r
`,na={"scrollable-div":"styles_scrollable-div__prSCv",scrollableDiv:"styles_scrollable-div__prSCv"};ea(ta);var ra=function(n){Zs(e,n);function e(t){var r=n.call(this,t)||this;return r.bottomRef=y.createRef(),r.wrapperRef=y.createRef(),r.handleScroll=r.handleScroll.bind(r),r}return e.prototype.getSnapshotBeforeUpdate=function(){if(this.wrapperRef.current&&this.bottomRef.current){var t=this.props.viewableDetectionEpsilon;return e.isViewable(this.wrapperRef.current,this.bottomRef.current,t)}return!1},e.prototype.componentDidUpdate=function(t,r,i){var o=this.props,s=o.forceScroll,l=o.changeDetectionFilter,c=l(t,this.props);c&&(s||i)&&this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.componentDidMount=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.scrollParentToChild=function(t,r){var i=this.props.viewableDetectionEpsilon;if(!e.isViewable(t,r,i)){var o=t.getBoundingClientRect(),s=r.getBoundingClientRect(),l=s.top+t.scrollTop-o.top,c=this.props,u=c.animateScroll,a=c.onScrollComplete;u&&(u(t,l),a())}},e.isViewable=function(t,r,i){i=i||0;var o=t.getBoundingClientRect(),s=r.getBoundingClientRect(),l=s.top>=o.top,c=o.top+t.clientHeight-s.top,u=c+i>=0;return l&&u},e.prototype.handleScroll=function(){var t=this.props,r=t.viewableDetectionEpsilon,i=t.onScroll;if(i&&this.bottomRef.current&&this.wrapperRef.current){var o=e.isViewable(this.wrapperRef.current,this.bottomRef.current,r);i(o)}},e.prototype.scrollToBottom=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.render=function(){var t=this.props,r=t.children,i=t.className,o=na.scrollableDiv+(i?" "+i:"");return y.createElement("div",{className:o,ref:this.wrapperRef,onScroll:this.handleScroll},r,y.createElement("div",{ref:this.bottomRef}))},e.defaultProps={forceScroll:!1,animateScroll:function(t,r){t.scrollBy?t.scrollBy({top:r}):t.scrollTop=r},onScrollComplete:function(){},changeDetectionFilter:function(){return!0},viewableDetectionEpsilon:2,onScroll:function(){}},e}(y.Component);function ia(){var E;const n="wss://www.swarm-official.online";let e=Ue.connect(n);wr();const{fetchAllProjects:t}=_r(),{getAChat:r,sentMessage:i}=pn(),{getWorkspaces:o}=Er(),[s,l]=y.useState("");y.useState();const[c,u]=y.useState(),[a,f]=y.useState(),[d,p]=y.useState(!1),{userId:h,email:b}=xt(kr),{aside:w}=xt(xr);y.useRef(null),y.useEffect(()=>{C()},[]);const C=async()=>{try{const _=await o(h,b);u([..._.data.ownedWorkspaces,..._.data.sharedWorkspaces])}catch(_){console.log(_)}},T=async _=>{try{if(_.target.value==="undefined")return;const L=await t(_.target.value);f(L.data)}catch(L){console.log(L)}},$=async _=>{var L;try{const z=await r(_);e.emit("joinChat",(L=z==null?void 0:z.data)==null?void 0:L._id),l(z.data),console.log(z.data),p(!0)}catch(z){console.log(z)}};return y.useEffect(()=>{console.log("jjjjjjjj"),e.on("rm",_=>{console.log(_.sender._id!==h),_.sender._id!==h&&l(L=>({...L,messages:[...L.messages,_]}))})}),ee("div",{className:"h-full md:p-3 pb-20 overflow-y-hidden md:flex gap-3 bg-gray-100 dark:bg-slate-800 w-full",children:[ee("div",{className:`${d?"hidden md:block":"block"} dark:bg-slate-800 h-full md:w-1/4 rounded-md p-2`,children:[B("div",{className:"w-full  dark:shadow-md shadow-2xl shadow-gray-300 rounded-xl flex justify-center items-center h-16",children:B("p",{className:"dark:text-white  text-4xl",children:"Chats"})}),B("div",{className:"w-full mt-4",children:ee("select",{id:"countries",className:"bg-gray-50 border-transparent text-gray-900 dark:shadow-sm shadow-lg text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white",onChange:T,children:[B("option",{value:"undefined",children:"Choose a workpspace"}),c==null?void 0:c.map(_=>B("option",{value:_._id,children:_.name}))]})}),B("div",{className:"dark:bg-slate-800 dark:shadow-xl dark:shadow-gray-700 shadow-xl shadow-gray-300 rounded-2xl px-3 w-full mt-4 h-3/4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-500 ",children:a&&a.map(_=>B("div",{className:"hover:transform hover:scale-105 bg-gray-500 dark:hover:bg-gray-700   text-dark border-slate-700  p-3 flex justify-center rounded-md bg-transparent dark:bg-gray-600 text-white hover:cursor-pointer m-2",children:B("p",{className:"text-sm md:text-xl",onClick:()=>$(_._id),children:_.name})},_._id))})]}),ee("div",{className:"w-full md:w-3/4 h-[92%]  shadow-2xl  dark:shadow-gray-700 rounded-md mb-20",children:[ee("div",{className:"w-full dark:bg-slate-800 bg-slate-300 rounded-t-lg hover:cursor-pointer h-16 flex items-center justify-between",children:[ee("p",{className:"ml-6 text-lg dark:text-white flex justify-center items-center gap-4",children:[B("span",{onClick:()=>p(!1),className:"text-2xl md:hidden hover:cursor-pointer",children:B($r,{})}),s==null?void 0:s.chatName]}),B("p",{className:"mr-5 dark:text-white",children:"dot"})]}),B("hr",{className:"dark:text-white"}),B(ra,{forceScroll:!0,children:B("div",{className:"h-[87%] overflow-y-scroll  scrollbar-thin md:pb-10 pt-3 px-2 ",children:(E=s==null?void 0:s.messages)==null?void 0:E.map(_=>B("div",{className:`flex ${_.sender._id==h?"justify-end":""}`,children:ee("div",{className:`rounded block  w-fit md:max-w-[40%]   p-2 mb-10 ${_.sender._id==h?"dark:bg-green-900 text-end bg-green-500  ":"dark:bg-gray-600 bg-gray-400"}`,children:[_.sender._id!==h&&B("p",{className:"text-sm dark:text-yellow-400 text-yellow-200 font-semibold",children:_==null?void 0:_.sender.fname}),B("p",{className:"max-w-[100%] truncate dark:text-slate-50 text-gray-200  font-semibold",children:_.message}),B("p",{className:"text-[.80rem] text-end font-semibold dark:text-gray-300",children:us(new Date(_.createdAt),"h:mm a")})]})},_._id))})}),B("div",{className:`${d?"z-50":"z-0"} ${w?"w-[62%]":"w-full md:w-[70.5%]"} absolute md:block bottom-2.5 pt-3 pr-3 bg-white  dark:bg-slate-800`,children:B(Ki,{data:{chatId:s==null?void 0:s._id,userId:h,socket:e,setChat:l,chat:s}})})]})]})}function la(){return ee("div",{className:"flex h-screen overflow-hidden",children:[B("div",{className:" md:block",children:B(Cr,{})}),ee("div",{className:"w-full",children:[B(Sr,{}),B(ia,{})]})]})}export{la as default};
