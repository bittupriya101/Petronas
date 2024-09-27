/*!
  * Bootstrap v5.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)}(this,(function(t){"use strict";function e(t){if(t&&t.__esModule)return t;const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t)for(const i in t)if("default"!==i){const s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}const i=e(t),s="transitionend",n=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},o=t=>{const e=n(t);return e&&document.querySelector(e)?e:null},r=t=>{const e=n(t);return e?document.querySelector(e):null},a=t=>{t.dispatchEvent(new Event(s))},l=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,h=t=>{if(!l(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),u=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u(t.parentNode):null},_=()=>{},g=t=>{t.offsetHeight},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,p=[],m=()=>"rtl"===document.documentElement.dir,b=t=>{var e;e=()=>{const e=f();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}},"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of p)t()})),p.push(e)):e()},v=t=>{"function"==typeof t&&t()},y=(t,e,i=!0)=>{if(!i)return void v(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let o=!1;const r=({target:i})=>{i===e&&(o=!0,e.removeEventListener(s,r),v(t))};e.addEventListener(s,r),setTimeout((()=>{o||a(e)}),n)},w=(t,e,i,s)=>{const n=t.length;let o=t.indexOf(e);return-1===o?!i&&s?t[n-1]:t[0]:(o+=i?1:-1,s&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},A=/[^.]*(?=\..*)\.|.*/,T=/\..*/,E=/::\d+$/,C={};let k=1;const L={mouseenter:"mouseover",mouseleave:"mouseout"},I=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${k++}`||t.uidEvent||k++}function S(t){const e=O(t);return t.uidEvent=e,C[e]=C[e]||{},C[e]}function D(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function N(t,e,i){const s="string"==typeof e,n=s?i:e||i;let o=j(t);return I.has(o)||(o=t),[s,n,o]}function P(t,e,i,s,n){if("string"!=typeof e||!t)return;let[o,r,a]=N(e,i,s);if(e in L){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=S(t),c=l[a]||(l[a]={}),h=D(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&n);const d=O(r,e.replace(A,"")),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return F(n,{delegateTarget:r}),s.oneOff&&$.off(t,n.type,e,i),i.apply(r,[n])}}(t,i,r):function(t,e){return function i(s){return F(s,{delegateTarget:t}),i.oneOff&&$.off(t,s.type,e),e.apply(t,[s])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function x(t,e,i,s,n){const o=D(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function M(t,e,i,s){const n=e[i]||{};for(const o of Object.keys(n))if(o.includes(s)){const s=n[o];x(t,e,i,s.callable,s.delegationSelector)}}function j(t){return t=t.replace(T,""),L[t]||t}const $={on(t,e,i,s){P(t,e,i,s,!1)},one(t,e,i,s){P(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=N(e,i,s),a=r!==e,l=S(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))M(t,l,i,e.slice(1));for(const i of Object.keys(c)){const s=i.replace(E,"");if(!a||e.includes(s)){const e=c[i];x(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;x(t,l,r,o,n?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=f();let n=null,o=!0,r=!0,a=!1;e!==j(e)&&s&&(n=s.Event(e,i),s(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=F(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}};function F(t,e){for(const[i,s]of Object.entries(e||{}))try{t[i]=s}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>s})}return t}const z=new Map,H={set(t,e,i){z.has(t)||z.set(t,new Map);const s=z.get(t);s.has(e)||0===s.size?s.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>z.has(t)&&z.get(t).get(e)||null,remove(t,e){if(!z.has(t))return;const i=z.get(t);i.delete(e),0===i.size&&z.delete(t)}};function q(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function B(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const W={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${B(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${B(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const s of i){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=q(t.dataset[s])}return e},getDataAttribute:(t,e)=>q(t.getAttribute(`data-bs-${B(e)}`))};class R{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=l(e)?W.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...l(e)?W.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const s of Object.keys(e)){const n=e[s],o=t[s],r=l(o)?"element":null==(i=o)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(n).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)}var i}}class V extends R{constructor(t,e){super(),(t=c(t))&&(this._element=t,this._config=this._getConfig(e),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),$.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){y(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return H.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.1"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const K=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;$.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),d(this))return;const n=r(this)||this.closest(`.${s}`);t.getOrCreateInstance(n)[e]()}))};class Q extends V{static get NAME(){return"alert"}close(){if($.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),$.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}K(Q,"close"),b(Q);const X='[data-bs-toggle="button"]';class Y extends V{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}$.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),b(Y);const U={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let s=t.parentNode.closest(e);for(;s;)i.push(s),s=s.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!d(t)&&h(t)))}},G={endCallback:null,leftCallback:null,rightCallback:null},J={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Z extends R{constructor(t,e){super(),this._element=t,t&&Z.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return G}static get DefaultType(){return J}static get NAME(){return"swipe"}dispose(){$.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),v(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&v(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?($.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),$.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):($.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),$.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),$.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const tt="next",et="prev",it="left",st="right",nt="slid.bs.carousel",ot="carousel",rt="active",at={ArrowLeft:st,ArrowRight:it},lt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ct={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ht extends V{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=U.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ot&&this.cycle()}static get Default(){return lt}static get DefaultType(){return ct}static get NAME(){return"carousel"}next(){this._slide(tt)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(et)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?$.one(this._element,nt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void $.one(this._element,nt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?tt:et;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&$.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&($.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),$.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&Z.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of U.find(".carousel-item img",this._element))$.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(it)),rightCallback:()=>this._slide(this._directionToOrder(st)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new Z(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=at[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=U.findOne(".active",this._indicatorsElement);e.classList.remove(rt),e.removeAttribute("aria-current");const i=U.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(rt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===tt,n=e||w(this._getItems(),i,s,this._config.wrap);if(n===i)return;const o=this._getItemIndex(n),r=e=>$.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!n)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n;const l=s?"carousel-item-start":"carousel-item-end",c=s?"carousel-item-next":"carousel-item-prev";n.classList.add(c),g(n),i.classList.add(l),n.classList.add(l),this._queueCallback((()=>{n.classList.remove(l,c),n.classList.add(rt),i.classList.remove(rt,c,l),this._isSliding=!1,r(nt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return U.findOne(".active.carousel-item",this._element)}_getItems(){return U.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return m()?t===it?et:tt:t===it?tt:et}_orderToDirection(t){return m()?t===et?it:st:t===et?st:it}static jQueryInterface(t){return this.each((function(){const e=ht.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}$.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=r(this);if(!e||!e.classList.contains(ot))return;t.preventDefault();const i=ht.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===W.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),$.on(window,"load.bs.carousel.data-api",(()=>{const t=U.find('[data-bs-ride="carousel"]');for(const e of t)ht.getOrCreateInstance(e)})),b(ht);const dt="show",ut="collapse",_t="collapsing",gt='[data-bs-toggle="collapse"]',ft={parent:null,toggle:!0},pt={parent:"(null|element)",toggle:"boolean"};class mt extends V{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=U.find(gt);for(const t of i){const e=o(t),i=U.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ft}static get DefaultType(){return pt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>mt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if($.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ut),this._element.classList.add(_t),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(_t),this._element.classList.add(ut,dt),this._element.style[e]="",$.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if($.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,g(this._element),this._element.classList.add(_t),this._element.classList.remove(ut,dt);for(const t of this._triggerArray){const e=r(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(_t),this._element.classList.add(ut),$.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(dt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=c(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(gt);for(const e of t){const t=r(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=U.find(":scope .collapse .collapse",this._config.parent);return U.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=mt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}$.on(document,"click.bs.collapse.data-api",gt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=o(this),i=U.find(e);for(const t of i)mt.getOrCreateInstance(t,{toggle:!1}).toggle()})),b(mt);const bt="dropdown",vt="ArrowUp",yt="ArrowDown",wt="click.bs.dropdown.data-api",At="keydown.bs.dropdown.data-api",Tt="show",Et='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ct=`${Et}.show`,kt=".dropdown-menu",Lt=m()?"top-end":"top-start",It=m()?"top-start":"top-end",Ot=m()?"bottom-end":"bottom-start",St=m()?"bottom-start":"bottom-end",Dt=m()?"left-start":"right-start",Nt=m()?"right-start":"left-start",Pt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},xt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Mt extends V{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=U.next(this._element,kt)[0]||U.prev(this._element,kt)[0],this._inNavbar=this._detectNavbar()}static get Default(){return Pt}static get DefaultType(){return xt}static get NAME(){return bt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!$.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))$.on(t,"mouseover",_);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Tt),this._element.classList.add(Tt),$.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(d(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!$.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))$.off(t,"mouseover",_);this._popper&&this._popper.destroy(),this._menu.classList.remove(Tt),this._element.classList.remove(Tt),this._element.setAttribute("aria-expanded","false"),W.removeDataAttribute(this._menu,"popper"),$.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!l(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:l(this._config.reference)?t=c(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=i.createPopper(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Tt)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Dt;if(t.classList.contains("dropstart"))return Nt;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?It:Lt:e?St:Ot}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(W.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>h(t)));i.length&&w(i,e,t===yt,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Mt.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=U.find(Ct);for(const i of e){const e=Mt.getInstance(i);if(!e||!1===e._config.autoClose)continue;const s=t.composedPath(),n=s.includes(e._menu);if(s.includes(e._element)||"inside"===e._config.autoClose&&!n||"outside"===e._config.autoClose&&n)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,s=[vt,yt].includes(t.key);if(!s&&!i)return;if(e&&!i)return;t.preventDefault();const n=this.matches(Et)?this:U.prev(this,Et)[0]||U.next(this,Et)[0],o=Mt.getOrCreateInstance(n);if(s)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),n.focus())}}$.on(document,At,Et,Mt.dataApiKeydownHandler),$.on(document,At,kt,Mt.dataApiKeydownHandler),$.on(document,wt,Mt.clearMenus),$.on(document,"keyup.bs.dropdown.data-api",Mt.clearMenus),$.on(document,wt,Et,(function(t){t.preventDefault(),Mt.getOrCreateInstance(this).toggle()})),b(Mt);const jt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",$t=".sticky-top",Ft="padding-right",zt="margin-right";class Ht{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ft,(e=>e+t)),this._setElementAttributes(jt,Ft,(e=>e+t)),this._setElementAttributes($t,zt,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ft),this._resetElementAttributes(jt,Ft),this._resetElementAttributes($t,zt)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&W.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=W.getDataAttribute(t,e);null!==i?(W.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(l(t))e(t);else for(const i of U.find(t,this._element))e(i)}}const qt="show",Bt="mousedown.bs.backdrop",Wt={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Rt={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Vt extends R{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Wt}static get DefaultType(){return Rt}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void v(t);this._append();const e=this._getElement();this._config.isAnimated&&g(e),e.classList.add(qt),this._emulateAnimation((()=>{v(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(qt),this._emulateAnimation((()=>{this.dispose(),v(t)}))):v(t)}dispose(){this._isAppended&&($.off(this._element,Bt),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=c(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),$.on(t,Bt,(()=>{v(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){y(t,this._getElement(),this._config.isAnimated)}}const Kt=".bs.focustrap",Qt="backward",Xt={autofocus:!0,trapElement:null},Yt={autofocus:"boolean",trapElement:"element"};class Ut extends R{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Xt}static get DefaultType(){return Yt}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),$.off(document,Kt),$.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),$.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,$.off(document,Kt))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=U.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===Qt?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Qt:"forward")}}const Gt="hidden.bs.modal",Jt="show.bs.modal",Zt="modal-open",te="show",ee="modal-static",ie={backdrop:!0,focus:!0,keyboard:!0},se={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ne extends V{constructor(t,e){super(t,e),this._dialog=U.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ht,this._addEventListeners()}static get Default(){return ie}static get DefaultType(){return se}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||$.trigger(this._element,Jt,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Zt),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&($.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(te),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])$.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Vt({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ut({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=U.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),g(this._element),this._element.classList.add(te),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,$.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){$.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),$.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),$.on(this._element,"mousedown.dismiss.bs.modal",(t=>{$.one(this._element,"click.dismiss.bs.modal",(e=>{this._dialog.contains(t.target)||this._dialog.contains(e.target)||("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Zt),this._resetAdjustments(),this._scrollBar.reset(),$.trigger(this._element,Gt)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if($.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(ee)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ee),this._queueCallback((()=>{this._element.classList.remove(ee),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=m()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=m()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=ne.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}$.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=r(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),$.one(e,Jt,(t=>{t.defaultPrevented||$.one(e,Gt,(()=>{h(this)&&this.focus()}))}));const i=U.findOne(".modal.show");i&&ne.getInstance(i).hide(),ne.getOrCreateInstance(e).toggle(this)})),K(ne),b(ne);const oe="show",re="showing",ae="hiding",le=".offcanvas.show",ce="hidePrevented.bs.offcanvas",he="hidden.bs.offcanvas",de={backdrop:!0,keyboard:!0,scroll:!1},ue={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class _e extends V{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return de}static get DefaultType(){return ue}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||$.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Ht).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(re),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(oe),this._element.classList.remove(re),$.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&($.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ae),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(oe,ae),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Ht).reset(),$.trigger(this._element,he)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Vt({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():$.trigger(this._element,ce)}:null})}_initializeFocusTrap(){return new Ut({trapElement:this._element})}_addEventListeners(){$.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():$.trigger(this._element,ce))}))}static jQueryInterface(t){return this.each((function(){const e=_e.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}$.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=r(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;$.one(e,he,(()=>{h(this)&&this.focus()}));const i=U.findOne(le);i&&i!==e&&_e.getInstance(i).hide(),_e.getOrCreateInstance(e).toggle(this)})),$.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of U.find(le))_e.getOrCreateInstance(t).show()})),$.on(window,"resize.bs.offcanvas",(()=>{for(const t of U.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&_e.getOrCreateInstance(t).hide()})),K(_e),b(_e);const ge=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),fe=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,pe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,me=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!ge.has(i)||Boolean(fe.test(t.nodeValue)||pe.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},be={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ve={allowList:be,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ye={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},we={entry:"(string|element|function|null)",selector:"(string|element)"};class Ae extends R{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return ve}static get DefaultType(){return ye}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},we)}_setContent(t,e,i){const s=U.findOne(i,t);s&&((e=this._resolvePossibleFunction(e))?l(e)?this._putElementInTemplate(c(e),s):this._config.html?s.innerHTML=this._maybeSanitize(e):s.textContent=e:s.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...s.body.querySelectorAll("*"));for(const t of n){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const s=[].concat(...t.attributes),n=[].concat(e["*"]||[],e[i]||[]);for(const e of s)me(e,n)||t.removeAttribute(e.nodeName)}return s.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Te=new Set(["sanitize","allowList","sanitizeFn"]),Ee="fade",Ce="show",ke=".modal",Le="hide.bs.modal",Ie="hover",Oe="focus",Se={AUTO:"auto",TOP:"top",RIGHT:m()?"left":"right",BOTTOM:"bottom",LEFT:m()?"right":"left"},De={allowList:be,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Ne={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Pe extends V{constructor(t,e){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return De}static get DefaultType(){return Ne}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled){if(t){const e=this._initializeOnDelegatedTarget(t);return e._activeTrigger.click=!e._activeTrigger.click,void(e._isWithActiveTrigger()?e._enter():e._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),$.off(this._element.closest(ke),Le,this._hideModalHandler),this.tip&&this.tip.remove(),this._config.originalTitle&&this._element.setAttribute("title",this._config.originalTitle),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=$.trigger(this._element,this.constructor.eventName("show")),e=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this.tip&&(this.tip.remove(),this.tip=null);const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),$.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._popper=this._createPopper(i),i.classList.add(Ce),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))$.on(t,"mouseover",_);this._queueCallback((()=>{$.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if($.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(Ce),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))$.off(t,"mouseover",_);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),$.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ee,Ce),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ee),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ae({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ee)}_isShown(){return this.tip&&this.tip.classList.contains(Ce)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,s=Se[e.toUpperCase()];return i.createPopper(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)$.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>this.toggle(t)));else if("manual"!==e){const t=e===Ie?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===Ie?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");$.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?Oe:Ie]=!0,e._enter()})),$.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?Oe:Ie]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},$.on(this._element.closest(ke),Le,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=W.getDataAttributes(this._element);for(const t of Object.keys(e))Te.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:c(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute("title")||"","number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=Pe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(Pe);const xe={...Pe.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Me={...Pe.DefaultType,content:"(null|string|element|function)"};class je extends Pe{static get Default(){return xe}static get DefaultType(){return Me}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(je);const $e="click.bs.scrollspy",Fe="active",ze="[href]",He={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},qe={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Be extends V{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return He}static get DefaultType(){return qe}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=c(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&($.off(this._config.target,$e),$.on(this._config.target,$e,ze,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:s,behavior:"smooth"});i.scrollTop=s}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},s=(this._rootElement||document.documentElement).scrollTop,n=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&t){if(i(o),!s)return}else n||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=U.find(ze,this._config.target);for(const e of t){if(!e.hash||d(e))continue;const t=U.findOne(e.hash,this._element);h(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Fe),this._activateParents(t),$.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))U.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Fe);else for(const e of U.parents(t,".nav, .list-group"))for(const t of U.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(Fe)}_clearActiveClass(t){t.classList.remove(Fe);const e=U.find("[href].active",t);for(const t of e)t.classList.remove(Fe)}static jQueryInterface(t){return this.each((function(){const e=Be.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}$.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of U.find('[data-bs-spy="scroll"]'))Be.getOrCreateInstance(t)})),b(Be);const We="ArrowLeft",Re="ArrowRight",Ve="ArrowUp",Ke="ArrowDown",Qe="active",Xe="fade",Ye="show",Ue='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ge=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ue}`;class Je extends V{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),$.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?$.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;$.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Qe),this._activate(r(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),$.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Ye)}),t,t.classList.contains(Xe)))}_deactivate(t,e){t&&(t.classList.remove(Qe),t.blur(),this._deactivate(r(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),$.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Ye)}),t,t.classList.contains(Xe)))}_keydown(t){if(![We,Re,Ve,Ke].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[Re,Ke].includes(t.key),i=w(this._getChildren().filter((t=>!d(t))),t.target,e,!0);i&&Je.getOrCreateInstance(i).show()}_getChildren(){return U.find(Ge,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=r(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const s=(t,s)=>{const n=U.findOne(t,i);n&&n.classList.toggle(s,e)};s(".dropdown-toggle",Qe),s(".dropdown-menu",Ye),s(".dropdown-item",Qe),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Qe)}_getInnerElement(t){return t.matches(Ge)?t:U.findOne(Ge,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Je.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}$.on(document,"click.bs.tab",Ue,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this)||Je.getOrCreateInstance(this).show()})),$.on(window,"load.bs.tab",(()=>{for(const t of U.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))Je.getOrCreateInstance(t)})),b(Je);const Ze="hide",ti="show",ei="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},si={animation:!0,autohide:!0,delay:5e3};class ni extends V{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return si}static get DefaultType(){return ii}static get NAME(){return"toast"}show(){$.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ze),g(this._element),this._element.classList.add(ti,ei),this._queueCallback((()=>{this._element.classList.remove(ei),$.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&($.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(ei),this._queueCallback((()=>{this._element.classList.add(Ze),this._element.classList.remove(ei,ti),$.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ti),super.dispose()}isShown(){return this._element.classList.contains(ti)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){$.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),$.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),$.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),$.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return K(ni),b(ni),{Alert:Q,Button:Y,Carousel:ht,Collapse:mt,Dropdown:Mt,Modal:ne,Offcanvas:_e,Popover:je,ScrollSpy:Be,Tab:Je,Toast:ni,Tooltip:Pe}}));

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});;
function r(n,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function Bt(n,t,i){t&&r(n.prototype,t),i&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1})}
/*!
 * Splide.js
 * Version  : 4.0.17
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var n,t;n=this,t=function(){"use strict";var v="(prefers-reduced-motion: reduce)",G=4,$=5,i={CREATED:1,MOUNTED:2,IDLE:3,MOVING:G,SCROLLING:$,DRAGGING:6,DESTROYED:7};function M(n){n.length=0}function u(n,t,i){return Array.prototype.slice.call(n,t,i)}function D(n){return n.bind.apply(n,[null].concat(u(arguments,1)))}function nn(){}var p=setTimeout;function h(n){requestAnimationFrame(n)}function r(n,t){return typeof t===n}function tn(n){return!e(n)&&r("object",n)}var o=Array.isArray,E=D(r,"function"),P=D(r,"string"),rn=D(r,"undefined");function e(n){return null===n}function y(n){return n instanceof HTMLElement}function g(n){return o(n)?n:[n]}function m(n,t){g(n).forEach(t)}function b(n,t){return-1<n.indexOf(t)}function S(n,t){return n.push.apply(n,g(t)),n}function A(t,n,i){t&&m(n,function(n){n&&t.classList[i?"add":"remove"](n)})}function z(n,t){A(n,P(t)?t.split(" "):t,!0)}function L(n,t){m(t,n.appendChild.bind(n))}function un(n,i){m(n,function(n){var t=(i||n).parentNode;t&&t.insertBefore(n,i)})}function on(n,t){return y(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function en(n,t){n=n?u(n.children):[];return t?n.filter(function(n){return on(n,t)}):n}function cn(n,t){return t?en(n,t)[0]:n.firstElementChild}var fn=Object.keys;function w(n,t,i){if(n)for(var r=fn(n),r=i?r.reverse():r,u=0;u<r.length;u++){var o=r[u];if("__proto__"!==o&&!1===t(n[o],o))break}}function an(r){return u(arguments,1).forEach(function(i){w(i,function(n,t){r[t]=i[t]})}),r}function d(i){return u(arguments,1).forEach(function(n){w(n,function(n,t){o(n)?i[t]=n.slice():tn(n)?i[t]=d({},tn(i[t])?i[t]:{},n):i[t]=n})}),i}function sn(t,n){g(n||fn(t)).forEach(function(n){delete t[n]})}function I(n,i){m(n,function(t){m(i,function(n){t&&t.removeAttribute(n)})})}function R(i,t,r){tn(t)?w(t,function(n,t){R(i,t,n)}):m(i,function(n){e(r)||""===r?I(n,t):n.setAttribute(t,String(r))})}function C(n,t,i){n=document.createElement(n);return t&&(P(t)?z:R)(n,t),i&&L(i,n),n}function O(n,t,i){if(rn(i))return getComputedStyle(n)[t];e(i)||(n.style[t]=""+i)}function ln(n,t){O(n,"display",t)}function dn(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function T(n,t){return n.getAttribute(t)}function vn(n,t){return n&&n.classList.contains(t)}function j(n){return n.getBoundingClientRect()}function N(n){m(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function hn(n){return cn((new DOMParser).parseFromString(n,"text/html").body)}function F(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function pn(n,t){return n&&n.querySelector(t)}function gn(n,t){return t?u(n.querySelectorAll(t)):[]}function W(n,t){A(n,t,!1)}function mn(n){return n.timeStamp}function x(n){return P(n)?n:n?n+"px":""}var _="splide",c="data-"+_;function yn(n,t){if(!n)throw new Error("["+_+"] "+(t||""))}var X=Math.min,bn=Math.max,wn=Math.floor,_n=Math.ceil,Y=Math.abs;function xn(n,t,i){return Y(n-t)<i}function kn(n,t,i,r){var u=X(t,i),t=bn(t,i);return r?u<n&&n<t:u<=n&&n<=t}function En(n,t,i){var r=X(t,i),t=bn(t,i);return X(bn(r,n),t)}function Sn(n){return(0<n)-(n<0)}function Ln(t,n){return m(n,function(n){t=t.replace("%s",""+n)}),t}function An(n){return n<10?"0"+n:""+n}var On={};function Mn(){var c=[];function i(n,i,r){m(n,function(t){t&&m(i,function(n){n.split(" ").forEach(function(n){n=n.split(".");r(t,n[0],n[1])})})})}return{bind:function(n,t,o,e){i(n,t,function(n,t,i){var r="addEventListener"in n,u=r?n.removeEventListener.bind(n,t,o,e):n.removeListener.bind(n,o);r?n.addEventListener(t,o,e):n.addListener(o),c.push([n,t,i,o,u])})},unbind:function(n,t,u){i(n,t,function(t,i,r){c=c.filter(function(n){return!!(n[0]!==t||n[1]!==i||n[2]!==r||u&&n[3]!==u)||(n[4](),!1)})})},dispatch:function(n,t,i){var r;return"function"==typeof CustomEvent?r=new CustomEvent(t,{bubbles:!0,detail:i}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,i),n.dispatchEvent(r),r},destroy:function(){c.forEach(function(n){n[4]()}),M(c)}}}var H="mounted",U="move",Dn="moved",Pn="shifted",zn="click",In="active",Rn="inactive",Cn="visible",Tn="hidden",jn="slide:keydown",q="refresh",B="updated",k="resize",Nn="resized",Gn="scroll",J="scrolled",f="destroy",Fn="navigation:mounted",Wn="autoplay:play",Xn="autoplay:pause",Yn="lazyload:loaded";function K(n){var i=n?n.event.bus:document.createDocumentFragment(),r=Mn();return n&&n.event.on(f,r.destroy),an(r,{bus:i,on:function(n,t){r.bind(i,g(n).join(" "),function(n){t.apply(t,o(n.detail)?n.detail:[])})},off:D(r.unbind,i),emit:function(n){r.dispatch(i,n,u(arguments,1))}})}function Hn(t,n,i,r){var u,o,e=Date.now,c=0,f=!0,a=0;function s(){if(!f){if(c=t?X((e()-u)/t,1):1,i&&i(c),1<=c&&(n(),u=e(),r&&++a>=r))return l();h(s)}}function l(){f=!0}function d(){o&&cancelAnimationFrame(o),f=!(o=c=0)}return{start:function(n){n||d(),u=e()-(n?c*t:0),f=!1,h(s)},rewind:function(){u=e(),c=0,i&&i(c)},pause:l,cancel:d,set:function(n){t=n},isPaused:function(){return f}}}function a(n){var t=n;return{set:function(n){t=n},is:function(n){return b(g(n),t)}}}var n="Arrow",Un=n+"Left",qn=n+"Right",s=n+"Up",n=n+"Down",Bn="ttb",l={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[s,qn],ArrowRight:[n,Un]};var V="role",Jn="tabindex",t="aria-",Kn=t+"controls",Vn=t+"current",Qn=t+"selected",Q=t+"label",Zn=t+"labelledby",$n=t+"hidden",nt=t+"orientation",tt=t+"roledescription",it=t+"live",rt=t+"busy",ut=t+"atomic",ot=[V,Jn,"disabled",Kn,Vn,Q,Zn,$n,nt,tt],et=_,ct=_+"__track",ft=_+"__list",at=_+"__slide",st=at+"--clone",lt=at+"__container",dt=_+"__arrows",vt=_+"__arrow",ht=vt+"--prev",pt=vt+"--next",gt=_+"__pagination",mt=gt+"__page",yt=_+"__progress"+"__bar",bt=_+"__toggle",wt=_+"__sr",Z="is-active",_t="is-prev",xt="is-next",kt="is-visible",Et="is-loading",St="is-focus-in",Lt=[Z,kt,_t,xt,Et,St];var At="touchstart mousedown",Ot="touchmove mousemove",Mt="touchend touchcancel mouseup click";var Dt="slide",Pt="loop",zt="fade";function It(u,r,t,o){var e,n=K(u),i=n.on,c=n.emit,f=n.bind,a=u.Components,s=u.root,l=u.options,d=l.isNavigation,v=l.updateOnMove,h=l.i18n,p=l.pagination,g=l.slideFocus,m=a.Direction.resolve,y=T(o,"style"),b=T(o,Q),w=-1<t,_=cn(o,"."+lt);function x(){var n=u.splides.map(function(n){n=n.splide.Components.Slides.getAt(r);return n?n.slide.id:""}).join(" ");R(o,Q,Ln(h.slideX,(w?t:r)+1)),R(o,Kn,n),R(o,V,g?"button":""),g&&I(o,tt)}function k(){e||E()}function E(){var n,t,i;e||(n=u.index,(i=S())!==vn(o,Z)&&(A(o,Z,i),R(o,Vn,d&&i||""),c(i?In:Rn,L)),i=function(){if(u.is(zt))return S();var n=j(a.Elements.track),t=j(o),i=m("left",!0),r=m("right",!0);return wn(n[i])<=_n(t[i])&&wn(t[r])<=_n(n[r])}(),t=!i&&(!S()||w),u.state.is([G,$])||R(o,$n,t||""),R(gn(o,l.focusableNodes||""),Jn,t?-1:""),g&&R(o,Jn,t?-1:0),i!==vn(o,kt)&&(A(o,kt,i),c(i?Cn:Tn,L)),i||document.activeElement!==o||(t=a.Slides.getAt(u.index))&&dn(t.slide),A(o,_t,r===n-1),A(o,xt,r===n+1))}function S(){var n=u.index;return n===r||l.cloneStatus&&n===t}var L={index:r,slideIndex:t,slide:o,container:_,isClone:w,mount:function(){w||(o.id=s.id+"-slide"+An(r+1),R(o,V,p?"tabpanel":"group"),R(o,tt,h.slide),R(o,Q,b||Ln(h.slideLabel,[r+1,u.length]))),f(o,"click",D(c,zn,L)),f(o,"keydown",D(c,jn,L)),i([Dn,Pn,J],E),i(Fn,x),v&&i(U,k)},destroy:function(){e=!0,n.destroy(),W(o,Lt),I(o,ot),R(o,"style",y),R(o,Q,b||"")},update:E,style:function(n,t,i){O(i&&_||o,n,t)},isWithin:function(n,t){return n=Y(n-r),(n=w||!l.rewind&&!u.is(Pt)?n:X(n,u.length-n))<=t}};return L}var Rt=c+"-interval";var Ct={passive:!1,capture:!0};var Tt={Spacebar:" ",Right:qn,Left:Un,Up:s,Down:n};function jt(n){return n=P(n)?n:n.key,Tt[n]||n}var Nt="keydown";var Gt=c+"-lazy",Ft=Gt+"-srcset",Wt="["+Gt+"], ["+Ft+"]";var Xt=[" ","Enter"];var Yt=Object.freeze({__proto__:null,Media:function(r,n,u){var o=r.state,t=u.breakpoints||{},e=u.reducedMotion||{},i=Mn(),c=[];function f(n){n&&i.destroy()}function a(n,t){t=matchMedia(t);i.bind(t,"change",s),c.push([n,t])}function s(){var n=o.is(7),t=u.direction,i=c.reduce(function(n,t){return d(n,t[1].matches?t[0]:{})},{});sn(u),l(i),u.destroy?r.destroy("completely"===u.destroy):n?(f(!0),r.mount()):t!==u.direction&&r.refresh()}function l(n,t){d(u,n),t&&d(Object.getPrototypeOf(u),n),o.is(1)||r.emit(B,u)}return{setup:function(){var i="min"===u.mediaQuery;fn(t).sort(function(n,t){return i?+n-+t:+t-+n}).forEach(function(n){a(t[n],"("+(i?"min":"max")+"-width:"+n+"px)")}),a(e,v),s()},destroy:f,reduce:function(n){matchMedia(v).matches&&(n?d(u,e):sn(u,fn(e)))},set:l}},Direction:function(n,t,u){return{resolve:function(n,t,i){var r="rtl"!==(i=i||u.direction)||t?i===Bn?0:-1:1;return l[n]&&l[n][r]||n.replace(/width|left|right/i,function(n,t){n=l[n.toLowerCase()][r]||n;return 0<t?n.charAt(0).toUpperCase()+n.slice(1):n})},orient:function(n){return n*("rtl"===u.direction?1:-1)}}},Elements:function(n,t,i){var r,u,o,e=K(n),c=e.on,f=e.bind,a=n.root,s=i.i18n,l={},d=[],v=[],h=[];function p(){r=y("."+ct),u=cn(r,"."+ft),yn(r&&u,"A track/list element is missing."),S(d,en(u,"."+at+":not(."+st+")")),w({arrows:dt,pagination:gt,prev:ht,next:pt,bar:yt,toggle:bt},function(n,t){l[t]=y("."+n)}),an(l,{root:a,track:r,list:u,slides:d});var n=a.id||function(n){return""+n+An(On[n]=(On[n]||0)+1)}(_),t=i.role;a.id=n,r.id=r.id||n+"-track",u.id=u.id||n+"-list",!T(a,V)&&"SECTION"!==a.tagName&&t&&R(a,V,t),R(a,tt,s.carousel),R(u,V,"presentation"),m()}function g(n){var t=ot.concat("style");M(d),W(a,v),W(r,h),I([r,u],t),I(a,n?t:["style",tt])}function m(){W(a,v),W(r,h),v=b(et),h=b(ct),z(a,v),z(r,h),R(a,Q,i.label),R(a,Zn,i.labelledby)}function y(n){n=pn(a,n);return n&&function(n,t){if(E(n.closest))return n.closest(t);for(var i=n;i&&1===i.nodeType&&!on(i,t);)i=i.parentElement;return i}(n,"."+et)===a?n:void 0}function b(n){return[n+"--"+i.type,n+"--"+i.direction,i.drag&&n+"--draggable",i.isNavigation&&n+"--nav",n===et&&Z]}return an(l,{setup:p,mount:function(){c(q,g),c(q,p),c(B,m),f(document,At+" keydown",function(n){o="keydown"===n.type},{capture:!0}),f(a,"focusin",function(){A(a,St,!!o)})},destroy:g})},Slides:function(r,u,o){var n=K(r),t=n.on,e=n.emit,c=n.bind,f=(n=u.Elements).slides,a=n.list,s=[];function i(){f.forEach(function(n,t){d(n,t,-1)})}function l(){h(function(n){n.destroy()}),M(s)}function d(n,t,i){t=It(r,t,i,n);t.mount(),s.push(t),s.sort(function(n,t){return n.index-t.index})}function v(n){return n?p(function(n){return!n.isClone}):s}function h(n,t){v(t).forEach(n)}function p(t){return s.filter(E(t)?t:function(n){return P(t)?on(n.slide,t):b(g(t),n.index)})}return{mount:function(){i(),t(q,l),t(q,i)},destroy:l,update:function(){h(function(n){n.update()})},register:d,get:v,getIn:function(n){var t=u.Controller,i=t.toIndex(n),r=t.hasFocus()?1:o.perPage;return p(function(n){return kn(n.index,i,i+r-1)})},getAt:function(n){return p(n)[0]},add:function(n,u){m(n,function(n){var t,i,r;y(n=P(n)?hn(n):n)&&((t=f[u])?un(n,t):L(a,n),z(n,o.classes.slide),t=n,i=D(e,k),t=gn(t,"img"),(r=t.length)?t.forEach(function(n){c(n,"load error",function(){--r||i()})}):i())}),e(q)},remove:function(n){N(p(n).map(function(n){return n.slide})),e(q)},forEach:h,filter:p,style:function(t,i,r){h(function(n){n.style(t,i,r)})},getLength:function(n){return(n?f:s).length},isEnough:function(){return s.length>o.perPage}}},Layout:function(n,t,i){var r,u,o=(f=K(n)).on,e=f.bind,c=f.emit,f=t.Slides,a=t.Direction.resolve,s=(t=t.Elements).root,l=t.track,d=t.list,v=f.getAt,h=f.style;function p(){u=null,r=i.direction===Bn,O(s,"maxWidth",x(i.width)),O(l,a("paddingLeft"),m(!1)),O(l,a("paddingRight"),m(!0)),g()}function g(){var n=j(s);u&&u.width===n.width&&u.height===n.height||(O(l,"height",function(){var n="";r&&(yn(n=y(),"height or heightRatio is missing."),n="calc("+n+" - "+m(!1)+" - "+m(!0)+")");return n}()),h(a("marginRight"),x(i.gap)),h("width",i.autoWidth?null:x(i.fixedWidth)||(r?"":b())),h("height",x(i.fixedHeight)||(r?i.autoHeight?null:b():y()),!0),u=n,c(Nn))}function m(n){var t=i.padding,n=a(n?"right":"left");return t&&x(t[n]||(tn(t)?0:t))||"0px"}function y(){return x(i.height||j(d).width*i.heightRatio)}function b(){var n=x(i.gap);return"calc((100%"+(n&&" + "+n)+")/"+(i.perPage||1)+(n&&" - "+n)+")"}function w(n,t){var i,n=v(n);return n?(n=j(n.slide)[a("right")],i=j(d)[a("left")],Y(n-i)+(t?0:_())):0}function _(){var n=v(0);return n&&parseFloat(O(n.slide,a("marginRight")))||0}return{mount:function(){var n,t,i;p(),e(window,"resize load",(n=D(c,k),function(){i||(i=Hn(t||0,function(){n(),i=null},null,1)).start()})),o([B,q],p),o(k,g)},listSize:function(){return j(d)[a("width")]},slideSize:function(n,t){return(n=v(n||0))?j(n.slide)[a("width")]+(t?0:_()):0},sliderSize:function(){return w(n.length-1,!0)-w(-1,!0)},totalSize:w,getPadding:function(n){return parseFloat(O(l,a("padding"+(n?"Right":"Left"))))||0}}},Clones:function(c,i,f){var n,t=K(c),r=t.on,a=t.emit,s=i.Elements,l=i.Slides,u=i.Direction.resolve,d=[];function o(){if(n=h()){var u=n,o=l.get().slice(),e=o.length;if(e){for(;o.length<u;)S(o,o);S(o.slice(-u),o.slice(0,u)).forEach(function(n,t){var i=t<u,r=function(n,t){n=n.cloneNode(!0);return z(n,f.classes.clone),n.id=c.root.id+"-clone"+An(t+1),n}(n.slide,t);i?un(r,o[0].slide):L(s.list,r),S(d,r),l.register(r,t-u+(i?0:e),n.index)})}a(k)}}function e(){N(d),M(d)}function v(){n<h()&&a(q)}function h(){var n,t=f.clones;return c.is(Pt)?t||(t=(n=f[u("fixedWidth")]&&i.Layout.slideSize(0))&&_n(j(s.track)[u("width")]/n)||f[u("autoWidth")]&&c.length||2*f.perPage):t=0,t}return{mount:function(){o(),r(q,e),r(q,o),r([B,k],v)},destroy:e}},Move:function(r,c,u){var e,n=K(r),t=n.on,f=n.emit,a=r.state.set,o=(n=c.Layout).slideSize,i=n.getPadding,s=n.totalSize,l=n.listSize,d=n.sliderSize,v=(n=c.Direction).resolve,h=n.orient,p=(n=c.Elements).list,g=n.track;function m(){c.Controller.isBusy()||(c.Scroll.cancel(),y(r.index),c.Slides.update())}function y(n){b(k(n,!0))}function b(n,t){r.is(zt)||(t=t?n:function(n){{var t,i;r.is(Pt)&&(t=x(n),i=t>c.Controller.getEnd(),(t<0||i)&&(n=w(n,i)))}return n}(n),O(p,"transform","translate"+v("X")+"("+t+"px)"),n!==t&&f(Pn))}function w(n,t){var i=n-S(t),r=d();return n-=h(r*(_n(Y(i)/r)||1))*(t?1:-1)}function _(){b(E()),e.cancel()}function x(n){for(var t=c.Slides.get(),i=0,r=1/0,u=0;u<t.length;u++){var o=t[u].index,e=Y(k(o,!0)-n);if(!(e<=r))break;r=e,i=o}return i}function k(n,t){var i=h(s(n-1)-(n=n,"center"===(i=u.focus)?(l()-o(n,!0))/2:+i*o(n)||0));return t?(n=i,n=u.trimSpace&&r.is(Dt)?En(n,0,h(d()-l())):n):i}function E(){var n=v("left");return j(p)[n]-j(g)[n]+h(i(!1))}function S(n){return k(n?c.Controller.getEnd():0,!!u.trimSpace)}return{mount:function(){e=c.Transition,t([H,Nn,B,q],m)},move:function(n,t,i,r){var u,o;n!==t&&(u=i<n,o=h(w(E(),u)),u?0<=o:o<=p[v("scrollWidth")]-j(g)[v("width")])&&(_(),b(w(E(),i<n),!0)),a(G),f(U,t,i,n),e.start(t,function(){a(3),f(Dn,t,i,n),r&&r()})},jump:y,translate:b,shift:w,cancel:_,toIndex:x,toPosition:k,getPosition:E,getLimit:S,exceededLimit:function(n,t){t=rn(t)?E():t;var i=!0!==n&&h(t)<h(S(!1)),n=!1!==n&&h(t)>h(S(!0));return i||n},reposition:m}},Controller:function(o,u,e){var c,f,a,n=K(o).on,s=u.Move,l=s.getPosition,r=s.getLimit,d=s.toPosition,t=u.Slides,v=t.isEnough,i=t.getLength,h=o.is(Pt),p=o.is(Dt),g=D(_,!1),m=D(_,!0),y=e.start||0,b=y;function w(){c=i(!0),f=e.perMove,a=e.perPage;var n=En(y,0,c-1);n!==y&&(y=n,s.reposition())}function _(n,t){var i=f||(O()?1:a),i=x(y+i*(n?-1:1),y,!(f||O()));return-1===i&&p&&!xn(l(),r(!n),1)?n?0:E():t?i:k(i)}function x(n,t,i){var r,u;return v()||O()?(r=E(),(u=function(n){if(p&&"move"===e.trimSpace&&n!==y)for(var t=l();t===d(n,!0)&&kn(n,0,o.length-1,!e.rewind);)n<y?--n:++n;return n}(n))!==n&&(t=n,n=u,i=!1),n<0||r<n?n=f||!kn(0,n,t,!0)&&!kn(r,t,n,!0)?h?i?n<0?-(c%a||a):c:n:e.rewind?n<0?r:0:-1:S(L(n)):i&&n!==t&&(n=S(L(t)+(n<t?-1:1)))):n=-1,n}function k(n){return h?(n+c)%c||0:n}function E(){return bn(c-(O()||h&&f?1:a),0)}function S(n){return En(O()?n:a*n,0,E())}function L(n){return O()?n:wn((n>=E()?c-1:n)/a)}function A(n){n!==y&&(b=y,y=n)}function O(){return!rn(e.focus)||e.isNavigation}function M(){return o.state.is([G,$])&&!!e.waitForTransition}return{mount:function(){w(),n([B,q],w)},go:function(n,t,i){var r;M()||-1<(r=k(n=function(n){var t=y;{var i,r;P(n)?(r=n.match(/([+\-<>])(\d+)?/)||[],i=r[1],r=r[2],"+"===i||"-"===i?t=x(y+ +(""+i+(+r||1)),y):">"===i?t=r?S(+r):g(!0):"<"===i&&(t=m(!0))):t=h?n:En(n,0,E())}return t}(n)))&&(t||r!==y)&&(A(r),s.move(n,r,b,i))},scroll:function(n,t,i,r){u.Scroll.scroll(n,t,i,function(){A(k(s.toIndex(l()))),r&&r()})},getNext:g,getPrev:m,getAdjacent:_,getEnd:E,setIndex:A,getIndex:function(n){return n?b:y},toIndex:S,toPage:L,toDest:function(n){return n=s.toIndex(n),p?En(n,0,E()):n},hasFocus:O,isBusy:M}},Arrows:function(u,n,t){var i,r,o=K(u),e=o.on,c=o.bind,f=o.emit,a=t.classes,s=t.i18n,l=n.Elements,d=n.Controller,v=l.arrows,h=l.track,p=v,g=l.prev,m=l.next,y={};function b(){var n=t.arrows;!n||g&&m||(p=v||C("div",a.arrows),g=k(!0),m=k(!1),i=!0,L(p,[g,m]),v||un(p,h)),g&&m&&(an(y,{prev:g,next:m}),ln(p,n?"":"none"),z(p,r=dt+"--"+t.direction),n&&(e([Dn,q,J],E),c(m,"click",D(x,">")),c(g,"click",D(x,"<")),E(),R([g,m],Kn,h.id),f("arrows:mounted",g,m))),e(B,w)}function w(){_(),b()}function _(){o.destroy(),W(p,r),i?(N(v?[g,m]:p),g=m=null):I([g,m],ot)}function x(n){d.go(n,!0)}function k(n){return hn('<button class="'+a.arrow+" "+(n?a.prev:a.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(t.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function E(){var n=u.index,t=d.getPrev(),i=d.getNext(),r=-1<t&&n<t?s.last:s.prev,n=-1<i&&i<n?s.first:s.next;g.disabled=t<0,m.disabled=i<0,R(g,Q,r),R(m,Q,n),f("arrows:updated",g,m,t,i)}return{arrows:y,mount:b,destroy:_,update:E}},Autoplay:function(n,t,i){var r,u,o=K(n),e=o.on,c=o.bind,f=o.emit,a=Hn(i.interval,n.go.bind(n,">"),function(n){var t=l.bar;t&&O(t,"width",100*n+"%"),f("autoplay:playing",n)}),s=a.isPaused,l=t.Elements,d=(o=t.Elements).root,v=o.toggle,h=i.autoplay,p="pause"===h;function g(){s()&&t.Slides.isEnough()&&(a.start(!i.resetProgress),u=r=p=!1,b(),f(Wn))}function m(n){p=!!(n=void 0===n?!0:n),b(),s()||(a.pause(),f(Xn))}function y(){p||(r||u?m(!1):g())}function b(){v&&(A(v,Z,!p),R(v,Q,i.i18n[p?"play":"pause"]))}function w(n){n=t.Slides.getAt(n);a.set(n&&+T(n.slide,Rt)||i.interval)}return{mount:function(){h&&(i.pauseOnHover&&c(d,"mouseenter mouseleave",function(n){r="mouseenter"===n.type,y()}),i.pauseOnFocus&&c(d,"focusin focusout",function(n){u="focusin"===n.type,y()}),v&&c(v,"click",function(){p?g():m(!0)}),e([U,Gn,q],a.rewind),e(U,w),v&&R(v,Kn,l.track.id),p||g(),b())},destroy:a.cancel,play:g,pause:m,isPaused:s}},Cover:function(n,t,i){var r=K(n).on;function u(i){t.Slides.forEach(function(n){var t=cn(n.container||n.slide,"img");t&&t.src&&o(i,t,n)})}function o(n,t,i){i.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),ln(t,n?"none":"")}return{mount:function(){i.cover&&(r(Yn,D(o,!0)),r([H,B,q],D(u,!0)))},destroy:D(u,!1)}},Scroll:function(n,c,o){var f,a,t=K(n),i=t.on,s=t.emit,l=n.state.set,d=c.Move,v=d.getPosition,e=d.getLimit,h=d.exceededLimit,p=d.translate,g=n.is(Dt),m=1;function y(n,t,i,r,u){var o,e=v(),i=(_(),!i||g&&h()||(i=c.Layout.sliderSize(),o=Sn(n)*i*wn(Y(n)/i)||0,n=d.toPosition(c.Controller.toDest(n%i))+o),xn(e,n,1));m=1,t=i?0:t||bn(Y(n-e)/1.5,800),a=r,f=Hn(t,b,D(w,e,n,u),1),l($),s(Gn),f.start()}function b(){l(3),a&&a(),s(J)}function w(n,t,i,r){var u=v(),r=(n+(t-n)*(t=r,(n=o.easingFunc)?n(t):1-Math.pow(1-t,4))-u)*m;p(u+r),g&&!i&&h()&&(m*=.6,Y(r)<10&&y(e(h(!0)),600,!1,a,!0))}function _(){f&&f.cancel()}function r(){f&&!f.isPaused()&&(_(),b())}return{mount:function(){i(U,_),i([B,q],r)},destroy:_,scroll:y,cancel:r}},Drag:function(e,u,c){var f,t,o,a,s,l,d,v,n=K(e),i=n.on,h=n.emit,p=n.bind,g=n.unbind,m=e.state,y=u.Move,b=u.Scroll,w=u.Controller,_=u.Elements.track,x=u.Media.reduce,r=(n=u.Direction).resolve,k=n.orient,E=y.getPosition,S=y.exceededLimit,L=!1;function T(){var n=c.drag;C(!n),a="free"===n}function j(n){var t,i,r;l=!1,d||(t=R(n),i=n.target,r=c.noDrag,on(i,"."+mt+", ."+vt)||r&&on(i,r)||!t&&n.button||(w.isBusy()?F(n,!0):(v=t?_:window,s=m.is([G,$]),o=null,p(v,Ot,A,Ct),p(v,Mt,O,Ct),y.cancel(),b.cancel(),M(n))))}function A(n){var t,i,r,u,o;m.is(6)||(m.set(6),h("drag")),n.cancelable&&(s?(y.translate(f+D(n)/(L&&e.is(Dt)?5:1)),o=200<P(n),t=L!==(L=S()),(o||t)&&M(n),l=!0,h("dragging"),F(n)):Y(D(o=n))>Y(D(o,!0))&&(t=n,i=c.dragMinThreshold,r=tn(i),u=r&&i.mouse||0,r=(r?i.touch:+i)||10,s=Y(D(t))>(R(t)?r:u),F(n)))}function O(n){var t,i,r;m.is(6)&&(m.set(3),h("dragged")),s&&(i=function(n){return E()+Sn(n)*X(Y(n)*(c.flickPower||600),a?1/0:u.Layout.listSize()*(c.flickMaxPages||1))}(t=function(n){if(e.is(Pt)||!L){var t=P(n);if(t&&t<200)return D(n)/t}return 0}(t=n)),r=c.rewind&&c.rewindByDrag,x(!1),a?w.scroll(i,0,c.snap):e.is(zt)?w.go(k(Sn(t))<0?r?"<":"-":r?">":"+"):e.is(Dt)&&L&&r?w.go(S(!0)?">":"<"):w.go(w.toDest(i),!0),x(!0),F(n)),g(v,Ot,A),g(v,Mt,O),s=!1}function N(n){!d&&l&&F(n,!0)}function M(n){o=t,t=n,f=E()}function D(n,t){return I(n,t)-I(z(n),t)}function P(n){return mn(n)-mn(z(n))}function z(n){return t===n&&o||t}function I(n,t){return(R(n)?n.changedTouches[0]:n)["page"+r(t?"Y":"X")]}function R(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function C(n){d=n}return{mount:function(){p(_,Ot,nn,Ct),p(_,Mt,nn,Ct),p(_,At,j,Ct),p(_,"click",N,{capture:!0}),p(_,"dragstart",F),i([H,B],T)},disable:C,isDragging:function(){return s}}},Keyboard:function(t,n,i){var r,u,o=K(t),e=o.on,c=o.bind,f=o.unbind,a=t.root,s=n.Direction.resolve;function l(){var n=i.keyboard;n&&(r="global"===n?window:a,c(r,Nt,h))}function d(){f(r,Nt)}function v(){var n=u;u=!0,p(function(){u=n})}function h(n){u||((n=jt(n))===s(Un)?t.go("<"):n===s(qn)&&t.go(">"))}return{mount:function(){l(),e(B,d),e(B,l),e(U,v)},destroy:d,disable:function(n){u=n}}},LazyLoad:function(i,n,u){var t=K(i),r=t.on,o=t.off,e=t.bind,c=t.emit,f="sequential"===u.lazyLoad,a=[Dn,J],s=[];function l(){M(s),n.Slides.forEach(function(r){gn(r.slide,Wt).forEach(function(n){var t=T(n,Gt),i=T(n,Ft);t===n.src&&i===n.srcset||(t=u.classes.spinner,t=cn(i=n.parentElement,"."+t)||C("span",t,i),s.push([n,r,t]),n.src||ln(n,"none"))})}),(f?p:(o(a),r(a,d),d))()}function d(){(s=s.filter(function(n){var t=u.perPage*((u.preloadPages||1)+1)-1;return!n[1].isWithin(i.index,t)||v(n)})).length||o(a)}function v(n){var t=n[0];z(n[1].slide,Et),e(t,"load error",D(h,n)),R(t,"src",T(t,Gt)),R(t,"srcset",T(t,Ft)),I(t,Gt),I(t,Ft)}function h(n,t){var i=n[0],r=n[1];W(r.slide,Et),"error"!==t.type&&(N(n[2]),ln(i,""),c(Yn,i,r),c(k)),f&&p()}function p(){s.length&&v(s.shift())}return{mount:function(){u.lazyLoad&&(l(),r(q,l))},destroy:D(M,s),check:d}},Pagination:function(l,n,d){var v,h,t=K(l),p=t.on,g=t.emit,m=t.bind,y=n.Slides,b=n.Elements,i=n.Controller,w=i.hasFocus,r=i.getIndex,e=i.go,c=n.Direction.resolve,_=b.pagination,x=[];function k(){v&&(N(_?u(v.children):v),W(v,h),M(x),v=null),t.destroy()}function E(n){e(">"+n,!0)}function S(n,t){var i=x.length,r=jt(t),u=L(),o=-1,u=(r===c(qn,!1,u)?o=++n%i:r===c(Un,!1,u)?o=(--n+i)%i:"Home"===r?o=0:"End"===r&&(o=i-1),x[o]);u&&(dn(u.button),e(">"+o),F(t,!0))}function L(){return d.paginationDirection||d.direction}function A(n){return x[i.toPage(n)]}function O(){var n,t=A(r(!0)),i=A(r());t&&(W(n=t.button,Z),I(n,Qn),R(n,Jn,-1)),i&&(z(n=i.button,Z),R(n,Qn,!0),R(n,Jn,"")),g("pagination:updated",{list:v,items:x},t,i)}return{items:x,mount:function n(){k(),p([B,q],n);var t=d.pagination&&y.isEnough();if(_&&ln(_,t?"":"none"),t){p([U,Gn,J],O);var t=l.length,i=d.classes,r=d.i18n,u=d.perPage,o=w()?t:_n(t/u);z(v=_||C("ul",i.pagination,b.track.parentElement),h=gt+"--"+L()),R(v,V,"tablist"),R(v,Q,r.select),R(v,nt,L()===Bn?"vertical":"");for(var e=0;e<o;e++){var c=C("li",null,v),f=C("button",{class:i.page,type:"button"},c),a=y.getIn(e).map(function(n){return n.slide.id}),s=!w()&&1<u?r.pageX:r.slideX;m(f,"click",D(E,e)),d.paginationKeyboard&&m(f,"keydown",D(S,e)),R(c,V,"presentation"),R(f,V,"tab"),R(f,Kn,a.join(" ")),R(f,Q,Ln(s,e+1)),R(f,Jn,-1),x.push({li:c,button:f,page:e})}O(),g("pagination:mounted",{list:v,items:x},A(l.index))}},destroy:k,getAt:A,update:O}},Sync:function(i,n,t){var r=t.isNavigation,u=t.slideFocus,o=[];function e(){var n,t;i.splides.forEach(function(n){n.isParent||(f(i,n.splide),f(n.splide,i))}),r&&(n=K(i),(t=n.on)(zn,s),t(jn,l),t([H,B],a),o.push(n),n.emit(Fn,i.splides))}function c(){o.forEach(function(n){n.destroy()}),M(o)}function f(n,r){n=K(n);n.on(U,function(n,t,i){r.go(r.is(Pt)?i:n)}),o.push(n)}function a(){R(n.Elements.list,nt,t.direction===Bn?"vertical":"")}function s(n){i.go(n.index)}function l(n,t){b(Xt,jt(t))&&(s(n),F(t))}return{setup:function(){i.options={slideFocus:rn(u)?r:u}},mount:e,destroy:c,remount:function(){c(),e()}}},Wheel:function(e,c,f){var n=K(e).bind,a=0;function t(n){var t,i,r,u,o;n.cancelable&&(t=(o=n.deltaY)<0,i=mn(n),r=f.wheelMinThreshold||0,u=f.wheelSleep||0,Y(o)>r&&u<i-a&&(e.go(t?"<":">"),a=i),o=t,f.releaseWheel&&!e.state.is(G)&&-1===c.Controller.getAdjacent(o)||F(n))}return{mount:function(){f.wheel&&n(c.Elements.track,"wheel",t,Ct)}}},Live:function(n,t,i){var r=K(n).on,u=t.Elements.track,o=i.live&&!i.isNavigation,e=C("span",wt),c=Hn(90,D(f,!1));function f(n){R(u,rt,n),n?(L(u,e),c.start()):N(e)}function a(n){o&&R(u,it,n?"off":"polite")}return{mount:function(){o&&(a(!t.Autoplay.isPaused()),R(u,ut,!0),e.textContent="…",r(Wn,D(a,!0)),r(Xn,D(a,!1)),r([Dn,J],D(f,!0)))},disable:a,destroy:function(){I(u,[it,ut,rt]),N(e)}}}}),Ht={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:at,clone:st,arrows:dt,arrow:vt,prev:ht,next:pt,pagination:gt,page:mt,spinner:_+"__spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Ut(n,r,t){var i=K(n).on;return{mount:function(){i([H,q],function(){p(function(){r.Slides.style("transition","opacity "+t.speed+"ms "+t.easing)})})},start:function(n,t){var i=r.Elements.track;O(i,"height",x(j(i).height)),p(function(){t(),O(i,"height","")})},cancel:nn}}function qt(o,n,e){var c,t=K(o).bind,f=n.Move,a=n.Controller,s=n.Scroll,i=n.Elements.list,l=D(O,i,"transition");function r(){l(""),s.cancel()}return{mount:function(){t(i,"transitionend",function(n){n.target===i&&c&&(r(),c())})},start:function(n,t){var i=f.toPosition(n,!0),r=f.getPosition(),u=function(n){var t=e.rewindSpeed;if(o.is(Dt)&&t){var i=a.getIndex(!0),r=a.getEnd();if(0===i&&r<=n||r<=i&&0===n)return t}return e.speed}(n);1<=Y(i-r)&&1<=u?e.useScroll?s.scroll(i,u,!1,t):(l("transform "+u+"ms "+e.easing),f.translate(i,!0),c=t):(f.jump(n),t())},cancel:r}}t=function(){function i(n,t){this.event=K(),this.Components={},this.state=a(1),this.splides=[],this.n={},this.t={};n=P(n)?pn(document,n):n;yn(n,n+" is invalid."),t=d({label:T(this.root=n,Q)||"",labelledby:T(n,Zn)||""},Ht,i.defaults,t||{});try{d(t,JSON.parse(T(n,c)))}catch(n){yn(!1,"Invalid JSON")}this.n=Object.create(d({},t))}var n=i.prototype;return n.mount=function(n,t){var i=this,r=this.state,u=this.Components;return yn(r.is([1,7]),"Already mounted!"),r.set(1),this.i=u,this.r=t||this.r||(this.is(zt)?Ut:qt),this.t=n||this.t,w(an({},Yt,this.t,{Transition:this.r}),function(n,t){n=n(i,u,i.n);(u[t]=n).setup&&n.setup()}),w(u,function(n){n.mount&&n.mount()}),this.emit(H),z(this.root,"is-initialized"),r.set(3),this.emit("ready"),this},n.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this.i.Sync.remount(),n.Components.Sync.remount()),this},n.go=function(n){return this.i.Controller.go(n),this},n.on=function(n,t){return this.event.on(n,t),this},n.off=function(n){return this.event.off(n),this},n.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(u(arguments,1))),this},n.add=function(n,t){return this.i.Slides.add(n,t),this},n.remove=function(n){return this.i.Slides.remove(n),this},n.is=function(n){return this.n.type===n},n.refresh=function(){return this.emit(q),this},n.destroy=function(t){void 0===t&&(t=!0);var n=this.event,i=this.state;return i.is(1)?K(this).on("ready",this.destroy.bind(this,t)):(w(this.i,function(n){n.destroy&&n.destroy(t)},!0),n.emit(f),n.destroy(),t&&M(this.splides),i.set(7)),this},Bt(i,[{key:"options",get:function(){return this.n},set:function(n){this.i.Media.set(n,!0)}},{key:"length",get:function(){return this.i.Slides.getLength(!0)}},{key:"index",get:function(){return this.i.Controller.getIndex()}}]),i}();return t.defaults={},t.STATES=i,t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t();

;
function St(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function qt(t,n){t.prototype=Object.create(n.prototype),e(t.prototype.constructor=t,n)}function e(t,n){return(e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t})(t,n)}
/*!
 * Splide.js
 * Version  : 0.8.0
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var t;t=function(){"use strict";function n(t,n,e){return Array.prototype.slice.call(t,n,e)}function r(t){return t.bind.apply(t,[null].concat(n(arguments,1)))}function t(t,n){return typeof n===t}var q=Array.isArray;function o(t){return q(t)?t:[t]}function V(t,n){o(t).forEach(n)}r(t,"function"),r(t,"string"),r(t,"undefined");var N=Object.keys;function z(s){return n(arguments,1).forEach(function(e){var t=e,n=function(t,n){s[n]=e[n]},i=void 0;if(t)for(var r=N(t),r=i?r.reverse():r,o=0;o<r.length;o++){var u=r[o];if("__proto__"!==u&&!1===n(t[u],u))break}}),s}function W(){var s=[];function e(t,e,i){V(t,function(n){n&&V(e,function(t){t.split(" ").forEach(function(t){t=t.split(".");i(n,t[0],t[1])})})})}return{bind:function(t,n,o,u){e(t,n,function(t,n,e){var i="addEventListener"in t,r=i?t.removeEventListener.bind(t,n,o,u):t.removeListener.bind(t,o);i?t.addEventListener(n,o,u):t.addListener(o),s.push([t,n,e,o,r])})},unbind:function(t,n,r){e(t,n,function(n,e,i){s=s.filter(function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||r&&t[3]!==r)||(t[4](),!1)})})},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,e),t.dispatchEvent(i),i},destroy:function(){s.forEach(function(t){t[4]()}),s.length=0}}}var i="dragging",L="destroy";function u(t){var e=t?t.event.bus:document.createDocumentFragment(),i=W();return t&&t.event.on(L,i.destroy),z(i,{bus:e,on:function(t,n){i.bind(e,o(t).join(" "),function(t){n.apply(n,q(t.detail)?t.detail:[])})},off:r(i.unbind,e),emit:function(t){i.dispatch(e,t,n(arguments,1))}})}function Y(t){var e=t;return{set:function(t){e=t},is:function(t){return t=o(t),n=e,-1<t.indexOf(n);var n}}}var s="splide__slide",e=s+"__container";function c(t,n,e){return Array.prototype.slice.call(t,n,e)}function a(t){return t.bind.apply(t,[null].concat(c(arguments,1)))}function f(t,n){return typeof n===t}function h(t){return!l(t)&&f("object",t)}var Q=Array.isArray,U=a(f,"function"),B=a(f,"string"),D=a(f,"undefined");function l(t){return null===t}function d(t,n){(Q(t=t)?t:[t]).forEach(n)}function v(n,t,e){n&&d(t,function(t){t&&n.classList[e?"add":"remove"](t)})}function y(t,n){v(t,B(n)?n.split(" "):n,!0)}function H(t,n){return t instanceof HTMLElement&&(t.msMatchesSelector||t.matches).call(t,n)}function J(t,n){return n?(e=n,n=(n=t)?c(n.children):[],(e?n.filter(function(t){return H(t,e)}):n)[0]):t.firstElementChild;var e}var X=Object.keys;function p(t,n,e){if(t)for(var i=X(t),i=e?i.reverse():i,r=0;r<i.length;r++){var o=i[r];if("__proto__"!==o&&!1===n(t[o],o))break}}function $(i){return c(arguments,1).forEach(function(e){p(e,function(t,n){i[n]=e[n]})}),i}function G(e){return c(arguments,1).forEach(function(t){p(t,function(t,n){Q(t)?e[n]=t.slice():h(t)?e[n]=G({},h(e[n])?e[n]:{},t):e[n]=t})}),e}function K(e,n,i){h(n)?p(n,function(t,n){K(e,n,t)}):d(e,function(t){var e;l(i)||""===i?(e=n,d(t,function(n){d(e,function(t){n&&n.removeAttribute(t)})})):t.setAttribute(n,String(i))})}function w(t,n,e){t=document.createElement(t);return n&&(B(n)?y:K)(t,n),e&&d(t,e.appendChild.bind(e)),t}function Z(t,n){var e="display";D(n)?getComputedStyle(t)[e]:l(n)||(t.style[e]=""+n)}function tt(t,n){v(t,n,!1)}var nt=Math.min,et=Math.max;Math.floor,Math.ceil,Math.abs;function it(t,n,e){var i=nt(n,e),n=et(n,e);return nt(et(i,t),n)}var rt="splide__video",m="--has-video",ot={hideControls:!1,loop:!1,mute:!1,volume:.2},ut="video:click",st=function(){function t(t,n,e){this.state=Y(1),this.event=u(),this.target=t,this.videoId=n,this.options=e||{},this.onPlay=this.onPlay.bind(this),this.onPause=this.onPause.bind(this),this.onEnded=this.onEnded.bind(this),this.onPlayerReady=this.onPlayerReady.bind(this),this.onError=this.onError.bind(this)}var n=t.prototype;return n.on=function(t,n){this.event.on(t,n)},n.play=function(){var t=this.state;if(!t.is(9))return this.event.emit("play"),t.is(2)?t.set(4):t.is(3)?(this.player=this.createPlayer(this.videoId),t.set(4)):void(t.is([4,8])||t.is(5)&&(t.set(6),this.playVideo()));console.error("[splide] Can not play this video.")},n.pause=function(){var t=this.state;if(!t.is(9))return this.event.emit("pause"),t.is(4)?t.set(2):t.is(6)?t.set(7):void(t.is(8)&&(this.pauseVideo(),this.state.set(5)))},n.isPaused=function(){return!this.state.is(8)},n.destroy=function(){this.event.destroy()},n.onPlayerReady=function(){var t=this.state,n=t.is(4);t.set(5),n&&this.play()},n.onPlay=function(){var t=this.state,n=t.is(7);t.set(8),n?this.pause():this.event.emit("played")},n.onPause=function(){this.state.set(5),this.event.emit("paused")},n.onEnded=function(){this.state.set(5),this.event.emit("ended")},n.onError=function(){this.state.set(9),this.event.emit("error")},t}(),ct=function(i){function t(t,n,e){return(t=i.call(this,t,n,e=void 0===e?{}:e)||this).state.set(3),t}qt(t,i);var n=t.prototype;return n.createPlayer=function(t){var n=this.options,e=this.options.playerOptions,e=void 0===e?{}:e,t=w("video",{src:t},this.target),i=t.addEventListener.bind(t);return $(t,{controls:!n.hideControls,loop:n.loop,volume:it(n.volume,0,1),muted:n.mute},e.htmlVideo||{}),i("play",this.onPlay),i("pause",this.onPause),i("ended",this.onEnded),i("loadeddata",this.onPlayerReady),i("error",this.onError),t},n.playVideo=function(){var t=this.player.play();t&&t.catch(this.onError.bind(this))},n.pauseVideo=function(){this.player.pause()},n.onError=function(){this.state.is(7)?this.state.set(5):i.prototype.onError.call(this)},n.destroy=function(){i.prototype.destroy.call(this);var t=this.player,t=t.addEventListener.bind(t);t("play",this.onPlay),t("pause",this.onPause),t("ended",this.onEnded),t("loadeddata",this.onPlayerReady)},t}(st);function at(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var ft="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function ht(t,n){return 0===t.indexOf(n.toLowerCase())?t:"".concat(n.toLowerCase()).concat(t.substr(0,1).toUpperCase()).concat(t.substr(1))}function b(t){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(t)}function lt(t){var n,t=0<arguments.length&&void 0!==t?t:{},e=t.id,t=t.url,t=e||t;if(!t)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(n=t,!isNaN(parseFloat(n))&&isFinite(n)&&Math.floor(n)==n)return"https://vimeo.com/".concat(t);if(b(t))return t.replace("http:","https:");if(e)throw new TypeError("“".concat(e,"” is not a valid video id."));throw new TypeError("“".concat(t,"” is not a vimeo.com url."))}var k=void 0!==Array.prototype.indexOf,g="undefined"!=typeof window&&void 0!==window.postMessage;if(!(ft||k&&g))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var dt,vt,E,yt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function T(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(E(this,"_id","_WeakMap_"+pt()+"."+pt()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function P(t,n){if(!F(t)||!dt.call(t,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof t)}function pt(){return Math.random().toString().substring(2)}function F(t){return Object(t)===t}(
/*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */
k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:yt).WeakMap||(dt=Object.prototype.hasOwnProperty,vt=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(t){}}(),k.WeakMap=((E=function(t,n,e){vt?Object.defineProperty(t,n,{configurable:!0,writable:!0,value:e}):t[n]=e})(T.prototype,"delete",function(t){var n;return P(this,"delete"),!!F(t)&&(!(!(n=t[this.t])||n[0]!==t)&&(delete t[this.t],!0))}),E(T.prototype,"get",function(t){var n;return P(this,"get"),F(t)&&(n=t[this.t])&&n[0]===t?n[1]:void 0}),E(T.prototype,"has",function(t){var n;return P(this,"has"),!!F(t)&&!(!(n=t[this.t])||n[0]!==t)}),E(T.prototype,"set",function(t,n){var e;if(P(this,"set"),F(t))return(e=t[this.t])&&e[0]===t?e[1]=n:E(t,this.t,[t,n]),this;throw new TypeError("Invalid value used as weak map key")}),E(T,"_polyfill",!0),T));(function(t){
/*! Native Promise Only
        v0.8.1 (c) Kyle Simpson
        MIT License: http://getify.mit-license.org
    */
var n,e,i;i=function(){var n,e,i,r,o,t=Object.prototype.toString,u="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),n=function(t,n,e,i){return Object.defineProperty(t,n,{value:e,writable:!0,configurable:!1!==i})}}catch(t){n=function(t,n,e){return t[n]=e,t}}function s(t,n){this.fn=t,this.self=n,this.next=void 0}function c(t,n){w.add(t,n),e=e||u(w.drain)}function a(t){var n,e=typeof t;return"function"==typeof(n=null==t||"object"!=e&&"function"!=e?n:t.then)&&n}function f(){for(var t=0;t<this.chain.length;t++){e=n=o=r=i=void 0;var n,e,i=this,r=1===this.state?this.chain[t].success:this.chain[t].failure,o=this.chain[t];try{!1===r?o.reject(i.msg):(n=!0===r?i.msg:r.call(void 0,i.msg))===o.promise?o.reject(TypeError("Promise-chain cycle")):(e=a(n))?e.call(n,o.resolve,o.reject):o.resolve(n)}catch(t){o.reject(t)}}this.chain.length=0}function h(t){var e,i=this;if(!i.triggered){i.triggered=!0,i.def&&(i=i.def);try{(e=a(t))?c(function(){var n=new v(i);try{e.call(t,function(){h.apply(n,arguments)},function(){l.apply(n,arguments)})}catch(t){l.call(n,t)}}):(i.msg=t,i.state=1,0<i.chain.length&&c(f,i))}catch(t){l.call(new v(i),t)}}}function l(t){var n=this;n.triggered||(n.triggered=!0,(n=n.def?n.def:n).msg=t,n.state=2,0<n.chain.length&&c(f,n))}function d(t,e,i,r){for(var n=0;n<e.length;n++)!function(n){t.resolve(e[n]).then(function(t){i(n,t)},r)}(n)}function v(t){this.def=t,this.triggered=!1}function y(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(t){if("function"!=typeof t)throw TypeError("Not a function");if(0!==this.n)throw TypeError("Not a promise");this.n=1;var i=new y(this);this.then=function(t,n){var e={success:"function"!=typeof t||t,failure:"function"==typeof n&&n};return e.promise=new this.constructor(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");e.resolve=t,e.reject=n}),i.chain.push(e),0!==i.state&&c(f,i),e.promise},this.catch=function(t){return this.then(void 0,t)};try{t.call(void 0,function(t){h.call(i,t)},function(t){l.call(i,t)})}catch(t){l.call(i,t)}}var w={add:function(t,n){o=new s(t,n),r?r.next=o:i=o,r=o,o=void 0},drain:function(){var t=i;for(i=r=e=void 0;t;)t.fn.call(t.self),t=t.next}},m=n({},"constructor",p,!1);return n(p.prototype=m,"__NPO__",0,!1),n(p,"resolve",function(e){return e&&"object"==typeof e&&1===e.n?e:new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),n(p,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),n(p,"all",function(n){var u=this;return"[object Array]"!=t.call(n)?u.reject(TypeError("Not an array")):0===n.length?u.resolve([]):new u(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");var i=n.length,r=Array(i),o=0;d(u,n,function(t,n){r[t]=n,++o===i&&e(r)},t)})}),n(p,"race",function(n){var i=this;return"[object Array]"!=t.call(n)?i.reject(TypeError("Not an array")):new i(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");d(i,n,function(t,n){e(n)},t)})}),p},(e=yt)[n="Promise"]=e[n]||i(),t.exports&&(t.exports=e[n])})(g={exports:{}});var _=g.exports,C=new WeakMap;function j(t,n,e){var i=C.get(t.element)||{};n in i||(i[n]=[]),i[n].push(e),C.set(t.element,i)}function M(t,n){return(C.get(t.element)||{})[n]||[]}function x(t,n,e){var i=C.get(t.element)||{};return!i[n]||(e?(-1!==(e=i[n].indexOf(e))&&i[n].splice(e,1),C.set(t.element,i),i[n]&&0===i[n].length):(i[n]=[],C.set(t.element,i),!0))}function wt(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){return console.warn(t),{}}return t}function I(t,n,e){t.element.contentWindow&&t.element.contentWindow.postMessage&&(n={method:n},void 0!==e&&(n.value=e),8<=(e=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")))&&e<10&&(n=JSON.stringify(n)),t.element.contentWindow.postMessage(n,t.origin))}function mt(e,i){var n,t,r,o,u=[];(i=wt(i)).event?("error"===i.event&&M(e,i.data.method).forEach(function(t){var n=new Error(i.data.message);n.name=i.data.name,t.reject(n),x(e,i.data.method,t)}),u=M(e,"event:".concat(i.event)),n=i.data):i.method&&(t=e,r=i.method,(r=!((o=M(t,r)).length<1)&&(x(t,r,t=o.shift()),t))&&(u.push(r),n=i.value)),u.forEach(function(t){try{"function"==typeof t?t.call(e,n):t.resolve(n)}catch(t){}})}var bt=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function kt(i,t){return bt.reduce(function(t,n){var e=i.getAttribute("data-vimeo-".concat(n));return!e&&""!==e||(t[n]=""===e?1:e),t},1<arguments.length&&void 0!==t?t:{})}function gt(t,n){var e,t=t.html;if(n)return null===n.getAttribute("data-vimeo-initialized")&&((e=document.createElement("div")).innerHTML=t,n.appendChild(e.firstChild),n.setAttribute("data-vimeo-initialized","true")),n.querySelector("iframe");throw new TypeError("An element must be provided")}function Et(o,t,n){var u=1<arguments.length&&void 0!==t?t:{},s=2<arguments.length?n:void 0;return new Promise(function(n,e){if(!b(o))throw new TypeError("“".concat(o,"” is not a vimeo.com url."));var t,i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(o));for(t in u)u.hasOwnProperty(t)&&(i+="&".concat(t,"=").concat(encodeURIComponent(u[t])));var r=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);r.open("GET",i,!0),r.onload=function(){if(404===r.status)e(new Error("“".concat(o,"” was not found.")));else if(403===r.status)e(new Error("“".concat(o,"” is not embeddable.")));else try{var t=JSON.parse(r.responseText);403===t.domain_status_code?(gt(t,s),e(new Error("“".concat(o,"” is not embeddable.")))):n(t)}catch(t){e(t)}},r.onerror=function(){var t=r.status?" (".concat(r.status,")"):"";e(new Error("There was an error fetching the embed code from Vimeo".concat(t,".")))},r.send()})}function Tt(t){function e(t){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(t))}t=0<arguments.length&&void 0!==t?t:document,t=[].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));t.forEach(function(n){try{var t;null===n.getAttribute("data-vimeo-defer")&&Et(lt(t=kt(n)),t,n).then(function(t){return gt(t,n)}).catch(e)}catch(t){e(t)}})}function Pt(t){var s=0<arguments.length&&void 0!==t?t:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",function(t){if(b(t.origin)){var n=wt(t.data);if(n&&"ready"===n.event)for(var e,i=s.querySelectorAll("iframe"),r=0;r<i.length;r++){var o=i[r],u=o.contentWindow===t.source;e=o.src,/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)&&u&&new Ct(o).callMethod("appendVideoMetadata",window.location.href)}}}))}var R,Ft,A,O=new WeakMap,_t=new WeakMap,S={},Ct=function(){function r(o){var u=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=this,e=r;if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");if(window.jQuery&&o instanceof jQuery&&(1<o.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),o=o[0]),"undefined"!=typeof document&&"string"==typeof o&&(o=document.getElementById(o)),t=o,!Boolean(t&&1===t.nodeType&&"nodeName"in t&&t.ownerDocument&&t.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"===o.nodeName||(e=o.querySelector("iframe"))&&(o=e),"IFRAME"===o.nodeName&&!b(o.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(O.has(o))return O.get(o);this.e=o.ownerDocument.defaultView,this.element=o,this.origin="*";var i,t=new _(function(i,r){var t;u.i=function(t){var n,e;b(t.origin)&&u.element.contentWindow===t.source&&("*"===u.origin&&(u.origin=t.origin),(t=wt(t.data))&&"error"===t.event&&t.data&&"ready"===t.data.method?((n=new Error(t.data.message)).name=t.data.name,r(n)):(n=t&&"ready"===t.event,e=t&&"ping"===t.method,n||e?(u.element.setAttribute("data-ready","true"),i()):mt(u,t)))},u.e.addEventListener("message",u.i),"IFRAME"!==u.element.nodeName&&Et(lt(t=kt(o,n)),t,o).then(function(t){var n,e,i=gt(t,o);return u.element=i,u.r=o,n=o,i=i,e=C.get(n),C.set(i,e),C.delete(n),O.set(u.element,u),t}).catch(r)});return _t.set(this,t),O.set(this.element,this),"IFRAME"===this.element.nodeName&&I(this,"ping"),S.isEnabled&&(i=function(){return S.exit()},this.fullscreenchangeHandler=function(){(S.isFullscreen?j:x)(u,"event:exitFullscreen",i),u.ready().then(function(){I(u,"fullscreenchange",S.isFullscreen)})},S.on("fullscreenchange",this.fullscreenchangeHandler)),this}var t,n,e;return t=r,(n=[{key:"callMethod",value:function(e){var i=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new _(function(t,n){return i.ready().then(function(){j(i,e,{resolve:t,reject:n}),I(i,e,r)}).catch(n)})}},{key:"get",value:function(e){var i=this;return new _(function(t,n){return e=ht(e,"get"),i.ready().then(function(){j(i,e,{resolve:t,reject:n}),I(i,e)}).catch(n)})}},{key:"set",value:function(e,i){var r=this;return new _(function(t,n){if(e=ht(e,"set"),null==i)throw new TypeError("There must be a value to set.");return r.ready().then(function(){j(r,e,{resolve:t,reject:n}),I(r,e,i)}).catch(n)})}},{key:"on",value:function(t,n){if(!t)throw new TypeError("You must pass an event name.");if(!n)throw new TypeError("You must pass a callback function.");if("function"!=typeof n)throw new TypeError("The callback must be a function.");0===M(this,"event:".concat(t)).length&&this.callMethod("addEventListener",t).catch(function(){}),j(this,"event:".concat(t),n)}},{key:"off",value:function(t,n){if(!t)throw new TypeError("You must pass an event name.");if(n&&"function"!=typeof n)throw new TypeError("The callback must be a function.");x(this,"event:".concat(t),n)&&this.callMethod("removeEventListener",t).catch(function(t){})}},{key:"loadVideo",value:function(t){return this.callMethod("loadVideo",t)}},{key:"ready",value:function(){var t=_t.get(this)||new _(function(t,n){n(new Error("Unknown player. Probably unloaded."))});return _.resolve(t)}},{key:"addCuePoint",value:function(t){return this.callMethod("addCuePoint",{time:t,data:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})}},{key:"removeCuePoint",value:function(t){return this.callMethod("removeCuePoint",t)}},{key:"enableTextTrack",value:function(t,n){if(t)return this.callMethod("enableTextTrack",{language:t,kind:n});throw new TypeError("You must pass a language.")}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return S.isEnabled?S.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return S.isEnabled?S.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return S.isEnabled?_.resolve(S.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new _(function(t){var n;_t.delete(e),O.delete(e.element),e.r&&(O.delete(e.r),e.r.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e.r&&e.r!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode&&(e.element.removeAttribute("data-vimeo-initialized"),(n=e.element.querySelector("iframe"))&&n.parentNode&&(n.parentNode.parentNode&&e.r&&e.r!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))),e.e.removeEventListener("message",e.i),S.isEnabled&&S.off("fullscreenchange",e.fullscreenchangeHandler),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(t){return this.set("autopause",t)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(t){return this.set("cameraProps",t)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(t){return this.set("color",t)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(t){return this.set("currentTime",t)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(t){return this.set("loop",t)}},{key:"setMuted",value:function(t){return this.set("muted",t)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(t){return this.set("playbackRate",t)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(t){return this.set("quality",t)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(t){return this.set("volume",t)}}])&&at(t.prototype,n),e&&at(t,e),r}(),k=(ft||(R=function(){for(var t,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],e=0,i=n.length,r={};e<i;e++)if((t=n[e])&&t[1]in document){for(e=0;e<t.length;e++)r[n[0][e]]=t[e];return r}return!1}(),Ft={fullscreenchange:R.fullscreenchange,fullscreenerror:R.fullscreenerror},A={request:function(r){return new Promise(function(t,n){function e(){A.off("fullscreenchange",e),t()}A.on("fullscreenchange",e);var i=(r=r||document.documentElement)[R.requestFullscreen]();i instanceof Promise&&i.then(e).catch(n)})},exit:function(){return new Promise(function(n,t){var e,i;A.isFullscreen?(A.on("fullscreenchange",e=function t(){A.off("fullscreenchange",t),n()}),(i=document[R.exitFullscreen]())instanceof Promise&&i.then(e).catch(t)):n()})},on:function(t,n){t=Ft[t];t&&document.addEventListener(t,n)},off:function(t,n){t=Ft[t];t&&document.removeEventListener(t,n)}},Object.defineProperties(A,{isFullscreen:{get:function(){return Boolean(document[R.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[R.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[R.fullscreenEnabled])}}}),S=A,Tt(),function(t){var i=0<arguments.length&&void 0!==t?t:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(t){if(b(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=i.querySelectorAll("iframe"),e=0;e<n.length;e++)if(n[e].contentWindow===t.source){n[e].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}}))}(),Pt()),function(i){function t(t,n,e){return(t=i.call(this,t,n,e=void 0===e?{}:e)||this).state.set(3),t}qt(t,i);var n=t.prototype;return n.createPlayer=function(t){var n=this.options,e=this.options.playerOptions,e=void 0===e?{}:e,t=0===t.indexOf("http")?{url:t}:{id:+t},t=new Ct(this.target,$(t,{controls:!n.hideControls,loop:n.loop,muted:n.mute},e.vimeo||{}));return t.on("play",this.onPlay),t.on("pause",this.onPause),t.on("ended",this.onEnded),t.ready().then(this.onPlayerReady,this.onError),t.getMuted()||t.setVolume(it(n.volume,0,1)),t},n.playVideo=function(){var t=this;this.player.play().catch(function(){t.state.is(7)&&t.state.set(5)})},n.pauseVideo=function(){this.player.pause()},t}(st)),jt="//www.youtube.com/player_api",Mt=function(){function t(){}var n=t.prototype;return n.load=function(t){if(window.YT&&U(window.YT.Player))return t();this.attachCallback(t),this.shouldLoad()&&w("script",{src:location.protocol+jt},document.head)},n.shouldLoad=function(){return t=document,!((n="script")?c(t.querySelectorAll(n)):[]).some(function(t){return t.src.replace(/^https?:/,"")===jt});var t,n},n.attachCallback=function(t){var n;D(window.onYouTubeIframeAPIReady)||(n=window.onYouTubeIframeAPIReady),window.onYouTubeIframeAPIReady=function(){n&&n(),t()}},t}(),g=function(i){function t(t,n,e){return(t=i.call(this,t,n,e=void 0===e?{}:e)||this).videoId=t.parseVideoId(n),t.videoId&&(t.state.set(2),(new Mt).load(t.onAPIReady.bind(St(t)))),t}qt(t,i);var n=t.prototype;return n.onAPIReady=function(){var t=this.state,n=t.is(4);t.set(3),n&&this.play()},n.createPlayer=function(t){var n=this.options,e=this.options.playerOptions;return new YT.Player(this.target,{videoId:t,host:n.host,playerVars:$({controls:n.hideControls?0:1,iv_load_policy:3,loop:n.loop?1:0,playlist:n.loop?t:void 0,rel:0,autoplay:0,mute:n.mute?1:0},(void 0===e?{}:e).youtube||{}),events:{onReady:this.onPlayerReady.bind(this),onStateChange:this.onPlayerStateChange.bind(this),onError:this.onError.bind(this)}})},n.onPlayerReady=function(){i.prototype.onPlayerReady.call(this),this.player.setVolume(100*it(this.options.volume,0,1))},n.onPlayerStateChange=function(t){var n=YT.PlayerState,e=n.PLAYING,i=n.PAUSED,n=n.ENDED;switch(!0){case t.data===e:this.onPlay();break;case t.data===i:this.onPause();break;case t.data===n:this.onEnded()}},n.playVideo=function(){this.player.playVideo()},n.pauseVideo=function(){this.player.pauseVideo()},n.parseVideoId=function(t){return 0===t.indexOf("http")?this.parseUrl(t):t},n.parseUrl=function(t){var n,t=t.split(/[#?]/)[1],t=(t=t.split("&"),n=function(t){return 0===t.indexOf("v=")},c(t).filter(n)[0]);return t&&t.replace("v=","")},t}(st),xt="Play Video",It=function(){function t(t,n){this.event=u(),this.Splide=t,this.slide=n,this.container=J(this.slide,"."+e),this.parent=this.container||this.slide,this.init(),this.create(),this.show(),this.listen()}var n=t.prototype;return n.init=function(){y(this.slide,s+m),y(this.container,e+m)},n.create=function(){this.video=w("div",rt,this.parent),this.playButton=w("button",{class:"splide__video__play",type:"button","aria-label":this.Splide.options.i18n.playVideo||xt},this.video),this.wrapper=w("div","splide__video__wrapper",this.video),this.placeholder=w("div",null,this.wrapper)},n.listen=function(){var t=this;this.parent.addEventListener("click",function(){t.event.emit("click")})},n.toggleButton=function(t){Z(this.playButton,t?"":"none")},n.toggleWrapper=function(t){Z(this.wrapper,t?"":"none")},n.getPlaceholder=function(){return this.placeholder},n.hide=function(){this.toggleButton(!1),this.toggleWrapper(!0)},n.show=function(){this.disabled||this.toggleButton(!0),this.toggleWrapper(!1)},n.disable=function(t){(this.disabled=t)&&this.toggleButton(!1)},n.on=function(t,n){this.event.on(t,n)},n.destroy=function(){tt(this.slide,s+m),tt(this.container,e+m),d(this.video,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}),this.event.destroy()},t}(),Rt=[["data-splide-youtube",g],["data-splide-vimeo",k],["data-splide-html-video",ct]],At=function(){function t(t,n){this.Splide=t,this.slide=n,this.event=u(t),this.options=G(G({},ot),this.Splide.options.video),this.createPlayer(n),this.player&&this.listen()}var n=t.prototype;return n.createPlayer=function(e){var i=this;Rt.forEach(function(t){var n=t[0],t=t[1],n=e.getAttribute(n);n&&(i.ui=new It(i.Splide,e),i.player=new t(i.ui.getPlaceholder(),n,i.options),i.ui.disable(i.options.disableOverlayUI))})},n.listen=function(){var t=this,n=this.player,e=this.event;this.ui.on("click",this.onClick.bind(this)),n.on("play",this.onPlay.bind(this)),n.on("played",this.onPlayed.bind(this)),n.on("pause",this.onPause.bind(this)),n.on("paused",this.onPaused.bind(this)),n.on("ended",this.onEnded.bind(this)),n.on("error",this.onError.bind(this)),e.on(["move","scroll"],this.pause.bind(this)),e.on(ut,this.onVideoClick.bind(this)),e.on("drag",function(){e.off(i),e.on(i,function(){t.pause(),e.off(i)})}),this.options.autoplay&&e.on(["mounted","moved","scrolled"],this.onAutoplayRequested.bind(this))},n.onClick=function(){this.isPaused()?this.play():this.pause(),this.event.emit(ut,this)},n.onVideoClick=function(t){this!==t&&this.pause()},n.onPlay=function(){this.ui.hide()},n.onPlayed=function(){this.ui.hide(),this.togglePlaying(!0),this.event.emit("video:play",this)},n.onPause=function(){this.ui.show()},n.onPaused=function(){this.togglePlaying(!1),this.event.emit("video:pause",this)},n.onEnded=function(){this.togglePlaying(!1),this.event.emit("video:ended",this)},n.onError=function(){y(this.slide,"is-error"),this.ui.show(),this.event.emit("video:error",this)},n.onAutoplayRequested=function(){this.Splide.Components.Slides.getAt(this.Splide.index).slide===this.slide&&this.play()},n.togglePlaying=function(t){v(this.Splide.root,"is-playing",t)},n.play=function(){this.player&&!this.disabled&&this.player.play()},n.pause=function(){this.player&&!this.disabled&&this.player.pause()},n.destroy=function(){this.player&&(this.ui.destroy(),this.player.destroy()),this.disable(!1)},n.disable=function(t){this.disabled=t,v(this.Splide.root,"is-video-disabled",t)},n.isPaused=function(){return this.player.isPaused()},t}();function Ot(r,t){var n=u(r).on,e=t.Slides,o={};function i(){e.forEach(function(t){var n,e,i=t.slide;e=s+m,(n=i)&&n.classList.contains(e)||(o[t.index]=new At(r,i))}),e.update()}return{mount:function(){i(),n("refresh",i)},destroy:function(){p(o,function(t){t.destroy()})},play:function(t){void 0===t&&(t=r.index),(t=o[t])&&t.play()},pause:function(){p(o,function(t){t.pause()})},disable:function(n){p(o,function(t){t.disable(n)})}}}"undefined"!=typeof window&&(window.splide=window.splide||{},window.splide.Extensions=window.splide.Extensions||{},window.splide.Extensions.Video=Ot)},"function"==typeof define&&define.amd?define(t):t();
;
/*!
 * @splidejs/splide-extension-intersection
 * Version  : 0.2.0
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */(function(b){typeof define=="function"&&define.amd?define(b):b()})(function(){"use strict";function b(n){n.length=0}function y(n,e,i){return Array.prototype.slice.call(n,e,i)}function E(n){return n.bind.apply(n,[null].concat(y(arguments,1)))}function w(n,e){return typeof e===n}var _=Array.isArray;E(w,"function"),E(w,"string"),E(w,"undefined");function O(n){return _(n)?n:[n]}function T(n,e){O(n).forEach(e)}var V=Object.keys;function N(n,e,i){if(n){var t=V(n);t=i?t.reverse():t;for(var f=0;f<t.length;f++){var o=t[f];if(o!=="__proto__"&&e(n[o],o)===!1)break}}return n}function C(n){return y(arguments,1).forEach(function(e){N(e,function(i,t){n[t]=e[t]})}),n}function g(){var n=[];function e(c,r,s,a){f(c,r,function(u,l,d){var m="addEventListener"in u,v=m?u.removeEventListener.bind(u,l,s,a):u.removeListener.bind(u,s);m?u.addEventListener(l,s,a):u.addListener(s),n.push([u,l,d,s,v])})}function i(c,r,s){f(c,r,function(a,u,l){n=n.filter(function(d){return d[0]===a&&d[1]===u&&d[2]===l&&(!s||d[3]===s)?(d[4](),!1):!0})})}function t(c,r,s){var a,u=!0;return typeof CustomEvent=="function"?a=new CustomEvent(r,{bubbles:u,detail:s}):(a=document.createEvent("CustomEvent"),a.initCustomEvent(r,u,!1,s)),c.dispatchEvent(a),a}function f(c,r,s){T(c,function(a){a&&T(r,function(u){u.split(" ").forEach(function(l){var d=l.split(".");s(a,d[0],d[1])})})})}function o(){n.forEach(function(c){c[4]()}),b(n)}return{bind:e,unbind:i,dispatch:t,destroy:o}}var L="destroy";function $(n){var e=n?n.event.bus:document.createDocumentFragment(),i=g();function t(o,c){i.bind(e,O(o).join(" "),function(r){c.apply(c,_(r.detail)?r.detail:[])})}function f(o){i.dispatch(e,o,y(arguments,1))}return n&&n.event.on(L,i.destroy),C(i,{bus:e,on:t,off:E(i.unbind,e),emit:f})}function K(n,e,i){return Array.prototype.slice.call(n,e,i)}function h(n){return n.bind.apply(n,[null].concat(K(arguments,1)))}function I(n,e){return typeof e===n}h(I,"function"),h(I,"string");var R=h(I,"undefined"),x=Object.keys;function S(n,e,i){if(n){var t=x(n);t=i?t.reverse():t;for(var f=0;f<t.length;f++){var o=t[f];if(o!=="__proto__"&&e(n[o],o)===!1)break}}return n}var D="intersection",M="intersection:in",U="intersection:out";function B(n){var e=n.Components;return{keyboard:{enable:function(){e.Keyboard.disable(!1)},disable:function(){e.Keyboard.disable(!0)}},autoplay:{enable:function(){n.options.autoplay&&e.Autoplay.play()},disable:function(){e.Autoplay.pause()}},autoScroll:{enable:function(){var t=e.AutoScroll;t&&t.play()},disable:function(){var t=e.AutoScroll;t&&t.pause()}},video:{enable:function(){var t=e.Video;t&&t.play()},disable:function(){var t=e.Video;t&&t.pause()}}}}function F(n,e,i){var t=$(n),f=t.emit,o=i.intersection||{},c=B(n),r;function s(){window.IntersectionObserver&&(r=new IntersectionObserver(u,{root:o.root,rootMargin:o.rootMargin,threshold:o.threshold}),r.observe(n.root))}function a(){r&&(r.disconnect(),r=null)}function u(v){var p=v[0];p&&(p.isIntersecting?d(p):m(p),f(D,p))}function l(v){S(v,function(p,H){if(!R(p)){var A=c[H];p?A.enable():A.disable()}})}function d(v){l(o.inView||{}),f(M,v),o.once&&a()}function m(v){l(o.outView||{}),f(U,v)}return{mount:s,destroy:a}}typeof window<"u"&&(window.splide=window.splide||{},window.splide.Extensions=window.splide.Extensions||{},window.splide.Extensions.Intersection=F)});
;
!function(){"use strict";function n(t){if(void 0===t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}var r,e,t,p;function i(t,e,n){r(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}n.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],n.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],n.prototype.scan=function(t){for(var e,n,r,i=t.querySelectorAll(this.TYPES.join(",")),a=0;a<i.length;a++)n=(0,this[(e=i[a]).tagName.toLowerCase()+"ToPath"])(this.parseAttr(e.attributes)),r=this.pathMaker(e,n),e.parentNode.replaceChild(r,e)},n.prototype.lineToPath=function(t){var e={},n=t.x1||0,r=t.y1||0,i=t.x2||0,a=t.y2||0;return e.d="M"+n+","+r+"L"+i+","+a,e},n.prototype.rectToPath=function(t){var e={},n=parseFloat(t.x)||0,r=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;if(t.rx||t.ry){var o=parseInt(t.rx,10)||-1,s=parseInt(t.ry,10)||-1;o=Math.min(Math.max(o<0?s:o,0),i/2),s=Math.min(Math.max(s<0?o:s,0),a/2),e.d="M "+(n+o)+","+r+" L "+(n+i-o)+","+r+" A "+o+","+s+",0,0,1,"+(n+i)+","+(r+s)+" L "+(n+i)+","+(r+a-s)+" A "+o+","+s+",0,0,1,"+(n+i-o)+","+(r+a)+" L "+(n+o)+","+(r+a)+" A "+o+","+s+",0,0,1,"+n+","+(r+a-s)+" L "+n+","+(r+s)+" A "+o+","+s+",0,0,1,"+(n+o)+","+r}else e.d="M"+n+" "+r+" L"+(n+i)+" "+r+" L"+(n+i)+" "+(r+a)+" L"+n+" "+(r+a)+" Z";return e},n.prototype.polylineToPath=function(t){var e,n,r={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(n="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(n+="L"+i[e]);return r.d=n,r},n.prototype.polygonToPath=function(t){var e=n.prototype.polylineToPath(t);return e.d+="Z",e},n.prototype.ellipseToPath=function(t){var e={},n=parseFloat(t.rx)||0,r=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-n,s=a,h=parseFloat(i)+parseFloat(n),l=a;return e.d="M"+o+","+s+"A"+n+","+r+" 0,1,1 "+h+","+l+"A"+n+","+r+" 0,1,1 "+o+","+l,e},n.prototype.circleToPath=function(t){var e={},n=parseFloat(t.r)||0,r=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,a=r-n,o=i,s=parseFloat(r)+parseFloat(n),h=i;return e.d="M"+a+","+o+"A"+n+","+n+" 0,1,1 "+s+","+h+"A"+n+","+n+" 0,1,1 "+a+","+h,e},n.prototype.pathMaker=function(t,e){var n,r,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(n=0;n<t.attributes.length;n++)r=t.attributes[n],-1===this.ATTR_WATCH.indexOf(r.name)&&i.setAttribute(r.name,r.value);for(n in e)i.setAttribute(n,e[n]);return i},n.prototype.parseAttr=function(t){for(var e,n={},r=0;r<t.length;r++){if(e=t[r],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");n[e.name]=e.value}return n},i.LINEAR=function(t){return t},i.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},i.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},i.EASE_IN=function(t){return Math.pow(t,3)},i.EASE_OUT_BOUNCE=function(t){var e=1-Math.cos(t*(.5*Math.PI)),n=Math.pow(e,1.5),r=Math.pow(1-t,2);return 1-r+(1-Math.abs(Math.cos(n*(2.5*Math.PI))))*r},i.prototype.setElement=function(e,n){var t,r;if(void 0===e)throw new Error('Vivus [constructor]: "element" parameter is required');if(e.constructor===String&&!(e=document.getElementById(e)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=e,n&&n.file){r=this,t=function(){var t=document.createElement("div");t.innerHTML=this.responseText;var e=t.querySelector("svg");if(!e)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+n.file);r.el=e,r.el.setAttribute("width","100%"),r.el.setAttribute("height","100%"),r.parentEl.appendChild(r.el),r.isReady=!0,r.init(),r=null};var i=new window.XMLHttpRequest;return i.addEventListener("load",t),i.open("GET",n.file),void i.send()}switch(e.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=e,this.isReady=!0;break;case window.HTMLObjectElement:r=this,(t=function(t){if(!r.isReady){if(r.el=e.contentDocument&&e.contentDocument.querySelector("svg"),!r.el&&t)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");r.el&&(e.getAttribute("built-by-vivus")&&(r.parentEl.insertBefore(r.el,e),r.parentEl.removeChild(e),r.el.setAttribute("width","100%"),r.el.setAttribute("height","100%")),r.isReady=!0,r.init(),r=null)}})()||e.addEventListener("load",t);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},i.prototype.setOptions=function(t){var e=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if((t=t||{}).type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=p(t.duration,120),this.delay=p(t.delay,null),this.dashGap=p(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!t.hasOwnProperty("ignoreInvisible")&&!!t.ignoreInvisible,this.animTimingFunction=t.animTimingFunction||i.LINEAR,this.pathTimingFunction=t.pathTimingFunction||i.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},i.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},i.prototype.mapping=function(){var t,e,n,r,i,a,o,s,h,l;for(s=a=o=0,e=this.el.querySelectorAll("path"),l=!1,t=0;t<e.length;t++)if(n=e[t],!this.isInvisible(n)){if(i={el:n,length:0,startAt:0,duration:0,isResizeSensitive:!1},"non-scaling-stroke"===n.getAttribute("vector-effect")){var c=n.getBoundingClientRect(),u=n.getBBox();h=Math.max(c.width/u.width,c.height/u.height),l=i.isResizeSensitive=!0}else h=1;i.length=Math.ceil(n.getTotalLength()*h),isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",n):(this.map.push(i),n.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),n.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,a+=i.length,this.renderPath(t))}for(l&&console.warn("Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info."),a=0===a?1:a,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(1<e.length?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=o/a*this.duration,i.duration=i.length/a*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":n=i.el,r=this.parseAttr(n),i.startAt=s+(p(r["data-delay"],this.delayUnit)||0),i.duration=p(r["data-duration"],this.duration),s=void 0!==r["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":n=i.el,r=this.parseAttr(n),i.startAt=p(r["data-start"],this.delayUnit)||0,i.duration=p(r["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}o+=i.length,this.frameLength=this.frameLength||this.duration}},i.prototype.recalc=function(){this.mustRecalcScale||(this.mustRecalcScale=e(function(){this.performLineRecalc()}.bind(this)))},i.prototype.performLineRecalc=function(){for(var t,e,n,r,i,a=0;a<this.map.length;a++)(t=this.map[a]).isResizeSensitive&&(n=(e=t.el).getBoundingClientRect(),r=e.getBBox(),i=Math.max(n.width/r.width,n.height/r.height),t.length=Math.ceil(e.getTotalLength()*i),e.style.strokeDasharray=t.length+" "+(t.length+2*this.dashGap));this.trace(),this.mustRecalcScale=null},i.prototype.draw=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=e(function(){t.draw()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},i.prototype.trace=function(){var t,e,n,r;for(r=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)e=(r-(n=this.map[t]).startAt)/n.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),n.progress!==e&&(n.progress=e,n.el.style.strokeDashoffset=Math.floor(n.length*(1-e)),this.renderPath(t))},i.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],n=e.el.cloneNode(!0);e.el.parentNode.replaceChild(n,e.el),e.el=n}},i.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new n(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},i.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},i.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},i.prototype.reset=function(){return this.setFrameProgress(0)},i.prototype.finish=function(){return this.setFrameProgress(1)},i.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},i.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.draw(),this},i.prototype.stop=function(){return this.handle&&(t(this.handle),this.handle=null),this},i.prototype.destroy=function(){var t,e;for(this.stop(),t=0;t<this.map.length;t++)(e=this.map[t]).el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},i.prototype.isInvisible=function(t){var e,n=t.getAttribute("data-ignore");return null!==n?"false"!==n:!!this.ignoreInvisible&&(!(e=t.getBoundingClientRect()).width&&!e.height)},i.prototype.parseAttr=function(t){var e,n={};if(t&&t.attributes)for(var r=0;r<t.attributes.length;r++)n[(e=t.attributes[r]).name]=e.value;return n},i.prototype.isInViewport=function(t,e){var n=this.scrollY(),r=n+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=n+i.top;return o+a*(e=e||0)<=r&&n<=o+a},i.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return t<e?e:t},i.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},r=function(){i.prototype.docElem||(i.prototype.docElem=window.document.documentElement,e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},t=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)})},p=function(t,e){var n=parseInt(t,10);return 0<=n?n:e},"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof exports?module.exports=i:window.Vivus=i}();;
// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com> 
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                tabidentify: '',
                activetab_bg: 'white',
                inactive_bg: '#F5F5F5',
                active_border_color: '#c1c1c1',
                active_content_border_color: '#c1c1c1',
                activate: function () {
                }
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);

            //Events
            $(this).bind('tabactivate', function (e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list.' + options.tabidentify);
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list.' + options.tabidentify + ' li').addClass('resp-tab-item').addClass(options.tabidentify);
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                if (options.type == 'vertical')
                    $respTabsList.css('margin-top', '3px');

                $respTabs.find('.resp-tabs-container.' + options.tabidentify).css('border-color', options.active_content_border_color);
                $respTabs.find('.resp-tabs-container.' + options.tabidentify + ' > div').addClass('resp-tab-content').addClass(options.tabidentify);
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs').addClass(options.tabidentify);
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion').addClass(options.tabidentify);
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content.' + options.tabidentify).before("<h2 class='resp-accordion " + options.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>");

                $respTabs.find('.resp-tab-content.' + options.tabidentify).prev("h2").css({
                    'background-color': options.inactive_bg,
                    'border-color': options.active_border_color
                });

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', options.tabidentify + '_tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    var $tabItem = $(this);
                    $tabItem.attr('aria-controls', options.tabidentify + '_tab_item-' + (count));
                    $tabItem.attr('role', 'tab');
                    $tabItem.css({
                        'background-color': options.inactive_bg,
                        'border-color': 'none'
                    });

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content.' + options.tabidentify).each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', options.tabidentify + '_tab_item-' + (tabcount)).css({
                            'border-color': options.active_border_color
                        });
                        tabcount++;
                    });
                    count++;
                });

                // Show correct content area
                var tabNum = 0;
                if (hash != '') {
                    var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));
                    if (matches !== null && matches.length === 2) {
                        tabNum = parseInt(matches[1], 10) - 1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                    'background-color': options.activetab_bg,
                    'border-color': options.active_border_color
                });

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp-accordion.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                        'background-color': options.activetab_bg + ' !important',
                        'border-color': options.active_border_color,
                        'background': 'none'
                    });

                    $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-tab-content-active').addClass(options.tabidentify).attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                   // $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-accordion-closed'); //removed resp-tab-content-active
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {

                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp('', function () {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).slideDown().addClass('resp-tab-content-active');

                            var _this = $respTabs.find("[aria-controls=" + $tabAria + "]");
                            var _this2 = $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify);
                            // $('body').scrollTo(_this);
                            // setTimeout(function(){  
                            //     $('html, body').animate({ scrollTop: _this2.offset().top}, 1000);
                            // }, 1000);
                            console.log('_this2.offset().top: ', _this2.offset().top);
                            setTimeout(function(){  
                                $('html, body').animate({ scrollTop: _this2.offset().top}, 200);
                            }, 300);
                            
                        } else {
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });

                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');

                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);

                        //Update Browser History
                        if (historyApi) {
                            var currentHash = window.location.hash;
                            var tabAriaParts = $tabAria.split('tab_item-');
                            // var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();
                            var newHash = respTabsId + (parseInt(tabAriaParts[1], 10) + 1).toString();
                            if (currentHash != "") {
                                var re = new RegExp(respTabsId + "[0-9]+");
                                if (currentHash.match(re) != null) {
                                    newHash = currentHash.replace(re, newHash);
                                }
                                else {
                                    newHash = currentHash + "|" + newHash;
                                }
                            }
                            else {
                                newHash = '#' + newHash;
                            }

                            history.replaceState(null, null, newHash);
                        }
                    });

                });

                //Window resize function                   
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);

