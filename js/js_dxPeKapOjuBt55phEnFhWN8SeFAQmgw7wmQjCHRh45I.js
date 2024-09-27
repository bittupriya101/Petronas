/*!
 * GSAP 3.11.1
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=vt(t,ot))&&Ce}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function da(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=mt.length;r--&&!mt[r].targetTest(i););e=mt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Yt(t[r],e)))||t.splice(r,1);return t}function ea(t){return t._gsap||da(Ot(t))[0]._gsap}function fa(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ga(t,e){return(t=t.split(",")).forEach(e)||t}function ha(t){return Math.round(1e5*t)/1e5||0}function ia(t){return Math.round(1e7*t)/1e7||0}function ja(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function ka(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function la(){var t,e,r=ft.length,i=ft.slice(0);for(ct={},t=ft.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ma(t,e,r,i){ft.length&&la(),t.render(e,r,i||I),ft.length&&la()}function na(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function oa(t){return t}function pa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function sa(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?sa(t[r]||(t[r]={}),e[r]):e[r]);return t}function ta(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function ua(t){var e=t.parent||B,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(K(t.keyframes)):pa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function wa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function xa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function ya(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function za(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ba(t,e,r,i){return t._startAt&&(I?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Da(t){return t._repeat?yt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Fa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ga(t){return t._end=ia(t._start+(t._tDur/Math.abs(t._ts||t._rts||q)||0))}function Ha(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ia(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ga(t),r._dirty||za(r,t)),t}function Ia(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=Fa(t.rawTime(),e),(!e._dur||xt(0,e.totalDuration(),r)-e._tTime>q)&&e.render(r,!0)),za(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-q}}function Ja(e,r,i,n){return r.parent&&ya(r),r._start=ia((t(i)?i:i||e!==B?wt(e,i,r):e._time)+r._delay),r._end=ia(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),wa(e,r,"_first","_last",e._sort?"_start":0),Tt(r)||(e._recent=r),n||Ia(e,r),e._ts<0&&Ha(e,e._tTime),e}function Ka(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function La(t,e,r,i){return jt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==zt.frame?(ft.push(t),t._lazy=[e,i],1):void 0:1}function Qa(t,e,r,i){var n=t._repeat,a=ia(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ia(a*(n+1)+t._rDelay*n):a,0<s&&!i?Ha(t,t._tTime=t._tDur*s):t.parent&&Ga(t),r||za(t.parent,t),t}function Ra(t){return t instanceof Qt?za(t):Qa(t,t._dur)}function Ua(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new $t(r[0],u,r[1+o])}function Va(t,e){return t||0===t?e(t):e}function Xa(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function $a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function bb(r){return r=Ot(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Ot(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function cb(t){return t.sort(function(){return.5-Math.random()})}function db(t){if(s(t))return t;var p=v(t)?t:{each:t},_=Lt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,c=(r||p).length,d=y[c];if(!d){if(!(f="auto"===p.grid?0:(p.grid||[1,N])[1])){for(h=-N;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(d=y[c]=[],i=T?Math.min(f,c)*w-.5:m%f,n=f===N?0:T?c*x/f-.5:m/f|0,l=N,u=h=0;u<c;u++)a=u%f-i,s=n-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):H(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&cb(d),d.max=h-l,d.min=l,d.v=c=(parseFloat(p.amount)||parseFloat(p.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),d.b=c<0?g-c:g,d.u=Xa(p.amount||p.each)||0,_=_&&c<0?Bt(_):_}return c=(d[t]-d.min)/d.max||0,ia(d.b+(_?_(c):c)*d.v)+d.u}}function eb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ia(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Xa(e))}}function fb(h,e){var l,f,r=K(h);return!r&&v(h)&&(l=r=h.radius||N,h.values?(h=Ot(h.values),(f=!t(h[0]))&&(l*=l)):h=eb(h.increment)),Va(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=N,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Xa(e)}:eb(h))}function gb(t,e,r,i){return Va(K(t)?!e:!0===r?!!(r=0):!i,function(){return K(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function kb(e,r,t){return Va(t,function(t){return e[~~r(t)]})}function nb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+gb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function qb(t,e,r){var i,n,a,s=t.labels,o=N;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function sb(t){return ya(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Pt(t,"onInterrupt"),t}function xb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Ct+.5|0}function yb(e,r,i){var n,a,s,o,u,h,l,f,c,d,p=e?t(e)?[e>>16,e>>8&Ct,e&Ct]:0:St.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),St[e])p=St[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&Ct,p&Ct,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&Ct,e&Ct]}else if("hsl"===e.substr(0,3))if(p=d=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=xb(o+1/3,n,a),p[1]=xb(o,n,a),p[2]=xb(o-1/3,n,a);else p=e.match(tt)||St.transparent;p=p.map(Number)}return r&&!d&&(n=p[0]/Ct,a=p[1]/Ct,s=p[2]/Ct,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(c=l-f,u=.5<h?c/(2-l-f):c/(l+f),o=l===n?(a-s)/c+(a<s?6:0):l===a?(s-n)/c+2:(n-a)/c+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function zb(t){var r=[],i=[],n=-1;return t.split(At).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Ab(t,e,r){var i,n,a,s,o="",u=(t+o).match(At),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=yb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=zb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(At,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(At)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Db(t){var e,r=t.join(" ");if(At.lastIndex=0,At.test(r))return e=Dt.test(r),t[1]=Ab(t[1],e),t[0]=Ab(t[0],e,zb(t[1])),!0}function Mb(t){var e=(t+"").split("("),r=Et[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(It,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(na)):Et._CE&&Ft.test(t)?Et._CE("",t):r}function Ob(t,e){for(var r,i=t._first;i;)i instanceof Qt?Ob(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Ob(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Qb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ga(t,function(t){for(var e in Et[t]=ot[t]=a,Et[n=t.toLowerCase()]=r,a)Et[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Et[t+"."+e]=a[e]}),a}function Rb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Sb(r,t,e){function Fm(t){return 1===t?1:i*Math.pow(2,-10*t)*W((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/j*(Math.asin(1/i)||0),s="out"===r?Fm:"in"===r?function(t){return 1-Fm(1-t)}:Rb(Fm);return n=j/n,s.config=function(t,e){return Sb(r,t,e)},s}function Tb(e,r){function Nm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Nm:"in"===e?function(t){return 1-Nm(1-t)}:Rb(Nm);return t.config=function(t){return Tb(e,t)},t}var F,I,l,B,h,n,a,i,o,f,c,d,p,_,m,g,b,M,O,k,C,A,D,z,E,L,X,Y,V={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},U={duration:.5,overwrite:!1,delay:0},N=1e8,q=1/N,j=2*Math.PI,G=j/4,J=0,H=Math.sqrt,$=Math.cos,W=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},K=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0},ht={suppressEvents:!0},lt={},ft=[],ct={},dt={},pt={},_t=30,mt=[],gt="",vt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},yt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},Tt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},bt={_start:0,endTime:T,totalDuration:T},wt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||bt,h=t.duration()>=N?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(K(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},xt=function _clamp(t,e,r){return r<t?t:e<r?e:r},Mt=[].slice,Ot=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Rt()?K(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||$a(t,1)?i.push.apply(i,Ot(t)):i.push(t)})||i}(t,i):$a(t)?Mt.call(t,0):t?[t]:[]:Mt.call((e||a).querySelectorAll(t),0)},kt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Va(n,function(t){return r+((t-e)/a*s||0)})},Pt=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&ft.length&&la(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},Ct=255,St={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},At=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in St)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\(/,zt=(O=Date.now,k=500,C=33,A=O(),D=A,E=z=1e3/240,g={time:0,frame:0,tick:function tick(){ul(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=Ce,(h.gsapVersions||(h.gsapVersions=[])).push(Ce.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame),p&&g.sleep(),_=m||function(t){return setTimeout(t,E-1e3*g.time+1|0)},d=1,ul(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),d=0,_=T},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){z=1e3/(t||240),E=1e3*g.time+z},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),L[e?"unshift":"push"](a),Rt(),a},remove:function remove(t,e){~(e=L.indexOf(t))&&L.splice(e,1)&&e<=M&&M--},_listeners:L=[]}),Rt=function _wake(){return!d&&zt.wake()},Et={},Ft=/^[\d.\-M][\d.\-,\s]/,It=/["']/g,Bt=function _invertEase(e){return function(t){return 1-e(1-t)}},Lt=function _parseEase(t,e){return t&&(s(t)?t:Et[t]||Mb(t))||e};function ul(t){var e,r,i,n,a=O()-D,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(D+=a)-A)-E)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,E+=e+(z<=e?4:z-e),r=1),s||(p=_(ul)),r)for(M=0;M<L.length;M++)L[M](i,b,n,t)}function cn(t){return t<Y?X*t*t:t<.7272727272727273?X*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?X*(t-=2.25/2.75)*t+.9375:X*Math.pow(t-2.625/2.75,2)+.984375}ga("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Qb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Et.Linear.easeNone=Et.none=Et.Linear.easeIn,Qb("Elastic",Sb("in"),Sb("out"),Sb()),X=7.5625,Y=1/2.75,Qb("Bounce",function(t){return 1-cn(1-t)},cn),Qb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Qb("Circ",function(t){return-(H(1-t*t)-1)}),Qb("Sine",function(t){return 1===t?1:1-$(t*G)}),Qb("Back",Tb("in"),Tb("out"),Tb()),Et.SteppedEase=Et.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*xt(0,.99999999,t)|0)+n)*r}}},U.ease=Et["quad.out"],ga("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return gt+=t+","+t+"Params,"});var Xt,Yt=function GSCache(t,e){this.id=J++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:fa,this.set=e?e.getSetter:ee},Vt=((Xt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Xt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Xt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Qa(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Xt.totalTime=function totalTime(t,e){if(Rt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ha(this,t),!r._dp||r.parent||Ia(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ja(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===q||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ma(this,t,e)),this},Xt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Da(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Xt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Xt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Da(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Xt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?yt(this._tTime,r)+1:1},Xt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-q?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Fa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-q?0:this._rts,this.totalTime(xt(-this._delay,this._tDur,e),!0),Ga(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},Xt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==q&&(this._tTime-=q)))),this):this._ps},Xt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ja(e,this,t-this._delay),this}return this._start},Xt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},Xt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fa(e.rawTime(t),this):this._tTime:this._tTime},Xt.revert=function revert(t){void 0===t&&(t=ht);var e=I;return I=t,this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents),"nested"!==this.data&&ya(this),I=e,this},Xt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this.vars.immediateRender?-1:r},Xt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ra(this)):-2===this._repeat?1/0:this._repeat},Xt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Ra(this),e?this.time(e):this}return this._rDelay},Xt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Xt.seek=function seek(t,e){return this.totalTime(wt(this,t),w(e))},Xt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},Xt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Xt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Xt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Xt.resume=function resume(){return this.paused(!1)},Xt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-q:0)),this):this._rts<0},Xt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-q,this},Xt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-q))},Xt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Xt.then=function then(t){var i=this;return new Promise(function(e){function xo(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:oa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?xo():i._prom=xo})},Xt.kill=function kill(){sb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qa(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),d||zt.wake()}pa(Vt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-q,_prom:0,_ps:!1,_rts:1});var Qt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),B&&Ja(t.parent||B,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Ka(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Ua(0,arguments,this),this},e.from=function from(t,e,r){return Ua(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Ua(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,ua(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new $t(t,e,wt(this,r),1),this},e.call=function call(t,e,r){return Ja(this,$t.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new $t(t,r,wt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,ua(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,ua(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ia(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==B&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(d=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ia(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),c=yt(this._tTime,o),!_&&this._tTime&&c!==s&&(c=s),d&&1&s&&(i=g-i,p=1),s!==c&&!this._lock){var T=d&&1&c,b=T===(d&&1&s);if(s<c&&(T=!T),_=T?0:g,this._lock=1,this.render(_||(p?0:ia(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Pt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Ob(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ia(_),ia(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Pt(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-q);break}}n=a}else{r=r||I,n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-q:q);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-q)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ga(this),this.render(t,e,r);this._onUpdate&&!e&&Pt(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||ya(this,1),e||t<0&&!_||!v&&!_&&m||(Pt(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=wt(this,i,e)),!(e instanceof Vt)){if(K(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=$t.delayedCall(0,e)}return this!==e?Ja(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-N);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof $t?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(xa(this,t),t===this._recent&&(this._recent=this._last),za(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ia(zt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=wt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=$t.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ja(this,i,wt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=wt(this,t);e;)e._start===t&&"isPause"===e.data&&ya(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Ut!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Ot(e),s=this._first,o=t(r);s;)s instanceof $t?ka(s._targets,a)&&(o?(!Ut||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=wt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=$t.to(i,pa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||q,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Qa(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,pa({startAt:{time:wt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),qb(this,wt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),qb(this,wt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+q)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return za(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),za(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=N;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ja(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Qa(a,a===B&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(B._ts&&(ma(B,Fa(t,B)),f=zt.frame),zt.frame>=_t){_t+=V.autoSleep||120;var e=B._first;if((!e||!e._ts)&&V.autoSleep&&zt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||zt.sleep()}}},Timeline}(Vt);pa(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});function $b(t,e,i,n,a,o){var u,h,l,f;if(dt[t]&&!1!==(u=new dt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Gt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||K(t)||Z(t))return r(t)?Gt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Gt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new me(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==c))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function ec(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(K(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Ut,Nt,qt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var c,d=t[e],p="get"!==i?i:s(d)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=s(d)?l?Kt:Zt:Wt;if(r(n)&&(~n.indexOf("random(")&&(n=nb(n)),"="===n.charAt(1)&&(!(c=ja(p,n)+(Xa(p)||0))&&0!==c||(n=c))),!f||p!==n||Nt)return isNaN(p*n)||""===n?(d||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,c,d,p,_=new me(this._pt,t,e,0,1,oe,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(d=~(i+="").indexOf("random("))&&(i=nb(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?ja(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||d)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||V.stringFilter,l)):(c=new me(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof d?ne:re,0,_),l&&(c.fp=l),u&&c.modifier(u,this,t),this._pt=c)},jt=function _initTween(t,e){var r,i,n,a,s,o,u,h,l,f,c,d,p,_=t.vars,m=_.ease,g=_.startAt,v=_.immediateRender,y=_.lazy,T=_.onUpdate,b=_.onUpdateParams,x=_.callbackScope,M=_.runBackwards,O=_.yoyoEase,k=_.keyframes,P=_.autoRevert,C=t._dur,S=t._startAt,A=t._targets,D=t.parent,z=D&&"nested"===D.data?D.vars.targets:A,R="auto"===t._overwrite&&!F,E=t.timeline;if(!E||k&&m||(m="none"),t._ease=Lt(m,U.ease),t._yEase=O?Bt(Lt(!0===O?m:O,U.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!E&&!!_.runBackwards,!E||k&&!_.stagger){if(d=(h=A[0]?ea(A[0]).harness:0)&&_[h.prop],r=ta(_,lt),S&&(e<0&&M&&v&&!P?S.render(-1,!0):S.revert(M&&C?ht:ut),S._lazy=0),g){if(ya(t._startAt=$t.set(A,pa({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:w(y),startAt:null,delay:0,onUpdate:T,onUpdateParams:b,callbackScope:x,stagger:0},g))),e<0&&(I||!v&&!P)&&t._startAt.revert(ht),v&&C&&e<=0)return void(e&&(t._zTime=e))}else if(M&&C&&!S)if(e&&(v=!1),n=pa({overwrite:!1,data:"isFromStart",lazy:v&&w(y),immediateRender:v,stagger:0,parent:D},r),d&&(n[h.prop]=d),ya(t._startAt=$t.set(A,n)),e<0&&(I?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,v){if(!e)return}else _initTween(t._startAt,q);for(t._pt=t._ptCache=0,y=C&&w(y)||y&&!C,i=0;i<A.length;i++){if(u=(s=A[i])._gsap||da(A)[i]._gsap,t._ptLookup[i]=f={},ct[u.id]&&ft.length&&la(),c=z===A?i:z.indexOf(s),h&&!1!==(l=new h).init(s,d||r,t,c,z)&&(t._pt=a=new me(t._pt,s,l.name,0,1,l.render,l,0,l.priority),l._props.forEach(function(t){f[t]=a}),l.priority&&(o=1)),!h||d)for(n in r)dt[n]&&(l=$b(n,r,t,c,s,z))?l.priority&&(o=1):f[n]=a=qt.call(t,s,n,"get",r[n],c,z,0,_.stringFilter);t._op&&t._op[i]&&t.kill(s,t._op[i]),R&&t._pt&&(Ut=t,B.killTweensOf(s,f,t.globalTime(e)),p=!t.parent,Ut=0),t._pt&&y&&(ct[u.id]=1)}o&&_e(t),t._onInit&&t._onInit(t)}t._onUpdate=T,t._initted=(!t._op||t._pt)&&!p,k&&e<=0&&E.render(N,!0,!0)},Gt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?nb(t):t},Jt=gt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ga(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var $t=function(E){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,c,d,p=(a=E.call(this,n?r:ua(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,M=p.defaults,O=p.scrollTrigger,k=p.yoyoEase,P=r.parent||B,C=(K(e)||Z(e)?t(e[0]):"length"in r)?[e]:Ot(e);if(a._targets=C.length?da(C):R("GSAP target "+e+" not found. https://greensock.com",!V.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Qt({data:"nested",defaults:M||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,c=T&&db(T),v(T))for(l in T)~Jt.indexOf(l)&&((d=d||{})[l]=T[l]);for(o=0;o<h;o++)(u=ta(r,Ht)).stagger=0,k&&(u.yoyoEase=k),d&&vt(u,d),f=C[o],u.duration=+Gt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Gt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,c?c(o,f,C):0),s._ease=Et.none;s.duration()?_=m=0:a.timeline=0}else if(x){ua(pa(s.vars.defaults,{ease:"none"})),s._ease=Lt(x.ease||r.ease||"none");var S,A,D,z=0;if(K(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||ec(l,x[l],u,x.easeEach);for(l in u)for(S=u[l].sort(function(t,e){return t.t-e.t}),o=z=0;o<S.length;o++)(D={ease:(A=S[o]).e,duration:(A.t-(o?S[o-1].t:0))/100*_})[l]=A.v,s.to(C,D,z),z+=D.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||F||(Ut=_assertThisInitialized(a),B.killTweensOf(C),Ut=0),Ja(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ia(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-q,a.render(Math.max(0,-m))),O&&Ka(_assertThisInitialized(a),O),a}_inheritsLoose(Tween,E);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c=this._time,d=this._tDur,p=this._dur,_=t<0,m=d-q<t&&!_?d:t<q?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ia(m%s),m===d?(a=this._repeat,i=p):((a=~~(m/s))&&a===m/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=yt(this._tTime,s),i===c&&!r&&this._initted)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Ob(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ia(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(La(this,_?t:i,r,e))return this._tTime=0,this;if(c!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&(Pt(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-q:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ba(this,t,0,r),Pt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Pt(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ba(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||ya(this,1),e||_&&!c||!m&&!c||(Pt(this,m===d?"onComplete":"onReverseComplete",!0),!this._prom||m<d&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!Tt(t))||(t._ts<0||t._dp._ts<0)&&!Tt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=xt(0,t._tDur,e),a=yt(l,h),t._yoyo&&1&a&&(u=1-u),a!==yt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||I||i||t._zTime===q||!e&&t._zTime){if(!t._initted&&La(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?q:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ba(t,e,0,!0),t._onUpdate&&!r&&Pt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Pt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&ya(t,1),r||I||(Pt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),E.prototype.invalidate.call(this)},e.resetTo=function resetTo(t,e,r,i){d||zt.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||jt(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return Nt=1,t.vars[e]="+=0",jt(t,s),Nt=0,1;f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,u.e&&(u.e=ha(r)+Xa(u.e)),u.b&&(u.b=o.s+Xa(u.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ha(this,0),this.parent||wa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?sb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Ut&&!0!==Ut.vars.overwrite)._first||sb(this),this.parent&&i!==this.timeline.totalDuration()&&Qa(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,c=t?Ot(t):f,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,c))return"all"===e&&(this._pt=0),sb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ga(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?ea(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=vt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~c.indexOf(f[l]))for(u in a=d[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||xa(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&sb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Ua(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Ua(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return B.killTweensOf(t,e,r)},Tween}(Vt);pa($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ga("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var t=new Qt,e=Mt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function mc(t,e,r){return t.setAttribute(e,r)}function uc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Wt=function _setterPlain(t,e,r){return t[e]=r},Zt=function _setterFunc(t,e,r){return t[e](r)},Kt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ee=function _getSetter(t,e){return s(t[e])?Zt:u(t[e])&&t.setAttribute?mc:Wt},re=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},ne=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},oe=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},ce=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},de=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},pe=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?xa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},_e=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},me=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=uc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||re,this.d=s||this,this.set=o||Wt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ga(gt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return lt[t]=1}),ot.TweenMax=ot.TweenLite=$t,ot.TimelineLite=ot.TimelineMax=Qt,B=new Qt({sortChildren:!1,defaults:U,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),V.stringFilter=Db;function Bc(t){return(Te[t]||we).map(function(t){return t()})}function Cc(){var t=Date.now(),o=[];2<t-xe&&(Bc("matchMediaInit"),ye.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Bc("matchMediaRevert"),o.forEach(function(t){return t.onMatch(t)}),xe=t,Bc("matchMedia"))}var ve,ye=[],Te={},we=[],xe=0,Me=((ve=Context.prototype).add=function add(t,i,n){function xw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=bb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=xw,t===s?xw(a):t?a[t]=xw:xw},ve.ignore=function ignore(t){var e=l;l=null,t(this),l=e},ve.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof $t&&e.push(t)}),e},ve.clear=function clear(){this._r.length=this.data.length=0},ve.kill=function kill(e,t){var r=this;if(e?(this.getTweens().map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1}).forEach(function(t){return t.t.revert(e)}),this.data.forEach(function(t){return!(t instanceof Vt)&&t.revert&&t.revert(e)}),this._r.forEach(function(t){return t(e,r)}),this.isReverted=!0):this.data.forEach(function(t){return t.kill&&t.kill()}),this.clear(),t){var i=ye.indexOf(this);~i&&ye.splice(i,1)}},ve.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&bb(e),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var Oe,ke=((Oe=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Me(0,r||this.scope),o=s.conditions={};for(n in this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ye.indexOf(s)<0&&ye.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Cc):i.addEventListener("change",Cc));return a&&e(s),this},Oe.revert=function revert(t){this.kill(t||{})},Oe.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Pe={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:ce,add:qt,kill:pe,modifier:de,rawVars:0},a={targetTest:0,get:0,getSetter:ee,aliases:{},register:0};if(Rt(),t!==i){if(dt[e])return;pa(i,pa(ta(t,n),a)),vt(i.prototype,vt(n,ta(t,a))),dt[i.prop=e]=i,t.targetTest&&(mt.push(i),lt[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(Ce,i,me)}(t)})},timeline:function timeline(t){return new Qt(t)},getTweensOf:function getTweensOf(t,e){return B.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Ot(i)[0]);var a=ea(i||{}).get,s=e?oa:na;return"native"===e&&(e=""),i?t?s((dt[t]&&dt[t].get||a)(i,t,e,n)):function(t,e,r){return s((dt[t]&&dt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Ot(r)).length){var n=r.map(function(t){return Ce.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=dt[e],o=ea(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&ce(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function Mx(t,e,r){return n.resetTo(i,t,e,r)}var r,n=Ce.to(t,vt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return Mx.tween=n,Mx},isTweening:function isTweening(t){return 0<B.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Lt(t.ease,U.ease)),sa(U,t||{})},config:function config(t){return sa(V,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!dt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),pt[i]=function(t,e,r){return n(Ot(t),pa(e||{},a),r)},r&&(Qt.prototype[i]=function(t,e,r){return this.add(pt[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Et[t]=Lt(e)},parseEase:function parseEase(t,e){return arguments.length?Lt(t,e):Et},getById:function getById(t){return B.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Qt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),B.remove(n),n._dp=0,n._time=n._tTime=B._time,r=B._first;r;)i=r._next,!e&&!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]||Ja(n,r,r._start-r._delay),r=i;return Ja(B,n,0),n},context:function context(t,e){return t?new Me(t,e):l},matchMedia:function matchMedia(t){return new ke(t)},matchMediaRefresh:function matchMediaRefresh(){return ye.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Cc()},addEventListener:function addEventListener(t,e){var r=Te[t]||(Te[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=Te[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return K(e)?kb(e,wrap(0,e.length),t):Va(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return K(e)?kb(e,wrapYoyo(0,e.length-1),t):Va(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:db,random:gb,snap:fb,normalize:function normalize(t,e,r){return kt(t,e,0,1,r)},getUnit:Xa,clamp:function clamp(e,r,t){return Va(t,function(t){return xt(e,r,t)})},splitColor:yb,toArray:Ot,selector:bb,mapRange:kt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Xa(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),c={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(K(e)&&!K(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=vt(K(e)?[]:{},e));if(!u){for(s in i)qt.call(c,e,s,"get",i[s]);a=function func(t){return ce(t,c)||(f?e.p:e)}}}return Va(t,a)},shuffle:cb},install:P,effects:pt,ticker:zt,updateRoot:Qt.updateRoot,plugins:dt,globalTimeline:B,core:{PropTween:me,globals:S,Tween:$t,Timeline:Qt,Animation:Vt,getCache:ea,_removeLinkedListItem:xa,reverting:function reverting(){return I},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return F=t}}};ga("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Pe[t]=$t[t]}),zt.add(Qt.updateRoot),c=Pe.to({},{duration:0});function Gc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Ic(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ga(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Gc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var Ce=Pe.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)I?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Ic("roundProps",eb),Ic("modifiers"),Ic("snap",fb))||Pe;$t.version=Qt.version=Ce.version="3.11.1",o=1,x()&&Rt();function sd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function td(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ud(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function vd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function wd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function xd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function yd(t,e,r){return t.style[e]=r}function zd(t,e,r){return t.style.setProperty(e,r)}function Ad(t,e,r){return t._gsap[e]=r}function Bd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Cd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Dd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Gd(t){var e=this,r=this.target,i=r.style;if(t in er){if(this.tfm=this.tfm||{},"transform"!==t&&(~(t=ur[t]||t).indexOf(",")?t.split(",").forEach(function(t){return e.tfm[t]=_r(r,t)}):this.tfm[t]=r._gsap.x?r._gsap[t]:_r(r,t)),0<=this.props.indexOf(hr))return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(lr,"")),t=hr}i&&this.props.push(t,i[t])}function Hd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Id(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=2)r[t+1]?n[r[t]]=r[t+1]:n.removeProperty(r[t].replace(ar,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),!(t=Fe())||t.isStart||n[hr]||(Hd(n),a.uncache=1)}}function Jd(t,e){var r={target:t,props:[],revert:Id,save:Gd};return e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Ld(t,e){var r=Ae.createElementNS?Ae.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ae.createElement(t);return r.style?r:Ae.createElement(t)}function Md(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ar,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Md(t,cr(e)||e,1)||""}function Pd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Se=window,Ae=Se.document,De=Ae.documentElement,Re=Ld("div")||{style:{}},Ld("div"),hr=cr(hr),lr=hr+"Origin",Re.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ie=!!cr("perspective"),Fe=Ce.core.reverting,ze=1)}function Qd(t){var e,r=Ld("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(De.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Qd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),De.removeChild(r),this.style.cssText=a,e}function Rd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Sd(e){var r;try{r=e.getBBox()}catch(t){r=Qd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Qd||(r=Qd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Rd(e,["x","cx","x1"])||0,y:+Rd(e,["y","cy","y1"])||0,width:0,height:0}}function Td(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Sd(t))}function Ud(t,e){if(e){var r=t.style;e in er&&e!==lr&&(e=hr),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(ar,"-$1").toLowerCase())):r.removeAttribute(e)}}function Vd(t,e,r,i,n,a){var s=new me(t._pt,e,r,0,1,a?xd:wd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function Yd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Re.style,f=sr.test(e),c="svg"===t.tagName.toLowerCase(),d=(c?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||dr[i]||dr[h]?u:("px"===h||p||(u=Yd(t,e,r,"px")),o=t.getCTM&&Td(t),!_&&"%"!==h||!er[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==Ae&&a.appendChild||(a=Ae.body),(s=a._gsap)&&_&&s.width&&f&&s.time===zt.time&&!s.uncache?ha(u/s.width*100):(!_&&"%"!==h||pr[Md(a,"display")]||(l.position=Md(t,"position")),a===t&&(l.position="static"),a.appendChild(Re),n=Re[d],a.removeChild(Re),l.position="absolute",f&&_&&((s=ea(a)).time=zt.time,s.width=a[d]),ha(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[d],ha(_?u/n*100:u/100*n)))}function $d(t,e,r,i){if(!r||"none"===r){var n=cr(e,t,1),a=n&&Md(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Md(t,"borderTopColor"))}var s,o,u,h,l,f,c,d,p,_,m,g=new me(this._pt,t.style,e,0,1,oe),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=Md(t,e)||i,t.style[e]=r),Db(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)c=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),c!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===c.charAt(1)&&(c=ja(h,c)+m),d=parseFloat(c),_=c.substr((d+"").length),v=rt.lastIndex-_.length,_||(_=_||V.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=Yd(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:d-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?xd:wd;return nt.test(i)&&(g.e=0),this._pt=g}function ae(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=mr[r]||r,e[1]=mr[i]||i,e.join(" ")}function be(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],er[r]&&(i=1,r="transformOrigin"===r?lr:hr),Ud(a,r);i&&(Ud(a,hr),u&&(u.svg&&a.removeAttribute("transform"),Tr(a,1),u.uncache=1,Hd(s)))}}function fe(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function ge(t){var e=Md(t,hr);return fe(e)?vr:e.substr(7).match(et).map(ha)}function he(t,e){var r,i,n,a,s=t._gsap||ea(t),o=t.style,u=ge(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?vr:u:(u!==vr||t.offsetParent||t===De||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,De.appendChild(t)),u=ge(t),n?o.display=n:Ud(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):De.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function ie(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||he(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,d=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==vr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Sd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-c,h.xOffset=d+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[lr]="0px 0px",a&&(Vd(a,h,"xOrigin",f,w),Vd(a,h,"yOrigin",c,x),Vd(a,h,"xOffset",d,h.xOffset),Vd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function le(t,e,r){var i=Xa(e);return ha(parseFloat(e)+parseFloat(Yd(t,"x",r+"px",i)))+i}function se(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?rr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new me(t._pt,e,i,n,l,td),o.e=f,o.u="deg",t._props.push(i),o}function te(t,e){for(var r in e)t[r]=e[r];return t}function ue(t,e,r){var i,n,a,s,o,u,h,l=te({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[hr]=e,i=Tr(r,1),Ud(r,hr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[hr],f[hr]=e,i=Tr(r,1),f[hr]=a),er)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Xa(a)!==(h=Xa(s))?Yd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new me(t._pt,i,n,o,u-o,sd),t._pt.u=h||0,t._props.push(n));te(i,l)}var Se,Ae,De,ze,Re,Ee,Fe,Ie,Be=Et.Power0,Le=Et.Power1,Xe=Et.Power2,Ye=Et.Power3,Ve=Et.Power4,Qe=Et.Linear,Ue=Et.Quad,Ne=Et.Cubic,qe=Et.Quart,je=Et.Quint,Ge=Et.Strong,Je=Et.Elastic,He=Et.Back,$e=Et.SteppedEase,We=Et.Bounce,Ze=Et.Sine,Ke=Et.Expo,tr=Et.Circ,er={},rr=180/Math.PI,ir=Math.PI/180,nr=Math.atan2,ar=/([A-Z])/g,sr=/(left|right|width|margin|padding|x)/i,or=/[\s,\(]\S/,ur={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hr="transform",lr=hr+"Origin",fr="O,Moz,ms,Ms,Webkit".split(","),cr=function _checkPropPrefix(t,e,r){var i=(e||Re).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(fr[n]+t in i););return n<0?null:(3===n?"ms":0<=n?fr[n]:"")+t},dr={deg:1,rad:1,turn:1},pr={grid:1,flex:1},_r=function _get(t,e,r,i){var n;return ze||Pd(),e in ur&&"transform"!==e&&~(e=ur[e]).indexOf(",")&&(e=e.split(",")[0]),er[e]&&"transform"!==e?(n=Tr(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:br(Md(t,lr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=gr[e]&&gr[e](t,e,r)||Md(t,e)||fa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?Yd(t,e,n,r)+r:n},mr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gr={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new me(t._pt,e,r,0,0,be);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},vr=[1,0,0,1,0,0],yr={},Tr=function _parseTransform(t,e){var r=t._gsap||new Yt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w,x,M,O,k,P,C,S,A,D,z,R,E,F=t.style,I=r.scaleX<0,B="deg",L=getComputedStyle(t),X=Md(t,lr)||"0";return i=n=a=u=h=l=f=c=d=0,s=o=1,r.svg=!(!t.getCTM||!Td(t)),L.translate&&("none"===L.translate&&"none"===L.scale&&"none"===L.rotate||(F[hr]=("none"!==L.translate?"translate3d("+(L.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==L.rotate?"rotate("+L.rotate+") ":"")+("none"!==L.scale?"scale("+L.scale.split(" ").join(",")+") ":"")+L[hr]),F.scale=F.rotate=F.translate="none"),m=he(t,r.svg),r.svg&&(k=r.uncache?(P=t.getBBox(),X=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),ie(t,k||X,!!k||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==vr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=M=m[4],n=O=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?nr(b,T)*rr:0,(f=w||x?nr(w,x)*rr+u:0)&&(o*=Math.abs(Math.cos(f*ir))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(E=m[6],z=m[7],S=m[8],A=m[9],D=m[10],R=m[11],i=m[12],n=m[13],a=m[14],h=(g=nr(E,D))*rr,g&&(k=M*(v=Math.cos(-g))+S*(y=Math.sin(-g)),P=O*v+A*y,C=E*v+D*y,S=M*-y+S*v,A=O*-y+A*v,D=E*-y+D*v,R=z*-y+R*v,M=k,O=P,E=C),l=(g=nr(-w,D))*rr,g&&(v=Math.cos(-g),R=x*(y=Math.sin(-g))+R*v,T=k=T*v-S*y,b=P=b*v-A*y,w=C=w*v-D*y),u=(g=nr(b,T))*rr,g&&(k=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=M*v+O*y,b=b*v-T*y,O=O*v-M*y,T=k,M=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ha(Math.sqrt(T*T+b*b+w*w)),o=ha(Math.sqrt(O*O+E*E)),g=nr(M,O),f=2e-4<Math.abs(g)?g*rr:0,d=R?1/(R<0?-R:R):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!fe(Md(t,hr)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ha(s),r.scaleY=ha(o),r.rotation=ha(u)+B,r.rotationX=ha(h)+B,r.rotationY=ha(l)+B,r.skewX=f+B,r.skewY=c+B,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(X.split(" ")[2])||0)&&(F[lr]=br(X)),r.xOffset=r.yOffset=0,r.force3D=V.force3D,r.renderTransform=r.svg?Pr:Ie?kr:wr,r.uncache=0,r},br=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},wr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,kr(t,e)},xr="0deg",Mr="0px",Or=") ",kr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==xr||h!==xr)){var b,w=parseFloat(h)*ir,x=Math.sin(w),M=Math.cos(w);w=parseFloat(l)*ir,b=Math.cos(w),a=le(g,a,x*b*-v),s=le(g,s,-Math.sin(w)*-v),o=le(g,o,M*b*-v+v)}_!==Mr&&(y+="perspective("+_+Or),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Mr&&s===Mr&&o===Mr||(y+=o!==Mr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Or),u!==xr&&(y+="rotate("+u+Or),h!==xr&&(y+="rotateY("+h+Or),l!==xr&&(y+="rotateX("+l+Or),f===xr&&c===xr||(y+="skew("+f+", "+c+Or),1===d&&1===p||(y+="scale("+d+", "+p+Or),g.style[hr]=y||"translate(0, 0)"},Pr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,d=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),M=parseFloat(f);c=parseFloat(c),d=parseFloat(d),(p=parseFloat(p))&&(d+=p=parseFloat(p),c+=p),c||d?(c*=ir,d*=ir,r=Math.cos(c)*_,i=Math.sin(c)*_,n=Math.sin(c-d)*-m,a=Math.cos(c-d)*m,d&&(p*=ir,s=Math.tan(d-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ha(r),i=ha(i),n=ha(n),a=ha(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||M&&!~(f+"").indexOf("px"))&&(x=Yd(g,"x",l,"px"),M=Yd(g,"y",f,"px")),(v||y||T||b)&&(x=ha(x+v-(v*r+y*n)+T),M=ha(M+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ha(x+u/100*s.width),M=ha(M+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+M+")",g.setAttribute("transform",s),w&&(g.style[hr]=s)};ga("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});gr[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return _r(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Cr,Sr,Ar,Dr={name:"css",register:Pd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w=this._props,x=t.style,M=i.vars.startAt;for(c in ze||Pd(),this.styles=this.styles||Jd(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(o=e[c],!dt[c]||!$b(c,e,i,n,t,a)))if(l=typeof o,f=gr[c],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=nb(o)),f)f(this,t,c,o,i)&&(T=1);else if("--"===c.substr(0,2))s=(getComputedStyle(t).getPropertyValue(c)+"").trim(),o+="",At.lastIndex=0,At.test(s)||(d=Xa(s),p=Xa(o)),p?d!==p&&(s=Yd(t,c,s,p)+p):d&&(o+=d),this.add(x,"setProperty",s,o,n,a,0,0,c),w.push(c),b.push(c,x[c]);else if("undefined"!==l){if(M&&c in M?(s="function"==typeof M[c]?M[c].call(i,n,t,a):M[c],r(s)&&~s.indexOf("random(")&&(s=nb(s)),Xa(s+"")||(s+=V.units[c]||Xa(_r(t,c))||""),"="===(s+"").charAt(1)&&(s=_r(t,c))):s=_r(t,c),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),c in ur&&("autoAlpha"===c&&(1===h&&"hidden"===_r(t,"visibility")&&u&&(h=0),b.push("visibility",x.visibility),Vd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==c&&"transform"!==c&&~(c=ur[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in er)if(this.styles.save(c),g||((v=t._gsap).renderTransform&&!e.parseTransform||Tr(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new me(this._pt,x,hr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===c)this._pt=new me(this._pt,v,"scaleY",v.scaleY,(_?ja(v.scaleY,_+u):u)-v.scaleY||0,sd),this._pt.u=0,w.push("scaleY",c),c+="X";else{if("transformOrigin"===c){b.push(lr,x[lr]),o=ae(o),v.svg?ie(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Vd(this,v,"zOrigin",v.zOrigin,p),Vd(this,x,c,br(s),br(o)));continue}if("svgOrigin"===c){ie(t,o,1,y,0,this);continue}if(c in yr){se(this,v,c,h,_?ja(h,_+o):o);continue}if("smoothOrigin"===c){Vd(this,v,"smooth",v.smooth,o);continue}if("force3D"===c){v[c]=o;continue}if("transform"===c){ue(this,o,t);continue}}else c in x||(c=cr(c)||c);if(m||(u||0===u)&&(h||0===h)&&!or.test(o)&&c in x)u=u||0,(d=(s+"").substr((h+"").length))!==(p=Xa(o)||(c in V.units?V.units[c]:d))&&(h=Yd(t,c,s,p)),this._pt=new me(this._pt,m?v:x,c,h,(_?ja(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==c||!1===e.autoRound?sd:vd),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=ud);else if(c in x)$d.call(this,t,c,s,_?_+o:o);else{if(!(c in t)){Q(c,o);continue}this.add(t,c,s||t[c],_?_+o:o,n,a)}m||b.push(c,x[c]),w.push(c)}T&&_e(this)},render:function render(t,e){if(e.tween._time||!Fe())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:_r,aliases:ur,getSetter:function getSetter(t,e,r){var i=ur[e];return i&&i.indexOf(",")<0&&(e=i),e in er&&e!==lr&&(t._gsap.x||_r(t,"x"))?r&&Ee===r?"scale"===e?Bd:Ad:(Ee=r||{})&&("scale"===e?Cd:Dd):t.style&&!u(t.style[e])?yd:~e.indexOf("-")?zd:ee(t,e)},core:{_removeProperty:Ud,_getMatrix:he}};Ce.utils.checkPrefix=cr,Ce.core.getStyleSaver=Jd,Ar=ga((Cr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Sr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){er[t]=1}),ga(Sr,function(t){V.units[t]="deg",yr[t]=1}),ur[Ar[13]]=Cr+","+Sr,ga("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");ur[e[1]]=Ar[e[0]]}),ga("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){V.units[t]="px"}),Ce.registerPlugin(Dr);var zr=Ce.registerPlugin(Dr)||Ce,Rr=zr.core.Tween;e.Back=He,e.Bounce=We,e.CSSPlugin=Dr,e.Circ=tr,e.Cubic=Ne,e.Elastic=Je,e.Expo=Ke,e.Linear=Qe,e.Power0=Be,e.Power1=Le,e.Power2=Xe,e.Power3=Ye,e.Power4=Ve,e.Quad=Ue,e.Quart=qe,e.Quint=je,e.Sine=Ze,e.SteppedEase=$e,e.Strong=Ge,e.TimelineLite=Qt,e.TimelineMax=Qt,e.TweenLite=$t,e.TweenMax=Rr,e.default=zr,e.gsap=zr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

;
/*!
 * ScrollToPlugin 3.11.1
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function k(){return"undefined"!=typeof window}function l(){return u||k()&&(u=window.gsap)&&u.registerPlugin&&u}function m(e){return"string"==typeof e}function n(e){return"function"==typeof e}function o(e,t){var o="x"===t?"Width":"Height",n="scroll"+o,r="client"+o;return e===T||e===i||e===c?Math.max(i[n],c[n])-(T["inner"+o]||i[r]||c[r]):e[n]-e["offset"+o]}function p(e,t){var o="scroll"+("x"===t?"Left":"Top");return e===T&&(null!=e.pageXOffset?o="page"+t.toUpperCase()+"Offset":e=null!=i[o]?i:c),function(){return e[o]}}function r(e,t){if(!(e=f(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=e.getBoundingClientRect(),n=!t||t===T||t===c,r=n?{top:i.clientTop-(T.pageYOffset||i.scrollTop||c.scrollTop||0),left:i.clientLeft-(T.pageXOffset||i.scrollLeft||c.scrollLeft||0)}:t.getBoundingClientRect(),l={x:o.left-r.left,y:o.top-r.top};return!n&&t&&(l.x+=p(t,"x")(),l.y+=p(t,"y")()),l}function s(e,t,n,l,s){return isNaN(e)||"object"==typeof e?m(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+l-s:"max"===e?o(t,n)-s:Math.min(o(t,n),r(e,t)[n]-s):parseFloat(e)-s}function t(){u=l(),k()&&u&&document.body&&(T=window,c=document.body,i=document.documentElement,f=u.utils.toArray,u.config({autoKillThreshold:7}),v=u.config(),a=1)}var u,a,T,i,c,f,v,y={version:"3.11.1",name:"scrollTo",rawVars:1,register:function register(e){u=e,t()},init:function init(e,o,r,l,i){a||t();var c=this,f=u.getProperty(e,"scrollSnapType");c.isWin=e===T,c.target=e,c.tween=r,o=function _clean(e,t,o,r){if(n(e)&&(e=e(t,o,r)),"object"!=typeof e)return m(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var l,s={};for(l in e)s[l]="onAutoKill"!==l&&n(e[l])?e[l](t,o,r):e[l];return s}(o,l,e,i),c.vars=o,c.autoKill=!!o.autoKill,c.getX=p(e,"x"),c.getY=p(e,"y"),c.x=c.xPrev=c.getX(),c.y=c.yPrev=c.getY(),"smooth"===u.getProperty(e,"scrollBehavior")&&u.set(e,{scrollBehavior:"auto"}),f&&"none"!==f&&(c.snap=1,c.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=o.x?(c.add(c,"x",c.x,s(o.x,e,"x",c.x,o.offsetX||0),l,i),c._props.push("scrollTo_x")):c.skipX=1,null!=o.y?(c.add(c,"y",c.y,s(o.y,e,"y",c.y,o.offsetY||0),l,i),c._props.push("scrollTo_y")):c.skipY=1},render:function render(e,t){for(var n,r,l,s,i,p=t._pt,c=t.target,f=t.tween,u=t.autoKill,a=t.xPrev,y=t.yPrev,d=t.isWin,x=t.snap,g=t.snapInline;p;)p.r(e,p.d),p=p._next;n=d||!t.skipX?t.getX():a,l=(r=d||!t.skipY?t.getY():y)-y,s=n-a,i=v.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),u&&(!t.skipX&&(i<s||s<-i)&&n<o(c,"x")&&(t.skipX=1),!t.skipY&&(i<l||l<-i)&&r<o(c,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(f.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(f,t.vars.onAutoKillParams||[]))),d?T.scrollTo(t.skipX?n:t.x,t.skipY?r:t.y):(t.skipY||(c.scrollTop=t.y),t.skipX||(c.scrollLeft=t.x)),!x||1!==e&&0!==e||(r=c.scrollTop,n=c.scrollLeft,g?c.style.scrollSnapType=g:c.style.removeProperty("scroll-snap-type"),c.scrollTop=r+1,c.scrollLeft=n+1,c.scrollTop=r,c.scrollLeft=n),t.xPrev=t.x,t.yPrev=t.y},kill:function kill(e){var t="scrollTo"===e;!t&&"scrollTo_x"!==e||(this.skipX=1),!t&&"scrollTo_y"!==e||(this.skipY=1)}};y.max=o,y.getOffset=r,y.buildGetter=p,l()&&u.registerPlugin(y),e.ScrollToPlugin=y,e.default=y;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

;
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-addtest-domprefixes-hasevent-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in E)if(E.hasOwnProperty(l)){if(e=[],t=E[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),_.push((o?"":"no-")+s.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?w.className.baseVal=t:w.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return!!~(""+e).indexOf(t)}function f(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,a,l,u,c="modernizr",d=s("div"),p=f();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:c+(r+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+c,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!a}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?d(o,n||t):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return n}function g(e,t,o,i){function a(){c&&(delete L.style,delete L.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var f=v(e,o);if(!r(f,"undefined"))return f}for(var c,d,p,m,h,g=["modernizr","tspan","samp"];!L.style&&g.length;)c=!0,L.modElem=s(g.shift()),L.style=L.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],h=L.style[m],u(m,"-")&&(m=l(m)),L.style[m]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?m:!0;try{L.style[m]=o}catch(y){}if(L.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function y(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,o,i):(s=(e+" "+P.join(a+" ")+a).split(" "),p(s,t,n))}function C(e,t,r){return y(e,n,n,t,r)}var _=[],E=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){E.push({name:e,fn:t,options:n})},addAsyncTest:function(e){E.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var b=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=b;var w=t.documentElement,x="svg"===w.nodeName.toLowerCase();x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||l(e,r),e}var f,c,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,c=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var N="Moz O ms Webkit",P=S._config.usePrefixes?N.toLowerCase().split(" "):[];S._domPrefixes=P;var j;!function(){var e={}.hasOwnProperty;j=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),S._l={},S.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=a});var z=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();S.hasEvent=z;var T=S._config.usePrefixes?N.split(" "):[];S._cssomPrefixes=T;var k=function(t){var r,o=b.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=b[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};S.atRule=k;var F=(S.testStyles=c,{elem:s("modernizr")});Modernizr._q.push(function(){delete F.elem});var L={style:F.elem.style};Modernizr._q.unshift(function(){delete L.style});S.testProp=function(e,t,r){return g([e],n,t,r)};S.testAllProps=y;S.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=l(e)),t?y(e,t,n):y(e,"pfx"))};S.testAllProps=C,o(),i(_),delete S.addTest,delete S.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);
;
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
	me.isBadAndroid = (function() {
		var appVersion = window.navigator.appVersion;
		// Android browser is not a chrome browser.
		if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
			var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
			if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
				return parseFloat(safariVersion[1]) < 535.19;
			} else {
				return true;
			}
		} else {
			return false;
		}
	})();

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();
function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS
		disablePointer : !utils.hasPointer,
		disableTouch : utils.hasPointer || !utils.hasTouch,
		disableMouse : utils.hasPointer || utils.hasTouch,
		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,
		bindToWrapper: typeof window.onmousedown === "undefined"
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

	if ( this.options.probeType == 3 ) {
		this.options.useTransition = false;	}

// INSERT POINT: NORMALIZATION

	// Some defaults
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.2.0',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);
		clearTimeout(this.resizeTimeout);
 		this.resizeTimeout = null;
		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
		  // for button property
		  // http://unixpapa.com/js/mouse.html
		  var button;
	    if (!e.which) {
	      /* IE case */
	      button = (e.button < 2) ? 0 :
	               ((e.button == 4) ? 1 : 2);
	    } else {
	      /* All others */
	      button = e.button;
	    }
			if ( button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this._transitionTime();
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */
		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;

			if ( this.options.probeType == 1 ) {
				this._execEvent('scroll');
			}
		}

		if ( this.options.probeType > 1 ) {
			this._execEvent('scroll');
		}
