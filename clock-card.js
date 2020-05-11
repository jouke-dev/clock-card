function t(t,e,s,n){var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r}const e=new WeakMap,s=t=>"function"==typeof t&&e.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},o={},r={},a=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${a}--\x3e`,l=new RegExp(`${a}|${c}`),d="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,c=0;const{strings:h,values:{length:p}}=t;for(;c<p;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)u(e[t].name,d)&&n++;for(;n-- >0;){const e=h[c],s=f.exec(e)[2],n=s.toLowerCase()+d,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(l);this.parts.push({type:"attribute",index:r,name:s,strings:o}),c+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const n=t.parentNode,i=e.split(l),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=m();else{const t=f.exec(o);null!==t&&u(t[2],d)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-d.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(m(),t),s.push(t)):t.data=i[o],c+=o}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(m(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),c++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),c++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const u=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},p=t=>-1!==t.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class g{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,c=i.nextNode();for(;r<s.length;)if(o=s[r],p(o)){for(;a<o.index;)a++,"TEMPLATE"===c.nodeName&&(e.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=e.pop(),c=i.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}const _=` ${a} `;class y{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=f.exec(t);e+=null===o?t+(s?_:c):t.substr(0,o.index)+o[1]+o[2]+d+o[3]+a}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const w=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new b(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(w(t)||!v(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||w(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class M{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}const t=this.__pendingValue;t!==o&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const s=new g(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)void 0===(s=e[n])&&(s=new M(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class k extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends b{}let E=!1;try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class P{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const T=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new k(t,e.slice(1),s).parts}return"@"===i?[new P(t,e.slice(1),n.eventContext)]:"?"===i?[new x(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new M(t)}};function D(t){let e=Y.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Y.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(a);return void 0===(s=e.keyString.get(n))&&(s=new h(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const Y=new Map,H=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const A=(t,...e)=>new y(t,e,"html",T),$=133;function R(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,$,null,!1);let o=V(n),r=n[o],a=-1,c=0;const l=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-c,r=n[o=V(n,o)]}l.forEach(t=>t.parentNode.removeChild(t))}const O=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,$,null,!1);for(;s.nextNode();)e++;return e},V=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(p(e))return s}return-1};const I=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const B=t=>e=>{const s=I(e.type,t);let n=Y.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},Y.set(s,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(a);if(void 0===(i=n.keyString.get(o))){const s=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,t),i=new h(e,s),n.keyString.set(o,i)}return n.stringsArray.set(e.strings,i),i},j=["html","svg"],U=new Set,z=(t,e,s)=>{U.add(t);const n=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{j.forEach(e=>{const s=Y.get(I(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),R(t,s)})})})(t);const a=n.content;s?function(t,e,s=null){const{element:{content:n},parts:i}=t;if(null==s)return void n.appendChild(e);const o=document.createTreeWalker(n,$,null,!1);let r=V(i),a=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===s&&(a=O(e),s.parentNode.insertBefore(e,s));-1!==r&&i[r].index===c;){if(a>0){for(;-1!==r;)i[r].index+=a,r=V(i,r);return}r=V(i,r)}}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),R(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},q=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:q},Z=Promise.resolve(!0),J=1,X=4,G=8,K=16,Q=32,tt="finalized";class et extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Z,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const n=this[t];this[s]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(tt)||t.finalize(),this[tt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=q){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||F.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=W){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|G,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~G}}_attributeToProperty(t,e){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s._classProperties.get(n)||W;this._updateState=this._updateState|K,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~K}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,i=n._classProperties.get(t)||W;n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&K||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|X;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{t=s,e=n});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&J}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}et[tt]=!0;const st=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),nt=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}}:Object.assign({},e,{finisher(s){s.createProperty(e.key,t)}}),it=(t,e,s)=>{e.constructor.createProperty(s,t)};function ot(t){return(e,s)=>void 0!==s?it(t,e,s):nt(t,e)}const rt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol();class ct{constructor(t,e){if(e!==at)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(rt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const lt=(t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof ct)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new ct(s,at)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const dt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let n=0,i=e.length;n<i;n++){const i=e[n];Array.isArray(i)?t(i,s):s.push(i)}return s}(t);class ht extends et{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){dt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?rt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ht.finalized=!0,ht.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=H.has(e),r=L&&11===e.nodeType&&!!e.host,a=r&&!U.has(n),c=a?document.createDocumentFragment():e;if(((t,e,s)=>{let n=H.get(e);void 0===n&&(i(e,e.firstChild),H.set(e,n=new M(Object.assign({templateFactory:D},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:B(n)},s)),a){const t=H.get(c);H.delete(c);const s=t.value instanceof g?t.value.template:void 0;z(n,c,s),i(e,e.firstChild),e.appendChild(c),H.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};var ut=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,pt="[^\\s]+",mt=/\[([^]*?)\]/gm;function ft(t,e){for(var s=[],n=0,i=t.length;n<i;n++)s.push(t[n].substr(0,e));return s}var gt=function(t){return function(e,s){var n=s[t].map(function(t){return t.toLowerCase()}).indexOf(e.toLowerCase());return n>-1?n:null}};function _t(t){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];for(var n=0,i=e;n<i.length;n++){var o=i[n];for(var r in o)t[r]=o[r]}return t}var yt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],wt=["January","February","March","April","May","June","July","August","September","October","November","December"],vt=ft(wt,3),St={dayNamesShort:ft(yt,3),dayNames:yt,monthNamesShort:vt,monthNames:wt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},bt=_t({},St),Mt=function(t){return t.replace(/[|\\{()[^$+*?.-]/g,"\\$&")},xt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},kt={D:function(t){return String(t.getDate())},DD:function(t){return xt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return xt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return xt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return xt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return xt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return xt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return xt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return xt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return xt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return xt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return xt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+xt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+xt(Math.floor(Math.abs(e)/60),2)+":"+xt(Math.abs(e)%60,2)}},Ct=function(t){return+t-1},Et=[null,"[1-9]\\d?"],Pt=[null,pt],Nt=["isPm",pt,function(t,e){var s=t.toLowerCase();return s===e.amPm[0]?0:s===e.amPm[1]?1:null}],Tt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var s=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?s:-s}return 0}],Dt={D:["day","[1-9]\\d?"],DD:["day","\\d\\d"],Do:["day","[1-9]\\d?"+pt,function(t){return parseInt(t,10)}],M:["month","[1-9]\\d?",Ct],MM:["month","\\d\\d",Ct],YY:["year","\\d\\d",function(t){var e=+(""+(new Date).getFullYear()).substr(0,2);return+(""+(+t>68?e-1:e)+t)}],h:["hour","[1-9]\\d?",void 0,"isPm"],hh:["hour","\\d\\d",void 0,"isPm"],H:["hour","[1-9]\\d?"],HH:["hour","\\d\\d"],m:["minute","[1-9]\\d?"],mm:["minute","\\d\\d"],s:["second","[1-9]\\d?"],ss:["second","\\d\\d"],YYYY:["year","\\d{4}"],S:["millisecond","\\d",function(t){return 100*+t}],SS:["millisecond","\\d\\d",function(t){return 10*+t}],SSS:["millisecond","\\d{3}"],d:Et,dd:Et,ddd:Pt,dddd:Pt,MMM:["month",pt,gt("monthNamesShort")],MMMM:["month",pt,gt("monthNames")],a:Nt,A:Nt,ZZ:Tt,Z:Tt},Yt={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},Ht=function(t,e,s){if(void 0===e&&(e=Yt.default),void 0===s&&(s={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");e=Yt[e]||e;var n=[];e=e.replace(mt,function(t,e){return n.push(e),"@@@"});var i=_t(_t({},bt),s);return(e=e.replace(ut,function(e){return kt[e](t,i)})).replace(/@@@/g,function(){return n.shift()})};function At(t,e,s){if(void 0===s&&(s={}),"string"!=typeof e)throw new Error("Invalid format in fecha parse");if(e=Yt[e]||e,t.length>1e3)return null;var n={year:(new Date).getFullYear(),month:0,day:1,hour:0,minute:0,second:0,millisecond:0,isPm:null,timezoneOffset:null},i=[],o=[],r=e.replace(mt,function(t,e){return o.push(Mt(e)),"@@@"}),a={},c={};r=Mt(r).replace(ut,function(t){var e=Dt[t],s=e[0],n=e[1],o=e[3];if(a[s])throw new Error("Invalid format. "+s+" specified twice in format");return a[s]=!0,o&&(c[o]=!0),i.push(e),"("+n+")"}),Object.keys(c).forEach(function(t){if(!a[t])throw new Error("Invalid format. "+t+" is required in specified format")}),r=r.replace(/@@@/g,function(){return o.shift()});var l=t.match(new RegExp(r,"i"));if(!l)return null;for(var d=_t(_t({},bt),s),h=1;h<l.length;h++){var u=i[h-1],p=u[0],m=u[2],f=m?m(l[h],d):+l[h];if(null==f)return null;n[p]=f}1===n.isPm&&null!=n.hour&&12!=+n.hour?n.hour=+n.hour+12:0===n.isPm&&12==+n.hour&&(n.hour=0);for(var g=new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond),_=[["month","getMonth"],["day","getDate"],["hour","getHours"],["minute","getMinutes"],["second","getSeconds"]],y=(h=0,_.length);h<y;h++)if(a[_[h][0]]&&n[_[h][0]]!==g[_[h][1]]())return null;return null==n.timezoneOffset?g:new Date(Date.UTC(n.year,n.month,n.day,n.hour,n.minute-n.timezoneOffset,n.second,n.millisecond))}var $t=Ht;(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();const Rt={general:{icon:"tune",name:"General",show:!0},schedule:{icon:"calendar",name:"Schedule and alarms",secondary:"A simple schedule to display",show:!1},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Ot=class extends ht{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _schedule(){return this._config&&this._config.schedule?this._config.schedule:""}get _wordclock(){return!(!this._config||!this._config.wordclock)&&this._config.wordclock}get _time(){return this._config&&this._config.time?this._config.time:""}get _date(){return this._config&&this._config.date?this._config.date:""}render(){if(!this.hass)return A``;Object.keys(this.hass.states).filter(t=>"sun"===t.substr(0,t.indexOf(".")));const t=["","HH:mm","hh:mm","HH:mm:ss"];return A`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"general"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Rt.general.icon}`}></ha-icon>
            <div class="title">${Rt.general.name}</div>
          </div>
        </div>
        ${Rt.general.show?A`
              <div class="values">
                <paper-dropdown-menu
                  label="Time format"
                  @value-changed=${this._valueChanged}
                  .configValue=${"time"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._time)}>
                    ${t.map(t=>A`<paper-item>${t}</paper-item>`)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <ha-switch
                  aria-label=${`Toggle warning ${this._wordclock?"off":"on"}`}
                  .checked=${!1!==this._wordclock}
                  .configValue=${"wordclock"}
                  @change=${this._valueChanged}
                  >Word clock</ha-switch
                >
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"schedule"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Rt.schedule.icon}`}></ha-icon>
            <div class="title">${Rt.schedule.name}</div>
          </div>
          <div class="secondary">${Rt.schedule.secondary}</div>
        </div>
        ${Rt.schedule.show?A`
              <div class="values">
                <paper-textarea
                  label="Schedule"
                  .value=${this._schedule}
                  .configValue=${"schedule"}
                  @value-changed=${this._valueChanged}
                  placeholder='{"weekday":{"09:15-09:20":"Online stand"},"weekend":{"14:00-15:00":"Golf"}, "MonWedFri": {"18:00-19:00": "Gym" } }'
                  rows=5
                ></paper-textarea>
                <br />
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Rt.appearance.icon}`}></ha-icon>
            <div class="title">${Rt.appearance.name}</div>
          </div>
          <div class="secondary">${Rt.appearance.secondary}</div>
        </div>
        ${Rt.appearance.show?A`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
              </div>
            `:""}
      </div>
    `}_toggleOption(t){this._toggleThing(t,Rt)}_toggleThing(t,e){const s=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=s}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),function(t,e,s,n){n=n||{},s=null==s?{}:s;var i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=s,t.dispatchEvent(i)}(this,"config-changed",{config:this._config}))}static get styles(){return lt`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-Fttom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};t([ot()],Ot.prototype,"hass",void 0),t([ot()],Ot.prototype,"_config",void 0),Ot=t([st("clock-card-editor")],Ot);var Vt,It={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Lt={common:It},Bt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},jt={common:Bt},Ut={en:Object.freeze({__proto__:null,common:It,default:Lt}),nb:Object.freeze({__proto__:null,common:Bt,default:jt})};window.customCards=window.customCards||[],window.customCards.push({type:"clock-card",name:"Clock Card",description:"A clock 🕒"});let zt=Vt=class extends ht{constructor(){super(...arguments),this.wordclock=A`
  <div id="wordclock">
  <span class="word on">It</span>
  <span class="word nbsp">Y</span>
  <span class="word on">is</span>
  <span class="word nbsp">X</span>
  <span class="word" id="m_20">twenty</span>
  <br />
  <span class="word" id="m_15">quarter</span>
  <span class="word nbsp">J</span>
  <span class="word" id="m_30">half</span>
  <br />
  <span class="word" id="m_10">ten</span>
  <span class="word" id="m_5">five</span>
  <span class="word nbsp">O</span>
  <span class="word" id="past">past</span>
  <br />
  <span class="word" id="to">to</span>
  <span class="word nbsp">U</span>
  <span class="word" id="h_0">twelve</span>
  <span class="word" id="h_1">one</span>
  <br />
  <span class="word" id="h_2">two</span>
  <span class="word" id="h_3">three</span>
  <span class="word" id="h_4">four</span>
  <br />
  <span class="word" id="h_5">five</span>
  <span class="word" id="h_6">six</span>
  <span class="word" id="h_7">seven</span>
  <br />
  <span class="word" id="h_8">eight</span>
  <span class="word" id="h_9">nine</span>
  <span class="word" id="h_10">ten</span>
  <br />
  <span class="word nbsp">K</span>
  <span class="word nbsp">E</span>
  <span class="word nbsp">X</span>
  <span class="word" id="h_11">eleven</span>
  <span class="word nbsp">U</span>
  <span class="word nbsp">O</span>
  <span class="word nbsp">A</span>
  <br />
  <span class="word nbsp">W</span>
  <span class="word" id="m_0">O'Clock</span>
  <span class="word nbsp">J</span>
  <span class="word on">now</span>
</div>
`,this.globalMasks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"}}prepareCalendar(t){const e=(t,e,s)=>{const n=Number.parseInt(e.substr(0,2)+e.substr(3,2));let i=void 0;if("weekend"==s&&(s="SatSun"),"weekday"==s&&(s="MonTueWedThuFri"),~~s.length<1&&(s="MonTueWedThuFriSatSun"),t instanceof String&&t.startsWith("*")&&(t={label:t.substr(1),alarm:2}),t instanceof Object&&void 0!==(t=t.label||"").alarm){const s=~~t.alarm,n=At(e.substr(0,5),"HH:mm");n&&(i=Ht(new Date(n.getTime()-6e4*s),"HH:mm"))}return void 0!==i&&this._alarms&&(this._alarms[i]="default"),{label:t,date:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].reduce((t,e)=>t+=s.indexOf(e)>=0?"X":"_",""),from:n,to:e.length<10?n+5:Number.parseInt(e.substr(6,2)+e.substr(9,2))}},s=[];for(const n in t)for(const[i,o]of Object.entries(t[n]))s.push(e(o,i,n));this._calendar=s}static async getConfigElement(){return document.createElement("clock-card-editor")}static getStubConfig(){return{}}static get styles(){return lt`
      #clock, #clock2 {
        position: absolute;
        display:inline-block;
        font-size: 5em; 
      }
      #clock > span, #clock2 > span {
        opacity: .1;
        transition: all .5s;
      }
      #clock2 > span {
        transition-delay: .2s;
      }
      
      #clock > span.on, #clock2 > span.on {
        opacity: 1;
        color: var(--primary-text-color);
        text-shadow: 0 0 5px var(--primary-text-color);
      }
      #clock > span:nth-child(1), #clock2 > span:nth-child(1) {
        font-weight: 900;
      }
      #clock > span:nth-child(2n), #clock2 > span:nth-child(2n) {
        font-size: .5em;
        color: blue;
      }
      #clock > span:nth-child(5), #clock2 > span:nth-child(5) {
        font-size: .5em;
      }

      #datum {
         color: var(--primary-text-color);
      }

      #appointment.on {
        opacity: 1;
        color: var(--primary-text-color);        
      }

      #alarm {
        opacity: 0;
        transition: all .5s;
      }
      #alarm.on {
        opacity: 1;
      }

      #datum > #month {
        color: 'red'
      }

      ${Vt.wordclock_css}
    `}setConfig(t){if(!t)throw new Error(function(t,e="",s=""){const n=t.split(".")[0],i=t.split(".")[1],o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var r;try{r=Ut[o][n][i]}catch(t){r=Ut.en[n][i]}return void 0===r&&(r=Ut.en[n][i]),""!==e&&""!==s&&(r=r.replace(e,s)),r}("common.invalid_configuration"));t.schedule&&this.prepareCalendar(t.schedule),this._config=Object.assign({name:"",entity:"",time:""},t)}startTimer(){if(!this._config)return;this._timer&&(clearInterval(this._timer),delete this._timer);let t=0,e=0;!0===this._config.wordclock&&(t=6e4*(5-(new Date).getMinutes()%5)+500,e=3e5),""!==this._config.time&&(t=1e3*(60-(new Date).getSeconds()%60)+500,e=6e4),this.updateDisplay(),setTimeout(()=>this._timer=setInterval(this.updateDisplay,e),t)}shouldUpdate(t){try{return function(t,e,s){if(e.has("config")||s)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}catch(t){return!0}}render(){if(!this._config||!this.hass)return A``;this.updateDisplay();const t=new Date,e=A`
    ${this._config.wordclock?this.wordclock:null}
    ${""!==this._config.time?A`<div id="clock"><span>${t.getHours()}</span><span>:</span><span>${t.getMinutes()}</span></div>`:null}
    ${this._config.schedule?A`<div id="appointment"></div>`:null}
    ${this._config.schedule?A`<div id="alarm">🚨</div>`:null}
    ${this._config.date?A`<div id="datum"></div>`:null}
    `;return A`
      <ha-card
        .header=${this._config.name}
        aria-label=${"Clock"}
      >${e}
      </ha-card>
    `}connectedCallback(){super.connectedCallback(),null!=this.shadowRoot&&(this._timer=setInterval(()=>this.updateDisplay(),500))}disconnectedCallback(){super.disconnectedCallback(),this._time1=this._time2=null,clearInterval(this._timer)}getClock(){const t=this.shadowRoot&&this.shadowRoot.getElementById("clock");let e=this.shadowRoot&&this.shadowRoot.getElementById("clock2");if(t&&!e){(e=t.cloneNode(!0)).id="clock2";const s=document.createElement("div");s.id="clockwrapper",s.setAttribute("style","position:inline-block;min-height:3em");const n=document.createElement("div");n.setAttribute("style","position:relative"),s.append(n),t.parentNode&&t.parentNode.replaceChild(s,t),n.append(t),n.append(e),this._time1=t,this._time1.hours=t.children[0],this._time1.minutes=t.children[2],this._time1.classList.toggle("on"),this._time2=e,this._time2.hours=e.childNodes[0],this._time2.minutes=e.childNodes[2]}this.ui={hours:t?t.children[0]:void 0,alarm:this.shadowRoot&&this.shadowRoot.getElementById("alarm"),appointment:this.shadowRoot&&this.shadowRoot.getElementById("appointment"),date:this.shadowRoot&&this.shadowRoot.getElementById("datum")},this.shadowRoot&&this.shadowRoot.getElementById("wordclock")&&(this.ui.wordclock={minutes:{0:this.shadowRoot.getElementById("m_0"),5:this.shadowRoot.getElementById("m_5"),10:this.shadowRoot.getElementById("m_10"),15:this.shadowRoot.getElementById("m_15"),20:this.shadowRoot.getElementById("m_20"),30:this.shadowRoot.getElementById("m_30")},hours:{0:this.shadowRoot.getElementById("h_0"),1:this.shadowRoot.getElementById("h_1"),2:this.shadowRoot.getElementById("h_2"),3:this.shadowRoot.getElementById("h_3"),4:this.shadowRoot.getElementById("h_4"),5:this.shadowRoot.getElementById("h_5"),6:this.shadowRoot.getElementById("h_6"),7:this.shadowRoot.getElementById("h_7"),8:this.shadowRoot.getElementById("h_8"),9:this.shadowRoot.getElementById("h_9"),10:this.shadowRoot.getElementById("h_10"),11:this.shadowRoot.getElementById("h_11")},to:this.shadowRoot.querySelectorAll("#to"),past:this.shadowRoot.querySelectorAll("#past"),nbsps:this.shadowRoot.querySelectorAll("#nbsp")})}updateDisplay(){if(this.getClock(),!this.ui)return;const t=new Date;if(this.ui.alarm){(this._alarms?this._alarms[Ht(t,"HH:mm")]:void 0)?this.ui.alarm.classList.add("on"):this.ui.alarm.classList.remove("on")}if(this.ui.appointment){const e=100*t.getHours()+t.getMinutes();let s="";if(this._calendar){const n=t.getDay();this._calendar.forEach(t=>{"X"===t.date.charAt(n)&&t.from<=e&&t.to>=e&&(s=t.label||"")})}this.ui.appointment.innerHTML!==s&&(this.ui.appointment.innerHTML=s,""!==s?this.ui.appointment.classList.add("on"):this.ui.appointment.classList.remove("on"))}this.ui.wordclock&&this.updateWordClock(t),this.ui.date&&this.updateDate(t);let e=t.getHours();e=e<13?e:e-12;const s=t.getMinutes();this._time1&&this._time2&&(this._time2.hours.innerHTML=this._time1.hours.innerHTML,this._time2.minutes.innerHTML=this._time1.minutes.innerHTML,this._time1.hours.innerHTML=e<10?"0"+e:e,this._time1.minutes.innerHTML=s<10?"0"+s:s,this._time1.classList.toggle("on"))}updateDate(t){if(!this.ui.date)return;let e="ddd DD MMM YY HH:mm";this.globalMasks[e]&&(e=this.globalMasks[e]);const s=e.replace(/M+|d+|y+|z+|p+|h+|s+|/gi,t=>`[<span id='${{s:"seconds",m:"minute",h:"hour",H:"hour",d:"weekday",D:"date",M:"month",Y:"year",T:"ampm"}[t.charAt(0)]}'>]${t}[</span>]`),n=Ht(t,s);this.ui.date.innerHTML!==n&&(this.ui.date.innerHTML=n)}updateWordClock(t){const e=this.ui.wordclock;if(!e)return;const s=t.getHours()%12;let n=t.getMinutes();const i=(n-=n%5)>30?60-n:n,o=`${s}:${n}`;e.current!==o&&(e.current=o,Object.keys(e.hours).forEach(t=>e.hours[t].classList.remove("on")),Object.keys(e.minutes).forEach(t=>e.minutes[t].classList.remove("on")),e.to.forEach(t=>t.classList.remove("on")),e.past.forEach(t=>t.classList.remove("on")),n>30?(e.to.forEach(t=>t.classList.add("on")),e.hours[(s+1)%12].classList.add("on")):(e.hours[s].classList.add("on"),0!==n&&e.past.forEach(t=>t.classList.add("on"))),i in e.minutes?e.minutes[i].classList.add("on"):25===i&&(e.minutes[20].classList.add("on"),e.minutes[5].classList.add("on")))}getCardSize(){return this.ui.wordclock?10:3}};zt.wordclock_css=lt`
  #wordclock {
    text-align: left;
    display: inline-block;
    padding: 2em;
    margin: 3em;
    background: #222;
    color: grey;
    border: 1px solid #333;
    border-radius: .5em;
    font-family: 'Courier New', monospace;
    word-spacing: -1.1em;
    letter-spacing: .5em;
    white-space: nowrap;
  }
  #wordclock > .word {
    text-transform: uppercase;
    font-size: 2em;
    word-spacing: 0em;
    opacity: .1;
    transition: all 3s;
  }

  #wordclock > .word.on {
    opacity: 1;
    color: #0af;
    text-shadow: 0 0 5px #6bf;
  }
`,t([ot()],zt.prototype,"hass",void 0),t([ot()],zt.prototype,"_config",void 0),zt=Vt=t([st("clock-card")],zt);export{zt as ClockCard};
//# sourceMappingURL=clock-card.js.map