;
/**
 * jquery.youtube-background v1.0.14 | Nikola Stamatovic <@stamat> | MIT
 */

(function () {
  'use strict';

  function hasClass(element, className) {
    if (element.classList) {
      return element.classList.contains(className);
    }
    return new RegExp('\\b'+ className+'\\b').test(element.className);
  }

  function addClass(element, classNames) {
    if (element.classList) {
      const classes = classNames.split(' ');
      for (var i = 0; i < classes.length; i++) {
        const el_class = classes[i];
        element.classList.add(el_class);
      }
      return;
    }

    if (!hasClass(element, className)) {
      element.className += ' ' + className;
    }
  }

  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
      return;
    }

    element.className = element.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
  }

  function isMobile() {
    let is_mobile = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) is_mobile = true;})(navigator.userAgent||navigator.vendor||window.opera);

    return is_mobile;
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  function parseResolutionString(res) {
    const pts = res.split(/\s?:\s?/i);
    const DEFAULT_RESOLUTION = 16/9;
    if (pts.length < 2) {
      return DEFAULT_RESOLUTION;
    }

    const w = parseInt(pts[0], 10);
    const h = parseInt(pts[1], 10);

    if (isNaN(w) || isNaN(h)) {
      return DEFAULT_RESOLUTION;
    }

    return w/h;
  }

  function parseProperties(params, defaults, element, attr_prefix) {
    let res_params = {};

    if (!params) {
      res_params = defaults;
    } else {
      for (let k in defaults) {
        if (!params.hasOwnProperty(k)) {
          //load in defaults if the param hasn't been set
          res_params[k] = defaults[k];
        }
      }
    }

    if (!element) return res_params;
    // load params from data attributes
    for (let k in res_params) {
      let data;

      if (attr_prefix instanceof Array) {
        for (var i = 0; i < attr_prefix.length; i++) {
          const temp_data = element.getAttribute(attr_prefix[i]+k);
          if (temp_data) {
            data = temp_data;
            break;
          }
        }
      } else {
        data = element.getAttribute(attr_prefix+k);
      }

      if (data !== undefined && data !== null) {
        data = data === 'false' ? false : data;
        data = /^\d+$/.test(data) ? parseInt(data, 10) : data;
        data = /^\d+\.\d+$/.test(data) ? parseFloat(data) : data;
        res_params[k] = data;
      }
    }

    return res_params;
  }

  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function YoutubeBackground(elem, params, id, uid) {
    this.is_mobile = isMobile();

    this.element = elem;
    this.ytid = id;
    this.uid = uid;
    this.player = null;
    this.buttons = {};

    this.state = {};
    this.state.play = false;
    this.state.mute = false;

    this.params = {};

    const DEFAULTS = {
      'pause': false, //deprecated
      'play-button': false,
      'mute-button': false,
      'autoplay': true,
      'muted': true,
      'loop': true,
      'mobile': false,
      'load-background': true,
      'resolution': '16:9',
      'onStatusChange': function() {},
      'inline-styles': true,
      'fit-box': false,
      'offset': 200,
      'start-at': 0,
      'end-at': 0,
      'poster': null
    };

    this.__init__ = function () {
      if (!this.ytid) {
        return;
      }

      this.params = parseProperties(params, DEFAULTS, this.element, ['data-ytbg-', 'data-vbg-']);
      //pause deprecated
      if (this.params.pause) {
        this.params['play-button'] = this.params.pause;
      }
      this.params.resolution_mod = parseResolutionString(this.params.resolution);
      this.state.playing = this.params.autoplay;
      this.state.muted = this.params.muted;
      this.buildHTML();
      this.injectPlayer();


      if (this.params['play-button']) {
        this.generateActionButton({
          name: 'play',
          className: 'play-toggle',
          innerHtml: '<i class="fa"></i>',
          initialState: false,
          stateClassName: 'paused',
          condition_parameter: 'autoplay',
          stateChildClassNames: ['fa-pause-circle', 'fa-play-circle'],
          actions: ['play', 'pause']
        });
      }

      if (this.params['mute-button']) {
        this.generateActionButton({
          name: 'mute',
          className: 'mute-toggle',
          innerHtml: '<i class="fa"></i>',
          initialState: true,
          stateClassName: 'muted',
          condition_parameter: 'muted',
          stateChildClassNames: ['fa-volume-up', 'fa-volume-mute'],
          actions: ['unmute', 'mute']
        });
      }
    };

    this.__init__();
  }

  YoutubeBackground.prototype.initYTPlayer = function () {
    const self = this;
    if (window.hasOwnProperty('YT')) {
      this.player = new YT.Player(this.uid, {
        events: {
          'onReady': function(event) {
            self.onVideoPlayerReady(event);
          },
          'onStateChange': function(event) {
            self.onVideoStateChange(event);
          },
          'onError' : function(event) {
            //console.error('player_api', event);
          }
        }
      });
    }
  };

  YoutubeBackground.prototype.seekTo = function (seconds) {
    if (seconds > 0) {
      this.player.seekTo(seconds, true);
    }
  };

  YoutubeBackground.prototype.onVideoPlayerReady = function (event) {
    if (this.params.autoplay) {
      this.seekTo(this.params['start-at']);
      this.player.playVideo();
    }
  };

  YoutubeBackground.prototype.onVideoStateChange = function (event) {
    if (event.data === 0 && this.params.loop) {
      this.seekTo(this.params['start-at']);
      this.player.playVideo();
    }

    if (event.data === -1 && this.params.autoplay) {
      this.seekTo(this.params['start-at']);
      this.player.playVideo();
      this.element.dispatchEvent(new CustomEvent('video-background-play', { bubbles: true, detail: this }));
    }

    if (event.data === 1) {
      this.iframe.style.opacity = 1;
    }

    this.params["onStatusChange"](event);
  };

  YoutubeBackground.prototype.injectPlayer = function () {
    this.iframe = document.createElement('iframe');
    this.iframe.setAttribute('frameborder', 0);
    this.iframe.setAttribute('allow', 'autoplay; mute');
    let src = `https://www.youtube.com/embed/${this.ytid}?&enablejsapi=1&disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0`;

    if (this.params.muted) {
      src += '&mute=1';
    }

    if (this.params.autoplay) {
      src += '&autoplay=1';
    }

    if (this.params.loop) {
      src += '&loop=1';
    }

    if (this.params['end-at'] > 0) {
      src += `&end=${this.params['end-at']}`;
    }

    this.iframe.src = src;

    if (this.uid) {
      this.iframe.id = this.uid;
    }

    if (this.params['inline-styles']) {
      this.iframe.style.top = '50%';
      this.iframe.style.left = '50%';
      this.iframe.style.transform = 'translateX(-50%) translateY(-50%)';
      this.iframe.style.position = 'absolute';
      this.iframe.style.opacity = 0;
    }

    this.element.appendChild(this.iframe);

    if (this.params['fit-box']) {
      this.iframe.style.width = '100%';
      this.iframe.style.height = '100%';
    } else {
      const self = this;

      //TODO❗️: maybe a spacer or at least add requestAnimationFrame
      function onResize() {
        const h = self.iframe.parentNode.offsetHeight + self.params.offset; // since showinfo is deprecated and ignored after September 25, 2018. we add +200 to hide it in the overflow
        const w = self.iframe.parentNode.offsetWidth + self.params.offset;
        const res = self.params.resolution_mod;

        if (res > w/h) {
          self.iframe.style.width = h*res + 'px';
          self.iframe.style.height = h + 'px';
        } else {
          self.iframe.style.width = w + 'px';
          self.iframe.style.height = w/res + 'px';
        }
      }

      if (window.hasOwnProperty('ResizeObserver')) {
        const resize_observer = new ResizeObserver(() => {
          window.requestAnimationFrame(onResize);
        });
        resize_observer.observe(this.element);
      } else {
        window.addEventListener('resize', () => {
          window.requestAnimationFrame(onResize);
        });
      }
      onResize();
    }
  };

  YoutubeBackground.prototype.buildHTML = function () {
    const parent = this.element.parentNode;
    // wrap
    addClass(this.element, 'youtube-background video-background');

    //set css rules
    const wrapper_styles = {
      "height" : "100%",
      "width" : "100%",
      "z-index": "0",
      "position": "absolute",
      "overflow": "hidden",
      "top": 0, // added by @insad
      "left": 0,
      "bottom": 0,
      "right": 0
    };

    if (!this.params['mute-button']) {
      wrapper_styles["pointer-events"] = "none"; // avoid right mouse click popup menu
    }

    if (this.params['load-background'] || this.params['poster']) {
      if (this.params['load-background']) wrapper_styles['background-image'] = 'url(https://img.youtube.com/vi/'+this.ytid+'/maxresdefault.jpg)';
      if (this.params['poster']) wrapper_styles['background-image'] = this.params['poster'];
      wrapper_styles['background-size'] = 'cover';
      wrapper_styles['background-repeat'] = 'no-repeat';
      wrapper_styles['background-position'] = 'center';
    }

    if (this.params['inline-styles']) {
      for (let property in wrapper_styles) {
        this.element.style[property] = wrapper_styles[property];
      }
      
      if (!['absolute', 'fixed', 'relative', 'sticky'].indexOf(parent.style.position)) {
        parent.style.position = 'relative';
      }
    }

    if (this.is_mobile && !this.params.mobile) {
      return this.element;
    }

    // set play/mute controls wrap
    if (this.params['play-button'] || this.params['mute-button']) {
      const controls = document.createElement('div');
      controls.className = 'video-background-controls';

      controls.style.position = 'absolute';
      controls.style.top = '10px';
      controls.style.right = '10px';
      controls.style['z-index'] = 2;

      this.controls_element = controls;
      parent.appendChild(controls);
    }

    return this.element;
  };

  YoutubeBackground.prototype.play = function () {
    //TODO: solve this with ARIA toggle states. P.S. warning repetitive code!!!
    if (this.buttons.hasOwnProperty('play')) {
      const btn_obj = this.buttons.play;
      removeClass(btn_obj.element, btn_obj.button_properties.stateClassName);
      addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
      removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
    }

    if (this.player) {
      if (this.params['start-at'] && this.player.getCurrentTime() < this.params['start-at'] ) {
        this.seekTo(this.params['start-at']);
      }
      this.player.playVideo();
      this.element.dispatchEvent(new CustomEvent('video-background-play', { bubbles: true, detail: this }));
    }
  };

  YoutubeBackground.prototype.pause = function () {
    //TODO: solve this with ARIA toggle states
    if (this.buttons.hasOwnProperty('play')) {
      const btn_obj = this.buttons.play;
      addClass(btn_obj.element, btn_obj.button_properties.stateClassName);
      removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
      addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
    }

    if (this.player) {
      this.player.pauseVideo();
      this.element.dispatchEvent(new CustomEvent('video-background-pause', { bubbles: true, detail: this }));
    }
  };

  YoutubeBackground.prototype.unmute = function () {
    //TODO: solve this with ARIA toggle states
    if (this.buttons.hasOwnProperty('mute')) {
      const btn_obj = this.buttons.mute;
      removeClass(btn_obj.element, btn_obj.button_properties.stateClassName);
      addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
      removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
    }

    if (this.player) {
      this.player.unMute();
      this.element.dispatchEvent(new CustomEvent('video-background-unmute', { bubbles: true, detail: this }));
    }
  };

  YoutubeBackground.prototype.mute = function () {
    //TODO: solve this with ARIA toggle states
    if (this.buttons.hasOwnProperty('mute')) {
      const btn_obj = this.buttons.mute;
      addClass(btn_obj.element, btn_obj.button_properties.stateClassName);
      removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
      addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
    }

    if (this.player) {
      this.player.mute();
      this.element.dispatchEvent(new CustomEvent('video-background-mute', { bubbles: true, detail: this }));
    }
  };

  //TODO: refactor states to be equal for all buttons
  YoutubeBackground.prototype.generateActionButton = function (obj) {
    const btn = document.createElement('button');
    btn.className = obj.className;
    btn.innerHTML = obj.innerHtml;
    addClass(btn.firstChild, obj.stateChildClassNames[0]);

    //TODO: solve this with ARIA toggle states
    if (this.params[obj.condition_parameter] === obj.initialState) {
      addClass(btn, obj.stateClassName);
      removeClass(btn.firstChild, obj.stateChildClassNames[0]);
      addClass(btn.firstChild, obj.stateChildClassNames[1]);
    }

    const self = this;
    btn.addEventListener('click', function(e) {
      if (hasClass(this, obj.stateClassName)) {
        self.state[obj.name] = false;
        self[obj.actions[0]]();
      } else {
        self.state[obj.name] = true;
        self[obj.actions[1]]();
      }
    });

    this.buttons[obj.name] = {
      element: btn,
      button_properties: obj
    };

    this.controls_element.appendChild(btn);
  };

  function VimeoBackground(elem, params, id, uid) {
    this.is_mobile = isMobile();

    this.element = elem;
    this.vid = id;
    this.uid = uid;
    this.player = null;
    this.buttons = {};

    this.state = {};
    this.state.play = false;
    this.state.mute = false;

    this.params = {};

    const DEFAULTS = {
  //    'pause': false, //deprecated
  //    'play-button': false,
  //    'mute-button': false,
      'autoplay': true,
      'muted': true,
      'loop': true,
      'mobile': false,
  //    'load-background': true,
      'resolution': '16:9',
      'inline-styles': true,
      'fit-box': false,
      'offset': 200,
      'start-at': 0,
      'poster': null
    };

    this.__init__ = function () {
      if (!this.vid) {
        return;
      }

      this.params = parseProperties(params, DEFAULTS, this.element, ['data-ytbg-', 'data-vbg-']);
      //pause deprecated
      if (this.params.pause) {
        this.params['play-button'] = this.params.pause;
      }
      this.params.resolution_mod = parseResolutionString(this.params.resolution);
      this.state.playing = this.params.autoplay;
      this.state.muted = this.params.muted;

      this.buildHTML();
      this.injectPlayer();
    };

    this.__init__();
  }

  VimeoBackground.prototype.injectPlayer = function () {
    this.iframe = document.createElement('iframe');
    this.iframe.setAttribute('frameborder', 0);
    this.iframe.setAttribute('allow', ['autoplay; mute']);
    let src = 'https://player.vimeo.com/video/'+this.vid+'?background=1&controls=0';

    if (this.params.muted) {
      src += '&muted=1';
    }

    if (this.params.autoplay) {
      src += '&autoplay=1';
    }

    if (this.params.loop) {
      src += '&loop=1&autopause=0';
    }

    //WARN❗️ this is a hash not a query param
    if (this.params['start-at']) {
      src += '#t=' + this.params['start-at'] + 's';
    }

    this.iframe.src = src;

    if (this.uid) {
      this.iframe.id = this.uid;
    }

    if (this.params['load-background'] || this.params['poster']) {
      //if (this.params['load-background']) wrapper_styles['background-image'] = 'url(https://img.youtube.com/vi/'+this.ytid+'/maxresdefault.jpg)';
      if (this.params['poster']) wrapper_styles['background-image'] = this.params['poster'];
      wrapper_styles['background-size'] = 'cover';
      wrapper_styles['background-repeat'] = 'no-repeat';
      wrapper_styles['background-position'] = 'center';
    }

    if (this.params['inline-styles']) {
      this.iframe.style.top = '50%';
      this.iframe.style.left = '50%';
      this.iframe.style.transform = 'translateX(-50%) translateY(-50%)';
      this.iframe.style.position = 'absolute';
      this.iframe.style.opacity = 1;
    }

    this.element.appendChild(this.iframe);

    if (this.params['fit-box']) {
      this.iframe.style.width = '100%';
      this.iframe.style.height = '100%';
    } else {
      const self = this;

      const onResize = function() {
        const h = self.iframe.parentNode.offsetHeight + self.params.offset; // since showinfo is deprecated and ignored after September 25, 2018. we add +200 to hide it in the overflow
        const w = self.iframe.parentNode.offsetWidth + self.params.offset;
        const res = self.params.resolution_mod;

        if (res > w/h) {
          self.iframe.style.width = h*res + 'px';
          self.iframe.style.height = h + 'px';
        } else {
          self.iframe.style.width = w + 'px';
          self.iframe.style.height = w/res + 'px';
        }
      };

      if (window.hasOwnProperty('ResizeObserver')) {
        const resize_observer = new ResizeObserver(() => {
          window.requestAnimationFrame(onResize);
        });
        resize_observer.observe(this.element);
      } else {
        window.addEventListener('resize', () => {
          window.requestAnimationFrame(onResize);
        });
      }
      onResize();
    }
  };

  VimeoBackground.prototype.buildHTML = function () {
    const parent = this.element.parentNode;
    // wrap
    addClass(this.element, 'youtube-background');

    //set css rules
    const wrapper_styles = {
      "height" : "100%",
      "width" : "100%",
      "z-index": "0",
      "position": "absolute",
      "overflow": "hidden",
      "top": 0, // added by @insad
      "left": 0,
      "bottom": 0,
      "right": 0
    };

    if (this.params['load-background'] || this.params['poster']) {
      //if (this.params['load-background']) wrapper_styles['background-image'] = 'url(https://img.youtube.com/vi/'+this.ytid+'/maxresdefault.jpg)';
      if (this.params['poster']) wrapper_styles['background-image'] = this.params['poster'];
      wrapper_styles['background-size'] = 'cover';
      wrapper_styles['background-repeat'] = 'no-repeat';
      wrapper_styles['background-position'] = 'center';
    }

    if (!this.params['mute-button']) {
      wrapper_styles["pointer-events"] = "none"; // avoid right mouse click popup menu
    }

    if (this.params['load-background']) {
      //TODO: wrapper_styles['background-image'] = 'url(https://img.youtube.com/vi/'+this.vid+'/maxresdefault.jpg)';
      wrapper_styles['background-size'] = 'cover';
      wrapper_styles['background-repeat'] = 'no-repeat';
      wrapper_styles['background-position'] = 'center';
    }

    if (this.params['inline-styles']) {
      for (let property in wrapper_styles) {
        this.element.style[property] = wrapper_styles[property];
      }

      if (!['absolute', 'fixed', 'relative', 'sticky'].indexOf(parent.style.position)) {
        parent.style.position = 'relative';
      }
    }

    return this.element;
  };

  function VideoBackground(elem, params, vid_data, uid) {
    this.is_mobile = isMobile();

    this.element = elem;
    this.link = vid_data.link;
    this.ext = vid_data.id;
    this.uid = uid;
    this.player = null;
    this.buttons = {};

    this.state = {};
    this.state.play = false;
    this.state.mute = false;

    this.params = {};

    const MIME_MAP = {
      'ogv' : 'video/ogg',
      'ogm' : 'video/ogg',
      'ogg' : 'video/ogg',
      'avi' : 'video/avi',
      'mp4' : 'video/mp4',
      'webm' : 'video/webm'
    };

    const DEFAULTS = {
      'pause': false, //deprecated
      'play-button': false,
      'mute-button': false,
      'autoplay': true,
      'muted': true,
      'loop': true,
      'mobile': false,
      'resolution': '16:9',
      'inline-styles': true,
      'fit-box': false,
      'offset': 200,
  //    'start-at': 0,
  //    'end-at': 0,
      'poster': null
    };

    this.__init__ = function () {
      if (!this.link || !this.ext) {
        return;
      }

      this.mime = MIME_MAP[this.ext.toLowerCase()];
      this.params = parseProperties(params, DEFAULTS, this.element, ['data-ytbg-', 'data-vbg-']);
      //pause deprecated
      if (this.params.pause) {
        this.params['play-button'] = this.params.pause;
      }
      this.params.resolution_mod = parseResolutionString(this.params.resolution);
      this.state.playing = this.params.autoplay;
      this.state.muted = this.params.muted;

      this.buildHTML();
      this.injectPlayer();


      if (this.params['play-button']) {
        this.generateActionButton({
          name: 'play',
          className: 'play-toggle',
          innerHtml: '<i class="fa"></i>',
          initialState: false,
          stateClassName: 'paused',
          condition_parameter: 'autoplay',
          stateChildClassNames: ['fa-pause-circle', 'fa-play-circle'],
          actions: ['play', 'pause']
        });
      }

      if (this.params['mute-button']) {
        this.generateActionButton({
          name: 'mute',
          className: 'mute-toggle',
          innerHtml: '<i class="fa"></i>',
          initialState: true,
          stateClassName: 'muted',
          condition_parameter: 'muted',
          stateChildClassNames: ['fa-volume-up', 'fa-volume-mute'],
          actions: ['unmute', 'mute']
        });
      }
    };

    this.__init__();
  }

  VideoBackground.prototype.seekTo = function (seconds) {
    if (this.player.hasOwnProperty('fastSeek')) {
      this.player.fastSeek(seconds);
      return;
    }
    this.player.currentTime = seconds;
  };

  VideoBackground.prototype.injectPlayer = function () {
    this.player = document.createElement('video');
    this.player.muted = this.params.muted;
    this.player.autoplay = this.params.autoplay;
    this.player.loop = this.params.loop;
    this.player.playsinline = true;

    this.player.setAttribute('id', this.uid);

    if (this.params['inline-styles']) {
      this.player.style.top = '50%';
      this.player.style.left = '50%';
      this.player.style.transform = 'translateX(-50%) translateY(-50%)';
      this.player.style.position = 'absolute';
      this.player.style.opacity = 0;

      this.player.addEventListener('canplay', (e) => {
        e.target.style.opacity = 1;
      });
    }

    const self = this;
    /*
    this.player.addEventListener('canplay', (e) => {
      if (self.params['start-at'] && self.params.autoplay) {
        self.seekTo(self.params['start-at']);
      }
    });

    this.player.addEventListener('canplaythrough', (e) => {
      if (self.params['end-at'] > 0) {
      self.player.addEventListener('timeupdate', (e) => {
        if (self.params['end-at'] >= self.player.currentTime) {
          self.seekTo(self.params['start-at']);
        }
      });
    }
    });
    */

    const source = document.createElement('source');
    source.setAttribute('src', this.link);
    source.setAttribute('type', this.mime);
    this.player.appendChild(source);
    this.element.appendChild(this.player);

    if (this.params['fit-box']) {
      this.player.style.width = '100%';
      this.player.style.height = '100%';
    } else {
      //TODO❗️: maybe a spacer or at least add requestAnimationFrame
      function onResize() {
        const h = self.player.parentNode.offsetHeight + self.params.offset; // since showinfo is deprecated and ignored after September 25, 2018. we add +200 to hide it in the overflow
        const w = self.player.parentNode.offsetWidth + self.params.offset;
        const res = self.params.resolution_mod;

        if (res > w/h) {
          self.player.style.width = h*res + 'px';
          self.player.style.height = h + 'px';
        } else {
          self.player.style.width = w + 'px';
          self.player.style.height = w/res + 'px';
        }
      }

      if (window.hasOwnProperty('ResizeObserver')) {
        const resize_observer = new ResizeObserver(() => {
          window.requestAnimationFrame(onResize);
        });
        resize_observer.observe(this.element);
      } else {
        window.addEventListener('resize', () => {
          window.requestAnimationFrame(onResize);
        });
      }
      onResize();
    }
  };

  VideoBackground.prototype.buildHTML = function () {
    const parent = this.element.parentNode;
    // wrap
    addClass(this.element, 'video-background');

    //set css rules
    const wrapper_styles = {
      "height" : "100%",
      "width" : "100%",
      "z-index": "0",
      "position": "absolute",
      "overflow": "hidden",
      "top": 0, // added by @insad
      "left": 0,
      "bottom": 0,
      "right": 0
    };

    if (!this.params['mute-button']) {
      wrapper_styles["pointer-events"] = "none"; // avoid right mouse click popup menu
    }

    if (this.params['load-background'] || this.params['poster']) {
      if (this.params['poster']) wrapper_styles['background-image'] = `url('${this.params['poster']}')`;
      wrapper_styles['background-size'] = 'cover';
      wrapper_styles['background-repeat'] = 'no-repeat';
      wrapper_styles['background-position'] = 'center';
    }

    if (this.params['inline-styles']) {
      for (let property in wrapper_styles) {
        this.element.style[property] = wrapper_styles[property];
      }

      if (!['absolute', 'fixed', 'relative', 'sticky'].indexOf(parent.style.position)) {
        parent.style.position = 'relative';
      }
    }

    if (this.is_mobile && !this.params.mobile) {
      return this.element;
    }

    // set play/mute controls wrap
    if (this.params['play-button'] || this.params['mute-button']) {
      const controls = document.createElement('div');
      controls.className = 'video-background-controls';

      controls.style.position = 'absolute';
      controls.style.top = '10px';
      controls.style.right = '10px';
      controls.style['z-index'] = 2;

      this.controls_element = controls;
      parent.appendChild(controls);
    }

    return this.element;
  };

  VideoBackground.prototype.play = function () {
    //TODO: solve this with ARIA toggle states. P.S. warning repetitive code!!!
    if (this.buttons.hasOwnProperty('play')) {
      const btn_obj = this.buttons.play;
      removeClass(btn_obj.element, btn_obj.button_properties.stateClassName);
      addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
      removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
    }

    if (this.player) {
      /* if (this.params['start-at'] && this.player.currentTime < this.params['start-at'] ) {
        this.seekTo(this.params['start-at']);
      } */
      this.player.play();
      this.element.dispatchEvent(new CustomEvent('video-background-play', { bubbles: true, detail: this }));
    }
  };

  VideoBackground.prototype.pause = function () {
    //TODO: solve this with ARIA toggle states
    if (this.buttons.hasOwnProperty('play')) {
      const btn_obj = this.buttons.play;
      addClass(btn_obj.element, btn_obj.button_properties.stateClassName);
      removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
      addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
    }

    if (this.player) {
      this.player.pause();
      this.element.dispatchEvent(new CustomEvent('video-background-pause', { bubbles: true, detail: this }));
    }
  };

  VideoBackground.prototype.unmute = function () {
    //TODO: solve this with ARIA toggle states
    if (this.buttons.hasOwnProperty('mute')) {
      const btn_obj = this.buttons.mute;
      removeClass(btn_obj.element, btn_obj.button_properties.stateClassName);
      addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
      removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
    }

    if (this.player) {
      this.player.muted = false;
      this.element.dispatchEvent(new CustomEvent('video-background-unmute', { bubbles: true, detail: this }));
    }
  };

  VideoBackground.prototype.mute = function () {
    //TODO: solve this with ARIA toggle states
    if (this.buttons.hasOwnProperty('mute')) {
      const btn_obj = this.buttons.mute;
      addClass(btn_obj.element, btn_obj.button_properties.stateClassName);
      removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
      addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
    }

    if (this.player) {
      this.player.muted = true;
      this.element.dispatchEvent(new CustomEvent('video-background-mute', { bubbles: true, detail: this }));
    }
  };

  //TODO: refactor states to be equal for all buttons
  VideoBackground.prototype.generateActionButton = function (obj) {
    const btn = document.createElement('button');
    btn.className = obj.className;
    btn.innerHTML = obj.innerHtml;
    addClass(btn.firstChild, obj.stateChildClassNames[0]);

    //TODO: solve this with ARIA toggle states
    if (this.params[obj.condition_parameter] === obj.initialState) {
      addClass(btn, obj.stateClassName);
      removeClass(btn.firstChild, obj.stateChildClassNames[0]);
      addClass(btn.firstChild, obj.stateChildClassNames[1]);
    }

    const self = this;
    btn.addEventListener('click', function(e) {
      if (hasClass(this, obj.stateClassName)) {
        self.state[obj.name] = false;
        self[obj.actions[0]]();
      } else {
        self.state[obj.name] = true;
        self[obj.actions[1]]();
      }
    });

    this.buttons[obj.name] = {
      element: btn,
      button_properties: obj
    };

    this.controls_element.appendChild(btn);
  };

  function VideoBackgrounds(selector, params) {
    this.elements = selector;

    if (typeof selector === 'string') {
      this.elements = document.querySelectorAll(selector);
    }

    this.index = {};
    this.re = {};
    this.re.YOUTUBE = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    this.re.VIMEO = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i;
    this.re.VIDEO = /\/[^\/]+\.(mp4|ogg|ogv|ogm|webm|avi)\s?$/i;

    this.__init__ = function () {
      for (let i = 0; i < this.elements.length; i++) {
        const element = this.elements[i];

        const link = element.getAttribute('data-youtube') || element.getAttribute('data-vbg');
        const vid_data = this.getVidID(link);

        if (!vid_data) {
          continue;
        }

        const uid = this.generateUID(vid_data.id);

        if (!uid) {
          continue;
        }

        switch (vid_data.type) {
          case 'YOUTUBE':
            const yb = new YoutubeBackground(element, params, vid_data.id, uid);
            this.index[uid] = yb;
            break;
          case 'VIMEO':
            const vm = new VimeoBackground(element, params, vid_data.id, uid);
            this.index[uid] = vm;
            break;
          case 'VIDEO':
            const vid = new VideoBackground(element, params, vid_data, uid);
            this.index[uid] = vid;
            break;
        }
      }

      this.initYTPlayers(/*function() {
        //TODO: FIX!
        if (params &&
          (params.hasOwnProperty('activity_timeout')
            || params.hasOwnProperty('inactivity_timeout'))) {
          this.activity_monitor = new ActivityMonitor(function () {
              self.playVideos();
            }, function() {
              self.pauseVideos();
            },
            params ? params.activity_timeout : null,
            params ? params.inactivity_timeout : null,
            ['mousemove', 'scroll']
          );
        }
      }*/);
    };

    this.__init__();
  }

  VideoBackgrounds.prototype.getVidID = function (link) {
    if (link !== undefined && link !== null) {
      for (let k in this.re) {
        const pts = link.match(this.re[k]);

        if (pts && pts.length) {
          this.re[k].lastIndex = 0;
          return {
            id: pts[1],
            type: k,
            regex_pts: pts,
            link: link
          };
        }
      }
    }

    return null;
  };


  VideoBackgrounds.prototype.generateUID = function (pref) {
    //index the instance
    let uid = pref +'-'+ getRandomIntInclusive(0, 9999);
    while (this.index.hasOwnProperty(uid)) {
      uid = pref +'-'+ getRandomIntInclusive(0, 9999);
    }

    return uid;
  };

  VideoBackgrounds.prototype.pauseVideos = function () {
    for (let k in this.index) {
      this.index[k].pause();
    }
  };

  VideoBackgrounds.prototype.playVideos = function () {
    for (let k in this.index) {
      this.index[k].play();
    }
  };

  VideoBackgrounds.prototype.initYTPlayers = function (callback) {
    const self = this;

    window.onYouTubeIframeAPIReady = function () {
      for (let k in self.index) {
        if (self.index[k] instanceof YoutubeBackground) {
          self.index[k].initYTPlayer();
        }
      }

      if (callback) {
        setTimeout(callback, 100);
      }
    };

    if (window.hasOwnProperty('YT') && window.YT.loaded) {
      window.onYouTubeIframeAPIReady();
    }
  };

  if (typeof jQuery == 'function') {
    (function ($) {
      $.fn.youtube_background = function (params) {
        const $this = $(this);
        new VideoBackgrounds(this, params);
        return $this;
      };
    })(jQuery);
  }

  window.VideoBackgrounds = VideoBackgrounds;

})();
;
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);;
/**
 * @file
 * Specifically for Algolia search implementation.
 *
 */