/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		var durationProp = utils.style.transitionDuration;
		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

		if ( this.options.probeType > 1 ) {
			this._execEvent('scroll');
		}

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);
				
				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}

			if ( that.options.probeType == 3 ) {
				that._execEvent('scroll');
			}
		}

		this.isAnimating = true;
		step();
	},

	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);


		if ( this.scroller.options.probeType == 1 && timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.scroller._execEvent('scroll');
		} else if ( this.scroller.options.probeType > 1 ) {
			this.scroller._execEvent('scroll');
		}


// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);
;
/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";function _(){}_.version="2.0.8","undefined"!=typeof window&&window.addEventListener("mousewheel",void 0);var P="data-scrollmagic-pin-spacer";_.Controller=function(e){function t(){var e,t,n;v&&u&&(e=R.type.Array(u)?u:f.slice(0),u=!1,t=d,0!=(n=(d=l.scrollPos())-t)&&(h=0<n?"FORWARD":i),h===i&&e.reverse(),e.forEach(function(e,t){e.update(!0)}))}function r(){n=R.rAF(t)}var n,o,i="REVERSE",s="PAUSED",a=z.defaults,l=this,c=R.extend({},a,e),f=[],u=!1,d=0,h=s,p=!0,g=0,v=!0,m=function(){0<c.refreshInterval&&(o=window.setTimeout(E,c.refreshInterval))},w=function(){return c.vertical?R.get.scrollTop(c.container):R.get.scrollLeft(c.container)},y=function(){return c.vertical?R.get.height(c.container):R.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?p?window.scrollTo(R.get.scrollLeft(),e):c.container.scrollTop=e:p?window.scrollTo(e,R.get.scrollTop()):c.container.scrollLeft=e},b=function(e){"resize"==e.type&&(g=y(),h=s),!0!==u&&(u=!0,r())},E=function(){if(!p&&g!=y()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(t)}f.forEach(function(e,t){e.refresh()}),m()};this._options=c;function x(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t}return this.addScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){l.addScene(e)});else if(e instanceof _.Scene)if(e.controller()!==l)e.addTo(l);else if(!~f.indexOf(e))for(var t in f.push(e),f=x(f),e.on("shift.controller_sort",function(){f=x(f)}),c.globalSceneOptions)e[t]&&e[t].call(e,c.globalSceneOptions[t]);return l},this.removeScene=function(e){var t;return R.type.Array(e)?e.forEach(function(e,t){l.removeScene(e)}):-1<(t=f.indexOf(e))&&(e.off("shift.controller_sort"),f.splice(t,1),e.remove()),l},this.updateScene=function(e,n){return R.type.Array(e)?e.forEach(function(e,t){l.updateScene(e,n)}):n?e.update(!0):!0!==u&&e instanceof _.Scene&&(~(u=u||[]).indexOf(e)||u.push(e),u=x(u),r()),l},this.update=function(e){return b({type:"resize"}),e&&t(),l},this.scrollTo=function(e,t){if(R.type.Number(e))S.call(c.container,e,t);else if(e instanceof _.Scene)e.controller()===l&&l.scrollTo(e.scrollOffset(),t);else if(R.type.Function(e))S=e;else{var n=R.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(P);)n=n.parentNode;var r=c.vertical?"top":"left",o=R.get.offset(c.container),i=R.get.offset(n);p||(o[r]-=l.scrollPos()),l.scrollTo(i[r]-o[r],t)}}return l},this.scrollPos=function(e){return arguments.length?(R.type.Function(e)&&(w=e),l):w.call(l)},this.info=function(e){var t={size:g,vertical:c.vertical,scrollPos:d,scrollDirection:h,container:c.container,isDocument:p};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return l},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,l.updateScene(f,!0)),l):v},this.destroy=function(e){window.clearTimeout(o);for(var t=f.length;t--;)f[t].destroy(e);return c.container.removeEventListener("resize",b),c.container.removeEventListener("scroll",b),R.cAF(n),null},function(){for(var e in c)a.hasOwnProperty(e)||delete c[e];if(c.container=R.get.elements(c.container)[0],!c.container)throw"ScrollMagic.Controller init failed.";(p=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),g=y(),c.container.addEventListener("resize",b),c.container.addEventListener("scroll",b);var t=parseInt(c.refreshInterval,10);c.refreshInterval=R.type.Number(t)?t:a.refreshInterval,m()}(),l};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,o=!0,s={};this.on=function(e,o){return R.type.Function(o)&&(e=e.trim().split(" ")).forEach(function(e){var t=e.split("."),n=t[0],r=t[1];"*"!=n&&(s[n]||(s[n]=[]),s[n].push({namespace:r||"",callback:o}))}),d},this.off=function(e,i){return e&&(e=e.trim().split(" ")).forEach(function(e,t){var n=e.split("."),r=n[0],o=n[1]||"";("*"===r?Object.keys(s):[r]).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var r=t[n];!r||o!==r.namespace&&"*"!==o||i&&i!=r.callback||t.splice(n,1)}t.length||delete s[e]})}),d},this.trigger=function(e,n){var t,r,o,i;return e&&(t=e.trim().split("."),r=t[0],o=t[1],(i=s[r])&&i.forEach(function(e,t){o&&o!==e.namespace||e.callback.call(d,new _.Event(r,e.namespace,d,n))})),d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(e){return e instanceof _.Controller&&l!=e&&(l&&l.removeScene(d),l=e,E(),i(!0),y(!0),t(),l.info("container").addEventListener("resize",S),e.addScene(d),d.trigger("add",{controller:l}),d.update()),d},this.enabled=function(e){return arguments.length?(o!=e&&(o=!!e,d.update(!0)),d):o},this.remove=function(){var e;return l&&(l.info("container").removeEventListener("resize",S),e=l,l=void 0,e.removeScene(d),d.trigger("remove")),d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),null},this.update=function(e){var t,n;return l&&(e?l.enabled()&&o?(t=l.info("scrollPos"),n=0<h.duration?(t-a.start)/(a.end-a.start):t>=a.start?1:0,d.trigger("update",{startPos:a.start,endPos:a.end,scrollPos:t}),d.progress(n)):m&&p===f&&T(!0):l.updateScene(d,!1)),d},this.refresh=function(){return i(),y(),d},this.progress=function(e){if(arguments.length){var t,n,r,o=!1,i=p,s=l?l.info("scrollDirection"):"PAUSED",a=h.reverse||g<=e;return 0===h.duration?(o=g!=e,p=0===(g=e<1&&a?0:1)?c:f):e<0&&p!==c&&a?(p=c,o=!(g=0)):0<=e&&e<1&&a?(g=e,p=f,o=!0):1<=e&&p!==u?(g=1,p=u,o=!0):p!==f||a||T(),o&&(t={progress:g,state:p,scrollDirection:s},r=function(e){d.trigger(e,t)},(n=p!=i)&&i!==f&&(r("enter"),r(i===c?"start":"end")),r("progress"),n&&p!==f&&(r(p===c?"start":"end"),r("leave"))),d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},i=function(e){var t;!n||x(t="duration",n.call(d))&&!e&&(d.trigger("change",{what:t,newval:h[t]}),d.trigger("shift",{reason:t}))},y=function(e){var t=0,n=h.triggerElement;if(l&&(n||0<v)){if(n)if(n.parentNode){for(var r=l.info(),o=R.get.offset(r.container),i=r.vertical?"top":"left";n.parentNode.hasAttribute(P);)n=n.parentNode;var s=R.get.offset(n);r.isDocument||(o[i]-=l.scrollPos()),t=s[i]-o[i]}else d.triggerElement(void 0);var a=t!=v;v=t,a&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){0<h.triggerHook&&d.trigger("shift",{reason:"containerResize"})},b=R.extend(D.validate,{duration:function(t){var e;if(R.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)&&(e=parseFloat(t)/100,t=function(){return l?l.info("size")*e:0}),R.type.Function(t)){n=t;try{t=parseFloat(n.call(d))}catch(e){t=-1}}if(t=parseFloat(t),!R.type.Number(t)||t<0)throw n=n&&void 0,0;return t}}),E=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(t,e){var n;if(b[t])try{n=b[t](h[t])}catch(e){n=r[t]}finally{h[t]=n}})},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(t){d[t]||(d[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),x(t,e)&&(d.trigger("change",{what:t,newval:h[t]}),~D.shifts.indexOf(t)&&d.trigger("shift",{reason:t})),d):h[t]})};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=v:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(p===u&&t||p===f&&0===h.duration)&&T(),t&&A()}).on("progress.internal",function(e){T()}).on("add.internal",function(e){A()}).on("destroy.internal",function(e){d.removePin(e.reset)});function C(){l&&m&&p===f&&!l.info("isDocument")&&T()}function F(){l&&m&&p===f&&((w.relSize.width||w.relSize.autoFullWidth)&&R.get.width(window)!=R.get.width(w.spacer.parentNode)||w.relSize.height&&R.get.height(window)!=R.get.height(w.spacer.parentNode))&&A()}function L(e){l&&m&&p===f&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))}var T=function(e){var t,n,r,o,i,s;m&&l&&(t=l.info(),n=w.spacer.firstChild,e||p!==f?(r={position:w.inFlow?"relative":"absolute",top:0,left:0},o=R.css(n,"position")!=r.position,w.pushFollowers?0<h.duration&&(p===u&&0===parseFloat(R.css(w.spacer,"padding-top"))||p===c&&0===parseFloat(R.css(w.spacer,"padding-bottom")))&&(o=!0):r[t.vertical?"top":"left"]=h.duration*g,R.css(n,r),o&&A()):("fixed"!=R.css(n,"position")&&(R.css(n,{position:"fixed"}),A()),i=R.get.offset(w.spacer,!0),s=h.reverse||0===h.duration?t.scrollPos-a.start:Math.round(g*h.duration*10)/10,i[t.vertical?"top":"left"]+=s,R.css(w.spacer.firstChild,{top:i.top,left:i.left})))},A=function(){var e,t,n,r,o;m&&l&&w.inFlow&&(e=p===f,t=l.info("vertical"),n=w.spacer.firstChild,r=R.isMarginCollapseType(R.css(w.spacer,"display")),o={},w.relSize.width||w.relSize.autoFullWidth?e?R.css(m,{width:R.get.width(w.spacer)}):R.css(m,{width:"100%"}):(o["min-width"]=R.get.width(t?m:n,!0,!0),o.width=e?o["min-width"]:"auto"),w.relSize.height?e?R.css(m,{height:R.get.height(w.spacer)-(w.pushFollowers?h.duration:0)}):R.css(m,{height:"100%"}):(o["min-height"]=R.get.height(t?n:m,!0,!r),o.height=e?o["min-height"]:"auto"),w.pushFollowers&&(o["padding"+(t?"Top":"Left")]=h.duration*g,o["padding"+(t?"Bottom":"Right")]=h.duration*(1-g)),R.css(w.spacer,o))};this.setPin=function(e,t){if(t=R.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=R.get.elements(e)[0]))return d;if("fixed"===R.css(e,"position"))return d;if(m){if(m===e)return d;d.removePin()}var n=(m=e).parentNode.style.display,r=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var o="absolute"!=R.css(m,"position"),i=R.css(m,r.concat(["display"])),s=R.css(m,["width","height"]);m.parentNode.style.display=n,!o&&t.pushFollowers&&(t.pushFollowers=!1);var a,l=m.parentNode.insertBefore(document.createElement("div"),m),c=R.extend(i,{position:o?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});return o||R.extend(c,R.css(m,["width","height"])),R.css(l,c),l.setAttribute(P,""),R.addClass(l,t.spacerClass),w={spacer:l,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&o&&R.isMarginCollapseType(i.display)},pushFollowers:t.pushFollowers,inFlow:o},m.___origStyle||(m.___origStyle={},a=m.style,r.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=a[e]||""})),w.relSize.width&&R.css(l,{width:s.width}),w.relSize.height&&R.css(l,{height:s.height}),l.appendChild(m),R.css(m,{position:o?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&R.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",C),window.addEventListener("resize",C),window.addEventListener("resize",F),m.addEventListener("mousewheel",L),m.addEventListener("DOMMouseScroll",L),T(),d},this.removePin=function(e){var t,n,r;return m&&(p===f&&T(!0),!e&&l||((t=w.spacer.firstChild).hasAttribute(P)&&(n=w.spacer.style,r={},["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),R.css(t,r)),w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute(P)||(R.css(m,m.___origStyle),delete m.___origStyle)),window.removeEventListener("scroll",C),window.removeEventListener("resize",C),window.removeEventListener("resize",F),m.removeEventListener("mousewheel",L),m.removeEventListener("DOMMouseScroll",L),m=void 0),d};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=R.get.elements(e);return 0!==n.length&&R.type.String(t)&&(0<O.length&&d.removeClassToggle(),N=t,O=n,d.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?R.addClass:R.removeClass;O.forEach(function(e,t){n(e,N)})})),d},this.removeClassToggle=function(e){return e&&O.forEach(function(e,t){R.removeClass(e,N)}),d.off("start.internal_class end.internal_class"),N=void 0,O=[],d},function(){for(var e in h)r.hasOwnProperty(e)||delete h[e];for(var t in r)z(t);E()}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!R.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=R.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(R.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(e,t,n,r){e in D.defaults||(D.defaults[e]=t,D.validate[e]=n,r&&D.shifts.push(e))},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(e,t,n,r){for(var o in r=r||{})this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var R=_._util=function(s){function a(e){return parseFloat(e)||0}function l(e){return e.currentStyle?e.currentStyle:s.getComputedStyle(e)}function r(e,t,n,r){if((t=t===document?s:t)===s)r=!1;else if(!u.DomElement(t))return 0;e=e[0].toUpperCase()+e.substr(1).toLowerCase();var o,i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;return n&&r&&(o=l(t),i+="Height"===e?a(o.marginTop)+a(o.marginBottom):a(o.marginLeft)+a(o.marginRight)),i}function c(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}var e={};e.extend=function(e){for(e=e||{},f=1;f<arguments.length;f++)if(arguments[f])for(var t in arguments[f])arguments[f].hasOwnProperty(t)&&(e[t]=arguments[f][t]);return e},e.isMarginCollapseType=function(e){return!!~["block","flex","list-item","table","-webkit-box"].indexOf(e)};for(var o=0,t=["ms","moz","webkit","o"],n=s.requestAnimationFrame,i=s.cancelAnimationFrame,f=0;!n&&f<4;++f)n=s[t[f]+"RequestAnimationFrame"],i=s[t[f]+"CancelAnimationFrame"]||s[t[f]+"CancelRequestAnimationFrame"];n=n||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-o)),r=s.setTimeout(function(){e(t+n)},n);return o=t+n,r},i=i||function(e){s.clearTimeout(e)},e.rAF=n.bind(s),e.cAF=i.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=e.get={};return d.elements=function(e){var t=[];if(u.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===u(e)||u.Array(e)||e instanceof NodeList)for(var n=0,r=t.length=e.length;n<r;n++){var o=e[n];t[n]=u.DomElement(o)?o:d.elements(o)}else!u.DomElement(e)&&e!==document&&e!==s||(t=[e]);return t},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(e,t){var n,r={top:0,left:0};return e&&e.getBoundingClientRect&&(n=e.getBoundingClientRect(),r.top=n.top,r.left=n.left,t||(r.top+=d.scrollTop(),r.left+=d.scrollLeft())),r},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},e.css=function(e,t){if(u.String(t))return l(e)[c(t)];if(u.Array(t)){var n={},r=l(e);return t.forEach(function(e,t){n[e]=r[c(e)]}),n}for(var o in t){var i=t[o];i==parseFloat(i)&&(i+="px"),e.style[c(o)]=i}},e}(window||{});return _});;
/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,n){var r;"function"==typeof define&&define.amd?define(["ScrollMagic","gsap","TweenMax","TimelineMax"],n):"object"==typeof exports?(r=require("gsap/dist/gsap")||require("gsap"),n(require("scrollmagic"),r,TweenMax||r,TimelineMax||r)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.gsap,e.gsap||e.TweenMax||e.TweenLite,e.gsap||e.TimelineMax||e.TimelineLite)}(this,function(e,n,p,u){"use strict";var g=n&&3<=parseFloat(n.version);e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var o,i=this;i.on("progress.plugin_gsap",function(){s()}),i.on("destroy.plugin_gsap",function(e){i.removeTween(e.reset)});var s=function(){var e,n;o&&(e=i.progress(),n=i.state(),o.repeat&&-1===o.repeat()?"DURING"===n&&o.paused()?o.play():"DURING"===n||o.paused()||o.pause():e!=o.progress()&&(0===i.duration()?0<e?o.play():o.reverse():i.tweenChanges()&&o.tweenTo?o.tweenTo(e*o.duration()):o.progress(e).pause()))};i.setTween=function(e,n,r){var t,a;1<arguments.length&&(a="number"==typeof arguments[1],g?(a||(r=n),r.hasOwnProperty("duration")||(r.duration=a?n:1)):arguments.length<3&&(r=n,n=1),e=g?p.to(e,r):p.to(e,n,r));try{(t=u&&!g?new u({smoothChildTiming:!0}).add(e):e).pause()}catch(e){return i}return o&&i.removeTween(),o=t,e.repeat&&-1===e.repeat()&&(o.repeat(-1),o.yoyo(e.yoyo())),s(),i},i.removeTween=function(e){return o&&(e&&o.progress(0).pause(),o.kill(),o=void 0),i}})});;
/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,r){"function"==typeof define&&define.amd?define(["ScrollMagic"],r):"object"==typeof exports?r(require("scrollmagic")):r(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic)}(this,function(i){"use strict";var o="0.85em",n="9999",v=i._util,h=0;i.Scene.extend(function(){var t,i=this;i.addIndicators=function(e){var r;return t||(r={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"},e=v.extend({},r,e),h++,t=new s(i,e),i.on("add.plugin_addIndicators",t.add),i.on("remove.plugin_addIndicators",t.remove),i.on("destroy.plugin_addIndicators",i.removeIndicators),i.controller()&&t.add()),i},i.removeIndicators=function(){return t&&(t.remove(),this.off("*.plugin_addIndicators"),t=void 0),i}}),i.Controller.addOption("addIndicators",!1),i.Controller.extend(function(){var c=this,e=c.info(),l=e.container,f=e.isDocument,m=e.vertical,h={groups:[]};this._indicators=h;function r(){h.updateBoundsPositions()}function t(){h.updateTriggerGroupPositions()}return l.addEventListener("resize",t),f||(window.addEventListener("resize",t),window.addEventListener("scroll",t)),l.addEventListener("resize",r),l.addEventListener("scroll",r),this._indicators.updateBoundsPositions=function(e){for(var r,t,i,o=e?[v.extend({},e.triggerGroup,{members:[e]})]:h.groups,n=o.length,s={},d=m?"left":"top",a=m?"width":"height",g=m?v.get.scrollLeft(l)+v.get.width(l)-15:v.get.scrollTop(l)+v.get.height(l)-15;n--;)for(r=(i=o[n]).members.length,t=v.get[a](i.element.firstChild);r--;)s[d]=g-t,v.css(i.members[r].bounds,s)},this._indicators.updateTriggerGroupPositions=function(e){for(var r,t,i,o,n=e?[e]:h.groups,s=n.length,d=f?document.body:l,a=f?{top:0,left:0}:v.get.offset(d,!0),g=m?v.get.width(l)-15:v.get.height(l)-15,p=m?"width":"height",u=m?"Y":"X";s--;)t=(r=n[s]).element,i=r.triggerHook*c.info("size"),o=v.get[p](t.firstChild.firstChild)<i?"translate"+u+"(-100%)":"",v.css(t,{top:a.top+(m?i:g-r.members[0].options.indent),left:a.left+(m?g-r.members[0].options.indent:i)}),v.css(t.firstChild.firstChild,{"-ms-transform":o,"-webkit-transform":o,transform:o})},this._indicators.updateTriggerGroupLabel=function(e){var r="trigger"+(1<e.members.length?"":" "+e.members[0].options.name),t=e.element.firstChild.firstChild;t.textContent!==r&&(t.textContent=r,m&&h.updateBoundsPositions())},this.addScene=function(e){this._options.addIndicators&&e instanceof i.Scene&&e.controller()===c&&e.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){l.removeEventListener("resize",t),f||(window.removeEventListener("resize",t),window.removeEventListener("scroll",t)),l.removeEventListener("resize",r),l.removeEventListener("scroll",r),this.$super.destroy.apply(this,arguments)},c});var s=function(o,n){var s,d,a=this,t=b.bounds(),i=b.start(n.colorStart),g=b.end(n.colorEnd),p=n.parent&&v.get.elements(n.parent)[0];n.name=n.name||h,i.firstChild.textContent+=" "+n.name,g.textContent+=" "+n.name,t.appendChild(i),t.appendChild(g),a.options=n,a.bounds=t,a.triggerGroup=void 0,this.add=function(){d=o.controller(),s=d.info("vertical");var e=d.info("isDocument");p=p||(e?document.body:d.info("container")),e||"static"!==v.css(p,"position")||v.css(p,{position:"relative"}),o.on("change.plugin_addIndicators",u),o.on("shift.plugin_addIndicators",r),m(),l(),setTimeout(function(){d._indicators.updateBoundsPositions(a)},0)},this.remove=function(){var e;a.triggerGroup&&(o.off("change.plugin_addIndicators",u),o.off("shift.plugin_addIndicators",r),1<a.triggerGroup.members.length?((e=a.triggerGroup).members.splice(e.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(e),d._indicators.updateTriggerGroupPositions(e),a.triggerGroup=void 0):f(),c())};var r=function(){l()},u=function(e){"triggerHook"===e.what&&m()},c=function(){t.parentNode.removeChild(t)},l=function(){var e;t.parentNode!==p&&(e=d.info("vertical"),v.css(i.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:n.indent,right:e?n.indent:-1,padding:e?"0 8px":"2px 4px"}),v.css(g,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?n.indent:"",bottom:e?"":n.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),p.appendChild(t));var r={};r[s?"top":"left"]=o.triggerPosition(),r[s?"height":"width"]=o.duration(),v.css(t,r),v.css(g,{display:0<o.duration()?"":"none"})},f=function(){d._indicators.groups.splice(d._indicators.groups.indexOf(a.triggerGroup),1),a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element),a.triggerGroup=void 0},m=function(){var e=o.triggerHook();if(!(a.triggerGroup&&Math.abs(a.triggerGroup.triggerHook-e)<1e-4)){for(var r,t=d._indicators.groups,i=t.length;i--;)if(r=t[i],Math.abs(r.triggerHook-e)<1e-4)return a.triggerGroup&&(1===a.triggerGroup.members.length?f():(a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(a.triggerGroup),d._indicators.updateTriggerGroupPositions(a.triggerGroup))),r.members.push(a),a.triggerGroup=r,void d._indicators.updateTriggerGroupLabel(r);if(a.triggerGroup){if(1===a.triggerGroup.members.length)return a.triggerGroup.triggerHook=e,void d._indicators.updateTriggerGroupPositions(a.triggerGroup);a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(a.triggerGroup),d._indicators.updateTriggerGroupPositions(a.triggerGroup),a.triggerGroup=void 0}!function(){var e=b.trigger(n.colorTrigger),r={};r[s?"right":"bottom"]=0,r[s?"border-top-width":"border-left-width"]=1,v.css(e.firstChild,r),v.css(e.firstChild.firstChild,{padding:s?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(e);var t={triggerHook:o.triggerHook(),element:e,members:[a]};d._indicators.groups.push(t),a.triggerGroup=t,d._indicators.updateTriggerGroupLabel(t),d._indicators.updateTriggerGroupPositions(t)}()}}},b={start:function(e){var r=document.createElement("div");r.textContent="start",v.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var t=document.createElement("div");return v.css(t,{position:"absolute",overflow:"visible",width:0,height:0}),t.appendChild(r),t},end:function(e){var r=document.createElement("div");return r.textContent="end",v.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),r},bounds:function(){var e=document.createElement("div");return v.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),e.style.zIndex=n,e},trigger:function(e){var r=document.createElement("div");r.textContent="trigger",v.css(r,{position:"relative"});var t=document.createElement("div");v.css(t,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),t.appendChild(r);var i=document.createElement("div");return v.css(i,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),i.style.zIndex=n,i.appendChild(t),i}}});;