(function($, Drupal, drupalSettings) {

  'use strict';

  var initSearchResult = false;

  Drupal.behaviors.petronasAlgolia = {
    attach: function(context, settings) {
      if ($("#search-form, #search-form-modal").length > 0) {
        var indexName = drupalSettings.alIndex;

        if (!initSearchResult) {
          const searchPageUrl = window.location.origin + drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'search?search_query=';
          const { autocomplete, getAlgoliaResults } = window['@algolia/autocomplete-js'];
          const { createQuerySuggestionsPlugin } = window['@algolia/autocomplete-plugin-query-suggestions'];
          const { pagination } = instantsearch.widgets;
          const historyRouter = instantsearch.routers;
          var instantSearchRouter = historyRouter.history()
          const { connectSearchBox } = instantsearch.connectors;
          const searchPageState = getInstantSearchUiState();
          var recentSearches = JSON.parse(localStorage.getItem('petronas_recent_searches'));

          const searchClient = algoliasearch('IK2A979H8U', '9cef43af9d102cc7c8d4f94030b7b566');

          var currentRouting = instantSearchRouter;
          if ($("#search-form").length > 0) {
            currentRouting = {
              stateMapping: {
                stateToRoute(uiState) {
                  const indexUiState = uiState[indexName];
                  return {
                    search_query: indexUiState.query,
                    page: indexUiState.page,
                  }
                },
                routeToState(routeState) {
                  return {
                    [indexName]: {
                      query: routeState.search_query,
                      page: routeState.page,
                    },
                  };
                },
              },
            };

            $('.JindexNaviContainer').addClass('force-active');
          }

          var search = instantsearch({
            indexName: indexName,
            searchClient,
            routing: currentRouting,
          });

          // Return the InstantSearch index UI state.
          function getInstantSearchUiState() {
            const uiState = instantSearchRouter.read();
        
            return (uiState && uiState[indexName]) || {};
          }

          // Set the InstantSearch index UI state from external events.
          function setInstantSearchUiState(indexUiState) {
            let refinementListArray = {};
            let rangeArray = {};

            if (typeof indexUiState.submittedFilter !== 'undefined') {
              if (typeof indexUiState.submittedFilter.refinementList !== 'undefined') {
                refinementListArray = indexUiState.submittedFilter.refinementList;
              }
  
              if (typeof indexUiState.submittedFilter.range !== 'undefined') {
                rangeArray = indexUiState.submittedFilter.range;
              }
            }

            search.setUiState(uiState => ({
              ...uiState,
              [indexName]: {
                ...uiState[indexName],
                // We reset the page when the search state changes.
                page: 1,
                refinementList: refinementListArray,
                numericMenu: rangeArray,
                range: rangeArray,
                /*refinementList: {
                  topic_name: ['Our Passion'],
                },*/
                /*numericMenu: {
                  created: "1665134570:1665134580"
                },
                range: {
                  created: '1665134570:1665134580',
                },*/
                ...indexUiState,
              },
            }));
          }

          // Detect when an event is modified with a special key to let the browser
          // trigger its default behavior.
          function isModifierEvent(event) {
            const isMiddleClick = event.button === 1;
          
            return (
              isMiddleClick ||
              event.altKey ||
              event.ctrlKey ||
              event.metaKey ||
              event.shiftKey
            );
          }
          
          function onSelect({ setIsOpen, setQuery, event, query }) {
            // You want to trigger the default browser behavior if the event is modified.
            if (isModifierEvent(event)) {
              return;
            }

            if ($("#search-form").length == 0) {
              window.location = searchPageUrl + query;
            }
            else {
              setQuery(query);
              setIsOpen(false);
              setInstantSearchUiState({ query });
            }
          }

          $.fn.onFilterFormSubmit = function(data) {
            let selectedTopics = [];
            let currentUiState = getInstantSearchUiState();
            currentUiState.submittedFilter = {
              refinementList: {},
              range: {},
            };

            $.each(data.topic, (index, value) => {
              if (value !== 0) {
                selectedTopics.push(value);
              }
            });
            if (selectedTopics.length > 0) {
              currentUiState.submittedFilter.refinementList.topic_name = selectedTopics;
            }

            let publishedStart = $('#edit-published-start').datepicker('getDate') !== null ? $('#edit-published-start').datepicker('getDate').getTime() / 1000 : null;
            let publishedEnd = $('#edit-published-end').datepicker('getDate') !== null ? ($('#edit-published-end').datepicker('getDate').getTime() / 1000) + 86400 : null;

            if (publishedStart !== null && publishedEnd !== null) {
              currentUiState.submittedFilter.range.created = publishedStart + ':' + publishedEnd;
            }

            // Highlight filter active.
            $('#filter-widget').removeClass('is-active');
            if (Object.keys(currentUiState.submittedFilter.range).length > 0 || Object.keys(currentUiState.submittedFilter.refinementList).length > 0) {
              $('#filter-widget').addClass('is-active');
            }

            setInstantSearchUiState(currentUiState);

            $('.petronas-algolia-filters').addClass('d-none');
          };

          const querySuggestionsPlugin = createQuerySuggestionsPlugin({
            searchClient,
            indexName: 'petronas_query_suggestions',
            getSearchParams() {
              return {
                hitsPerPage: 8,
              };
            },
            transformSource({ source }) {
              return {
                ...source,
                sourceId: 'querySuggestionsPlugin',
                onSelect({ setIsOpen, setQuery, event, item }) {
                  onSelect({
                    setQuery,
                    setIsOpen,
                    event,
                    query: item.query,
                  });
                },
                getItems(params) {
                  // We don't display Query Suggestions when there's no query.
                  if (!params.state.query) {
                    return [];
                  }
          
                  return source.getItems(params);
                },
              };
            },
          });

          //const targetSearchForm = ($('#search-form').length > 0) ? '#search-form' : '#search-form-modal';
          const targetSearchForm = '#search-form-modal';
          const { setQuery } = autocomplete({
            container: targetSearchForm,
            panelContainer: '#search-form-panel',
            detachedMediaQuery: 'none',
            openOnFocus: false,
            plugins: [querySuggestionsPlugin],
            placeholder: Drupal.t('Enter a keyword'),
            initialState: {
              query: searchPageState.query || '',
            },
            onSubmit({ state }) {
              //setInstantSearchUiState({ query: state.query });
              window.location = searchPageUrl + state.query;
            },
            getSources({ query }) {
              return [
                {
                  sourceId: 'searchResults',
                  getItems() {
                    return getAlgoliaResults({
                      searchClient,
                      queries: [
                        {
                          indexName: indexName,
                          query,
                          params: {
                            hitsPerPage: 3,
                            attributesToSnippet: ['rendered_item:8'],
                            snippetEllipsisText: '…',
                          },
                        },
                      ],
                    });
                  },
                  templates: {
                    item({ item, components, html }) {
                      if (item.thumbnail == '') {
                        item.thumbnail = drupalSettings.path.baseUrl + '/themes/custom/petronas/images/search-placeholder.png';
                      }

                      return html`<div class="aa-ItemWrapper">
                        <a href="${item.url}" class="aa-ItemContent">
                          <div class="aa-ItemIcon aa-ItemIcon--alignMiddle">
                            <img
                              src="${window.location.origin}${item.thumbnail}"
                              alt="${item.title}"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div class="aa-ItemContentBody">
                            <div class="aa-ItemContentTitle">
                              ${item.title}
                            </div>
                            <div class="aa-ItemContentDescription">
                              ${components.Snippet({
                                hit: item,
                                attribute: 'rendered_item',
                              })}
                            </div>
                          </div>
                        </a>
                      </div>`;
                    },
                  },
                },
              ];
            },
            render({ elements, render, html }, root) {
              const { querySuggestionsPlugin, searchResults } = elements;
              const label1 = Drupal.t('Suggestion Keywords');
              const label2 = Drupal.t('Suggestion Page');
          
              render(
                html`<div class="aa-PanelLayout aa-Panel--scrollable">
                  <div class="row">
                    <div class="col-md-4 col-lg-5 mb-4 mb-md-0">
                      <div class="aa-section-title text-primary mb-2"><strong>${label1}</strong></div>
                      ${querySuggestionsPlugin}
                    </div>
                    <div class="col-md-8 col-lg-7">
                      <div class="aa-section-title text-primary mb-2"><strong>${label2}</strong></div>
                      ${searchResults}
                    </div>
                  </div>
                </div>`,
                root
              );
            },
          });

          if ($('#st-results-container').length > 0) {
            const virtualSearchBox = connectSearchBox(() => {});
            const sortByLabel = Drupal.t('Sort by');

            search.addWidgets([
              instantsearch.widgets.configure({
                attributesToSnippet: ['rendered_item:50'],
              }),
  
              instantsearch.widgets.searchBox({
                container: '#search-form',
                showSubmit: true,
                searchAsYouType: false,
                showReset: false,
                showLoadingIndicator: false,
              }),

              instantsearch.widgets.refinementList({
                container: '#topic-widget',
                attribute: 'topic_name',
              }),

              instantsearch.widgets.rangeInput({
                container: '#created-widget',
                attribute: 'created',
              }),

              instantsearch.widgets.stats({
                container: '#search-stats-wrapper',
                templates: {
                  text(data, { html }) {
                    let count = '';
                    if (data.hasManyResults) {
                      count += `${data.nbHits}`;
                    } else if (data.hasOneResult) {
                      count += `1`;
                    } else {
                      count += `No result`;
                    }

                    let spacerText = Drupal.t('results');
                    if (data.query !== '') {
                      spacerText = Drupal.t('for');
                    }

                    let prefixLabel = Drupal.t('We found');
              
                    return html`<div class="content">${prefixLabel} <strong>${count}</strong> ${spacerText} <span class="search-keyword">${data.query}</span></div>`;
                  },
                },
              }),

              instantsearch.widgets.sortBy({
                container: '#sort-widget',
                cssClasses: {
                  select: [
                    'form-select',
                  ],
                },
                items: [
                  { label: sortByLabel, value: indexName },
                  { label: Drupal.t('Relevance'), value: indexName },
                  { label: Drupal.t('Latest Date'), value: indexName + '_created_desc' },
                ],
              }),
  
              instantsearch.widgets.pagination({
                container: '#search-pagination',
                scrollTo: '.search-results-wrapper',
                showFirst: false,
                showLast: false,
                templates: {
                  previous: '« ' + Drupal.t('previous'),
                  next: Drupal.t('next') + ' »',
                },
              }),
            
              instantsearch.widgets.hits({
                container: '#st-results-container',
                escapeHTML: true,
                templates: {
                  item(hit, { html, components }) {
                    return html`
                      <a href="${hit.url}" class="st-search-result-link">
                        <div class="st-result">
                          <h3 class="title">${hit.title}</h3>
                          <div class="JgeneralFooterTopBreadcrumb">
                            ${hit.breadcrumb.map(
                              (breadcrumbItem) =>
                                html`${breadcrumbItem.url === ''
                                  ? html`<a href="${hit.url}">${breadcrumbItem.title}</a>`
                                  : html`<a href="${breadcrumbItem.url}">${breadcrumbItem.title}</a>`}
                                `
                            )}
                          </div>
                          <div class="st-metadata">
                            <span class="st-snippet">${components.Snippet({
                              hit: hit,
                              attribute: 'rendered_item',
                            })}</span>
                          </div>
                        </div>
                      </a>
                    `; 
                  },
                },
              }),
            ]);
          }
  
          search
            .on('render', () => {
              if ($('#st-loading-indicator').length > 0) {
                const container = $('#st-loading-indicator');
                if ((search.status === 'loading' || search.status === 'stalled') && container.html().trim() == "") {
                  $('#st-results-container').empty();
                  container.html('Loading...');
                } else {
                  container.html('');

                  // Implement recent searches.
                  if (search.status == 'idle' && $('.ais-Hits').length > 0 && !$('.ais-Hits').hasClass('ais-Hits--empty') && search.helper.state.query !== '') {
                    if (recentSearches == null) {
                      recentSearches = [];
                    }
                    if (recentSearches.includes(search.helper.state.query) == false) {
                      recentSearches.unshift(search.helper.state.query);
                      recentSearches.splice(5);
                      localStorage.setItem('petronas_recent_searches', JSON.stringify(recentSearches));

                      if ($('#search-recent').find(".popular-item").length >= 5) {
                        $('#search-recent').find(".popular-item").slice(-1).remove();
                      }
                      $.each(recentSearches.slice(0, 1), function() {
                        $('#search-recent .items').prepend('<div class="popular-item d-flex align-items-center"><span>' + this + '</span> <a href=""></a></div>');
                      });
                    }
                  }
                }
              }
            })
            .start();

          // Filter implementation.
          $(once('algoliaFilterClick', '#filter-widget, .filters-close')).on('click', function (e) {
            $('.petronas-algolia-filters').toggleClass('d-none');
            e.preventDefault();
          });

          $("#edit-published-start, #edit-published-end").datepicker({
            dateFormat: 'dd/mm/yy',
          });

          // Implement popular searches.
          $.ajax({
            url: drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'searches/popular',
            success: function (result) {
              let popularTags = result.results.splice(0, 4);

              $.each(popularTags, function() {
                $('#search-form-popular .items').append('<div class="popular-item d-inline-flex d-md-flex align-items-center"><span>' + this.name + '</span> <a href=""></a></div>');
              });

              $('#search-form-popular').on('click', '.popular-item a', function(e) {
                result.results.push({id: '99', name: $(this).parent().find('span').text()});
                let newTag = result.results.splice(0, 1);
                $(this).parent().find('span').text(newTag[0].name);
                e.preventDefault();
              });

              $('#search-form-popular').on('click', '.popular-item span', function() {
                window.location = searchPageUrl + $(this).text();
              });
            }
          });

          // Implement recent searches.
          if (recentSearches !== null && recentSearches.length > 0) {
            $('#search-recent').removeClass('d-none');

            $.each(recentSearches, function() {
              $('#search-recent .items').append('<div class="popular-item d-flex align-items-center"><span>' + this + '</span> <a href=""></a></div>');
            });
          }

          $('#search-recent').on('click', '.popular-item span', function() {
            $('.ais-SearchBox-input').val($(this).text());
            search.helper
              .setQuery($(this).text())
              .search();
            //window.location = searchPageUrl + $(this).text();
          });

          $('#search-recent').on('click', '.popular-item a', function(e) {
            let recentIndex = recentSearches.indexOf($(this).parent().find('span').text());
            if (typeof recentIndex !== 'undefined') {
              recentSearches.splice(recentIndex, 1);
              $('#search-recent').find(".popular-item").slice(recentIndex, recentIndex+1).remove();
              localStorage.setItem('petronas_recent_searches', JSON.stringify(recentSearches));
            }

            if (recentSearches.length == 0) {
              $('#search-recent').addClass('d-none');
            }

            e.preventDefault();
          });
        }

        initSearchResult = true;
      }

    }
  };

})(jQuery, Drupal, drupalSettings);;
/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio = {
    attach: function (context, settings) {

      var position = $(window).scrollTop();
        $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('body').addClass("scrolled");
        }
        else {
          $('body').removeClass("scrolled");
        }
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          $('body').addClass("scrolldown");
          $('body').removeClass("scrollup");
        } else {
          $('body').addClass("scrollup");
          $('body').removeClass("scrolldown");
        }
        position = scroll;
      });

      $('.dropdown-item a.dropdown-toggle').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    }
  };

})(jQuery, Drupal);
;

(function($, Drupal, cookies) {

    $('.Jcontact01ListInner .JgeneralBtn a').click(function(e){
        e.preventDefault();
        $('body').addClass('noScroll');
        if($(this).attr('href').indexOf('#') >= 0){
            var final = $(this).attr('href').replace('#', '');
            $('#' + final).fadeIn();
        }
    })

    $('.JgeneralPopupClose').click(function(){
        $('body').removeClass('noScroll');
        $(this).parent().parent().parent().parent().fadeOut();
    })

    // Implement Youtube BG.
    if ($('[data-vbg]').length > 0) {
        $('[data-vbg]').once('initYoutubeBg').youtube_background();
    }

    // Implement overlay for all video links.
    $('.paragraph').each((index, para) => {
      //if (/banner|video/.test($(para).attr('class'))) {
        $(para).find('a').each((pindex, item) => {
          let videoUrl = $(item).attr('href');
          if (/(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))/.test(videoUrl)) {
            $(item)
              .attr('data-fancybox', '')
              .removeAttr('target');
          }
        });
      //}
    });

    // Move certain exposed fields to the search container.
    if ($('.view-display-id-block_media_listing').length > 0) {
      var isMobile = false; 
      var moveFormItems = function() {
        if (window.matchMedia('(max-width: 767px)').matches) {
          $('.views-exposed-form > div > .js-form-item:not(.form-item-search-container)').each(function() {
            console.log($(this).attr('class'));
            $(this).appendTo('.form-item-search-container');
            isMobile = true;
          });
        }
  
        if (window.matchMedia('(min-width: 768px)').matches) {
          $('.views-exposed-form .form-item-search-container > .js-form-item:not(.form-item-keywords)').each(function() {
            console.log($(this).attr('class'));
            $(this).insertBefore($(this).parent().parent().find('.form-actions'));
            isMobile = false;
          });
        }
      }

      $(document).ajaxComplete(function(event, xhr, settings) {
        moveFormItems();
      });

      $(window).once('mediaListingWindowResize').on('resize', function(e) {
        if (window.matchMedia('(max-width: 767px)').matches && !isMobile) {
          moveFormItems();
        }

        else if (window.matchMedia('(min-width: 768px)').matches && isMobile) {
          moveFormItems();
        }
      });

      moveFormItems();
    }

    // Auto popup modal dialog.
    if ($('.block-modal').length > 0) {
      $('.block-modal').each(function() {
        if ($(this).data('show-once') == '0' || ($(this).data('show-once') == '1' && cookies.get('modal-' + $(this).attr('id')) !== '1')) {
          var blockModal = new bootstrap.Modal($(this), {});
          blockModal.toggle();
        }

        if ($(this).data('show-once') && $(this).data('show-once') == '1') {
          cookies.set('modal-' + $(this).attr('id'), 1, { expires: 1 });
        }
      });
    }

     // Small sticky dialog implementation.
    // if ($('.block-sticky-modal').length > 0) {
    //   if ($('.block-sticky-modal').data('show-once') == '0' || ($('.block-sticky-modal').data('show-once') == '1' && cookies.get('modal-' + $('.block-sticky-modal').attr('id')) !== '1')) {
    //     $('.block-sticky-modal').show();
    //   }      

    //   $('.block-sticky-modal').find('a, .btn-sticky-close').on('click', function(e) {
    //     if ($('.block-sticky-modal').data('show-once') && $('.block-sticky-modal').data('show-once') == '1') {
    //       cookies.set('modal-' + $('.block-sticky-modal').attr('id'), 1, { expires: 30 });
    //     }
    //   });
    // }
    // $('.block-sticky-modal .btn-sticky-close').on('click', function(e) {
    //   $(this).parents('.block-sticky-modal').hide();
    // });

    
    // Check if the user has scrolled 500px down the page
    // $(window).on('scroll', function() {
    //   if ($(this).scrollTop() >= 500) {
    //     // Check if the popup should be displayed
    //     if ($('.block-sticky-modal').length > 0) {
    //       if ($('.block-sticky-modal').data('show-once') == '0' || ($('.block-sticky-modal').data('show-once') == '1' && cookies.get('modal-' + $('.block-sticky-modal').attr('id')) !== '1')) {
    //         $('.block-sticky-modal').show();
    //       }

    //       // Close the popup when the user clicks on a link or the close button
    //       $('.block-sticky-modal').find('a, .btn-sticky-close').on('click', function(e) {
    //         if ($('.block-sticky-modal').data('show-once') && $('.block-sticky-modal').data('show-once') == '1') {
    //           cookies.set('modal-' + $('.block-sticky-modal').attr('id'), 1, { expires: 1 });
    //         }
    //         $('.block-sticky-modal').hide();
    //       });
    //     }
    //   }
    // });

    // // Close the popup when the user clicks the close button
    // $('.block-sticky-modal .btn-sticky-close').on('click', function(e) {
    //   $(this).parents('.block-sticky-modal').hide();
    // });

   // Variable to track whether the modal was closed
let modalClosed = false;

// Function to show the modal
function showPopup() {
  if ($('.block-sticky-modal').length > 0) {
    if (!$('.block-sticky-modal').hasClass('show-popup')) {
      $('.block-sticky-modal').addClass('show-popup');
    }
  }
}

// Function to hide the modal
function hidePopup() {
  $('.block-sticky-modal').removeClass('show-popup');
}

// Check if the user has scrolled 500px down the page
$(window).on('scroll', function() {
  if ($(this).scrollTop() >= 500 && !modalClosed) {
    showPopup();
  }
});

// Close the popup when the user clicks the close button
$('.block-sticky-modal .btn-sticky-close').on('click', function(e) {
  hidePopup();
  modalClosed = true;
 // Show the popup again after 24 hours
  setTimeout(function() {
    modalClosed = false;
    showPopup();
  }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
});

// Handle navigation to other pages when clicking links within the modal
$('.block-sticky-modal a').on('click', function(e) {
  // Hide the popup forever by setting a cookie
  cookies.set('modal-' + $('.block-sticky-modal').attr('id'), 1, { expires: 365 }); // Set a long expiration (e.g., 365 days)
  return true; // Allow the default action (navigation to the link's href)
});

// Ensure the modal doesn't reappear when returning to the pop-up page
$(document).ready(function() {
  if (cookies.get('modal-' + $('.block-sticky-modal').attr('id')) === '1') {
    modalClosed = true;
  }
});

})(jQuery, Drupal, window.Cookies);

document.addEventListener('DOMContentLoaded', function() {
  // Function to remove the "Select All" option
  // Function to change the select option based on the URL
  function changeSelectOptionBasedOnURL() {
      // Check if the URL contains '/bm/'
      if (window.location.href.includes('/bm/')) {
      // If it does, get the select element
      var select = document.querySelector('select[data-drupal-selector="edit-field-content-language-value"]');
      if (select && select.value === 'eng') {
          // Set the value of the select element to 'bm'
          select.value = 'bm';
          // Dispatch a change event on the select element
          select.dispatchEvent(new Event('change', { bubbles: true }));
      }
      }
  }
  changeSelectOptionBasedOnURL();
});;
/**
 * @file
 * Global utilities.
 *
 */

(function($, Drupal) {

  'use strict';

  AOS.init({
    easing: 'ease-in-out-quad',
  });

  $(function() {
      if ($('.paragraph--type--section-content-slider').length > 0) {
          var elms = document.querySelectorAll('.paragraph--type--section-content-slider .splide');

          for ( var i = 0; i < elms.length; i++ ) {
            var splieName = 'splide' + i;
            splieName = new Splide( elms[ i ], {
              type: 'loop',
              arrows: $(elms[ i ]).eq(0).find('.splide__slide').length > 1 ? true : false,
              pagination: $(elms[ i ]).eq(0).find('.splide__slide').length > 1 ? true : false,
              drag: $(elms[ i ]).eq(0).find('.splide__slide').length > 1 ? true : false,
            });

            splieName.on('mounted', function(){
              var getId = '#' + elms[i].id;

              // set thumbnail on loading
              var bgNext = $(getId + '.splide .splide__track .splide__list .splide__slide:first-child').next().children('.JindexRow5Slide').children(".JindexRow5SlideLeft").children(".JindexRow5SlideLeftInner").children(".JindexRow5SlideLeftImg").css('background-image');

              bgNext = bgNext.replace('url(','').replace(')','').replace(/\"/gi, "");
              $(getId + " .JindexRow5SplideNaviInner .splide__arrows .splide__arrow--next").css('background-image', 'url(' + bgNext + ')');

              $(getId + ".JindexRow5SplideNaviInner .splide__arrows .splide__arrow--next").css('background-image', 'url(' + bgNext + ')');

              splieName.on('moved', function(){
                if($(getId + '.splide .splide__track .splide__list .splide__slide.is-active').next().length == 0){
                    bgNext = $(getId + '.splide .splide__track .splide__list .splide__slide:first-child').children('.JindexRow5Slide').children(".JindexRow5SlideLeft").children(".JindexRow5SlideLeftInner").children(".JindexRow5SlideLeftImg").css('background-image');
                } else {
                    bgNext = $(getId + '.splide .splide__track .splide__list .splide__slide.is-active').next().children('.JindexRow5Slide').children(".JindexRow5SlideLeft").children(".JindexRow5SlideLeftInner").children(".JindexRow5SlideLeftImg").css('background-image');
                }
                bgNext = bgNext.replace('url(','').replace(')','').replace(/\"/gi, "");
                
                $(getId + " .JindexRow5SplideNaviInner .splide__arrows .splide__arrow--next").css('background-image', 'url(' + bgNext + ')');
              })

            })

            splieName.mount();
          }

          
      }

      AOS.refresh();

  });

  if ($('.paragraph--type--section-content-slider-2').length > 0) {
      $('.paragraph--type--section-content-slider-2 .splide').each((i, carousel) => {
        new Splide( carousel, {
          type: 'loop',
          arrows: $(carousel).find('.splide__slide').length > 1 ? true : false,
          pagination: $(carousel).find('.splide__slide').length > 1 ? true : false,
          drag: $(carousel).find('.splide__slide').length > 1 ? true : false,
        }).mount();
      });
  }

  if ($('.paragraph--type--section-video-gallery').length > 0) {
      var sliderG3 = new Splide( '.paragraph--type--section-video-gallery .JmasterRow6ContentSlideD .splide', {
          type: 'loop'
      });
      sliderG3.mount();
    
      var sliderG3m = new Splide( '.paragraph--type--section-video-gallery .JmasterRow6ContentSlideM .splide', {
          type: 'loop',
          isNavigation: true,
          perPage: 3,
          perMove: 1,
          breakpoints: {
              768: {
                  perPage: 5,
              },
              480: {
                  perPage: 3,
              },
          },
      });   
      sliderG3m.mount();
  }

  if ($('.paragraph--type--section-quote').length > 0) {
      $('.paragraph--type--section-quote .splide').each((i, carousel) => {
        new Splide( carousel, {
          type: 'loop',
          arrows: $(carousel).find('.splide__slide').length > 1 ? true : false,
          pagination: $(carousel).find('.splide__slide').length > 1 ? true : false,
          drag: $(carousel).find('.splide__slide').length > 1 ? true : false,
        }).mount();
      });
  }

  if ($('.paragraph--type--section-financial-highlight').length > 0) {
      $('.paragraph--type--section-financial-highlight').each((item, carousel) => {
          var sliderG5Pid = $(carousel).find('.splide').attr('id');
          var sliderG5 = new Splide( '#' + sliderG5Pid, {
              type: 'loop',
              arrows: $(carousel).find('.splide__slide').length > 1 ? true : false,
              pagination: $(carousel).find('.splide__slide').length > 1 ? true : false,
              drag: $(carousel).find('.splide__slide').length > 1 ? true : false,
          });
          sliderG5.on('mounted', function () {
              var _height = $('#' + sliderG5Pid + '-slide01 > div').outerHeight();
              $(carousel).find('.splide__list').height(_height);
          });

          sliderG5.on('move', function (newIndex, oldIndex, destIndex) {
              newIndex += 1;
              var _height = $('#' + sliderG5Pid + '-slide0' + newIndex + ' > div').outerHeight();
              $(carousel).find('.splide__list').height(_height);
          });

          sliderG5.mount();
      });
  }

  if ($('.paragraph--type--section-content-slider-3').length > 0) {
      $('.paragraph--type--section-content-slider-3 .splide').each((i, carousel) => {
        new Splide( carousel, {
          type: 'loop',
          arrows: $(carousel).find('.splide__slide').length > 1 ? true : false,
          pagination: $(carousel).find('.splide__slide').length > 1 ? true : false,
          drag: $(carousel).find('.splide__slide').length > 1 ? true : false,
        }).mount();
      });
  }

  if ($('#JgeneralSlider').length > 0) {
  var splideFooter = new Splide( '#JgeneralSlider', {
          pagination: false,
          type   : 'loop',
          autoplay: true,
          interval: 5000
      });
      splideFooter.mount();
  }


  $('.JmasterRow6LeftYT a').click(function(){
      $(this).hide();
      $('.JmasterRow6LeftYT > iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  });

  var getYoutubeId = function(youtube_url) {
    var ytid = '';
    var url = youtube_url;
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      ytid = url[2].split(/[^0-9a-z_\-]/i);
      ytid = ytid[0];
    }
    else {
      ytid = url;
    }

    return ytid;
  }

  if ($( ".JmasterRow6Container .JmasterRow6RightContainer ul li a" ).length > 0) {
      var data_ytid = getYoutubeId($( ".JmasterRow6Container .JmasterRow6RightContainer ul:first-child li:first-child a:first-child" ).data('yt'));
      var tempTYurl = 'https://www.youtube.com/embed/' + data_ytid + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0&modestbranding=1&controls=0';
      $('.JmasterRow6LeftYT iframe').attr('src',tempTYurl);
  }

  $( ".JmasterRow6Container .JmasterRow6RightContainer ul li a, .JmasterRow6Container .JmasterRow6ContentSlideM a" ).on( "click", function() {
      var data_ytid = getYoutubeId($(this).data("yt"));
      var tempTYurl = 'https://www.youtube.com/embed/' + data_ytid + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0&modestbranding=1&controls=0';
      $('.JmasterRow6LeftYT a').show();
      $('.JmasterRow6LeftYT a').css('background-image', 'url('+ $(this).data("yt-img") +')');
      $('.JmasterRow6LeftYT iframe').attr('src',tempTYurl);
  });

  var els= document.getElementsByClassName("svg-animate");
  for (var i = els.length - 1; i >= 0; i--) {
      new Vivus(els[i], {
        type: 'delayed', 
        duration: 100, 
        forceRender: false,
        pathTimingFunction: Vivus.EASE_IN,
        animTimingFunction: Vivus.EASE_OUT,
      });
  }

  /*$('.JindexRow6Mbg').click(function(){
      $(this).hide();
      $('.JindexRow6M > iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  });*/

  Drupal.behaviors.petronas = {
    attach: function(context, settings) {

      if ($('#JbopTabs').length > 0) {
          $('#JbopTabs').once('initEasyResponsiveTab').easyResponsiveTabs({
              type: 'default', //Types: default, vertical, accordion
              width: 'auto', //auto or any width like 600px
              fit: true, // 100% fit in a container
              tabidentify: 'hor_1', // The tab groups identifier
              activate: function(event) { // Callback function if tab is switched
                  var $tab = $(this);
                  var $info = $('#nested-tabInfo');
                  var $name = $('span', $info);
                  $name.text($tab.text());
                  $info.show();
              }
          });
      }

      if ($( ".paragraph-tabs" ).length > 0) {
          $( ".paragraph-tabs" ).once('initParagraphTabs').tabs({
              show: 300,
              hide: 300,
              activate: function (event, ui) {
                  AOS.refresh();
              },
              create: function( event, ui ) {
                  AOS.refresh();
              }
          });
      }

      // Re-initialize AddThis when infinite scroll is used.
      if ($('.view-display-id-block_listing_page').length > 0) {
          $(document).once('initAddThis').ajaxComplete(function(event, xhr, settings) {
              if (settings.url.indexOf('/views/ajax') > -1) {
                  addthis.layers.refresh();
              }
          });
      }

      // All inline images to be img-fluid.
      $('.paragraph img').once('addImgFluid').each((i, item) => {
          if (typeof $(item).attr('data-entity-type') !== 'undefined' && $(item).attr('data-entity-type') !== '') {
              $(item).addClass('img-fluid w-100');
          }
      });

      $(".JpressCopy").once('doCopyUrl').on('click', function(e) {
        e.preventDefault();
    		navigator.clipboard.writeText($(this).attr("data-url"));
    		alert("Copied to clipboard");
    	});
    }
  };

})(jQuery, Drupal);;
