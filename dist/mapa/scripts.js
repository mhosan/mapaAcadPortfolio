/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).leaflet={})}(this,function(t){"use strict";function l(t){for(var e,i,n=1,o=arguments.length;n<o;n++)for(e in i=arguments[n])t[e]=i[e];return t}var R=Object.create||function(t){return N.prototype=t,new N};function N(){}function a(t,e){var i,n=Array.prototype.slice;return t.bind?t.bind.apply(t,n.call(arguments,1)):(i=n.call(arguments,2),function(){return t.apply(e,i.length?i.concat(n.call(arguments)):arguments)})}var D=0;function h(t){return"_leaflet_id"in t||(t._leaflet_id=++D),t._leaflet_id}function j(t,e,i){var n,o,s=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(s,e),n=!0)};return r}function H(t,e,i){var n=e[1],e=e[0],o=n-e;return t===n&&i?t:((t-e)%o+o)%o+e}function u(){return!1}function i(t,e){return!1===e?t:(e=Math.pow(10,void 0===e?6:e),Math.round(t*e)/e)}function W(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function F(t){return W(t).split(/\s+/)}function c(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?R(t.options):{}),e)t.options[i]=e[i];return t.options}function U(t,e,i){var n,o=[];for(n in t)o.push(encodeURIComponent(i?n.toUpperCase():n)+"="+encodeURIComponent(t[n]));return(e&&-1!==e.indexOf("?")?"&":"?")+o.join("&")}var V=/\{ *([\w_ -]+) *\}/g;function q(t,i){return t.replace(V,function(t,e){e=i[e];if(void 0===e)throw new Error("No value provided for variable "+t);return e="function"==typeof e?e(i):e})}var d=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function G(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var K="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Y(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var X=0;function J(t){var e=+new Date,i=Math.max(0,16-(e-X));return X=e+i,window.setTimeout(t,i)}var $=window.requestAnimationFrame||Y("RequestAnimationFrame")||J,Q=window.cancelAnimationFrame||Y("CancelAnimationFrame")||Y("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function x(t,e,i){if(!i||$!==J)return $.call(window,a(t,e));t.call(e)}function r(t){t&&Q.call(window,t)}var tt={__proto__:null,extend:l,create:R,bind:a,get lastId(){return D},stamp:h,throttle:j,wrapNum:H,falseFn:u,formatNum:i,trim:W,splitWords:F,setOptions:c,getParamString:U,template:q,isArray:d,indexOf:G,emptyImageUrl:K,requestFn:$,cancelFn:Q,requestAnimFrame:x,cancelAnimFrame:r};function et(){}et.extend=function(t){function e(){c(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var i,n=e.__super__=this.prototype,o=R(n);for(i in(o.constructor=e).prototype=o,this)Object.prototype.hasOwnProperty.call(this,i)&&"prototype"!==i&&"__super__"!==i&&(e[i]=this[i]);if(t.statics&&l(e,t.statics),t.includes){var s=t.includes;if("undefined"!=typeof L&&L&&L.Mixin){s=d(s)?s:[s];for(var r=0;r<s.length;r++)s[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}l.apply(null,[o].concat(t.includes))}return l(o,t),delete o.statics,delete o.includes,o.options&&(o.options=n.options?R(n.options):{},l(o.options,t.options)),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},e},et.include=function(t){var e=this.prototype.options;return l(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},et.mergeOptions=function(t){return l(this.prototype.options,t),this},et.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var e={on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else for(var o=0,s=(t=F(t)).length;o<s;o++)this._on(t[o],e,i);return this},off:function(t,e,i){if(arguments.length)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=F(t);for(var o=1===arguments.length,s=0,r=t.length;s<r;s++)o?this._off(t[s]):this._off(t[s],e,i)}else delete this._events;return this},_on:function(t,e,i,n){"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1===this._listens(t,e,i)&&(e={fn:e,ctx:i=i===this?void 0:i},n&&(e.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e))},_off:function(t,e,i){var n,o,s;if(this._events&&(n=this._events[t]))if(1===arguments.length){if(this._firingCount)for(o=0,s=n.length;o<s;o++)n[o].fn=u;delete this._events[t]}else"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1!==(e=this._listens(t,e,i))&&(i=n[e],this._firingCount&&(i.fn=u,this._events[t]=n=n.slice()),n.splice(e,1))},fire:function(t,e,i){if(this.listens(t,i)){var n=l({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s],h=a.fn;a.once&&this.off(t,h,a.ctx),h.call(a.ctx||this,n)}this._firingCount--}}i&&this._propagateEvent(n)}return this},listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');var o=e,s=("function"!=typeof e&&(n=!!e,i=o=void 0),this._events&&this._events[t]);if(s&&s.length&&!1!==this._listens(t,o,i))return!0;if(n)for(var r in this._eventParents)if(this._eventParents[r].listens(t,e,i,n))return!0;return!1},_listens:function(t,e,i){if(this._events){var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o}return!1},once:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e,!0);else for(var o=0,s=(t=F(t)).length;o<s;o++)this._on(t[o],e,i,!0);return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[h(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[h(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,l({layer:t.target,propagatedFrom:t.target},t),!0)}},it=(e.addEventListener=e.on,e.removeEventListener=e.clearAllEventListeners=e.off,e.addOneTimeEventListener=e.once,e.fireEvent=e.fire,e.hasEventListeners=e.listens,et.extend(e));function p(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var nt=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function m(t,e,i){return t instanceof p?t:d(t)?new p(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new p(t.x,t.y):new p(t,e,i)}function f(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function _(t,e){return!t||t instanceof f?t:new f(t,e)}function s(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function g(t,e){return t instanceof s?t:new s(t,e)}function v(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==i&&(this.alt=+i)}function w(t,e,i){return t instanceof v?t:d(t)&&"object"!=typeof t[0]?3===t.length?new v(t[0],t[1],t[2]):2===t.length?new v(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new v(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new v(t,e,i)}p.prototype={clone:function(){return new p(this.x,this.y)},add:function(t){return this.clone()._add(m(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(m(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new p(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new p(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=nt(this.x),this.y=nt(this.y),this},distanceTo:function(t){var e=(t=m(t)).x-this.x,t=t.y-this.y;return Math.sqrt(e*e+t*t)},equals:function(t){return(t=m(t)).x===this.x&&t.y===this.y},contains:function(t){return t=m(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+i(this.x)+", "+i(this.y)+")"}},f.prototype={extend:function(t){var e,i;if(t){if(t instanceof p||"number"==typeof t[0]||"x"in t)e=i=m(t);else if(e=(t=_(t)).min,i=t.max,!e||!i)return this;this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone())}return this},getCenter:function(t){return m((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return m(this.min.x,this.max.y)},getTopRight:function(){return m(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return(t=("number"==typeof t[0]||t instanceof p?m:_)(t))instanceof f?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>=e.x&&n.x<=i.x,t=t.y>=e.y&&n.y<=i.y;return o&&t},overlaps:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>e.x&&n.x<i.x,t=t.y>e.y&&n.y<i.y;return o&&t},isValid:function(){return!(!this.min||!this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,t=Math.abs(e.y-i.y)*t;return _(m(e.x-n,e.y-t),m(i.x+n,i.y+t))},equals:function(t){return!!t&&(t=_(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},s.prototype={extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof v)i=e=t;else{if(!(t instanceof s))return t?this.extend(w(t)||g(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new v(e.lat,e.lng),this._northEast=new v(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,t=Math.abs(e.lng-i.lng)*t;return new s(new v(e.lat-n,e.lng-t),new v(i.lat+n,i.lng+t))},getCenter:function(){return new v((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new v(this.getNorth(),this.getWest())},getSouthEast:function(){return new v(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t=("number"==typeof t[0]||t instanceof v||"lat"in t?w:g)(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof s?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},intersects:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>=e.lat&&n.lat<=i.lat,t=t.lng>=e.lng&&n.lng<=i.lng;return o&&t},overlaps:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>e.lat&&n.lat<i.lat,t=t.lng>e.lng&&n.lng<i.lng;return o&&t},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=g(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}};var ot={latLngToPoint:function(t,e){t=this.projection.project(t),e=this.scale(e);return this.transformation._transform(t,e)},pointToLatLng:function(t,e){e=this.scale(e),t=this.transformation.untransform(t,e);return this.projection.unproject(t)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){var e;return this.infinite?null:(e=this.projection.bounds,t=this.scale(t),new f(this.transformation.transform(e.min,t),this.transformation.transform(e.max,t)))},infinite:!(v.prototype={equals:function(t,e){return!!t&&(t=w(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},toString:function(t){return"LatLng("+i(this.lat,t)+", "+i(this.lng,t)+")"},distanceTo:function(t){return st.distance(this,w(t))},wrap:function(){return st.wrapLatLng(this)},toBounds:function(t){var t=180*t/40075017,e=t/Math.cos(Math.PI/180*this.lat);return g([this.lat-t,this.lng-e],[this.lat+t,this.lng+e])},clone:function(){return new v(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var e=this.wrapLng?H(t.lng,this.wrapLng,!0):t.lng;return new v(this.wrapLat?H(t.lat,this.wrapLat,!0):t.lat,e,t.alt)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,e=e.lng-i.lng;return 0==n&&0==e?t:(i=t.getSouthWest(),t=t.getNorthEast(),new s(new v(i.lat-n,i.lng-e),new v(t.lat-n,t.lng-e)))}},st=l({},ot,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),e=Math.sin((e.lng-t.lng)*i/2),t=s*s+Math.cos(n)*Math.cos(o)*e*e,i=2*Math.atan2(Math.sqrt(t),Math.sqrt(1-t));return this.R*i}}),rt=6378137,rt={R:rt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,i=Math.max(Math.min(i,t.lat),-i),i=Math.sin(i*e);return new p(this.R*t.lng*e,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(t){var e=180/Math.PI;return new v((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:new f([-(rt=rt*Math.PI),-rt],[rt,rt])};function at(t,e,i,n){d(t)?(this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3]):(this._a=t,this._b=e,this._c=i,this._d=n)}function ht(t,e,i,n){return new at(t,e,i,n)}at.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return t.x=(e=e||1)*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return new p((t.x/(e=e||1)-this._b)/this._a,(t.y/e-this._d)/this._c)}};var lt=l({},st,{code:"EPSG:3857",projection:rt,transformation:ht(lt=.5/(Math.PI*rt.R),.5,-lt,.5)}),ut=l({},lt,{code:"EPSG:900913"});function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function dt(t,e){for(var i,n,o,s,r="",a=0,h=t.length;a<h;a++){for(i=0,n=(o=t[a]).length;i<n;i++)r+=(i?"L":"M")+(s=o[i]).x+" "+s.y;r+=e?b.svg?"z":"x":""}return r||"M0 0"}var _t=document.documentElement.style,pt="ActiveXObject"in window,mt=pt&&!document.addEventListener,n="msLaunchUri"in navigator&&!("documentMode"in document),ft=y("webkit"),gt=y("android"),vt=y("android 2")||y("android 3"),yt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),yt=gt&&y("Google")&&yt<537&&!("AudioNode"in window),xt=!!window.opera,wt=!n&&y("chrome"),bt=y("gecko")&&!ft&&!xt&&!pt,Pt=!wt&&y("safari"),Lt=y("phantom"),o="OTransition"in _t,Tt=0===navigator.platform.indexOf("Win"),Mt=pt&&"transition"in _t,zt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!vt,_t="MozPerspective"in _t,Ct=!window.L_DISABLE_3D&&(Mt||zt||_t)&&!o&&!Lt,Zt="undefined"!=typeof orientation||y("mobile"),St=Zt&&ft,Et=Zt&&zt,kt=!window.PointerEvent&&window.MSPointerEvent,Ot=!(!window.PointerEvent&&!kt),At="ontouchstart"in window||!!window.TouchEvent,Bt=!window.L_NO_TOUCH&&(At||Ot),It=Zt&&xt,Rt=Zt&&bt,Nt=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),Dt=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",u,e),window.removeEventListener("testPassiveEventSupport",u,e)}catch(t){}return t}(),jt=!!document.createElement("canvas").getContext,Ht=!(!document.createElementNS||!ct("svg").createSVGRect),Wt=!!Ht&&((Wt=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(Wt.firstChild&&Wt.firstChild.namespaceURI));function y(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var b={ie:pt,ielt9:mt,edge:n,webkit:ft,android:gt,android23:vt,androidStock:yt,opera:xt,chrome:wt,gecko:bt,safari:Pt,phantom:Lt,opera12:o,win:Tt,ie3d:Mt,webkit3d:zt,gecko3d:_t,any3d:Ct,mobile:Zt,mobileWebkit:St,mobileWebkit3d:Et,msPointer:kt,pointer:Ot,touch:Bt,touchNative:At,mobileOpera:It,mobileGecko:Rt,retina:Nt,passiveEvents:Dt,canvas:jt,svg:Ht,vml:!Ht&&function(){try{var t=document.createElement("div"),e=(t.innerHTML='<v:shape adj="1"/>',t.firstChild);return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}(),inlineSvg:Wt,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},Ft=b.msPointer?"MSPointerDown":"pointerdown",Ut=b.msPointer?"MSPointerMove":"pointermove",Vt=b.msPointer?"MSPointerUp":"pointerup",qt=b.msPointer?"MSPointerCancel":"pointercancel",Gt={touchstart:Ft,touchmove:Ut,touchend:Vt,touchcancel:qt},Kt={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&O(e);ee(t,e)},touchmove:ee,touchend:ee,touchcancel:ee},Yt={},Xt=!1;function Jt(t,e,i){return"touchstart"!==e||Xt||(document.addEventListener(Ft,$t,!0),document.addEventListener(Ut,Qt,!0),document.addEventListener(Vt,te,!0),document.addEventListener(qt,te,!0),Xt=!0),Kt[e]?(i=Kt[e].bind(this,i),t.addEventListener(Gt[e],i,!1),i):(console.warn("wrong event specified:",e),u)}function $t(t){Yt[t.pointerId]=t}function Qt(t){Yt[t.pointerId]&&(Yt[t.pointerId]=t)}function te(t){delete Yt[t.pointerId]}function ee(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],Yt)e.touches.push(Yt[i]);e.changedTouches=[e],t(e)}}var ie=200;function ne(t,i){t.addEventListener("dblclick",i);var n,o=0;function e(t){var e;1!==t.detail?n=t.detail:"mouse"===t.pointerType||t.sourceCapabilities&&!t.sourceCapabilities.firesTouchEvents||((e=Ne(t)).some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})&&!e.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})||((e=Date.now())-o<=ie?2===++n&&i(function(t){var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return(t=n).type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}(t)):n=1,o=e))}return t.addEventListener("click",e),{dblclick:i,simDblclick:e}}var oe,se,re,ae,he,le,ue=we(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ce=we(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===ce||"OTransition"===ce?ce+"End":"transitionend";function _e(t){return"string"==typeof t?document.getElementById(t):t}function pe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];return"auto"===(i=i&&"auto"!==i||!document.defaultView?i:(t=document.defaultView.getComputedStyle(t,null))?t[e]:null)?null:i}function P(t,e,i){t=document.createElement(t);return t.className=e||"",i&&i.appendChild(t),t}function T(t){var e=t.parentNode;e&&e.removeChild(t)}function me(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function fe(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ge(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ve(t,e){return void 0!==t.classList?t.classList.contains(e):0<(t=xe(t)).length&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t)}function M(t,e){var i;if(void 0!==t.classList)for(var n=F(e),o=0,s=n.length;o<s;o++)t.classList.add(n[o]);else ve(t,e)||ye(t,((i=xe(t))?i+" ":"")+e)}function z(t,e){void 0!==t.classList?t.classList.remove(e):ye(t,W((" "+xe(t)+" ").replace(" "+e+" "," ")))}function ye(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function xe(t){return void 0===(t=t.correspondingElement?t.correspondingElement:t).className.baseVal?t.className:t.className.baseVal}function C(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}}function we(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function be(t,e,i){e=e||new p(0,0);t.style[ue]=(b.ie3d?"translate("+e.x+"px,"+e.y+"px)":"translate3d("+e.x+"px,"+e.y+"px,0)")+(i?" scale("+i+")":"")}function Z(t,e){t._leaflet_pos=e,b.any3d?be(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Pe(t){return t._leaflet_pos||new p(0,0)}function Le(){S(window,"dragstart",O)}function Te(){k(window,"dragstart",O)}function Me(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(ze(),le=(he=t).style.outlineStyle,t.style.outlineStyle="none",S(window,"keydown",ze))}function ze(){he&&(he.style.outlineStyle=le,le=he=void 0,k(window,"keydown",ze))}function Ce(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Ze(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}ae="onselectstart"in document?(re=function(){S(window,"selectstart",O)},function(){k(window,"selectstart",O)}):(se=we(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]),re=function(){var t;se&&(t=document.documentElement.style,oe=t[se],t[se]="none")},function(){se&&(document.documentElement.style[se]=oe,oe=void 0)});pt={__proto__:null,TRANSFORM:ue,TRANSITION:ce,TRANSITION_END:de,get:_e,getStyle:pe,create:P,remove:T,empty:me,toFront:fe,toBack:ge,hasClass:ve,addClass:M,removeClass:z,setClass:ye,getClass:xe,setOpacity:C,testProp:we,setTransform:be,setPosition:Z,getPosition:Pe,get disableTextSelection(){return re},get enableTextSelection(){return ae},disableImageDrag:Le,enableImageDrag:Te,preventOutline:Me,restoreOutline:ze,getSizedParentNode:Ce,getScale:Ze};function S(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)ke(t,o,e[o],i);else for(var s=0,r=(e=F(e)).length;s<r;s++)ke(t,e[s],i,n);return this}var E="_leaflet_events";function k(t,e,i,n){if(1===arguments.length)Se(t),delete t[E];else if(e&&"object"==typeof e)for(var o in e)Oe(t,o,e[o],i);else if(e=F(e),2===arguments.length)Se(t,function(t){return-1!==G(e,t)});else for(var s=0,r=e.length;s<r;s++)Oe(t,e[s],i,n);return this}function Se(t,e){for(var i in t[E]){var n=i.split(/\d/)[0];e&&!e(n)||Oe(t,n,null,null,i)}}var Ee={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ke(e,t,i,n){var o,s,r=t+h(i)+(n?"_"+h(n):"");e[E]&&e[E][r]||(s=o=function(t){return i.call(n||e,t||window.event)},!b.touchNative&&b.pointer&&0===t.indexOf("touch")?o=Jt(e,t,o):b.touch&&"dblclick"===t?o=ne(e,o):"addEventListener"in e?"touchstart"===t||"touchmove"===t||"wheel"===t||"mousewheel"===t?e.addEventListener(Ee[t]||t,o,!!b.passiveEvents&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?e.addEventListener(Ee[t],o=function(t){t=t||window.event,We(e,t)&&s(t)},!1):e.addEventListener(t,s,!1):e.attachEvent("on"+t,o),e[E]=e[E]||{},e[E][r]=o)}function Oe(t,e,i,n,o){o=o||e+h(i)+(n?"_"+h(n):"");var s,r,i=t[E]&&t[E][o];i&&(!b.touchNative&&b.pointer&&0===e.indexOf("touch")?(n=t,r=i,Gt[s=e]?n.removeEventListener(Gt[s],r,!1):console.warn("wrong event specified:",s)):b.touch&&"dblclick"===e?(n=i,(r=t).removeEventListener("dblclick",n.dblclick),r.removeEventListener("click",n.simDblclick)):"removeEventListener"in t?t.removeEventListener(Ee[e]||e,i,!1):t.detachEvent("on"+e,i),t[E][o]=null)}function Ae(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Be(t){return ke(t,"wheel",Ae),this}function Ie(t){return S(t,"mousedown touchstart dblclick contextmenu",Ae),t._leaflet_disable_click=!0,this}function O(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Re(t){return O(t),Ae(t),this}function Ne(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function De(t,e){var i,n;return e?(n=(i=Ze(e)).boundingClientRect,new p((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)):new p(t.clientX,t.clientY)}var je=b.linux&&b.chrome?window.devicePixelRatio:b.mac?3*window.devicePixelRatio:0<window.devicePixelRatio?2*window.devicePixelRatio:1;function He(t){return b.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/je:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function We(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}var mt={__proto__:null,on:S,off:k,stopPropagation:Ae,disableScrollPropagation:Be,disableClickPropagation:Ie,preventDefault:O,stop:Re,getPropagationPath:Ne,getMousePosition:De,getWheelDelta:He,isExternalTarget:We,addListener:S,removeListener:k},Fe=it.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pe(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=x(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){t=this._startPos.add(this._offset.multiplyBy(t));e&&t._round(),Z(this._el,t),this.fire("step")},_complete:function(){r(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),A=it.extend({options:{crs:lt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=c(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(w(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ce&&b.any3d&&!b.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),S(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if((e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(w(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i)&&(void 0!==i.animate&&(i.zoom=l({animate:i.animate},i.zoom),i.pan=l({animate:i.animate,duration:i.duration},i.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),t=(t instanceof p?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),n=this.containerPointToLatLng(o.add(t));return this.setView(n,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():g(t);var i=m(e.paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));return(o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0?{center:t.getCenter(),zoom:o}:(e=n.subtract(i).divideBy(2),n=this.project(t.getSouthWest(),o),i=this.project(t.getNorthEast(),o),{center:this.unproject(n.add(i).divideBy(2).add(e),o),zoom:o})},fitBounds:function(t,e){if((t=g(t)).isValid())return t=this._getBoundsCenterZoom(t,e),this.setView(t.center,t.zoom,e);throw new Error("Bounds are not valid.")},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){var i;return e=e||{},(t=m(t).round()).x||t.y?(!0===e.animate||this.getSize().contains(t)?(this._panAnim||(this._panAnim=new Fe,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate?(M(this._mapPane,"leaflet-pan-anim"),i=this._getMapPanePos().subtract(t).round(),this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)):(this._rawPanBy(t),this.fire("move").fire("moveend"))):this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this):this.fire("moveend")},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!b.any3d)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),e=this.getSize(),a=this._zoom,h=(n=w(n),o=void 0===o?a:o,Math.max(e.x,e.y)),i=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,u=1.42,c=u*u;function d(t){t=(i*i-h*h+(t?-1:1)*c*c*l*l)/(2*(t?i:h)*c*l),t=Math.sqrt(t*t+1)-t;return t<1e-9?-18:Math.log(t)}function _(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=d(0);function f(t){return h*(p(m)*(_(t=m+u*t)/p(t))-_(m))/c}var g=Date.now(),v=(d(1)-m)/u,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var e=(Date.now()-g)/y,i=(1-Math.pow(1-e,1.5))*v;e<=1?(this._flyToFrame=x(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i)/l)),a),this.getScaleZoom(h/(e=i,h*(p(m)/p(m+u*e))),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,e){t=this._getBoundsCenterZoom(t,e);return this.flyTo(t.center,t.zoom,e)},setMaxBounds:function(t){return t=g(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),t=this._limitCenter(i,this._zoom,g(t));return i.equals(t)||this.panTo(t,e),this._enforcingBounds=!1,this},panInside:function(t,e){var i=m((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),t=this.project(t),s=this.getPixelBounds(),i=_([s.min.add(i),s.max.subtract(n)]),s=i.getSize();return i.contains(t)||(this._enforcingBounds=!0,n=t.subtract(i.getCenter()),i=i.extend(t).getSize().subtract(s),o.x+=n.x<0?-i.x:i.x,o.y+=n.y<0?-i.y:i.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1),this},invalidateSize:function(t){if(!this._loaded)return this;t=l({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize(),i=(this._sizeChanged=!0,this._lastCenter=null,this.getSize()),n=e.divideBy(2).round(),o=i.divideBy(2).round(),n=n.subtract(o);return n.x||n.y?(t.animate&&t.pan?this.panBy(n):(t.pan&&this._rawPanBy(n),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){var e,i;return t=this._locateOptions=l({timeout:1e4,watch:!1},t),"geolocation"in navigator?(e=a(this._handleGeolocationResponse,this),i=a(this._handleGeolocationError,this),t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t)):this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e;this._container._leaflet_id&&(e=t.code,t=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout"),this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+t+"."}))},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e,i,n=new v(t.coords.latitude,t.coords.longitude),o=n.toBounds(2*t.coords.accuracy),s=this._locateOptions,r=(s.setView&&(e=this.getBoundsZoom(o),this.setView(n,s.maxZoom?Math.min(e,s.maxZoom):e)),{latlng:n,bounds:o,timestamp:t.timestamp});for(i in t.coords)"number"==typeof t.coords[i]&&(r[i]=t.coords[i]);this.fire("locationfound",r)}},addHandler:function(t,e){return e&&(e=this[t]=new e(this),this._handlers.push(e),this.options[t]&&e.enable()),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}for(var t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),T(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(r(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)T(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){e=P("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new s(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=g(t),i=m(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),t=t.getSouthEast(),i=this.getSize().subtract(i),t=_(this.project(t,n),this.project(r,n)).getSize(),r=b.any3d?this.options.zoomSnap:1,a=i.x/t.x,i=i.y/t.y,t=e?Math.max(a,i):Math.min(a,i),n=this.getScaleZoom(t,n);return r&&(n=Math.round(n/(r/100))*(r/100),n=e?Math.ceil(n/r)*r:Math.floor(n/r)*r),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new p(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){t=this._getTopLeftPoint(t,e);return new f(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs,t=(e=void 0===e?this._zoom:e,i.zoom(t*i.scale(e)));return isNaN(t)?1/0:t},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(w(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(m(t),e)},layerPointToLatLng:function(t){t=m(t).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(t){return this.project(w(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(w(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(g(t))},distance:function(t,e){return this.options.crs.distance(w(t),w(e))},containerPointToLayerPoint:function(t){return m(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return m(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){t=this.containerPointToLayerPoint(m(t));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)))},mouseEventToContainerPoint:function(t){return De(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){t=this._container=_e(t);if(!t)throw new Error("Map container not found.");if(t._leaflet_id)throw new Error("Map container is already initialized.");S(t,"scroll",this._onScroll,this),this._containerId=h(t)},_initLayout:function(){var t=this._container,e=(this._fadeAnimated=this.options.fadeAnimation&&b.any3d,M(t,"leaflet-container"+(b.touch?" leaflet-touch":"")+(b.retina?" leaflet-retina":"")+(b.ielt9?" leaflet-oldie":"")+(b.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":"")),pe(t,"position"));"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Z(this._mapPane,new p(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(M(t.markerPane,"leaflet-zoom-hide"),M(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){Z(this._mapPane,new p(0,0));var n=!this._loaded,o=(this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset"),this._zoom!==e);this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return r(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Z(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var e=t?k:S;e((this._targets[h(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),b.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){r(this._resizeRequest),this._resizeRequest=x(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,s=t.target||t.srcElement,r=!1;s;){if((i=this._targets[h(s)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){r=!0;break}if(i&&i.listens(e,!0)){if(o&&!We(s,t))break;if(n.push(i),o)break}if(s===this._container)break;s=s.parentNode}return n=n.length||r||o||!this.listens(e,!0)?n:[this]},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e,i=t.target||t.srcElement;!this._loaded||i._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(i)||("mousedown"===(e=t.type)&&Me(i),this._fireDOMEvent(t,e))},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){"click"===t.type&&((a=l({},t)).type="preclick",this._fireDOMEvent(a,a.type,i));var n=this._findEventTargets(t,e);if(i){for(var o=[],s=0;s<i.length;s++)i[s].listens(e,!0)&&o.push(i[s]);n=o.concat(n)}if(n.length){"contextmenu"===e&&O(t);var r,a=n[0],h={originalEvent:t};for("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type&&(r=a.getLatLng&&(!a._radius||a._radius<=10),h.containerPoint=r?this.latLngToContainerPoint(a.getLatLng()):this.mouseEventToContainerPoint(t),h.layerPoint=this.containerPointToLayerPoint(h.containerPoint),h.latlng=r?a.getLatLng():this.layerPointToLatLng(h.layerPoint)),s=0;s<n.length;s++)if(n[s].fire(e,h,!0),h.originalEvent._stopped||!1===n[s].options.bubblingMouseEvents&&-1!==G(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Pe(this._mapPane)||new p(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){i=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,e,i){i=this._getNewPixelOrigin(i,e);return _([this.project(t.getSouthWest(),e)._subtract(i),this.project(t.getNorthWest(),e)._subtract(i),this.project(t.getSouthEast(),e)._subtract(i),this.project(t.getNorthEast(),e)._subtract(i)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){var n,o;return!i||(n=this.project(t,e),o=this.getSize().divideBy(2),o=new f(n.subtract(o),n.add(o)),o=this._getBoundsOffset(o,i,e),Math.abs(o.x)<=1&&Math.abs(o.y)<=1)?t:this.unproject(n.add(o),e)},_limitOffset:function(t,e){var i;return e?(i=new f((i=this.getPixelBounds()).min.add(t),i.max.add(t)),t.add(this._getBoundsOffset(i,e))):t},_getBoundsOffset:function(t,e,i){e=_(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),i=e.min.subtract(t.min),e=e.max.subtract(t.max);return new p(this._rebound(i.x,-e.x),this._rebound(i.y,-e.y))},_rebound:function(t,e){return 0<t+e?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=b.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){z(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){t=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(t))&&(this.panBy(t,e),!0)},_createAnimProxy:function(){var t=this._proxy=P("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=ue,i=this._proxy.style[e];be(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),i===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){T(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();be(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(!this._animatingZoom){if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),n=this._getCenterOffset(t)._divideBy(1-1/n);if(!0!==i.animate&&!this.getSize().contains(n))return!1;x(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this)}return!0},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,M(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&z(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ue(t){return new B(t)}var B=et.extend({options:{position:"topright"},initialize:function(t){c(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),t=t._controlCorners[i];return M(e,"leaflet-control"),-1!==i.indexOf("bottom")?t.insertBefore(e,t.firstChild):t.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(T(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}}),Ve=(A.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var i=this._controlCorners={},n="leaflet-",o=this._controlContainer=P("div",n+"control-container",this._container);function t(t,e){i[t+e]=P("div",n+t+" "+n+e,o)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)T(this._controlCorners[t]);T(this._controlContainer),delete this._controlCorners,delete this._controlContainer}}),B.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in c(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return B.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);t=this._getLayer(h(t));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){M(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(M(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):z(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return z(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=P("div",t),i=this.options.collapsed,n=(e.setAttribute("aria-haspopup",!0),Ie(e),Be(e),this._section=P("section",t+"-list")),o=(i&&(this._map.on("click",this.collapse,this),S(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this)),this._layersLink=P("a",t+"-toggle",e));o.href="#",o.title="Layers",o.setAttribute("role","button"),S(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},click:function(t){O(t),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=P("div",t+"-base",n),this._separator=P("div",t+"-separator",n),this._overlaysList=P("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&h(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(a(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(this._container){me(this._baseLayersList),me(this._overlaysList),this._layerControlInputs=[];for(var t,e,i,n=0,o=0;o<this._layers.length;o++)i=this._layers[o],this._addItem(i),e=e||i.overlay,t=t||!i.overlay,n+=i.overlay?0:1;this.options.hideSingleBase&&(this._baseLayersList.style.display=(t=t&&1<n)?"":"none"),this._separator.style.display=e&&t?"":"none"}return this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(h(t.target)),t=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;t&&this._map.fire(t,e)},_createRadioElement:function(t,e){t='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",e=document.createElement("div");return e.innerHTML=t,e.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer),n=(t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+h(this),n),this._layerControlInputs.push(e),e.layerId=h(t.layer),S(e,"click",this._onInputClick,this),document.createElement("span")),o=(n.innerHTML=" "+t.name,document.createElement("span"));return i.appendChild(o),o.appendChild(e),o.appendChild(n),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=i.length-1;0<=s;s--)t=i[s],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;0<=o;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section,e=(this._preventClick=!0,S(t,"click",O),this.expand(),this);setTimeout(function(){k(t,"click",O),e._preventClick=!1})}})),qe=B.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=P("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){i=P("a",i,n);return i.innerHTML=t,i.href="#",i.title=e,i.setAttribute("role","button"),i.setAttribute("aria-label",e),Ie(i),S(i,"click",Re),S(i,"click",o,this),S(i,"click",this._refocusOnMap,this),i},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";z(this._zoomInButton,e),z(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),!this._disabled&&t._zoom!==t.getMinZoom()||(M(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),!this._disabled&&t._zoom!==t.getMaxZoom()||(M(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}}),Ge=(A.mergeOptions({zoomControl:!0}),A.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new qe,this.addControl(this.zoomControl))}),B.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=P("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=P("div",e,i)),t.imperial&&(this._iScale=P("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,t=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(t)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t);this._updateScale(this._mScale,e<1e3?e+" m":e/1e3+" km",e/t)},_updateImperial:function(t){var e,i,t=3.2808399*t;5280<t?(i=this._getRoundNum(e=t/5280),this._updateScale(this._iScale,i+" mi",i/e)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+" ft",i/t))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),t=t/e;return e*(t=10<=t?10:5<=t?5:3<=t?3:2<=t?2:1)}})),Ke=B.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(b.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){c(this,t),this._attributions={}},onAdd:function(t){for(var e in(t.attributionControl=this)._container=P("div","leaflet-control-attribution"),Ie(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t,e=[];for(t in this._attributions)this._attributions[t]&&e.push(t);var i=[];this.options.prefix&&i.push(this.options.prefix),e.length&&i.push(e.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}}),n=(A.mergeOptions({attributionControl:!0}),A.addInitHook(function(){this.options.attributionControl&&(new Ke).addTo(this)}),B.Layers=Ve,B.Zoom=qe,B.Scale=Ge,B.Attribution=Ke,Ue.layers=function(t,e,i){return new Ve(t,e,i)},Ue.zoom=function(t){return new qe(t)},Ue.scale=function(t){return new Ge(t)},Ue.attribution=function(t){return new Ke(t)},et.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}})),ft=(n.addTo=function(t,e){return t.addHandler(e,this),this},{Events:e}),Ye=b.touch?"touchstart mousedown":"mousedown",Xe=it.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){c(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(S(this._dragStartTarget,Ye,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Xe._dragging===this&&this.finishDrag(!0),k(this._dragStartTarget,Ye,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){var e,i;this._enabled&&(this._moved=!1,ve(this._element,"leaflet-zoom-anim")||(t.touches&&1!==t.touches.length?Xe._dragging===this&&this.finishDrag():Xe._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((Xe._dragging=this)._preventOutline&&Me(this._element),Le(),re(),this._moving||(this.fire("down"),i=t.touches?t.touches[0]:t,e=Ce(this._element),this._startPoint=new p(i.clientX,i.clientY),this._startPos=Pe(this._element),this._parentScale=Ze(e),i="mousedown"===t.type,S(document,i?"mousemove":"touchmove",this._onMove,this),S(document,i?"mouseup":"touchend touchcancel",this._onUp,this)))))},_onMove:function(t){var e;this._enabled&&(t.touches&&1<t.touches.length?this._moved=!0:!(e=new p((e=t.touches&&1===t.touches.length?t.touches[0]:t).clientX,e.clientY)._subtract(this._startPoint)).x&&!e.y||Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,O(t),this._moved||(this.fire("dragstart"),this._moved=!0,M(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),M(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,this._lastEvent=t,this._updatePosition()))},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Z(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){z(document.body,"leaflet-dragging"),this._lastTarget&&(z(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),k(document,"mousemove touchmove",this._onMove,this),k(document,"mouseup touchend touchcancel",this._onUp,this),Te(),ae();var e=this._moved&&this._moving;this._moving=!1,Xe._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Je(t,e,i){for(var n,o,s,r,a,h,l,u=[1,4,2,8],c=0,d=t.length;c<d;c++)t[c]._code=si(t[c],e);for(s=0;s<4;s++){for(h=u[s],n=[],c=0,o=(d=t.length)-1;c<d;o=c++)r=t[c],a=t[o],r._code&h?a._code&h||((l=oi(a,r,h,e,i))._code=si(l,e),n.push(l)):(a._code&h&&((l=oi(a,r,h,e,i))._code=si(l,e),n.push(l)),n.push(r));t=n}return t}function $e(t,e){var i,n,o,s,r,a,h;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);for(var l=w([0,0]),u=g(t),c=(u.getNorthWest().distanceTo(u.getSouthWest())*u.getNorthEast().distanceTo(u.getNorthWest())<1700&&(l=Qe(t)),t.length),d=[],_=0;_<c;_++){var p=w(t[_]);d.push(e.project(w([p.lat-l.lat,p.lng-l.lng])))}for(_=r=a=h=0,i=c-1;_<c;i=_++)n=d[_],o=d[i],s=n.y*o.x-o.y*n.x,a+=(n.x+o.x)*s,h+=(n.y+o.y)*s,r+=3*s;u=0===r?d[0]:[a/r,h/r],u=e.unproject(m(u));return w([u.lat+l.lat,u.lng+l.lng])}function Qe(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var s=w(t[o]);e+=s.lat,i+=s.lng,n++}return w([e/n,i/n])}var ti,gt={__proto__:null,clipPolygon:Je,polygonCenter:$e,centroid:Qe};function ei(t,e){if(e&&t.length){var i=t=function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)(function(t,e){var i=e.x-t.x,e=e.y-t.y;return i*i+e*e})(t[n],t[o])>e&&(i.push(t[n]),o=n);o<s-1&&i.push(t[s-1]);return i}(t,e=e*e),n=i.length,o=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(n);o[0]=o[n-1]=1,function t(e,i,n,o,s){var r,a,h,l=0;for(a=o+1;a<=s-1;a++)h=ri(e[a],e[o],e[s],!0),l<h&&(r=a,l=h);n<l&&(i[r]=1,t(e,i,n,o,r),t(e,i,n,r,s))}(i,o,e,0,n-1);var s,r=[];for(s=0;s<n;s++)o[s]&&r.push(i[s]);return r}return t.slice()}function ii(t,e,i){return Math.sqrt(ri(t,e,i,!0))}function ni(t,e,i,n,o){var s,r,a,h=n?ti:si(t,i),l=si(e,i);for(ti=l;;){if(!(h|l))return[t,e];if(h&l)return!1;a=si(r=oi(t,e,s=h||l,i,o),i),s===h?(t=r,h=a):(e=r,l=a)}}function oi(t,e,i,n,o){var s,r,a=e.x-t.x,e=e.y-t.y,h=n.min,n=n.max;return 8&i?(s=t.x+a*(n.y-t.y)/e,r=n.y):4&i?(s=t.x+a*(h.y-t.y)/e,r=h.y):2&i?(s=n.x,r=t.y+e*(n.x-t.x)/a):1&i&&(s=h.x,r=t.y+e*(h.x-t.x)/a),new p(s,r,o)}function si(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ri(t,e,i,n){var o=e.x,e=e.y,s=i.x-o,r=i.y-e,a=s*s+r*r;return 0<a&&(1<(a=((t.x-o)*s+(t.y-e)*r)/a)?(o=i.x,e=i.y):0<a&&(o+=s*a,e+=r*a)),s=t.x-o,r=t.y-e,n?s*s+r*r:new p(o,e)}function I(t){return!d(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function ai(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),I(t)}function hi(t,e){var i,n,o,s,r,a;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);for(var h=w([0,0]),l=g(t),u=(l.getNorthWest().distanceTo(l.getSouthWest())*l.getNorthEast().distanceTo(l.getNorthWest())<1700&&(h=Qe(t)),t.length),c=[],d=0;d<u;d++){var _=w(t[d]);c.push(e.project(w([_.lat-h.lat,_.lng-h.lng])))}for(i=d=0;d<u-1;d++)i+=c[d].distanceTo(c[d+1])/2;if(0===i)a=c[0];else for(n=d=0;d<u-1;d++)if(o=c[d],s=c[d+1],i<(n+=r=o.distanceTo(s))){a=[s.x-(r=(n-i)/r)*(s.x-o.x),s.y-r*(s.y-o.y)];break}l=e.unproject(m(a));return w([l.lat+h.lat,l.lng+h.lng])}var vt={__proto__:null,simplify:ei,pointToSegmentDistance:ii,closestPointOnSegment:function(t,e,i){return ri(t,e,i)},clipSegment:ni,_getEdgeIntersection:oi,_getBitCode:si,_sqClosestPointOnSegment:ri,isFlat:I,_flat:ai,polylineCenter:hi},yt={project:function(t){return new p(t.lng,t.lat)},unproject:function(t){return new v(t.y,t.x)},bounds:new f([-180,-90],[180,90])},xt={R:6378137,R_MINOR:6356752.314245179,bounds:new f([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,o=Math.sqrt(1-o*o),s=o*Math.sin(n),s=Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),o/2),n=-i*Math.log(Math.max(s,1e-10));return new p(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,l=.1;h<15&&1e-7<Math.abs(l);h++)e=s*Math.sin(a),e=Math.pow((1-e)/(1+e),s/2),a+=l=Math.PI/2-2*Math.atan(r*e)-a;return new v(a*i,t.x*i/n)}},wt={__proto__:null,LonLat:yt,Mercator:xt,SphericalMercator:rt},Pt=l({},st,{code:"EPSG:3395",projection:xt,transformation:ht(bt=.5/(Math.PI*xt.R),.5,-bt,.5)}),li=l({},st,{code:"EPSG:4326",projection:yt,transformation:ht(1/180,1,-1/180,.5)}),Lt=l({},ot,{projection:yt,transformation:ht(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,e=e.lat-t.lat;return Math.sqrt(i*i+e*e)},infinite:!0}),o=(ot.Earth=st,ot.EPSG3395=Pt,ot.EPSG3857=lt,ot.EPSG900913=ut,ot.EPSG4326=li,ot.Simple=Lt,it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[h(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[h(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e,i=t.target;i.hasLayer(this)&&(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents&&(e=this.getEvents(),i.on(e,this),this.once("remove",function(){i.off(e,this)},this)),this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this}))}})),ui=(A.include({addLayer:function(t){var e;if(t._layerAdd)return e=h(t),this._layers[e]||((this._layers[e]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this;throw new Error("The provided object is not a Layer.")},removeLayer:function(t){var e=h(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return h(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){for(var e=0,i=(t=t?d(t)?t:[t]:[]).length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[h(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){t=h(t);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var t,e=1/0,i=-1/0,n=this._getZoomSpan();for(t in this._zoomBoundLayers)var o=this._zoomBoundLayers[t].options,e=void 0===o.minZoom?e:Math.min(e,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom);this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}}),o.extend({initialize:function(t,e){var i,n;if(c(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){t=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:h})),ci=ui.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),ui.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?((t=t in this._layers?this._layers[t]:t).removeEventParent(this),ui.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t,e=new s;for(t in this._layers){var i=this._layers[t];e.extend(i.getBounds?i.getBounds():i.getLatLng())}return e}}),di=et.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){c(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(i)return i=this._createImg(i,e&&"IMG"===e.tagName?e:null),this._setIconStyles(i,t),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i;if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"],n=m(n="number"==typeof n?[n,n]:n),o=m("shadow"===e&&i.shadowAnchor||i.iconAnchor||n&&n.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),n&&(t.style.width=n.x+"px",t.style.height=n.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return b.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var _i=di.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return"string"!=typeof _i.imagePath&&(_i.imagePath=this._detectIconPath()),(this.options.imagePath||_i.imagePath)+di.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){function e(t,e,i){return(e=e.exec(t))&&e[i]}return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=P("div","leaflet-default-icon-path",document.body),e=pe(t,"background-image")||pe(t,"backgroundImage");return document.body.removeChild(t),(e=this._stripUrl(e))?e:(t=document.querySelector('link[href$="leaflet.css"]'))?t.href.substring(0,t.href.length-"leaflet.css".length-1):""}}),pi=n.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Xe(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),M(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&z(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Pe(e._icon),r=i.getPixelBounds(),a=i.getPixelOrigin(),a=_(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));a.contains(s)||(o=m((Math.max(a.max.x,s.x)-a.max.x)/(r.max.x-a.max.x)-(Math.min(a.min.x,s.x)-a.min.x)/(r.min.x-a.min.x),(Math.max(a.max.y,s.y)-a.max.y)/(r.max.y-a.max.y)-(Math.min(a.min.y,s.y)-a.min.y)/(r.min.y-a.min.y)).multiplyBy(n),i.panBy(o,{animate:!1}),this._draggable._newPos._add(o),this._draggable._startPos._add(o),Z(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(r(this._panRequest),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Pe(e._icon),o=e._map.layerPointToLatLng(n);i&&Z(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){r(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),mi=o.extend({options:{icon:new _i,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){c(this,e),this._latlng=w(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){var t;return this._icon&&this._map&&(t=this._map.latLngToLayerPoint(this._latlng).round(),this._setPos(t)),this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1,i=(i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),M(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&S(i,"focus",this._panOnFocus,this),t.icon.createShadow(this._shadow)),o=!1;i!==this._shadow&&(this._removeShadow(),o=!0),i&&(M(i,e),i.alt=""),this._shadow=i,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&k(this._icon,"focus",this._panOnFocus,this),T(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&T(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Z(this._icon,t),this._shadow&&Z(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(t)},_initInteraction:function(){var t;this.options.interactive&&(M(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),pi&&(t=this.options.draggable,this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new pi(this),t&&this.dragging.enable()))},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&C(this._icon,t),this._shadow&&C(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t,e,i=this._map;i&&(t=(e=this.options.icon.options).iconSize?m(e.iconSize):m(0,0),e=e.iconAnchor?m(e.iconAnchor):m(0,0),i.panInside(this._latlng,{paddingTopLeft:e,paddingBottomRight:t.subtract(e)}))},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var fi=o.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return c(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),gi=fi.extend({options:{fill:!0,radius:10},initialize:function(t,e){c(this,e),this._latlng=w(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return fi.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),t=[t+i,e+i];this._pxBounds=new f(this._point.subtract(t),this._point.add(t))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var vi=gi.extend({initialize:function(t,e,i){if(c(this,e="number"==typeof e?l({},i,{radius:e}):e),this._latlng=w(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new s(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:fi.prototype.setStyle,_project:function(){var t,e,i,n,o,s=this._latlng.lng,r=this._latlng.lat,a=this._map,h=a.options.crs;h.distance===st.distance?(n=Math.PI/180,o=this._mRadius/st.R/n,t=a.project([r+o,s]),e=a.project([r-o,s]),e=t.add(e).divideBy(2),i=a.unproject(e).lat,n=Math.acos((Math.cos(o*n)-Math.sin(r*n)*Math.sin(i*n))/(Math.cos(r*n)*Math.cos(i*n)))/n,!isNaN(n)&&0!==n||(n=o/Math.cos(Math.PI/180*r)),this._point=e.subtract(a.getPixelOrigin()),this._radius=isNaN(n)?0:e.x-a.project([i,s-n]).x,this._radiusY=e.y-t.y):(o=h.unproject(h.project(this._latlng).subtract([this._mRadius,0])),this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(o).x),this._updateBounds()}});var yi=fi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){c(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ri,o=0,s=this._parts.length;o<s;o++)for(var r=this._parts[o],a=1,h=r.length;a<h;a++){var l,u,c=n(t,l=r[a-1],u=r[a],!0);c<e&&(e=c,i=n(t,l,u))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(this._map)return hi(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=w(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new s,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return I(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=I(t),n=0,o=t.length;n<o;n++)i?(e[n]=w(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new f;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),t=new p(t,t);this._rawPxBounds&&(this._pxBounds=new f([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(t,e,i){var n,o,s=t[0]instanceof v,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var e,i,n,o,s=this._parts,r=0,a=0,h=this._rings.length;r<h;r++)for(e=0,i=(o=this._rings[r]).length;e<i-1;e++)(n=ni(o[e],o[e+1],t,e,!0))&&(s[a]=s[a]||[],s[a].push(n[0]),n[1]===o[e+1]&&e!==i-2||(s[a].push(n[1]),a++))},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=ei(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,s,r,a,h=this._clickTolerance();if(this._pxBounds&&this._pxBounds.contains(t))for(i=0,s=this._parts.length;i<s;i++)for(n=0,o=(r=(a=this._parts[i]).length)-1;n<r;o=n++)if((e||0!==n)&&ii(t,a[o],a[n])<=h)return!0;return!1}});yi._flat=ai;var xi=yi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(this._map)return $e(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},_convertLatLngs:function(t){var t=yi.prototype._convertLatLngs.call(this,t),e=t.length;return 2<=e&&t[0]instanceof v&&t[0].equals(t[e-1])&&t.pop(),t},_setLatLngs:function(t){yi.prototype._setLatLngs.call(this,t),I(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return(I(this._latlngs[0])?this._latlngs:this._latlngs[0])[0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,e=new p(e,e),t=new f(t.min.subtract(e),t.max.add(e));if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var i,n=0,o=this._rings.length;n<o;n++)(i=Je(this._rings[n],t,!0)).length&&this._parts.push(i)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,i,n,o,s,r,a,h,l=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(e=this._parts[o]).length)-1;s<h;r=s++)i=e[s],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(l=!l);return l||yi.prototype._containsPoint.call(this,t,!0)}});var wi=ci.extend({initialize:function(t,e){c(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,o=d(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)((n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s,r=this.options;return(!r.filter||r.filter(t))&&(s=bi(t,r))?(s.feature=Zi(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=l({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});function bi(t,e){var i,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],l=e&&e.pointToLayer,u=e&&e.coordsToLatLng||Li;if(!a&&!r)return null;switch(r.type){case"Point":return Pi(l,t,i=u(a),e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)i=u(a[o]),h.push(Pi(l,t,i,e));return new ci(h);case"LineString":case"MultiLineString":return n=Ti(a,"LineString"===r.type?0:1,u),new yi(n,e);case"Polygon":case"MultiPolygon":return n=Ti(a,"Polygon"===r.type?1:2,u),new xi(n,e);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=bi({geometry:r.geometries[o],type:"Feature",properties:t.properties},e);c&&h.push(c)}return new ci(h);case"FeatureCollection":for(o=0,s=r.features.length;o<s;o++){var d=bi(r.features[o],e);d&&h.push(d)}return new ci(h);default:throw new Error("Invalid GeoJSON object.")}}function Pi(t,e,i,n){return t?t(e,i):new mi(i,n&&n.markersInheritOptions&&n)}function Li(t){return new v(t[1],t[0],t[2])}function Ti(t,e,i){for(var n,o=[],s=0,r=t.length;s<r;s++)n=e?Ti(t[s],e-1,i):(i||Li)(t[s]),o.push(n);return o}function Mi(t,e){return void 0!==(t=w(t)).alt?[i(t.lng,e),i(t.lat,e),i(t.alt,e)]:[i(t.lng,e),i(t.lat,e)]}function zi(t,e,i,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(e?zi(t[s],I(t[s])?0:e-1,i,n):Mi(t[s],n));return!e&&i&&0<o.length&&o.push(o[0].slice()),o}function Ci(t,e){return t.feature?l({},t.feature,{geometry:e}):Zi(e)}function Zi(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}Tt={toGeoJSON:function(t){return Ci(this,{type:"Point",coordinates:Mi(this.getLatLng(),t)})}};function Si(t,e){return new wi(t,e)}mi.include(Tt),vi.include(Tt),gi.include(Tt),yi.include({toGeoJSON:function(t){var e=!I(this._latlngs);return Ci(this,{type:(e?"Multi":"")+"LineString",coordinates:zi(this._latlngs,e?1:0,!1,t)})}}),xi.include({toGeoJSON:function(t){var e=!I(this._latlngs),i=e&&!I(this._latlngs[0]),t=zi(this._latlngs,i?2:e?1:0,!0,t);return Ci(this,{type:(i?"Multi":"")+"Polygon",coordinates:t=e?t:[t]})}}),ui.include({toMultiPoint:function(e){var i=[];return this.eachLayer(function(t){i.push(t.toGeoJSON(e).geometry.coordinates)}),Ci(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(e){var i,n,t=this.feature&&this.feature.geometry&&this.feature.geometry.type;return"MultiPoint"===t?this.toMultiPoint(e):(i="GeometryCollection"===t,n=[],this.eachLayer(function(t){t.toGeoJSON&&(t=t.toGeoJSON(e),i?n.push(t.geometry):"FeatureCollection"===(t=Zi(t)).type?n.push.apply(n,t.features):n.push(t))}),i?Ci(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n})}});var Mt=Si,Ei=o.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=g(e),c(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(M(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){T(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&fe(this._image),this},bringToBack:function(){return this._map&&ge(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=g(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:P("img");M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onload=a(this.fire,this,"load"),e.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),t=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;be(this._image,t,e)},_reset:function(){var t=this._image,e=new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();Z(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){C(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),ki=Ei.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:P("video");if(M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onloadeddata=a(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=0<i.length?n:[e.src]}else{d(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var r=P("source");r.src=this._url[s],e.appendChild(r)}}}});var Oi=Ei.extend({_initImage:function(){var t=this._image=this._url;M(t,"leaflet-image-layer"),this._zoomAnimated&&M(t,"leaflet-zoom-animated"),this.options.className&&M(t,this.options.className),t.onselectstart=u,t.onmousemove=u}});var Ai=o.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof v||d(t))?(this._latlng=w(t),c(this,e)):(c(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return(t=arguments.length?t:this._source._map).hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&C(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&C(this._container,1),this.bringToFront(),this.options.interactive&&(M(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(C(this._container,0),this._removeTimeout=setTimeout(a(T,void 0,this._container),200)):T(this._container),this.options.interactive&&(z(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=w(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&fe(this._container),this},bringToBack:function(){return this._map&&ge(this._container),this},_prepareOpen:function(t){if(!(i=this._source)._map)return!1;if(i instanceof ci){var e,i=null,n=this._source._layers;for(e in n)if(n[e]._map){i=n[e];break}if(!i)return!1;this._source=i}if(!t)if(i.getCenter)t=i.getCenter();else if(i.getLatLng)t=i.getLatLng();else{if(!i.getBounds)throw new Error("Unable to get source layer LatLng.");t=i.getBounds().getCenter()}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){var t,e,i;this._map&&(e=this._map.latLngToLayerPoint(this._latlng),t=m(this.options.offset),i=this._getAnchor(),this._zoomAnimated?Z(this._container,e.add(i)):t=t.add(e).add(i),e=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x,this._container.style.bottom=e+"px",this._container.style.left=i+"px")},_getAnchor:function(){return[0,0]}}),Bi=(A.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),o.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(c(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}}),Ai.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return!(t=arguments.length?t:this._source._map).hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ai.prototype.openOn.call(this,t)},onAdd:function(t){Ai.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof fi||this._source.on("preclick",Ae))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof fi||this._source.off("preclick",Ae))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=P("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=P("div",t+"-content-wrapper",e);this._contentNode=P("div",t+"-content",i),Ie(e),Be(this._contentNode),S(e,"contextmenu",Ae),this._tipContainer=P("div",t+"-tip-container",e),this._tip=P("div",t+"-tip",this._tipContainer),this.options.closeButton&&((i=this._closeButton=P("a",t+"-close-button",e)).setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',S(i,"click",function(t){O(t),this.close()},this))},_updateLayout:function(){var t=this._contentNode,e=t.style,i=(e.width="",e.whiteSpace="nowrap",t.offsetWidth),i=Math.min(i,this.options.maxWidth),i=(i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="",t.offsetHeight),n=this.options.maxHeight,o="leaflet-popup-scrolled";(n&&n<i?(e.height=n+"px",M):z)(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Z(this._container,t.add(e))},_adjustPan:function(){var t,e,i,n,o,s,r,a;this.options.autoPan&&(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning?this._autopanning=!1:(t=this._map,e=parseInt(pe(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+e,a=this._containerWidth,(i=new p(this._containerLeft,-e-this._containerBottom))._add(Pe(this._container)),i=t.layerPointToContainerPoint(i),o=m(this.options.autoPanPadding),n=m(this.options.autoPanPaddingTopLeft||o),o=m(this.options.autoPanPaddingBottomRight||o),s=t.getSize(),r=0,i.x+a+o.x>s.x&&(r=i.x+a-s.x+o.x),i.x-r-n.x<(a=0)&&(r=i.x-n.x),i.y+e+o.y>s.y&&(a=i.y+e-s.y+o.y),i.y-a-n.y<0&&(a=i.y-n.y),(r||a)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([r,a]))))},_getAnchor:function(){return m(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}})),Ii=(A.mergeOptions({closePopupOnClick:!0}),A.include({openPopup:function(t,e,i){return this._initOverlay(Bi,t,e,i).openOn(this),this},closePopup:function(t){return(t=arguments.length?t:this._popup)&&t.close(),this}}),o.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Bi,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ci||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e;this._popup&&this._map&&(Re(t),e=t.layer||t.target,this._popup._source!==e||e instanceof fi?(this._popup._source=e,this.openPopup(t.latlng)):this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}}),Ai.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ai.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=P("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i=this._map,n=this._container,o=i.latLngToContainerPoint(i.getCenter()),i=i.layerPointToContainerPoint(t),s=this.options.direction,r=n.offsetWidth,a=n.offsetHeight,h=m(this.options.offset),l=this._getAnchor(),i="top"===s?(e=r/2,a):"bottom"===s?(e=r/2,0):(e="center"===s?r/2:"right"===s?0:"left"===s?r:i.x<o.x?(s="right",0):(s="left",r+2*(h.x+l.x)),a/2);t=t.subtract(m(e,i,!0)).add(h).add(l),z(n,"leaflet-tooltip-right"),z(n,"leaflet-tooltip-left"),z(n,"leaflet-tooltip-top"),z(n,"leaflet-tooltip-bottom"),M(n,"leaflet-tooltip-"+s),Z(n,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&C(this._container,t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(t)},_getAnchor:function(){return m(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}})),Ri=(A.include({openTooltip:function(t,e,i){return this._initOverlay(Ii,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),o.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ii,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){var e,i;!t&&this._tooltipHandlersAdded||(e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip},this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t)},openTooltip:function(t){return this._tooltip&&(this instanceof ci||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(S(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),S(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){t="function"==typeof t.getElement&&t.getElement();t&&t.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){var e;this._tooltip&&this._map&&(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag?(this._openOnceFlag=!0,(e=this)._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)})):(this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)))},_moveTooltip:function(t){var e=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(t=this._map.mouseEventToContainerPoint(t.originalEvent),t=this._map.containerPointToLayerPoint(t),e=this._map.layerPointToLatLng(t)),this._tooltip.setLatLng(e)}}),di.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var t=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;return e.html instanceof Element?(me(t),t.appendChild(e.html)):t.innerHTML=!1!==e.html?e.html:"",e.bgPos&&(e=m(e.bgPos),t.style.backgroundPosition=-e.x+"px "+-e.y+"px"),this._setIconStyles(t,"icon"),t},createShadow:function(){return null}}));di.Default=_i;var Ni=o.extend({options:{tileSize:256,opacity:1,updateWhenIdle:b.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){c(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),T(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(fe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ge(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){var t;return this._map&&(this._removeAllTiles(),(t=this._clampZoom(this._map.getZoom()))!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=j(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof p?t:new p(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,s=i.length;o<s;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!b.ielt9){C(this._container,this.options.opacity);var t,e=+new Date,i=!1,n=!1;for(t in this._tiles){var o,s=this._tiles[t];s.current&&s.loaded&&(o=Math.min(1,(e-s.loaded)/200),C(s.el,o),o<1?i=!0:(s.active?n=!0:this._onOpaqueTile(s),s.active=!0))}n&&!this._noPrune&&this._pruneTiles(),i&&(r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this))}},_onOpaqueTile:u,_initContainer:function(){this._container||(this._container=P("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(T(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=P("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),u(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:u,_onRemoveLevel:u,_onCreateLevel:u,_pruneTiles:function(){if(this._map){var t,e,i,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)(i=this._tiles[t]).current&&!i.active&&(e=i.coords,this._retainParent(e.x,e.y,e.z,e.z-5)||this._retainChildren(e.x,e.y,e.z,e.z+2));for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)T(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var t=Math.floor(t/2),e=Math.floor(e/2),i=i-1,o=new p(+t,+e),o=(o.z=i,this._tileCoordsToKey(o)),o=this._tiles[o];return o&&o.active?o.retain=!0:(o&&o.loaded&&(o.retain=!0),n<i&&this._retainParent(t,e,i,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var r=new p(o,s),r=(r.z=i+1,this._tileCoordsToKey(r)),r=this._tiles[r];r&&r.active?r.retain=!0:(r&&r.loaded&&(r.retain=!0),i+1<n&&this._retainChildren(o,s,i+1,n))}},_resetView:function(t){t=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e),o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o),s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),e=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();b.any3d?be(t.el,e,n):Z(t.el,e)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),i=e.getZoomScale(i,this._tileZoom),t=e.project(t,this._tileZoom).floor(),e=e.getSize().divideBy(2*i);return new f(t.subtract(e),t.add(e))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var n,e=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(e),s=o.getCenter(),r=[],e=this.options.keepBuffer,a=new f(o.getBottomLeft().subtract([e,-e]),o.getTopRight().add([e,-e]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(n in this._tiles){var h=this._tiles[n].coords;h.z===this._tileZoom&&a.contains(new p(h.x,h.y))||(this._tiles[n].current=!1)}if(1<Math.abs(i-this._tileZoom))this._setView(t,i);else{for(var l=o.min.y;l<=o.max.y;l++)for(var u=o.min.x;u<=o.max.x;u++){var c,d=new p(u,l);d.z=this._tileZoom,this._isValidTile(d)&&((c=this._tiles[this._tileCoordsToKey(d)])?c.current=!0:r.push(d))}if(r.sort(function(t,e){return t.distanceTo(s)-e.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));for(var _=document.createDocumentFragment(),u=0;u<r.length;u++)this._addTile(r[u],_);this._level.el.appendChild(_)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}return!this.options.bounds||(e=this._tileCoordsToBounds(t),g(this.options.bounds).overlaps(e))},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),i=n.add(i);return[e.unproject(n,t.z),e.unproject(i,t.z)]},_tileCoordsToBounds:function(t){t=this._tileCoordsToNwSe(t),t=new s(t[0],t[1]);return t=this.options.noWrap?t:this._map.wrapLatLngBounds(t)},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var t=t.split(":"),e=new p(+t[0],+t[1]);return e.z=+t[2],e},_removeTile:function(t){var e=this._tiles[t];e&&(T(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){M(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=u,t.onmousemove=u,b.ielt9&&this.options.opacity<1&&C(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&x(a(this._tileReady,this,t,null,o)),Z(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(C(i.el,0),r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(M(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),b.ielt9||!this._map._fadeAnimated?x(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new p(this._wrapX?H(t.x,this._wrapX):t.x,this._wrapY?H(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new f(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var Di=Ni.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=c(this,e)).detectRetina&&b.retina&&0<e.maxZoom?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return S(i,"load",a(this._tileOnLoad,this,e,i)),S(i,"error",a(this._tileOnError,this,e,i)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:b.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};return this._map&&!this._map.options.crs.infinite&&(t=this._globalTileRange.max.y-t.y,this.options.tms&&(e.y=t),e["-y"]=t),q(this._url,l(e,this.options))},_tileOnLoad:function(t,e){b.ielt9?setTimeout(a(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom;return(t=this.options.zoomReverse?e-t:t)+this.options.zoomOffset},_getSubdomain:function(t){t=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var t,e,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=u,i.onerror=u,i.complete||(i.src=K,e=this._tiles[t].coords,T(i),delete this._tiles[t],this.fire("tileabort",{tile:i,coords:e})))},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",K),Ni.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==K))return Ni.prototype._tileReady.call(this,t,e,i)}});function ji(t,e){return new Di(t,e)}var Hi=Di.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i,n=l({},this.defaultWmsParams);for(i in e)i in this.options||(n[i]=e[i]);var t=(e=c(this,e)).detectRetina&&b.retina?2:1,o=this.getTileSize();n.width=o.x*t,n.height=o.y*t,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[e]=this._crs.code,Di.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,i=_(i.project(e[0]),i.project(e[1])),e=i.min,i=i.max,e=(1.3<=this._wmsVersion&&this._crs===li?[e.y,e.x,i.y,i.x]:[e.x,e.y,i.x,i.y]).join(","),i=Di.prototype.getTileUrl.call(this,t);return i+U(this.wmsParams,i,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+e},setParams:function(t,e){return l(this.wmsParams,t),e||this.redraw(),this}});Di.WMS=Hi,ji.wms=function(t,e){return new Hi(t,e)};var Wi=o.extend({options:{padding:.1},initialize:function(t){c(this,t),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),M(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),n=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));b.any3d?be(this._container,n,i):Z(this._container,n)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new f(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Fi=Wi.extend({options:{tolerance:0},getEvents:function(){var t=Wi.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Wi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");S(t,"mousemove",this._onMouseMove,this),S(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),S(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){r(this._redrawRequest),delete this._ctx,T(this._container),k(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){var t,e,i,n;this._map._animatingZoom&&this._bounds||(Wi.prototype._update.call(this),t=this._bounds,e=this._container,i=t.getSize(),n=b.retina?2:1,Z(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",b.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update"))},_reset:function(){Wi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);t=(this._layers[h(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,e=e.prev;i?i.prev=e:this._drawLast=e,e?e.next=i:this._drawFirst=i,delete t._order,delete this._layers[h(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){for(var e,i=t.options.dashArray.split(/[, ]+/),n=[],o=0;o<i.length;o++){if(e=Number(i[o]),isNaN(e))return;n.push(e)}t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||x(this._redraw,this))},_extendRedrawBounds:function(t){var e;t._pxBounds&&(e=(t.options.weight||0)+1,this._redrawBounds=this._redrawBounds||new f,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e])))},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t,e=this._redrawBounds;e?(t=e.getSize(),this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)):(this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore())},_draw:function(){var t,e,i=this._redrawBounds;this._ctx.save(),i&&(e=i.getSize(),this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()),this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),i=0;i<a;i++){for(n=0,o=r[i].length;n<o;n++)s=r[i][n],h[n?"lineTo":"moveTo"](s.x,s.y);e&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){var e,i,n,o;this._drawing&&!t._empty()&&(e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),1!=(o=(Math.max(Math.round(t._radiusY),1)||n)/n)&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!=o&&i.restore(),this._fillStroke(i,t))},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(("click"===t.type||"preclick"===t.type)&&this._map._draggableMoved(e)||(i=e));this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){var e;!this._map||this._map.dragging.moving()||this._map._animatingZoom||(e=this._map.mouseEventToLayerPoint(t),this._handleMouseHover(t,e))},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(z(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(M(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(a(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e,i,n=t._order;n&&(e=n.next,i=n.prev,e&&((e.prev=i)?i.next=e:e&&(this._drawFirst=e),n.prev=this._drawLast,(this._drawLast.next=n).next=null,this._drawLast=n,this._requestRedraw(t)))},_bringToBack:function(t){var e,i,n=t._order;n&&(e=n.next,(i=n.prev)&&((i.next=e)?e.prev=i:i&&(this._drawLast=i),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(t)))}});function Ui(t){return b.canvas?new Fi(t):null}var Vi=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),zt={_initContainer:function(){this._container=P("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Wi.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Vi("shape");M(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Vi("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;T(e),t.removeInteractiveTarget(e),delete this._layers[h(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e=e||(t._stroke=Vi("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=d(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i=i||(t._fill=Vi("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){fe(t._container)},_bringToBack:function(t){ge(t._container)}},qi=b.vml?Vi:ct,Gi=Wi.extend({_initContainer:function(){this._container=qi("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=qi("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){T(this._container),k(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){var t,e,i;this._map._animatingZoom&&this._bounds||(Wi.prototype._update.call(this),e=(t=this._bounds).getSize(),i=this._container,this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),Z(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update"))},_initPath:function(t){var e=t._path=qi("path");t.options.className&&M(e,t.options.className),t.options.interactive&&M(e,"leaflet-interactive"),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){T(t._path),t.removeInteractiveTarget(t._path),delete this._layers[h(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,t=t.options;e&&(t.stroke?(e.setAttribute("stroke",t.color),e.setAttribute("stroke-opacity",t.opacity),e.setAttribute("stroke-width",t.weight),e.setAttribute("stroke-linecap",t.lineCap),e.setAttribute("stroke-linejoin",t.lineJoin),t.dashArray?e.setAttribute("stroke-dasharray",t.dashArray):e.removeAttribute("stroke-dasharray"),t.dashOffset?e.setAttribute("stroke-dashoffset",t.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),t.fill?(e.setAttribute("fill",t.fillColor||t.color),e.setAttribute("fill-opacity",t.fillOpacity),e.setAttribute("fill-rule",t.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,dt(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n="a"+i+","+(Math.max(Math.round(t._radiusY),1)||i)+" 0 1,0 ",e=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+n+2*i+",0 "+n+2*-i+",0 ";this._setPath(t,e)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){fe(t._path)},_bringToBack:function(t){ge(t._path)}});function Ki(t){return b.svg||b.vml?new Gi(t):null}b.vml&&Gi.include(zt),A.include({getRenderer:function(t){t=(t=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer)||(this._renderer=this._createRenderer());return this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(t){var e;return"overlayPane"!==t&&void 0!==t&&(void 0===(e=this._paneRenderers[t])&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e)},_createRenderer:function(t){return this.options.preferCanvas&&Ui(t)||Ki(t)}});var Yi=xi.extend({initialize:function(t,e){xi.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=g(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});Gi.create=qi,Gi.pointsToPath=dt,wi.geometryToLayer=bi,wi.coordsToLatLng=Li,wi.coordsToLatLngs=Ti,wi.latLngToCoords=Mi,wi.latLngsToCoords=zi,wi.getFeature=Ci,wi.asFeature=Zi,A.mergeOptions({boxZoom:!0});var _t=n.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){S(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){k(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){T(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),re(),Le(),this._startPoint=this._map.mouseEventToContainerPoint(t),S(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=P("div","leaflet-zoom-box",this._container),M(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var t=new f(this._point,this._startPoint),e=t.getSize();Z(this._box,t.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(T(this._box),z(this._container,"leaflet-crosshair")),ae(),Te(),k(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){1!==t.which&&1!==t.button||(this._finish(),this._moved&&(this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0),t=new s(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),this._map.fitBounds(t).fire("boxzoomend",{boxZoomBounds:t})))},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}}),Ct=(A.addInitHook("addHandler","boxZoom",_t),A.mergeOptions({doubleClickZoom:!0}),n.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,i=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}})),Zt=(A.addInitHook("addHandler","doubleClickZoom",Ct),A.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0}),n.extend({addHooks:function(){var t;this._draggable||(t=this._map,this._draggable=new Xe(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))),M(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){z(this._map._container,"leaflet-grab"),z(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t,e=this._map;e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity?(t=g(this._map.options.maxBounds),this._offsetLimit=_(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))):this._offsetLimit=null,e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){var e,i;this._map.options.inertia&&(e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos,this._positions.push(i),this._times.push(e),this._prunePositions(e)),this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){var t,e;this._viscosity&&this._offsetLimit&&(t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit,t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t))},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,n=(n+e+i)%t-e-i,t=Math.abs(o+i)<Math.abs(n+i)?o:n;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=t},_onDragEnd:function(t){var e,i,n,o,s=this._map,r=s.options,a=!r.inertia||t.noInertia||this._times.length<2;s.fire("dragend",t),!a&&(this._prunePositions(+new Date),t=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,e=r.easeLinearity,a=(t=t.multiplyBy(e/a)).distanceTo([0,0]),i=Math.min(r.inertiaMaxSpeed,a),t=t.multiplyBy(i/a),n=i/(r.inertiaDeceleration*e),(o=t.multiplyBy(-n/2).round()).x||o.y)?(o=s._limitOffset(o,s.options.maxBounds),x(function(){s.panBy(o,{duration:n,easeLinearity:e,noMoveStart:!0,animate:!0})})):s.fire("moveend")}})),St=(A.addInitHook("addHandler","dragging",Zt),A.mergeOptions({keyboard:!0,keyboardPanDelta:80}),n.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),S(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),k(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){var t,e,i;this._focused||(i=document.body,t=document.documentElement,e=i.scrollTop||t.scrollTop,i=i.scrollLeft||t.scrollLeft,this._map._container.focus(),window.scrollTo(i,e))},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){for(var e=this._panKeys={},i=this.keyCodes,n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){for(var e=this._zoomKeys={},i=this.keyCodes,n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){S(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){k(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i,n=t.keyCode,o=this._map;if(n in this._panKeys)o._panAnim&&o._panAnim._inProgress||(i=this._panKeys[n],t.shiftKey&&(i=m(i).multiplyBy(3)),o.options.maxBounds&&(i=o._limitOffset(m(i),o.options.maxBounds)),o.options.worldCopyJump?(e=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))),o.panTo(e)):o.panBy(i));else if(n in this._zoomKeys)o.setZoom(o.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[n]);else{if(27!==n||!o._popup||!o._popup.options.closeOnEscapeKey)return;o.closePopup()}Re(t)}}})),Et=(A.addInitHook("addHandler","keyboard",St),A.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60}),n.extend({addHooks:function(){S(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){k(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=He(t),i=this._map.options.wheelDebounceTime,e=(this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date),Math.max(i-(+new Date-this._startTime),0));clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),e),Re(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0,n=(t._stop(),this._delta/(4*this._map.options.wheelPxPerZoomLevel)),n=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,i=i?Math.ceil(n/i)*i:n,n=t._limitZoom(e+(0<this._delta?i:-i))-e;this._delta=0,this._startTime=null,n&&("center"===t.options.scrollWheelZoom?t.setZoom(e+n):t.setZoomAround(this._lastMousePos,e+n))}})),kt=(A.addInitHook("addHandler","scrollWheelZoom",Et),A.mergeOptions({tapHold:b.touchNative&&b.safari&&b.mobile,tapTolerance:15}),n.extend({addHooks:function(){S(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){k(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){var e;clearTimeout(this._holdTimeout),1===t.touches.length&&(e=t.touches[0],this._startPos=this._newPos=new p(e.clientX,e.clientY),this._holdTimeout=setTimeout(a(function(){this._cancel(),this._isTapValid()&&(S(document,"touchend",O),S(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),S(document,"touchend touchcancel contextmenu",this._cancel,this),S(document,"touchmove",this._onMove,this))},_cancelClickPrevent:function t(){k(document,"touchend",O),k(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),k(document,"touchend touchcancel contextmenu",this._cancel,this),k(document,"touchmove",this._onMove,this)},_onMove:function(t){t=t.touches[0];this._newPos=new p(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){t=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});t._simulated=!0,e.target.dispatchEvent(t)}})),Ot=(A.addInitHook("addHandler","tapHold",kt),A.mergeOptions({touchZoom:b.touch,bounceAtZoomLimits:!0}),n.extend({addHooks:function(){M(this._map._container,"leaflet-touch-zoom"),S(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){z(this._map._container,"leaflet-touch-zoom"),k(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e,i,n=this._map;!t.touches||2!==t.touches.length||n._animatingZoom||this._zooming||(e=n.mouseEventToContainerPoint(t.touches[0]),i=n.mouseEventToContainerPoint(t.touches[1]),this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),"center"!==n.options.touchZoom&&(this._pinchStartLatLng=n.containerPointToLatLng(e.add(i)._divideBy(2))),this._startDist=e.distanceTo(i),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),S(document,"touchmove",this._onTouchMove,this),S(document,"touchend touchcancel",this._onTouchEnd,this),O(t))},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&1<o)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{i=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===i.x&&0===i.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(i),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),r(this._animRequest);n=a(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=x(n,this,!0),O(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,r(this._animRequest),k(document,"touchmove",this._onTouchMove,this),k(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}})),Xi=(A.addInitHook("addHandler","touchZoom",Ot),A.BoxZoom=_t,A.DoubleClickZoom=Ct,A.Drag=Zt,A.Keyboard=St,A.ScrollWheelZoom=Et,A.TapHold=kt,A.TouchZoom=Ot,t.Bounds=f,t.Browser=b,t.CRS=ot,t.Canvas=Fi,t.Circle=vi,t.CircleMarker=gi,t.Class=et,t.Control=B,t.DivIcon=Ri,t.DivOverlay=Ai,t.DomEvent=mt,t.DomUtil=pt,t.Draggable=Xe,t.Evented=it,t.FeatureGroup=ci,t.GeoJSON=wi,t.GridLayer=Ni,t.Handler=n,t.Icon=di,t.ImageOverlay=Ei,t.LatLng=v,t.LatLngBounds=s,t.Layer=o,t.LayerGroup=ui,t.LineUtil=vt,t.Map=A,t.Marker=mi,t.Mixin=ft,t.Path=fi,t.Point=p,t.PolyUtil=gt,t.Polygon=xi,t.Polyline=yi,t.Popup=Bi,t.PosAnimation=Fe,t.Projection=wt,t.Rectangle=Yi,t.Renderer=Wi,t.SVG=Gi,t.SVGOverlay=Oi,t.TileLayer=Di,t.Tooltip=Ii,t.Transformation=at,t.Util=tt,t.VideoOverlay=ki,t.bind=a,t.bounds=_,t.canvas=Ui,t.circle=function(t,e,i){return new vi(t,e,i)},t.circleMarker=function(t,e){return new gi(t,e)},t.control=Ue,t.divIcon=function(t){return new Ri(t)},t.extend=l,t.featureGroup=function(t,e){return new ci(t,e)},t.geoJSON=Si,t.geoJson=Mt,t.gridLayer=function(t){return new Ni(t)},t.icon=function(t){return new di(t)},t.imageOverlay=function(t,e,i){return new Ei(t,e,i)},t.latLng=w,t.latLngBounds=g,t.layerGroup=function(t,e){return new ui(t,e)},t.map=function(t,e){return new A(t,e)},t.marker=function(t,e){return new mi(t,e)},t.point=m,t.polygon=function(t,e){return new xi(t,e)},t.polyline=function(t,e){return new yi(t,e)},t.popup=function(t,e){return new Bi(t,e)},t.rectangle=function(t,e){return new Yi(t,e)},t.setOptions=c,t.stamp=h,t.svg=Ki,t.svgOverlay=function(t,e,i){return new Oi(t,e,i)},t.tileLayer=ji,t.tooltip=function(t,e){return new Ii(t,e)},t.transformation=ht,t.version="1.9.4",t.videoOverlay=function(t,e,i){return new ki(t,e,i)},window.L);t.noConflict=function(){return window.L=Xi,this},window.L=t});
//# sourceMappingURL=leaflet.js.map
;/*
	Leaflet.contextmenu, a context menu for Leaflet.
	(c) 2015, Adam Ratcliffe, GeoSmart Maps Limited

	@preserve
*/

(function(factory) {
	// Packaging/modules magic dance
	var L;
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['leaflet'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		// Node/CommonJS
		L = require('leaflet');
		module.exports = factory(L);
	} else {
		// Browser globals
		if (typeof window.L === 'undefined') {
			throw new Error('Leaflet must be loaded first');
		}
		factory(window.L);
	}
})(function(L) {
L.Map.mergeOptions({
    contextmenuItems: []
});

L.Map.ContextMenu = L.Handler.extend({
    _touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
    
    statics: {
        BASE_CLS: 'leaflet-contextmenu'
    },
    
    initialize: function (map) {
        L.Handler.prototype.initialize.call(this, map);
        
        this._items = [];
        this._visible = false;

        var container = this._container = L.DomUtil.create('div', L.Map.ContextMenu.BASE_CLS, map._container);
        container.style.zIndex = 10000;
        container.style.position = 'absolute';

        if (map.options.contextmenuWidth) {
            container.style.width = map.options.contextmenuWidth + 'px';
        }

        this._createItems();

        L.DomEvent
            .on(container, 'click', L.DomEvent.stop)
            .on(container, 'mousedown', L.DomEvent.stop)
            .on(container, 'dblclick', L.DomEvent.stop)
            .on(container, 'contextmenu', L.DomEvent.stop);
    },

    addHooks: function () {
        var container = this._map.getContainer();

        L.DomEvent
            .on(container, 'mouseleave', this._hide, this)
            .on(document, 'keydown', this._onKeyDown, this);

        if (L.Browser.touch) {
            L.DomEvent.on(document, this._touchstart, this._hide, this);
        }

        this._map.on({
            contextmenu: this._show,
            mousedown: this._hide,
            movestart: this._hide,
            zoomstart: this._hide
        }, this);
    },

    removeHooks: function () {
        var container = this._map.getContainer();

        L.DomEvent
            .off(container, 'mouseleave', this._hide, this)
            .off(document, 'keydown', this._onKeyDown, this);

        if (L.Browser.touch) {
            L.DomEvent.off(document, this._touchstart, this._hide, this);
        }

        this._map.off({
            contextmenu: this._show,
            mousedown: this._hide,
            movestart: this._hide,
            zoomstart: this._hide
        }, this);
    },

    showAt: function (point, data) {
        if (point instanceof L.LatLng) {
            point = this._map.latLngToContainerPoint(point);
        }
        this._showAtPoint(point, data);
    },

    hide: function () {
        this._hide();
    },

    addItem: function (options) {
        return this.insertItem(options);
    },

    insertItem: function (options, index) {
        index = index !== undefined ? index: this._items.length;

        var item = this._createItem(this._container, options, index);

        this._items.push(item);

        this._sizeChanged = true;

        this._map.fire('contextmenu.additem', {
            contextmenu: this,
            el: item.el,
            index: index
        });

        return item.el;
    },

    removeItem: function (item) {
        var container = this._container;

        if (!isNaN(item)) {
            item = container.children[item];
        }

        if (item) {
            this._removeItem(L.Util.stamp(item));

            this._sizeChanged = true;

            this._map.fire('contextmenu.removeitem', {
                contextmenu: this,
                el: item
            });

            return item;
        }

        return null;
    },

    removeAllItems: function () {
        var items = this._container.children,
            item;

        while (items.length) {
            item = items[0];
            this._removeItem(L.Util.stamp(item));
        }
        return items;
    },

    hideAllItems: function () {
        var item, i, l;

        for (i = 0, l = this._items.length; i < l; i++) {
            item = this._items[i];
            item.el.style.display = 'none';
        }
    },

    showAllItems: function () {
        var item, i, l;

        for (i = 0, l = this._items.length; i < l; i++) {
            item = this._items[i];
            item.el.style.display = '';
        }
    },

    setDisabled: function (item, disabled) {
        var container = this._container,
        itemCls = L.Map.ContextMenu.BASE_CLS + '-item';

        if (!isNaN(item)) {
            item = container.children[item];
        }

        if (item && L.DomUtil.hasClass(item, itemCls)) {
            if (disabled) {
                L.DomUtil.addClass(item, itemCls + '-disabled');
                this._map.fire('contextmenu.disableitem', {
                    contextmenu: this,
                    el: item
                });
            } else {
                L.DomUtil.removeClass(item, itemCls + '-disabled');
                this._map.fire('contextmenu.enableitem', {
                    contextmenu: this,
                    el: item
                });
            }
        }
    },

    isVisible: function () {
        return this._visible;
    },

    _createItems: function () {
        var itemOptions = this._map.options.contextmenuItems,
            item,
            i, l;

        for (i = 0, l = itemOptions.length; i < l; i++) {
            this._items.push(this._createItem(this._container, itemOptions[i]));
        }
    },

    _createItem: function (container, options, index) {
        if (options.separator || options === '-') {
            return this._createSeparator(container, index);
        }

        var itemCls = L.Map.ContextMenu.BASE_CLS + '-item',
            cls = options.disabled ? (itemCls + ' ' + itemCls + '-disabled') : itemCls,
            el = this._insertElementAt('a', cls, container, index),
            callback = this._createEventHandler(el, options.callback, options.context, options.hideOnSelect),
            icon = this._getIcon(options),
            iconCls = this._getIconCls(options),
            html = '';

        if (icon) {
            html = '<img class="' + L.Map.ContextMenu.BASE_CLS + '-icon" src="' + icon + '"/>';
        } else if (iconCls) {
            html = '<span class="' + L.Map.ContextMenu.BASE_CLS + '-icon ' + iconCls + '"></span>';
        }

        el.innerHTML = html + options.text;
        el.href = '#';

        L.DomEvent
            .on(el, 'mouseover', this._onItemMouseOver, this)
            .on(el, 'mouseout', this._onItemMouseOut, this)
            .on(el, 'mousedown', L.DomEvent.stopPropagation)
            .on(el, 'click', callback);

        if (L.Browser.touch) {
            L.DomEvent.on(el, this._touchstart, L.DomEvent.stopPropagation);
        }

        // Devices without a mouse fire "mouseover" on tap, but never “mouseout"
        if (!L.Browser.pointer) {
            L.DomEvent.on(el, 'click', this._onItemMouseOut, this);
        }

        return {
            id: L.Util.stamp(el),
            el: el,
            callback: callback
        };
    },

    _removeItem: function (id) {
        var item,
            el,
            i, l, callback;

        for (i = 0, l = this._items.length; i < l; i++) {
            item = this._items[i];

            if (item.id === id) {
                el = item.el;
                callback = item.callback;

                if (callback) {
                    L.DomEvent
                        .off(el, 'mouseover', this._onItemMouseOver, this)
                        .off(el, 'mouseover', this._onItemMouseOut, this)
                        .off(el, 'mousedown', L.DomEvent.stopPropagation)
                        .off(el, 'click', callback);

                    if (L.Browser.touch) {
                        L.DomEvent.off(el, this._touchstart, L.DomEvent.stopPropagation);
                    }

                    if (!L.Browser.pointer) {
                        L.DomEvent.on(el, 'click', this._onItemMouseOut, this);
                    }
                }

                this._container.removeChild(el);
                this._items.splice(i, 1);

                return item;
            }
        }
        return null;
    },

    _createSeparator: function (container, index) {
        var el = this._insertElementAt('div', L.Map.ContextMenu.BASE_CLS + '-separator', container, index);

        return {
            id: L.Util.stamp(el),
            el: el
        };
    },

    _createEventHandler: function (el, func, context, hideOnSelect) {
        var me = this,
            map = this._map,
            disabledCls = L.Map.ContextMenu.BASE_CLS + '-item-disabled',
            hideOnSelect = (hideOnSelect !== undefined) ? hideOnSelect : true;

        return function (e) {
            if (L.DomUtil.hasClass(el, disabledCls)) {
                return;
            }

            if (hideOnSelect) {
                me._hide();
            }

            if (func) {
                func.call(context || map, me._showLocation);
            }

            me._map.fire('contextmenu.select', {
                contextmenu: me,
                el: el
            });
        };
    },

    _insertElementAt: function (tagName, className, container, index) {
        var refEl,
            el = document.createElement(tagName);

        el.className = className;

        if (index !== undefined) {
            refEl = container.children[index];
        }

        if (refEl) {
            container.insertBefore(el, refEl);
        } else {
            container.appendChild(el);
        }

        return el;
    },

    _show: function (e) {
        this._showAtPoint(e.containerPoint, e);
    },

    _showAtPoint: function (pt, data) {
        if (this._items.length) {
            var map = this._map,
            layerPoint = map.containerPointToLayerPoint(pt),
            latlng = map.layerPointToLatLng(layerPoint),
            event = L.extend(data || {}, {contextmenu: this});

            this._showLocation = {
                latlng: latlng,
                layerPoint: layerPoint,
                containerPoint: pt
            };

            if (data && data.relatedTarget){
                this._showLocation.relatedTarget = data.relatedTarget;
            }

            this._setPosition(pt);

            if (!this._visible) {
                this._container.style.display = 'block';
                this._visible = true;
            }

            this._map.fire('contextmenu.show', event);
        }
    },

    _hide: function () {
        if (this._visible) {
            this._visible = false;
            this._container.style.display = 'none';
            this._map.fire('contextmenu.hide', {contextmenu: this});
        }
    },

    _getIcon: function (options) {
        return L.Browser.retina && options.retinaIcon || options.icon;
    },

    _getIconCls: function (options) {
        return L.Browser.retina && options.retinaIconCls || options.iconCls;
    },

    _setPosition: function (pt) {
        var mapSize = this._map.getSize(),
            container = this._container,
            containerSize = this._getElementSize(container),
            anchor;

        if (this._map.options.contextmenuAnchor) {
            anchor = L.point(this._map.options.contextmenuAnchor);
            pt = pt.add(anchor);
        }

        container._leaflet_pos = pt;

        if (pt.x + containerSize.x > mapSize.x) {
            container.style.left = 'auto';
            container.style.right = Math.min(Math.max(mapSize.x - pt.x, 0), mapSize.x - containerSize.x - 1) + 'px';
        } else {
            container.style.left = Math.max(pt.x, 0) + 'px';
            container.style.right = 'auto';
        }

        if (pt.y + containerSize.y > mapSize.y) {
            container.style.top = 'auto';
            container.style.bottom = Math.min(Math.max(mapSize.y - pt.y, 0), mapSize.y - containerSize.y - 1) + 'px';
        } else {
            container.style.top = Math.max(pt.y, 0) + 'px';
            container.style.bottom = 'auto';
        }
    },

    _getElementSize: function (el) {
        var size = this._size,
            initialDisplay = el.style.display;

        if (!size || this._sizeChanged) {
            size = {};

            el.style.left = '-999999px';
            el.style.right = 'auto';
            el.style.display = 'block';

            size.x = el.offsetWidth;
            size.y = el.offsetHeight;

            el.style.left = 'auto';
            el.style.display = initialDisplay;

            this._sizeChanged = false;
        }

        return size;
    },

    _onKeyDown: function (e) {
        var key = e.keyCode;

        // If ESC pressed and context menu is visible hide it
        if (key === 27) {
            this._hide();
        }
    },

    _onItemMouseOver: function (e) {
        L.DomUtil.addClass(e.target || e.srcElement, 'over');
    },

    _onItemMouseOut: function (e) {
        L.DomUtil.removeClass(e.target || e.srcElement, 'over');
    }
});

L.Map.addInitHook('addHandler', 'contextmenu', L.Map.ContextMenu);
L.Mixin.ContextMenu = {
    bindContextMenu: function (options) {
        L.setOptions(this, options);
        this._initContextMenu();

        return this;
    },

    unbindContextMenu: function (){
        this.off('contextmenu', this._showContextMenu, this);

        return this;
    },

    addContextMenuItem: function (item) {
            this.options.contextmenuItems.push(item);
    },

    removeContextMenuItemWithIndex: function (index) {
        var items = [];
        for (var i = 0; i < this.options.contextmenuItems.length; i++) {
            if (this.options.contextmenuItems[i].index == index){
                items.push(i);
            }
        }
        var elem = items.pop();
        while (elem !== undefined) {
            this.options.contextmenuItems.splice(elem,1);
            elem = items.pop();
        }
    },

    replaceContextMenuItem: function (item) {
        this.removeContextMenuItemWithIndex(item.index);
        this.addContextMenuItem(item);
    },

    _initContextMenu: function () {
        this._items = [];

        this.on('contextmenu', this._showContextMenu, this);
    },

    _showContextMenu: function (e) {
        var itemOptions,
            data, pt, i, l;

        if (this._map.contextmenu) {
            data = L.extend({relatedTarget: this}, e);

            pt = this._map.mouseEventToContainerPoint(e.originalEvent);

            if (!this.options.contextmenuInheritItems) {
                this._map.contextmenu.hideAllItems();
            }

            for (i = 0, l = this.options.contextmenuItems.length; i < l; i++) {
                itemOptions = this.options.contextmenuItems[i];
                this._items.push(this._map.contextmenu.insertItem(itemOptions, itemOptions.index));
            }

            this._map.once('contextmenu.hide', this._hideContextMenu, this);

            this._map.contextmenu.showAt(pt, data);
        }
    },

    _hideContextMenu: function () {
        var i, l;

        for (i = 0, l = this._items.length; i < l; i++) {
            this._map.contextmenu.removeItem(this._items[i]);
        }
        this._items.length = 0;

        if (!this.options.contextmenuInheritItems) {
            this._map.contextmenu.showAllItems();
        }
    }
};

var classes = [L.Marker, L.Path],
    defaultOptions = {
        contextmenu: false,
        contextmenuItems: [],
        contextmenuInheritItems: true
    },
    cls, i, l;

for (i = 0, l = classes.length; i < l; i++) {
    cls = classes[i];

    // L.Class should probably provide an empty options hash, as it does not test
    // for it here and add if needed
    if (!cls.prototype.options) {
        cls.prototype.options = defaultOptions;
    } else {
        cls.mergeOptions(defaultOptions);
    }

    cls.addInitHook(function () {
        if (this.options.contextmenu) {
            this._initContextMenu();
        }
    });

    cls.include(L.Mixin.ContextMenu);
}
return L.Map.ContextMenu;
});

;/*! Leaflet.Coordinates 02-03-2016 */
L.Control.Coordinates=L.Control.extend({options:{position:"bottomright",decimals:4,decimalSeperator:".",labelTemplateLat:"Lat: {y}",labelTemplateLng:"Lng: {x}",labelFormatterLat:void 0,labelFormatterLng:void 0,enableUserInput:!0,useDMS:!1,useLatLngOrder:!1,centerUserCoordinates:!1,markerType:L.marker,markerProps:{}},onAdd:function(a){this._map=a;var b="leaflet-control-coordinates",c=this._container=L.DomUtil.create("div",b),d=this.options;this._labelcontainer=L.DomUtil.create("div","uiElement label",c),this._label=L.DomUtil.create("span","labelFirst",this._labelcontainer),this._inputcontainer=L.DomUtil.create("div","uiElement input uiHidden",c);var e,f;return d.useLatLngOrder?(f=L.DomUtil.create("span","",this._inputcontainer),this._inputY=this._createInput("inputY",this._inputcontainer),e=L.DomUtil.create("span","",this._inputcontainer),this._inputX=this._createInput("inputX",this._inputcontainer)):(e=L.DomUtil.create("span","",this._inputcontainer),this._inputX=this._createInput("inputX",this._inputcontainer),f=L.DomUtil.create("span","",this._inputcontainer),this._inputY=this._createInput("inputY",this._inputcontainer)),e.innerHTML=d.labelTemplateLng.replace("{x}",""),f.innerHTML=d.labelTemplateLat.replace("{y}",""),L.DomEvent.on(this._inputX,"keyup",this._handleKeypress,this),L.DomEvent.on(this._inputY,"keyup",this._handleKeypress,this),a.on("mousemove",this._update,this),a.on("dragstart",this.collapse,this),a.whenReady(this._update,this),this._showsCoordinates=!0,d.enableUserInput&&L.DomEvent.addListener(this._container,"click",this._switchUI,this),c},_createInput:function(a,b){var c=L.DomUtil.create("input",a,b);return c.type="text",L.DomEvent.disableClickPropagation(c),c},_clearMarker:function(){this._map.removeLayer(this._marker)},_handleKeypress:function(a){switch(a.keyCode){case 27:this.collapse();break;case 13:this._handleSubmit(),this.collapse();break;default:this._handleSubmit()}},_handleSubmit:function(){var a=L.NumberFormatter.createValidNumber(this._inputX.value,this.options.decimalSeperator),b=L.NumberFormatter.createValidNumber(this._inputY.value,this.options.decimalSeperator);if(void 0!==a&&void 0!==b){var c=this._marker;c||(c=this._marker=this._createNewMarker(),c.on("click",this._clearMarker,this));var d=new L.LatLng(b,a);c.setLatLng(d),c.addTo(this._map),this.options.centerUserCoordinates&&this._map.setView(d,this._map.getZoom())}},expand:function(){this._showsCoordinates=!1,this._map.off("mousemove",this._update,this),L.DomEvent.addListener(this._container,"mousemove",L.DomEvent.stop),L.DomEvent.removeListener(this._container,"click",this._switchUI,this),L.DomUtil.addClass(this._labelcontainer,"uiHidden"),L.DomUtil.removeClass(this._inputcontainer,"uiHidden")},_createCoordinateLabel:function(a){var b,c,d=this.options;return d.customLabelFcn?d.customLabelFcn(a,d):(b=d.labelLng?d.labelFormatterLng(a.lng):L.Util.template(d.labelTemplateLng,{x:this._getNumber(a.lng,d)}),c=d.labelFormatterLat?d.labelFormatterLat(a.lat):L.Util.template(d.labelTemplateLat,{y:this._getNumber(a.lat,d)}),d.useLatLngOrder?c+" "+b:b+" "+c)},_getNumber:function(a,b){var c;return c=b.useDMS?L.NumberFormatter.toDMS(a):L.NumberFormatter.round(a,b.decimals,b.decimalSeperator)},collapse:function(){if(!this._showsCoordinates){this._map.on("mousemove",this._update,this),this._showsCoordinates=!0;this.options;if(L.DomEvent.addListener(this._container,"click",this._switchUI,this),L.DomEvent.removeListener(this._container,"mousemove",L.DomEvent.stop),L.DomUtil.addClass(this._inputcontainer,"uiHidden"),L.DomUtil.removeClass(this._labelcontainer,"uiHidden"),this._marker){var a=this._createNewMarker(),b=this._marker.getLatLng();a.setLatLng(b);var c=L.DomUtil.create("div",""),d=L.DomUtil.create("div","",c);d.innerHTML=this._ordinateLabel(b);var e=L.DomUtil.create("a","",c);e.innerHTML="Remove",e.href="#";var f=L.DomEvent.stopPropagation;L.DomEvent.on(e,"click",f).on(e,"mousedown",f).on(e,"dblclick",f).on(e,"click",L.DomEvent.preventDefault).on(e,"click",function(){this._map.removeLayer(a)},this),a.bindPopup(c),a.addTo(this._map),this._map.removeLayer(this._marker),this._marker=null}}},_switchUI:function(a){L.DomEvent.stop(a),L.DomEvent.stopPropagation(a),L.DomEvent.preventDefault(a),this._showsCoordinates?this.expand():this.collapse()},onRemove:function(a){a.off("mousemove",this._update,this)},_update:function(a){var b=a.latlng,c=this.options;b&&(b=b.wrap(),this._currentPos=b,this._inputY.value=L.NumberFormatter.round(b.lat,c.decimals,c.decimalSeperator),this._inputX.value=L.NumberFormatter.round(b.lng,c.decimals,c.decimalSeperator),this._label.innerHTML=this._createCoordinateLabel(b))},_createNewMarker:function(){return this.options.markerType(null,this.options.markerProps)}}),L.control.coordinates=function(a){return new L.Control.Coordinates(a)},L.Map.mergeOptions({coordinateControl:!1}),L.Map.addInitHook(function(){this.options.coordinateControl&&(this.coordinateControl=new L.Control.Coordinates,this.addControl(this.coordinateControl))}),L.NumberFormatter={round:function(a,b,c){var d=L.Util.formatNum(a,b)+"",e=d.split(".");if(e[1]){for(var f=b-e[1].length;f>0;f--)e[1]+="0";d=e.join(c||".")}return d},toDMS:function(a){var b=Math.floor(Math.abs(a)),c=60*(Math.abs(a)-b),d=Math.floor(c),e=60*(c-d),f=Math.round(e);60==f&&(d++,f="00"),60==d&&(b++,d="00"),10>f&&(f="0"+f),10>d&&(d="0"+d);var g="";return 0>a&&(g="-"),""+g+b+"&deg; "+d+"' "+f+"''"},createValidNumber:function(a,b){if(a&&a.length>0){var c=a.split(b||".");try{var d=Number(c.join("."));return isNaN(d)?void 0:d}catch(e){return void 0}}return void 0}};
;(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
function corslite(url, callback, cors) {
    var sent = false;
    console.log("estoy en este kilombo...");
    if (typeof window.XMLHttpRequest === 'undefined') {
        return callback(Error('Browser not supported'));
    }

    if (typeof cors === 'undefined') {
        var m = url.match(/^\s*https?:\/\/[^\/]*/);
        cors = m && (m[0] !== location.protocol + '//' + location.hostname +
                (location.port ? ':' + location.port : ''));
    }

    var x = new window.XMLHttpRequest();

    function isSuccessful(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    if (cors && !('withCredentials' in x)) {
        // IE8-9
        x = new window.XDomainRequest();

        // Ensure callback is never called synchronously, i.e., before
        // x.send() returns (this has been observed in the wild).
        // See https://github.com/mapbox/mapbox.js/issues/472
        var original = callback;
        callback = function() {
            if (sent) {
                original.apply(this, arguments);
            } else {
                var that = this, args = arguments;
                setTimeout(function() {
                    original.apply(that, args);
                }, 0);
            }
        }
    }

    function loaded() {
        if (
            // XDomainRequest
            x.status === undefined ||
            // modern browsers
            isSuccessful(x.status)) callback.call(x, null, x);
        else callback.call(x, x, null);
    }

    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
    if ('onload' in x) {
        x.onload = loaded;
    } else {
        x.onreadystatechange = function readystate() {
            if (x.readyState === 4) {
                loaded();
            }
        };
    }

    // Call the callback with the XMLHttpRequest object as an error and prevent
    // it from ever being called again by reassigning it to `noop`
    x.onerror = function error(evt) {
        // XDomainRequest provides no evt parameter
        callback.call(this, evt || true, null);
        callback = function() { };
    };

    // IE9 must have onprogress be set to a unique function.
    x.onprogress = function() { };

    x.ontimeout = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    x.onabort = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    // GET is the only supported HTTP Verb by XDomainRequest and is the
    // only one supported here.
    x.open('GET', url, true);

    // Send the request. Sending data is not supported.
    x.send(null);
    sent = true;

    return x;
}

if (typeof module !== 'undefined') module.exports = corslite;

},{}],2:[function(_dereq_,module,exports){
'use strict';

/**
 * Based off of [the offical Google document](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
 *
 * Some parts from [this implementation](http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/PolylineEncoder.js)
 * by [Mark McClure](http://facstaff.unca.edu/mcmcclur/)
 *
 * @module polyline
 */

var polyline = {};

function py2_round(value) {
    // Google's polyline algorithm uses the same rounding strategy as Python 2, which is different from JS for negative values
    return Math.floor(Math.abs(value) + 0.5) * Math.sign(value);
}

function encode(current, previous, factor) {
    current = py2_round(current * factor);
    previous = py2_round(previous * factor);
    var coordinate = current - previous;
    coordinate <<= 1;
    if (current - previous < 0) {
        coordinate = ~coordinate;
    }
    var output = '';
    while (coordinate >= 0x20) {
        output += String.fromCharCode((0x20 | (coordinate & 0x1f)) + 63);
        coordinate >>= 5;
    }
    output += String.fromCharCode(coordinate + 63);
    return output;
}

/**
 * Decodes to a [latitude, longitude] coordinates array.
 *
 * This is adapted from the implementation in Project-OSRM.
 *
 * @param {String} str
 * @param {Number} precision
 * @returns {Array}
 *
 * @see https://github.com/Project-OSRM/osrm-frontend/blob/master/WebContent/routing/OSRM.RoutingGeometry.js
 */
polyline.decode = function(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, precision || 5);

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

        // Reset shift, result, and byte
        byte = null;
        shift = 0;
        result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        shift = result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        lat += latitude_change;
        lng += longitude_change;

        coordinates.push([lat / factor, lng / factor]);
    }

    return coordinates;
};

/**
 * Encodes the given [latitude, longitude] coordinates array.
 *
 * @param {Array.<Array.<Number>>} coordinates
 * @param {Number} precision
 * @returns {String}
 */
polyline.encode = function(coordinates, precision) {
    if (!coordinates.length) { return ''; }

    var factor = Math.pow(10, precision || 5),
        output = encode(coordinates[0][0], 0, factor) + encode(coordinates[0][1], 0, factor);

    for (var i = 1; i < coordinates.length; i++) {
        var a = coordinates[i], b = coordinates[i - 1];
        output += encode(a[0], b[0], factor);
        output += encode(a[1], b[1], factor);
    }

    return output;
};

function flipped(coords) {
    var flipped = [];
    for (var i = 0; i < coords.length; i++) {
        flipped.push(coords[i].slice().reverse());
    }
    return flipped;
}

/**
 * Encodes a GeoJSON LineString feature/geometry.
 *
 * @param {Object} geojson
 * @param {Number} precision
 * @returns {String}
 */
polyline.fromGeoJSON = function(geojson, precision) {
    if (geojson && geojson.type === 'Feature') {
        geojson = geojson.geometry;
    }
    if (!geojson || geojson.type !== 'LineString') {
        throw new Error('Input must be a GeoJSON LineString');
    }
    return polyline.encode(flipped(geojson.coordinates), precision);
};

/**
 * Decodes to a GeoJSON LineString geometry.
 *
 * @param {String} str
 * @param {Number} precision
 * @returns {Object}
 */
polyline.toGeoJSON = function(str, precision) {
    var coords = polyline.decode(str, precision);
    return {
        type: 'LineString',
        coordinates: flipped(coords)
    };
};

if (typeof module === 'object' && module.exports) {
    module.exports = polyline;
}

},{}],3:[function(_dereq_,module,exports){
var languages = _dereq_('./languages');
var instructions = languages.instructions;
var grammars = languages.grammars;
var abbreviations = languages.abbreviations;

module.exports = function(version) {
    Object.keys(instructions).forEach(function(code) {
        if (!instructions[code][version]) { throw 'invalid version ' + version + ': ' + code + ' not supported'; }
    });

    return {
        capitalizeFirstLetter: function(language, string) {
            return string.charAt(0).toLocaleUpperCase(language) + string.slice(1);
        },
        ordinalize: function(language, number) {
            // Transform numbers to their translated ordinalized value
            if (!language) throw new Error('No language code provided');

            return instructions[language][version].constants.ordinalize[number.toString()] || '';
        },
        directionFromDegree: function(language, degree) {
            // Transform degrees to their translated compass direction
            if (!language) throw new Error('No language code provided');
            if (!degree && degree !== 0) {
                // step had no bearing_after degree, ignoring
                return '';
            } else if (degree >= 0 && degree <= 20) {
                return instructions[language][version].constants.direction.north;
            } else if (degree > 20 && degree < 70) {
                return instructions[language][version].constants.direction.northeast;
            } else if (degree >= 70 && degree <= 110) {
                return instructions[language][version].constants.direction.east;
            } else if (degree > 110 && degree < 160) {
                return instructions[language][version].constants.direction.southeast;
            } else if (degree >= 160 && degree <= 200) {
                return instructions[language][version].constants.direction.south;
            } else if (degree > 200 && degree < 250) {
                return instructions[language][version].constants.direction.southwest;
            } else if (degree >= 250 && degree <= 290) {
                return instructions[language][version].constants.direction.west;
            } else if (degree > 290 && degree < 340) {
                return instructions[language][version].constants.direction.northwest;
            } else if (degree >= 340 && degree <= 360) {
                return instructions[language][version].constants.direction.north;
            } else {
                throw new Error('Degree ' + degree + ' invalid');
            }
        },
        laneConfig: function(step) {
            // Reduce any lane combination down to a contracted lane diagram
            if (!step.intersections || !step.intersections[0].lanes) throw new Error('No lanes object');

            var config = [];
            var currentLaneValidity = null;

            step.intersections[0].lanes.forEach(function (lane) {
                if (currentLaneValidity === null || currentLaneValidity !== lane.valid) {
                    if (lane.valid) {
                        config.push('o');
                    } else {
                        config.push('x');
                    }
                    currentLaneValidity = lane.valid;
                }
            });

            return config.join('');
        },
        getWayName: function(language, step, options) {
            var classes = options ? options.classes || [] : [];
            if (typeof step !== 'object') throw new Error('step must be an Object');
            if (!language) throw new Error('No language code provided');
            if (!Array.isArray(classes)) throw new Error('classes must be an Array or undefined');

            var wayName;
            var name = step.name || '';
            var ref = (step.ref || '').split(';')[0];

            // Remove hacks from Mapbox Directions mixing ref into name
            if (name === step.ref) {
                // if both are the same we assume that there used to be an empty name, with the ref being filled in for it
                // we only need to retain the ref then
                name = '';
            }
            name = name.replace(' (' + step.ref + ')', '');

            // In attempt to avoid using the highway name of a way,
            // check and see if the step has a class which should signal
            // the ref should be used instead of the name.
            var wayMotorway = classes.indexOf('motorway') !== -1;

            if (name && ref && name !== ref && !wayMotorway) {
                var phrase = instructions[language][version].phrase['name and ref'] ||
                    instructions.en[version].phrase['name and ref'];
                wayName = this.tokenize(language, phrase, {
                    name: name,
                    ref: ref
                }, options);
            } else if (name && ref && wayMotorway && (/\d/).test(ref)) {
                wayName = options && options.formatToken ? options.formatToken('ref', ref) : ref;
            } else if (!name && ref) {
                wayName = options && options.formatToken ? options.formatToken('ref', ref) : ref;
            } else {
                wayName = options && options.formatToken ? options.formatToken('name', name) : name;
            }

            return wayName;
        },

        /**
         * Formulate a localized text instruction from a step.
         *
         * @param  {string} language           Language code.
         * @param  {object} step               Step including maneuver property.
         * @param  {object} opts               Additional options.
         * @param  {string} opts.legIndex      Index of leg in the route.
         * @param  {string} opts.legCount      Total number of legs in the route.
         * @param  {array}  opts.classes       List of road classes.
         * @param  {string} opts.waypointName  Name of waypoint for arrival instruction.
         *
         * @return {string} Localized text instruction.
         */
        compile: function(language, step, opts) {
            if (!language) throw new Error('No language code provided');
            if (languages.supportedCodes.indexOf(language) === -1) throw new Error('language code ' + language + ' not loaded');
            if (!step.maneuver) throw new Error('No step maneuver provided');
            var options = opts || {};

            var type = step.maneuver.type;
            var modifier = step.maneuver.modifier;
            var mode = step.mode;
            // driving_side will only be defined in OSRM 5.14+
            var side = step.driving_side;

            if (!type) { throw new Error('Missing step maneuver type'); }
            if (type !== 'depart' && type !== 'arrive' && !modifier) { throw new Error('Missing step maneuver modifier'); }

            if (!instructions[language][version][type]) {
                // Log for debugging
                console.log('Encountered unknown instruction type: ' + type); // eslint-disable-line no-console
                // OSRM specification assumes turn types can be added without
                // major version changes. Unknown types are to be treated as
                // type `turn` by clients
                type = 'turn';
            }

            // Use special instructions if available, otherwise `defaultinstruction`
            var instructionObject;
            if (instructions[language][version].modes[mode]) {
                instructionObject = instructions[language][version].modes[mode];
            } else {
              // omit side from off ramp if same as driving_side
              // note: side will be undefined if the input is from OSRM <5.14
              // but the condition should still evaluate properly regardless
                var omitSide = type === 'off ramp' && modifier.indexOf(side) >= 0;
                if (instructions[language][version][type][modifier] && !omitSide) {
                    instructionObject = instructions[language][version][type][modifier];
                } else {
                    instructionObject = instructions[language][version][type].default;
                }
            }

            // Special case handling
            var laneInstruction;
            switch (type) {
            case 'use lane':
                laneInstruction = instructions[language][version].constants.lanes[this.laneConfig(step)];
                if (!laneInstruction) {
                    // If the lane combination is not found, default to continue straight
                    instructionObject = instructions[language][version]['use lane'].no_lanes;
                }
                break;
            case 'rotary':
            case 'roundabout':
                if (step.rotary_name && step.maneuver.exit && instructionObject.name_exit) {
                    instructionObject = instructionObject.name_exit;
                } else if (step.rotary_name && instructionObject.name) {
                    instructionObject = instructionObject.name;
                } else if (step.maneuver.exit && instructionObject.exit) {
                    instructionObject = instructionObject.exit;
                } else {
                    instructionObject = instructionObject.default;
                }
                break;
            default:
                // NOOP, since no special logic for that type
            }

            // Decide way_name with special handling for name and ref
            var wayName = this.getWayName(language, step, options);

            // Decide which instruction string to use
            // Destination takes precedence over name
            var instruction;
            if (step.destinations && step.exits && instructionObject.exit_destination) {
                instruction = instructionObject.exit_destination;
            } else if (step.destinations && instructionObject.destination) {
                instruction = instructionObject.destination;
            } else if (step.exits && instructionObject.exit) {
                instruction = instructionObject.exit;
            } else if (wayName && instructionObject.name) {
                instruction = instructionObject.name;
            } else if (options.waypointName && instructionObject.named) {
                instruction = instructionObject.named;
            } else {
                instruction = instructionObject.default;
            }

            var destinations = step.destinations && step.destinations.split(': ');
            var destinationRef = destinations && destinations[0].split(',')[0];
            var destination = destinations && destinations[1] && destinations[1].split(',')[0];
            var firstDestination;
            if (destination && destinationRef) {
                firstDestination = destinationRef + ': ' + destination;
            } else {
                firstDestination = destinationRef || destination || '';
            }

            var nthWaypoint = options.legIndex >= 0 && options.legIndex !== options.legCount - 1 ? this.ordinalize(language, options.legIndex + 1) : '';

            // Replace tokens
            // NOOP if they don't exist
            var replaceTokens = {
                'way_name': wayName,
                'destination': firstDestination,
                'exit': (step.exits || '').split(';')[0],
                'exit_number': this.ordinalize(language, step.maneuver.exit || 1),
                'rotary_name': step.rotary_name,
                'lane_instruction': laneInstruction,
                'modifier': instructions[language][version].constants.modifier[modifier],
                'direction': this.directionFromDegree(language, step.maneuver.bearing_after),
                'nth': nthWaypoint,
                'waypoint_name': options.waypointName
            };

            return this.tokenize(language, instruction, replaceTokens, options);
        },
        grammarize: function(language, name, grammar) {
            if (!language) throw new Error('No language code provided');
            // Process way/rotary name with applying grammar rules if any
            if (name && grammar && grammars && grammars[language] && grammars[language][version]) {
                var rules = grammars[language][version][grammar];
                if (rules) {
                    // Pass original name to rules' regular expressions enclosed with spaces for simplier parsing
                    var n = ' ' + name + ' ';
                    var flags = grammars[language].meta.regExpFlags || '';
                    rules.forEach(function(rule) {
                        var re = new RegExp(rule[0], flags);
                        n = n.replace(re, rule[1]);
                    });

                    return n.trim();
                }
            }

            return name;
        },
        abbreviations: abbreviations,
        tokenize: function(language, instruction, tokens, options) {
            if (!language) throw new Error('No language code provided');
            // Keep this function context to use in inline function below (no arrow functions in ES4)
            var that = this;
            var startedWithToken = false;
            var output = instruction.replace(/\{(\w+)(?::(\w+))?\}/g, function(token, tag, grammar, offset) {
                var value = tokens[tag];

                // Return unknown token unchanged
                if (typeof value === 'undefined') {
                    return token;
                }

                value = that.grammarize(language, value, grammar);

                // If this token appears at the beginning of the instruction, capitalize it.
                if (offset === 0 && instructions[language].meta.capitalizeFirstLetter) {
                    startedWithToken = true;
                    value = that.capitalizeFirstLetter(language, value);
                }

                if (options && options.formatToken) {
                    value = options.formatToken(tag, value);
                }

                return value;
            })
            .replace(/ {2}/g, ' '); // remove excess spaces

            if (!startedWithToken && instructions[language].meta.capitalizeFirstLetter) {
                return this.capitalizeFirstLetter(language, output);
            }

            return output;
        }
    };
};

},{"./languages":4}],4:[function(_dereq_,module,exports){
// Load all language files explicitly to allow integration
// with bundling tools like webpack and browserify
var instructionsDa = _dereq_('./languages/translations/da.json');
var instructionsDe = _dereq_('./languages/translations/de.json');
var instructionsEn = _dereq_('./languages/translations/en.json');
var instructionsEo = _dereq_('./languages/translations/eo.json');
var instructionsEs = _dereq_('./languages/translations/es.json');
var instructionsEsEs = _dereq_('./languages/translations/es-ES.json');
var instructionsFi = _dereq_('./languages/translations/fi.json');
var instructionsFr = _dereq_('./languages/translations/fr.json');
var instructionsHe = _dereq_('./languages/translations/he.json');
var instructionsId = _dereq_('./languages/translations/id.json');
var instructionsIt = _dereq_('./languages/translations/it.json');
var instructionsKo = _dereq_('./languages/translations/ko.json');
var instructionsMy = _dereq_('./languages/translations/my.json');
var instructionsNl = _dereq_('./languages/translations/nl.json');
var instructionsNo = _dereq_('./languages/translations/no.json');
var instructionsPl = _dereq_('./languages/translations/pl.json');
var instructionsPtBr = _dereq_('./languages/translations/pt-BR.json');
var instructionsPtPt = _dereq_('./languages/translations/pt-PT.json');
var instructionsRo = _dereq_('./languages/translations/ro.json');
var instructionsRu = _dereq_('./languages/translations/ru.json');
var instructionsSv = _dereq_('./languages/translations/sv.json');
var instructionsTr = _dereq_('./languages/translations/tr.json');
var instructionsUk = _dereq_('./languages/translations/uk.json');
var instructionsVi = _dereq_('./languages/translations/vi.json');
var instructionsZhHans = _dereq_('./languages/translations/zh-Hans.json');

// Load all grammar files
var grammarFr = _dereq_('./languages/grammar/fr.json');
var grammarRu = _dereq_('./languages/grammar/ru.json');

// Load all abbreviations files
var abbreviationsBg = _dereq_('./languages/abbreviations/bg.json');
var abbreviationsCa = _dereq_('./languages/abbreviations/ca.json');
var abbreviationsDa = _dereq_('./languages/abbreviations/da.json');
var ebbreviationsDe = _dereq_('./languages/abbreviations/de.json');
var abbreviationsEn = _dereq_('./languages/abbreviations/en.json');
var abbreviationsEs = _dereq_('./languages/abbreviations/es.json');
var abbreviationsFr = _dereq_('./languages/abbreviations/fr.json');
var abbreviationsHe = _dereq_('./languages/abbreviations/he.json');
var abbreviationsHu = _dereq_('./languages/abbreviations/hu.json');
var abbreviationsLt = _dereq_('./languages/abbreviations/lt.json');
var abbreviationsNl = _dereq_('./languages/abbreviations/nl.json');
var abbreviationsRu = _dereq_('./languages/abbreviations/ru.json');
var abbreviationsSl = _dereq_('./languages/abbreviations/sl.json');
var abbreviationsSv = _dereq_('./languages/abbreviations/sv.json');
var abbreviationsUk = _dereq_('./languages/abbreviations/uk.json');
var abbreviationsVi = _dereq_('./languages/abbreviations/vi.json');

// Create a list of supported codes
var instructions = {
    'da': instructionsDa,
    'de': instructionsDe,
    'en': instructionsEn,
    'eo': instructionsEo,
    'es': instructionsEs,
    'es-ES': instructionsEsEs,
    'fi': instructionsFi,
    'fr': instructionsFr,
    'he': instructionsHe,
    'id': instructionsId,
    'it': instructionsIt,
    'ko': instructionsKo,
    'my': instructionsMy,
    'nl': instructionsNl,
    'no': instructionsNo,
    'pl': instructionsPl,
    'pt-BR': instructionsPtBr,
    'pt-PT': instructionsPtPt,
    'ro': instructionsRo,
    'ru': instructionsRu,
    'sv': instructionsSv,
    'tr': instructionsTr,
    'uk': instructionsUk,
    'vi': instructionsVi,
    'zh-Hans': instructionsZhHans
};

// Create list of supported grammar
var grammars = {
    'fr': grammarFr,
    'ru': grammarRu
};

// Create list of supported abbrevations
var abbreviations = {
    'bg': abbreviationsBg,
    'ca': abbreviationsCa,
    'da': abbreviationsDa,
    'de': ebbreviationsDe,
    'en': abbreviationsEn,
    'es': abbreviationsEs,
    'fr': abbreviationsFr,
    'he': abbreviationsHe,
    'hu': abbreviationsHu,
    'lt': abbreviationsLt,
    'nl': abbreviationsNl,
    'ru': abbreviationsRu,
    'sl': abbreviationsSl,
    'sv': abbreviationsSv,
    'uk': abbreviationsUk,
    'vi': abbreviationsVi
};
module.exports = {
    supportedCodes: Object.keys(instructions),
    instructions: instructions,
    grammars: grammars,
    abbreviations: abbreviations
};

},{"./languages/abbreviations/bg.json":5,"./languages/abbreviations/ca.json":6,"./languages/abbreviations/da.json":7,"./languages/abbreviations/de.json":8,"./languages/abbreviations/en.json":9,"./languages/abbreviations/es.json":10,"./languages/abbreviations/fr.json":11,"./languages/abbreviations/he.json":12,"./languages/abbreviations/hu.json":13,"./languages/abbreviations/lt.json":14,"./languages/abbreviations/nl.json":15,"./languages/abbreviations/ru.json":16,"./languages/abbreviations/sl.json":17,"./languages/abbreviations/sv.json":18,"./languages/abbreviations/uk.json":19,"./languages/abbreviations/vi.json":20,"./languages/grammar/fr.json":21,"./languages/grammar/ru.json":22,"./languages/translations/da.json":23,"./languages/translations/de.json":24,"./languages/translations/en.json":25,"./languages/translations/eo.json":26,"./languages/translations/es-ES.json":27,"./languages/translations/es.json":28,"./languages/translations/fi.json":29,"./languages/translations/fr.json":30,"./languages/translations/he.json":31,"./languages/translations/id.json":32,"./languages/translations/it.json":33,"./languages/translations/ko.json":34,"./languages/translations/my.json":35,"./languages/translations/nl.json":36,"./languages/translations/no.json":37,"./languages/translations/pl.json":38,"./languages/translations/pt-BR.json":39,"./languages/translations/pt-PT.json":40,"./languages/translations/ro.json":41,"./languages/translations/ru.json":42,"./languages/translations/sv.json":43,"./languages/translations/tr.json":44,"./languages/translations/uk.json":45,"./languages/translations/vi.json":46,"./languages/translations/zh-Hans.json":47}],5:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "международен": "Межд",
        "старши": "Стрш",
        "възел": "Въз",
        "пазар": "Mkt",
        "светисвети": "СвСв",
        "сестра": "сес",
        "уилям": "Ум",
        "апартаменти": "ап",
        "езеро": "Ез",
        "свети": "Св",
        "център": "Ц-р",
        "парк": "Пк",
        "маршрут": "М-т",
        "площад": "Пл",
        "национален": "Нац",
        "училище": "Уч",
        "река": "Рек",
        "поток": "П-к",
        "район": "Р-н",
        "крепост": "К-т",
        "паметник": "Пам",
        "университет": "Уни",
        "Връх": "Вр",
        "точка": "Точ",
        "планина": "Пл",
        "село": "с.",
        "височини": "вис",
        "младши": "Мл",
        "станция": "С-я",
        "проход": "Прох",
        "баща": "Бщ"
    },
    "classifications": {
        "шофиране": "Шоф",
        "плавен": "Пл",
        "място": "Мя",
        "тераса": "Тер",
        "магистрала": "М-ла",
        "площад": "Пл",
        "пеш": "Пеш",
        "залив": "З-в",
        "пътека": "П-ка",
        "платно": "Пл",
        "улица": "Ул",
        "алея": "Ал",
        "пешеходна": "Пеш",
        "точка": "Тч",
        "задминаване": "Задм",
        "кръгово": "Кр",
        "връх": "Вр",
        "съд": "Сд",
        "булевард": "Бул",
        "път": "Път",
        "скоростна": "Скор",
        "мост": "Мо"
    },
    "directions": {
        "северозапад": "СЗ",
        "североизток": "СИ",
        "югозапад": "ЮЗ",
        "югоизток": "ЮИ",
        "север": "С",
        "изток": "И",
        "юг": "Ю"
    }
}

},{}],6:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "comunicacions": "Com.",
        "entitat de població": "Nucli",
        "disseminat": "Diss.",
        "cap de municipi": "Cap",
        "indret": "Indr.",
        "comarca": "Cca.",
        "relleu del litoral": "Lit.",
        "municipi": "Mun.",
        "xarxa hidrogràfica": "Curs Fluv.",
        "equipament": "Equip.",
        "orografia": "Orogr.",
        "barri": "Barri",
        "edificació": "Edif.",
        "edificació històrica": "Edif. Hist.",
        "entitat descentralitzada": "E.M.D.",
        "element hidrogràfic": "Hidr."
    },
    "classifications": {
        "rotonda": "Rot.",
        "carrerada": "Ca.",
        "jardí": "J.",
        "paratge": "Pge.",
        "pont": "Pont",
        "lloc": "Lloc",
        "rambla": "Rbla.",
        "cases": "Cses.",
        "barranc": "Bnc.",
        "plana": "Plana",
        "polígon": "Pol.",
        "muralla": "Mur.",
        "enllaç": "Ellaç",
        "antiga carretera": "Actra",
        "glorieta": "Glor.",
        "autovia": "Autv.",
        "prolongació": "Prol.",
        "calçada": "Cda.",
        "carretera": "Ctra.",
        "pujada": "Pda.",
        "torrent": "T.",
        "disseminat": "Disse",
        "barri": "B.",
        "cinturó": "Cinto",
        "passera": "Psera",
        "sender": "Send.",
        "carrer": "C.",
        "sèquia": "Sèq.",
        "blocs": "Bloc",
        "rambleta": "Rblt.",
        "partida": "Par.",
        "costa": "Cos.",
        "sector": "Sec.",
        "corraló": "Crral",
        "urbanització": "Urb.",
        "autopista": "Autp.",
        "grup": "Gr.",
        "platja": "Pja.",
        "jardins": "J.",
        "complex": "Comp.",
        "portals": "Ptals",
        "finca": "Fin.",
        "travessera": "Trav.",
        "plaça": "Pl.",
        "travessia": "Trv.",
        "polígon industrial": "PI.",
        "passatge": "Ptge.",
        "apartaments": "Apmt.",
        "mirador": "Mira.",
        "antic": "Antic",
        "accés": "Acc.",
        "colònia": "Col.",
        "corriol": "Crol.",
        "portal": "Ptal.",
        "porta": "Pta.",
        "port": "Port",
        "carreró": "Cró.",
        "riera": "Ra.",
        "circumval·lació": "Cval.",
        "baixada": "Bda.",
        "placeta": "Plta.",
        "escala": "Esc.",
        "gran via": "GV",
        "rial": "Rial",
        "conjunt": "Conj.",
        "avinguda": "Av.",
        "esplanada": "Esp.",
        "cantonada": "Cant.",
        "ronda": "Rda.",
        "corredor": "Cdor.",
        "drecera": "Drec.",
        "passadís": "Pdís.",
        "viaducte": "Vdct.",
        "passeig": "Pg.",
        "veïnat": "Veï."
    },
    "directions": {
        "sudest": "SE",
        "sudoest": "SO",
        "nordest": "NE",
        "nordoest": "NO",
        "est": "E",
        "nord": "N",
        "oest": "O",
        "sud": "S"
    }
}

},{}],7:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "skole": "Sk.",
        "ved": "v.",
        "centrum": "C.",
        "sankt": "Skt.",
        "vestre": "v.",
        "hospital": "Hosp.",
        "stræde": "Str.",
        "nordre": "Nr.",
        "plads": "Pl.",
        "universitet": "Uni.",
        "vænge": "vg.",
        "station": "St."
    },
    "classifications": {
        "avenue": "Ave",
        "gammel": "Gl.",
        "dronning": "Dronn.",
        "sønder": "Sdr.",
        "nørre": "Nr.",
        "vester": "V.",
        "vestre": "V.",
        "øster": "Ø.",
        "østre": "Ø.",
        "boulevard": "Boul."
    },
    "directions": {
        "sydøst": "SØ",
        "nordvest": "NV",
        "syd": "S",
        "nordøst": "NØ",
        "sydvest": "SV",
        "vest": "V",
        "nord": "N",
        "øst": "Ø"
    }
}

},{}],8:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {},
    "classifications": {},
    "directions": {
        "osten": "O",
        "nordosten": "NO",
        "süden": "S",
        "nordwest": "NW",
        "norden": "N",
        "südost": "SO",
        "südwest": "SW",
        "westen": "W"
    }
}

},{}],9:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "square": "Sq",
        "centre": "Ctr",
        "sister": "Sr",
        "lake": "Lk",
        "fort": "Ft",
        "route": "Rte",
        "william": "Wm",
        "national": "Nat’l",
        "junction": "Jct",
        "center": "Ctr",
        "saint": "St",
        "saints": "SS",
        "station": "Sta",
        "mount": "Mt",
        "junior": "Jr",
        "mountain": "Mtn",
        "heights": "Hts",
        "university": "Univ",
        "school": "Sch",
        "international": "Int’l",
        "apartments": "Apts",
        "crossing": "Xing",
        "creek": "Crk",
        "township": "Twp",
        "downtown": "Dtwn",
        "father": "Fr",
        "senior": "Sr",
        "point": "Pt",
        "river": "Riv",
        "market": "Mkt",
        "village": "Vil",
        "park": "Pk",
        "memorial": "Mem"
    },
    "classifications": {
        "place": "Pl",
        "circle": "Cir",
        "bypass": "Byp",
        "motorway": "Mwy",
        "crescent": "Cres",
        "road": "Rd",
        "cove": "Cv",
        "lane": "Ln",
        "square": "Sq",
        "street": "St",
        "freeway": "Fwy",
        "walk": "Wk",
        "plaza": "Plz",
        "parkway": "Pky",
        "avenue": "Ave",
        "pike": "Pk",
        "drive": "Dr",
        "highway": "Hwy",
        "footway": "Ftwy",
        "point": "Pt",
        "court": "Ct",
        "terrace": "Ter",
        "walkway": "Wky",
        "alley": "Aly",
        "expressway": "Expy",
        "bridge": "Br",
        "boulevard": "Blvd",
        "turnpike": "Tpk"
    },
    "directions": {
        "southeast": "SE",
        "northwest": "NW",
        "south": "S",
        "west": "W",
        "southwest": "SW",
        "north": "N",
        "east": "E",
        "northeast": "NE"
    }
}

},{}],10:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "segunda": "2ª",
        "octubre": "8bre",
        "doctores": "Drs",
        "doctora": "Dra",
        "internacional": "Intl",
        "doctor": "Dr",
        "segundo": "2º",
        "señorita": "Srta",
        "doctoras": "Drs",
        "primera": "1ª",
        "primero": "1º",
        "san": "S",
        "colonia": "Col",
        "doña": "Dña",
        "septiembre": "7bre",
        "diciembre": "10bre",
        "señor": "Sr",
        "ayuntamiento": "Ayto",
        "señora": "Sra",
        "tercera": "3ª",
        "tercero": "3º",
        "don": "D",
        "santa": "Sta",
        "ciudad": "Cdad",
        "noviembre": "9bre",
        "departamento": "Dep"
    },
    "classifications": {
        "camino": "Cmno",
        "avenida": "Av",
        "paseo": "Pº",
        "autopista": "Auto",
        "calle": "C",
        "plaza": "Pza",
        "carretera": "Crta"
    },
    "directions": {
        "este": "E",
        "noreste": "NE",
        "sur": "S",
        "suroeste": "SO",
        "noroeste": "NO",
        "oeste": "O",
        "sureste": "SE",
        "norte": "N"
    }
}

},{}],11:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "allée": "All",
        "aérodrome": "Aérod",
        "aéroport": "Aérop"
    },
    "classifications": {
        "centrale": "Ctrale",
        "campings": "Camp.",
        "urbains": "Urb.",
        "mineure": "Min.",
        "publique": "Publ.",
        "supérieur": "Sup.",
        "fédération": "Féd.",
        "notre-dame": "ND",
        "saint": "St",
        "centre hospitalier régional": "CHR",
        "exploitation": "Exploit.",
        "général": "Gal",
        "civiles": "Civ.",
        "maritimes": "Marit.",
        "aviation": "Aviat.",
        "iii": "3",
        "archéologique": "Archéo.",
        "musical": "Music.",
        "musicale": "Music.",
        "immeuble": "Imm.",
        "xv": "15",
        "hôtel": "Hôt.",
        "alpine": "Alp.",
        "communale": "Commun.",
        "v": "5",
        "global": "Glob.",
        "université": "Univ.",
        "confédéral": "Conféd.",
        "xx": "20",
        "x": "10",
        "piscine": "Pisc.",
        "dimanche": "di.",
        "fleuve": "Flv",
        "postaux": "Post.",
        "musicienne": "Music.",
        "département": "Dépt",
        "février": "Févr.",
        "municipales": "Munic.",
        "province": "Prov.",
        "communautés": "Commtés",
        "barrage": "Barr.",
        "mercredi": "me.",
        "présidentes": "Pdtes",
        "cafétérias": "Cafét.",
        "théâtral": "Thé.",
        "viticulteur": "Vitic.",
        "poste": "Post.",
        "spécialisée": "Spéc.",
        "agriculture": "Agric.",
        "infirmier": "Infirm.",
        "animation": "Anim.",
        "mondiale": "Mond.",
        "arrêt": "Arr.",
        "zone": "zon.",
        "municipaux": "Munic.",
        "grand": "Gd",
        "janvier": "Janv.",
        "fondateur": "Fond.",
        "première": "1re",
        "municipale": "Munic.",
        "direction": "Dir.",
        "anonyme": "Anon.",
        "départementale": "Dépt",
        "moyens": "Moy.",
        "novembre": "Nov.",
        "jardin": "Jard.",
        "petites": "Pet.",
        "privé": "Priv.",
        "centres": "Ctres",
        "forestier": "Forest.",
        "xiv": "14",
        "africaines": "Afric.",
        "sergent": "Sgt",
        "européenne": "Eur.",
        "privée": "Priv.",
        "café": "Cfé",
        "xix": "19",
        "hautes": "Htes",
        "major": "Mjr",
        "vendredi": "ve.",
        "municipalité": "Munic.",
        "sous-préfecture": "Ss-préf.",
        "spéciales": "Spéc.",
        "secondaires": "Second.",
        "viie": "7e",
        "moyenne": "Moy.",
        "commerciale": "Commerc.",
        "région": "Rég.",
        "américaines": "Amér.",
        "américains": "Amér.",
        "service": "Sce",
        "professeur": "Prof.",
        "départemental": "Dépt",
        "hôtels": "Hôt.",
        "mondiales": "Mond.",
        "ire": "1re",
        "caporal": "Capo.",
        "militaire": "Milit.",
        "lycée d'enseignement professionnel": "LEP",
        "adjudant": "Adj.",
        "médicale": "Méd.",
        "conférences": "Confér.",
        "universelle": "Univ.",
        "xiie": "12e",
        "supérieures": "Sup.",
        "naturel": "Natur.",
        "société nationale": "SN",
        "hospitalier": "Hosp.",
        "culturelle": "Cult.",
        "américain": "Amér.",
        "son altesse royale": "S.A.R.",
        "infirmière": "Infirm.",
        "viii": "8",
        "fondatrice": "Fond.",
        "madame": "Mme",
        "métropolitain": "Métrop.",
        "ophtalmologues": "Ophtalmos",
        "xviie": "18e",
        "viiie": "8e",
        "commerçante": "Commerç.",
        "centre d'enseignement du second degré": "CES",
        "septembre": "Sept.",
        "agriculteur": "Agric.",
        "xiii": "13",
        "pontifical": "Pontif.",
        "cafétéria": "Cafét.",
        "prince": "Pce",
        "vie": "6e",
        "archiduchesse": "Archid.",
        "occidental": "Occ.",
        "spectacles": "Spect.",
        "camping": "Camp.",
        "métro": "Mº",
        "arrondissement": "Arrond.",
        "viticole": "Vitic.",
        "ii": "2",
        "siècle": "Si.",
        "chapelles": "Chap.",
        "centre": "Ctre",
        "sapeur-pompiers": "Sap.-pomp.",
        "établissements": "Étabts",
        "société anonyme": "SA",
        "directeurs": "Dir.",
        "vii": "7",
        "culturel": "Cult.",
        "central": "Ctral",
        "métropolitaine": "Métrop.",
        "administrations": "Admin.",
        "amiraux": "Amir.",
        "sur": "s/",
        "premiers": "1ers",
        "provence-alpes-côte d'azur": "PACA",
        "cathédrale": "Cathéd.",
        "iv": "4",
        "postale": "Post.",
        "social": "Soc.",
        "spécialisé": "Spéc.",
        "district": "Distr.",
        "technologique": "Techno.",
        "viticoles": "Vitic.",
        "ix": "9",
        "protégés": "Prot.",
        "historiques": "Hist.",
        "sous": "s/s",
        "national": "Nal",
        "ambassade": "Amb.",
        "cafés": "Cfés",
        "agronomie": "Agro.",
        "sapeurs": "Sap.",
        "petits": "Pet.",
        "monsieur": "M.",
        "boucher": "Bouch.",
        "restaurant": "Restau.",
        "lycée": "Lyc.",
        "urbaine": "Urb.",
        "préfecture": "Préf.",
        "districts": "Distr.",
        "civil": "Civ.",
        "protégées": "Prot.",
        "sapeur": "Sap.",
        "théâtre": "Thé.",
        "collège": "Coll.",
        "mardi": "ma.",
        "mémorial": "Mémor.",
        "africain": "Afric.",
        "républicaine": "Républ.",
        "sociale": "Soc.",
        "spécial": "Spéc.",
        "technologie": "Techno.",
        "charcuterie": "Charc.",
        "commerces": "Commerc.",
        "fluviale": "Flv",
        "parachutistes": "Para.",
        "primaires": "Prim.",
        "directions": "Dir.",
        "présidentiel": "Pdtl",
        "nationales": "Nales",
        "après": "apr.",
        "samedi": "sa.",
        "unité": "U.",
        "xxiii": "23",
        "associé": "Assoc.",
        "électrique": "Électr.",
        "populaire": "Pop.",
        "asiatique": "Asiat.",
        "navigable": "Navig.",
        "présidente": "Pdte",
        "xive": "14e",
        "associés": "Assoc.",
        "pompiers": "Pomp.",
        "agricoles": "Agric.",
        "élém": "Élém.",
        "décembre": "Déc.",
        "son altesse": "S.Alt.",
        "après-midi": "a.-m.",
        "mineures": "Min.",
        "juillet": "Juil.",
        "aviatrices": "Aviat.",
        "fondation": "Fond.",
        "pontificaux": "Pontif.",
        "temple": "Tple",
        "européennes": "Eur.",
        "régionale": "Rég.",
        "informations": "Infos",
        "mondiaux": "Mond.",
        "infanterie": "Infant.",
        "archéologie": "Archéo.",
        "dans": "d/",
        "hospice": "Hosp.",
        "spectacle": "Spect.",
        "hôtels-restaurants": "Hôt.-Rest.",
        "hôtel-restaurant": "Hôt.-Rest.",
        "hélicoptère": "hélico",
        "xixe": "19e",
        "cliniques": "Clin.",
        "docteur": "Dr",
        "secondaire": "Second.",
        "municipal": "Munic.",
        "générale": "Gale",
        "château": "Chât.",
        "commerçant": "Commerç.",
        "avril": "Avr.",
        "clinique": "Clin.",
        "urbaines": "Urb.",
        "navale": "Nav.",
        "navigation": "Navig.",
        "asiatiques": "Asiat.",
        "pontificales": "Pontif.",
        "administrative": "Admin.",
        "syndicat": "Synd.",
        "lundi": "lu.",
        "petite": "Pet.",
        "maritime": "Marit.",
        "métros": "Mº",
        "enseignement": "Enseign.",
        "fluviales": "Flv",
        "historique": "Hist.",
        "comtés": "Ctés",
        "résidentiel": "Résid.",
        "international": "Int.",
        "supérieure": "Sup.",
        "centre hospitalier universitaire": "CHU",
        "confédération": "Conféd.",
        "boucherie": "Bouch.",
        "fondatrices": "Fond.",
        "médicaux": "Méd.",
        "européens": "Eur.",
        "orientaux": "Ori.",
        "naval": "Nav.",
        "étang": "Étg",
        "provincial": "Prov.",
        "junior": "Jr",
        "départementales": "Dépt",
        "musique": "Musiq.",
        "directrices": "Dir.",
        "maréchal": "Mal",
        "civils": "Civ.",
        "protégé": "Prot.",
        "établissement": "Étabt",
        "trafic": "Traf.",
        "aviateur": "Aviat.",
        "archives": "Arch.",
        "africains": "Afric.",
        "maternelle": "Matern.",
        "industrielle": "Ind.",
        "administratif": "Admin.",
        "oriental": "Ori.",
        "universitaire": "Univ.",
        "majeur": "Maj.",
        "haute": "Hte",
        "communal": "Commun.",
        "petit": "Pet.",
        "commune": "Commun.",
        "exploitant": "Exploit.",
        "conférence": "Confér.",
        "monseigneur": "Mgr",
        "pharmacien": "Pharm.",
        "jeudi": "je.",
        "primaire": "Prim.",
        "hélicoptères": "hélicos",
        "agronomique": "Agro.",
        "médecin": "Méd.",
        "ve": "5e",
        "pontificale": "Pontif.",
        "ier": "1er",
        "cinéma": "Ciné",
        "fluvial": "Flv",
        "occidentaux": "Occ.",
        "commerçants": "Commerç.",
        "banque": "Bq",
        "moyennes": "Moy.",
        "pharmacienne": "Pharm.",
        "démocratique": "Dém.",
        "cinémas": "Cinés",
        "spéciale": "Spéc.",
        "présidents": "Pdts",
        "directrice": "Dir.",
        "vi": "6",
        "basse": "Bas.",
        "xve": "15e",
        "état": "É.",
        "aviateurs": "Aviat.",
        "majeurs": "Maj.",
        "infirmiers": "Infirm.",
        "église": "Égl.",
        "confédérale": "Conféd.",
        "xxie": "21e",
        "comte": "Cte",
        "européen": "Eur.",
        "union": "U.",
        "pharmacie": "Pharm.",
        "infirmières": "Infirm.",
        "comté": "Cté",
        "sportive": "Sport.",
        "deuxième": "2e",
        "xvi": "17",
        "haut": "Ht",
        "médicales": "Méd.",
        "développé": "Dévelop.",
        "bâtiment": "Bât.",
        "commerce": "Commerc.",
        "ive": "4e",
        "associatif": "Assoc.",
        "rural": "Rur.",
        "cimetière": "Cim.",
        "régional": "Rég.",
        "ferroviaire": "Ferr.",
        "vers": "v/",
        "mosquée": "Mosq.",
        "mineurs": "Min.",
        "nautique": "Naut.",
        "châteaux": "Chât.",
        "sportif": "Sport.",
        "mademoiselle": "Mle",
        "école": "Éc.",
        "doyen": "Doy.",
        "industriel": "Ind.",
        "chapelle": "Chap.",
        "sociétés": "Stés",
        "internationale": "Int.",
        "coopératif": "Coop.",
        "hospices": "Hosp.",
        "xxii": "22",
        "parachutiste": "Para.",
        "alpines": "Alp.",
        "civile": "Civ.",
        "xvie": "17e",
        "états": "É.",
        "musée": "Msée",
        "centrales": "Ctrales",
        "globaux": "Glob.",
        "supérieurs": "Sup.",
        "syndicats": "Synd.",
        "archevêque": "Archev.",
        "docteurs": "Drs",
        "bibliothèque": "Biblio.",
        "lieutenant": "Lieut.",
        "république": "Rép.",
        "vétérinaire": "Vét.",
        "départementaux": "Dépt",
        "premier": "1er",
        "fluviaux": "Flv",
        "animé": "Anim.",
        "orientales": "Ori.",
        "technologiques": "Techno.",
        "princesse": "Pse",
        "routière": "Rout.",
        "coopérative": "Coop.",
        "scolaire": "Scol.",
        "écoles": "Éc.",
        "football": "Foot",
        "territoriale": "Territ.",
        "commercial": "Commerc.",
        "mineur": "Min.",
        "millénaires": "Mill.",
        "association": "Assoc.",
        "catholique": "Cathol.",
        "administration": "Admin.",
        "mairie": "Mair.",
        "portuaire": "Port.",
        "tertiaires": "Terti.",
        "théâtrale": "Thé.",
        "palais": "Pal.",
        "troisième": "3e",
        "directeur": "Dir.",
        "vétérinaires": "Vét.",
        "faculté": "Fac.",
        "occidentales": "Occ.",
        "viticulteurs": "Vitic.",
        "xvii": "18",
        "occidentale": "Occ.",
        "amiral": "Amir.",
        "professionnel": "Profess.",
        "administratives": "Admin.",
        "commerciales": "Commerc.",
        "saints": "Sts",
        "agronomes": "Agro.",
        "stade": "Std",
        "sous-préfet": "Ss-préf.",
        "senior": "Sr",
        "agronome": "Agro.",
        "terrain": "Terr.",
        "catholiques": "Cathol.",
        "résidentielle": "Résid.",
        "grands": "Gds",
        "exploitants": "Exploit.",
        "xiiie": "13e",
        "croix": "Cx",
        "généraux": "Gaux",
        "crédit": "Créd.",
        "cimetières": "Cim.",
        "antenne": "Ant.",
        "médical": "Méd.",
        "collèges": "Coll.",
        "musicien": "Music.",
        "apostolique": "Apost.",
        "postal": "Post.",
        "territorial": "Territ.",
        "urbanisme": "Urb.",
        "préfectorale": "Préf.",
        "fondateurs": "Fond.",
        "information": "Info.",
        "églises": "Égl.",
        "ophtalmologue": "Ophtalmo",
        "congrégation": "Congrég.",
        "charcutier": "Charc.",
        "étage": "ét.",
        "consulat": "Consul.",
        "public": "Publ.",
        "ferrée": "Ferr.",
        "matin": "mat.",
        "société anonyme à responsabilité limitée": "SARL",
        "monuments": "Mmts",
        "protection": "Prot.",
        "universel": "Univ.",
        "nationale": "Nale",
        "président": "Pdt",
        "provinciale": "Prov.",
        "agriculteurs": "Agric.",
        "préfectoral": "Préf.",
        "xxe": "20e",
        "alpins": "Alp.",
        "avant": "av.",
        "infirmerie": "Infirm.",
        "deux mil": "2000",
        "rurale": "Rur.",
        "administratifs": "Admin.",
        "octobre": "Oct.",
        "archipel": "Archip.",
        "communauté": "Commté",
        "globales": "Glob.",
        "alpin": "Alp.",
        "numéros": "Nºˢ",
        "lieutenant-colonel": "Lieut.-Col.",
        "jésus-christ": "J.-C.",
        "agricole": "Agric.",
        "sa majesté": "S.Maj.",
        "associative": "Assoc.",
        "xxi": "21",
        "présidentielle": "Pdtle",
        "moyen": "Moy.",
        "fédéral": "Féd.",
        "professionnelle": "Profess.",
        "tertiaire": "Terti.",
        "ixe": "9e",
        "hôpital": "Hôp.",
        "technologies": "Techno.",
        "iiie": "3e",
        "développement": "Dévelop.",
        "monument": "Mmt",
        "forestière": "Forest.",
        "numéro": "Nº",
        "viticulture": "Vitic.",
        "traversière": "Traver.",
        "technique": "Tech.",
        "électriques": "Électr.",
        "militaires": "Milit.",
        "pompier": "Pomp.",
        "américaine": "Amér.",
        "préfet": "Préf.",
        "congrégations": "Congrég.",
        "pâtissier": "Pâtiss.",
        "mondial": "Mond.",
        "ophtalmologie": "Ophtalm.",
        "sainte": "Ste",
        "africaine": "Afric.",
        "aviatrice": "Aviat.",
        "doyens": "Doy.",
        "société": "Sté",
        "majeures": "Maj.",
        "orientale": "Ori.",
        "ministère": "Min.",
        "archiduc": "Archid.",
        "territoire": "Territ.",
        "techniques": "Tech.",
        "île-de-france": "IDF",
        "globale": "Glob.",
        "xe": "10e",
        "xie": "11e",
        "majeure": "Maj.",
        "commerciaux": "Commerc.",
        "maire": "Mair.",
        "spéciaux": "Spéc.",
        "grande": "Gde",
        "messieurs": "MM",
        "colonel": "Col.",
        "millénaire": "Mill.",
        "xi": "11",
        "urbain": "Urb.",
        "fédérale": "Féd.",
        "ferré": "Ferr.",
        "rivière": "Riv.",
        "républicain": "Républ.",
        "grandes": "Gdes",
        "régiment": "Régim.",
        "hauts": "Hts",
        "catégorie": "Catég.",
        "basses": "Bas.",
        "xii": "12",
        "agronomiques": "Agro.",
        "iie": "2e",
        "protégée": "Prot.",
        "sapeur-pompier": "Sap.-pomp."
    },
    "directions": {
        "est-nord-est": "ENE",
        "nord-est": "NE",
        "ouest": "O",
        "sud-est": "SE",
        "est-sud-est": "ESE",
        "nord-nord-est": "NNE",
        "sud": "S",
        "nord-nord-ouest": "NNO",
        "nord-ouest": "NO",
        "nord": "N",
        "ouest-sud-ouest": "OSO",
        "ouest-nord-ouest": "ONO",
        "sud-ouest": "SO",
        "sud-sud-est": "SSE",
        "sud-sud-ouest": "SSO",
        "est": "E"
    }
}

},{}],12:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "שדרות": "שד'"
    },
    "classifications": {},
    "directions": {}
}

},{}],13:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {},
    "classifications": {},
    "directions": {
        "kelet": "K",
        "északkelet": "ÉK",
        "dél": "D",
        "északnyugat": "ÉNY",
        "észak": "É",
        "délkelet": "DK",
        "délnyugat": "DNY",
        "nyugat": "NY"
    }
}

},{}],14:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "apartamentai": "Apt",
        "aukštumos": "Aukš",
        "centras": "Ctr",
        "ežeras": "Ež",
        "fortas": "Ft",
        "greitkelis": "Grtkl",
        "juosta": "Jst",
        "kaimas": "Km",
        "kalnas": "Kln",
        "kelias": "Kl",
        "kiemelis": "Kml",
        "miestelis": "Mstl",
        "miesto centras": "M.Ctr",
        "mokykla": "Mok",
        "nacionalinis": "Nac",
        "paminklas": "Pmkl",
        "parkas": "Pk",
        "pusratis": "Psrt",
        "sankryža": "Skrž",
        "sesė": "Sesė",
        "skveras": "Skv",
        "stotis": "St",
        "šv": "Šv",
        "tarptautinis": "Trptaut",
        "taškas": "Tšk",
        "tėvas": "Tėv",
        "turgus": "Tgs",
        "universitetas": "Univ",
        "upė": "Up",
        "upelis": "Up",
        "vieta": "Vt"
    },
    "classifications": {
        "aikštė": "a.",
        "alėja": "al.",
        "aplinkkelis": "aplinkl.",
        "autostrada": "auto.",
        "bulvaras": "b.",
        "gatvė": "g.",
        "kelias": "kel.",
        "krantinė": "krant.",
        "prospektas": "pr.",
        "plentas": "pl.",
        "skersgatvis": "skg.",
        "takas": "tak.",
        "tiltas": "tlt."
    },
    "directions": {
        "pietūs": "P",
        "vakarai": "V",
        "šiaurė": "Š",
        "šiaurės vakarai": "ŠV",
        "pietryčiai": "PR",
        "šiaurės rytai": "ŠR",
        "rytai": "R",
        "pietvakariai": "PV"
    }
}

},{}],15:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "centrum": "Cntrm",
        "nationaal": "Nat’l",
        "berg": "Brg",
        "meer": "Mr",
        "kruising": "Krsng",
        "toetreden": "Ttrdn"
    },
    "classifications": {
        "bypass": "Pass",
        "brug": "Br",
        "straat": "Str",
        "rechtbank": "Rbank",
        "snoek": "Snk",
        "autobaan": "Baan",
        "terras": "Trrs",
        "punt": "Pt",
        "plaza": "Plz",
        "rijden": "Rijd",
        "parkway": "Pky",
        "inham": "Nham",
        "snelweg": "Weg",
        "halve maan": "Maan",
        "cirkel": "Crkl",
        "laan": "Ln",
        "rijbaan": "Strook",
        "weg": "Weg",
        "lopen": "Lpn",
        "autoweg": "Weg",
        "boulevard": "Blvd",
        "plaats": "Plts",
        "steeg": "Stg",
        "voetpad": "Stoep"
    },
    "directions": {
        "noordoost": "NO",
        "westen": "W",
        "zuiden": "Z",
        "zuidwest": "ZW",
        "oost": "O",
        "zuidoost": "ZO",
        "noordwest": "NW",
        "noorden": "N"
    }
}

},{}],16:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "апостола": "ап.",
        "апостолов": "апп.",
        "великомученика": "вмч",
        "великомученицы": "вмц.",
        "владение": "вл.",
        "город": "г.",
        "деревня": "д.",
        "имени": "им.",
        "мученика":"мч.",
        "мучеников": "мчч.",
        "мучениц": "мцц.",
        "мученицы": "мц.",
        "озеро": "о.",
        "посёлок": "п.",
        "преподобного":  "прп.",
        "преподобных": "прпп.",
        "река": "р.",
        "святителей": "свтт.",
        "святителя": "свт.",
        "священномученика": "сщмч.",
        "священномучеников": "сщмчч.",
        "станция": "ст.",
        "участок": "уч."
    },
    "classifications": {
        "проезд": "пр-д",
        "проспект": "пр.",
        "переулок": "пер.",
        "набережная": "наб.",
        "площадь": "пл.",
        "шоссе": "ш.",
        "бульвар": "б.",
        "тупик": "туп.",
        "улица": "ул."
    },
    "directions": {
        "восток": "В",
        "северо-восток": "СВ",
        "юго-восток": "ЮВ",
        "юго-запад": "ЮЗ",
        "северо-запад": "СЗ",
        "север": "С",
        "запад": "З",
        "юг": "Ю"
    }
}

},{}],17:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {},
    "classifications": {},
    "directions": {
        "vzhod": "V",
        "severovzhod": "SV",
        "jug": "J",
        "severozahod": "SZ",
        "sever": "S",
        "jugovzhod": "JV",
        "jugozahod": "JZ",
        "zahod": "Z"
    }
}

},{}],18:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "sankta": "s:ta",
        "gamla": "G:la",
        "sankt": "s:t"
    },
    "classifications": {
        "Bro": "Br"
    },
    "directions": {
        "norr": "N",
        "sydöst": "SO",
        "väster": "V",
        "öster": "O",
        "nordväst": "NV",
        "sydväst": "SV",
        "söder": "S",
        "nordöst": "NO"
    }
}

},{}],19:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {},
    "classifications": {},
    "directions": {
        "схід": "Сх",
        "північний схід": "ПнСх",
        "південь": "Пд",
        "північний захід": "ПнЗд",
        "північ": "Пн",
        "південний схід": "ПдСх",
        "південний захід": "ПдЗх",
        "захід": "Зх"
    }
}

},{}],20:[function(_dereq_,module,exports){
module.exports={
    "abbreviations": {
        "viện bảo tàng": "VBT",
        "thị trấn": "Tt",
        "đại học": "ĐH",
        "căn cứ không quan": "CCKQ",
        "câu lạc bộ": "CLB",
        "bưu điện": "BĐ",
        "khách sạn": "KS",
        "khu du lịch": "KDL",
        "khu công nghiệp": "KCN",
        "khu nghỉ mát": "KNM",
        "thị xã": "Tx",
        "khu chung cư": "KCC",
        "phi trường": "PT",
        "trung tâm": "TT",
        "tổng công ty": "TCty",
        "trung học cơ sở": "THCS",
        "sân bay quốc tế": "SBQT",
        "trung học phổ thông": "THPT",
        "cao đẳng": "CĐ",
        "công ty": "Cty",
        "sân bay": "SB",
        "thành phố": "Tp",
        "công viên": "CV",
        "sân vận động": "SVĐ",
        "linh mục": "LM",
        "vườn quốc gia": "VQG"
    },
    "classifications": {
        "huyện lộ": "HL",
        "đường tỉnh": "ĐT",
        "quốc lộ": "QL",
        "xa lộ": "XL",
        "hương lộ": "HL",
        "tỉnh lộ": "TL",
        "đường huyện": "ĐH",
        "đường cao tốc": "ĐCT",
        "đại lộ": "ĐL",
        "việt nam": "VN",
        "quảng trường": "QT",
        "đường bộ": "ĐB"
    },
    "directions": {
        "tây": "T",
        "nam": "N",
        "đông nam": "ĐN",
        "đông bắc": "ĐB",
        "tây nam": "TN",
        "đông": "Đ",
        "bắc": "B"
    }
}

},{}],21:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "regExpFlags": "gi"
    },
    "v5": {
        "article": [
            ["^ Acc[èe]s ", " l’accès "],
            ["^ Aire ", " l’aire "],
            ["^ All[ée]e ", " l’allée "],
            ["^ Anse ", " l’anse "],
            ["^ (L['’])?Autoroute ", " l’autoroute "],
            ["^ Avenue ", " l’avenue "],
            ["^ Barreau ", " le barreau "],
            ["^ Boulevard ", " le boulevard "],
            ["^ Chemin ", " le chemin "],
            ["^ Petit[\\- ]Chemin ", " le petit chemin "],
            ["^ Cit[ée] ", " la cité "],
            ["^ Clos ", " le clos "],
            ["^ Corniche ", " la corniche "],
            ["^ Cour ", " la cour "],
            ["^ Cours ", " le cours "],
            ["^ D[ée]viation ", " la déviation "],
            ["^ Entr[ée]e ", " l’entrée "],
            ["^ Esplanade ", " l’esplanade "],
            ["^ Galerie ", " la galerie "],
            ["^ Impasse ", " l’impasse "],
            ["^ Lotissement ", " le lotissement "],
            ["^ Mont[ée]e ", " la montée "],
            ["^ Parc ", " le parc "],
            ["^ Parvis ", " le parvis "],
            ["^ Passage ", " le passage "],
            ["^ Place ", " la place "],
            ["^ Petit[\\- ]Pont ", " le petit-pont "],
            ["^ Pont ", " le pont "],
            ["^ Promenade ", " la promenade "],
            ["^ Quai ", " le quai "],
            ["^ Rocade ", " la rocade "],
            ["^ Rond[\\- ]?Point ", " le rond-point "],
            ["^ Route ", " la route "],
            ["^ Rue ", " la rue "],
            ["^ Grande Rue ", " la grande rue "],
            ["^ Sente ", " la sente "],
            ["^ Sentier ", " le sentier "],
            ["^ Sortie ", " la sortie "],
            ["^ Souterrain ", " le souterrain "],
            ["^ Square ", " le square "],
            ["^ Terrasse ", " la terrasse "],
            ["^ Traverse ", " la traverse "],
            ["^ Tunnel ", " le tunnel "],
            ["^ Viaduc ", " le viaduc "],
            ["^ Villa ", " la villa "],
            ["^ Village ", " le village "],
            ["^ Voie ", " la voie "],

            [" ([dl])'", " $1’"]
        ],
        "preposition": [
            ["^ Le ", "  du "],
            ["^ Les ", "  des "],
            ["^ La ", "  de La "],

            ["^ Acc[èe]s ", "  de l’accès "],
            ["^ Aire ", "  de l’aire "],
            ["^ All[ée]e ", "  de l’allée "],
            ["^ Anse ", "  de l’anse "],
            ["^ (L['’])?Autoroute ", "  de l’autoroute "],
            ["^ Avenue ", "  de l’avenue "],
            ["^ Barreau ", "  du barreau "],
            ["^ Boulevard ", "  du boulevard "],
            ["^ Chemin ", "  du chemin "],
            ["^ Petit[\\- ]Chemin ", "  du petit chemin "],
            ["^ Cit[ée] ", "  de la cité "],
            ["^ Clos ", "  du clos "],
            ["^ Corniche ", "  de la corniche "],
            ["^ Cour ", "  de la cour "],
            ["^ Cours ", "  du cours "],
            ["^ D[ée]viation ", "  de la déviation "],
            ["^ Entr[ée]e ", "  de l’entrée "],
            ["^ Esplanade ", "  de l’esplanade "],
            ["^ Galerie ", "  de la galerie "],
            ["^ Impasse ", "  de l’impasse "],
            ["^ Lotissement ", "  du lotissement "],
            ["^ Mont[ée]e ", "  de la montée "],
            ["^ Parc ", "  du parc "],
            ["^ Parvis ", "  du parvis "],
            ["^ Passage ", "  du passage "],
            ["^ Place ", "  de la place "],
            ["^ Petit[\\- ]Pont ", "  du petit-pont "],
            ["^ Pont ", "  du pont "],
            ["^ Promenade ", "  de la promenade "],
            ["^ Quai ", "  du quai "],
            ["^ Rocade ", "  de la rocade "],
            ["^ Rond[\\- ]?Point ", "  du rond-point "],
            ["^ Route ", "  de la route "],
            ["^ Rue ", "  de la rue "],
            ["^ Grande Rue ", "  de la grande rue "],
            ["^ Sente ", "  de la sente "],
            ["^ Sentier ", "  du sentier "],
            ["^ Sortie ", "  de la sortie "],
            ["^ Souterrain ", "  du souterrain "],
            ["^ Square ", "  du square "],
            ["^ Terrasse ", "  de la terrasse "],
            ["^ Traverse ", "  de la traverse "],
            ["^ Tunnel ", "  du tunnel "],
            ["^ Viaduc ", "  du viaduc "],
            ["^ Villa ", "  de la villa "],
            ["^ Village ", "  du village "],
            ["^ Voie ", "  de la voie "],

            ["^ ([AÂÀEÈÉÊËIÎÏOÔUÙÛÜYŸÆŒ])", "  d’$1"],
            ["^ (\\S)", "  de $1"],
            [" ([dl])'", " $1’"]
        ],
        "rotary": [
            ["^ Le ", "  le rond-point du "],
            ["^ Les ", "  le rond-point des "],
            ["^ La ", "  le rond-point de La "],

            ["^ Acc[èe]s ", " le rond-point de l’accès "],
            ["^ Aire ", "  le rond-point de l’aire "],
            ["^ All[ée]e ", "  le rond-point de l’allée "],
            ["^ Anse ", "  le rond-point de l’anse "],
            ["^ (L['’])?Autoroute ", "  le rond-point de l’autoroute "],
            ["^ Avenue ", "  le rond-point de l’avenue "],
            ["^ Barreau ", "  le rond-point du barreau "],
            ["^ Boulevard ", "  le rond-point du boulevard "],
            ["^ Chemin ", "  le rond-point du chemin "],
            ["^ Petit[\\- ]Chemin ", "  le rond-point du petit chemin "],
            ["^ Cit[ée] ", "  le rond-point de la cité "],
            ["^ Clos ", "  le rond-point du clos "],
            ["^ Corniche ", "  le rond-point de la corniche "],
            ["^ Cour ", "  le rond-point de la cour "],
            ["^ Cours ", "  le rond-point du cours "],
            ["^ D[ée]viation ", "  le rond-point de la déviation "],
            ["^ Entr[ée]e ", "  le rond-point de l’entrée "],
            ["^ Esplanade ", "  le rond-point de l’esplanade "],
            ["^ Galerie ", "  le rond-point de la galerie "],
            ["^ Impasse ", "  le rond-point de l’impasse "],
            ["^ Lotissement ", "  le rond-point du lotissement "],
            ["^ Mont[ée]e ", "  le rond-point de la montée "],
            ["^ Parc ", "  le rond-point du parc "],
            ["^ Parvis ", "  le rond-point du parvis "],
            ["^ Passage ", "  le rond-point du passage "],
            ["^ Place ", "  le rond-point de la place "],
            ["^ Petit[\\- ]Pont ", "  le rond-point du petit-pont "],
            ["^ Pont ", "  le rond-point du pont "],
            ["^ Promenade ", "  le rond-point de la promenade "],
            ["^ Quai ", "  le rond-point du quai "],
            ["^ Rocade ", "  le rond-point de la rocade "],
            ["^ Rond[\\- ]?Point ", "  le rond-point "],
            ["^ Route ", "  le rond-point de la route "],
            ["^ Rue ", "  le rond-point de la rue "],
            ["^ Grande Rue ", "  le rond-point de la grande rue "],
            ["^ Sente ", "  le rond-point de la sente "],
            ["^ Sentier ", "  le rond-point du sentier "],
            ["^ Sortie ", "  le rond-point de la sortie "],
            ["^ Souterrain ", "  le rond-point du souterrain "],
            ["^ Square ", "  le rond-point du square "],
            ["^ Terrasse ", "  le rond-point de la terrasse "],
            ["^ Traverse ", "  le rond-point de la traverse "],
            ["^ Tunnel ", "  le rond-point du tunnel "],
            ["^ Viaduc ", "  le rond-point du viaduc "],
            ["^ Villa ", "  le rond-point de la villa "],
            ["^ Village ", "  le rond-point du village "],
            ["^ Voie ", "  le rond-point de la voie "],

            ["^ ([AÂÀEÈÉÊËIÎÏOÔUÙÛÜYŸÆŒ])", "  le rond-point d’$1"],
            ["^ (\\S)", "  le rond-point de $1"],
            [" ([dl])'", " $1’"]
        ],
        "arrival": [
            ["^ Le ", "  au "],
            ["^ Les ", "  aux "],
            ["^ La ", "  à La "],
            ["^ (\\S)", "  à $1"],

            [" ([dl])'", " $1’"]
        ]
    }
}

},{}],22:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "regExpFlags": ""
    },
    "v5": {
        "accusative": [
            ["^ ([«\"])", " трасса $1"],

            ["^ (\\S+)ая [Аа]ллея ", " $1ую аллею "],
            ["^ (\\S+)ья [Аа]ллея ", " $1ью аллею "],
            ["^ (\\S+)яя [Аа]ллея ", " $1юю аллею "],
            ["^ (\\d+)-я (\\S+)ая [Аа]ллея ", " $1-ю $2ую аллею "],
            ["^ [Аа]ллея ", " аллею "],

            ["^ (\\S+)ая-(\\S+)ая [Уу]лица ", " $1ую-$2ую улицу "],
            ["^ (\\S+)ая [Уу]лица ", " $1ую улицу "],
            ["^ (\\S+)ья [Уу]лица ", " $1ью улицу "],
            ["^ (\\S+)яя [Уу]лица ", " $1юю улицу "],
            ["^ (\\d+)-я [Уу]лица ", " $1-ю улицу "],
            ["^ (\\d+)-я (\\S+)ая [Уу]лица ", " $1-ю $2ую улицу "],
            ["^ (\\S+)ая (\\S+)ая [Уу]лица ", " $1ую $2ую улицу "],
            ["^ (\\S+[вн])а [Уу]лица ", " $1у улицу "],
            ["^ (\\S+)ая (\\S+[вн])а [Уу]лица ", " $1ую $2у улицу "],
            ["^ Даньславля [Уу]лица ", " Даньславлю улицу "],
            ["^ Добрыня [Уу]лица ", " Добрыню улицу "],
            ["^ Людогоща [Уу]лица ", " Людогощу улицу "],
            ["^ [Уу]лица ", " улицу "],

            ["^ (\\d+)-я [Лл]иния ", " $1-ю линию "],
            ["^ (\\d+)-(\\d+)-я [Лл]иния ", " $1-$2-ю линию "],
            ["^ (\\S+)ая [Лл]иния ", " $1ую линию "],
            ["^ (\\S+)ья [Лл]иния ", " $1ью линию "],
            ["^ (\\S+)яя [Лл]иния ", " $1юю линию "],
            ["^ (\\d+)-я (\\S+)ая [Лл]иния ", " $1-ю $2ую линию "],
            ["^ [Лл]иния ", " линию "],

            ["^ (\\d+)-(\\d+)-я [Лл]инии ", " $1-$2-ю линии "],

            ["^ (\\S+)ая [Нн]абережная ", " $1ую набережную "],
            ["^ (\\S+)ья [Нн]абережная ", " $1ью набережную "],
            ["^ (\\S+)яя [Нн]абережная ", " $1юю набережную "],
            ["^ (\\d+)-я (\\S+)ая [Нн]абережная ", " $1-ю $2ую набережную "],
            ["^ [Нн]абережная ", " набережную "],

            ["^ (\\S+)ая [Пп]лощадь ", " $1ую площадь "],
            ["^ (\\S+)ья [Пп]лощадь ", " $1ью площадь "],
            ["^ (\\S+)яя [Пп]лощадь ", " $1юю площадь "],
            ["^ (\\S+[вн])а [Пп]лощадь ", " $1у площадь "],
            ["^ (\\d+)-я (\\S+)ая [Пп]лощадь ", " $1-ю $2ую площадь "],
            ["^ [Пп]лощадь ", " площадь "],

            ["^ (\\S+)ая [Пп]росека ", " $1ую просеку "],
            ["^ (\\S+)ья [Пп]росека ", " $1ью просеку "],
            ["^ (\\S+)яя [Пп]росека ", " $1юю просеку "],
            ["^ (\\d+)-я [Пп]росека ", " $1-ю просеку "],
            ["^ [Пп]росека ", " просеку "],

            ["^ (\\S+)ая [Ээ]стакада ", " $1ую эстакаду "],
            ["^ (\\S+)ья [Ээ]стакада ", " $1ью эстакаду "],
            ["^ (\\S+)яя [Ээ]стакада ", " $1юю эстакаду "],
            ["^ (\\d+)-я (\\S+)ая [Ээ]стакада ", " $1-ю $2ую эстакаду "],
            ["^ [Ээ]стакада ", " эстакаду "],

            ["^ (\\S+)ая [Мм]агистраль ", " $1ую магистраль "],
            ["^ (\\S+)ья [Мм]агистраль ", " $1ью магистраль "],
            ["^ (\\S+)яя [Мм]агистраль ", " $1юю магистраль "],
            ["^ (\\S+)ая (\\S+)ая [Мм]агистраль ", " $1ую $2ую магистраль "],
            ["^ (\\d+)-я (\\S+)ая [Мм]агистраль ", " $1-ю $2ую магистраль "],
            ["^ [Мм]агистраль ", " магистраль "],

            ["^ (\\S+)ая [Рр]азвязка ", " $1ую развязку "],
            ["^ (\\S+)ья [Рр]азвязка ", " $1ью развязку "],
            ["^ (\\S+)яя [Рр]азвязка ", " $1юю развязку "],
            ["^ (\\d+)-я (\\S+)ая [Рр]азвязка ", " $1-ю $2ую развязку "],
            ["^ [Рр]азвязка ", " развязку "],

            ["^ (\\S+)ая [Тт]расса ", " $1ую трассу "],
            ["^ (\\S+)ья [Тт]расса ", " $1ью трассу "],
            ["^ (\\S+)яя [Тт]расса ", " $1юю трассу "],
            ["^ (\\d+)-я (\\S+)ая [Тт]расса ", " $1-ю $2ую трассу "],
            ["^ [Тт]расса ", " трассу "],

            ["^ (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1ую $2дорогу "],
            ["^ (\\S+)ья ([Аа]вто)?[Дд]орога ", " $1ью $2дорогу "],
            ["^ (\\S+)яя ([Аа]вто)?[Дд]орога ", " $1юю $2дорогу "],
            ["^ (\\S+)ая (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1ую $2ую $3дорогу "],
            ["^ (\\d+)-я (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1-ю $2ую $3дорогу "],
            ["^ ([Аа]вто)?[Дд]орога ", " $1дорогу "],

            ["^ (\\S+)ая [Дд]орожка ", " $1ую дорожку "],
            ["^ (\\S+)ья [Дд]орожка ", " $1ью дорожку "],
            ["^ (\\S+)яя [Дд]орожка ", " $1юю дорожку "],
            ["^ (\\d+)-я (\\S+)ая [Дд]орожка ", " $1-ю $2ую дорожку "],
            ["^ [Дд]орожка ", " дорожку "],

            ["^ (\\S+)ая [Кк]оса ", " $1ую косу "],
            ["^ (\\S+)ая [Хх]орда ", " $1ую хорду "],

            ["^ [Дд]убл[её]р ", " дублёр "]
        ],
        "dative": [
            ["^ ([«\"])", " трасса $1"],

            ["^ (\\S+)ая [Аа]ллея ", " $1ой аллее "],
            ["^ (\\S+)ья [Аа]ллея ", " $1ьей аллее "],
            ["^ (\\S+)яя [Аа]ллея ", " $1ей аллее "],
            ["^ (\\d+)-я (\\S+)ая [Аа]ллея ", " $1-й $2ой аллее "],
            ["^ [Аа]ллея ", " аллее "],

            ["^ (\\S+)ая-(\\S+)ая [Уу]лица ", " $1ой-$2ой улице "],
            ["^ (\\S+)ая [Уу]лица ", " $1ой улице "],
            ["^ (\\S+)ья [Уу]лица ", " $1ьей улице "],
            ["^ (\\S+)яя [Уу]лица ", " $1ей улице "],
            ["^ (\\d+)-я [Уу]лица ", " $1-й улице "],
            ["^ (\\d+)-я (\\S+)ая [Уу]лица ", " $1-й $2ой улице "],
            ["^ (\\S+)ая (\\S+)ая [Уу]лица ", " $1ой $2ой улице "],
            ["^ (\\S+[вн])а [Уу]лица ", " $1ой улице "],
            ["^ (\\S+)ая (\\S+[вн])а [Уу]лица ", " $1ой $2ой улице "],
            ["^ Даньславля [Уу]лица ", " Даньславлей улице "],
            ["^ Добрыня [Уу]лица ", " Добрыней улице "],
            ["^ Людогоща [Уу]лица ", " Людогощей улице "],
            ["^ [Уу]лица ", " улице "],

            ["^ (\\d+)-я [Лл]иния ", " $1-й линии "],
            ["^ (\\d+)-(\\d+)-я [Лл]иния ", " $1-$2-й линии "],
            ["^ (\\S+)ая [Лл]иния ", " $1ой линии "],
            ["^ (\\S+)ья [Лл]иния ", " $1ьей линии "],
            ["^ (\\S+)яя [Лл]иния ", " $1ей линии "],
            ["^ (\\d+)-я (\\S+)ая [Лл]иния ", " $1-й $2ой линии "],
            ["^ [Лл]иния ", " линии "],

            ["^ (\\d+)-(\\d+)-я [Лл]инии ", " $1-$2-й линиям "],

            ["^ (\\S+)ая [Нн]абережная ", " $1ой набережной "],
            ["^ (\\S+)ья [Нн]абережная ", " $1ьей набережной "],
            ["^ (\\S+)яя [Нн]абережная ", " $1ей набережной "],
            ["^ (\\d+)-я (\\S+)ая [Нн]абережная ", " $1-й $2ой набережной "],
            ["^ [Нн]абережная ", " набережной "],

            ["^ (\\S+)ая [Пп]лощадь ", " $1ой площади "],
            ["^ (\\S+)ья [Пп]лощадь ", " $1ьей площади "],
            ["^ (\\S+)яя [Пп]лощадь ", " $1ей площади "],
            ["^ (\\S+[вн])а [Пп]лощадь ", " $1ой площади "],
            ["^ (\\d+)-я (\\S+)ая [Пп]лощадь ", " $1-й $2ой площади "],
            ["^ [Пп]лощадь ", " площади "],

            ["^ (\\S+)ая [Пп]росека ", " $1ой просеке "],
            ["^ (\\S+)ья [Пп]росека ", " $1ьей просеке "],
            ["^ (\\S+)яя [Пп]росека ", " $1ей просеке "],
            ["^ (\\d+)-я [Пп]росека ", " $1-й просеке "],
            ["^ [Пп]росека ", " просеке "],

            ["^ (\\S+)ая [Ээ]стакада ", " $1ой эстакаде "],
            ["^ (\\S+)ья [Ээ]стакада ", " $1ьей эстакаде "],
            ["^ (\\S+)яя [Ээ]стакада ", " $1ей эстакаде "],
            ["^ (\\d+)-я (\\S+)ая [Ээ]стакада ", " $1-й $2ой эстакаде "],
            ["^ [Ээ]стакада ", " эстакаде "],

            ["^ (\\S+)ая [Мм]агистраль ", " $1ой магистрали "],
            ["^ (\\S+)ья [Мм]агистраль ", " $1ьей магистрали "],
            ["^ (\\S+)яя [Мм]агистраль ", " $1ей магистрали "],
            ["^ (\\S+)ая (\\S+)ая [Мм]агистраль ", " $1ой $2ой магистрали "],
            ["^ (\\d+)-я (\\S+)ая [Мм]агистраль ", " $1-й $2ой магистрали "],
            ["^ [Мм]агистраль ", " магистрали "],

            ["^ (\\S+)ая [Рр]азвязка ", " $1ой развязке "],
            ["^ (\\S+)ья [Рр]азвязка ", " $1ьей развязке "],
            ["^ (\\S+)яя [Рр]азвязка ", " $1ей развязке "],
            ["^ (\\d+)-я (\\S+)ая [Рр]азвязка ", " $1-й $2ой развязке "],
            ["^ [Рр]азвязка ", " развязке "],

            ["^ (\\S+)ая [Тт]расса ", " $1ой трассе "],
            ["^ (\\S+)ья [Тт]расса ", " $1ьей трассе "],
            ["^ (\\S+)яя [Тт]расса ", " $1ей трассе "],
            ["^ (\\d+)-я (\\S+)ая [Тт]расса ", " $1-й $2ой трассе "],
            ["^ [Тт]расса ", " трассе "],

            ["^ (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1ой $2дороге "],
            ["^ (\\S+)ья ([Аа]вто)?[Дд]орога ", " $1ьей $2дороге "],
            ["^ (\\S+)яя ([Аа]вто)?[Дд]орога ", " $1ей $2дороге "],
            ["^ (\\S+)ая (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1ой $2ой $3дороге "],
            ["^ (\\d+)-я (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1-й $2ой $3дороге "],
            ["^ ([Аа]вто)?[Дд]орога ", " $1дороге "],

            ["^ (\\S+)ая [Дд]орожка ", " $1ой дорожке "],
            ["^ (\\S+)ья [Дд]орожка ", " $1ьей дорожке "],
            ["^ (\\S+)яя [Дд]орожка ", " $1ей дорожке "],
            ["^ (\\d+)-я (\\S+)ая [Дд]орожка ", " $1-й $2ой дорожке "],
            ["^ [Дд]орожка ", " дорожке "],

            ["^ (\\S+)во [Пп]оле ", " $1ву полю "],
            ["^ (\\S+)ая [Кк]оса ", " $1ой косе "],
            ["^ (\\S+)ая [Хх]орда ", " $1ой хорде "],
            ["^ (\\S+)[иоы]й [Пп]роток ", " $1ому протоку "],

            ["^ (\\S+н)ий [Бб]ульвар ", " $1ему бульвару "],
            ["^ (\\S+)[иоы]й [Бб]ульвар ", " $1ому бульвару "],
            ["^ (\\S+[иы]н) [Бб]ульвар ", " $1у бульвару "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Бб]ульвар ", " $1ому $2ему бульвару "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Бб]ульвар ", " $1ему $2ому бульвару "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Бб]ульвар ", " $1ому $2ому бульвару "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Бб]ульвар ", " $1ому $2у бульвару "],
            ["^ (\\d+)-й (\\S+н)ий [Бб]ульвар ", " $1-му $2ему бульвару "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Бб]ульвар ", " $1-му $2ому бульвару "],
            ["^ (\\d+)-й (\\S+[иы]н) [Бб]ульвар ", " $1-му $2у бульвару "],
            ["^ [Бб]ульвар ", " бульвару "],

            ["^ [Дд]убл[её]р ", " дублёру "],

            ["^ (\\S+н)ий [Зз]аезд ", " $1ему заезду "],
            ["^ (\\S+)[иоы]й [Зз]аезд ", " $1ому заезду "],
            ["^ (\\S+[еёо]в) [Зз]аезд ", " $1у заезду "],
            ["^ (\\S+[иы]н) [Зз]аезд ", " $1у заезду "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Зз]аезд ", " $1ому $2ему заезду "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Зз]аезд ", " $1ему $2ому заезду "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Зз]аезд ", " $1ому $2ому заезду "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Зз]аезд ", " $1ому $2у заезду "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Зз]аезд ", " $1ому $2у заезду "],
            ["^ (\\d+)-й (\\S+н)ий [Зз]аезд ", " $1-му $2ему заезду "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Зз]аезд ", " $1-му $2ому заезду "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Зз]аезд ", " $1-му $2у заезду "],
            ["^ (\\d+)-й (\\S+[иы]н) [Зз]аезд ", " $1-му $2у заезду "],
            ["^ [Зз]аезд ", " заезду "],

            ["^ (\\S+н)ий [Мм]ост ", " $1ему мосту "],
            ["^ (\\S+)[иоы]й [Мм]ост ", " $1ому мосту "],
            ["^ (\\S+[еёо]в) [Мм]ост ", " $1у мосту "],
            ["^ (\\S+[иы]н) [Мм]ост ", " $1у мосту "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Мм]ост ", " $1ому $2ему мосту "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Мм]ост ", " $1ему $2ому мосту "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Мм]ост ", " $1ому $2ому мосту "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Мм]ост ", " $1ому $2у мосту "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Мм]ост ", " $1ому $2у мосту "],
            ["^ (\\d+)-й [Мм]ост ", " $1-му мосту "],
            ["^ (\\d+)-й (\\S+н)ий [Мм]ост ", " $1-му $2ему мосту "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Мм]ост ", " $1-му $2ому мосту "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Мм]ост ", " $1-му $2у мосту "],
            ["^ (\\d+)-й (\\S+[иы]н) [Мм]ост ", " $1-му $2у мосту "],
            ["^ [Мм]ост ", " мосту "],

            ["^ (\\S+н)ий [Оо]бход ", " $1ему обходу "],
            ["^ (\\S+)[иоы]й [Оо]бход ", " $1ому обходу "],
            ["^ [Оо]бход ", " обходу "],

            ["^ (\\S+н)ий [Пп]арк ", " $1ему парку "],
            ["^ (\\S+)[иоы]й [Пп]арк ", " $1ому парку "],
            ["^ (\\S+[иы]н) [Пп]арк ", " $1у парку "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]арк ", " $1ому $2ему парку "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]арк ", " $1ему $2ому парку "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]арк ", " $1ому $2ому парку "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]арк ", " $1ому $2у парку "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]арк ", " $1-му $2ему парку "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]арк ", " $1-му $2ому парку "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]арк ", " $1-му $2у парку "],
            ["^ [Пп]арк ", " парку "],

            ["^ (\\S+)[иоы]й-(\\S+)[иоы]й [Пп]ереулок ", " $1ому-$2ому переулку "],
            ["^ (\\d+)-й (\\S+)[иоы]й-(\\S+)[иоы]й [Пп]ереулок ", " $1-му $2ому-$3ому переулку "],
            ["^ (\\S+н)ий [Пп]ереулок ", " $1ему переулку "],
            ["^ (\\S+)[иоы]й [Пп]ереулок ", " $1ому переулку "],
            ["^ (\\S+[еёо]в) [Пп]ереулок ", " $1у переулку "],
            ["^ (\\S+[иы]н) [Пп]ереулок ", " $1у переулку "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]ереулок ", " $1ому $2ему переулку "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]ереулок ", " $1ему $2ому переулку "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]ереулок ", " $1ому $2ому переулку "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Пп]ереулок ", " $1ому $2у переулку "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]ереулок ", " $1ому $2у переулку "],
            ["^ (\\d+)-й [Пп]ереулок ", " $1-му переулку "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]ереулок ", " $1-му $2ему переулку "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]ереулок ", " $1-му $2ому переулку "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Пп]ереулок ", " $1-му $2у переулку "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]ереулок ", " $1-му $2у переулку "],
            ["^ [Пп]ереулок ", " переулку "],

            ["^ [Пп]одъезд ", " подъезду "],

            ["^ (\\S+[еёо]в)-(\\S+)[иоы]й [Пп]роезд ", " $1у-$2ому проезду "],
            ["^ (\\S+н)ий [Пп]роезд ", " $1ему проезду "],
            ["^ (\\S+)[иоы]й [Пп]роезд ", " $1ому проезду "],
            ["^ (\\S+[еёо]в) [Пп]роезд ", " $1у проезду "],
            ["^ (\\S+[иы]н) [Пп]роезд ", " $1у проезду "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]роезд ", " $1ому $2ему проезду "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]роезд ", " $1ему $2ому проезду "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роезд ", " $1ому $2ому проезду "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Пп]роезд ", " $1ому $2у проезду "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]роезд ", " $1ому $2у проезду "],
            ["^ (\\d+)-й [Пп]роезд ", " $1-му проезду "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]роезд ", " $1-му $2ему проезду "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]роезд ", " $1-му $2ому проезду "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Пп]роезд ", " $1-му $2у проезду "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]роезд ", " $1-му $2у проезду "],
            ["^ (\\d+)-й (\\S+н)ий (\\S+)[иоы]й [Пп]роезд ", " $1-му $2ему $3ому проезду "],
            ["^ (\\d+)-й (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роезд ", " $1-му $2ому $3ому проезду "],
            ["^ [Пп]роезд ", " проезду "],

            ["^ (\\S+н)ий [Пп]роспект ", " $1ему проспекту "],
            ["^ (\\S+)[иоы]й [Пп]роспект ", " $1ому проспекту "],
            ["^ (\\S+[иы]н) [Пп]роспект ", " $1у проспекту "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]роспект ", " $1ому $2ему проспекту "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]роспект ", " $1ему $2ому проспекту "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роспект ", " $1ому $2ому проспекту "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]роспект ", " $1ому $2у проспекту "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]роспект ", " $1-му $2ему проспекту "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]роспект ", " $1-му $2ому проспекту "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]роспект ", " $1-му $2у проспекту "],
            ["^ [Пп]роспект ", " проспекту "],

            ["^ (\\S+н)ий [Пп]утепровод ", " $1ему путепроводу "],
            ["^ (\\S+)[иоы]й [Пп]утепровод ", " $1ому путепроводу "],
            ["^ (\\S+[иы]н) [Пп]утепровод ", " $1у путепроводу "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]утепровод ", " $1ому $2ему путепроводу "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]утепровод ", " $1ему $2ому путепроводу "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]утепровод ", " $1ому $2ому путепроводу "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]утепровод ", " $1ому $2у путепроводу "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]утепровод ", " $1-му $2ему путепроводу "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]утепровод ", " $1-му $2ому путепроводу "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]утепровод ", " $1-му $2у путепроводу "],
            ["^ [Пп]утепровод ", " путепроводу "],

            ["^ (\\S+н)ий [Сс]пуск ", " $1ему спуску "],
            ["^ (\\S+)[иоы]й [Сс]пуск ", " $1ому спуску "],
            ["^ (\\S+[еёо]в) [Сс]пуск ", " $1у спуску "],
            ["^ (\\S+[иы]н) [Сс]пуск ", " $1у спуску "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Сс]пуск ", " $1ому $2ему спуску "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Сс]пуск ", " $1ему $2ому спуску "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Сс]пуск ", " $1ому $2ому спуску "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Сс]пуск ", " $1ому $2у спуску "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Сс]пуск ", " $1ому $2у спуску "],
            ["^ (\\d+)-й (\\S+н)ий [Сс]пуск ", " $1-му $2ему спуску "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Сс]пуск ", " $1-му $2ому спуску "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Сс]пуск ", " $1-му $2у спуску "],
            ["^ (\\d+)-й (\\S+[иы]н) [Сс]пуск ", " $1-му $2у спуску "],
            ["^ [Сс]пуск ", " спуску "],

            ["^ (\\S+н)ий [Сс]ъезд ", " $1ему съезду "],
            ["^ (\\S+)[иоы]й [Сс]ъезд ", " $1ому съезду "],
            ["^ (\\S+[иы]н) [Сс]ъезд ", " $1у съезду "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Сс]ъезд ", " $1ому $2ему съезду "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Сс]ъезд ", " $1ему $2ому съезду "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Сс]ъезд ", " $1ому $2ому съезду "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Сс]ъезд ", " $1ому $2у съезду "],
            ["^ (\\d+)-й (\\S+н)ий [Сс]ъезд ", " $1-му $2ему съезду "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Сс]ъезд ", " $1-му $2ому съезду "],
            ["^ (\\d+)-й (\\S+[иы]н) [Сс]ъезд ", " $1-му $2у съезду "],
            ["^ [Сс]ъезд ", " съезду "],

            ["^ (\\S+н)ий [Тт][уо]ннель ", " $1ему тоннелю "],
            ["^ (\\S+)[иоы]й [Тт][уо]ннель ", " $1ому тоннелю "],
            ["^ (\\S+[иы]н) [Тт][уо]ннель ", " $1у тоннелю "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт][уо]ннель ", " $1ому $2ему тоннелю "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт][уо]ннель ", " $1ему $2ому тоннелю "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт][уо]ннель ", " $1ому $2ому тоннелю "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт][уо]ннель ", " $1ому $2у тоннелю "],
            ["^ (\\d+)-й (\\S+н)ий [Тт][уо]ннель ", " $1-му $2ему тоннелю "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт][уо]ннель ", " $1-му $2ому тоннелю "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт][уо]ннель ", " $1-му $2у тоннелю "],
            ["^ [Тт][уо]ннель ", " тоннелю "],

            ["^ (\\S+н)ий [Тт]ракт ", " $1ему тракту "],
            ["^ (\\S+)[иоы]й [Тт]ракт ", " $1ому тракту "],
            ["^ (\\S+[еёо]в) [Тт]ракт ", " $1у тракту "],
            ["^ (\\S+[иы]н) [Тт]ракт ", " $1у тракту "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт]ракт ", " $1ому $2ему тракту "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт]ракт ", " $1ему $2ому тракту "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт]ракт ", " $1ому $2ому тракту "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Тт]ракт ", " $1ому $2у тракту "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт]ракт ", " $1ому $2у тракту "],
            ["^ (\\d+)-й (\\S+н)ий [Тт]ракт ", " $1-му $2ему тракту "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт]ракт ", " $1-му $2ому тракту "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Тт]ракт ", " $1-му $2у тракту "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт]ракт ", " $1-му $2у тракту "],
            ["^ [Тт]ракт ", " тракту "],

            ["^ (\\S+н)ий [Тт]упик ", " $1ему тупику "],
            ["^ (\\S+)[иоы]й [Тт]упик ", " $1ому тупику "],
            ["^ (\\S+[еёо]в) [Тт]упик ", " $1у тупику "],
            ["^ (\\S+[иы]н) [Тт]упик ", " $1у тупику "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт]упик ", " $1ому $2ему тупику "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт]упик ", " $1ему $2ому тупику "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт]упик ", " $1ому $2ому тупику "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Тт]упик ", " $1ому $2у тупику "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт]упик ", " $1ому $2у тупику "],
            ["^ (\\d+)-й [Тт]упик ", " $1-му тупику "],
            ["^ (\\d+)-й (\\S+н)ий [Тт]упик ", " $1-му $2ему тупику "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт]упик ", " $1-му $2ому тупику "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Тт]упик ", " $1-му $2у тупику "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт]упик ", " $1-му $2у тупику "],
            ["^ [Тт]упик ", " тупику "],

            ["^ (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1му $2кольцу "],
            ["^ (\\S+ье) ([Пп]олу)?[Кк]ольцо ", " $1му $2кольцу "],
            ["^ (\\S+[ео])е (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1му $2му $3кольцу "],
            ["^ (\\S+ье) (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1му $2му $3кольцу "],
            ["^ (\\d+)-е (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1-му $2му $3кольцу "],
            ["^ (\\d+)-е (\\S+ье) ([Пп]олу)?[Кк]ольцо ", " $1-му $2му $3кольцу "],
            ["^ ([Пп]олу)?[Кк]ольцо ", " $1кольцу "],

            ["^ (\\S+[ео])е [Шш]оссе ", " $1му шоссе "],
            ["^ (\\S+ье) [Шш]оссе ", " $1му шоссе "],
            ["^ (\\S+[ео])е (\\S+[ео])е [Шш]оссе ", " $1му $2му шоссе "],
            ["^ (\\S+ье) (\\S+[ео])е [Шш]оссе ", " $1му $2му шоссе "],
            ["^ (\\d+)-е (\\S+[ео])е [Шш]оссе ", " $1-му $2му шоссе "],
            ["^ (\\d+)-е (\\S+ье) [Шш]оссе ", " $1-му $2му шоссе "],

            [" ([Тт])ретому ", " $1ретьему "],
            ["([жч])ому ", "$1ьему "],
            ["([жч])ой ", "$1ей "]
        ],
        "genitive": [
            ["^ ([«\"])", " трасса $1"],

            ["^ (\\S+)ая [Аа]ллея ", " $1ой аллеи "],
            ["^ (\\S+)ья [Аа]ллея ", " $1ьей аллеи "],
            ["^ (\\S+)яя [Аа]ллея ", " $1ей аллеи "],
            ["^ (\\d+)-я (\\S+)ая [Аа]ллея ", " $1-й $2ой аллеи "],
            ["^ [Аа]ллея ", " аллеи "],

            ["^ (\\S+)ая-(\\S+)ая [Уу]лица ", " $1ой-$2ой улицы "],
            ["^ (\\S+)ая [Уу]лица ", " $1ой улицы "],
            ["^ (\\S+)ья [Уу]лица ", " $1ьей улицы "],
            ["^ (\\S+)яя [Уу]лица ", " $1ей улицы "],
            ["^ (\\d+)-я [Уу]лица ", " $1-й улицы "],
            ["^ (\\d+)-я (\\S+)ая [Уу]лица ", " $1-й $2ой улицы "],
            ["^ (\\S+)ая (\\S+)ая [Уу]лица ", " $1ой $2ой улицы "],
            ["^ (\\S+[вн])а [Уу]лица ", " $1ой улицы "],
            ["^ (\\S+)ая (\\S+[вн])а [Уу]лица ", " $1ой $2ой улицы "],
            ["^ Даньславля [Уу]лица ", " Даньславлей улицы "],
            ["^ Добрыня [Уу]лица ", " Добрыней улицы "],
            ["^ Людогоща [Уу]лица ", " Людогощей улицы "],
            ["^ [Уу]лица ", " улицы "],

            ["^ (\\d+)-я [Лл]иния ", " $1-й линии "],
            ["^ (\\d+)-(\\d+)-я [Лл]иния ", " $1-$2-й линии "],
            ["^ (\\S+)ая [Лл]иния ", " $1ой линии "],
            ["^ (\\S+)ья [Лл]иния ", " $1ьей линии "],
            ["^ (\\S+)яя [Лл]иния ", " $1ей линии "],
            ["^ (\\d+)-я (\\S+)ая [Лл]иния ", " $1-й $2ой линии "],
            ["^ [Лл]иния ", " линии "],

            ["^ (\\d+)-(\\d+)-я [Лл]инии ", " $1-$2-й линий "],

            ["^ (\\S+)ая [Нн]абережная ", " $1ой набережной "],
            ["^ (\\S+)ья [Нн]абережная ", " $1ьей набережной "],
            ["^ (\\S+)яя [Нн]абережная ", " $1ей набережной "],
            ["^ (\\d+)-я (\\S+)ая [Нн]абережная ", " $1-й $2ой набережной "],
            ["^ [Нн]абережная ", " набережной "],

            ["^ (\\S+)ая [Пп]лощадь ", " $1ой площади "],
            ["^ (\\S+)ья [Пп]лощадь ", " $1ьей площади "],
            ["^ (\\S+)яя [Пп]лощадь ", " $1ей площади "],
            ["^ (\\S+[вн])а [Пп]лощадь ", " $1ой площади "],
            ["^ (\\d+)-я (\\S+)ая [Пп]лощадь ", " $1-й $2ой площади "],
            ["^ [Пп]лощадь ", " площади "],

            ["^ (\\S+)ая [Пп]росека ", " $1ой просеки "],
            ["^ (\\S+)ья [Пп]росека ", " $1ьей просеки "],
            ["^ (\\S+)яя [Пп]росека ", " $1ей просеки "],
            ["^ (\\d+)-я [Пп]росека ", " $1-й просеки "],
            ["^ [Пп]росека ", " просеки "],

            ["^ (\\S+)ая [Ээ]стакада ", " $1ой эстакады "],
            ["^ (\\S+)ья [Ээ]стакада ", " $1ьей эстакады "],
            ["^ (\\S+)яя [Ээ]стакада ", " $1ей эстакады "],
            ["^ (\\d+)-я (\\S+)ая [Ээ]стакада ", " $1-й $2ой эстакады "],
            ["^ [Ээ]стакада ", " эстакады "],

            ["^ (\\S+)ая [Мм]агистраль ", " $1ой магистрали "],
            ["^ (\\S+)ья [Мм]агистраль ", " $1ьей магистрали "],
            ["^ (\\S+)яя [Мм]агистраль ", " $1ей магистрали "],
            ["^ (\\S+)ая (\\S+)ая [Мм]агистраль ", " $1ой $2ой магистрали "],
            ["^ (\\d+)-я (\\S+)ая [Мм]агистраль ", " $1-й $2ой магистрали "],
            ["^ [Мм]агистраль ", " магистрали "],

            ["^ (\\S+)ая [Рр]азвязка ", " $1ой развязки "],
            ["^ (\\S+)ья [Рр]азвязка ", " $1ьей развязки "],
            ["^ (\\S+)яя [Рр]азвязка ", " $1ей развязки "],
            ["^ (\\d+)-я (\\S+)ая [Рр]азвязка ", " $1-й $2ой развязки "],
            ["^ [Рр]азвязка ", " развязки "],

            ["^ (\\S+)ая [Тт]расса ", " $1ой трассы "],
            ["^ (\\S+)ья [Тт]расса ", " $1ьей трассы "],
            ["^ (\\S+)яя [Тт]расса ", " $1ей трассы "],
            ["^ (\\d+)-я (\\S+)ая [Тт]расса ", " $1-й $2ой трассы "],
            ["^ [Тт]расса ", " трассы "],

            ["^ (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1ой $2дороги "],
            ["^ (\\S+)ья ([Аа]вто)?[Дд]орога ", " $1ьей $2дороги "],
            ["^ (\\S+)яя ([Аа]вто)?[Дд]орога ", " $1ей $2дороги "],
            ["^ (\\S+)ая (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1ой $2ой $3дороги "],
            ["^ (\\d+)-я (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1-й $2ой $3дороги "],
            ["^ ([Аа]вто)?[Дд]орога ", " $1дороги "],

            ["^ (\\S+)ая [Дд]орожка ", " $1ой дорожки "],
            ["^ (\\S+)ья [Дд]орожка ", " $1ьей дорожки "],
            ["^ (\\S+)яя [Дд]орожка ", " $1ей дорожки "],
            ["^ (\\d+)-я (\\S+)ая [Дд]орожка ", " $1-й $2ой дорожки "],
            ["^ [Дд]орожка ", " дорожки "],

            ["^ (\\S+)во [Пп]оле ", " $1ва поля "],
            ["^ (\\S+)ая [Кк]оса ", " $1ой косы "],
            ["^ (\\S+)ая [Хх]орда ", " $1ой хорды "],
            ["^ (\\S+)[иоы]й [Пп]роток ", " $1ого протока "],

            ["^ (\\S+н)ий [Бб]ульвар ", " $1его бульвара "],
            ["^ (\\S+)[иоы]й [Бб]ульвар ", " $1ого бульвара "],
            ["^ (\\S+[иы]н) [Бб]ульвар ", " $1ого бульвара "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Бб]ульвар ", " $1ого $2его бульвара "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Бб]ульвар ", " $1его $2ого бульвара "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Бб]ульвар ", " $1ого $2ого бульвара "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Бб]ульвар ", " $1ого $2ого бульвара "],
            ["^ (\\d+)-й (\\S+н)ий [Бб]ульвар ", " $1-го $2его бульвара "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Бб]ульвар ", " $1-го $2ого бульвара "],
            ["^ (\\d+)-й (\\S+[иы]н) [Бб]ульвар ", " $1-го $2ого бульвара "],
            ["^ [Бб]ульвар ", " бульвара "],

            ["^ [Дд]убл[её]р ", " дублёра "],

            ["^ (\\S+н)ий [Зз]аезд ", " $1его заезда "],
            ["^ (\\S+)[иоы]й [Зз]аезд ", " $1ого заезда "],
            ["^ (\\S+[еёо]в) [Зз]аезд ", " $1а заезда "],
            ["^ (\\S+[иы]н) [Зз]аезд ", " $1а заезда "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Зз]аезд ", " $1ого $2его заезда "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Зз]аезд ", " $1его $2ого заезда "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Зз]аезд ", " $1ого $2ого заезда "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Зз]аезд ", " $1ого $2а заезда "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Зз]аезд ", " $1ого $2а заезда "],
            ["^ (\\d+)-й (\\S+н)ий [Зз]аезд ", " $1-го $2его заезда "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Зз]аезд ", " $1-го $2ого заезда "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Зз]аезд ", " $1-го $2а заезда "],
            ["^ (\\d+)-й (\\S+[иы]н) [Зз]аезд ", " $1-го $2а заезда "],
            ["^ [Зз]аезд ", " заезда "],

            ["^ (\\S+н)ий [Мм]ост ", " $1его моста "],
            ["^ (\\S+)[иоы]й [Мм]ост ", " $1ого моста "],
            ["^ (\\S+[еёо]в) [Мм]ост ", " $1а моста "],
            ["^ (\\S+[иы]н) [Мм]ост ", " $1а моста "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Мм]ост ", " $1ого $2его моста "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Мм]ост ", " $1его $2ого моста "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Мм]ост ", " $1ого $2ого моста "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Мм]ост ", " $1ого $2а моста "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Мм]ост ", " $1ого $2а моста "],
            ["^ (\\d+)-й [Мм]ост ", " $1-го моста "],
            ["^ (\\d+)-й (\\S+н)ий [Мм]ост ", " $1-го $2его моста "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Мм]ост ", " $1-го $2ого моста "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Мм]ост ", " $1-го $2а моста "],
            ["^ (\\d+)-й (\\S+[иы]н) [Мм]ост ", " $1-го $2а моста "],
            ["^ [Мм]ост ", " моста "],

            ["^ (\\S+н)ий [Оо]бход ", " $1его обхода "],
            ["^ (\\S+)[иоы]й [Оо]бход ", " $1ого обхода "],
            ["^ [Оо]бход ", " обхода "],

            ["^ (\\S+н)ий [Пп]арк ", " $1его парка "],
            ["^ (\\S+)[иоы]й [Пп]арк ", " $1ого парка "],
            ["^ (\\S+[иы]н) [Пп]арк ", " $1ого парка "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]арк ", " $1ого $2его парка "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]арк ", " $1его $2ого парка "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]арк ", " $1ого $2ого парка "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]арк ", " $1ого $2ого парка "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]арк ", " $1-го $2его парка "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]арк ", " $1-го $2ого парка "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]арк ", " $1-го $2ого парка "],
            ["^ [Пп]арк ", " парка "],

            ["^ (\\S+)[иоы]й-(\\S+)[иоы]й [Пп]ереулок ", " $1ого-$2ого переулка "],
            ["^ (\\d+)-й (\\S+)[иоы]й-(\\S+)[иоы]й [Пп]ереулок ", " $1-го $2ого-$3ого переулка "],
            ["^ (\\S+н)ий [Пп]ереулок ", " $1его переулка "],
            ["^ (\\S+)[иоы]й [Пп]ереулок ", " $1ого переулка "],
            ["^ (\\S+[еёо]в) [Пп]ереулок ", " $1а переулка "],
            ["^ (\\S+[иы]н) [Пп]ереулок ", " $1а переулка "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]ереулок ", " $1ого $2его переулка "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]ереулок ", " $1его $2ого переулка "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]ереулок ", " $1ого $2ого переулка "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Пп]ереулок ", " $1ого $2а переулка "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]ереулок ", " $1ого $2а переулка "],
            ["^ (\\d+)-й [Пп]ереулок ", " $1-го переулка "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]ереулок ", " $1-го $2его переулка "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]ереулок ", " $1-го $2ого переулка "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Пп]ереулок ", " $1-го $2а переулка "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]ереулок ", " $1-го $2а переулка "],
            ["^ [Пп]ереулок ", " переулка "],

            ["^ [Пп]одъезд ", " подъезда "],

            ["^ (\\S+[еёо]в)-(\\S+)[иоы]й [Пп]роезд ", " $1а-$2ого проезда "],
            ["^ (\\S+н)ий [Пп]роезд ", " $1его проезда "],
            ["^ (\\S+)[иоы]й [Пп]роезд ", " $1ого проезда "],
            ["^ (\\S+[еёо]в) [Пп]роезд ", " $1а проезда "],
            ["^ (\\S+[иы]н) [Пп]роезд ", " $1а проезда "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]роезд ", " $1ого $2его проезда "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]роезд ", " $1его $2ого проезда "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роезд ", " $1ого $2ого проезда "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Пп]роезд ", " $1ого $2а проезда "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]роезд ", " $1ого $2а проезда "],
            ["^ (\\d+)-й [Пп]роезд ", " $1-го проезда "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]роезд ", " $1-го $2его проезда "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]роезд ", " $1-го $2ого проезда "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Пп]роезд ", " $1-го $2а проезда "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]роезд ", " $1-го $2а проезда "],
            ["^ (\\d+)-й (\\S+н)ий (\\S+)[иоы]й [Пп]роезд ", " $1-го $2его $3ого проезда "],
            ["^ (\\d+)-й (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роезд ", " $1-го $2ого $3ого проезда "],
            ["^ [Пп]роезд ", " проезда "],

            ["^ (\\S+н)ий [Пп]роспект ", " $1его проспекта "],
            ["^ (\\S+)[иоы]й [Пп]роспект ", " $1ого проспекта "],
            ["^ (\\S+[иы]н) [Пп]роспект ", " $1ого проспекта "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]роспект ", " $1ого $2его проспекта "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]роспект ", " $1его $2ого проспекта "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роспект ", " $1ого $2ого проспекта "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]роспект ", " $1ого $2ого проспекта "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]роспект ", " $1-го $2его проспекта "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]роспект ", " $1-го $2ого проспекта "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]роспект ", " $1-го $2ого проспекта "],
            ["^ [Пп]роспект ", " проспекта "],

            ["^ (\\S+н)ий [Пп]утепровод ", " $1его путепровода "],
            ["^ (\\S+)[иоы]й [Пп]утепровод ", " $1ого путепровода "],
            ["^ (\\S+[иы]н) [Пп]утепровод ", " $1ого путепровода "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]утепровод ", " $1ого $2его путепровода "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]утепровод ", " $1его $2ого путепровода "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]утепровод ", " $1ого $2ого путепровода "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]утепровод ", " $1ого $2ого путепровода "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]утепровод ", " $1-го $2его путепровода "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]утепровод ", " $1-го $2ого путепровода "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]утепровод ", " $1-го $2ого путепровода "],
            ["^ [Пп]утепровод ", " путепровода "],

            ["^ (\\S+н)ий [Сс]пуск ", " $1его спуска "],
            ["^ (\\S+)[иоы]й [Сс]пуск ", " $1ого спуска "],
            ["^ (\\S+[еёо]в) [Сс]пуск ", " $1а спуска "],
            ["^ (\\S+[иы]н) [Сс]пуск ", " $1а спуска "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Сс]пуск ", " $1ого $2его спуска "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Сс]пуск ", " $1его $2ого спуска "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Сс]пуск ", " $1ого $2ого спуска "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Сс]пуск ", " $1ого $2а спуска "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Сс]пуск ", " $1ого $2а спуска "],
            ["^ (\\d+)-й (\\S+н)ий [Сс]пуск ", " $1-го $2его спуска "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Сс]пуск ", " $1-го $2ого спуска "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Сс]пуск ", " $1-го $2а спуска "],
            ["^ (\\d+)-й (\\S+[иы]н) [Сс]пуск ", " $1-го $2а спуска "],
            ["^ [Сс]пуск ", " спуска "],

            ["^ (\\S+н)ий [Сс]ъезд ", " $1его съезда "],
            ["^ (\\S+)[иоы]й [Сс]ъезд ", " $1ого съезда "],
            ["^ (\\S+[иы]н) [Сс]ъезд ", " $1ого съезда "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Сс]ъезд ", " $1ого $2его съезда "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Сс]ъезд ", " $1его $2ого съезда "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Сс]ъезд ", " $1ого $2ого съезда "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Сс]ъезд ", " $1ого $2ого съезда "],
            ["^ (\\d+)-й (\\S+н)ий [Сс]ъезд ", " $1-го $2его съезда "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Сс]ъезд ", " $1-го $2ого съезда "],
            ["^ (\\d+)-й (\\S+[иы]н) [Сс]ъезд ", " $1-го $2ого съезда "],
            ["^ [Сс]ъезд ", " съезда "],

            ["^ (\\S+н)ий [Тт][уо]ннель ", " $1его тоннеля "],
            ["^ (\\S+)[иоы]й [Тт][уо]ннель ", " $1ого тоннеля "],
            ["^ (\\S+[иы]н) [Тт][уо]ннель ", " $1ого тоннеля "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт][уо]ннель ", " $1ого $2его тоннеля "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт][уо]ннель ", " $1его $2ого тоннеля "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт][уо]ннель ", " $1ого $2ого тоннеля "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт][уо]ннель ", " $1ого $2ого тоннеля "],
            ["^ (\\d+)-й (\\S+н)ий [Тт][уо]ннель ", " $1-го $2его тоннеля "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт][уо]ннель ", " $1-го $2ого тоннеля "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт][уо]ннель ", " $1-го $2ого тоннеля "],
            ["^ [Тт][уо]ннель ", " тоннеля "],

            ["^ (\\S+н)ий [Тт]ракт ", " $1ем тракта "],
            ["^ (\\S+)[иоы]й [Тт]ракт ", " $1ого тракта "],
            ["^ (\\S+[еёо]в) [Тт]ракт ", " $1а тракта "],
            ["^ (\\S+[иы]н) [Тт]ракт ", " $1а тракта "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт]ракт ", " $1ого $2его тракта "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт]ракт ", " $1его $2ого тракта "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт]ракт ", " $1ого $2ого тракта "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Тт]ракт ", " $1ого $2а тракта "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт]ракт ", " $1ого $2а тракта "],
            ["^ (\\d+)-й (\\S+н)ий [Тт]ракт ", " $1-го $2его тракта "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт]ракт ", " $1-го $2ого тракта "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Тт]ракт ", " $1-го $2а тракта "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт]ракт ", " $1-го $2а тракта "],
            ["^ [Тт]ракт ", " тракта "],

            ["^ (\\S+н)ий [Тт]упик ", " $1его тупика "],
            ["^ (\\S+)[иоы]й [Тт]упик ", " $1ого тупика "],
            ["^ (\\S+[еёо]в) [Тт]упик ", " $1а тупика "],
            ["^ (\\S+[иы]н) [Тт]упик ", " $1а тупика "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт]упик ", " $1ого $2его тупика "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт]упик ", " $1его $2ого тупика "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт]упик ", " $1ого $2ого тупика "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Тт]упик ", " $1ого $2а тупика "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт]упик ", " $1ого $2а тупика "],
            ["^ (\\d+)-й [Тт]упик ", " $1-го тупика "],
            ["^ (\\d+)-й (\\S+н)ий [Тт]упик ", " $1-го $2его тупика "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт]упик ", " $1-го $2ого тупика "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Тт]упик ", " $1-го $2а тупика "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт]упик ", " $1-го $2а тупика "],
            ["^ [Тт]упик ", " тупика "],

            ["^ (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1го $2кольца "],
            ["^ (\\S+ье) ([Пп]олу)?[Кк]ольцо ", " $1го $2кольца "],
            ["^ (\\S+[ео])е (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1го $2го $3кольца "],
            ["^ (\\S+ье) (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1го $2го $3кольца "],
            ["^ (\\d+)-е (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1-го $2го $3кольца "],
            ["^ (\\d+)-е (\\S+ье) ([Пп]олу)?[Кк]ольцо ", " $1-го $2го $3кольца "],
            ["^ ([Пп]олу)?[Кк]ольцо ", " $1кольца "],

            ["^ (\\S+[ео])е [Шш]оссе ", " $1го шоссе "],
            ["^ (\\S+ье) [Шш]оссе ", " $1го шоссе "],
            ["^ (\\S+[ео])е (\\S+[ео])е [Шш]оссе ", " $1го $2го шоссе "],
            ["^ (\\S+ье) (\\S+[ео])е [Шш]оссе ", " $1го $2го шоссе "],
            ["^ (\\d+)-е (\\S+[ео])е [Шш]оссе ", " $1-го $2го шоссе "],
            ["^ (\\d+)-е (\\S+ье) [Шш]оссе ", " $1-го $2го шоссе "],

            [" ([Тт])ретого ", " $1ретьего "],
            ["([жч])ого ", "$1ьего "]
        ],
        "prepositional": [
            ["^ ([«\"])", " трасса $1"],

            ["^ (\\S+)ая [Аа]ллея ", " $1ой аллее "],
            ["^ (\\S+)ья [Аа]ллея ", " $1ьей аллее "],
            ["^ (\\S+)яя [Аа]ллея ", " $1ей аллее "],
            ["^ (\\d+)-я (\\S+)ая [Аа]ллея ", " $1-й $2ой аллее "],
            ["^ [Аа]ллея ", " аллее "],

            ["^ (\\S+)ая-(\\S+)ая [Уу]лица ", " $1ой-$2ой улице "],
            ["^ (\\S+)ая [Уу]лица ", " $1ой улице "],
            ["^ (\\S+)ья [Уу]лица ", " $1ьей улице "],
            ["^ (\\S+)яя [Уу]лица ", " $1ей улице "],
            ["^ (\\d+)-я [Уу]лица ", " $1-й улице "],
            ["^ (\\d+)-я (\\S+)ая [Уу]лица ", " $1-й $2ой улице "],
            ["^ (\\S+)ая (\\S+)ая [Уу]лица ", " $1ой $2ой улице "],
            ["^ (\\S+[вн])а [Уу]лица ", " $1ой улице "],
            ["^ (\\S+)ая (\\S+[вн])а [Уу]лица ", " $1ой $2ой улице "],
            ["^ Даньславля [Уу]лица ", " Даньславлей улице "],
            ["^ Добрыня [Уу]лица ", " Добрыней улице "],
            ["^ Людогоща [Уу]лица ", " Людогощей улице "],
            ["^ [Уу]лица ", " улице "],

            ["^ (\\d+)-я [Лл]иния ", " $1-й линии "],
            ["^ (\\d+)-(\\d+)-я [Лл]иния ", " $1-$2-й линии "],
            ["^ (\\S+)ая [Лл]иния ", " $1ой линии "],
            ["^ (\\S+)ья [Лл]иния ", " $1ьей линии "],
            ["^ (\\S+)яя [Лл]иния ", " $1ей линии "],
            ["^ (\\d+)-я (\\S+)ая [Лл]иния ", " $1-й $2ой линии "],
            ["^ [Лл]иния ", " линии "],

            ["^ (\\d+)-(\\d+)-я [Лл]инии ", " $1-$2-й линиях "],

            ["^ (\\S+)ая [Нн]абережная ", " $1ой набережной "],
            ["^ (\\S+)ья [Нн]абережная ", " $1ьей набережной "],
            ["^ (\\S+)яя [Нн]абережная ", " $1ей набережной "],
            ["^ (\\d+)-я (\\S+)ая [Нн]абережная ", " $1-й $2ой набережной "],
            ["^ [Нн]абережная ", " набережной "],

            ["^ (\\S+)ая [Пп]лощадь ", " $1ой площади "],
            ["^ (\\S+)ья [Пп]лощадь ", " $1ьей площади "],
            ["^ (\\S+)яя [Пп]лощадь ", " $1ей площади "],
            ["^ (\\S+[вн])а [Пп]лощадь ", " $1ой площади "],
            ["^ (\\d+)-я (\\S+)ая [Пп]лощадь ", " $1-й $2ой площади "],
            ["^ [Пп]лощадь ", " площади "],

            ["^ (\\S+)ая [Пп]росека ", " $1ой просеке "],
            ["^ (\\S+)ья [Пп]росека ", " $1ьей просеке "],
            ["^ (\\S+)яя [Пп]росека ", " $1ей просеке "],
            ["^ (\\d+)-я [Пп]росека ", " $1-й просеке "],
            ["^ [Пп]росека ", " просеке "],

            ["^ (\\S+)ая [Ээ]стакада ", " $1ой эстакаде "],
            ["^ (\\S+)ья [Ээ]стакада ", " $1ьей эстакаде "],
            ["^ (\\S+)яя [Ээ]стакада ", " $1ей эстакаде "],
            ["^ (\\d+)-я (\\S+)ая [Ээ]стакада ", " $1-й $2ой эстакаде "],
            ["^ [Ээ]стакада ", " эстакаде "],

            ["^ (\\S+)ая [Мм]агистраль ", " $1ой магистрали "],
            ["^ (\\S+)ья [Мм]агистраль ", " $1ьей магистрали "],
            ["^ (\\S+)яя [Мм]агистраль ", " $1ей магистрали "],
            ["^ (\\S+)ая (\\S+)ая [Мм]агистраль ", " $1ой $2ой магистрали "],
            ["^ (\\d+)-я (\\S+)ая [Мм]агистраль ", " $1-й $2ой магистрали "],
            ["^ [Мм]агистраль ", " магистрали "],

            ["^ (\\S+)ая [Рр]азвязка ", " $1ой развязке "],
            ["^ (\\S+)ья [Рр]азвязка ", " $1ьей развязке "],
            ["^ (\\S+)яя [Рр]азвязка ", " $1ей развязке "],
            ["^ (\\d+)-я (\\S+)ая [Рр]азвязка ", " $1-й $2ой развязке "],
            ["^ [Рр]азвязка ", " развязке "],

            ["^ (\\S+)ая [Тт]расса ", " $1ой трассе "],
            ["^ (\\S+)ья [Тт]расса ", " $1ьей трассе "],
            ["^ (\\S+)яя [Тт]расса ", " $1ей трассе "],
            ["^ (\\d+)-я (\\S+)ая [Тт]расса ", " $1-й $2ой трассе "],
            ["^ [Тт]расса ", " трассе "],

            ["^ (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1ой $2дороге "],
            ["^ (\\S+)ья ([Аа]вто)?[Дд]орога ", " $1ьей $2дороге "],
            ["^ (\\S+)яя ([Аа]вто)?[Дд]орога ", " $1ей $2дороге "],
            ["^ (\\S+)ая (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1ой $2ой $3дороге "],
            ["^ (\\d+)-я (\\S+)ая ([Аа]вто)?[Дд]орога ", " $1-й $2ой $3дороге "],
            ["^ ([Аа]вто)?[Дд]орога ", " $1дороге "],

            ["^ (\\S+)ая [Дд]орожка ", " $1ой дорожке "],
            ["^ (\\S+)ья [Дд]орожка ", " $1ьей дорожке "],
            ["^ (\\S+)яя [Дд]орожка ", " $1ей дорожке "],
            ["^ (\\d+)-я (\\S+)ая [Дд]орожка ", " $1-й $2ой дорожке "],
            ["^ [Дд]орожка ", " дорожке "],

            ["^ (\\S+)во [Пп]оле ", " $1вом поле "],
            ["^ (\\S+)ая [Кк]оса ", " $1ой косе "],
            ["^ (\\S+)ая [Хх]орда ", " $1ой хорде "],
            ["^ (\\S+)[иоы]й [Пп]роток ", " $1ом протоке "],

            ["^ (\\S+н)ий [Бб]ульвар ", " $1ем бульваре "],
            ["^ (\\S+)[иоы]й [Бб]ульвар ", " $1ом бульваре "],
            ["^ (\\S+[иы]н) [Бб]ульвар ", " $1ом бульваре "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Бб]ульвар ", " $1ом $2ем бульваре "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Бб]ульвар ", " $1ем $2ом бульваре "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Бб]ульвар ", " $1ом $2ом бульваре "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Бб]ульвар ", " $1ом $2ом бульваре "],
            ["^ (\\d+)-й (\\S+н)ий [Бб]ульвар ", " $1-м $2ем бульваре "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Бб]ульвар ", " $1-м $2ом бульваре "],
            ["^ (\\d+)-й (\\S+[иы]н) [Бб]ульвар ", " $1-м $2ом бульваре "],
            ["^ [Бб]ульвар ", " бульваре "],

            ["^ [Дд]убл[её]р ", " дублёре "],

            ["^ (\\S+н)ий [Зз]аезд ", " $1ем заезде "],
            ["^ (\\S+)[иоы]й [Зз]аезд ", " $1ом заезде "],
            ["^ (\\S+[еёо]в) [Зз]аезд ", " $1ом заезде "],
            ["^ (\\S+[иы]н) [Зз]аезд ", " $1ом заезде "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Зз]аезд ", " $1ом $2ем заезде "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Зз]аезд ", " $1ем $2ом заезде "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Зз]аезд ", " $1ом $2ом заезде "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Зз]аезд ", " $1ом $2ом заезде "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Зз]аезд ", " $1ом $2ом заезде "],
            ["^ (\\d+)-й (\\S+н)ий [Зз]аезд ", " $1-м $2ем заезде "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Зз]аезд ", " $1-м $2ом заезде "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Зз]аезд ", " $1-м $2ом заезде "],
            ["^ (\\d+)-й (\\S+[иы]н) [Зз]аезд ", " $1-м $2ом заезде "],
            ["^ [Зз]аезд ", " заезде "],

            ["^ (\\S+н)ий [Мм]ост ", " $1ем мосту "],
            ["^ (\\S+)[иоы]й [Мм]ост ", " $1ом мосту "],
            ["^ (\\S+[еёо]в) [Мм]ост ", " $1ом мосту "],
            ["^ (\\S+[иы]н) [Мм]ост ", " $1ом мосту "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Мм]ост ", " $1ом $2ем мосту "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Мм]ост ", " $1ем $2ом мосту "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Мм]ост ", " $1ом $2ом мосту "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Мм]ост ", " $1ом $2ом мосту "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Мм]ост ", " $1ом $2ом мосту "],
            ["^ (\\d+)-й [Мм]ост ", " $1-м мосту "],
            ["^ (\\d+)-й (\\S+н)ий [Мм]ост ", " $1-м $2ем мосту "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Мм]ост ", " $1-м $2ом мосту "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Мм]ост ", " $1-м $2ом мосту "],
            ["^ (\\d+)-й (\\S+[иы]н) [Мм]ост ", " $1-м $2ом мосту "],
            ["^ [Мм]ост ", " мосту "],

            ["^ (\\S+н)ий [Оо]бход ", " $1ем обходе "],
            ["^ (\\S+)[иоы]й [Оо]бход ", " $1ом обходе "],
            ["^ [Оо]бход ", " обходе "],

            ["^ (\\S+н)ий [Пп]арк ", " $1ем парке "],
            ["^ (\\S+)[иоы]й [Пп]арк ", " $1ом парке "],
            ["^ (\\S+[иы]н) [Пп]арк ", " $1ом парке "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]арк ", " $1ом $2ем парке "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]арк ", " $1ем $2ом парке "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]арк ", " $1ом $2ом парке "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]арк ", " $1ом $2ом парке "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]арк ", " $1-м $2ем парке "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]арк ", " $1-м $2ом парке "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]арк ", " $1-м $2ом парке "],
            ["^ [Пп]арк ", " парке "],

            ["^ (\\S+)[иоы]й-(\\S+)[иоы]й [Пп]ереулок ", " $1ом-$2ом переулке "],
            ["^ (\\d+)-й (\\S+)[иоы]й-(\\S+)[иоы]й [Пп]ереулок ", " $1-м $2ом-$3ом переулке "],
            ["^ (\\S+н)ий [Пп]ереулок ", " $1ем переулке "],
            ["^ (\\S+)[иоы]й [Пп]ереулок ", " $1ом переулке "],
            ["^ (\\S+[еёо]в) [Пп]ереулок ", " $1ом переулке "],
            ["^ (\\S+[иы]н) [Пп]ереулок ", " $1ом переулке "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]ереулок ", " $1ом $2ем переулке "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]ереулок ", " $1ем $2ом переулке "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]ереулок ", " $1ом $2ом переулке "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Пп]ереулок ", " $1ом $2ом переулке "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]ереулок ", " $1ом $2ом переулке "],
            ["^ (\\d+)-й [Пп]ереулок ", " $1-м переулке "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]ереулок ", " $1-м $2ем переулке "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]ереулок ", " $1-м $2ом переулке "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Пп]ереулок ", " $1-м $2ом переулке "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]ереулок ", " $1-м $2ом переулке "],
            ["^ [Пп]ереулок ", " переулке "],

            ["^ [Пп]одъезд ", " подъезде "],

            ["^ (\\S+[еёо]в)-(\\S+)[иоы]й [Пп]роезд ", " $1ом-$2ом проезде "],
            ["^ (\\S+н)ий [Пп]роезд ", " $1ем проезде "],
            ["^ (\\S+)[иоы]й [Пп]роезд ", " $1ом проезде "],
            ["^ (\\S+[еёо]в) [Пп]роезд ", " $1ом проезде "],
            ["^ (\\S+[иы]н) [Пп]роезд ", " $1ом проезде "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]роезд ", " $1ом $2ем проезде "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]роезд ", " $1ем $2ом проезде "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роезд ", " $1ом $2ом проезде "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Пп]роезд ", " $1ом $2ом проезде "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]роезд ", " $1ом $2ом проезде "],
            ["^ (\\d+)-й [Пп]роезд ", " $1-м проезде "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]роезд ", " $1-м $2ем проезде "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]роезд ", " $1-м $2ом проезде "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Пп]роезд ", " $1-м $2ом проезде "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]роезд ", " $1-м $2ом проезде "],
            ["^ (\\d+)-й (\\S+н)ий (\\S+)[иоы]й [Пп]роезд ", " $1-м $2ем $3ом проезде "],
            ["^ (\\d+)-й (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роезд ", " $1-м $2ом $3ом проезде "],
            ["^ [Пп]роезд ", " проезде "],

            ["^ (\\S+н)ий [Пп]роспект ", " $1ем проспекте "],
            ["^ (\\S+)[иоы]й [Пп]роспект ", " $1ом проспекте "],
            ["^ (\\S+[иы]н) [Пп]роспект ", " $1ом проспекте "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]роспект ", " $1ом $2ем проспекте "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]роспект ", " $1ем $2ом проспекте "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]роспект ", " $1ом $2ом проспекте "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]роспект ", " $1ом $2ом проспекте "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]роспект ", " $1-м $2ем проспекте "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]роспект ", " $1-м $2ом проспекте "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]роспект ", " $1-м $2ом проспекте "],
            ["^ [Пп]роспект ", " проспекте "],

            ["^ (\\S+н)ий [Пп]утепровод ", " $1ем путепроводе "],
            ["^ (\\S+)[иоы]й [Пп]утепровод ", " $1ом путепроводе "],
            ["^ (\\S+[иы]н) [Пп]утепровод ", " $1ом путепроводе "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Пп]утепровод ", " $1ом $2ем путепроводе "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Пп]утепровод ", " $1ем $2ом путепроводе "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Пп]утепровод ", " $1ом $2ом путепроводе "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Пп]утепровод ", " $1ом $2ом путепроводе "],
            ["^ (\\d+)-й (\\S+н)ий [Пп]утепровод ", " $1-м $2ем путепроводе "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Пп]утепровод ", " $1-м $2ом путепроводе "],
            ["^ (\\d+)-й (\\S+[иы]н) [Пп]утепровод ", " $1-м $2ом путепроводе "],
            ["^ [Пп]утепровод ", " путепроводе "],

            ["^ (\\S+н)ий [Сс]пуск ", " $1ем спуске "],
            ["^ (\\S+)[иоы]й [Сс]пуск ", " $1ом спуске "],
            ["^ (\\S+[еёо]в) [Сс]пуск ", " $1ом спуске "],
            ["^ (\\S+[иы]н) [Сс]пуск ", " $1ом спуске "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Сс]пуск ", " $1ом $2ем спуске "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Сс]пуск ", " $1ем $2ом спуске "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Сс]пуск ", " $1ом $2ом спуске "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Сс]пуск ", " $1ом $2ом спуске "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Сс]пуск ", " $1ом $2ом спуске "],
            ["^ (\\d+)-й (\\S+н)ий [Сс]пуск ", " $1-м $2ем спуске "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Сс]пуск ", " $1-м $2ом спуске "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Сс]пуск ", " $1-м $2ом спуске "],
            ["^ (\\d+)-й (\\S+[иы]н) [Сс]пуск ", " $1-м $2ом спуске "],
            ["^ [Сс]пуск ", " спуске "],

            ["^ (\\S+н)ий [Сс]ъезд ", " $1ем съезде "],
            ["^ (\\S+)[иоы]й [Сс]ъезд ", " $1ом съезде "],
            ["^ (\\S+[иы]н) [Сс]ъезд ", " $1ом съезде "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Сс]ъезд ", " $1ом $2ем съезде "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Сс]ъезд ", " $1ем $2ом съезде "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Сс]ъезд ", " $1ом $2ом съезде "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Сс]ъезд ", " $1ом $2ом съезде "],
            ["^ (\\d+)-й (\\S+н)ий [Сс]ъезд ", " $1-м $2ем съезде "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Сс]ъезд ", " $1-м $2ом съезде "],
            ["^ (\\d+)-й (\\S+[иы]н) [Сс]ъезд ", " $1-м $2ом съезде "],
            ["^ [Сс]ъезд ", " съезде "],

            ["^ (\\S+н)ий [Тт][уо]ннель ", " $1ем тоннеле "],
            ["^ (\\S+)[иоы]й [Тт][уо]ннель ", " $1ом тоннеле "],
            ["^ (\\S+[иы]н) [Тт][уо]ннель ", " $1ом тоннеле "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт][уо]ннель ", " $1ом $2ем тоннеле "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт][уо]ннель ", " $1ем $2ом тоннеле "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт][уо]ннель ", " $1ом $2ом тоннеле "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт][уо]ннель ", " $1ом $2ом тоннеле "],
            ["^ (\\d+)-й (\\S+н)ий [Тт][уо]ннель ", " $1-м $2ем тоннеле "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт][уо]ннель ", " $1-м $2ом тоннеле "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт][уо]ннель ", " $1-м $2ом тоннеле "],
            ["^ [Тт][уо]ннель ", " тоннеле "],

            ["^ (\\S+н)ий [Тт]ракт ", " $1ем тракте "],
            ["^ (\\S+)[иоы]й [Тт]ракт ", " $1ом тракте "],
            ["^ (\\S+[еёо]в) [Тт]ракт ", " $1ом тракте "],
            ["^ (\\S+[иы]н) [Тт]ракт ", " $1ом тракте "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт]ракт ", " $1ом $2ем тракте "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт]ракт ", " $1ем $2ом тракте "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт]ракт ", " $1ом $2ом тракте "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Тт]ракт ", " $1ом $2ом тракте "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт]ракт ", " $1ом $2ом тракте "],
            ["^ (\\d+)-й (\\S+н)ий [Тт]ракт ", " $1-м $2ем тракте "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт]ракт ", " $1-м $2ом тракте "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Тт]ракт ", " $1-м $2ом тракте "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт]ракт ", " $1-м $2ом тракте "],
            ["^ [Тт]ракт ", " тракте "],

            ["^ (\\S+н)ий [Тт]упик ", " $1ем тупике "],
            ["^ (\\S+)[иоы]й [Тт]упик ", " $1ом тупике "],
            ["^ (\\S+[еёо]в) [Тт]упик ", " $1ом тупике "],
            ["^ (\\S+[иы]н) [Тт]упик ", " $1ом тупике "],
            ["^ (\\S+)[иоы]й (\\S+н)ий [Тт]упик ", " $1ом $2ем тупике "],
            ["^ (\\S+н)ий (\\S+)[иоы]й [Тт]упик ", " $1ем $2ом тупике "],
            ["^ (\\S+)[иоы]й (\\S+)[иоы]й [Тт]упик ", " $1ом $2ом тупике "],
            ["^ (\\S+)[иоы]й (\\S+[еёо]в) [Тт]упик ", " $1ом $2ом тупике "],
            ["^ (\\S+)[иоы]й (\\S+[иы]н) [Тт]упик ", " $1ом $2ом тупике "],
            ["^ (\\d+)-й [Тт]упик ", " $1-м тупике "],
            ["^ (\\d+)-й (\\S+н)ий [Тт]упик ", " $1-м $2ем тупике "],
            ["^ (\\d+)-й (\\S+)[иоы]й [Тт]упик ", " $1-м $2ом тупике "],
            ["^ (\\d+)-й (\\S+[еёо]в) [Тт]упик ", " $1-м $2ом тупике "],
            ["^ (\\d+)-й (\\S+[иы]н) [Тт]упик ", " $1-м $2ом тупике "],
            ["^ [Тт]упик ", " тупике "],

            ["^ (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1м $2кольце "],
            ["^ (\\S+ье) ([Пп]олу)?[Кк]ольцо ", " $1м $2кольце "],
            ["^ (\\S+[ео])е (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1м $2м $3кольце "],
            ["^ (\\S+ье) (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1м $2м $3кольце "],
            ["^ (\\d+)-е (\\S+[ео])е ([Пп]олу)?[Кк]ольцо ", " $1-м $2м $3кольце "],
            ["^ (\\d+)-е (\\S+ье) ([Пп]олу)?[Кк]ольцо ", " $1-м $2м $3кольце "],
            ["^ ([Пп]олу)?[Кк]ольцо ", " $1кольце "],

            ["^ (\\S+[ео])е [Шш]оссе ", " $1м шоссе "],
            ["^ (\\S+ье) [Шш]оссе ", " $1м шоссе "],
            ["^ (\\S+[ео])е (\\S+[ео])е [Шш]оссе ", " $1м $2м шоссе "],
            ["^ (\\S+ье) (\\S+[ео])е [Шш]оссе ", " $1м $2м шоссе "],
            ["^ (\\d+)-е (\\S+[ео])е [Шш]оссе ", " $1-м $2м шоссе "],
            ["^ (\\d+)-е (\\S+ье) [Шш]оссе ", " $1-м $2м шоссе "],

            [" ([Тт])ретом ", " $1ретьем "],
            ["([жч])ом ", "$1ьем "]
        ]
    }
}

},{}],23:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "første",
                "2": "anden",
                "3": "tredje",
                "4": "fjerde",
                "5": "femte",
                "6": "sjette",
                "7": "syvende",
                "8": "ottende",
                "9": "niende",
                "10": "tiende"
            },
            "direction": {
                "north": "Nord",
                "northeast": "Nordøst",
                "east": "Øst",
                "southeast": "Sydøst",
                "south": "Syd",
                "southwest": "Sydvest",
                "west": "Vest",
                "northwest": "Nordvest"
            },
            "modifier": {
                "left": "venstresving",
                "right": "højresving",
                "sharp left": "skarpt venstresving",
                "sharp right": "skarpt højresving",
                "slight left": "svagt venstresving",
                "slight right": "svagt højresving",
                "straight": "ligeud",
                "uturn": "U-vending"
            },
            "lanes": {
                "xo": "Hold til højre",
                "ox": "Hold til venstre",
                "xox": "Benyt midterste spor",
                "oxo": "Hold til højre eller venstre"
            }
        },
        "modes": {
            "ferry": {
                "default": "Tag færgen",
                "name": "Tag færgen {way_name}",
                "destination": "Tag færgen i retning {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one} derefter, efter {distance}, {instruction_two}",
            "two linked": "{instruction_one}, derefter {instruction_two}",
            "one in distance": "Efter {distance} {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "afkørsel {exit}"
        },
        "arrive": {
            "default": {
                "default": "Du er ankommet til din {nth} destination",
                "upcoming": "Du vil ankomme til din {nth} destination",
                "short": "Du er ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du er ankommet til {waypoint_name}"
            },
            "left": {
                "default": "Du er ankommet til din {nth} destination, som befinder sig til venstre",
                "upcoming": "Du vil ankomme til din {nth} destination på venstre hånd",
                "short": "Du er ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du er ankommet til {waypoint_name}, som befinder sig til venstre"
            },
            "right": {
                "default": "Du er ankommet til din {nth} destination, som befinder sig til højre",
                "upcoming": "Du vil ankomme til din {nth} destination på højre hånd",
                "short": "Du er ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du er ankommet til {waypoint_name}, som befinder sig til højre"
            },
            "sharp left": {
                "default": "Du er ankommet til din {nth} destination, som befinder sig til venstre",
                "upcoming": "Du vil ankomme til din {nth} destination på venstre hånd",
                "short": "Du er ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du er ankommet til {waypoint_name}, som befinder sig til venstre"
            },
            "sharp right": {
                "default": "Du er ankommet til din {nth} destination, som befinder sig til højre",
                "upcoming": "Du vil ankomme til din {nth} destination på højre hånd",
                "short": "Du er ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du er ankommet til {waypoint_name}, som befinder sig til højre"
            },
            "slight right": {
                "default": "Du er ankommet til din {nth} destination, som befinder sig til højre",
                "upcoming": "Du vil ankomme til din {nth} destination på højre hånd",
                "short": "Du er ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du er ankommet til {waypoint_name}, som befinder sig til højre"
            },
            "slight left": {
                "default": "Du er ankommet til din {nth} destination, som befinder sig til venstre",
                "upcoming": "Du vil ankomme til din {nth} destination på venstre hånd",
                "short": "Du er ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du er ankommet til {waypoint_name}, som befinder sig til venstre"
            },
            "straight": {
                "default": "Du er ankommet til din {nth} destination, der befinder sig lige frem",
                "upcoming": "Du vil ankomme til din {nth} destination foran dig",
                "short": "Du er ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du er ankommet til {waypoint_name}, der befinder sig lige frem"
            }
        },
        "continue": {
            "default": {
                "default": "Drej til {modifier}",
                "name": "Drej til {modifier} videre ad {way_name}",
                "destination": "Drej til {modifier} mod {destination}",
                "exit": "Drej til {modifier} ad {way_name}"
            },
            "straight": {
                "default": "Fortsæt ligeud",
                "name": "Fortsæt ligeud ad {way_name}",
                "destination": "Fortsæt mod {destination}",
                "distance": "Fortsæt {distance} ligeud",
                "namedistance": "Fortsæt {distance} ad {way_name}"
            },
            "sharp left": {
                "default": "Drej skarpt til venstre",
                "name": "Drej skarpt til venstre videre ad {way_name}",
                "destination": "Drej skarpt til venstre mod {destination}"
            },
            "sharp right": {
                "default": "Drej skarpt til højre",
                "name": "Drej skarpt til højre videre ad {way_name}",
                "destination": "Drej skarpt til højre mod {destination}"
            },
            "slight left": {
                "default": "Drej left til venstre",
                "name": "Drej let til venstre videre ad {way_name}",
                "destination": "Drej let til venstre mod {destination}"
            },
            "slight right": {
                "default": "Drej let til højre",
                "name": "Drej let til højre videre ad {way_name}",
                "destination": "Drej let til højre mod {destination}"
            },
            "uturn": {
                "default": "Foretag en U-vending",
                "name": "Foretag en U-vending tilbage ad {way_name}",
                "destination": "Foretag en U-vending mod {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Kør mod {direction}",
                "name": "Kør mod {direction} ad {way_name}",
                "namedistance": "Fortsæt {distance} ad {way_name}mod {direction}"
            }
        },
        "end of road": {
            "default": {
                "default": "Drej til {modifier}",
                "name": "Drej til {modifier} ad {way_name}",
                "destination": "Drej til {modifier} mof {destination}"
            },
            "straight": {
                "default": "Fortsæt ligeud",
                "name": "Fortsæt ligeud ad {way_name}",
                "destination": "Fortsæt ligeud mod {destination}"
            },
            "uturn": {
                "default": "Foretag en U-vending for enden af vejen",
                "name": "Foretag en U-vending ad {way_name} for enden af vejen",
                "destination": "Foretag en U-vending mod {destination} for enden af vejen"
            }
        },
        "fork": {
            "default": {
                "default": "Hold til {modifier} ved udfletningen",
                "name": "Hold mod {modifier} på {way_name}",
                "destination": "Hold mod {modifier} mod {destination}"
            },
            "slight left": {
                "default": "Hold til venstre ved udfletningen",
                "name": "Hold til venstre på {way_name}",
                "destination": "Hold til venstre mod {destination}"
            },
            "slight right": {
                "default": "Hold til højre ved udfletningen",
                "name": "Hold til højre på {way_name}",
                "destination": "Hold til højre mod {destination}"
            },
            "sharp left": {
                "default": "Drej skarpt til venstre ved udfletningen",
                "name": "Drej skarpt til venstre ad {way_name}",
                "destination": "Drej skarpt til venstre mod {destination}"
            },
            "sharp right": {
                "default": "Drej skarpt til højre ved udfletningen",
                "name": "Drej skarpt til højre ad {way_name}",
                "destination": "Drej skarpt til højre mod {destination}"
            },
            "uturn": {
                "default": "Foretag en U-vending",
                "name": "Foretag en U-vending ad {way_name}",
                "destination": "Foretag en U-vending mod {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Flet til {modifier}",
                "name": "Flet til {modifier} ad {way_name}",
                "destination": "Flet til {modifier} mod {destination}"
            },
            "straight": {
                "default": "Flet",
                "name": "Flet ind på {way_name}",
                "destination": "Flet ind mod {destination}"
            },
            "slight left": {
                "default": "Flet til venstre",
                "name": "Flet til venstre ad {way_name}",
                "destination": "Flet til venstre mod {destination}"
            },
            "slight right": {
                "default": "Flet til højre",
                "name": "Flet til højre ad {way_name}",
                "destination": "Flet til højre mod {destination}"
            },
            "sharp left": {
                "default": "Flet til venstre",
                "name": "Flet til venstre ad {way_name}",
                "destination": "Flet til venstre mod {destination}"
            },
            "sharp right": {
                "default": "Flet til højre",
                "name": "Flet til højre ad {way_name}",
                "destination": "Flet til højre mod {destination}"
            },
            "uturn": {
                "default": "Foretag en U-vending",
                "name": "Foretag en U-vending ad {way_name}",
                "destination": "Foretag en U-vending mod {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Fortsæt {modifier}",
                "name": "Fortsæt {modifier} ad {way_name}",
                "destination": "Fortsæt {modifier} mod {destination}"
            },
            "straight": {
                "default": "Fortsæt ligeud",
                "name": "Fortsæt ad {way_name}",
                "destination": "Fortsæt mod {destination}"
            },
            "sharp left": {
                "default": "Drej skarpt til venstre",
                "name": "Drej skarpt til venstre ad {way_name}",
                "destination": "Drej skarpt til venstre mod {destination}"
            },
            "sharp right": {
                "default": "Drej skarpt til højre",
                "name": "Drej skarpt til højre ad {way_name}",
                "destination": "Drej skarpt til højre mod {destination}"
            },
            "slight left": {
                "default": "Fortsæt til venstre",
                "name": "Fortsæt til venstre ad {way_name}",
                "destination": "Fortsæt til venstre mod {destination}"
            },
            "slight right": {
                "default": "Fortsæt til højre",
                "name": "Fortsæt til højre ad {way_name}",
                "destination": "Fortsæt til højre mod {destination}"
            },
            "uturn": {
                "default": "Foretag en U-vending",
                "name": "Foretag en U-vending ad {way_name}",
                "destination": "Foretag en U-vending mod {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Fortsæt {modifier}",
                "name": "Fortsæt {modifier} ad {way_name}",
                "destination": "Fortsæt {modifier} mod {destination}"
            },
            "uturn": {
                "default": "Foretag en U-vending",
                "name": "Foretag en U-vending ad {way_name}",
                "destination": "Foretag en U-vending mod {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Tag afkørslen",
                "name": "Tag afkørslen ad {way_name}",
                "destination": "Tag afkørslen mod {destination}",
                "exit": "Vælg afkørsel {exit}",
                "exit_destination": "Vælg afkørsel {exit} mod {destination}"
            },
            "left": {
                "default": "Tag afkørslen til venstre",
                "name": "Tag afkørslen til venstre ad {way_name}",
                "destination": "Tag afkørslen til venstre mod {destination}",
                "exit": "Vælg afkørsel {exit} til venstre",
                "exit_destination": "Vælg afkørsel {exit} til venstre mod {destination}\n"
            },
            "right": {
                "default": "Tag afkørslen til højre",
                "name": "Tag afkørslen til højre ad {way_name}",
                "destination": "Tag afkørslen til højre mod {destination}",
                "exit": "Vælg afkørsel {exit} til højre",
                "exit_destination": "Vælg afkørsel {exit} til højre mod {destination}"
            },
            "sharp left": {
                "default": "Tag afkørslen til venstre",
                "name": "Tag afkørslen til venstre ad {way_name}",
                "destination": "Tag afkørslen til venstre mod {destination}",
                "exit": "Vælg afkørsel {exit} til venstre",
                "exit_destination": "Vælg afkørsel {exit} til venstre mod {destination}\n"
            },
            "sharp right": {
                "default": "Tag afkørslen til højre",
                "name": "Tag afkørslen til højre ad {way_name}",
                "destination": "Tag afkørslen til højre mod {destination}",
                "exit": "Vælg afkørsel {exit} til højre",
                "exit_destination": "Vælg afkørsel {exit} til højre mod {destination}"
            },
            "slight left": {
                "default": "Tag afkørslen til venstre",
                "name": "Tag afkørslen til venstre ad {way_name}",
                "destination": "Tag afkørslen til venstre mod {destination}",
                "exit": "Vælg afkørsel {exit} til venstre",
                "exit_destination": "Vælg afkørsel {exit} til venstre mod {destination}\n"
            },
            "slight right": {
                "default": "Tag afkørslen til højre",
                "name": "Tag afkørslen til højre ad {way_name}",
                "destination": "Tag afkørslen til højre mod {destination}",
                "exit": "Vælg afkørsel {exit} til højre",
                "exit_destination": "Vælg afkørsel {exit} til højre mod {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Tag afkørslen",
                "name": "Tag afkørslen ad {way_name}",
                "destination": "Tag afkørslen mod {destination}"
            },
            "left": {
                "default": "Tag afkørslen til venstre",
                "name": "Tag afkørslen til venstre ad {way_name}",
                "destination": "Tag afkørslen til venstre mod {destination}"
            },
            "right": {
                "default": "Tag afkørslen til højre",
                "name": "Tag afkørslen til højre ad {way_name}",
                "destination": "Tag afkørslen til højre mod {destination}"
            },
            "sharp left": {
                "default": "Tag afkørslen til venstre",
                "name": "Tag afkørslen til venstre ad {way_name}",
                "destination": "Tag afkørslen til venstre mod {destination}"
            },
            "sharp right": {
                "default": "Tag afkørslen til højre",
                "name": "Tag afkørslen til højre ad {way_name}",
                "destination": "Tag afkørslen til højre mod {destination}"
            },
            "slight left": {
                "default": "Tag afkørslen til venstre",
                "name": "Tag afkørslen til venstre ad {way_name}",
                "destination": "Tag afkørslen til venstre mod {destination}"
            },
            "slight right": {
                "default": "Tag afkørslen til højre",
                "name": "Tag afkørslen til højre ad {way_name}",
                "destination": "Tag afkørslen til højre mod {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Kør ind i rundkørslen",
                    "name": "Tag rundkørslen og kør fra ad {way_name}",
                    "destination": "Tag rundkørslen og kør mod {destination}"
                },
                "name": {
                    "default": "Kør ind i {rotary_name}",
                    "name": "Kør ind i {rotary_name} og kør ad {way_name} ",
                    "destination": "Kør ind i {rotary_name} og kør mod {destination}"
                },
                "exit": {
                    "default": "Tag rundkørslen og forlad ved {exit_number} afkørsel",
                    "name": "Tag rundkørslen og forlad ved {exit_number} afkørsel ad {way_name}",
                    "destination": "Tag rundkørslen og forlad ved {exit_number} afkørsel mod {destination}"
                },
                "name_exit": {
                    "default": "Kør ind i {rotary_name} og forlad ved {exit_number} afkørsel",
                    "name": "Kør ind i {rotary_name} og forlad ved {exit_number} afkørsel ad {way_name}",
                    "destination": "Kør ind i {rotary_name} og forlad ved {exit_number} afkørsel mod {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Tag rundkørslen og forlad ved {exit_number} afkørsel",
                    "name": "Tag rundkørslen og forlad ved {exit_number} afkørsel ad {way_name}",
                    "destination": "Tag rundkørslen og forlad ved {exit_number} afkørsel mod {destination}"
                },
                "default": {
                    "default": "Kør ind i rundkørslen",
                    "name": "Tag rundkørslen og kør fra ad {way_name}",
                    "destination": "Tag rundkørslen og kør mod {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Foretag et {modifier}",
                "name": "Foretag et {modifier} ad {way_name}",
                "destination": "Foretag et {modifier} mod {destination}"
            },
            "left": {
                "default": "Drej til venstre",
                "name": "Drej til venstre ad {way_name}",
                "destination": "Drej til venstre mod {destination}"
            },
            "right": {
                "default": "Drej til højre",
                "name": "Drej til højre ad {way_name}",
                "destination": "Drej til højre mod {destination}"
            },
            "straight": {
                "default": "Fortsæt ligeud",
                "name": "Fortsæt ligeud ad {way_name}",
                "destination": "Fortsæt ligeud mod {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Forlad rundkørslen",
                "name": "Forlad rundkørslen ad {way_name}",
                "destination": "Forlad rundkørslen mod  {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Forlad rundkørslen",
                "name": "Forlad rundkørslen ad {way_name}",
                "destination": "Forlad rundkørslen mod {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Foretag et {modifier}",
                "name": "Foretag et {modifier} ad {way_name}",
                "destination": "Foretag et {modifier} mod {destination}"
            },
            "left": {
                "default": "Drej til venstre",
                "name": "Drej til venstre ad {way_name}",
                "destination": "Drej til venstre mod {destination}"
            },
            "right": {
                "default": "Drej til højre",
                "name": "Drej til højre ad {way_name}",
                "destination": "Drej til højre mod {destination}"
            },
            "straight": {
                "default": "Fortsæt ligeud",
                "name": "Kør ligeud ad {way_name}",
                "destination": "Kør ligeud mod {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Fortsæt ligeud"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],24:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "erste",
                "2": "zweite",
                "3": "dritte",
                "4": "vierte",
                "5": "fünfte",
                "6": "sechste",
                "7": "siebente",
                "8": "achte",
                "9": "neunte",
                "10": "zehnte"
            },
            "direction": {
                "north": "Norden",
                "northeast": "Nordosten",
                "east": "Osten",
                "southeast": "Südosten",
                "south": "Süden",
                "southwest": "Südwesten",
                "west": "Westen",
                "northwest": "Nordwesten"
            },
            "modifier": {
                "left": "links",
                "right": "rechts",
                "sharp left": "scharf links",
                "sharp right": "scharf rechts",
                "slight left": "leicht links",
                "slight right": "leicht rechts",
                "straight": "geradeaus",
                "uturn": "180°-Wendung"
            },
            "lanes": {
                "xo": "Rechts halten",
                "ox": "Links halten",
                "xox": "Mittlere Spur nutzen",
                "oxo": "Rechts oder links halten"
            }
        },
        "modes": {
            "ferry": {
                "default": "Fähre nehmen",
                "name": "Fähre nehmen {way_name}",
                "destination": "Fähre nehmen Richtung {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one} danach in {distance} {instruction_two}",
            "two linked": "{instruction_one} danach {instruction_two}",
            "one in distance": "In {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "exit {exit}"
        },
        "arrive": {
            "default": {
                "default": "Sie haben Ihr {nth} Ziel erreicht",
                "upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "short": "Sie haben Ihr {nth} Ziel erreicht",
                "short-upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "named": "Sie haben Ihr {waypoint_name}"
            },
            "left": {
                "default": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich links",
                "upcoming": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich links",
                "short": "Sie haben Ihr {nth} Ziel erreicht",
                "short-upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "named": "Sie haben Ihr {waypoint_name}, es befindet sich links"
            },
            "right": {
                "default": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts",
                "upcoming": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts",
                "short": "Sie haben Ihr {nth} Ziel erreicht",
                "short-upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "named": "Sie haben Ihr {waypoint_name}, es befindet sich rechts"
            },
            "sharp left": {
                "default": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich links",
                "upcoming": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich links",
                "short": "Sie haben Ihr {nth} Ziel erreicht",
                "short-upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "named": "Sie haben Ihr {waypoint_name}, es befindet sich links"
            },
            "sharp right": {
                "default": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts",
                "upcoming": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts",
                "short": "Sie haben Ihr {nth} Ziel erreicht",
                "short-upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "named": "Sie haben Ihr {waypoint_name}, es befindet sich rechts"
            },
            "slight right": {
                "default": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts",
                "upcoming": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts",
                "short": "Sie haben Ihr {nth} Ziel erreicht",
                "short-upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "named": "Sie haben Ihr {waypoint_name}, es befindet sich rechts"
            },
            "slight left": {
                "default": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich links",
                "upcoming": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich links",
                "short": "Sie haben Ihr {nth} Ziel erreicht",
                "short-upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "named": "Sie haben Ihr {waypoint_name}, es befindet sich links"
            },
            "straight": {
                "default": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich geradeaus",
                "upcoming": "Sie haben Ihr {nth} Ziel erreicht, es befindet sich geradeaus",
                "short": "Sie haben Ihr {nth} Ziel erreicht",
                "short-upcoming": "Sie haben Ihr {nth} Ziel erreicht",
                "named": "Sie haben Ihr {waypoint_name}, es befindet sich geradeaus"
            }
        },
        "continue": {
            "default": {
                "default": "{modifier} abbiegen",
                "name": "{modifier} weiterfahren auf {way_name}",
                "destination": "{modifier} abbiegen Richtung {destination}",
                "exit": "{modifier} abbiegen auf {way_name}"
            },
            "straight": {
                "default": "Geradeaus weiterfahren",
                "name": "Geradeaus weiterfahren auf {way_name}",
                "destination": "Weiterfahren in Richtung {destination}",
                "distance": "Geradeaus weiterfahren für {distance}",
                "namedistance": "Geradeaus weiterfahren auf {way_name} für {distance}"
            },
            "sharp left": {
                "default": "Scharf links",
                "name": "Scharf links weiterfahren auf {way_name}",
                "destination": "Scharf links Richtung {destination}"
            },
            "sharp right": {
                "default": "Scharf rechts",
                "name": "Scharf rechts weiterfahren auf {way_name}",
                "destination": "Scharf rechts Richtung {destination}"
            },
            "slight left": {
                "default": "Leicht links",
                "name": "Leicht links weiter auf {way_name}",
                "destination": "Leicht links weiter Richtung {destination}"
            },
            "slight right": {
                "default": "Leicht rechts weiter",
                "name": "Leicht rechts weiter auf {way_name}",
                "destination": "Leicht rechts weiter Richtung {destination}"
            },
            "uturn": {
                "default": "180°-Wendung",
                "name": "180°-Wendung auf {way_name}",
                "destination": "180°-Wendung Richtung {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Fahren Sie Richtung {direction}",
                "name": "Fahren Sie Richtung {direction} auf {way_name}",
                "namedistance": "Fahren Sie Richtung {direction} auf {way_name} für {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "{modifier} abbiegen",
                "name": "{modifier} abbiegen auf {way_name}",
                "destination": "{modifier} abbiegen Richtung {destination}"
            },
            "straight": {
                "default": "Geradeaus weiterfahren",
                "name": "Geradeaus weiterfahren auf {way_name}",
                "destination": "Geradeaus weiterfahren Richtung {destination}"
            },
            "uturn": {
                "default": "180°-Wendung am Ende der Straße",
                "name": "180°-Wendung auf {way_name} am Ende der Straße",
                "destination": "180°-Wendung Richtung {destination} am Ende der Straße"
            }
        },
        "fork": {
            "default": {
                "default": "{modifier} halten an der Gabelung",
                "name": "{modifier} halten an der Gabelung auf {way_name}",
                "destination": "{modifier}  halten an der Gabelung Richtung {destination}"
            },
            "slight left": {
                "default": "Links halten an der Gabelung",
                "name": "Links halten an der Gabelung auf {way_name}",
                "destination": "Links halten an der Gabelung Richtung {destination}"
            },
            "slight right": {
                "default": "Rechts halten an der Gabelung",
                "name": "Rechts halten an der Gabelung auf {way_name}",
                "destination": "Rechts halten an der Gabelung Richtung {destination}"
            },
            "sharp left": {
                "default": "Scharf links abbiegen an der Gabelung",
                "name": "Scharf links auf {way_name}",
                "destination": "Scharf links Richtung {destination}"
            },
            "sharp right": {
                "default": "Scharf rechts abbiegen an der Gabelung",
                "name": "Scharf rechts auf {way_name}",
                "destination": "Scharf rechts Richtung {destination}"
            },
            "uturn": {
                "default": "180°-Wendung",
                "name": "180°-Wendung auf {way_name}",
                "destination": "180°-Wendung Richtung {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "{modifier} auffahren",
                "name": "{modifier} auffahren auf {way_name}",
                "destination": "{modifier} auffahren Richtung {destination}"
            },
            "straight": {
                "default": "geradeaus auffahren",
                "name": "geradeaus auffahren auf {way_name}",
                "destination": "geradeaus auffahren Richtung {destination}"
            },
            "slight left": {
                "default": "Leicht links auffahren",
                "name": "Leicht links auffahren auf {way_name}",
                "destination": "Leicht links auffahren Richtung {destination}"
            },
            "slight right": {
                "default": "Leicht rechts auffahren",
                "name": "Leicht rechts auffahren auf {way_name}",
                "destination": "Leicht rechts auffahren Richtung {destination}"
            },
            "sharp left": {
                "default": "Scharf links auffahren",
                "name": "Scharf links auffahren auf {way_name}",
                "destination": "Scharf links auffahren Richtung {destination}"
            },
            "sharp right": {
                "default": "Scharf rechts auffahren",
                "name": "Scharf rechts auffahren auf {way_name}",
                "destination": "Scharf rechts auffahren Richtung {destination}"
            },
            "uturn": {
                "default": "180°-Wendung",
                "name": "180°-Wendung auf {way_name}",
                "destination": "180°-Wendung Richtung {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "{modifier} weiterfahren",
                "name": "{modifier} weiterfahren auf {way_name}",
                "destination": "{modifier} weiterfahren Richtung {destination}"
            },
            "straight": {
                "default": "Geradeaus weiterfahren",
                "name": "Weiterfahren auf {way_name}",
                "destination": "Weiterfahren in Richtung {destination}"
            },
            "sharp left": {
                "default": "Scharf links",
                "name": "Scharf links auf {way_name}",
                "destination": "Scharf links Richtung {destination}"
            },
            "sharp right": {
                "default": "Scharf rechts",
                "name": "Scharf rechts auf {way_name}",
                "destination": "Scharf rechts Richtung {destination}"
            },
            "slight left": {
                "default": "Leicht links weiter",
                "name": "Leicht links weiter auf {way_name}",
                "destination": "Leicht links weiter Richtung {destination}"
            },
            "slight right": {
                "default": "Leicht rechts weiter",
                "name": "Leicht rechts weiter auf {way_name}",
                "destination": "Leicht rechts weiter Richtung {destination}"
            },
            "uturn": {
                "default": "180°-Wendung",
                "name": "180°-Wendung auf {way_name}",
                "destination": "180°-Wendung Richtung {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "{modifier} weiterfahren",
                "name": "{modifier} weiterfahren auf {way_name}",
                "destination": "{modifier} weiterfahren Richtung {destination}"
            },
            "uturn": {
                "default": "180°-Wendung",
                "name": "180°-Wendung auf {way_name}",
                "destination": "180°-Wendung Richtung {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Ausfahrt nehmen",
                "name": "Ausfahrt nehmen auf {way_name}",
                "destination": "Ausfahrt nehmen Richtung {destination}",
                "exit": "Ausfahrt {exit} nehmen",
                "exit_destination": "Ausfahrt {exit} nehmen Richtung {destination}"
            },
            "left": {
                "default": "Ausfahrt links nehmen",
                "name": "Ausfahrt links nehmen auf {way_name}",
                "destination": "Ausfahrt links nehmen Richtung {destination}",
                "exit": "Ausfahrt {exit} links nehmen",
                "exit_destination": "Ausfahrt {exit} links nehmen Richtung {destination}"
            },
            "right": {
                "default": "Ausfahrt rechts nehmen",
                "name": "Ausfahrt rechts nehmen Richtung {way_name}",
                "destination": "Ausfahrt rechts nehmen Richtung {destination}",
                "exit": "Ausfahrt {exit} rechts nehmen",
                "exit_destination": "Ausfahrt {exit} nehmen Richtung {destination}"
            },
            "sharp left": {
                "default": "Ausfahrt links nehmen",
                "name": "Ausfahrt links Seite nehmen auf {way_name}",
                "destination": "Ausfahrt links nehmen Richtung {destination}",
                "exit": "Ausfahrt {exit} links nehmen",
                "exit_destination": "Ausfahrt{exit} links nehmen Richtung {destination}"
            },
            "sharp right": {
                "default": "Ausfahrt rechts nehmen",
                "name": "Ausfahrt rechts nehmen auf {way_name}",
                "destination": "Ausfahrt rechts nehmen Richtung {destination}",
                "exit": "Ausfahrt {exit} rechts nehmen",
                "exit_destination": "Ausfahrt {exit} nehmen Richtung {destination}"
            },
            "slight left": {
                "default": "Ausfahrt links nehmen",
                "name": "Ausfahrt links nehmen auf {way_name}",
                "destination": "Ausfahrt links nehmen Richtung {destination}",
                "exit": "Ausfahrt {exit} nehmen",
                "exit_destination": "Ausfahrt {exit} links nehmen Richtung {destination}"
            },
            "slight right": {
                "default": "Ausfahrt rechts nehmen",
                "name": "Ausfahrt rechts nehmen auf {way_name}",
                "destination": "Ausfahrt rechts nehmen Richtung {destination}",
                "exit": "Ausfahrt {exit} rechts nehmen",
                "exit_destination": "Ausfahrt {exit} nehmen Richtung {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Auffahrt nehmen",
                "name": "Auffahrt nehmen auf {way_name}",
                "destination": "Auffahrt nehmen Richtung {destination}"
            },
            "left": {
                "default": "Auffahrt links nehmen",
                "name": "Auffahrt links nehmen auf {way_name}",
                "destination": "Auffahrt links nehmen Richtung {destination}"
            },
            "right": {
                "default": "Auffahrt rechts nehmen",
                "name": "Auffahrt rechts nehmen auf {way_name}",
                "destination": "Auffahrt rechts nehmen Richtung {destination}"
            },
            "sharp left": {
                "default": "Auffahrt links nehmen",
                "name": "Auffahrt links nehmen auf {way_name}",
                "destination": "Auffahrt links nehmen Richtung {destination}"
            },
            "sharp right": {
                "default": "Auffahrt rechts nehmen",
                "name": "Auffahrt rechts nehmen auf {way_name}",
                "destination": "Auffahrt rechts nehmen Richtung {destination}"
            },
            "slight left": {
                "default": "Auffahrt links Seite nehmen",
                "name": "Auffahrt links nehmen auf {way_name}",
                "destination": "Auffahrt links nehmen Richtung {destination}"
            },
            "slight right": {
                "default": "Auffahrt rechts nehmen",
                "name": "Auffahrt rechts nehmen auf {way_name}",
                "destination": "Auffahrt rechts nehmen Richtung {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "In den Kreisverkehr fahren",
                    "name": "Im Kreisverkehr die Ausfahrt auf {way_name} nehmen",
                    "destination": "Im Kreisverkehr die Ausfahrt Richtung {destination} nehmen"
                },
                "name": {
                    "default": "In {rotary_name} fahren",
                    "name": "In {rotary_name} die Ausfahrt auf {way_name} nehmen",
                    "destination": "In {rotary_name} die Ausfahrt Richtung {destination} nehmen"
                },
                "exit": {
                    "default": "Im Kreisverkehr die {exit_number} Ausfahrt nehmen",
                    "name": "Im Kreisverkehr die {exit_number} Ausfahrt nehmen auf {way_name}",
                    "destination": "Im Kreisverkehr die {exit_number} Ausfahrt nehmen Richtung {destination}"
                },
                "name_exit": {
                    "default": "In den Kreisverkehr fahren und {exit_number} Ausfahrt nehmen",
                    "name": "In den Kreisverkehr fahren und {exit_number} Ausfahrt nehmen auf {way_name}",
                    "destination": "In den Kreisverkehr fahren und {exit_number} Ausfahrt nehmen Richtung {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Im Kreisverkehr die {exit_number} Ausfahrt nehmen",
                    "name": "Im Kreisverkehr die {exit_number} Ausfahrt nehmen auf {way_name}",
                    "destination": "Im Kreisverkehr die {exit_number} Ausfahrt nehmen Richtung {destination}"
                },
                "default": {
                    "default": "In den Kreisverkehr fahren",
                    "name": "Im Kreisverkehr die Ausfahrt auf {way_name} nehmen",
                    "destination": "Im Kreisverkehr die Ausfahrt Richtung {destination} nehmen"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "{modifier} abbiegen",
                "name": "{modifier} abbiegen auf {way_name}",
                "destination": "{modifier} abbiegen Richtung {destination}"
            },
            "left": {
                "default": "Links abbiegen",
                "name": "Links abbiegen auf {way_name}",
                "destination": "Links abbiegen Richtung {destination}"
            },
            "right": {
                "default": "Rechts abbiegen",
                "name": "Rechts abbiegen auf {way_name}",
                "destination": "Rechts abbiegen Richtung {destination}"
            },
            "straight": {
                "default": "Geradeaus weiterfahren",
                "name": "Geradeaus weiterfahren auf {way_name}",
                "destination": "Geradeaus weiterfahren Richtung {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "{modifier} abbiegen",
                "name": "{modifier} abbiegen auf {way_name}",
                "destination": "{modifier} abbiegen Richtung {destination}"
            },
            "left": {
                "default": "Links abbiegen",
                "name": "Links abbiegen auf {way_name}",
                "destination": "Links abbiegen Richtung {destination}"
            },
            "right": {
                "default": "Rechts abbiegen",
                "name": "Rechts abbiegen auf {way_name}",
                "destination": "Rechts abbiegen Richtung {destination}"
            },
            "straight": {
                "default": "Geradeaus weiterfahren",
                "name": "Geradeaus weiterfahren auf {way_name}",
                "destination": "Geradeaus weiterfahren Richtung {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "{modifier} abbiegen",
                "name": "{modifier} abbiegen auf {way_name}",
                "destination": "{modifier} abbiegen Richtung {destination}"
            },
            "left": {
                "default": "Links abbiegen",
                "name": "Links abbiegen auf {way_name}",
                "destination": "Links abbiegen Richtung {destination}"
            },
            "right": {
                "default": "Rechts abbiegen",
                "name": "Rechts abbiegen auf {way_name}",
                "destination": "Rechts abbiegen Richtung {destination}"
            },
            "straight": {
                "default": "Geradeaus weiterfahren",
                "name": "Geradeaus weiterfahren auf {way_name}",
                "destination": "Geradeaus weiterfahren Richtung {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "{modifier} abbiegen",
                "name": "{modifier} abbiegen auf {way_name}",
                "destination": "{modifier} abbiegen Richtung {destination}"
            },
            "left": {
                "default": "Links abbiegen",
                "name": "Links abbiegen auf {way_name}",
                "destination": "Links abbiegen Richtung {destination}"
            },
            "right": {
                "default": "Rechts abbiegen",
                "name": "Rechts abbiegen auf {way_name}",
                "destination": "Rechts abbiegen Richtung {destination}"
            },
            "straight": {
                "default": "Geradeaus weiterfahren",
                "name": "Geradeaus weiterfahren auf {way_name}",
                "destination": "Geradeaus weiterfahren Richtung {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Geradeaus weiterfahren"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],25:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1st",
                "2": "2nd",
                "3": "3rd",
                "4": "4th",
                "5": "5th",
                "6": "6th",
                "7": "7th",
                "8": "8th",
                "9": "9th",
                "10": "10th"
            },
            "direction": {
                "north": "north",
                "northeast": "northeast",
                "east": "east",
                "southeast": "southeast",
                "south": "south",
                "southwest": "southwest",
                "west": "west",
                "northwest": "northwest"
            },
            "modifier": {
                "left": "left",
                "right": "right",
                "sharp left": "sharp left",
                "sharp right": "sharp right",
                "slight left": "slight left",
                "slight right": "slight right",
                "straight": "straight",
                "uturn": "U-turn"
            },
            "lanes": {
                "xo": "Keep right",
                "ox": "Keep left",
                "xox": "Keep in the middle",
                "oxo": "Keep left or right"
            }
        },
        "modes": {
            "ferry": {
                "default": "Take the ferry",
                "name": "Take the ferry {way_name}",
                "destination": "Take the ferry towards {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, then, in {distance}, {instruction_two}",
            "two linked": "{instruction_one}, then {instruction_two}",
            "one in distance": "In {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "exit {exit}"
        },
        "arrive": {
            "default": {
                "default": "You have arrived at your {nth} destination",
                "upcoming": "You will arrive at your {nth} destination",
                "short": "You have arrived",
                "short-upcoming": "You will arrive",
                "named": "You have arrived at {waypoint_name}"
            },
            "left": {
                "default": "You have arrived at your {nth} destination, on the left",
                "upcoming": "You will arrive at your {nth} destination, on the left",
                "short": "You have arrived",
                "short-upcoming": "You will arrive",
                "named": "You have arrived at {waypoint_name}, on the left"
            },
            "right": {
                "default": "You have arrived at your {nth} destination, on the right",
                "upcoming": "You will arrive at your {nth} destination, on the right",
                "short": "You have arrived",
                "short-upcoming": "You will arrive",
                "named": "You have arrived at {waypoint_name}, on the right"
            },
            "sharp left": {
                "default": "You have arrived at your {nth} destination, on the left",
                "upcoming": "You will arrive at your {nth} destination, on the left",
                "short": "You have arrived",
                "short-upcoming": "You will arrive",
                "named": "You have arrived at {waypoint_name}, on the left"
            },
            "sharp right": {
                "default": "You have arrived at your {nth} destination, on the right",
                "upcoming": "You will arrive at your {nth} destination, on the right",
                "short": "You have arrived",
                "short-upcoming": "You will arrive",
                "named": "You have arrived at {waypoint_name}, on the right"
            },
            "slight right": {
                "default": "You have arrived at your {nth} destination, on the right",
                "upcoming": "You will arrive at your {nth} destination, on the right",
                "short": "You have arrived",
                "short-upcoming": "You will arrive",
                "named": "You have arrived at {waypoint_name}, on the right"
            },
            "slight left": {
                "default": "You have arrived at your {nth} destination, on the left",
                "upcoming": "You will arrive at your {nth} destination, on the left",
                "short": "You have arrived",
                "short-upcoming": "You will arrive",
                "named": "You have arrived at {waypoint_name}, on the left"
            },
            "straight": {
                "default": "You have arrived at your {nth} destination, straight ahead",
                "upcoming": "You will arrive at your {nth} destination, straight ahead",
                "short": "You have arrived",
                "short-upcoming": "You will arrive",
                "named": "You have arrived at {waypoint_name}, straight ahead"
            }
        },
        "continue": {
            "default": {
                "default": "Turn {modifier}",
                "name": "Turn {modifier} to stay on {way_name}",
                "destination": "Turn {modifier} towards {destination}",
                "exit": "Turn {modifier} onto {way_name}"
            },
            "straight": {
                "default": "Continue straight",
                "name": "Continue straight to stay on {way_name}",
                "destination": "Continue towards {destination}",
                "distance": "Continue straight for {distance}",
                "namedistance": "Continue on {way_name} for {distance}"
            },
            "sharp left": {
                "default": "Make a sharp left",
                "name": "Make a sharp left to stay on {way_name}",
                "destination": "Make a sharp left towards {destination}"
            },
            "sharp right": {
                "default": "Make a sharp right",
                "name": "Make a sharp right to stay on {way_name}",
                "destination": "Make a sharp right towards {destination}"
            },
            "slight left": {
                "default": "Make a slight left",
                "name": "Make a slight left to stay on {way_name}",
                "destination": "Make a slight left towards {destination}"
            },
            "slight right": {
                "default": "Make a slight right",
                "name": "Make a slight right to stay on {way_name}",
                "destination": "Make a slight right towards {destination}"
            },
            "uturn": {
                "default": "Make a U-turn",
                "name": "Make a U-turn and continue on {way_name}",
                "destination": "Make a U-turn towards {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Head {direction}",
                "name": "Head {direction} on {way_name}",
                "namedistance": "Head {direction} on {way_name} for {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Turn {modifier}",
                "name": "Turn {modifier} onto {way_name}",
                "destination": "Turn {modifier} towards {destination}"
            },
            "straight": {
                "default": "Continue straight",
                "name": "Continue straight onto {way_name}",
                "destination": "Continue straight towards {destination}"
            },
            "uturn": {
                "default": "Make a U-turn at the end of the road",
                "name": "Make a U-turn onto {way_name} at the end of the road",
                "destination": "Make a U-turn towards {destination} at the end of the road"
            }
        },
        "fork": {
            "default": {
                "default": "Keep {modifier} at the fork",
                "name": "Keep {modifier} onto {way_name}",
                "destination": "Keep {modifier} towards {destination}"
            },
            "slight left": {
                "default": "Keep left at the fork",
                "name": "Keep left onto {way_name}",
                "destination": "Keep left towards {destination}"
            },
            "slight right": {
                "default": "Keep right at the fork",
                "name": "Keep right onto {way_name}",
                "destination": "Keep right towards {destination}"
            },
            "sharp left": {
                "default": "Take a sharp left at the fork",
                "name": "Take a sharp left onto {way_name}",
                "destination": "Take a sharp left towards {destination}"
            },
            "sharp right": {
                "default": "Take a sharp right at the fork",
                "name": "Take a sharp right onto {way_name}",
                "destination": "Take a sharp right towards {destination}"
            },
            "uturn": {
                "default": "Make a U-turn",
                "name": "Make a U-turn onto {way_name}",
                "destination": "Make a U-turn towards {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Merge {modifier}",
                "name": "Merge {modifier} onto {way_name}",
                "destination": "Merge {modifier} towards {destination}"
            },
            "straight": {
                "default": "Merge",
                "name": "Merge onto {way_name}",
                "destination": "Merge towards {destination}"
            },
            "slight left": {
                "default": "Merge left",
                "name": "Merge left onto {way_name}",
                "destination": "Merge left towards {destination}"
            },
            "slight right": {
                "default": "Merge right",
                "name": "Merge right onto {way_name}",
                "destination": "Merge right towards {destination}"
            },
            "sharp left": {
                "default": "Merge left",
                "name": "Merge left onto {way_name}",
                "destination": "Merge left towards {destination}"
            },
            "sharp right": {
                "default": "Merge right",
                "name": "Merge right onto {way_name}",
                "destination": "Merge right towards {destination}"
            },
            "uturn": {
                "default": "Make a U-turn",
                "name": "Make a U-turn onto {way_name}",
                "destination": "Make a U-turn towards {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Continue {modifier}",
                "name": "Continue {modifier} onto {way_name}",
                "destination": "Continue {modifier} towards {destination}"
            },
            "straight": {
                "default": "Continue straight",
                "name": "Continue onto {way_name}",
                "destination": "Continue towards {destination}"
            },
            "sharp left": {
                "default": "Take a sharp left",
                "name": "Take a sharp left onto {way_name}",
                "destination": "Take a sharp left towards {destination}"
            },
            "sharp right": {
                "default": "Take a sharp right",
                "name": "Take a sharp right onto {way_name}",
                "destination": "Take a sharp right towards {destination}"
            },
            "slight left": {
                "default": "Continue slightly left",
                "name": "Continue slightly left onto {way_name}",
                "destination": "Continue slightly left towards {destination}"
            },
            "slight right": {
                "default": "Continue slightly right",
                "name": "Continue slightly right onto {way_name}",
                "destination": "Continue slightly right towards {destination}"
            },
            "uturn": {
                "default": "Make a U-turn",
                "name": "Make a U-turn onto {way_name}",
                "destination": "Make a U-turn towards {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Continue {modifier}",
                "name": "Continue {modifier} onto {way_name}",
                "destination": "Continue {modifier} towards {destination}"
            },
            "uturn": {
                "default": "Make a U-turn",
                "name": "Make a U-turn onto {way_name}",
                "destination": "Make a U-turn towards {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Take the ramp",
                "name": "Take the ramp onto {way_name}",
                "destination": "Take the ramp towards {destination}",
                "exit": "Take exit {exit}",
                "exit_destination": "Take exit {exit} towards {destination}"
            },
            "left": {
                "default": "Take the ramp on the left",
                "name": "Take the ramp on the left onto {way_name}",
                "destination": "Take the ramp on the left towards {destination}",
                "exit": "Take exit {exit} on the left",
                "exit_destination": "Take exit {exit} on the left towards {destination}"
            },
            "right": {
                "default": "Take the ramp on the right",
                "name": "Take the ramp on the right onto {way_name}",
                "destination": "Take the ramp on the right towards {destination}",
                "exit": "Take exit {exit} on the right",
                "exit_destination": "Take exit {exit} on the right towards {destination}"
            },
            "sharp left": {
                "default": "Take the ramp on the left",
                "name": "Take the ramp on the left onto {way_name}",
                "destination": "Take the ramp on the left towards {destination}",
                "exit": "Take exit {exit} on the left",
                "exit_destination": "Take exit {exit} on the left towards {destination}"
            },
            "sharp right": {
                "default": "Take the ramp on the right",
                "name": "Take the ramp on the right onto {way_name}",
                "destination": "Take the ramp on the right towards {destination}",
                "exit": "Take exit {exit} on the right",
                "exit_destination": "Take exit {exit} on the right towards {destination}"
            },
            "slight left": {
                "default": "Take the ramp on the left",
                "name": "Take the ramp on the left onto {way_name}",
                "destination": "Take the ramp on the left towards {destination}",
                "exit": "Take exit {exit} on the left",
                "exit_destination": "Take exit {exit} on the left towards {destination}"
            },
            "slight right": {
                "default": "Take the ramp on the right",
                "name": "Take the ramp on the right onto {way_name}",
                "destination": "Take the ramp on the right towards {destination}",
                "exit": "Take exit {exit} on the right",
                "exit_destination": "Take exit {exit} on the right towards {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Take the ramp",
                "name": "Take the ramp onto {way_name}",
                "destination": "Take the ramp towards {destination}"
            },
            "left": {
                "default": "Take the ramp on the left",
                "name": "Take the ramp on the left onto {way_name}",
                "destination": "Take the ramp on the left towards {destination}"
            },
            "right": {
                "default": "Take the ramp on the right",
                "name": "Take the ramp on the right onto {way_name}",
                "destination": "Take the ramp on the right towards {destination}"
            },
            "sharp left": {
                "default": "Take the ramp on the left",
                "name": "Take the ramp on the left onto {way_name}",
                "destination": "Take the ramp on the left towards {destination}"
            },
            "sharp right": {
                "default": "Take the ramp on the right",
                "name": "Take the ramp on the right onto {way_name}",
                "destination": "Take the ramp on the right towards {destination}"
            },
            "slight left": {
                "default": "Take the ramp on the left",
                "name": "Take the ramp on the left onto {way_name}",
                "destination": "Take the ramp on the left towards {destination}"
            },
            "slight right": {
                "default": "Take the ramp on the right",
                "name": "Take the ramp on the right onto {way_name}",
                "destination": "Take the ramp on the right towards {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Enter the traffic circle",
                    "name": "Enter the traffic circle and exit onto {way_name}",
                    "destination": "Enter the traffic circle and exit towards {destination}"
                },
                "name": {
                    "default": "Enter {rotary_name}",
                    "name": "Enter {rotary_name} and exit onto {way_name}",
                    "destination": "Enter {rotary_name} and exit towards {destination}"
                },
                "exit": {
                    "default": "Enter the traffic circle and take the {exit_number} exit",
                    "name": "Enter the traffic circle and take the {exit_number} exit onto {way_name}",
                    "destination": "Enter the traffic circle and take the {exit_number} exit towards {destination}"
                },
                "name_exit": {
                    "default": "Enter {rotary_name} and take the {exit_number} exit",
                    "name": "Enter {rotary_name} and take the {exit_number} exit onto {way_name}",
                    "destination": "Enter {rotary_name} and take the {exit_number} exit towards {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Enter the traffic circle and take the {exit_number} exit",
                    "name": "Enter the traffic circle and take the {exit_number} exit onto {way_name}",
                    "destination": "Enter the traffic circle and take the {exit_number} exit towards {destination}"
                },
                "default": {
                    "default": "Enter the traffic circle",
                    "name": "Enter the traffic circle and exit onto {way_name}",
                    "destination": "Enter the traffic circle and exit towards {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Make a {modifier}",
                "name": "Make a {modifier} onto {way_name}",
                "destination": "Make a {modifier} towards {destination}"
            },
            "left": {
                "default": "Turn left",
                "name": "Turn left onto {way_name}",
                "destination": "Turn left towards {destination}"
            },
            "right": {
                "default": "Turn right",
                "name": "Turn right onto {way_name}",
                "destination": "Turn right towards {destination}"
            },
            "straight": {
                "default": "Continue straight",
                "name": "Continue straight onto {way_name}",
                "destination": "Continue straight towards {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Exit the traffic circle",
                "name": "Exit the traffic circle onto {way_name}",
                "destination": "Exit the traffic circle towards {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Exit the traffic circle",
                "name": "Exit the traffic circle onto {way_name}",
                "destination": "Exit the traffic circle towards {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Make a {modifier}",
                "name": "Make a {modifier} onto {way_name}",
                "destination": "Make a {modifier} towards {destination}"
            },
            "left": {
                "default": "Turn left",
                "name": "Turn left onto {way_name}",
                "destination": "Turn left towards {destination}"
            },
            "right": {
                "default": "Turn right",
                "name": "Turn right onto {way_name}",
                "destination": "Turn right towards {destination}"
            },
            "straight": {
                "default": "Go straight",
                "name": "Go straight onto {way_name}",
                "destination": "Go straight towards {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Continue straight"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],26:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1.",
                "2": "2.",
                "3": "3.",
                "4": "4.",
                "5": "5.",
                "6": "6.",
                "7": "7.",
                "8": "8.",
                "9": "9.",
                "10": "10."
            },
            "direction": {
                "north": "norden",
                "northeast": "nord-orienten",
                "east": "orienten",
                "southeast": "sud-orienten",
                "south": "suden",
                "southwest": "sud-okcidenten",
                "west": "okcidenten",
                "northwest": "nord-okcidenten"
            },
            "modifier": {
                "left": "maldekstren",
                "right": "dekstren",
                "sharp left": "maldekstregen",
                "sharp right": "dekstregen",
                "slight left": "maldekstreten",
                "slight right": "dekstreten",
                "straight": "rekten",
                "uturn": "turniĝu malantaŭen"
            },
            "lanes": {
                "xo": "Veturu dekstre",
                "ox": "Veturu maldekstre",
                "xox": "Veturu meze",
                "oxo": "Veturu dekstre aŭ maldekstre"
            }
        },
        "modes": {
            "ferry": {
                "default": "Enpramiĝu",
                "name": "Enpramiĝu {way_name}",
                "destination": "Enpramiĝu direkte al {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one} kaj post {distance} {instruction_two}",
            "two linked": "{instruction_one} kaj sekve {instruction_two}",
            "one in distance": "Post {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "elveturejo {exit}"
        },
        "arrive": {
            "default": {
                "default": "Vi atingis vian {nth} celon",
                "upcoming": "Vi atingos vian {nth} celon",
                "short": "Vi atingis",
                "short-upcoming": "Vi atingos",
                "named": "Vi atingis {waypoint_name}"
            },
            "left": {
                "default": "Vi atingis vian {nth} celon ĉe maldekstre",
                "upcoming": "Vi atingos vian {nth} celon ĉe maldekstre",
                "short": "Vi atingis",
                "short-upcoming": "Vi atingos",
                "named": "Vi atingis {waypoint_name}, ĉe maldekstre"
            },
            "right": {
                "default": "Vi atingis vian {nth} celon ĉe dekstre",
                "upcoming": "Vi atingos vian {nth} celon ĉe dekstre",
                "short": "Vi atingis",
                "short-upcoming": "Vi atingos",
                "named": "Vi atingis {waypoint_name}, ĉe dekstre"
            },
            "sharp left": {
                "default": "Vi atingis vian {nth} celon ĉe maldekstre",
                "upcoming": "Vi atingos vian {nth} celon ĉe maldekstre",
                "short": "Vi atingis",
                "short-upcoming": "Vi atingos",
                "named": "Vi atingis {waypoint_name}, ĉe maldekstre"
            },
            "sharp right": {
                "default": "Vi atingis vian {nth} celon ĉe dekstre",
                "upcoming": "Vi atingos vian {nth} celon ĉe dekstre",
                "short": "Vi atingis",
                "short-upcoming": "Vi atingos",
                "named": "Vi atingis {waypoint_name}, ĉe dekstre"
            },
            "slight right": {
                "default": "Vi atingis vian {nth} celon ĉe dekstre",
                "upcoming": "Vi atingos vian {nth} celon ĉe dekstre",
                "short": "Vi atingis",
                "short-upcoming": "Vi atingos",
                "named": "Vi atingis {waypoint_name}, ĉe dekstre"
            },
            "slight left": {
                "default": "Vi atingis vian {nth} celon ĉe maldekstre",
                "upcoming": "Vi atingos vian {nth} celon ĉe maldekstre",
                "short": "Vi atingis",
                "short-upcoming": "Vi atingos",
                "named": "Vi atingis {waypoint_name}, ĉe maldekstre"
            },
            "straight": {
                "default": "Vi atingis vian {nth} celon",
                "upcoming": "Vi atingos vian {nth} celon rekte",
                "short": "Vi atingis",
                "short-upcoming": "Vi atingos",
                "named": "Vi atingis {waypoint_name} antaŭe"
            }
        },
        "continue": {
            "default": {
                "default": "Veturu {modifier}",
                "name": "Veturu {modifier} al {way_name}",
                "destination": "Veturu {modifier} direkte al {destination}",
                "exit": "Veturu {modifier} direkte al {way_name}"
            },
            "straight": {
                "default": "Veturu rekten",
                "name": "Veturu rekten al {way_name}",
                "destination": "Veturu rekten direkte al {destination}",
                "distance": "Veturu rekten dum {distance}",
                "namedistance": "Veturu rekten al {way_name} dum {distance}"
            },
            "sharp left": {
                "default": "Turniĝu ege maldekstren",
                "name": "Turniĝu ege maldekstren al {way_name}",
                "destination": "Turniĝu ege maldekstren direkte al {destination}"
            },
            "sharp right": {
                "default": "Turniĝu ege dekstren",
                "name": "Turniĝu ege dekstren al {way_name}",
                "destination": "Turniĝu ege dekstren direkte al {destination}"
            },
            "slight left": {
                "default": "Turniĝu ete maldekstren",
                "name": "Turniĝu ete maldekstren al {way_name}",
                "destination": "Turniĝu ete maldekstren direkte al {destination}"
            },
            "slight right": {
                "default": "Turniĝu ete dekstren",
                "name": "Turniĝu ete dekstren al {way_name}",
                "destination": "Turniĝu ete dekstren direkte al {destination}"
            },
            "uturn": {
                "default": "Turniĝu malantaŭen",
                "name": "Turniĝu malantaŭen al {way_name}",
                "destination": "Turniĝu malantaŭen direkte al {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Direktiĝu {direction}",
                "name": "Direktiĝu {direction} al {way_name}",
                "namedistance": "Direktiĝu {direction} al {way_name} tra {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Veturu {modifier}",
                "name": "Veturu {modifier} direkte al {way_name}",
                "destination": "Veturu {modifier} direkte al {destination}"
            },
            "straight": {
                "default": "Veturu rekten",
                "name": "Veturu rekten al {way_name}",
                "destination": "Veturu rekten direkte al {destination}"
            },
            "uturn": {
                "default": "Turniĝu malantaŭen ĉe fino de la vojo",
                "name": "Turniĝu malantaŭen al {way_name} ĉe fino de la vojo",
                "destination": "Turniĝu malantaŭen direkte al {destination} ĉe fino de la vojo"
            }
        },
        "fork": {
            "default": {
                "default": "Daŭru {modifier} ĉe la vojforko",
                "name": "Pluu {modifier} al {way_name}",
                "destination": "Pluu {modifier} direkte al {destination}"
            },
            "slight left": {
                "default": "Maldekstren ĉe la vojforko",
                "name": "Pluu maldekstren al {way_name}",
                "destination": "Pluu maldekstren direkte al {destination}"
            },
            "slight right": {
                "default": "Dekstren ĉe la vojforko",
                "name": "Pluu dekstren al {way_name}",
                "destination": "Pluu dekstren direkte al {destination}"
            },
            "sharp left": {
                "default": "Ege maldekstren ĉe la vojforko",
                "name": "Turniĝu ege maldekstren al {way_name}",
                "destination": "Turniĝu ege maldekstren direkte al {destination}"
            },
            "sharp right": {
                "default": "Ege dekstren ĉe la vojforko",
                "name": "Turniĝu ege dekstren al {way_name}",
                "destination": "Turniĝu ege dekstren direkte al {destination}"
            },
            "uturn": {
                "default": "Turniĝu malantaŭen",
                "name": "Turniĝu malantaŭen al {way_name}",
                "destination": "Turniĝu malantaŭen direkte al {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Enveturu {modifier}",
                "name": "Enveturu {modifier} al {way_name}",
                "destination": "Enveturu {modifier} direkte al {destination}"
            },
            "straight": {
                "default": "Enveturu",
                "name": "Enveturu al {way_name}",
                "destination": "Enveturu direkte al {destination}"
            },
            "slight left": {
                "default": "Enveturu de maldekstre",
                "name": "Enveturu de maldekstre al {way_name}",
                "destination": "Enveturu de maldekstre direkte al {destination}"
            },
            "slight right": {
                "default": "Enveturu de dekstre",
                "name": "Enveturu de dekstre al {way_name}",
                "destination": "Enveturu de dekstre direkte al {destination}"
            },
            "sharp left": {
                "default": "Enveturu de maldekstre",
                "name": "Enveture de maldekstre al {way_name}",
                "destination": "Enveturu de maldekstre direkte al {destination}"
            },
            "sharp right": {
                "default": "Enveturu de dekstre",
                "name": "Enveturu de dekstre al {way_name}",
                "destination": "Enveturu de dekstre direkte al {destination}"
            },
            "uturn": {
                "default": "Turniĝu malantaŭen",
                "name": "Turniĝu malantaŭen al {way_name}",
                "destination": "Turniĝu malantaŭen direkte al {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Pluu {modifier}",
                "name": "Pluu {modifier} al {way_name}",
                "destination": "Pluu {modifier} direkte al {destination}"
            },
            "straight": {
                "default": "Veturu rekten",
                "name": "Veturu rekten al {way_name}",
                "destination": "Veturu rekten direkte al {destination}"
            },
            "sharp left": {
                "default": "Turniĝu ege maldekstren",
                "name": "Turniĝu ege maldekstren al {way_name}",
                "destination": "Turniĝu ege maldekstren direkte al {destination}"
            },
            "sharp right": {
                "default": "Turniĝu ege dekstren",
                "name": "Turniĝu ege dekstren al {way_name}",
                "destination": "Turniĝu ege dekstren direkte al {destination}"
            },
            "slight left": {
                "default": "Pluu ete maldekstren",
                "name": "Pluu ete maldekstren al {way_name}",
                "destination": "Pluu ete maldekstren direkte al {destination}"
            },
            "slight right": {
                "default": "Pluu ete dekstren",
                "name": "Pluu ete dekstren al {way_name}",
                "destination": "Pluu ete dekstren direkte al {destination}"
            },
            "uturn": {
                "default": "Turniĝu malantaŭen",
                "name": "Turniĝu malantaŭen al {way_name}",
                "destination": "Turniĝu malantaŭen direkte al {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Pluu {modifier}",
                "name": "Pluu {modifier} al {way_name}",
                "destination": "Pluu {modifier} direkte al {destination}"
            },
            "uturn": {
                "default": "Turniĝu malantaŭen",
                "name": "Turniĝu malantaŭen al {way_name}",
                "destination": "Turniĝu malantaŭen direkte al {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Direktiĝu al enveturejo",
                "name": "Direktiĝu al enveturejo al {way_name}",
                "destination": "Direktiĝu al enveturejo direkte al {destination}",
                "exit": "Direktiĝu al elveturejo {exit}",
                "exit_destination": "Direktiĝu al elveturejo {exit} direkte al {destination}"
            },
            "left": {
                "default": "Direktiĝu al enveturejo ĉe maldekstre",
                "name": "Direktiĝu al enveturejo ĉe maldekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe maldekstre al {destination}",
                "exit": "Direktiĝu al elveturejo {exit} ĉe maldekstre",
                "exit_destination": "Direktiĝu al elveturejo {exit} ĉe maldekstre direkte al {destination}"
            },
            "right": {
                "default": "Direktiĝu al enveturejo ĉe dekstre",
                "name": "Direktiĝu al enveturejo ĉe dekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe dekstre al {destination}",
                "exit": "Direktiĝu al {exit} elveturejo ĉe ldekstre",
                "exit_destination": "Direktiĝu al elveturejo {exit} ĉe dekstre direkte al {destination}"
            },
            "sharp left": {
                "default": "Direktiĝu al enveturejo ĉe maldekstre",
                "name": "Direktiĝu al enveturejo ĉe maldekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe maldekstre al {destination}",
                "exit": "Direktiĝu al {exit} elveturejo ĉe maldekstre",
                "exit_destination": "Direktiĝu al elveturejo {exit} ĉe maldekstre direkte al {destination}"
            },
            "sharp right": {
                "default": "Direktiĝu al enveturejo ĉe dekstre",
                "name": "Direktiĝu al enveturejo ĉe dekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe dekstre al {destination}",
                "exit": "Direktiĝu al elveturejo {exit} ĉe dekstre",
                "exit_destination": "Direktiĝu al elveturejo {exit} ĉe dekstre direkte al {destination}"
            },
            "slight left": {
                "default": "Direktiĝu al enveturejo ĉe maldekstre",
                "name": "Direktiĝu al enveturejo ĉe maldekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe maldekstre al {destination}",
                "exit": "Direktiĝu al {exit} elveturejo ĉe maldekstre",
                "exit_destination": "Direktiĝu al elveturejo {exit} ĉe maldekstre direkte al {destination}"
            },
            "slight right": {
                "default": "Direktiĝu al enveturejo ĉe dekstre",
                "name": "Direktiĝu al enveturejo ĉe dekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe dekstre al {destination}",
                "exit": "Direktiĝu al {exit} elveturejo ĉe ldekstre",
                "exit_destination": "Direktiĝu al elveturejo {exit} ĉe dekstre direkte al {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Direktiĝu al enveturejo",
                "name": "Direktiĝu al enveturejo al {way_name}",
                "destination": "Direktiĝu al enveturejo direkte al {destination}"
            },
            "left": {
                "default": "Direktiĝu al enveturejo ĉe maldekstre",
                "name": "Direktiĝu al enveturejo ĉe maldekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe maldekstre al {destination}"
            },
            "right": {
                "default": "Direktiĝu al enveturejo ĉe dekstre",
                "name": "Direktiĝu al enveturejo ĉe dekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe dekstre al {destination}"
            },
            "sharp left": {
                "default": "Direktiĝu al enveturejo ĉe maldekstre",
                "name": "Direktiĝu al enveturejo ĉe maldekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe maldekstre al {destination}"
            },
            "sharp right": {
                "default": "Direktiĝu al enveturejo ĉe dekstre",
                "name": "Direktiĝu al enveturejo ĉe dekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe dekstre al {destination}"
            },
            "slight left": {
                "default": "Direktiĝu al enveturejo ĉe maldekstre",
                "name": "Direktiĝu al enveturejo ĉe maldekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe maldekstre al {destination}"
            },
            "slight right": {
                "default": "Direktiĝu al enveturejo ĉe dekstre",
                "name": "Direktiĝu al enveturejo ĉe dekstre al {way_name}",
                "destination": "Direktiĝu al enveturejo ĉe dekstre al {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Enveturu trafikcirklegon",
                    "name": "Enveturu trafikcirklegon kaj elveturu al {way_name}",
                    "destination": "Enveturu trafikcirklegon kaj elveturu direkte al {destination}"
                },
                "name": {
                    "default": "Enveturu {rotary_name}",
                    "name": "Enveturu {rotary_name} kaj elveturu al {way_name}",
                    "destination": "Enveturu {rotary_name} kaj elveturu direkte al {destination}"
                },
                "exit": {
                    "default": "Enveturu trafikcirklegon kaj sekve al {exit_number} elveturejo",
                    "name": "Enveturu trafikcirklegon kaj sekve al {exit_number} elveturejo al {way_name}",
                    "destination": "Enveturu trafikcirklegon kaj sekve al {exit_number} elveturejo direkte al {destination}"
                },
                "name_exit": {
                    "default": "Enveturu {rotary_name} kaj sekve al {exit_number} elveturejo",
                    "name": "Enveturu {rotary_name} kaj sekve al {exit_number} elveturejo al {way_name}",
                    "destination": "Enveturu {rotary_name} kaj sekve al {exit_number} elveturejo direkte al {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Enveturu trafikcirklegon kaj sekve al {exit_number} elveturejo",
                    "name": "Enveturu trafikcirklegon kaj sekve al {exit_number} elveturejo al {way_name}",
                    "destination": "Enveturu trafikcirklegon kaj sekve al {exit_number} elveturejo direkte al {destination}"
                },
                "default": {
                    "default": "Enveturu trafikcirklegon",
                    "name": "Enveturu trafikcirklegon kaj elveturu al {way_name}",
                    "destination": "Enveturu trafikcirklegon kaj elveturu direkte al {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Veturu {modifier}",
                "name": "Veturu {modifier} al {way_name}",
                "destination": "Veturu {modifier} direkte al {destination}"
            },
            "left": {
                "default": "Turniĝu maldekstren",
                "name": "Turniĝu maldekstren al {way_name}",
                "destination": "Turniĝu maldekstren direkte al {destination}"
            },
            "right": {
                "default": "Turniĝu dekstren",
                "name": "Turniĝu dekstren al {way_name}",
                "destination": "Turniĝu dekstren direkte al {destination}"
            },
            "straight": {
                "default": "Pluu rekten",
                "name": "Veturu rekten al {way_name}",
                "destination": "Veturu rekten direkte al {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Elveturu trafikcirklegon",
                "name": "Elveturu trafikcirklegon al {way_name}",
                "destination": "Elveturu trafikcirklegon direkte al {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Eliru trafikcirklegon",
                "name": "Elveturu trafikcirklegon al {way_name}",
                "destination": "Elveturu trafikcirklegon direkte al {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Veturu {modifier}",
                "name": "Veturu {modifier} al {way_name}",
                "destination": "Veturu {modifier} direkte al {destination}"
            },
            "left": {
                "default": "Turniĝu maldekstren",
                "name": "Turniĝu maldekstren al {way_name}",
                "destination": "Turniĝu maldekstren direkte al {destination}"
            },
            "right": {
                "default": "Turniĝu dekstren",
                "name": "Turniĝu dekstren al {way_name}",
                "destination": "Turniĝu dekstren direkte al {destination}"
            },
            "straight": {
                "default": "Veturu rekten",
                "name": "Veturu rekten al {way_name}",
                "destination": "Veturu rekten direkte al {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Pluu rekten"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],27:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1ª",
                "2": "2ª",
                "3": "3ª",
                "4": "4ª",
                "5": "5ª",
                "6": "6ª",
                "7": "7ª",
                "8": "8ª",
                "9": "9ª",
                "10": "10ª"
            },
            "direction": {
                "north": "norte",
                "northeast": "noreste",
                "east": "este",
                "southeast": "sureste",
                "south": "sur",
                "southwest": "suroeste",
                "west": "oeste",
                "northwest": "noroeste"
            },
            "modifier": {
                "left": "a la izquierda",
                "right": "a la derecha",
                "sharp left": "cerrada a la izquierda",
                "sharp right": "cerrada a la derecha",
                "slight left": "ligeramente a la izquierda",
                "slight right": "ligeramente a la derecha",
                "straight": "recto",
                "uturn": "cambio de sentido"
            },
            "lanes": {
                "xo": "Mantente a la derecha",
                "ox": "Mantente a la izquierda",
                "xox": "Mantente en el medio",
                "oxo": "Mantente a la izquierda o a la derecha"
            }
        },
        "modes": {
            "ferry": {
                "default": "Coge el ferry",
                "name": "Coge el ferry {way_name}",
                "destination": "Coge el ferry hacia {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one} y luego en {distance}, {instruction_two}",
            "two linked": "{instruction_one} y luego {instruction_two}",
            "one in distance": "A {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "salida {exit}"
        },
        "arrive": {
            "default": {
                "default": "Has llegado a tu {nth} destino",
                "upcoming": "Vas a llegar a tu {nth} destino",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}"
            },
            "left": {
                "default": "Has llegado a tu {nth} destino, a la izquierda",
                "upcoming": "Vas a llegar a tu {nth} destino, a la izquierda",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la izquierda"
            },
            "right": {
                "default": "Has llegado a tu {nth} destino, a la derecha",
                "upcoming": "Vas a llegar a tu {nth} destino, a la derecha",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la derecha"
            },
            "sharp left": {
                "default": "Has llegado a tu {nth} destino, a la izquierda",
                "upcoming": "Vas a llegar a tu {nth} destino, a la izquierda",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la izquierda"
            },
            "sharp right": {
                "default": "Has llegado a tu {nth} destino, a la derecha",
                "upcoming": "Vas a llegar a tu {nth} destino, a la derecha",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la derecha"
            },
            "slight right": {
                "default": "Has llegado a tu {nth} destino, a la derecha",
                "upcoming": "Vas a llegar a tu {nth} destino, a la derecha",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la derecha"
            },
            "slight left": {
                "default": "Has llegado a tu {nth} destino, a la izquierda",
                "upcoming": "Vas a llegar a tu {nth} destino, a la izquierda",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la izquierda"
            },
            "straight": {
                "default": "Has llegado a tu {nth} destino, en frente",
                "upcoming": "Vas a llegar a tu {nth} destino, en frente",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, en frente"
            }
        },
        "continue": {
            "default": {
                "default": "Gire {modifier}",
                "name": "Cruce {modifier} en {way_name}",
                "destination": "Gire {modifier} hacia {destination}",
                "exit": "Gire {modifier} en {way_name}"
            },
            "straight": {
                "default": "Continúa recto",
                "name": "Continúa en {way_name}",
                "destination": "Continúa hacia {destination}",
                "distance": "Continúa recto por {distance}",
                "namedistance": "Continúa recto en {way_name} por {distance}"
            },
            "sharp left": {
                "default": "Gire a la izquierda",
                "name": "Gire a la izquierda en {way_name}",
                "destination": "Gire a la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Gire a la derecha",
                "name": "Gire a la derecha en {way_name}",
                "destination": "Gire a la derecha hacia {destination}"
            },
            "slight left": {
                "default": "Gire a la izquierda",
                "name": "Doble levemente a la izquierda en {way_name}",
                "destination": "Gire a la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Gire a la izquierda",
                "name": "Doble levemente a la derecha en {way_name}",
                "destination": "Gire a la izquierda hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido y continúa en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Dirígete al {direction}",
                "name": "Dirígete al {direction} por {way_name}",
                "namedistance": "Dirígete al {direction} en {way_name} por {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Al final de la calle gira {modifier}",
                "name": "Al final de la calle gira {modifier} por {way_name}",
                "destination": "Al final de la calle gira {modifier} hacia {destination}"
            },
            "straight": {
                "default": "Al final de la calle continúa recto",
                "name": "Al final de la calle continúa recto por {way_name}",
                "destination": "Al final de la calle continúa recto hacia {destination}"
            },
            "uturn": {
                "default": "Al final de la calle haz un cambio de sentido",
                "name": "Al final de la calle haz un cambio de sentido en {way_name}",
                "destination": "Al final de la calle haz un cambio de sentido hacia {destination}"
            }
        },
        "fork": {
            "default": {
                "default": "Mantente {modifier} en el cruce",
                "name": "Mantente {modifier} por {way_name}",
                "destination": "Mantente {modifier} hacia {destination}"
            },
            "slight left": {
                "default": "Mantente a la izquierda en el cruce",
                "name": "Mantente a la izquierda por {way_name}",
                "destination": "Mantente a la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Mantente a la derecha en el cruce",
                "name": "Mantente a la derecha por {way_name}",
                "destination": "Mantente a la derecha hacia {destination}"
            },
            "sharp left": {
                "default": "Gira la izquierda en el cruce",
                "name": "Gira a la izquierda por {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Gira a la derecha en el cruce",
                "name": "Gira a la derecha por {way_name}",
                "destination": "Gira a la derecha hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Incorpórate {modifier}",
                "name": "Incorpórate {modifier} por {way_name}",
                "destination": "Incorpórate {modifier} hacia {destination}"
            },
            "straight": {
                "default": "Incorpórate",
                "name": "Incorpórate por {way_name}",
                "destination": "Incorpórate hacia {destination}"
            },
            "slight left": {
                "default": "Incorpórate a la izquierda",
                "name": "Incorpórate a la izquierda por {way_name}",
                "destination": "Incorpórate a la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Incorpórate a la derecha",
                "name": "Incorpórate a la derecha por {way_name}",
                "destination": "Incorpórate a la derecha hacia {destination}"
            },
            "sharp left": {
                "default": "Incorpórate a la izquierda",
                "name": "Incorpórate a la izquierda por {way_name}",
                "destination": "Incorpórate a la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Incorpórate a la derecha",
                "name": "Incorpórate a la derecha por {way_name}",
                "destination": "Incorpórate a la derecha hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Continúa {modifier}",
                "name": "Continúa {modifier} por {way_name}",
                "destination": "Continúa {modifier} hacia {destination}"
            },
            "straight": {
                "default": "Continúa recto",
                "name": "Continúa por {way_name}",
                "destination": "Continúa hacia {destination}"
            },
            "sharp left": {
                "default": "Gira a la izquierda",
                "name": "Gira a la izquierda por {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Gira a la derecha",
                "name": "Gira a la derecha por {way_name}",
                "destination": "Gira a la derecha hacia {destination}"
            },
            "slight left": {
                "default": "Continúa ligeramente por la izquierda",
                "name": "Continúa ligeramente por la izquierda por {way_name}",
                "destination": "Continúa ligeramente por la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Continúa ligeramente por la derecha",
                "name": "Continúa ligeramente por la derecha por {way_name}",
                "destination": "Continúa ligeramente por la derecha hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Continúa {modifier}",
                "name": "Continúa {modifier} por {way_name}",
                "destination": "Continúa {modifier} hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Coge la cuesta abajo",
                "name": "Coge la cuesta abajo por {way_name}",
                "destination": "Coge la cuesta abajo hacia {destination}",
                "exit": "Coge la cuesta abajo {exit}",
                "exit_destination": "Coge la cuesta abajo {exit} hacia {destination}"
            },
            "left": {
                "default": "Coge la cuesta abajo de la izquierda",
                "name": "Coge la cuesta abajo de la izquierda por {way_name}",
                "destination": "Coge la cuesta abajo de la izquierda hacia {destination}",
                "exit": "Coge la cuesta abajo {exit} a tu izquierda",
                "exit_destination": "Coge la cuesta abajo {exit} a tu izquierda hacia {destination}"
            },
            "right": {
                "default": "Coge la cuesta abajo de la derecha",
                "name": "Coge la cuesta abajo de la derecha por {way_name}",
                "destination": "Coge la cuesta abajo de la derecha hacia {destination}",
                "exit": "Coge la cuesta abajo {exit}",
                "exit_destination": "Coge la cuesta abajo {exit} hacia {destination}"
            },
            "sharp left": {
                "default": "Coge la cuesta abajo de la izquierda",
                "name": "Coge la cuesta abajo de la izquierda por {way_name}",
                "destination": "Coge la cuesta abajo de la izquierda hacia {destination}",
                "exit": "Coge la cuesta abajo {exit} a tu izquierda",
                "exit_destination": "Coge la cuesta abajo {exit} a tu izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Coge la cuesta abajo de la derecha",
                "name": "Coge la cuesta abajo de la derecha por {way_name}",
                "destination": "Coge la cuesta abajo de la derecha hacia {destination}",
                "exit": "Coge la cuesta abajo {exit}",
                "exit_destination": "Coge la cuesta abajo {exit} hacia {destination}"
            },
            "slight left": {
                "default": "Coge la cuesta abajo de la izquierda",
                "name": "Coge la cuesta abajo de la izquierda por {way_name}",
                "destination": "Coge la cuesta abajo de la izquierda hacia {destination}",
                "exit": "Coge la cuesta abajo {exit} a tu izquierda",
                "exit_destination": "Coge la cuesta abajo {exit} a tu izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Coge la cuesta abajo de la derecha",
                "name": "Coge la cuesta abajo de la derecha por {way_name}",
                "destination": "Coge la cuesta abajo de la derecha hacia {destination}",
                "exit": "Coge la cuesta abajo {exit}",
                "exit_destination": "Coge la cuesta abajo {exit} hacia {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Coge la cuesta",
                "name": "Coge la cuesta por {way_name}",
                "destination": "Coge la cuesta hacia {destination}"
            },
            "left": {
                "default": "Coge la cuesta de la izquierda",
                "name": "Coge la cuesta de la izquierda por {way_name}",
                "destination": "Coge la cuesta de la izquierda hacia {destination}"
            },
            "right": {
                "default": "Coge la cuesta de la derecha",
                "name": "Coge la cuesta de la derecha por {way_name}",
                "destination": "Coge la cuesta de la derecha hacia {destination}"
            },
            "sharp left": {
                "default": "Coge la cuesta de la izquierda",
                "name": "Coge la cuesta de la izquierda por {way_name}",
                "destination": "Coge la cuesta de la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Coge la cuesta de la derecha",
                "name": "Coge la cuesta de la derecha por {way_name}",
                "destination": "Coge la cuesta de la derecha hacia {destination}"
            },
            "slight left": {
                "default": "Coge la cuesta de la izquierda",
                "name": "Coge la cuesta de la izquierda por {way_name}",
                "destination": "Coge la cuesta de la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Coge la cuesta de la derecha",
                "name": "Coge la cuesta de la derecha por {way_name}",
                "destination": "Coge la cuesta de la derecha hacia {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Incorpórate en la rotonda",
                    "name": "En la rotonda sal por {way_name}",
                    "destination": "En la rotonda sal hacia {destination}"
                },
                "name": {
                    "default": "En {rotary_name}",
                    "name": "En {rotary_name} sal por {way_name}",
                    "destination": "En {rotary_name} sal hacia {destination}"
                },
                "exit": {
                    "default": "En la rotonda toma la {exit_number} salida",
                    "name": "En la rotonda toma la {exit_number} salida por {way_name}",
                    "destination": "En la rotonda toma la {exit_number} salida hacia {destination}"
                },
                "name_exit": {
                    "default": "En {rotary_name} toma la {exit_number} salida",
                    "name": "En {rotary_name} toma la {exit_number} salida por {way_name}",
                    "destination": "En {rotary_name} toma la {exit_number} salida hacia {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "En la rotonda toma la {exit_number} salida",
                    "name": "En la rotonda toma la {exit_number} salida por {way_name}",
                    "destination": "En la rotonda toma la {exit_number} salida hacia {destination}"
                },
                "default": {
                    "default": "Incorpórate en la rotonda",
                    "name": "Incorpórate en la rotonda y sal en {way_name}",
                    "destination": "Incorpórate en la rotonda y sal hacia {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Siga {modifier}",
                "name": "Siga {modifier} en {way_name}",
                "destination": "Siga {modifier} hacia {destination}"
            },
            "left": {
                "default": "Gire a la izquierda",
                "name": "Gire a la izquierda en {way_name}",
                "destination": "Gire a la izquierda hacia {destination}"
            },
            "right": {
                "default": "Gire a la derecha",
                "name": "Gire a la derecha en {way_name}",
                "destination": "Gire a la derecha hacia {destination}"
            },
            "straight": {
                "default": "Continúa recto",
                "name": "Continúa recto por {way_name}",
                "destination": "Continúa recto hacia {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Sal la rotonda",
                "name": "Toma la salida por {way_name}",
                "destination": "Toma la salida hacia {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Sal la rotonda",
                "name": "Toma la salida por {way_name}",
                "destination": "Toma la salida hacia {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Gira {modifier}",
                "name": "Gira {modifier} por {way_name}",
                "destination": "Gira {modifier} hacia {destination}"
            },
            "left": {
                "default": "Gira a la izquierda",
                "name": "Gira a la izquierda por {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "right": {
                "default": "Gira a la derecha",
                "name": "Gira a la derecha por {way_name}",
                "destination": "Gira a la derecha hacia {destination}"
            },
            "straight": {
                "default": "Continúa recto",
                "name": "Continúa recto por {way_name}",
                "destination": "Continúa recto hacia {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Continúa recto"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],28:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1ª",
                "2": "2ª",
                "3": "3ª",
                "4": "4ª",
                "5": "5ª",
                "6": "6ª",
                "7": "7ª",
                "8": "8ª",
                "9": "9ª",
                "10": "10ª"
            },
            "direction": {
                "north": "norte",
                "northeast": "noreste",
                "east": "este",
                "southeast": "sureste",
                "south": "sur",
                "southwest": "suroeste",
                "west": "oeste",
                "northwest": "noroeste"
            },
            "modifier": {
                "left": "izquierda",
                "right": "derecha",
                "sharp left": "cerrada a la izquierda",
                "sharp right": "cerrada a la derecha",
                "slight left": "levemente a la izquierda",
                "slight right": "levemente a la derecha",
                "straight": "recto",
                "uturn": "cambio de sentido"
            },
            "lanes": {
                "xo": "Mantente a la derecha",
                "ox": "Mantente a la izquierda",
                "xox": "Mantente en el medio",
                "oxo": "Mantente a la izquierda o derecha"
            }
        },
        "modes": {
            "ferry": {
                "default": "Coge el ferry",
                "name": "Coge el ferry {way_name}",
                "destination": "Coge el ferry a {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one} y luego a {distance}, {instruction_two}",
            "two linked": "{instruction_one} y luego {instruction_two}",
            "one in distance": "A {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "salida {exit}"
        },
        "arrive": {
            "default": {
                "default": "Has llegado a tu {nth} destino",
                "upcoming": "Vas a llegar a tu {nth} destino",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}"
            },
            "left": {
                "default": "Has llegado a tu {nth} destino, a la izquierda",
                "upcoming": "Vas a llegar a tu {nth} destino, a la izquierda",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la izquierda"
            },
            "right": {
                "default": "Has llegado a tu {nth} destino, a la derecha",
                "upcoming": "Vas a llegar a tu {nth} destino, a la derecha",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la derecha"
            },
            "sharp left": {
                "default": "Has llegado a tu {nth} destino, a la izquierda",
                "upcoming": "Vas a llegar a tu {nth} destino, a la izquierda",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la izquierda"
            },
            "sharp right": {
                "default": "Has llegado a tu {nth} destino, a la derecha",
                "upcoming": "Vas a llegar a tu {nth} destino, a la derecha",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la derecha"
            },
            "slight right": {
                "default": "Has llegado a tu {nth} destino, a la derecha",
                "upcoming": "Vas a llegar a tu {nth} destino, a la derecha",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la derecha"
            },
            "slight left": {
                "default": "Has llegado a tu {nth} destino, a la izquierda",
                "upcoming": "Vas a llegar a tu {nth} destino, a la izquierda",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, a la izquierda"
            },
            "straight": {
                "default": "Has llegado a tu {nth} destino, en frente",
                "upcoming": "Vas a llegar a tu {nth} destino, en frente",
                "short": "Has llegado",
                "short-upcoming": "Vas a llegar",
                "named": "Has llegado a {waypoint_name}, en frente"
            }
        },
        "continue": {
            "default": {
                "default": "Gira a {modifier}",
                "name": "Cruza a la{modifier}  en {way_name}",
                "destination": "Gira a {modifier} hacia {destination}",
                "exit": "Gira a {modifier} en {way_name}"
            },
            "straight": {
                "default": "Continúa recto",
                "name": "Continúa en {way_name}",
                "destination": "Continúa hacia {destination}",
                "distance": "Continúa recto por {distance}",
                "namedistance": "Continúa recto en {way_name} por {distance}"
            },
            "sharp left": {
                "default": "Gira a la izquierda",
                "name": "Gira a la izquierda en {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Gira a la derecha",
                "name": "Gira a la derecha en {way_name}",
                "destination": "Gira a la derecha hacia {destination}"
            },
            "slight left": {
                "default": "Gira a la izquierda",
                "name": "Dobla levemente a la izquierda en {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Gira a la izquierda",
                "name": "Dobla levemente a la derecha en {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido y continúa en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Ve a {direction}",
                "name": "Ve a {direction} en {way_name}",
                "namedistance": "Ve a {direction} en {way_name} por {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Gira  a {modifier}",
                "name": "Gira a {modifier} en {way_name}",
                "destination": "Gira a {modifier} hacia {destination}"
            },
            "straight": {
                "default": "Continúa recto",
                "name": "Continúa recto en {way_name}",
                "destination": "Continúa recto hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido al final de la via",
                "name": "Haz un cambio de sentido en {way_name} al final de la via",
                "destination": "Haz un cambio de sentido hacia {destination} al final de la via"
            }
        },
        "fork": {
            "default": {
                "default": "Mantente  {modifier} en el cruza",
                "name": "Mantente {modifier} en {way_name}",
                "destination": "Mantente {modifier} hacia {destination}"
            },
            "slight left": {
                "default": "Mantente a la izquierda en el cruza",
                "name": "Mantente a la izquierda en {way_name}",
                "destination": "Mantente a la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Mantente a la derecha en el cruza",
                "name": "Mantente a la derecha en {way_name}",
                "destination": "Mantente a la derecha hacia {destination}"
            },
            "sharp left": {
                "default": "Gira a la izquierda en el cruza",
                "name": "Gira a la izquierda en {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Gira a la derecha en el cruza",
                "name": "Gira a la derecha en {way_name}",
                "destination": "Gira a la derecha hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Incorpórate a {modifier}",
                "name": "Incorpórate a {modifier} en {way_name}",
                "destination": "Incorpórate a {modifier} hacia {destination}"
            },
            "straight": {
                "default": "Incorpórate",
                "name": "Incorpórate a {way_name}",
                "destination": "Incorpórate hacia {destination}"
            },
            "slight left": {
                "default": "Incorpórate a la izquierda",
                "name": "Incorpórate a la izquierda en {way_name}",
                "destination": "Incorpórate a la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Incorpórate a la derecha",
                "name": "Incorpórate a la derecha en {way_name}",
                "destination": "Incorpórate a la derecha hacia {destination}"
            },
            "sharp left": {
                "default": "Incorpórate a la izquierda",
                "name": "Incorpórate a la izquierda en {way_name}",
                "destination": "Incorpórate a la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Incorpórate a la derecha",
                "name": "Incorpórate a la derecha en {way_name}",
                "destination": "Incorpórate a la derecha hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Continúa {modifier}",
                "name": "Continúa {modifier} en {way_name}",
                "destination": "Continúa {modifier} hacia {destination}"
            },
            "straight": {
                "default": "Continúa recto",
                "name": "Continúa en {way_name}",
                "destination": "Continúa hacia {destination}"
            },
            "sharp left": {
                "default": "Gira a la izquierda",
                "name": "Gira a la izquierda en {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Gira a la derecha",
                "name": "Gira a la derecha en {way_name}",
                "destination": "Gira a la derecha hacia {destination}"
            },
            "slight left": {
                "default": "Continúa levemente a la izquierda",
                "name": "Continúa levemente a la izquierda en {way_name}",
                "destination": "Continúa levemente a la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Continúa levemente a la derecha",
                "name": "Continúa levemente a la derecha en {way_name}",
                "destination": "Continúa levemente a la derecha hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Continúa {modifier}",
                "name": "Continúa {modifier} en {way_name}",
                "destination": "Continúa {modifier} hacia {destination}"
            },
            "uturn": {
                "default": "Haz un cambio de sentido",
                "name": "Haz un cambio de sentido en {way_name}",
                "destination": "Haz un cambio de sentido hacia {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Toma la salida",
                "name": "Toma la salida en {way_name}",
                "destination": "Toma la salida hacia {destination}",
                "exit": "Toma la salida {exit}",
                "exit_destination": "Toma la salida {exit} hacia {destination}"
            },
            "left": {
                "default": "Toma la salida en la izquierda",
                "name": "Toma la salida en la izquierda en {way_name}",
                "destination": "Toma la salida en la izquierda en {destination}",
                "exit": "Toma la salida {exit} en la izquierda",
                "exit_destination": "Toma la salida {exit} en la izquierda hacia {destination}"
            },
            "right": {
                "default": "Toma la salida en la derecha",
                "name": "Toma la salida en la derecha en {way_name}",
                "destination": "Toma la salida en la derecha hacia {destination}",
                "exit": "Toma la salida {exit} en la derecha",
                "exit_destination": "Toma la salida {exit} en la derecha hacia {destination}"
            },
            "sharp left": {
                "default": "Ve cuesta abajo en la izquierda",
                "name": "Ve cuesta abajo en la izquierda en {way_name}",
                "destination": "Ve cuesta abajo en la izquierda hacia {destination}",
                "exit": "Toma la salida {exit} en la izquierda",
                "exit_destination": "Toma la salida {exit} en la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Ve cuesta abajo en la derecha",
                "name": "Ve cuesta abajo en la derecha en {way_name}",
                "destination": "Ve cuesta abajo en la derecha hacia {destination}",
                "exit": "Toma la salida {exit} en la derecha",
                "exit_destination": "Toma la salida {exit} en la derecha hacia {destination}"
            },
            "slight left": {
                "default": "Ve cuesta abajo en la izquierda",
                "name": "Ve cuesta abajo en la izquierda en {way_name}",
                "destination": "Ve cuesta abajo en la izquierda hacia {destination}",
                "exit": "Toma la salida {exit} en la izquierda",
                "exit_destination": "Toma la salida {exit} en la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Toma la salida en la derecha",
                "name": "Toma la salida en la derecha en {way_name}",
                "destination": "Toma la salida en la derecha hacia {destination}",
                "exit": "Toma la salida {exit} en la derecha",
                "exit_destination": "Toma la salida {exit} en la derecha hacia {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Toma la rampa",
                "name": "Toma la rampa en {way_name}",
                "destination": "Toma la rampa hacia {destination}"
            },
            "left": {
                "default": "Toma la rampa en la izquierda",
                "name": "Toma la rampa en la izquierda en {way_name}",
                "destination": "Toma la rampa en la izquierda hacia {destination}"
            },
            "right": {
                "default": "Toma la rampa en la derecha",
                "name": "Toma la rampa en la derecha en {way_name}",
                "destination": "Toma la rampa en la derecha hacia {destination}"
            },
            "sharp left": {
                "default": "Toma la rampa en la izquierda",
                "name": "Toma la rampa en la izquierda en {way_name}",
                "destination": "Toma la rampa en la izquierda hacia {destination}"
            },
            "sharp right": {
                "default": "Toma la rampa en la derecha",
                "name": "Toma la rampa en la derecha en {way_name}",
                "destination": "Toma la rampa en la derecha hacia {destination}"
            },
            "slight left": {
                "default": "Toma la rampa en la izquierda",
                "name": "Toma la rampa en la izquierda en {way_name}",
                "destination": "Toma la rampa en la izquierda hacia {destination}"
            },
            "slight right": {
                "default": "Toma la rampa en la derecha",
                "name": "Toma la rampa en la derecha en {way_name}",
                "destination": "Toma la rampa en la derecha hacia {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Entra en la rotonda",
                    "name": "Entra en la rotonda y sal en {way_name}",
                    "destination": "Entra en la rotonda y sal hacia {destination}"
                },
                "name": {
                    "default": "Entra en {rotary_name}",
                    "name": "Entra en {rotary_name} y sal en {way_name}",
                    "destination": "Entra en {rotary_name} y sal hacia {destination}"
                },
                "exit": {
                    "default": "Entra en la rotonda y toma la {exit_number} salida",
                    "name": "Entra en la rotonda y toma la {exit_number} salida a {way_name}",
                    "destination": "Entra en la rotonda y toma la {exit_number} salida hacia {destination}"
                },
                "name_exit": {
                    "default": "Entra en {rotary_name} y coge la {exit_number} salida",
                    "name": "Entra en {rotary_name} y coge la {exit_number} salida en {way_name}",
                    "destination": "Entra en {rotary_name} y coge la {exit_number} salida hacia {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Entra en la rotonda y toma la {exit_number} salida",
                    "name": "Entra en la rotonda y toma la {exit_number} salida a {way_name}",
                    "destination": "Entra en la rotonda y toma la {exit_number} salida hacia {destination}"
                },
                "default": {
                    "default": "Entra en la rotonda",
                    "name": "Entra en la rotonda y sal en {way_name}",
                    "destination": "Entra en la rotonda y sal hacia {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Sigue {modifier}",
                "name": "Sigue {modifier} en {way_name}",
                "destination": "Sigue {modifier} hacia {destination}"
            },
            "left": {
                "default": "Gira a la izquierda",
                "name": "Gira a la izquierda en {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "right": {
                "default": "Gira a la derecha",
                "name": "Gira a la derecha en {way_name}",
                "destination": "Gira a la derecha hacia {destination}"
            },
            "straight": {
                "default": "Continúa recto",
                "name": "Continúa recto en {way_name}",
                "destination": "Continúa recto hacia {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Sal la rotonda",
                "name": "Sal la rotonda en {way_name}",
                "destination": "Sal la rotonda hacia {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Sal la rotonda",
                "name": "Sal la rotonda en {way_name}",
                "destination": "Sal la rotonda hacia {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Sigue {modifier}",
                "name": "Sigue {modifier} en {way_name}",
                "destination": "Sigue {modifier} hacia {destination}"
            },
            "left": {
                "default": "Gira a la izquierda",
                "name": "Gira a la izquierda en {way_name}",
                "destination": "Gira a la izquierda hacia {destination}"
            },
            "right": {
                "default": "Gira a la derecha",
                "name": "Gira a la derecha en {way_name}",
                "destination": "Gira a la derecha hacia {destination}"
            },
            "straight": {
                "default": "Ve recto",
                "name": "Ve recto en {way_name}",
                "destination": "Ve recto hacia {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Continúa recto"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],29:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1.",
                "2": "2.",
                "3": "3.",
                "4": "4.",
                "5": "5.",
                "6": "6.",
                "7": "7.",
                "8": "8.",
                "9": "9.",
                "10": "10."
            },
            "direction": {
                "north": "pohjoiseen",
                "northeast": "koilliseen",
                "east": "itään",
                "southeast": "kaakkoon",
                "south": "etelään",
                "southwest": "lounaaseen",
                "west": "länteen",
                "northwest": "luoteeseen"
            },
            "modifier": {
                "left": "vasemmall(e/a)",
                "right": "oikeall(e/a)",
                "sharp left": "jyrkästi vasempaan",
                "sharp right": "jyrkästi oikeaan",
                "slight left": "loivasti vasempaan",
                "slight right": "loivasti oikeaan",
                "straight": "suoraan eteenpäin",
                "uturn": "U-käännös"
            },
            "lanes": {
                "xo": "Pysy oikealla",
                "ox": "Pysy vasemmalla",
                "xox": "Pysy keskellä",
                "oxo": "Pysy vasemmalla tai oikealla"
            }
        },
        "modes": {
            "ferry": {
                "default": "Aja lautalle",
                "name": "Aja lautalle {way_name}",
                "destination": "Aja lautalle, jonka määränpää on {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, sitten {distance} päästä, {instruction_two}",
            "two linked": "{instruction_one}, sitten {instruction_two}",
            "one in distance": "{distance} päästä, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "{exit}"
        },
        "arrive": {
            "default": {
                "default": "Olet saapunut {nth} määränpäähäsi",
                "upcoming": "Saavut {nth} määränpäähäsi",
                "short": "Olet saapunut",
                "short-upcoming": "Saavut",
                "named": "Olet saapunut määränpäähän {waypoint_name}"
            },
            "left": {
                "default": "Olet saapunut {nth} määränpäähäsi, joka on vasemmalla puolellasi",
                "upcoming": "Saavut {nth} määränpäähäsi, joka on vasemmalla puolellasi",
                "short": "Olet saapunut",
                "short-upcoming": "Saavut",
                "named": "Olet saapunut määränpäähän {waypoint_name}, joka on vasemmalla puolellasi"
            },
            "right": {
                "default": "Olet saapunut {nth} määränpäähäsi, joka on oikealla puolellasi",
                "upcoming": "Saavut {nth} määränpäähäsi, joka on oikealla puolellasi",
                "short": "Olet saapunut",
                "short-upcoming": "Saavut",
                "named": "Olet saapunut määränpäähän {waypoint_name}, joka on oikealla puolellasi"
            },
            "sharp left": {
                "default": "Olet saapunut {nth} määränpäähäsi, joka on vasemmalla puolellasi",
                "upcoming": "Saavut {nth} määränpäähäsi, joka on vasemmalla puolellasi",
                "short": "Olet saapunut",
                "short-upcoming": "Saavut",
                "named": "Olet saapunut määränpäähän {waypoint_name}, joka on vasemmalla puolellasi"
            },
            "sharp right": {
                "default": "Olet saapunut {nth} määränpäähäsi, joka on oikealla puolellasi",
                "upcoming": "Saavut {nth} määränpäähäsi, joka on oikealla puolellasi",
                "short": "Olet saapunut",
                "short-upcoming": "Saavut",
                "named": "Olet saapunut määränpäähän {waypoint_name}, joka on oikealla puolellasi"
            },
            "slight right": {
                "default": "Olet saapunut {nth} määränpäähäsi, joka on oikealla puolellasi",
                "upcoming": "Saavut {nth} määränpäähäsi, joka on oikealla puolellasi",
                "short": "Olet saapunut",
                "short-upcoming": "Saavut",
                "named": "Olet saapunut määränpäähän {waypoint_name}, joka on oikealla puolellasi"
            },
            "slight left": {
                "default": "Olet saapunut {nth} määränpäähäsi, joka on vasemmalla puolellasi",
                "upcoming": "Saavut {nth} määränpäähäsi, joka on vasemmalla puolellasi",
                "short": "Olet saapunut",
                "short-upcoming": "Saavut",
                "named": "Olet saapunut määränpäähän {waypoint_name}, joka on vasemmalla puolellasi"
            },
            "straight": {
                "default": "Olet saapunut {nth} määränpäähäsi, joka on suoraan edessäsi",
                "upcoming": "Saavut {nth} määränpäähäsi, suoraan edessä",
                "short": "Olet saapunut",
                "short-upcoming": "Saavut",
                "named": "Olet saapunut määränpäähän {waypoint_name}, joka on suoraan edessäsi"
            }
        },
        "continue": {
            "default": {
                "default": "Käänny {modifier}",
                "name": "Käänny {modifier} pysyäksesi tiellä {way_name}",
                "destination": "Käänny {modifier} suuntana {destination}",
                "exit": "Käänny {modifier} tielle {way_name}"
            },
            "straight": {
                "default": "Jatka suoraan eteenpäin",
                "name": "Jatka suoraan pysyäksesi tiellä {way_name}",
                "destination": "Jatka suuntana {destination}",
                "distance": "Jatka suoraan {distance}",
                "namedistance": "Jatka tiellä {way_name} {distance}"
            },
            "sharp left": {
                "default": "Jatka jyrkästi vasempaan",
                "name": "Jatka jyrkästi vasempaan pysyäksesi tiellä {way_name}",
                "destination": "Jatka jyrkästi vasempaan suuntana {destination}"
            },
            "sharp right": {
                "default": "Jatka jyrkästi oikeaan",
                "name": "Jatka jyrkästi oikeaan pysyäksesi tiellä {way_name}",
                "destination": "Jatka jyrkästi oikeaan suuntana {destination}"
            },
            "slight left": {
                "default": "Jatka loivasti vasempaan",
                "name": "Jatka loivasti vasempaan pysyäksesi tiellä {way_name}",
                "destination": "Jatka loivasti vasempaan suuntana {destination}"
            },
            "slight right": {
                "default": "Jatka loivasti oikeaan",
                "name": "Jatka loivasti oikeaan pysyäksesi tiellä {way_name}",
                "destination": "Jatka loivasti oikeaan suuntana {destination}"
            },
            "uturn": {
                "default": "Tee U-käännös",
                "name": "Tee U-käännös ja jatka tietä {way_name}",
                "destination": "Tee U-käännös suuntana {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Aja {direction}",
                "name": "Aja tietä {way_name} {direction}",
                "namedistance": "Aja {distance} {direction} tietä {way_name} "
            }
        },
        "end of road": {
            "default": {
                "default": "Käänny {modifier}",
                "name": "Käänny {modifier} tielle {way_name}",
                "destination": "Käänny {modifier} suuntana {destination}"
            },
            "straight": {
                "default": "Jatka suoraan eteenpäin",
                "name": "Jatka suoraan eteenpäin tielle {way_name}",
                "destination": "Jatka suoraan eteenpäin suuntana {destination}"
            },
            "uturn": {
                "default": "Tien päässä tee U-käännös",
                "name": "Tien päässä tee U-käännös tielle {way_name}",
                "destination": "Tien päässä tee U-käännös suuntana {destination}"
            }
        },
        "fork": {
            "default": {
                "default": "Jatka tienhaarassa {modifier}",
                "name": "Jatka {modifier} tielle {way_name}",
                "destination": "Jatka {modifier} suuntana {destination}"
            },
            "slight left": {
                "default": "Pysy vasemmalla tienhaarassa",
                "name": "Pysy vasemmalla tielle {way_name}",
                "destination": "Pysy vasemmalla suuntana {destination}"
            },
            "slight right": {
                "default": "Pysy oikealla tienhaarassa",
                "name": "Pysy oikealla tielle {way_name}",
                "destination": "Pysy oikealla suuntana {destination}"
            },
            "sharp left": {
                "default": "Käänny tienhaarassa jyrkästi vasempaan",
                "name": "Käänny tienhaarassa jyrkästi vasempaan tielle {way_name}",
                "destination": "Käänny tienhaarassa jyrkästi vasempaan suuntana {destination}"
            },
            "sharp right": {
                "default": "Käänny tienhaarassa jyrkästi oikeaan",
                "name": "Käänny tienhaarassa jyrkästi oikeaan tielle {way_name}",
                "destination": "Käänny tienhaarassa jyrkästi oikeaan suuntana {destination}"
            },
            "uturn": {
                "default": "Tee U-käännös",
                "name": "Tee U-käännös tielle {way_name}",
                "destination": "Tee U-käännös suuntana {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Liity {modifier}",
                "name": "Liity {modifier}, tielle {way_name}",
                "destination": "Liity {modifier}, suuntana {destination}"
            },
            "straight": {
                "default": "Liity",
                "name": "Liity tielle {way_name}",
                "destination": "Liity suuntana {destination}"
            },
            "slight left": {
                "default": "Liity vasemmalle",
                "name": "Liity vasemmalle, tielle {way_name}",
                "destination": "Liity vasemmalle, suuntana {destination}"
            },
            "slight right": {
                "default": "Liity oikealle",
                "name": "Liity oikealle, tielle {way_name}",
                "destination": "Liity oikealle, suuntana {destination}"
            },
            "sharp left": {
                "default": "Liity vasemmalle",
                "name": "Liity vasemmalle, tielle {way_name}",
                "destination": "Liity vasemmalle, suuntana {destination}"
            },
            "sharp right": {
                "default": "Liity oikealle",
                "name": "Liity oikealle, tielle {way_name}",
                "destination": "Liity oikealle, suuntana {destination}"
            },
            "uturn": {
                "default": "Tee U-käännös",
                "name": "Tee U-käännös tielle {way_name}",
                "destination": "Tee U-käännös suuntana {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Jatka {modifier}",
                "name": "Jatka {modifier} tielle {way_name}",
                "destination": "Jatka {modifier} suuntana {destination}"
            },
            "straight": {
                "default": "Jatka suoraan eteenpäin",
                "name": "Jatka tielle {way_name}",
                "destination": "Jatka suuntana {destination}"
            },
            "sharp left": {
                "default": "Käänny jyrkästi vasempaan",
                "name": "Käänny jyrkästi vasempaan tielle {way_name}",
                "destination": "Käänny jyrkästi vasempaan suuntana {destination}"
            },
            "sharp right": {
                "default": "Käänny jyrkästi oikeaan",
                "name": "Käänny jyrkästi oikeaan tielle {way_name}",
                "destination": "Käänny jyrkästi oikeaan suuntana {destination}"
            },
            "slight left": {
                "default": "Jatka loivasti vasempaan",
                "name": "Jatka loivasti vasempaan tielle {way_name}",
                "destination": "Jatka loivasti vasempaan suuntana {destination}"
            },
            "slight right": {
                "default": "Jatka loivasti oikeaan",
                "name": "Jatka loivasti oikeaan tielle {way_name}",
                "destination": "Jatka loivasti oikeaan suuntana {destination}"
            },
            "uturn": {
                "default": "Tee U-käännös",
                "name": "Tee U-käännös tielle {way_name}",
                "destination": "Tee U-käännös suuntana {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Jatka {modifier}",
                "name": "Jatka {modifier} tielle {way_name}",
                "destination": "Jatka {modifier} suuntana {destination}"
            },
            "uturn": {
                "default": "Tee U-käännös",
                "name": "Tee U-käännös tielle {way_name}",
                "destination": "Tee U-käännös suuntana {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Aja erkanemiskaistalle",
                "name": "Aja erkanemiskaistaa tielle {way_name}",
                "destination": "Aja erkanemiskaistalle suuntana {destination}",
                "exit": "Ota poistuminen {exit}",
                "exit_destination": "Ota poistuminen {exit}, suuntana {destination}"
            },
            "left": {
                "default": "Aja vasemmalla olevalle erkanemiskaistalle",
                "name": "Aja vasemmalla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja vasemmalla olevalle erkanemiskaistalle suuntana {destination}",
                "exit": "Ota poistuminen {exit} vasemmalla",
                "exit_destination": "Ota poistuminen {exit} vasemmalla, suuntana {destination}"
            },
            "right": {
                "default": "Aja oikealla olevalle erkanemiskaistalle",
                "name": "Aja oikealla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja oikealla olevalle erkanemiskaistalle suuntana {destination}",
                "exit": "Ota poistuminen {exit} oikealla",
                "exit_destination": "Ota poistuminen {exit} oikealla, suuntana {destination}"
            },
            "sharp left": {
                "default": "Aja vasemmalla olevalle erkanemiskaistalle",
                "name": "Aja vasemmalla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja vasemmalla olevalle erkanemiskaistalle suuntana {destination}",
                "exit": "Ota poistuminen {exit} vasemmalla",
                "exit_destination": "Ota poistuminen {exit} vasemmalla, suuntana {destination}"
            },
            "sharp right": {
                "default": "Aja oikealla olevalle erkanemiskaistalle",
                "name": "Aja oikealla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja oikealla olevalle erkanemiskaistalle suuntana {destination}",
                "exit": "Ota poistuminen {exit} oikealla",
                "exit_destination": "Ota poistuminen {exit} oikealla, suuntana {destination}"
            },
            "slight left": {
                "default": "Aja vasemmalla olevalle erkanemiskaistalle",
                "name": "Aja vasemmalla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja vasemmalla olevalle erkanemiskaistalle suuntana {destination}",
                "exit": "Ota poistuminen {exit} vasemmalla",
                "exit_destination": "Ota poistuminen {exit} vasemmalla, suuntana {destination}"
            },
            "slight right": {
                "default": "Aja oikealla olevalle erkanemiskaistalle",
                "name": "Aja oikealla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja oikealla olevalle erkanemiskaistalle suuntana {destination}",
                "exit": "Ota poistuminen {exit} oikealla",
                "exit_destination": "Ota poistuminen {exit} oikealla, suuntana {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Aja erkanemiskaistalle",
                "name": "Aja erkanemiskaistaa tielle {way_name}",
                "destination": "Aja erkanemiskaistalle suuntana {destination}"
            },
            "left": {
                "default": "Aja vasemmalla olevalle erkanemiskaistalle",
                "name": "Aja vasemmalla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja vasemmalla olevalle erkanemiskaistalle suuntana {destination}"
            },
            "right": {
                "default": "Aja oikealla olevalle erkanemiskaistalle",
                "name": "Aja oikealla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja oikealla olevalle erkanemiskaistalle suuntana {destination}"
            },
            "sharp left": {
                "default": "Aja vasemmalla olevalle erkanemiskaistalle",
                "name": "Aja vasemmalla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja vasemmalla olevalle erkanemiskaistalle suuntana {destination}"
            },
            "sharp right": {
                "default": "Aja oikealla olevalle erkanemiskaistalle",
                "name": "Aja oikealla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja oikealla olevalle erkanemiskaistalle suuntana {destination}"
            },
            "slight left": {
                "default": "Aja vasemmalla olevalle erkanemiskaistalle",
                "name": "Aja vasemmalla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja vasemmalla olevalle erkanemiskaistalle suuntana {destination}"
            },
            "slight right": {
                "default": "Aja oikealla olevalle erkanemiskaistalle",
                "name": "Aja oikealla olevaa erkanemiskaistaa tielle {way_name}",
                "destination": "Aja oikealla olevalle erkanemiskaistalle suuntana {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Aja liikenneympyrään",
                    "name": "Aja liikenneympyrään ja valitse erkanemiskaista tielle {way_name}",
                    "destination": "Aja liikenneympyrään ja valitse erkanemiskaista suuntana {destination}"
                },
                "name": {
                    "default": "Aja liikenneympyrään {rotary_name}",
                    "name": "Aja liikenneympyrään {rotary_name} ja valitse erkanemiskaista tielle {way_name}",
                    "destination": "Aja liikenneympyrään {rotary_name} ja valitse erkanemiskaista suuntana {destination}"
                },
                "exit": {
                    "default": "Aja liikenneympyrään ja valitse {exit_number} erkanemiskaista",
                    "name": "Aja liikenneympyrään ja valitse {exit_number} erkanemiskaista tielle {way_name}",
                    "destination": "Aja liikenneympyrään ja valitse {exit_number} erkanemiskaista suuntana {destination}"
                },
                "name_exit": {
                    "default": "Aja liikenneympyrään {rotary_name} ja valitse {exit_number} erkanemiskaista",
                    "name": "Aja liikenneympyrään {rotary_name} ja valitse {exit_number} erkanemiskaista tielle {way_name}",
                    "destination": "Aja liikenneympyrään {rotary_name} ja valitse {exit_number} erkanemiskaista suuntana {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Aja liikenneympyrään ja valitse {exit_number} erkanemiskaista",
                    "name": "Aja liikenneympyrään ja valitse {exit_number} erkanemiskaista tielle {way_name}",
                    "destination": "Aja liikenneympyrään ja valitse {exit_number} erkanemiskaista suuntana {destination}"
                },
                "default": {
                    "default": "Aja liikenneympyrään",
                    "name": "Aja liikenneympyrään ja valitse erkanemiskaista tielle {way_name}",
                    "destination": "Aja liikenneympyrään ja valitse erkanemiskaista suuntana {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Käänny {modifier}",
                "name": "Käänny {modifier} tielle {way_name}",
                "destination": "Käänny {modifier} suuntana {destination}"
            },
            "left": {
                "default": "Käänny vasempaan",
                "name": "Käänny vasempaan tielle {way_name}",
                "destination": "Käänny vasempaan suuntana {destination}"
            },
            "right": {
                "default": "Käänny oikeaan",
                "name": "Käänny oikeaan tielle {way_name}",
                "destination": "Käänny oikeaan suuntana {destination}"
            },
            "straight": {
                "default": "Jatka suoraan eteenpäin",
                "name": "Jatka suoraan eteenpäin tielle {way_name}",
                "destination": "Jatka suoraan eteenpäin suuntana {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Poistu liikenneympyrästä",
                "name": "Poistu liikenneympyrästä tielle {way_name}",
                "destination": "Poistu liikenneympyrästä suuntana {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Poistu liikenneympyrästä",
                "name": "Poistu liikenneympyrästä tielle {way_name}",
                "destination": "Poistu liikenneympyrästä suuntana {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Käänny {modifier}",
                "name": "Käänny {modifier} tielle {way_name}",
                "destination": "Käänny {modifier} suuntana {destination}"
            },
            "left": {
                "default": "Käänny vasempaan",
                "name": "Käänny vasempaan tielle {way_name}",
                "destination": "Käänny vasempaan suuntana {destination}"
            },
            "right": {
                "default": "Käänny oikeaan",
                "name": "Käänny oikeaan tielle {way_name}",
                "destination": "Käänny oikeaan suuntana {destination}"
            },
            "straight": {
                "default": "Aja suoraan eteenpäin",
                "name": "Aja suoraan eteenpäin tielle {way_name}",
                "destination": "Aja suoraan eteenpäin suuntana {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Jatka suoraan eteenpäin"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],30:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "première",
                "2": "seconde",
                "3": "troisième",
                "4": "quatrième",
                "5": "cinquième",
                "6": "sixième",
                "7": "septième",
                "8": "huitième",
                "9": "neuvième",
                "10": "dixième"
            },
            "direction": {
                "north": "le nord",
                "northeast": "le nord-est",
                "east": "l’est",
                "southeast": "le sud-est",
                "south": "le sud",
                "southwest": "le sud-ouest",
                "west": "l’ouest",
                "northwest": "le nord-ouest"
            },
            "modifier": {
                "left": "à gauche",
                "right": "à droite",
                "sharp left": "franchement à gauche",
                "sharp right": "franchement à droite",
                "slight left": "légèrement à gauche",
                "slight right": "légèrement à droite",
                "straight": "tout droit",
                "uturn": "demi-tour"
            },
            "lanes": {
                "xo": "Tenir la droite",
                "ox": "Tenir la gauche",
                "xox": "Rester au milieu",
                "oxo": "Tenir la gauche ou la droite"
            }
        },
        "modes": {
            "ferry": {
                "default": "Prendre le ferry",
                "name": "Prendre le ferry {way_name:article}",
                "destination": "Prendre le ferry en direction {destination:preposition}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, puis, dans {distance}, {instruction_two}",
            "two linked": "{instruction_one}, puis {instruction_two}",
            "one in distance": "Dans {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "sortie n°{exit}"
        },
        "arrive": {
            "default": {
                "default": "Vous êtes arrivé à votre {nth} destination",
                "upcoming": "Vous arriverez à votre {nth} destination",
                "short": "Vous êtes arrivé",
                "short-upcoming": "Vous arriverez",
                "named": "Vous êtes arrivé {waypoint_name:arrival}"
            },
            "left": {
                "default": "Vous êtes arrivé à votre {nth} destination, sur la gauche",
                "upcoming": "Vous arriverez à votre {nth} destination, sur la gauche",
                "short": "Vous êtes arrivé",
                "short-upcoming": "Vous arriverez",
                "named": "Vous êtes arrivé {waypoint_name:arrival}, sur la gauche"
            },
            "right": {
                "default": "Vous êtes arrivé à votre {nth} destination, sur la droite",
                "upcoming": "Vous arriverez à votre {nth} destination, sur la droite",
                "short": "Vous êtes arrivé",
                "short-upcoming": "Vous arriverez",
                "named": "Vous êtes arrivé à  {waypoint_name:arrival}, sur la droite"
            },
            "sharp left": {
                "default": "Vous êtes arrivé à votre {nth} destination, sur la gauche",
                "upcoming": "Vous arriverez à votre {nth} destination, sur la gauche",
                "short": "Vous êtes arrivé",
                "short-upcoming": "Vous arriverez",
                "named": "Vous êtes arrivé {waypoint_name:arrival}, sur la gauche"
            },
            "sharp right": {
                "default": "Vous êtes arrivé à votre {nth} destination, sur la droite",
                "upcoming": "Vous arriverez à votre {nth} destination, sur la droite",
                "short": "Vous êtes arrivé",
                "short-upcoming": "Vous arriverez",
                "named": "Vous êtes arrivé {waypoint_name:arrival}, sur la droite"
            },
            "slight right": {
                "default": "Vous êtes arrivé à votre {nth} destination, sur la droite",
                "upcoming": "Vous arriverez à votre {nth} destination, sur la droite",
                "short": "Vous êtes arrivé",
                "short-upcoming": "Vous arriverez",
                "named": "Vous êtes arrivé {waypoint_name:arrival}, sur la droite"
            },
            "slight left": {
                "default": "Vous êtes arrivé à votre {nth} destination, sur la gauche",
                "upcoming": "Vous arriverez à votre {nth} destination, sur la gauche",
                "short": "Vous êtes arrivé",
                "short-upcoming": "Vous êtes arrivé",
                "named": "Vous êtes arrivé {waypoint_name:arrival}, sur la gauche"
            },
            "straight": {
                "default": "Vous êtes arrivé à votre {nth} destination, droit devant",
                "upcoming": "Vous arriverez à votre {nth} destination, droit devant",
                "short": "Vous êtes arrivé",
                "short-upcoming": "Vous êtes arrivé",
                "named": "Vous êtes arrivé {waypoint_name:arrival}, droit devant"
            }
        },
        "continue": {
            "default": {
                "default": "Tourner {modifier}",
                "name": "Tourner {modifier} pour rester sur {way_name:article}",
                "destination": "Tourner {modifier} en direction {destination:preposition}",
                "exit": "Tourner {modifier} sur {way_name:article}"
            },
            "straight": {
                "default": "Continuer tout droit",
                "name": "Continuer tout droit pour rester sur {way_name:article}",
                "destination": "Continuer tout droit en direction {destination:preposition}",
                "distance": "Continuer tout droit sur {distance}",
                "namedistance": "Continuer sur {way_name:article} sur {distance}"
            },
            "sharp left": {
                "default": "Tourner franchement à gauche",
                "name": "Tourner franchement à gauche pour rester sur {way_name:article}",
                "destination": "Tourner franchement à gauche en direction {destination:preposition}"
            },
            "sharp right": {
                "default": "Tourner franchement à droite",
                "name": "Tourner franchement à droite pour rester sur {way_name:article}",
                "destination": "Tourner franchement à droite en direction {destination:preposition}"
            },
            "slight left": {
                "default": "Tourner légèrement à gauche",
                "name": "Tourner légèrement à gauche pour rester sur {way_name:article}",
                "destination": "Tourner légèrement à gauche en direction {destination:preposition}"
            },
            "slight right": {
                "default": "Tourner légèrement à droite",
                "name": "Tourner légèrement à droite pour rester sur {way_name:article}",
                "destination": "Tourner légèrement à droite en direction {destination:preposition}"
            },
            "uturn": {
                "default": "Faire demi-tour",
                "name": "Faire demi-tour et continuer sur {way_name:article}",
                "destination": "Faire demi-tour en direction {destination:preposition}"
            }
        },
        "depart": {
            "default": {
                "default": "Se diriger vers {direction}",
                "name": "Se diriger vers {direction} sur {way_name:article}",
                "namedistance": "Se diriger vers {direction} sur {way_name:article} sur {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Tourner {modifier}",
                "name": "Tourner {modifier} sur {way_name:article}",
                "destination": "Tourner {modifier} en direction {destination:preposition}"
            },
            "straight": {
                "default": "Continuer tout droit",
                "name": "Continuer tout droit sur {way_name:article}",
                "destination": "Continuer tout droit en direction {destination:preposition}"
            },
            "uturn": {
                "default": "Faire demi-tour à la fin de la route",
                "name": "Faire demi-tour à la fin {way_name:preposition}",
                "destination": "Faire demi-tour à la fin de la route en direction {destination:preposition}"
            }
        },
        "fork": {
            "default": {
                "default": "Tenir {modifier} à l’embranchement",
                "name": "Tenir {modifier} sur {way_name:article}",
                "destination": "Tenir {modifier} en direction {destination:preposition}"
            },
            "slight left": {
                "default": "Tenir la gauche à l’embranchement",
                "name": "Tenir la gauche sur {way_name:article}",
                "destination": "Tenir la gauche en direction {destination:preposition}"
            },
            "slight right": {
                "default": "Tenir la droite à l’embranchement",
                "name": "Tenir la droite sur {way_name:article}",
                "destination": "Tenir la droite en direction {destination:preposition}"
            },
            "sharp left": {
                "default": "Tourner franchement à gauche à l’embranchement",
                "name": "Tourner franchement à gauche sur {way_name:article}",
                "destination": "Tourner franchement à gauche en direction {destination:preposition}"
            },
            "sharp right": {
                "default": "Tourner franchement à droite à l’embranchement",
                "name": "Tourner franchement à droite sur {way_name:article}",
                "destination": "Tourner franchement à droite en direction {destination:preposition}"
            },
            "uturn": {
                "default": "Faire demi-tour",
                "name": "Faire demi-tour sur {way_name:article}",
                "destination": "Faire demi-tour en direction {destination:preposition}"
            }
        },
        "merge": {
            "default": {
                "default": "S’insérer {modifier}",
                "name": "S’insérer {modifier} sur {way_name:article}",
                "destination": "S’insérer {modifier} en direction {destination:preposition}"
            },
            "straight": {
                "default": "S’insérer",
                "name": "S’insérer sur {way_name:article}",
                "destination": "S’insérer en direction {destination:preposition}"
            },
            "slight left": {
                "default": "S’insérer légèrement à gauche",
                "name": "S’insérer légèrement à gauche sur {way_name:article}",
                "destination": "S’insérer légèrement à gauche en direction {destination:preposition}"
            },
            "slight right": {
                "default": "S’insérer légèrement à droite",
                "name": "S’insérer légèrement à droite sur {way_name:article}",
                "destination": "S’insérer à droite en direction {destination:preposition}"
            },
            "sharp left": {
                "default": "S’insérer à gauche",
                "name": "S’insérer à gauche sur {way_name:article}",
                "destination": "S’insérer à gauche en direction {destination:preposition}"
            },
            "sharp right": {
                "default": "S’insérer à droite",
                "name": "S’insérer à droite sur {way_name:article}",
                "destination": "S’insérer à droite en direction {destination:preposition}"
            },
            "uturn": {
                "default": "Faire demi-tour",
                "name": "Faire demi-tour sur {way_name:article}",
                "destination": "Faire demi-tour en direction {destination:preposition}"
            }
        },
        "new name": {
            "default": {
                "default": "Continuer {modifier}",
                "name": "Continuer {modifier} sur {way_name:article}",
                "destination": "Continuer {modifier} en direction {destination:preposition}"
            },
            "straight": {
                "default": "Continuer tout droit",
                "name": "Continuer tout droit sur {way_name:article}",
                "destination": "Continuer tout droit en direction {destination:preposition}"
            },
            "sharp left": {
                "default": "Tourner franchement à gauche",
                "name": "Tourner franchement à gauche sur {way_name:article}",
                "destination": "Tourner franchement à gauche en direction {destination:preposition}"
            },
            "sharp right": {
                "default": "Tourner franchement à droite",
                "name": "Tourner franchement à droite sur {way_name:article}",
                "destination": "Tourner franchement à droite en direction {destination:preposition}"
            },
            "slight left": {
                "default": "Continuer légèrement à gauche",
                "name": "Continuer légèrement à gauche sur {way_name:article}",
                "destination": "Continuer légèrement à gauche en direction {destination:preposition}"
            },
            "slight right": {
                "default": "Continuer légèrement à droite",
                "name": "Continuer légèrement à droite sur {way_name:article}",
                "destination": "Continuer légèrement à droite en direction {destination:preposition}"
            },
            "uturn": {
                "default": "Faire demi-tour",
                "name": "Faire demi-tour sur {way_name:article}",
                "destination": "Faire demi-tour en direction {destination:preposition}"
            }
        },
        "notification": {
            "default": {
                "default": "Continuer {modifier}",
                "name": "Continuer {modifier} sur {way_name:article}",
                "destination": "Continuer {modifier} en direction {destination:preposition}"
            },
            "uturn": {
                "default": "Faire demi-tour",
                "name": "Faire demi-tour sur {way_name:article}",
                "destination": "Faire demi-tour en direction {destination:preposition}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Prendre la sortie",
                "name": "Prendre la sortie sur {way_name:article}",
                "destination": "Prendre la sortie en direction {destination:preposition}",
                "exit": "Prendre la sortie {exit}",
                "exit_destination": "Prendre la sortie {exit} en direction {destination:preposition}"
            },
            "left": {
                "default": "Prendre la sortie à gauche",
                "name": "Prendre la sortie à gauche sur {way_name:article}",
                "destination": "Prendre la sortie à gauche en direction {destination:preposition}",
                "exit": "Prendre la sortie {exit} sur la gauche",
                "exit_destination": "Prendre la sortie {exit} sur la gauche en direction {destination:preposition}"
            },
            "right": {
                "default": "Prendre la sortie à droite",
                "name": "Prendre la sortie à droite sur {way_name:article}",
                "destination": "Prendre la sortie à droite en direction {destination:preposition}",
                "exit": "Prendre la sortie {exit} sur la droite",
                "exit_destination": "Prendre la sortie {exit} sur la droite en direction {destination:preposition}"
            },
            "sharp left": {
                "default": "Prendre la sortie à gauche",
                "name": "Prendre la sortie à gauche sur {way_name:article}",
                "destination": "Prendre la sortie à gauche en direction {destination:preposition}",
                "exit": "Prendre la sortie {exit} sur la gauche",
                "exit_destination": "Prendre la sortie {exit} sur la gauche en direction {destination:preposition}"
            },
            "sharp right": {
                "default": "Prendre la sortie à droite",
                "name": "Prendre la sortie à droite sur {way_name:article}",
                "destination": "Prendre la sortie à droite en direction {destination:preposition}",
                "exit": "Prendre la sortie {exit} sur la droite",
                "exit_destination": "Prendre la sortie {exit} sur la droite en direction {destination:preposition}"
            },
            "slight left": {
                "default": "Prendre la sortie à gauche",
                "name": "Prendre la sortie à gauche sur {way_name:article}",
                "destination": "Prendre la sortie à gauche en direction {destination:preposition}",
                "exit": "Prendre la sortie {exit} sur la gauche",
                "exit_destination": "Prendre la sortie {exit} sur la gauche en direction {destination:preposition}"
            },
            "slight right": {
                "default": "Prendre la sortie à droite",
                "name": "Prendre la sortie à droite sur {way_name:article}",
                "destination": "Prendre la sortie à droite en direction {destination:preposition}",
                "exit": "Prendre la sortie {exit} sur la droite",
                "exit_destination": "Prendre la sortie {exit} sur la droite en direction {destination:preposition}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Prendre la sortie",
                "name": "Prendre la sortie sur {way_name:article}",
                "destination": "Prendre la sortie en direction {destination:preposition}"
            },
            "left": {
                "default": "Prendre la sortie à gauche",
                "name": "Prendre la sortie à gauche sur {way_name:article}",
                "destination": "Prendre la sortie à gauche en direction {destination:preposition}"
            },
            "right": {
                "default": "Prendre la sortie à droite",
                "name": "Prendre la sortie à droite sur {way_name:article}",
                "destination": "Prendre la sortie à droite en direction {destination:preposition}"
            },
            "sharp left": {
                "default": "Prendre la sortie à gauche",
                "name": "Prendre la sortie à gauche sur {way_name:article}",
                "destination": "Prendre la sortie à gauche en direction {destination:preposition}"
            },
            "sharp right": {
                "default": "Prendre la sortie à droite",
                "name": "Prendre la sortie à droite sur {way_name:article}",
                "destination": "Prendre la sortie à droite en direction {destination:preposition}"
            },
            "slight left": {
                "default": "Prendre la sortie à gauche",
                "name": "Prendre la sortie à gauche sur {way_name:article}",
                "destination": "Prendre la sortie à gauche en direction {destination:preposition}"
            },
            "slight right": {
                "default": "Prendre la sortie à droite",
                "name": "Prendre la sortie à droite sur {way_name:article}",
                "destination": "Prendre la sortie à droite en direction {destination:preposition}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Prendre le rond-point",
                    "name": "Prendre le rond-point, puis sortir sur {way_name:article}",
                    "destination": "Prendre le rond-point, puis sortir en direction {destination:preposition}"
                },
                "name": {
                    "default": "Prendre {rotary_name:rotary}",
                    "name": "Prendre {rotary_name:rotary}, puis sortir par {way_name:article}",
                    "destination": "Prendre {rotary_name:rotary}, puis sortir en direction {destination:preposition}"
                },
                "exit": {
                    "default": "Prendre le rond-point, puis la {exit_number} sortie",
                    "name": "Prendre le rond-point, puis la {exit_number} sortie sur {way_name:article}",
                    "destination": "Prendre le rond-point, puis la {exit_number} sortie en direction {destination:preposition}"
                },
                "name_exit": {
                    "default": "Prendre {rotary_name:rotary}, puis la {exit_number} sortie",
                    "name": "Prendre {rotary_name:rotary}, puis la {exit_number} sortie sur {way_name:article}",
                    "destination": "Prendre {rotary_name:rotary}, puis la {exit_number} sortie en direction {destination:preposition}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Prendre le rond-point, puis la {exit_number} sortie",
                    "name": "Prendre le rond-point, puis la {exit_number} sortie sur {way_name:article}",
                    "destination": "Prendre le rond-point, puis la {exit_number} sortie en direction {destination:preposition}"
                },
                "default": {
                    "default": "Prendre le rond-point",
                    "name": "Prendre le rond-point, puis sortir sur {way_name:article}",
                    "destination": "Prendre le rond-point, puis sortir en direction {destination:preposition}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Tourner {modifier}",
                "name": "Tourner {modifier} sur {way_name:article}",
                "destination": "Tourner {modifier} en direction {destination:preposition}"
            },
            "left": {
                "default": "Tourner à gauche",
                "name": "Tourner à gauche sur {way_name:article}",
                "destination": "Tourner à gauche en direction {destination:preposition}"
            },
            "right": {
                "default": "Tourner à droite",
                "name": "Tourner à droite sur {way_name:article}",
                "destination": "Tourner à droite en direction {destination:preposition}"
            },
            "straight": {
                "default": "Continuer tout droit",
                "name": "Continuer tout droit sur {way_name:article}",
                "destination": "Continuer tout droit en direction {destination:preposition}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Sortir du rond-point",
                "name": "Sortir du rond-point sur {way_name:article}",
                "destination": "Sortir du rond-point en direction {destination:preposition}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Sortir du rond-point",
                "name": "Sortir du rond-point sur {way_name:article}",
                "destination": "Sortir du rond-point en direction {destination:preposition}"
            }
        },
        "turn": {
            "default": {
                "default": "Tourner {modifier}",
                "name": "Tourner {modifier} sur {way_name:article}",
                "destination": "Tourner {modifier} en direction {destination:preposition}"
            },
            "left": {
                "default": "Tourner à gauche",
                "name": "Tourner à gauche sur {way_name:article}",
                "destination": "Tourner à gauche en direction {destination:preposition}"
            },
            "right": {
                "default": "Tourner à droite",
                "name": "Tourner à droite sur {way_name:article}",
                "destination": "Tourner à droite en direction {destination:preposition}"
            },
            "straight": {
                "default": "Aller tout droit",
                "name": "Aller tout droit sur {way_name:article}",
                "destination": "Aller tout droit en direction {destination:preposition}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Continuer tout droit"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],31:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "ראשונה",
                "2": "שניה",
                "3": "שלישית",
                "4": "רביעית",
                "5": "חמישית",
                "6": "שישית",
                "7": "שביעית",
                "8": "שמינית",
                "9": "תשיעית",
                "10": "עשירית"
            },
            "direction": {
                "north": "צפון",
                "northeast": "צפון מזרח",
                "east": "מזרח",
                "southeast": "דרום מזרח",
                "south": "דרום",
                "southwest": "דרום מערב",
                "west": "מערב",
                "northwest": "צפון מערב"
            },
            "modifier": {
                "left": "שמאלה",
                "right": "ימינה",
                "sharp left": "חדה שמאלה",
                "sharp right": "חדה ימינה",
                "slight left": "קלה שמאלה",
                "slight right": "קלה ימינה",
                "straight": "ישר",
                "uturn": "פניית פרסה"
            },
            "lanes": {
                "xo": "היצמד לימין",
                "ox": "היצמד לשמאל",
                "xox": "המשך בנתיב האמצעי",
                "oxo": "היצמד לימין או לשמאל"
            }
        },
        "modes": {
            "ferry": {
                "default": "עלה על המעבורת",
                "name": "עלה על המעבורת {way_name}",
                "destination": "עלה על המעבורת לכיוון {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, ואז, בעוד{distance}, {instruction_two}",
            "two linked": "{instruction_one}, ואז {instruction_two}",
            "one in distance": "בעוד {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "יציאה {exit}"
        },
        "arrive": {
            "default": {
                "default": "הגעת אל היעד ה{nth} שלך",
                "upcoming": "אתה תגיע אל היעד ה{nth} שלך",
                "short": "הגעת",
                "short-upcoming": "תגיע",
                "named": "הגעת אל {waypoint_name}"
            },
            "left": {
                "default": "הגעת אל היעד ה{nth} שלך משמאלך",
                "upcoming": "אתה תגיע אל היעד ה{nth} שלך משמאלך",
                "short": "הגעת",
                "short-upcoming": "תגיע",
                "named": "הגעת אל {waypoint_name} שלך משמאלך"
            },
            "right": {
                "default": "הגעת אל היעד ה{nth} שלך מימינך",
                "upcoming": "אתה תגיע אל היעד ה{nth} שלך מימינך",
                "short": "הגעת",
                "short-upcoming": "תגיע",
                "named": "הגעת אל {waypoint_name} שלך מימינך"
            },
            "sharp left": {
                "default": "הגעת אל היעד ה{nth} שלך משמאלך",
                "upcoming": "אתה תגיע אל היעד ה{nth} שלך משמאלך",
                "short": "הגעת",
                "short-upcoming": "תגיע",
                "named": "הגעת אל {waypoint_name} שלך משמאלך"
            },
            "sharp right": {
                "default": "הגעת אל היעד ה{nth} שלך מימינך",
                "upcoming": "אתה תגיע אל היעד ה{nth} שלך מימינך",
                "short": "הגעת",
                "short-upcoming": "תגיע",
                "named": "הגעת אל {waypoint_name} שלך מימינך"
            },
            "slight right": {
                "default": "הגעת אל היעד ה{nth} שלך מימינך",
                "upcoming": "אתה תגיע אל היעד ה{nth} שלך מימינך",
                "short": "הגעת",
                "short-upcoming": "תגיע",
                "named": "הגעת אל {waypoint_name} שלך מימינך"
            },
            "slight left": {
                "default": "הגעת אל היעד ה{nth} שלך משמאלך",
                "upcoming": "אתה תגיע אל היעד ה{nth} שלך משמאלך",
                "short": "הגעת",
                "short-upcoming": "תגיע",
                "named": "הגעת אל {waypoint_name} שלך משמאלך"
            },
            "straight": {
                "default": "הגעת אל היעד ה{nth} שלך, בהמשך",
                "upcoming": "אתה תגיע אל היעד ה{nth} שלך, בהמשך",
                "short": "הגעת",
                "short-upcoming": "תגיע",
                "named": "הגעת אל {waypoint_name}, בהמשך"
            }
        },
        "continue": {
            "default": {
                "default": "פנה {modifier}",
                "name": "פנה {modifier} כדי להישאר ב{way_name}",
                "destination": "פנה {modifier} לכיוון {destination}",
                "exit": "פנה {modifier} על {way_name}"
            },
            "straight": {
                "default": "המשך ישר",
                "name": "המשך ישר כדי להישאר על {way_name}",
                "destination": "המשך לכיוון {destination}",
                "distance": "המשך ישר לאורך {distance}",
                "namedistance": "המשך על {way_name} לאורך {distance}"
            },
            "sharp left": {
                "default": "פנה בחדות שמאלה",
                "name": "פנה בחדות שמאלה כדי להישאר על {way_name}",
                "destination": "פנה בחדות שמאלה לכיוון {destination}"
            },
            "sharp right": {
                "default": "פנה בחדות ימינה",
                "name": "פנה בחדות ימינה כדי להישאר על {way_name}",
                "destination": "פנה בחדות ימינה לכיוון {destination}"
            },
            "slight left": {
                "default": "פנה קלות שמאלה",
                "name": "פנה קלות שמאלה כדי להישאר על {way_name}",
                "destination": "פנה קלות שמאלה לכיוון {destination}"
            },
            "slight right": {
                "default": "פנה קלות ימינה",
                "name": "פנה קלות ימינה כדי להישאר על {way_name}",
                "destination": "פנה קלות ימינה לכיוון {destination}"
            },
            "uturn": {
                "default": "פנה פניית פרסה",
                "name": "פנה פניית פרסה והמשך על {way_name}",
                "destination": "פנה פניית פרסה לכיוון {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "התכוונן {direction}",
                "name": "התכוונן {direction} על {way_name}",
                "namedistance": "התכוונן {direction} על {way_name} לאורך {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "פנה {modifier}",
                "name": "פנה {modifier} על {way_name}",
                "destination": "פנה {modifier} לכיוון {destination}"
            },
            "straight": {
                "default": "המשך ישר",
                "name": "המשך ישר על {way_name}",
                "destination": "המשך ישר לכיוון {destination}"
            },
            "uturn": {
                "default": "פנה פניית פרסה בסוף הדרך",
                "name": "פנה פניית פרסה על {way_name} בסוף הדרך",
                "destination": "פנה פניית פרסה לכיוון {destination} בסוף הדרך"
            }
        },
        "fork": {
            "default": {
                "default": "היצמד {modifier} בהתפצלות",
                "name": "היצמד {modifier} על {way_name}",
                "destination": "היצמד {modifier} לכיוון {destination}"
            },
            "slight left": {
                "default": "היצמד לשמאל בהתפצלות",
                "name": "היצמד לשמאל על {way_name}",
                "destination": "היצמד לשמאל לכיוון {destination}"
            },
            "slight right": {
                "default": "היצמד ימינה בהתפצלות",
                "name": "היצמד לימין על {way_name}",
                "destination": "היצמד לימין לכיוון {destination}"
            },
            "sharp left": {
                "default": "פנה בחדות שמאלה בהתפצלות",
                "name": "פנה בחדות שמאלה על {way_name}",
                "destination": "פנה בחדות שמאלה לכיוון {destination}"
            },
            "sharp right": {
                "default": "פנה בחדות ימינה בהתפצלות",
                "name": "פנה בחדות ימינה על {way_name}",
                "destination": "פנה בחדות ימינה לכיוון {destination}"
            },
            "uturn": {
                "default": "פנה פניית פרסה",
                "name": "פנה פניית פרסה על {way_name}",
                "destination": "פנה פניית פרסה לכיוון {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "השתלב {modifier}",
                "name": "השתלב {modifier} על {way_name}",
                "destination": "השתלב {modifier} לכיוון {destination}"
            },
            "straight": {
                "default": "השתלב",
                "name": "השתלב על {way_name}",
                "destination": "השתלב לכיוון {destination}"
            },
            "slight left": {
                "default": "השתלב שמאלה",
                "name": "השתלב שמאלה על {way_name}",
                "destination": "השתלב שמאלה לכיוון {destination}"
            },
            "slight right": {
                "default": "השתלב ימינה",
                "name": "השתלב ימינה על {way_name}",
                "destination": "השתלב ימינה לכיוון {destination}"
            },
            "sharp left": {
                "default": "השתלב שמאלה",
                "name": "השתלב שמאלה על {way_name}",
                "destination": "השתלב שמאלה לכיוון {destination}"
            },
            "sharp right": {
                "default": "השתלב ימינה",
                "name": "השתלב ימינה על {way_name}",
                "destination": "השתלב ימינה לכיוון {destination}"
            },
            "uturn": {
                "default": "פנה פניית פרסה",
                "name": "פנה פניית פרסה על {way_name}",
                "destination": "פנה פניית פרסה לכיוון {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "המשך {modifier}",
                "name": "המשך {modifier} על {way_name}",
                "destination": "המשך {modifier} לכיוון {destination}"
            },
            "straight": {
                "default": "המשך ישר",
                "name": "המשך על {way_name}",
                "destination": "המשך לכיוון {destination}"
            },
            "sharp left": {
                "default": "פנה בחדות שמאלה",
                "name": "פנה בחדות שמאלה על {way_name}",
                "destination": "פנה בחדות שמאלה לכיוון {destination}"
            },
            "sharp right": {
                "default": "פנה בחדות ימינה",
                "name": "פנה בחדות ימינה על {way_name}",
                "destination": "פנה בחדות ימינה לכיוון {destination}"
            },
            "slight left": {
                "default": "המשך בנטייה קלה שמאלה",
                "name": "המשך בנטייה קלה שמאלה על {way_name}",
                "destination": "המשך בנטייה קלה שמאלה לכיוון {destination}"
            },
            "slight right": {
                "default": "המשך בנטייה קלה ימינה",
                "name": "המשך בנטייה קלה ימינה על {way_name}",
                "destination": "המשך בנטייה קלה ימינה לכיוון {destination}"
            },
            "uturn": {
                "default": "פנה פניית פרסה",
                "name": "פנה פניית פרסה על {way_name}",
                "destination": "פנה פניית פרסה לכיוון {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "המשך {modifier}",
                "name": "המשך {modifier} על {way_name}",
                "destination": "המשך {modifier} לכיוון {destination}"
            },
            "uturn": {
                "default": "פנה פניית פרסה",
                "name": "פנה פניית פרסה על {way_name}",
                "destination": "פנה פניית פרסה לכיוון {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "צא ביציאה",
                "name": "צא ביציאה על {way_name}",
                "destination": "צא ביציאה לכיוון {destination}",
                "exit": "צא ביציאה {exit}",
                "exit_destination": "צא ביציאה {exit} לכיוון {destination}"
            },
            "left": {
                "default": "צא ביציאה שמשמאלך",
                "name": "צא ביציאה שמשמאלך על {way_name}",
                "destination": "צא ביציאה שמשמאלך לכיוון {destination}",
                "exit": "צא ביציאה {exit} משמאלך",
                "exit_destination": "צא ביציאה {exit} משמאלך לכיוון {destination}"
            },
            "right": {
                "default": "צא ביציאה שמימינך",
                "name": "צא ביציאה שמימינך על {way_name}",
                "destination": "צא ביציאה שמימינך לכיוון {destination}",
                "exit": "צא ביציאה {exit} מימינך",
                "exit_destination": "צא ביציאה {exit} מימינך לכיוון {destination}"
            },
            "sharp left": {
                "default": "צא ביציאה שבשמאלך",
                "name": "צא ביציאה שמשמאלך על {way_name}",
                "destination": "צא ביציאה שמשמאלך לכיוון {destination}",
                "exit": "צא ביציאה {exit} משמאלך",
                "exit_destination": "צא ביציאה {exit} משמאלך לכיוון {destination}"
            },
            "sharp right": {
                "default": "צא ביציאה שמימינך",
                "name": "צא ביציאה שמימינך על {way_name}",
                "destination": "צא ביציאה שמימינך לכיוון {destination}",
                "exit": "צא ביציאה {exit} מימינך",
                "exit_destination": "צא ביציאה {exit} מימינך לכיוון {destination}"
            },
            "slight left": {
                "default": "צא ביציאה שבשמאלך",
                "name": "צא ביציאה שמשמאלך על {way_name}",
                "destination": "צא ביציאה שמשמאלך לכיוון {destination}",
                "exit": "צא ביציאה {exit} משמאלך",
                "exit_destination": "צא ביציאה {exit} משמאלך לכיוון {destination}"
            },
            "slight right": {
                "default": "צא ביציאה שמימינך",
                "name": "צא ביציאה שמימינך על {way_name}",
                "destination": "צא ביציאה שמימינך לכיוון {destination}",
                "exit": "צא ביציאה {exit} מימינך",
                "exit_destination": "צא ביציאה {exit} מימינך לכיוון {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "צא ביציאה",
                "name": "צא ביציאה על {way_name}",
                "destination": "צא ביציאה לכיוון {destination}"
            },
            "left": {
                "default": "צא ביציאה שבשמאלך",
                "name": "צא ביציאה שמשמאלך על {way_name}",
                "destination": "צא ביציאה שמשמאלך לכיוון {destination}"
            },
            "right": {
                "default": "צא ביציאה שמימינך",
                "name": "צא ביציאה שמימינך על {way_name}",
                "destination": "צא ביציאה שמימינך לכיוון {destination}"
            },
            "sharp left": {
                "default": "צא ביציאה שבשמאלך",
                "name": "צא ביציאה שמשמאלך על {way_name}",
                "destination": "צא ביציאה שמשמאלך לכיוון {destination}"
            },
            "sharp right": {
                "default": "צא ביציאה שמימינך",
                "name": "צא ביציאה שמימינך על {way_name}",
                "destination": "צא ביציאה שמימינך לכיוון {destination}"
            },
            "slight left": {
                "default": "צא ביציאה שבשמאלך",
                "name": "צא ביציאה שמשמאלך על {way_name}",
                "destination": "צא ביציאה שמשמאלך לכיוון {destination}"
            },
            "slight right": {
                "default": "צא ביציאה שמימינך",
                "name": "צא ביציאה שמימינך על {way_name}",
                "destination": "צא ביציאה שמימינך לכיוון {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "השתלב במעגל התנועה",
                    "name": "השתלב במעגל התנועה וצא על {way_name}",
                    "destination": "השתלב במעגל התנועה וצא לכיוון {destination}"
                },
                "name": {
                    "default": "היכנס ל{rotary_name}",
                    "name": "היכנס ל{rotary_name} וצא על {way_name}",
                    "destination": "היכנס ל{rotary_name} וצא לכיוון {destination}"
                },
                "exit": {
                    "default": "השתלב במעגל התנועה וצא ביציאה {exit_number}",
                    "name": "השתלב במעגל התנועה וצא ביציאה {exit_number} ל{way_name}",
                    "destination": "השתלב במעגל התנועה וצא ביציאה {exit_number} לכיוון {destination}"
                },
                "name_exit": {
                    "default": "היכנס ל{rotary_name} וצא ביציאה ה{exit_number}",
                    "name": "היכנס ל{rotary_name} וצא ביציאה ה{exit_number} ל{way_name}",
                    "destination": "היכנס ל{rotary_name} וצא ביציאה ה{exit_number} לכיוון {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "השתלב במעגל התנועה וצא ביציאה {exit_number}",
                    "name": "השתלב במעגל התנועה וצא ביציאה {exit_number} ל{way_name}",
                    "destination": "השתלב במעגל התנועה וצא ביציאה {exit_number} לכיוון {destination}"
                },
                "default": {
                    "default": "השתלב במעגל התנועה",
                    "name": "השתלב במעגל התנועה וצא על {way_name}",
                    "destination": "השתלב במעגל התנועה וצא לכיוון {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "פנה {modifier}",
                "name": "פנה {modifier} על {way_name}",
                "destination": "פנה {modifier} לכיוון {destination}"
            },
            "left": {
                "default": "פנה שמאלה",
                "name": "פנה שמאלה ל{way_name}",
                "destination": "פנה שמאלה לכיוון {destination}"
            },
            "right": {
                "default": "פנה ימינה",
                "name": "פנה ימינה ל{way_name}",
                "destination": "פנה ימינה לכיוון {destination}"
            },
            "straight": {
                "default": "המשך ישר",
                "name": "המשך ישר על {way_name}",
                "destination": "המשך ישר לכיוון {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "צא ממעגל התנועה",
                "name": "צא ממעגל התנועה ל{way_name}",
                "destination": "צא ממעגל התנועה לכיוון {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "צא ממעגל התנועה",
                "name": "צא ממעגל התנועה ל{way_name}",
                "destination": "צא ממעגל התנועה לכיוון {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "פנה {modifier}",
                "name": "פנה {modifier} על {way_name}",
                "destination": "פנה {modifier} לכיוון {destination}"
            },
            "left": {
                "default": "פנה שמאלה",
                "name": "פנה שמאלה ל{way_name}",
                "destination": "פנה שמאלה לכיוון {destination}"
            },
            "right": {
                "default": "פנה ימינה",
                "name": "פנה ימינה ל{way_name}",
                "destination": "פנה ימינה לכיוון {destination}"
            },
            "straight": {
                "default": "המשך ישר",
                "name": "המשך ישר ל{way_name}",
                "destination": "המשך ישר לכיוון {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "המשך ישר"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],32:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "10": "10"
            },
            "direction": {
                "north": "utara",
                "northeast": "timur laut",
                "east": "timur",
                "southeast": "tenggara",
                "south": "selatan",
                "southwest": "barat daya",
                "west": "barat",
                "northwest": "barat laut"
            },
            "modifier": {
                "left": "kiri",
                "right": "kanan",
                "sharp left": "tajam kiri",
                "sharp right": "tajam kanan",
                "slight left": "agak ke kiri",
                "slight right": "agak ke kanan",
                "straight": "lurus",
                "uturn": "putar balik"
            },
            "lanes": {
                "xo": "Tetap di kanan",
                "ox": "Tetap di kiri",
                "xox": "Tetap di tengah",
                "oxo": "Tetap di kiri atau kanan"
            }
        },
        "modes": {
            "ferry": {
                "default": "Naik ferry",
                "name": "Naik ferry di {way_name}",
                "destination": "Naik ferry menuju {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, then, in {distance}, {instruction_two}",
            "two linked": "{instruction_one}, then {instruction_two}",
            "one in distance": "In {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "exit {exit}"
        },
        "arrive": {
            "default": {
                "default": "Anda telah tiba di tujuan ke-{nth}",
                "upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "short": "Anda telah tiba di tujuan ke-{nth}",
                "short-upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "named": "Anda telah tiba di {waypoint_name}"
            },
            "left": {
                "default": "Anda telah tiba di tujuan ke-{nth}, di sebelah kiri",
                "upcoming": "Anda telah tiba di tujuan ke-{nth}, di sebelah kiri",
                "short": "Anda telah tiba di tujuan ke-{nth}",
                "short-upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "named": "Anda telah tiba di {waypoint_name}, di sebelah kiri"
            },
            "right": {
                "default": "Anda telah tiba di tujuan ke-{nth}, di sebelah kanan",
                "upcoming": "Anda telah tiba di tujuan ke-{nth}, di sebelah kanan",
                "short": "Anda telah tiba di tujuan ke-{nth}",
                "short-upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "named": "Anda telah tiba di {waypoint_name}, di sebelah kanan"
            },
            "sharp left": {
                "default": "Anda telah tiba di tujuan ke-{nth}, di sebelah kiri",
                "upcoming": "Anda telah tiba di tujuan ke-{nth}, di sebelah kiri",
                "short": "Anda telah tiba di tujuan ke-{nth}",
                "short-upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "named": "Anda telah tiba di {waypoint_name}, di sebelah kiri"
            },
            "sharp right": {
                "default": "Anda telah tiba di tujuan ke-{nth}, di sebelah kanan",
                "upcoming": "Anda telah tiba di tujuan ke-{nth}, di sebelah kanan",
                "short": "Anda telah tiba di tujuan ke-{nth}",
                "short-upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "named": "Anda telah tiba di {waypoint_name}, di sebelah kanan"
            },
            "slight right": {
                "default": "Anda telah tiba di tujuan ke-{nth}, di sebelah kanan",
                "upcoming": "Anda telah tiba di tujuan ke-{nth}, di sebelah kanan",
                "short": "Anda telah tiba di tujuan ke-{nth}",
                "short-upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "named": "Anda telah tiba di {waypoint_name}, di sebelah kanan"
            },
            "slight left": {
                "default": "Anda telah tiba di tujuan ke-{nth}, di sebelah kiri",
                "upcoming": "Anda telah tiba di tujuan ke-{nth}, di sebelah kiri",
                "short": "Anda telah tiba di tujuan ke-{nth}",
                "short-upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "named": "Anda telah tiba di {waypoint_name}, di sebelah kiri"
            },
            "straight": {
                "default": "Anda telah tiba di tujuan ke-{nth}, lurus saja",
                "upcoming": "Anda telah tiba di tujuan ke-{nth}, lurus saja",
                "short": "Anda telah tiba di tujuan ke-{nth}",
                "short-upcoming": "Anda telah tiba di tujuan ke-{nth}",
                "named": "Anda telah tiba di {waypoint_name}, lurus saja"
            }
        },
        "continue": {
            "default": {
                "default": "Belok {modifier}",
                "name": "Terus {modifier} ke {way_name}",
                "destination": "Belok {modifier} menuju {destination}",
                "exit": "Belok {modifier} ke {way_name}"
            },
            "straight": {
                "default": "Lurus terus",
                "name": "Terus ke {way_name}",
                "destination": "Terus menuju {destination}",
                "distance": "Continue straight for {distance}",
                "namedistance": "Continue on {way_name} for {distance}"
            },
            "sharp left": {
                "default": "Belok kiri tajam",
                "name": "Make a sharp left to stay on {way_name}",
                "destination": "Belok kiri tajam menuju {destination}"
            },
            "sharp right": {
                "default": "Belok kanan tajam",
                "name": "Make a sharp right to stay on {way_name}",
                "destination": "Belok kanan tajam menuju {destination}"
            },
            "slight left": {
                "default": "Tetap agak di kiri",
                "name": "Tetap agak di kiri ke {way_name}",
                "destination": "Tetap agak di kiri menuju {destination}"
            },
            "slight right": {
                "default": "Tetap agak di kanan",
                "name": "Tetap agak di kanan ke {way_name}",
                "destination": "Tetap agak di kanan menuju {destination}"
            },
            "uturn": {
                "default": "Putar balik",
                "name": "Putar balik ke arah {way_name}",
                "destination": "Putar balik menuju {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Arah {direction}",
                "name": "Arah {direction} di {way_name}",
                "namedistance": "Head {direction} on {way_name} for {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Belok {modifier}",
                "name": "Belok {modifier} ke {way_name}",
                "destination": "Belok {modifier} menuju {destination}"
            },
            "straight": {
                "default": "Lurus terus",
                "name": "Tetap lurus ke {way_name} ",
                "destination": "Tetap lurus menuju {destination}"
            },
            "uturn": {
                "default": "Putar balik di akhir jalan",
                "name": "Putar balik di {way_name} di akhir jalan",
                "destination": "Putar balik menuju {destination} di akhir jalan"
            }
        },
        "fork": {
            "default": {
                "default": "Tetap {modifier} di pertigaan",
                "name": "Tetap {modifier} di pertigaan ke {way_name}",
                "destination": "Tetap {modifier} di pertigaan menuju {destination}"
            },
            "slight left": {
                "default": "Tetap di kiri pada pertigaan",
                "name": "Tetap di kiri pada pertigaan ke arah {way_name}",
                "destination": "Tetap di kiri pada pertigaan menuju {destination}"
            },
            "slight right": {
                "default": "Tetap di kanan pada pertigaan",
                "name": "Tetap di kanan pada pertigaan ke arah {way_name}",
                "destination": "Tetap di kanan pada pertigaan menuju {destination}"
            },
            "sharp left": {
                "default": "Belok kiri pada pertigaan",
                "name": "Belok kiri tajam ke arah {way_name}",
                "destination": "Belok kiri tajam menuju {destination}"
            },
            "sharp right": {
                "default": "Belok kanan pada pertigaan",
                "name": "Belok kanan tajam ke arah {way_name}",
                "destination": "Belok kanan tajam menuju {destination}"
            },
            "uturn": {
                "default": "Putar balik",
                "name": "Putar balik ke arah {way_name}",
                "destination": "Putar balik menuju {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Bergabung {modifier}",
                "name": "Bergabung {modifier} ke arah {way_name}",
                "destination": "Bergabung {modifier} menuju {destination}"
            },
            "straight": {
                "default": "Bergabung lurus",
                "name": "Bergabung lurus ke arah {way_name}",
                "destination": "Bergabung lurus menuju {destination}"
            },
            "slight left": {
                "default": "Bergabung di kiri",
                "name": "Bergabung di kiri ke arah {way_name}",
                "destination": "Bergabung di kiri menuju {destination}"
            },
            "slight right": {
                "default": "Bergabung di kanan",
                "name": "Bergabung di kanan ke arah {way_name}",
                "destination": "Bergabung di kanan menuju {destination}"
            },
            "sharp left": {
                "default": "Bergabung di kiri",
                "name": "Bergabung di kiri ke arah {way_name}",
                "destination": "Bergabung di kiri menuju {destination}"
            },
            "sharp right": {
                "default": "Bergabung di kanan",
                "name": "Bergabung di kanan ke arah {way_name}",
                "destination": "Bergabung di kanan menuju {destination}"
            },
            "uturn": {
                "default": "Putar balik",
                "name": "Putar balik ke arah {way_name}",
                "destination": "Putar balik menuju {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Lanjutkan {modifier}",
                "name": "Lanjutkan {modifier} menuju {way_name}",
                "destination": "Lanjutkan {modifier} menuju {destination}"
            },
            "straight": {
                "default": "Lurus terus",
                "name": "Terus ke {way_name}",
                "destination": "Terus menuju {destination}"
            },
            "sharp left": {
                "default": "Belok kiri tajam",
                "name": "Belok kiri tajam ke arah {way_name}",
                "destination": "Belok kiri tajam menuju {destination}"
            },
            "sharp right": {
                "default": "Belok kanan tajam",
                "name": "Belok kanan tajam ke arah {way_name}",
                "destination": "Belok kanan tajam menuju {destination}"
            },
            "slight left": {
                "default": "Lanjut dengan agak ke kiri",
                "name": "Lanjut dengan agak di kiri ke {way_name}",
                "destination": "Tetap agak di kiri menuju {destination}"
            },
            "slight right": {
                "default": "Tetap agak di kanan",
                "name": "Tetap agak di kanan ke {way_name}",
                "destination": "Tetap agak di kanan menuju {destination}"
            },
            "uturn": {
                "default": "Putar balik",
                "name": "Putar balik ke arah {way_name}",
                "destination": "Putar balik menuju {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Lanjutkan {modifier}",
                "name": "Lanjutkan {modifier} menuju {way_name}",
                "destination": "Lanjutkan {modifier} menuju {destination}"
            },
            "uturn": {
                "default": "Putar balik",
                "name": "Putar balik ke arah {way_name}",
                "destination": "Putar balik menuju {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Ambil jalan melandai",
                "name": "Ambil jalan melandai ke {way_name}",
                "destination": "Ambil jalan melandai menuju {destination}",
                "exit": "Take exit {exit}",
                "exit_destination": "Take exit {exit} towards {destination}"
            },
            "left": {
                "default": "Ambil jalan yang melandai di sebelah kiri",
                "name": "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
                "destination": "Ambil jalan melandai di sebelah kiri menuju {destination}",
                "exit": "Take exit {exit} on the left",
                "exit_destination": "Take exit {exit} on the left towards {destination}"
            },
            "right": {
                "default": "Ambil jalan melandai di sebelah kanan",
                "name": "Ambil jalan melandai di sebelah kanan ke {way_name}",
                "destination": "Ambil jalan melandai di sebelah kanan menuju {destination}",
                "exit": "Take exit {exit} on the right",
                "exit_destination": "Take exit {exit} on the right towards {destination}"
            },
            "sharp left": {
                "default": "Ambil jalan yang melandai di sebelah kiri",
                "name": "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
                "destination": "Ambil jalan melandai di sebelah kiri menuju {destination}",
                "exit": "Take exit {exit} on the left",
                "exit_destination": "Take exit {exit} on the left towards {destination}"
            },
            "sharp right": {
                "default": "Ambil jalan melandai di sebelah kanan",
                "name": "Ambil jalan melandai di sebelah kanan ke {way_name}",
                "destination": "Ambil jalan melandai di sebelah kanan menuju {destination}",
                "exit": "Take exit {exit} on the right",
                "exit_destination": "Take exit {exit} on the right towards {destination}"
            },
            "slight left": {
                "default": "Ambil jalan yang melandai di sebelah kiri",
                "name": "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
                "destination": "Ambil jalan melandai di sebelah kiri menuju {destination}",
                "exit": "Take exit {exit} on the left",
                "exit_destination": "Take exit {exit} on the left towards {destination}"
            },
            "slight right": {
                "default": "Ambil jalan melandai di sebelah kanan",
                "name": "Ambil jalan melandai di sebelah kanan ke {way_name}",
                "destination": "Ambil jalan melandai di sebelah kanan  menuju {destination}",
                "exit": "Take exit {exit} on the right",
                "exit_destination": "Take exit {exit} on the right towards {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Ambil jalan melandai",
                "name": "Ambil jalan melandai ke {way_name}",
                "destination": "Ambil jalan melandai menuju {destination}"
            },
            "left": {
                "default": "Ambil jalan yang melandai di sebelah kiri",
                "name": "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
                "destination": "Ambil jalan melandai di sebelah kiri menuju {destination}"
            },
            "right": {
                "default": "Ambil jalan melandai di sebelah kanan",
                "name": "Ambil jalan melandai di sebelah kanan ke {way_name}",
                "destination": "Ambil jalan melandai di sebelah kanan  menuju {destination}"
            },
            "sharp left": {
                "default": "Ambil jalan yang melandai di sebelah kiri",
                "name": "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
                "destination": "Ambil jalan melandai di sebelah kiri menuju {destination}"
            },
            "sharp right": {
                "default": "Ambil jalan melandai di sebelah kanan",
                "name": "Ambil jalan melandai di sebelah kanan ke {way_name}",
                "destination": "Ambil jalan melandai di sebelah kanan  menuju {destination}"
            },
            "slight left": {
                "default": "Ambil jalan yang melandai di sebelah kiri",
                "name": "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
                "destination": "Ambil jalan melandai di sebelah kiri menuju {destination}"
            },
            "slight right": {
                "default": "Ambil jalan melandai di sebelah kanan",
                "name": "Ambil jalan melandai di sebelah kanan ke {way_name}",
                "destination": "Ambil jalan melandai di sebelah kanan  menuju {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Masuk bundaran",
                    "name": "Masuk bundaran dan keluar arah {way_name}",
                    "destination": "Masuk bundaran dan keluar menuju {destination}"
                },
                "name": {
                    "default": "Masuk {rotary_name}",
                    "name": "Masuk {rotary_name} dan keluar arah {way_name}",
                    "destination": "Masuk {rotary_name} dan keluar menuju {destination}"
                },
                "exit": {
                    "default": "Masuk bundaran dan ambil jalan keluar {exit_number}",
                    "name": "Masuk bundaran dan ambil jalan keluar {exit_number} arah {way_name}",
                    "destination": "Masuk bundaran dan ambil jalan keluar {exit_number} menuju {destination}"
                },
                "name_exit": {
                    "default": "Masuk {rotary_name} dan ambil jalan keluar {exit_number}",
                    "name": "Masuk {rotary_name} dan ambil jalan keluar {exit_number} arah {way_name}",
                    "destination": "Masuk {rotary_name} dan ambil jalan keluar {exit_number} menuju {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Masuk bundaran dan ambil jalan keluar {exit_number}",
                    "name": "Masuk bundaran dan ambil jalan keluar {exit_number} arah {way_name}",
                    "destination": "Masuk bundaran dan ambil jalan keluar {exit_number} menuju {destination}"
                },
                "default": {
                    "default": "Masuk bundaran",
                    "name": "Masuk bundaran dan keluar arah {way_name}",
                    "destination": "Masuk bundaran dan keluar menuju {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Lakukan {modifier}",
                "name": "Lakukan {modifier} ke arah {way_name}",
                "destination": "Lakukan {modifier} menuju {destination}"
            },
            "left": {
                "default": "Belok kiri",
                "name": "Belok kiri ke {way_name}",
                "destination": "Belok kiri menuju {destination}"
            },
            "right": {
                "default": "Belok kanan",
                "name": "Belok kanan ke {way_name}",
                "destination": "Belok kanan menuju {destination}"
            },
            "straight": {
                "default": "Lurus terus",
                "name": "Tetap lurus ke {way_name} ",
                "destination": "Tetap lurus menuju {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Lakukan {modifier}",
                "name": "Lakukan {modifier} ke arah {way_name}",
                "destination": "Lakukan {modifier} menuju {destination}"
            },
            "left": {
                "default": "Belok kiri",
                "name": "Belok kiri ke {way_name}",
                "destination": "Belok kiri menuju {destination}"
            },
            "right": {
                "default": "Belok kanan",
                "name": "Belok kanan ke {way_name}",
                "destination": "Belok kanan menuju {destination}"
            },
            "straight": {
                "default": "Lurus terus",
                "name": "Tetap lurus ke {way_name} ",
                "destination": "Tetap lurus menuju {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Lakukan {modifier}",
                "name": "Lakukan {modifier} ke arah {way_name}",
                "destination": "Lakukan {modifier} menuju {destination}"
            },
            "left": {
                "default": "Belok kiri",
                "name": "Belok kiri ke {way_name}",
                "destination": "Belok kiri menuju {destination}"
            },
            "right": {
                "default": "Belok kanan",
                "name": "Belok kanan ke {way_name}",
                "destination": "Belok kanan menuju {destination}"
            },
            "straight": {
                "default": "Lurus",
                "name": "Lurus arah {way_name}",
                "destination": "Lurus menuju {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Lakukan {modifier}",
                "name": "Lakukan {modifier} ke arah {way_name}",
                "destination": "Lakukan {modifier} menuju {destination}"
            },
            "left": {
                "default": "Belok kiri",
                "name": "Belok kiri ke {way_name}",
                "destination": "Belok kiri menuju {destination}"
            },
            "right": {
                "default": "Belok kanan",
                "name": "Belok kanan ke {way_name}",
                "destination": "Belok kanan menuju {destination}"
            },
            "straight": {
                "default": "Lurus",
                "name": "Lurus arah {way_name}",
                "destination": "Lurus menuju {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Lurus terus"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],33:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1ª",
                "2": "2ª",
                "3": "3ª",
                "4": "4ª",
                "5": "5ª",
                "6": "6ª",
                "7": "7ª",
                "8": "8ª",
                "9": "9ª",
                "10": "10ª"
            },
            "direction": {
                "north": "nord",
                "northeast": "nord-est",
                "east": "est",
                "southeast": "sud-est",
                "south": "sud",
                "southwest": "sud-ovest",
                "west": "ovest",
                "northwest": "nord-ovest"
            },
            "modifier": {
                "left": "sinistra",
                "right": "destra",
                "sharp left": "sinistra",
                "sharp right": "destra",
                "slight left": "sinistra leggermente",
                "slight right": "destra leggermente",
                "straight": "dritto",
                "uturn": "inversione a U"
            },
            "lanes": {
                "xo": "Mantieni la destra",
                "ox": "Mantieni la sinistra",
                "xox": "Rimani in mezzo",
                "oxo": "Mantieni la destra o la sinistra"
            }
        },
        "modes": {
            "ferry": {
                "default": "Prendi il traghetto",
                "name": "Prendi il traghetto {way_name}",
                "destination": "Prendi il traghetto verso {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, poi tra {distance},{instruction_two}",
            "two linked": "{instruction_one}, poi {instruction_two}",
            "one in distance": "tra {distance} {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "exit {exit}"
        },
        "arrive": {
            "default": {
                "default": "Sei arrivato alla tua {nth} destinazione",
                "upcoming": "Sei arrivato alla tua {nth} destinazione",
                "short": "Sei arrivato alla tua {nth} destinazione",
                "short-upcoming": "Sei arrivato alla tua {nth} destinazione",
                "named": "Sei arrivato a {waypoint_name}"
            },
            "left": {
                "default": "sei arrivato alla tua {nth} destinazione, sulla sinistra",
                "upcoming": "sei arrivato alla tua {nth} destinazione, sulla sinistra",
                "short": "Sei arrivato alla tua {nth} destinazione",
                "short-upcoming": "Sei arrivato alla tua {nth} destinazione",
                "named": "sei arrivato a {waypoint_name}, sulla sinistra"
            },
            "right": {
                "default": "sei arrivato alla tua {nth} destinazione, sulla destra",
                "upcoming": "sei arrivato alla tua {nth} destinazione, sulla destra",
                "short": "Sei arrivato alla tua {nth} destinazione",
                "short-upcoming": "Sei arrivato alla tua {nth} destinazione",
                "named": "sei arrivato a {waypoint_name}, sulla destra"
            },
            "sharp left": {
                "default": "sei arrivato alla tua {nth} destinazione, sulla sinistra",
                "upcoming": "sei arrivato alla tua {nth} destinazione, sulla sinistra",
                "short": "Sei arrivato alla tua {nth} destinazione",
                "short-upcoming": "Sei arrivato alla tua {nth} destinazione",
                "named": "sei arrivato a {waypoint_name}, sulla sinistra"
            },
            "sharp right": {
                "default": "sei arrivato alla tua {nth} destinazione, sulla destra",
                "upcoming": "sei arrivato alla tua {nth} destinazione, sulla destra",
                "short": "Sei arrivato alla tua {nth} destinazione",
                "short-upcoming": "Sei arrivato alla tua {nth} destinazione",
                "named": "sei arrivato a {waypoint_name}, sulla destra"
            },
            "slight right": {
                "default": "sei arrivato alla tua {nth} destinazione, sulla destra",
                "upcoming": "sei arrivato alla tua {nth} destinazione, sulla destra",
                "short": "Sei arrivato alla tua {nth} destinazione",
                "short-upcoming": "Sei arrivato alla tua {nth} destinazione",
                "named": "sei arrivato a {waypoint_name}, sulla destra"
            },
            "slight left": {
                "default": "sei arrivato alla tua {nth} destinazione, sulla sinistra",
                "upcoming": "sei arrivato alla tua {nth} destinazione, sulla sinistra",
                "short": "Sei arrivato alla tua {nth} destinazione",
                "short-upcoming": "Sei arrivato alla tua {nth} destinazione",
                "named": "sei arrivato a {waypoint_name}, sulla sinistra"
            },
            "straight": {
                "default": "sei arrivato alla tua {nth} destinazione, si trova davanti a te",
                "upcoming": "sei arrivato alla tua {nth} destinazione, si trova davanti a te",
                "short": "Sei arrivato alla tua {nth} destinazione",
                "short-upcoming": "Sei arrivato alla tua {nth} destinazione",
                "named": "sei arrivato a {waypoint_name}, si trova davanti a te"
            }
        },
        "continue": {
            "default": {
                "default": "Gira a {modifier}",
                "name": "Gira a {modifier} per stare su {way_name}",
                "destination": "Gira a {modifier} verso {destination}",
                "exit": "Gira a {modifier} in {way_name}"
            },
            "straight": {
                "default": "Continua dritto",
                "name": "Continua dritto per stare su {way_name}",
                "destination": "Continua verso {destination}",
                "distance": "Continua dritto per {distance}",
                "namedistance": "Continua su {way_name} per {distance}"
            },
            "sharp left": {
                "default": "Svolta a sinistra",
                "name": "Fai una stretta curva a sinistra per stare su {way_name}",
                "destination": "Svolta a sinistra verso {destination}"
            },
            "sharp right": {
                "default": "Svolta a destra",
                "name": "Fau una stretta curva a destra per stare su {way_name}",
                "destination": "Svolta a destra verso {destination}"
            },
            "slight left": {
                "default": "Fai una leggera curva a sinistra",
                "name": "Fai una leggera curva a sinistra per stare su {way_name}",
                "destination": "Fai una leggera curva a sinistra verso {destination}"
            },
            "slight right": {
                "default": "Fai una leggera curva a destra",
                "name": "Fai una leggera curva a destra per stare su {way_name}",
                "destination": "Fai una leggera curva a destra verso {destination}"
            },
            "uturn": {
                "default": "Fai un'inversione a U",
                "name": "Fai un'inversione ad U poi continua su {way_name}",
                "destination": "Fai un'inversione a U verso {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Continua verso {direction}",
                "name": "Continua verso {direction} in {way_name}",
                "namedistance": "Head {direction} on {way_name} for {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Gira a {modifier}",
                "name": "Gira a {modifier} in {way_name}",
                "destination": "Gira a {modifier} verso {destination}"
            },
            "straight": {
                "default": "Continua dritto",
                "name": "Continua dritto in {way_name}",
                "destination": "Continua dritto verso {destination}"
            },
            "uturn": {
                "default": "Fai un'inversione a U alla fine della strada",
                "name": "Fai un'inversione a U in {way_name} alla fine della strada",
                "destination": "Fai un'inversione a U verso {destination} alla fine della strada"
            }
        },
        "fork": {
            "default": {
                "default": "Mantieni la {modifier} al bivio",
                "name": "Mantieni la {modifier} al bivio in {way_name}",
                "destination": "Mantieni la {modifier} al bivio verso {destination}"
            },
            "slight left": {
                "default": "Mantieni la sinistra al bivio",
                "name": "Mantieni la sinistra al bivio in {way_name}",
                "destination": "Mantieni la sinistra al bivio verso {destination}"
            },
            "slight right": {
                "default": "Mantieni la destra al bivio",
                "name": "Mantieni la destra al bivio in {way_name}",
                "destination": "Mantieni la destra al bivio verso {destination}"
            },
            "sharp left": {
                "default": "Svolta a sinistra al bivio",
                "name": "Svolta a sinistra in {way_name}",
                "destination": "Svolta a sinistra verso {destination}"
            },
            "sharp right": {
                "default": "Svolta a destra al bivio",
                "name": "Svolta a destra in {way_name}",
                "destination": "Svolta a destra verso {destination}"
            },
            "uturn": {
                "default": "Fai un'inversione a U",
                "name": "Fai un'inversione a U in {way_name}",
                "destination": "Fai un'inversione a U verso {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Immettiti a {modifier}",
                "name": "Immettiti {modifier} in {way_name}",
                "destination": "Immettiti {modifier} verso {destination}"
            },
            "straight": {
                "default": "Immettiti a dritto",
                "name": "Immettiti dritto in {way_name}",
                "destination": "Immettiti dritto verso {destination}"
            },
            "slight left": {
                "default": "Immettiti a sinistra",
                "name": "Immettiti a sinistra in {way_name}",
                "destination": "Immettiti a sinistra verso {destination}"
            },
            "slight right": {
                "default": "Immettiti a destra",
                "name": "Immettiti a destra in {way_name}",
                "destination": "Immettiti a destra verso {destination}"
            },
            "sharp left": {
                "default": "Immettiti a sinistra",
                "name": "Immettiti a sinistra in {way_name}",
                "destination": "Immettiti a sinistra verso {destination}"
            },
            "sharp right": {
                "default": "Immettiti a destra",
                "name": "Immettiti a destra in {way_name}",
                "destination": "Immettiti a destra verso {destination}"
            },
            "uturn": {
                "default": "Fai un'inversione a U",
                "name": "Fai un'inversione a U in {way_name}",
                "destination": "Fai un'inversione a U verso {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Continua a {modifier}",
                "name": "Continua a {modifier} in {way_name}",
                "destination": "Continua a {modifier} verso {destination}"
            },
            "straight": {
                "default": "Continua dritto",
                "name": "Continua in {way_name}",
                "destination": "Continua verso {destination}"
            },
            "sharp left": {
                "default": "Svolta a sinistra",
                "name": "Svolta a sinistra in {way_name}",
                "destination": "Svolta a sinistra verso {destination}"
            },
            "sharp right": {
                "default": "Svolta a destra",
                "name": "Svolta a destra in {way_name}",
                "destination": "Svolta a destra verso {destination}"
            },
            "slight left": {
                "default": "Continua leggermente a sinistra",
                "name": "Continua leggermente a sinistra in {way_name}",
                "destination": "Continua leggermente a sinistra verso {destination}"
            },
            "slight right": {
                "default": "Continua leggermente a destra",
                "name": "Continua leggermente a destra in {way_name} ",
                "destination": "Continua leggermente a destra verso {destination}"
            },
            "uturn": {
                "default": "Fai un'inversione a U",
                "name": "Fai un'inversione a U in {way_name}",
                "destination": "Fai un'inversione a U verso {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Continua a {modifier}",
                "name": "Continua a {modifier} in {way_name}",
                "destination": "Continua a {modifier} verso {destination}"
            },
            "uturn": {
                "default": "Fai un'inversione a U",
                "name": "Fai un'inversione a U in {way_name}",
                "destination": "Fai un'inversione a U verso {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Prendi la rampa",
                "name": "Prendi la rampa in {way_name}",
                "destination": "Prendi la rampa verso {destination}",
                "exit": "Prendi l'uscita {exit}",
                "exit_destination": "Prendi l'uscita  {exit} verso {destination}"
            },
            "left": {
                "default": "Prendi la rampa a sinistra",
                "name": "Prendi la rampa a sinistra in {way_name}",
                "destination": "Prendi la rampa a sinistra verso {destination}",
                "exit": "Prendi l'uscita {exit} a sinistra",
                "exit_destination": "Prendi la {exit}  uscita a sinistra verso {destination}"
            },
            "right": {
                "default": "Prendi la rampa a destra",
                "name": "Prendi la rampa a destra in {way_name}",
                "destination": "Prendi la rampa a destra verso {destination}",
                "exit": "Prendi la {exit} uscita a destra",
                "exit_destination": "Prendi la {exit} uscita a destra verso {destination}"
            },
            "sharp left": {
                "default": "Prendi la rampa a sinistra",
                "name": "Prendi la rampa a sinistra in {way_name}",
                "destination": "Prendi la rampa a sinistra verso {destination}",
                "exit": "Prendi l'uscita {exit} a sinistra",
                "exit_destination": "Prendi la {exit}  uscita a sinistra verso {destination}"
            },
            "sharp right": {
                "default": "Prendi la rampa a destra",
                "name": "Prendi la rampa a destra in {way_name}",
                "destination": "Prendi la rampa a destra verso {destination}",
                "exit": "Prendi la {exit} uscita a destra",
                "exit_destination": "Prendi la {exit} uscita a destra verso {destination}"
            },
            "slight left": {
                "default": "Prendi la rampa a sinistra",
                "name": "Prendi la rampa a sinistra in {way_name}",
                "destination": "Prendi la rampa a sinistra verso {destination}",
                "exit": "Prendi l'uscita {exit} a sinistra",
                "exit_destination": "Prendi la {exit}  uscita a sinistra verso {destination}"
            },
            "slight right": {
                "default": "Prendi la rampa a destra",
                "name": "Prendi la rampa a destra in {way_name}",
                "destination": "Prendi la rampa a destra verso {destination}",
                "exit": "Prendi la {exit} uscita a destra",
                "exit_destination": "Prendi la {exit} uscita a destra verso {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Prendi la rampa",
                "name": "Prendi la rampa in {way_name}",
                "destination": "Prendi la rampa verso {destination}"
            },
            "left": {
                "default": "Prendi la rampa a sinistra",
                "name": "Prendi la rampa a sinistra in {way_name}",
                "destination": "Prendi la rampa a sinistra verso {destination}"
            },
            "right": {
                "default": "Prendi la rampa a destra",
                "name": "Prendi la rampa a destra in {way_name}",
                "destination": "Prendi la rampa a destra verso {destination}"
            },
            "sharp left": {
                "default": "Prendi la rampa a sinistra",
                "name": "Prendi la rampa a sinistra in {way_name}",
                "destination": "Prendi la rampa a sinistra verso {destination}"
            },
            "sharp right": {
                "default": "Prendi la rampa a destra",
                "name": "Prendi la rampa a destra in {way_name}",
                "destination": "Prendi la rampa a destra verso {destination}"
            },
            "slight left": {
                "default": "Prendi la rampa a sinistra",
                "name": "Prendi la rampa a sinistra in {way_name}",
                "destination": "Prendi la rampa a sinistra verso {destination}"
            },
            "slight right": {
                "default": "Prendi la rampa a destra",
                "name": "Prendi la rampa a destra in {way_name}",
                "destination": "Prendi la rampa a destra verso {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Immettiti nella rotonda",
                    "name": "Immettiti nella ritonda ed esci in {way_name}",
                    "destination": "Immettiti nella ritonda ed esci verso {destination}"
                },
                "name": {
                    "default": "Immettiti in {rotary_name}",
                    "name": "Immettiti in {rotary_name} ed esci su {way_name}",
                    "destination": "Immettiti in {rotary_name} ed esci verso {destination}"
                },
                "exit": {
                    "default": "Immettiti nella rotonda e prendi la {exit_number} uscita",
                    "name": "Immettiti nella rotonda e prendi la {exit_number} uscita in {way_name}",
                    "destination": "Immettiti nella rotonda e prendi la {exit_number} uscita verso   {destination}"
                },
                "name_exit": {
                    "default": "Immettiti in {rotary_name} e prendi la {exit_number} uscita",
                    "name": "Immettiti in {rotary_name} e prendi la {exit_number} uscita in {way_name}",
                    "destination": "Immettiti in {rotary_name} e prendi la {exit_number}  uscita verso {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Immettiti nella rotonda e prendi la {exit_number} uscita",
                    "name": "Immettiti nella rotonda e prendi la {exit_number} uscita in {way_name}",
                    "destination": "Immettiti nella rotonda e prendi la {exit_number} uscita verso {destination}"
                },
                "default": {
                    "default": "Entra nella rotonda",
                    "name": "Entra nella rotonda e prendi l'uscita in {way_name}",
                    "destination": "Entra nella rotonda e prendi l'uscita verso {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Fai una {modifier}",
                "name": "Fai una {modifier} in {way_name}",
                "destination": "Fai una {modifier} verso {destination}"
            },
            "left": {
                "default": "Svolta a sinistra",
                "name": "Svolta a sinistra in {way_name}",
                "destination": "Svolta a sinistra verso {destination}"
            },
            "right": {
                "default": "Gira a destra",
                "name": "Svolta a destra in {way_name}",
                "destination": "Svolta a destra verso {destination}"
            },
            "straight": {
                "default": "Continua dritto",
                "name": "Continua dritto in {way_name}",
                "destination": "Continua dritto verso {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Fai una {modifier}",
                "name": "Fai una {modifier} in {way_name}",
                "destination": "Fai una {modifier} verso {destination}"
            },
            "left": {
                "default": "Svolta a sinistra",
                "name": "Svolta a sinistra in {way_name}",
                "destination": "Svolta a sinistra verso {destination}"
            },
            "right": {
                "default": "Gira a destra",
                "name": "Svolta a destra in {way_name}",
                "destination": "Svolta a destra verso {destination}"
            },
            "straight": {
                "default": "Continua dritto",
                "name": "Continua dritto in {way_name}",
                "destination": "Continua dritto verso {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Fai una {modifier}",
                "name": "Fai una {modifier} in {way_name}",
                "destination": "Fai una {modifier} verso {destination}"
            },
            "left": {
                "default": "Svolta a sinistra",
                "name": "Svolta a sinistra in {way_name}",
                "destination": "Svolta a sinistra verso {destination}"
            },
            "right": {
                "default": "Gira a destra",
                "name": "Svolta a destra in {way_name}",
                "destination": "Svolta a destra verso {destination}"
            },
            "straight": {
                "default": "Prosegui dritto",
                "name": "Continua su {way_name}",
                "destination": "Continua verso {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Fai una {modifier}",
                "name": "Fai una {modifier} in {way_name}",
                "destination": "Fai una {modifier} verso {destination}"
            },
            "left": {
                "default": "Svolta a sinistra",
                "name": "Svolta a sinistra in {way_name}",
                "destination": "Svolta a sinistra verso {destination}"
            },
            "right": {
                "default": "Gira a destra",
                "name": "Svolta a destra in {way_name}",
                "destination": "Svolta a destra verso {destination}"
            },
            "straight": {
                "default": "Prosegui dritto",
                "name": "Continua su {way_name}",
                "destination": "Continua verso {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Continua dritto"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],34:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": false
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "첫번쩨",
                "2": "두번째",
                "3": "세번째",
                "4": "네번쩨",
                "5": "다섯번째",
                "6": "여섯번째",
                "7": "일곱번째",
                "8": "여덟번째",
                "9": "아홉번째",
                "10": "열번째"
            },
            "direction": {
                "north": "북쪽",
                "northeast": "북동쪽",
                "east": "동쪽",
                "southeast": "남동쪽",
                "south": "남쪽",
                "southwest": "남서쪽",
                "west": "서쪽",
                "northwest": "북서쪽"
            },
            "modifier": {
                "left": "좌회전",
                "right": "우회전",
                "sharp left": "바로좌회전",
                "sharp right": "바로우회전",
                "slight left": "조금왼쪽",
                "slight right": "조금오른쪽",
                "straight": "직진",
                "uturn": "유턴"
            },
            "lanes": {
                "xo": "우측차선 유지",
                "ox": "좌측차선 유지",
                "xox": "중앙유지",
                "oxo": "계속 좌측 또는 우측 차선"
            }
        },
        "modes": {
            "ferry": {
                "default": "페리를 타시오",
                "name": "페리를 타시오 {way_name}",
                "destination": "페리를 타고 {destination}까지 가세요."
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, 그리고, {distance} 안에, {instruction_two}",
            "two linked": "{instruction_one}, 그리고 {instruction_two}",
            "one in distance": "{distance} 내에, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "{exit}번으로 나가세요."
        },
        "arrive": {
            "default": {
                "default": " {nth}목적지에 도착하였습니다.",
                "upcoming": "{nth}목적지에 곧 도착할 예정입니다.",
                "short": "도착하였습니다",
                "short-upcoming": "도착할 예정입니다.",
                "named": "경유지 {waypoint_name}에 도착하였습니다."
            },
            "left": {
                "default": "좌측에 {nth} 목적지가 있습니다.",
                "upcoming": "좌측에 {nth} 목적지에 도착할 예정입니다.",
                "short": "도착하였습니다",
                "short-upcoming": "목적지에 곧 도착할 예정입니다.",
                "named": "좌측에 경유지 {waypoint_name}에 도착하였습니다."
            },
            "right": {
                "default": "우측에 {nth} 목적지가 있습니다.",
                "upcoming": "우측에 {nth} 목적지에 도착할 예정입니다.",
                "short": "도착하였습니다",
                "short-upcoming": "목적지에 곧 도착할 예정입니다.",
                "named": "우측에 경유지 {waypoint_name}에 도착하였습니다."
            },
            "sharp left": {
                "default": "좌측에 {nth} 목적지가 있습니다.",
                "upcoming": "좌측에 {nth} 목적지에 도착할 예정입니다.",
                "short": "도착하였습니다",
                "short-upcoming": "목적지에 곧 도착할 예정입니다.",
                "named": "좌측에 경유지 {waypoint_name}에 도착하였습니다."
            },
            "sharp right": {
                "default": "우측에 {nth} 목적지가 있습니다.",
                "upcoming": "우측에 {nth} 목적지에 도착할 예정입니다.",
                "short": "도착하였습니다",
                "short-upcoming": "목적지에 곧 도착할 예정입니다.",
                "named": "우측에 경유지 {waypoint_name}에 도착하였습니다."
            },
            "slight right": {
                "default": "우측에 {nth} 목적지가 있습니다.",
                "upcoming": "우측에 {nth} 목적지에 도착할 예정입니다.",
                "short": "도착하였습니다",
                "short-upcoming": "목적지에 곧 도착할 예정입니다.",
                "named": "우측에 경유지 {waypoint_name}에 도착하였습니다."
            },
            "slight left": {
                "default": "좌측에 {nth} 목적지가 있습니다.",
                "upcoming": "좌측에 {nth} 목적지에 도착할 예정입니다.",
                "short": "도착하였습니다",
                "short-upcoming": "목적지에 곧 도착할 예정입니다.",
                "named": "좌측에 경유지 {waypoint_name}에 도착하였습니다."
            },
            "straight": {
                "default": "바로 앞에 {nth} 목적지가 있습니다.",
                "upcoming": "직진하시면 {nth} 목적지에 도착할 예정입니다.",
                "short": "도착하였습니다",
                "short-upcoming": "목적지에 곧 도착할 예정입니다.",
                "named": "정면에 경유지 {waypoint_name}에 도착하였습니다."
            }
        },
        "continue": {
            "default": {
                "default": "{modifier} 회전",
                "name": "{modifier} 회전하고 {way_name}로 직진해 주세요.",
                "destination": "{modifier} 회전하고 {destination}까지 가세요.",
                "exit": "{way_name} 쪽으로 {modifier} 회전 하세요."
            },
            "straight": {
                "default": "계속 직진해 주세요.",
                "name": "{way_name} 로 계속 직진해 주세요.",
                "destination": "{destination}까지 직진해 주세요.",
                "distance": "{distance}까지 직진해 주세요.",
                "namedistance": "{distance}까지 {way_name}로 가주세요."
            },
            "sharp left": {
                "default": "급좌회전 하세요.",
                "name": "급좌회전 하신 후 {way_name}로 가세요.",
                "destination": "급좌회전 하신 후 {destination}로 가세요."
            },
            "sharp right": {
                "default": "급우회전 하세요.",
                "name": "급우회전 하고 {way_name}로 가세요.",
                "destination": "급우회전 하신 후 {destination}로 가세요."
            },
            "slight left": {
                "default": "약간 좌회전하세요.",
                "name": "약간 좌회전 하고 {way_name}로 가세요.",
                "destination": "약간 좌회전 하신 후 {destination}로 가세요."
            },
            "slight right": {
                "default": "약간 우회전하세요.",
                "name": "약간 우회전 하고 {way_name}로 가세요.",
                "destination": "약간 우회전 하신 후 {destination}로 가세요."
            },
            "uturn": {
                "default": "유턴 하세요",
                "name": "유턴해서 {way_name}로 가세요.",
                "destination": "유턴하신 후 {destination}로 가세요."
            }
        },
        "depart": {
            "default": {
                "default": "{direction}로 가세요",
                "name": "{direction} 로 가서 {way_name} 를 이용하세요. ",
                "namedistance": "{direction}로 가서{way_name} 를 {distance}까지 가세요."
            }
        },
        "end of road": {
            "default": {
                "default": "{modifier} 회전하세요.",
                "name": "{modifier}회전하고 {way_name}로 가세요.",
                "destination": "{modifier}회전 하신 후 {destination}로 가세요."
            },
            "straight": {
                "default": "계속 직진해 주세요.",
                "name": "{way_name}로 계속 직진해 주세요.",
                "destination": "{destination}까지 직진해 주세요."
            },
            "uturn": {
                "default": "도로 끝까지 가서 유턴해 주세요.",
                "name": "도로 끝까지 가서 유턴해서 {way_name}로 가세요.",
                "destination": "도로 끝까지 가서 유턴해서 {destination} 까지 가세요."
            }
        },
        "fork": {
            "default": {
                "default": "갈림길에서 {modifier} 으로 가세요.",
                "name": "{modifier}하고 {way_name}로 가세요.",
                "destination": "{modifier}하고 {destination}까지 가세요."
            },
            "slight left": {
                "default": "갈림길에서 좌회전 하세요.",
                "name": "좌회전 해서 {way_name}로 가세요.",
                "destination": "좌회전 해서 {destination}까지 가세요."
            },
            "slight right": {
                "default": "갈림길에서 우회전 하세요.",
                "name": "우회전 해서 {way_name}로 가세요.",
                "destination": "우회전 해서 {destination}까지 가세요."
            },
            "sharp left": {
                "default": "갈림길에서 급좌회전 하세요.",
                "name": "급좌회전 해서 {way_name}로 가세요.",
                "destination": "급좌회전 해서 {destination}까지 가세요."
            },
            "sharp right": {
                "default": "갈림길에서 급우회전 하세요.",
                "name": "급우회전 해서 {way_name}로 가세요.",
                "destination": "급우회전 해서 {destination}까지 가세요."
            },
            "uturn": {
                "default": "유턴하세요.",
                "name": "유턴해서 {way_name}로 가세요.",
                "destination": "유턴해서 {destination}까지 가세요."
            }
        },
        "merge": {
            "default": {
                "default": "{modifier} 합류",
                "name": "{modifier} 합류하여 {way_name}로 가세요.",
                "destination": "{modifier} 합류하여 {destination}로 가세요."
            },
            "straight": {
                "default": "합류",
                "name": "{way_name}로 합류하세요.",
                "destination": "{destination}로 합류하세요."
            },
            "slight left": {
                "default": "좌측으로 합류하세요.",
                "name": "좌측{way_name}로 합류하세요.",
                "destination": "좌측으로 합류하여 {destination}까지 가세요."
            },
            "slight right": {
                "default": "우측으로 합류하세요.",
                "name": "우측{way_name}로 합류하세요.",
                "destination": "우측으로 합류하여 {destination}까지 가세요."
            },
            "sharp left": {
                "default": "좌측으로 합류하세요.",
                "name": "좌측{way_name}로 합류하세요.",
                "destination": "좌측으로 합류하여 {destination}까지 가세요."
            },
            "sharp right": {
                "default": "우측으로 합류하세요.",
                "name": "우측{way_name}로 합류하세요.",
                "destination": "우측으로 합류하여 {destination}까지 가세요."
            },
            "uturn": {
                "default": "유턴하세요.",
                "name": "유턴해서 {way_name}로 가세요.",
                "destination": "유턴해서 {destination}까지 가세요."
            }
        },
        "new name": {
            "default": {
                "default": "{modifier} 유지하세요.",
                "name": "{modifier} 유지해서 {way_name}로 가세요.",
                "destination": "{modifier} 유지해서 {destination}까지 가세요."
            },
            "straight": {
                "default": "직진해주세요.",
                "name": "{way_name}로 계속 가세요.",
                "destination": "{destination}까지 계속 가세요."
            },
            "sharp left": {
                "default": "급좌회전 하세요.",
                "name": "급좌회전 해서 {way_name}로 가세요.",
                "destination": "급좌회전 해서 {destination}까지 가세요."
            },
            "sharp right": {
                "default": "급우회전 하세요.",
                "name": "급우회전 해서 {way_name}로 가세요.",
                "destination": "급우회전 해서 {destination}까지 가세요."
            },
            "slight left": {
                "default": "약간 좌회전 해세요.",
                "name": "약간 좌회전해서 {way_name}로 가세요.",
                "destination": "약간 좌회전 해서 {destination}까지 가세요."
            },
            "slight right": {
                "default": "약간 우회전 해세요.",
                "name": "약간 우회전해서 {way_name}로 가세요.",
                "destination": "약간 우회전 해서 {destination}까지 가세요."
            },
            "uturn": {
                "default": "유턴해주세요.",
                "name": "유턴해서 {way_name}로 가세요.",
                "destination": "유턴해서 {destination}까지 가세요."
            }
        },
        "notification": {
            "default": {
                "default": "{modifier} 하세요.",
                "name": "{modifier}해서 {way_name}로 가세요.",
                "destination": "{modifier}해서 {destination}까지 가세요."
            },
            "uturn": {
                "default": "유턴하세요.",
                "name": "유턴해서 {way_name}로 가세요.",
                "destination": "유턴해서 {destination}까지 가세요."
            }
        },
        "off ramp": {
            "default": {
                "default": "램프로 진출해 주세요..",
                "name": "램프로 진출해서 {way_name}로 가세요.",
                "destination": "램프로 진출해서 {destination}까지 가세요.",
                "exit": "{exit} 출구로 나가세요.",
                "exit_destination": "{exit} 출구로 나가서 {destination}까지 가세요."
            },
            "left": {
                "default": "왼쪽의 램프로 진출해 주세요.",
                "name": "왼쪽의 램프로 진출해서 {way_name}로 가세요.",
                "destination": "왼쪽의 램프로 진출해서 {destination}까지 가세요.",
                "exit": "{exit} 왼쪽의 출구로 나가세요.",
                "exit_destination": "{exit} 왼쪽의 출구로 가나서 {destination}까지 가세요."
            },
            "right": {
                "default": "오른쪽의 램프로 진출해 주세요.",
                "name": "오른쪽의 램프로 진출해서 {way_name}로 가세요.",
                "destination": "오른쪽의 램프로 진출해서 {destination}까지 가세요.",
                "exit": "{exit} 오른쪽의 출구로 나가세요.",
                "exit_destination": "{exit} 오른쪽의 출구로 가나서 {destination}까지 가세요."
            },
            "sharp left": {
                "default": "왼쪽의 램프로 진출해 주세요.",
                "name": "왼쪽의 램프로 진출해서 {way_name}로 가세요.",
                "destination": "왼쪽의 램프로 진출해서 {destination}까지 가세요.",
                "exit": "{exit} 왼쪽의 출구로 나가세요.",
                "exit_destination": "{exit} 왼쪽의 출구로 가나서 {destination}까지 가세요."
            },
            "sharp right": {
                "default": "오른쪽의 램프로 진출해 주세요.",
                "name": "오른쪽의 램프로 진출해서 {way_name}로 가세요.",
                "destination": "오른쪽의 램프로 진출해서 {destination}까지 가세요.",
                "exit": "{exit} 오른쪽의 출구로 나가세요.",
                "exit_destination": "{exit} 오른쪽의 출구로 가나서 {destination}까지 가세요."
            },
            "slight left": {
                "default": "왼쪽의 램프로 진출해 주세요.",
                "name": "왼쪽의 램프로 진출해서 {way_name}로 가세요.",
                "destination": "왼쪽의 램프로 진출해서 {destination}까지 가세요.",
                "exit": "{exit} 왼쪽의 출구로 나가세요.",
                "exit_destination": "{exit} 왼쪽의 출구로 가나서 {destination}까지 가세요."
            },
            "slight right": {
                "default": "오른쪽의 램프로 진출해 주세요.",
                "name": "오른쪽의 램프로 진출해서 {way_name}로 가세요.",
                "destination": "오른쪽의 램프로 진출해서 {destination}까지 가세요.",
                "exit": "{exit} 오른쪽의 출구로 나가세요.",
                "exit_destination": "{exit} 오른쪽의 출구로 가나서 {destination}까지 가세요."
            }
        },
        "on ramp": {
            "default": {
                "default": "램프로 진입해 주세요..",
                "name": "램프로 진입해서 {way_name}로 가세요.",
                "destination": "램프로 진입해서 {destination}까지 가세요."
            },
            "left": {
                "default": "왼쪽의 램프로 진입해 주세요.",
                "name": "왼쪽의 램프로 진입해서 {way_name}로 가세요.",
                "destination": "왼쪽의 램프로 진입해서 {destination}까지 가세요."
            },
            "right": {
                "default": "오른쪽의 램프로 진입해 주세요.",
                "name": "오른쪽의 램프로 진입해서 {way_name}로 가세요.",
                "destination": "오른쪽의 램프로 진입해서 {destination}까지 가세요."
            },
            "sharp left": {
                "default": "왼쪽의 램프로 진입해 주세요.",
                "name": "왼쪽의 램프로 진입해서 {way_name}로 가세요.",
                "destination": "왼쪽의 램프로 진입해서 {destination}까지 가세요."
            },
            "sharp right": {
                "default": "오른쪽의 램프로 진입해 주세요.",
                "name": "오른쪽의 램프로 진입해서 {way_name}로 가세요.",
                "destination": "오른쪽의 램프로 진입해서 {destination}까지 가세요."
            },
            "slight left": {
                "default": "왼쪽의 램프로 진입해 주세요.",
                "name": "왼쪽의 램프로 진입해서 {way_name}로 가세요.",
                "destination": "왼쪽의 램프로 진입해서 {destination}까지 가세요."
            },
            "slight right": {
                "default": "오른쪽의 램프로 진입해 주세요.",
                "name": "오른쪽의 램프로 진입해서 {way_name}로 가세요.",
                "destination": "오른쪽의 램프로 진입해서 {destination}까지 가세요."
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "로터리로 진입하세요.",
                    "name": "로터리로 진입해서 {way_name} 나가세요.",
                    "destination": "로터리로 진입해서 {destination}로 나가세요."
                },
                "name": {
                    "default": "{rotary_name}로 진입하세요.",
                    "name": "{rotary_name}로 진입해서 {way_name}로 나가세요.",
                    "destination": "{rotary_name}로 진입해서 {destination}로 나가세요."
                },
                "exit": {
                    "default": "로터리로 진입해서 {exit_number} 출구로 나가세요.",
                    "name": "로터리로 진입해서 {exit_number} 출구로 나가 {way_name}로 가세요.",
                    "destination": "로터리로 진입해서 {exit_number} 출구로 나가 {destination}로 가세요."
                },
                "name_exit": {
                    "default": "{rotary_name}로 진입해서 {exit_number}번 출구로 나가세요.",
                    "name": "{rotary_name}로 진입해서 {exit_number}번 출구로 나가 {way_name}로 가세요.",
                    "destination": "{rotary_name}로 진입해서 {exit_number}번 출구로 나가 {destination}로 가세요."
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "로터리로 진입해서 {exit_number}로 나가세요.",
                    "name": "로터리로 진입해서 {exit_number}로 나가서 {way_name}로 가세요.",
                    "destination": "로터리로 진입해서 {exit_number}로 나가서 {destination}로 가세요."
                },
                "default": {
                    "default": "로터리로 진입하세요.",
                    "name": "로터리로 진입해서 {way_name} 나가세요.",
                    "destination": "로터리로 진입해서 {destination}로 나가세요."
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "{modifier} 하세요.",
                "name": "{modifier} 하시고 {way_name}로 가세요.",
                "destination": "{modifier} 하시고 {destination}까지 가세요."
            },
            "left": {
                "default": "좌회전 하세요.",
                "name": "좌회전 하시고 {way_name}로 가세요.",
                "destination": "좌회전 하시고 {destination}까지 가세요."
            },
            "right": {
                "default": "우회전 하세요.",
                "name": "우회전 하시고 {way_name}로 가세요.",
                "destination": "우회전 하시고 {destination}까지 가세요."
            },
            "straight": {
                "default": "직진 하세요.",
                "name": "직진하시고 {way_name}로 가세요.",
                "destination": "직진하시고 {destination}까지 가세요."
            }
        },
        "exit roundabout": {
            "default": {
                "default": "로타리에서 진출하세요.",
                "name": "로타리에서 진출해서 {way_name}로 가세요.",
                "destination": "로타리에서 진출해서 {destination}까지 가세요."
            }
        },
        "exit rotary": {
            "default": {
                "default": "로타리에서 진출하세요.",
                "name": "로타리에서 진출해서 {way_name}로 가세요.",
                "destination": "로타리에서 진출해서 {destination}까지 가세요."
            }
        },
        "turn": {
            "default": {
                "default": "{modifier} 하세요.",
                "name": "{modifier} 하시고 {way_name}로 가세요.",
                "destination": "{modifier} 하시고 {destination}까지 가세요."
            },
            "left": {
                "default": "좌회전 하세요.",
                "name": "좌회전 하시고 {way_name}로 가세요.",
                "destination": "좌회전 하시고 {destination}까지 가세요."
            },
            "right": {
                "default": "우회전 하세요.",
                "name": "우회전 하시고 {way_name}로 가세요.",
                "destination": "우회전 하시고 {destination}까지 가세요."
            },
            "straight": {
                "default": "직진 하세요.",
                "name": "직진하시고 {way_name}로 가세요.",
                "destination": "직진하시고 {destination}까지 가세요."
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "직진하세요."
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],35:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": false
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "ပထမ",
                "2": "ဒုတိယ",
                "3": "တတိယ",
                "4": "စတုတၳ",
                "5": "ပဥၥမ",
                "6": "ဆဌမ",
                "7": "သတၱမ",
                "8": "အဌမ",
                "9": "နဝမ",
                "10": "ဒသမ"
            },
            "direction": {
                "north": "ေျမာက္အရပ္",
                "northeast": "အေရွ႕ေျမာက္အရပ္",
                "east": "အေရွ႕အရပ္",
                "southeast": "အေရွ႕ေတာင္အရပ္",
                "south": "ေတာင္အရပ္",
                "southwest": "အေနာက္ေတာင္အရပ္",
                "west": "အေနာက္အရပ္",
                "northwest": "အေနာက္ေျမာက္အရပ္"
            },
            "modifier": {
                "left": "ဘယ္ဘက္",
                "right": "ညာဘက္",
                "sharp left": "ဘယ္ဘက္ ေထာင့္ခ်ိဳး",
                "sharp right": "ညာဘက္ ေထာင္႔ခ်ိဳး",
                "slight left": "ဘယ္ဘက္ အနည္းငယ္",
                "slight right": "ညာဘက္ အနည္းငယ္",
                "straight": "ေျဖာင္႔ေျဖာင္႔တန္းတန္း",
                "uturn": "ဂ-ေကြ႔"
            },
            "lanes": {
                "xo": "ညာဘက္သို႕ဆက္သြားပါ",
                "ox": "ဘယ္ဘက္သို႕ဆက္သြားပါ",
                "xox": "အလယ္တြင္ဆက္ေနပါ",
                "oxo": "ဘယ္ သို႕မဟုတ္ ညာဘက္သို႕ ဆက္သြားပါ"
            }
        },
        "modes": {
            "ferry": {
                "default": "ဖယ္ရီ စီးသြားပါ",
                "name": "{way_name}ကို ဖယ္ရီစီးသြားပါ",
                "destination": "{destination}ဆီသို႕ ဖယ္ရီစီးသြားပါ"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}ျပီးေနာက္ {distance}အတြင္း {instruction_two}",
            "two linked": "{instruction_one}ျပီးေနာက္ {instruction_two}",
            "one in distance": "{distance}အတြင္း {instruction_one}",
            "name and ref": "{name}( {ref})",
            "exit with number": "{exit}မွထြက္ပါ"
        },
        "arrive": {
            "default": {
                "default": "{nth}သင္ သြားလိုေသာ ခရီးပန္းတိုင္သို႕ေရာက္ရွိျပီ",
                "upcoming": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ေရာက္လိမ့္မည္",
                "short": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္ရိွၿပီ",
                "short-upcoming": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္လိမ့္မည္",
                "named": "သင္ သည္ {waypoint_name} မွာ ေရာက္ရွိျပီ"
            },
            "left": {
                "default": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ဘယ္ဘက္တြင္ေရာက္ရွိျပီ",
                "upcoming": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ဘယ္ဘက္တြင္ေရာက္လိမ့္မည္",
                "short": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္ရိွၿပီ",
                "short-upcoming": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္လိမ့္မည္",
                "named": "သင္ သည္ {waypoint_name}မွာဘယ္ဘက္ေကြ႕ကာ ေရာက္ရွိျပီ"
            },
            "right": {
                "default": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ ညာဘက္ေကြ႕ကာ ေရာက္ရွိျပီ",
                "upcoming": "သင္ သြားလိုေသာ{nth} ခရီးပန္းတိုင္သို႕ ညာဘက္ေကြ႕ကာ ေရာက္လိမ့္မည္",
                "short": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္ရိွၿပီ",
                "short-upcoming": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္လိမ့္မည္",
                "named": "သင္ သည္ {waypoint_name} မွာညာဘက္ေကြ႕ကာ ေရာက္ရွိျပီ"
            },
            "sharp left": {
                "default": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ဘယ္ဘက္တြင္ေရာက္ရွိျပီ",
                "upcoming": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ဘယ္ဘက္တြင္ေရာက္ရွိျပီ",
                "short": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္ရိွၿပီ",
                "short-upcoming": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္လိမ့္မည္",
                "named": "သင္ သည္ {waypoint_name}မွာဘယ္ဘက္ေကြ႕ကာ ေရာက္ရွိျပီ"
            },
            "sharp right": {
                "default": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ ညာဘက္ေကြ႕ကာ ေရာက္ရွိျပီ",
                "upcoming": "သင္ သြားလိုေသာ{nth} ခရီးပန္းတိုင္သို႕ ညာဘက္ေကြ႕ကာ ေရာက္လိမ့္မည္",
                "short": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္ရိွၿပီ",
                "short-upcoming": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္လိမ့္မည္",
                "named": "သင္ သည္ {waypoint_name} မွာညာဘက္ေကြ႕ကာ ေရာက္ရွိျပီ"
            },
            "slight right": {
                "default": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ ညာဘက္ေကြ႕ကာ ေရာက္ရွိျပီ",
                "upcoming": "သင္ သြားလိုေသာ{nth} ခရီးပန္းတိုင္သို႕ ညာဘက္ေကြ႕ကာ ေရာက္လိမ့္မည္",
                "short": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္ရိွၿပီ",
                "short-upcoming": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္လိမ့္မည္",
                "named": "သင္ သည္ {waypoint_name} မွာညာဘက္ေကြ႕ကာ ေရာက္ရွိျပီ"
            },
            "slight left": {
                "default": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ဘယ္ဘက္တြင္ေရာက္ရွိျပီ",
                "upcoming": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕ဘယ္ဘက္တြင္ေရာက္ရွိျပီ",
                "short": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္ရွိျပီ",
                "short-upcoming": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္လိမ့္မည္",
                "named": "သင္ သည္ {waypoint_name}မွာဘယ္ဘက္ေကြ႕ကာ ေရာက္ရွိျပီ"
            },
            "straight": {
                "default": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕တည့္တည့္သြားကာရာက္ရွိျပီ",
                "upcoming": "သင္ သြားလိုေသာ {nth}ခရီးပန္းတိုင္သို႕တည့္တည့္သြားကာရာက္ရွိမည္",
                "short": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္ရွိျပီ",
                "short-upcoming": "သင္သြားလိုေသာ ေနရာသို႔ ေရာက္လိမ့္မည္",
                "named": "သင္ သည္ {waypoint_name}မွာတည့္တည့္သြားကာ ေရာက္ရွိျပီ"
            }
        },
        "continue": {
            "default": {
                "default": "{modifier}ကိုလွည့္ပါ",
                "name": "{way_name}​​ေပၚတြင္ေနရန္ {modifier}ကိုလွည့္ပါ",
                "destination": "{destination}ဆီသို႕ {modifier}ကို လွည္႕ပါ",
                "exit": "{way_name}​​ေပၚသို႕ {modifier}ကိုလွည့္ပါ"
            },
            "straight": {
                "default": "ေျဖာင္႔ေျဖာင္႔တန္းတန္း ဆက္သြားပါ",
                "name": "{way_name}​​ေပၚတြင္ေနရန္တည္တည့္ဆက္သြာပါ",
                "destination": "{destination}ဆီသို႕ဆက္သြားပါ",
                "distance": "{distance}ေလာက္ တည့္တည့္ ဆက္သြားပါ",
                "namedistance": "{way_name}​​ေပၚတြင္{distance}ေလာက္ဆက္သြားပါ"
            },
            "sharp left": {
                "default": "ဘယ္ဘက္ေထာင့္ခ်ိဳးေကြ႕ပါ",
                "name": "{way_name}​ေပၚတြင္ေနရန္ ဘယ္ဘက္ေထာင့္ခ်ိဳးေကြ႕ပါ",
                "destination": "{destination}ဆီသို႕ ဘယ္ဘက္ေထာင့္ခ်ိဳးေကြ႕ပါ"
            },
            "sharp right": {
                "default": "ညာဘက္ ေထာင္႔ခ်ိဳးေကြ႕ပါ",
                "name": "{way_name}​ေပၚတြင္ေနရန္ ညာဘက္ေထာင့္ခ်ိဳးေကြ႕ပါ",
                "destination": "{destination}ဆီသို႕ ညာဘက္ေထာင့္ခ်ိဳးေကြ႕ပါ"
            },
            "slight left": {
                "default": "ဘယ္ဘက္ အနည္းငယ္ေကြ႕ပါ",
                "name": "{way_name}​ေပၚတြင္ေနရန္ ဘယ္ဘက္အနည္းငယ္ေကြ႕ပါ",
                "destination": "{destination}ဆီသို႕ ဘယ္ဘက္အနည္းငယ္ခ်ိဳးေကြ႕ပါ"
            },
            "slight right": {
                "default": "ညာဘက္ အနည္းငယ္ခ်ိဳးေကြ႕ပါ",
                "name": "{way_name}​ေပၚတြင္ေနရန္ ညာဘက္အနည္းငယ္ေကြ႕ပါ",
                "destination": "{destination}ဆီသို႕ ညာဘက္အနည္းငယ္ခ်ိဳးေကြ႕ပါ"
            },
            "uturn": {
                "default": "ဂ-ေကြ႔ ေကြ႔ပါ",
                "name": "{way_name}လမ္းဘက္သို႕ ဂ-ေကြ႕ေကြ႕ျပီးဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ ဂေကြ႕ခ်ိဳးေကြ႕ပါ"
            }
        },
        "depart": {
            "default": {
                "default": "{direction}သို႕ ဦးတည္ပါ",
                "name": "{direction}ကို {way_name}အေပၚတြင္ ဦးတည္ပါ",
                "namedistance": "{direction}ကို {way_name}အေပၚတြင္{distance}ေလာက္ ဦးတည္ဆက္သြားပါ"
            }
        },
        "end of road": {
            "default": {
                "default": "{modifier}သို႕လွည့္ပါ",
                "name": "{way_name}​​ေပၚသို႕ {modifier}ကိုလွည့္ပါ",
                "destination": "{destination}ဆီသို႕ {modifier}ကို လွည္႕ပါ"
            },
            "straight": {
                "default": "ေျဖာင္႔ေျဖာင္႔တန္းတန္း ဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕တည့္တည့္ဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕တည့္တည့္ဆက္သြားပါ"
            },
            "uturn": {
                "default": "လမ္းအဆံုးတြင္ ဂ-ေကြ႕ေကြ႕ပါ",
                "name": "လမ္းအဆံုးတြင္ {way_name}​​ေပၚသို႕ဂ-ေကြ႕ေကြ႕ပါ",
                "destination": "လမ္းအဆံုးတြင္{destination}ဆီသို႕ ဂေကြ႕ခ်ိဳးေကြ႕ပါ"
            }
        },
        "fork": {
            "default": {
                "default": "လမ္းဆံုလမ္းခြတြင္ {modifier}ကိုဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕ {modifier}ကိုဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ {modifier}ကို ဆက္သြားပါ"
            },
            "slight left": {
                "default": "လမ္းဆံုလမ္းခြတြင္ဘယ္ဘက္ကိုဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕ဘယ္ဘက္ကိုဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ဘယ္ဘက္ကို ဆက္သြားပါ"
            },
            "slight right": {
                "default": "လမ္းဆံုလမ္းခြတြင္ညာဘက္ကိုဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕ညာဘက္ကိုဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ညာဘက္ကို ဆက္သြားပါ"
            },
            "sharp left": {
                "default": "လမ္းဆံုလမ္းခြတြင္ဘယ္ဘက္ေထာင့္ခ်ိဳးကိုသြားပါ",
                "name": "{way_name}​ေပၚတြင္ေနရန္ ဘယ္ဘက္ေထာင့္ခ်ိဳးယူပါ",
                "destination": "{destination}ဆီသို႕ဘယ္ဘက္ေထာင့္ခ်ိဳး သြားပါ"
            },
            "sharp right": {
                "default": "လမ္းဆံုလမ္းခြတြင္ညာဘက္ေထာင့္ခ်ိဳးကိုသြားပါ",
                "name": "{way_name}​ေပၚသို႕ ညာဘက္ေထာင့္ခ်ိဳးယူပါ",
                "destination": "{destination}ဆီသို႕ညာဘက္ေထာင့္ခ်ိဳး သြားပါ"
            },
            "uturn": {
                "default": "ဂ-ေကြ႔ ေကြ႔ပါ",
                "name": "{way_name}သို႕ဂ-ေကြ႕ေကြ႕ပါ",
                "destination": "{destination}ဆီသို႕ ဂေကြ႕ခ်ိဳးေကြ႕ပါ"
            }
        },
        "merge": {
            "default": {
                "default": "{modifier}ကိုလာေရာက္ေပါင္းဆံုပါ",
                "name": "{way_name}​​ေပၚသို႕ {modifier}ကိုလာေရာက္ေပါင္းဆံုပါ",
                "destination": "{destination}ဆီသို႕ {modifier}ကို လာေရာက္ေပါင္းဆံုပါ"
            },
            "straight": {
                "default": "လာေရာက္ေပါင္းဆံုပါ",
                "name": "{way_name}​​ေပၚသို႕လာေရာက္ေပါင္းဆံုပါ",
                "destination": "{destination}ဆီသို႕ လာေရာက္ေပါင္းဆံုပါ"
            },
            "slight left": {
                "default": "ဘယ္ဘက္သို႕လာေရာက္ေပါင္းဆံုပါ",
                "name": "{way_name}​​ေပၚသို႕ဘယ္ဘက္ကိုလာေရာက္ေပါင္းဆံုပါ",
                "destination": "{destination}ဆီသို႕ဘယ္ဘက္ကို လာေရာက္ေပါင္းဆံုပါ"
            },
            "slight right": {
                "default": "ညာဘက္သို႕လာေရာက္ေပါင္းဆံုပါ",
                "name": "{way_name}​​ေပၚသို႕ညာဘက္ကိုလာေရာက္ေပါင္းဆံုပါ",
                "destination": "{destination}ဆီသို႕ညာဘက္ကို လာေရာက္ေပါင္းဆံုပါ"
            },
            "sharp left": {
                "default": "ဘယ္ဘက္သို႕လာေရာက္ေပါင္းဆံုပါ",
                "name": "{way_name}​​ေပၚသို႕ဘယ္ဘက္ကိုလာေရာက္ေပါင္းဆံုပါ",
                "destination": "{destination}ဆီသို႕ဘယ္ဘက္ကို လာေရာက္ေပါင္းဆံုပါ"
            },
            "sharp right": {
                "default": "ညာဘက္သို႕လာေရာက္ေပါင္းဆံုပါ",
                "name": "{way_name}​​ေပၚသို႕ညာဘက္ကိုလာေရာက္ေပါင္းဆံုပါ",
                "destination": "{destination}ဆီသို႕ညာဘက္ကို လာေရာက္ေပါင္းဆံုပါ"
            },
            "uturn": {
                "default": "ဂ-ေကြ႔ ေကြ႕ပါ",
                "name": "{way_name}လမ္းဘက္သို႔ ဂ-ေကြ႔ ေကြ႔ပါ ",
                "destination": "{destination}ဆီသို႕ ဂေကြ႕ခ်ိဳးေကြ႕ပါ"
            }
        },
        "new name": {
            "default": {
                "default": "{modifier}ကိုဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕ {modifier}ကိုဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ {modifier}ကို ဆက္သြားပါ"
            },
            "straight": {
                "default": "ေျဖာင္႔ေျဖာင္႔တန္းတန္း ဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕ဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ဆက္သြားပါ"
            },
            "sharp left": {
                "default": "ဘယ္ဘက္ေထာင့္ခ်ိဳးယူပါ",
                "name": "{way_name}​ေပၚတြင္ေနရန္ ဘယ္ဘက္ေထာင့္ခ်ိဳးယူပါ",
                "destination": "{destination}ဆီသို႕ဘယ္ဘက္ေထာင့္ခ်ိဳး သြားပါ"
            },
            "sharp right": {
                "default": "ညာဘက္ ေထာင္႔ခ်ိဳးယူပါ",
                "name": "{way_name}​ေပၚသို႕ ညာဘက္ေထာင့္ခ်ိဳးယူပါ",
                "destination": "{destination}ဆီသို႕ညာဘက္ေထာင့္ခ်ိဳး သြားပါ"
            },
            "slight left": {
                "default": "ဘယ္ဘက္ အနည္းငယ္ဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕ဘယ္ဘက္ အနည္းငယ္ဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ဘယ္ဘက္အနည္းငယ္ဆက္သြားပါ"
            },
            "slight right": {
                "default": "ညာဘက္ အနည္းငယ္ဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕ညာဘက္ အနည္းငယ္ဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ညာဘက္အနည္းငယ္ဆက္သြားပါ"
            },
            "uturn": {
                "default": "ဂ-ေကြ႔ ေကြ႔ပါ",
                "name": "{way_name}လမ္းဘက္သို႔ ဂ-ေကြ႔ ေကြ႔ပါ",
                "destination": "{destination}ဆီသို႕ ဂေကြ႕ခ်ိဳးေကြ႕ပါ"
            }
        },
        "notification": {
            "default": {
                "default": "{modifier}ကိုဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕ {modifier}ကိုဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕ {modifier}ကို ဆက္သြားပါ"
            },
            "uturn": {
                "default": "ဂ-ေကြ႔ ေကြ႔ပါ",
                "name": "{way_name}လမ္းဘက္သို႔ ဂ-ေကြ႔ ေကြ႔ပါ",
                "destination": "{destination}ဆီသို႕ ဂေကြ႕ခ်ိဳးေကြ႕ပါ"
            }
        },
        "off ramp": {
            "default": {
                "default": "ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "exit": "{exit}ကို ယူပါ",
                "exit_destination": "{destination}ဆီသို႕ {exit} ကိုယူပါ"
            },
            "left": {
                "default": "ဘယ္ဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ဘယ္ဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ဘယ္ဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "exit": "ဘယ္ဘက္တြင္{exit}ကို ယူပါ",
                "exit_destination": "{destination}ဆီသို႕ဘယ္ဘက္မွ {exit} ကိုယူပါ"
            },
            "right": {
                "default": "ညာဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ညာဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ညာဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "exit": "ညာဘက္တြင္{exit}ကို ယူပါ",
                "exit_destination": "{destination}ဆီသို႕ညာဘက္မွ {exit} ကိုယူပါ"
            },
            "sharp left": {
                "default": "ဘယ္ဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ဘယ္ဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ဘယ္ဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "exit": "ဘယ္ဘက္တြင္{exit}ကို ယူပါ",
                "exit_destination": "{destination}ဆီသို႕ဘယ္ဘက္မွ {exit} ကိုယူပါ"
            },
            "sharp right": {
                "default": "ညာဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ညာဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ညာဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "exit": "ညာဘက္တြင္{exit}ကို ယူပါ",
                "exit_destination": "{destination}ဆီသို႕ညာဘက္မွ {exit} ကိုယူပါ"
            },
            "slight left": {
                "default": "ဘယ္ဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ဘယ္ဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ဘယ္ဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "exit": "ဘယ္ဘက္တြင္{exit}ကို ယူပါ",
                "exit_destination": "{destination}ဆီသို႕ဘယ္ဘက္မွ {exit} ကိုယူပါ"
            },
            "slight right": {
                "default": "ညာဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ညာဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ညာဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "exit": "ညာဘက္တြင္{exit}ကို ယူပါ",
                "exit_destination": "{destination}ဆီသို႕ညာဘက္မွ {exit} ကိုယူပါ"
            }
        },
        "on ramp": {
            "default": {
                "default": "ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ခ်ဥ္းကပ္လမ္းကိုယူပါ"
            },
            "left": {
                "default": "ဘယ္ဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ဘယ္ဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ဘယ္ဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ"
            },
            "right": {
                "default": "ညာဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ညာဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ညာဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ"
            },
            "sharp left": {
                "default": "ဘယ္ဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ဘယ္ဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ဘယ္ဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ"
            },
            "sharp right": {
                "default": "ညာဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ညာဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ညာဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ"
            },
            "slight left": {
                "default": "ဘယ္ဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ဘယ္ဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ဘယ္ဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ"
            },
            "slight right": {
                "default": "ညာဘက္သို႕ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "name": "{way_name}​ေပၚသို႕ညာဘက္ ​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ",
                "destination": "{destination}ဆီသို႕ ညာဘက္​ေပၚတြင္ခ်ဥ္းကပ္လမ္းကိုယူပါ"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "အဝိုင္းပတ္သို႕ဝင္ပါ",
                    "name": "{way_name}ေပၚသို႔အဝိုင္းပတ္လမ္းမွထြက္ပါ ",
                    "destination": "{destination}ေပၚသို႔အဝိုင္းပတ္လမ္းမွထြက္ပါ"
                },
                "name": {
                    "default": "{rotary_name}သို႕ဝင္ပါ",
                    "name": "{rotary_name}အဝိုင္းပတ္ဝင္ျပီး{way_name}ေပၚသို႕ထြက္ပါ",
                    "destination": "{rotary_name}အဝိုင္းပတ္ဝင္ျပီး{destination}ဆီသို႕ထြက္ပါ"
                },
                "exit": {
                    "default": "အဝိုင္းပတ္ဝင္ျပီး{exit_number}ကိုယူကာျပန္ထြက္ပါ",
                    "name": "အဝိုင္းပတ္သို႕ဝင္ျပီး{exit_number}ကိုယူကာ{way_name}ေပၚသို႕ထြက္ပါ",
                    "destination": "အဝိုင္းပတ္ဝင္ျပီး{exit_number}ကိုယူကာ{destination}ဆီသို႕ထြက္ပါ"
                },
                "name_exit": {
                    "default": "{rotary_name}ကိုဝင္ျပီး {exit_number}ကိုယူကာထြက္ပါ",
                    "name": "{rotary_name}ကိုဝင္ျပီး{exit_number}ကိုယူကာ{way_name}ေပၚသို႕ထြက္ပါ",
                    "destination": "{rotary_name}ဝင္ျပီး{exit_number}ကိုယူကာ{destination}ဆီသို႕ထြက္ပါ"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "{exit_number}ေပၚသို႔အဝိုင္းပတ္လမ္းမွထြက္ပါ",
                    "name": "အဝိုင္းပတ္ဝင္ျပီး{exit_number}ကိုယူကာ{way_name}ေပၚသို႕ထြက္ပါ",
                    "destination": "အဝိုင္းပတ္ဝင္ျပီး{exit_number}ကိုယူကာ{destination}ဆီသို႕ထြက္ပါ"
                },
                "default": {
                    "default": "အဝိုင္းပတ္ဝင္ပါ",
                    "name": "{way_name}ေပၚသို႔အဝိုင္းပတ္လမ္းမွထြက္ပါ",
                    "destination": "{destination}ေပၚသို႔အဝိုင္းပတ္လမ္းမွထြက္ပါ"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "{modifier}ကိုလွည့္ပါ ",
                "name": "{modifier}​ေပၚသို{way_name}ကိုဆက္သြားပါ ",
                "destination": "{modifier}ဆီသို႕{destination}ကို ဆက္သြားပါ "
            },
            "left": {
                "default": "ဘယ္ဘက္သို႕ျပန္လွည္႔ပါ",
                "name": "{way_name}​ေပၚသို႕ဘယ္ဘက္ကိုဆက္သြားပါ ",
                "destination": "{destination}ဆီသို႕ဘယ္ဘက္မွ ေကြ႔ပါ"
            },
            "right": {
                "default": "ညာဘက္သို႔ျပန္လွည္႔ပါ",
                "name": "{way_name}​ေပၚသို႕ညာဘက္ကိုလာေရာက္ေပါင္းဆံုပါ ",
                "destination": "{destination}ညာဘက္သို႔ ေကြ႔ပါ"
            },
            "straight": {
                "default": "ေျဖာင္႔ေျဖာင္႔တန္းတန္း ဆက္သြားပါ",
                "name": "{way_name}​​ေပၚသို႕တည့္တည့္ဆက္သြားပါ",
                "destination": "{destination}ဆီသို႕တည့္တည့္ဆက္သြားပါ"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "အဝိုင္းပတ္လမ္းမွထြက္ပါ",
                "name": "{way_name}ေပၚသို႔အဝိုင္းပတ္လမ္းမွထြက္ပါ",
                "destination": "ဦးတည္အဝိုင္းပတ္လမ္းမွထြက္ပါ{destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "အဝိုင္းပတ္လမ္းမွထြက္ပါဦးတည္အဝိုင္းပတ္လမ္းမွထြက္ပါ",
                "name": "{way_name}ေပၚသို႔အဝိုင္းပတ္လမ္းမွထြက္ပါ",
                "destination": "ဦးတည္အဝိုင္းပတ္လမ္းမွထြက္ပါ{destination}"
            }
        },
        "turn": {
            "default": {
                "default": "{modifier}ကိုလွည့္ပါ ",
                "name": "{modifier}​ေပၚသို{way_name}ကိုဆက္သြားပါ ",
                "destination": "{modifier}ဆီသို႕{destination}ကို ဆက္သြားပါ "
            },
            "left": {
                "default": "ဘယ္ဘက္သို႕ျပန္လွည္႔ပါ",
                "name": "{way_name}​ေပၚသို႕ဘယ္ဘက္ကိုဆက္သြားပါ ",
                "destination": "{destination}ဘယ္ဘက္သို႔ ေကြ႔ပါ"
            },
            "right": {
                "default": "ညာဘက္သို႔ျပန္လွည္႔ပါ",
                "name": "{way_name}​ေပၚသို႕ညာဘက္ကိုလာေရာက္ေပါင္းဆံုပါ ",
                "destination": "{destination}ညာဘက္သို႔ ေကြ႔ပါ"
            },
            "straight": {
                "default": "တည္႔တည္႔သြားပါ",
                "name": "{way_name}",
                "destination": "{destination}ဆီသို႕တည့္တည့္သြားပါ"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "ေျဖာင္႔ေျဖာင္႔တန္းတန္း ဆက္သြားပါ"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],36:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1e",
                "2": "2e",
                "3": "3e",
                "4": "4e",
                "5": "5e",
                "6": "6e",
                "7": "7e",
                "8": "8e",
                "9": "9e",
                "10": "10e"
            },
            "direction": {
                "north": "noord",
                "northeast": "noordoost",
                "east": "oost",
                "southeast": "zuidoost",
                "south": "zuid",
                "southwest": "zuidwest",
                "west": "west",
                "northwest": "noordwest"
            },
            "modifier": {
                "left": "links",
                "right": "rechts",
                "sharp left": "scherpe bocht naar links",
                "sharp right": "scherpe bocht naar rechts",
                "slight left": "iets naar links",
                "slight right": "iets naar rechts",
                "straight": "rechtdoor",
                "uturn": "omkeren"
            },
            "lanes": {
                "xo": "Rechts aanhouden",
                "ox": "Links aanhouden",
                "xox": "In het midden blijven",
                "oxo": "Links of rechts blijven"
            }
        },
        "modes": {
            "ferry": {
                "default": "Neem de veerpont",
                "name": "Neem de veerpont {way_name}",
                "destination": "Neem de veerpont richting {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, dan na {distance}, {instruction_two}",
            "two linked": "{instruction_one}, daarna {instruction_two}",
            "one in distance": "Over {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "afslag {exit}"
        },
        "arrive": {
            "default": {
                "default": "Je bent gearriveerd op de {nth} bestemming.",
                "upcoming": "U arriveert op de {nth} bestemming",
                "short": "U bent gearriveerd",
                "short-upcoming": "U zult aankomen",
                "named": "U bent gearriveerd bij {waypoint_name}"
            },
            "left": {
                "default": "Je bent gearriveerd. De {nth} bestemming bevindt zich links.",
                "upcoming": "Uw {nth} bestemming bevindt zich aan de linkerkant",
                "short": "U bent gearriveerd",
                "short-upcoming": "U zult aankomen",
                "named": "U bent gearriveerd bij {waypoint_name}, de bestemming is aan de linkerkant"
            },
            "right": {
                "default": "Je bent gearriveerd. De {nth} bestemming bevindt zich rechts.",
                "upcoming": "Uw {nth} bestemming bevindt zich aan de rechterkant",
                "short": "U bent gearriveerd",
                "short-upcoming": "U zult aankomen",
                "named": "U bent gearriveerd bij {waypoint_name}, de bestemming is aan de  rechterkant"
            },
            "sharp left": {
                "default": "Je bent gearriveerd. De {nth} bestemming bevindt zich links.",
                "upcoming": "Uw {nth} bestemming bevindt zich aan de linkerkant",
                "short": "U bent gearriveerd",
                "short-upcoming": "U zult aankomen",
                "named": "U bent gearriveerd bij {waypoint_name}, de bestemming is aan de linkerkant"
            },
            "sharp right": {
                "default": "Je bent gearriveerd. De {nth} bestemming bevindt zich rechts.",
                "upcoming": "Uw {nth} bestemming bevindt zich aan de rechterkant",
                "short": "U bent gearriveerd",
                "short-upcoming": "U zult aankomen",
                "named": "U bent gearriveerd bij {waypoint_name},  de bestemming is aan de rechterkant"
            },
            "slight right": {
                "default": "Je bent gearriveerd. De {nth} bestemming bevindt zich rechts.",
                "upcoming": "Uw {nth} bestemming bevindt zich aan de rechterkant",
                "short": "U bent gearriveerd",
                "short-upcoming": "U zult aankomen",
                "named": "U bent gearriveerd bij {waypoint_name},  de bestemming is aan de rechterkant"
            },
            "slight left": {
                "default": "Je bent gearriveerd. De {nth} bestemming bevindt zich links.",
                "upcoming": "Uw {nth} bestemming bevindt zich aan de linkerkant",
                "short": "U bent gearriveerd",
                "short-upcoming": "U zult aankomen",
                "named": "U bent gearriveerd bij {waypoint_name},  de bestemming is aan de linkerkant"
            },
            "straight": {
                "default": "Je bent gearriveerd. De {nth} bestemming bevindt zich voor je.",
                "upcoming": "Uw {nth} bestemming is recht voor u",
                "short": "U bent gearriveerd",
                "short-upcoming": "U zult aankomen",
                "named": "U bent gearriveerd bij {waypoint_name}, de bestemming is recht voor u"
            }
        },
        "continue": {
            "default": {
                "default": "Ga {modifier}",
                "name": "Sla {modifier} om op {way_name} te blijven",
                "destination": "Ga {modifier} richting {destination}",
                "exit": "Ga {modifier} naar {way_name}"
            },
            "straight": {
                "default": "Ga rechtdoor",
                "name": "Blijf rechtdoor gaan op {way_name}",
                "destination": "Ga rechtdoor richting {destination}",
                "distance": "Ga rechtdoor voor {distance}",
                "namedistance": "Ga verder op {way_name} voor {distance}"
            },
            "sharp left": {
                "default": "Linksaf",
                "name": "Sla scherp links af om op {way_name} te blijven",
                "destination": "Linksaf richting {destination}"
            },
            "sharp right": {
                "default": "Rechtsaf",
                "name": "Sla scherp rechts af om op {way_name} te blijven",
                "destination": "Rechtsaf richting {destination}"
            },
            "slight left": {
                "default": "Ga links",
                "name": "Links afbuigen om op {way_name} te blijven",
                "destination": "Rechts afbuigen om op {destination} te blijven"
            },
            "slight right": {
                "default": "Rechts afbuigen",
                "name": "Rechts afbuigen om op {way_name} te blijven",
                "destination": "Rechts afbuigen richting {destination}"
            },
            "uturn": {
                "default": "Keer om",
                "name": "Draai om en ga verder op {way_name}",
                "destination": "Keer om richting {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Vertrek in {direction}elijke richting",
                "name": "Neem {way_name} in {direction}elijke richting",
                "namedistance": "Ga richting {direction} op {way_name} voor {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Ga {modifier}",
                "name": "Ga {modifier} naar {way_name}",
                "destination": "Ga {modifier} richting {destination}"
            },
            "straight": {
                "default": "Ga in de aangegeven richting",
                "name": "Ga naar {way_name}",
                "destination": "Ga richting {destination}"
            },
            "uturn": {
                "default": "Keer om",
                "name": "Keer om naar {way_name}",
                "destination": "Keer om richting {destination}"
            }
        },
        "fork": {
            "default": {
                "default": "Ga {modifier} op de splitsing",
                "name": "Houd {modifier} aan, tot {way_name}",
                "destination": "Houd {modifier}, in de richting van {destination}"
            },
            "slight left": {
                "default": "Links aanhouden op de splitsing",
                "name": "Houd links aan, tot {way_name}",
                "destination": "Houd links aan, richting {destination}"
            },
            "slight right": {
                "default": "Rechts aanhouden op de splitsing",
                "name": "Houd rechts aan, tot {way_name}",
                "destination": "Houd rechts aan, richting {destination}"
            },
            "sharp left": {
                "default": "Neem bij de splitsing, een scherpe bocht, naar links ",
                "name": "Neem een scherpe bocht naar links, tot aan {way_name}",
                "destination": "Neem een scherpe bocht naar links, richting {destination}"
            },
            "sharp right": {
                "default": "Neem  op de splitsing, een scherpe bocht, naar rechts",
                "name": "Neem een scherpe bocht naar rechts, tot aan {way_name}",
                "destination": "Neem een scherpe bocht naar rechts, richting {destination}"
            },
            "uturn": {
                "default": "Keer om",
                "name": "Keer om naar {way_name}",
                "destination": "Keer om richting {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Bij de splitsing {modifier}",
                "name": "Bij de splitsing {modifier} naar {way_name}",
                "destination": "Bij de splitsing {modifier} richting {destination}"
            },
            "straight": {
                "default": "Samenvoegen",
                "name": "Ga verder op {way_name}",
                "destination": "Ga verder richting {destination}"
            },
            "slight left": {
                "default": "Bij de splitsing links aanhouden",
                "name": "Bij de splitsing links aanhouden naar {way_name}",
                "destination": "Bij de splitsing links aanhouden richting {destination}"
            },
            "slight right": {
                "default": "Bij de splitsing rechts aanhouden",
                "name": "Bij de splitsing rechts aanhouden naar {way_name}",
                "destination": "Bij de splitsing rechts aanhouden richting {destination}"
            },
            "sharp left": {
                "default": "Bij de splitsing linksaf",
                "name": "Bij de splitsing linksaf naar {way_name}",
                "destination": "Bij de splitsing linksaf richting {destination}"
            },
            "sharp right": {
                "default": "Bij de splitsing rechtsaf",
                "name": "Bij de splitsing rechtsaf naar {way_name}",
                "destination": "Bij de splitsing rechtsaf richting {destination}"
            },
            "uturn": {
                "default": "Keer om",
                "name": "Keer om naar {way_name}",
                "destination": "Keer om richting {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Ga {modifier}",
                "name": "Ga {modifier} naar {way_name}",
                "destination": "Ga {modifier} richting {destination}"
            },
            "straight": {
                "default": "Ga in de aangegeven richting",
                "name": "Ga rechtdoor naar {way_name}",
                "destination": "Ga rechtdoor richting {destination}"
            },
            "sharp left": {
                "default": "Neem een scherpe bocht, naar links",
                "name": "Linksaf naar {way_name}",
                "destination": "Linksaf richting {destination}"
            },
            "sharp right": {
                "default": "Neem een scherpe bocht, naar rechts",
                "name": "Rechtsaf naar {way_name}",
                "destination": "Rechtsaf richting {destination}"
            },
            "slight left": {
                "default": "Links aanhouden",
                "name": "Links aanhouden naar {way_name}",
                "destination": "Links aanhouden richting {destination}"
            },
            "slight right": {
                "default": "Rechts aanhouden",
                "name": "Rechts aanhouden naar {way_name}",
                "destination": "Rechts aanhouden richting {destination}"
            },
            "uturn": {
                "default": "Keer om",
                "name": "Keer om naar {way_name}",
                "destination": "Keer om richting {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Ga {modifier}",
                "name": "Ga {modifier} naar {way_name}",
                "destination": "Ga {modifier} richting {destination}"
            },
            "uturn": {
                "default": "Keer om",
                "name": "Keer om naar {way_name}",
                "destination": "Keer om richting {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Neem de afrit",
                "name": "Neem de afrit naar {way_name}",
                "destination": "Neem de afrit richting {destination}",
                "exit": "Neem afslag {exit}",
                "exit_destination": "Neem afslag {exit} richting {destination}"
            },
            "left": {
                "default": "Neem de afrit links",
                "name": "Neem de afrit links naar {way_name}",
                "destination": "Neem de afrit links richting {destination}",
                "exit": "Neem afslag {exit} aan de linkerkant",
                "exit_destination": "Neem afslag {exit} aan de linkerkant richting {destination}"
            },
            "right": {
                "default": "Neem de afrit rechts",
                "name": "Neem de afrit rechts naar {way_name}",
                "destination": "Neem de afrit rechts richting {destination}",
                "exit": "Neem afslag {exit} aan de rechterkant",
                "exit_destination": "Neem afslag {exit} aan de rechterkant richting {destination}"
            },
            "sharp left": {
                "default": "Neem de afrit links",
                "name": "Neem de afrit links naar {way_name}",
                "destination": "Neem de afrit links richting {destination}",
                "exit": "Neem afslag {exit} aan de linkerkant",
                "exit_destination": "Neem afslag {exit} aan de linkerkant richting {destination}"
            },
            "sharp right": {
                "default": "Neem de afrit rechts",
                "name": "Neem de afrit rechts naar {way_name}",
                "destination": "Neem de afrit rechts richting {destination}",
                "exit": "Neem afslag {exit} aan de rechterkant",
                "exit_destination": "Neem afslag {exit} aan de rechterkant richting {destination}"
            },
            "slight left": {
                "default": "Neem de afrit links",
                "name": "Neem de afrit links naar {way_name}",
                "destination": "Neem de afrit links richting {destination}",
                "exit": "Neem afslag {exit} aan de linkerkant",
                "exit_destination": "Neem afslag {exit} aan de linkerkant richting {destination}"
            },
            "slight right": {
                "default": "Neem de afrit rechts",
                "name": "Neem de afrit rechts naar {way_name}",
                "destination": "Neem de afrit rechts richting {destination}",
                "exit": "Neem afslag {exit} aan de rechterkant",
                "exit_destination": "Neem afslag {exit} aan de rechterkant richting {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Neem de oprit",
                "name": "Neem de oprit naar {way_name}",
                "destination": "Neem de oprit richting {destination}"
            },
            "left": {
                "default": "Neem de oprit links",
                "name": "Neem de oprit links naar {way_name}",
                "destination": "Neem de oprit links richting {destination}"
            },
            "right": {
                "default": "Neem de oprit rechts",
                "name": "Neem de oprit rechts naar {way_name}",
                "destination": "Neem de oprit rechts richting {destination}"
            },
            "sharp left": {
                "default": "Neem de oprit links",
                "name": "Neem de oprit links naar {way_name}",
                "destination": "Neem de oprit links richting {destination}"
            },
            "sharp right": {
                "default": "Neem de oprit rechts",
                "name": "Neem de oprit rechts naar {way_name}",
                "destination": "Neem de oprit rechts richting {destination}"
            },
            "slight left": {
                "default": "Neem de oprit links",
                "name": "Neem de oprit links naar {way_name}",
                "destination": "Neem de oprit links richting {destination}"
            },
            "slight right": {
                "default": "Neem de oprit rechts",
                "name": "Neem de oprit rechts naar {way_name}",
                "destination": "Neem de oprit rechts richting {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Betreedt de rotonde",
                    "name": "Betreedt rotonde en sla af op {way_name}",
                    "destination": "Betreedt rotonde en sla af richting {destination}"
                },
                "name": {
                    "default": "Ga het knooppunt {rotary_name} op",
                    "name": "Verlaat het knooppunt {rotary_name} naar {way_name}",
                    "destination": "Verlaat het knooppunt {rotary_name} richting {destination}"
                },
                "exit": {
                    "default": "Betreedt rotonde en neem afslag {exit_number}",
                    "name": "Betreedt rotonde en neem afslag {exit_number} naar {way_name}",
                    "destination": "Betreedt rotonde en neem afslag {exit_number} richting {destination}"
                },
                "name_exit": {
                    "default": "Ga het knooppunt {rotary_name} op en neem afslag {exit_number}",
                    "name": "Ga het knooppunt {rotary_name} op en neem afslag {exit_number} naar {way_name}",
                    "destination": "Ga het knooppunt {rotary_name} op en neem afslag {exit_number} richting {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Betreedt rotonde en neem afslag {exit_number}",
                    "name": "Betreedt rotonde en neem afslag {exit_number} naar {way_name}",
                    "destination": "Betreedt rotonde en neem afslag {exit_number} richting {destination}"
                },
                "default": {
                    "default": "Betreedt de rotonde",
                    "name": "Betreedt rotonde en sla af op {way_name}",
                    "destination": "Betreedt rotonde en sla af richting {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Ga {modifier}",
                "name": "Ga {modifier} naar {way_name}",
                "destination": "Ga {modifier} richting {destination}"
            },
            "left": {
                "default": "Ga linksaf",
                "name": "Ga linksaf naar {way_name}",
                "destination": "Ga linksaf richting {destination}"
            },
            "right": {
                "default": "Ga rechtsaf",
                "name": "Ga rechtsaf naar {way_name}",
                "destination": "Ga rechtsaf richting {destination}"
            },
            "straight": {
                "default": "Ga in de aangegeven richting",
                "name": "Ga naar {way_name}",
                "destination": "Ga richting {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Verlaat de rotonde",
                "name": "Verlaat de rotonde en ga verder op {way_name}",
                "destination": "Verlaat de rotonde richting {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Verlaat de rotonde",
                "name": "Verlaat de rotonde en ga verder op {way_name}",
                "destination": "Verlaat de rotonde richting {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Ga {modifier}",
                "name": "Ga {modifier} naar {way_name}",
                "destination": "Ga {modifier} richting {destination}"
            },
            "left": {
                "default": "Ga linksaf",
                "name": "Ga linksaf naar {way_name}",
                "destination": "Ga linksaf richting {destination}"
            },
            "right": {
                "default": "Ga rechtsaf",
                "name": "Ga rechtsaf naar {way_name}",
                "destination": "Ga rechtsaf richting {destination}"
            },
            "straight": {
                "default": "Ga rechtdoor",
                "name": "Ga rechtdoor naar {way_name}",
                "destination": "Ga rechtdoor richting {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Rechtdoor"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],37:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1.",
                "2": "2.",
                "3": "3.",
                "4": "4.",
                "5": "5.",
                "6": "6.",
                "7": "7.",
                "8": "8.",
                "9": "9.",
                "10": "10."
            },
            "direction": {
                "north": "nord",
                "northeast": "nordøst",
                "east": "øst",
                "southeast": "sørøst",
                "south": "sør",
                "southwest": "sørvest",
                "west": "vest",
                "northwest": "nordvest"
            },
            "modifier": {
                "left": "venstre",
                "right": "høyre",
                "sharp left": "skarp venstre",
                "sharp right": "skarp høyre",
                "slight left": "litt til venstre",
                "slight right": "litt til høyre",
                "straight": "rett frem",
                "uturn": "U-sving"
            },
            "lanes": {
                "xo": "Hold til høyre",
                "ox": "Hold til venstre",
                "xox": "Hold deg i midten",
                "oxo": "Hold til venstre eller høyre"
            }
        },
        "modes": {
            "ferry": {
                "default": "Ta ferja",
                "name": "Ta ferja {way_name}",
                "destination": "Ta ferja til {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, deretter {instruction_two} om {distance}",
            "two linked": "{instruction_one}, deretter {instruction_two}",
            "one in distance": "Om {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "avkjørsel {exit}"
        },
        "arrive": {
            "default": {
                "default": "Du har ankommet din {nth} destinasjon",
                "upcoming": "Du vil ankomme din {nth} destinasjon",
                "short": "Du har ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du har ankommet {waypoint_name}"
            },
            "left": {
                "default": "Du har ankommet din {nth} destinasjon, på din venstre side",
                "upcoming": "Du vil ankomme din {nth} destinasjon, på din venstre side",
                "short": "Du har ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du har ankommet {waypoint_name}, på din venstre side"
            },
            "right": {
                "default": "Du har ankommet din {nth} destinasjon, på din høyre side",
                "upcoming": "Du vil ankomme din {nth} destinasjon, på din høyre side",
                "short": "Du har ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du har ankommet {waypoint_name}, på din høyre side"
            },
            "sharp left": {
                "default": "Du har ankommet din {nth} destinasjon, på din venstre side",
                "upcoming": "Du vil ankomme din {nth} destinasjon, på din venstre side",
                "short": "Du har ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du har ankommet {waypoint_name}, på din venstre side"
            },
            "sharp right": {
                "default": "Du har ankommet din {nth} destinasjon, på din høyre side",
                "upcoming": "Du vil ankomme din {nth} destinasjon, på din høyre side",
                "short": "Du har ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du har ankommet {waypoint_name}, på din høyre side"
            },
            "slight right": {
                "default": "Du har ankommet din {nth} destinasjon, på din høyre side",
                "upcoming": "Du vil ankomme din {nth} destinasjon, på din høyre side",
                "short": "Du har ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du har ankommet {waypoint_name}, på din høyre side"
            },
            "slight left": {
                "default": "Du har ankommet din {nth} destinasjon, på din venstre side",
                "upcoming": "Du vil ankomme din {nth} destinasjon, på din venstre side",
                "short": "Du har ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du har ankommet {waypoint_name}, på din venstre side"
            },
            "straight": {
                "default": "Du har ankommet din {nth} destinasjon, rett forut",
                "upcoming": "Du vil ankomme din {nth} destinasjon, rett forut",
                "short": "Du har ankommet",
                "short-upcoming": "Du vil ankomme",
                "named": "Du har ankommet {waypoint_name}, rett forut"
            }
        },
        "continue": {
            "default": {
                "default": "Ta til {modifier}",
                "name": "Ta til {modifier} for å bli værende på {way_name}",
                "destination": "Ta til {modifier} mot {destination}",
                "exit": "Ta til {modifier} inn på {way_name}"
            },
            "straight": {
                "default": "Fortsett rett frem",
                "name": "Fortsett rett frem for å bli værende på {way_name}",
                "destination": "Fortsett mot {destination}",
                "distance": "Fortsett rett frem, {distance} ",
                "namedistance": "Fortsett på {way_name}, {distance}"
            },
            "sharp left": {
                "default": "Sving skarpt til venstre",
                "name": "Sving skarpt til venstre for å bli værende på {way_name}",
                "destination": "Sving skarpt til venstre mot {destination}"
            },
            "sharp right": {
                "default": "Sving skarpt til høyre",
                "name": "Sving skarpt til høyre for å bli værende på {way_name}",
                "destination": "Sving skarpt mot {destination}"
            },
            "slight left": {
                "default": "Sving svakt til venstre",
                "name": "Sving svakt til venstre for å bli værende på {way_name}",
                "destination": "Sving svakt til venstre mot {destination}"
            },
            "slight right": {
                "default": "Sving svakt til høyre",
                "name": "Sving svakt til høyre for å bli værende på {way_name}",
                "destination": "Sving svakt til høyre mot {destination}"
            },
            "uturn": {
                "default": "Ta en U-sving",
                "name": "Ta en U-sving og fortsett på {way_name}",
                "destination": "Ta en U-sving mot {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Kjør i retning {direction}",
                "name": "Kjør i retning {direction} på {way_name}",
                "namedistance": "Kjør i retning {direction} på {way_name}, {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Sving {modifier}",
                "name": "Ta til {modifier} inn på {way_name}",
                "destination": "Sving {modifier} mot {destination}"
            },
            "straight": {
                "default": "Fortsett rett frem",
                "name": "Fortsett rett frem til  {way_name}",
                "destination": "Fortsett rett frem mot {destination}"
            },
            "uturn": {
                "default": "Ta en U-sving i enden av veien",
                "name": "Ta en U-sving til {way_name} i enden av veien",
                "destination": "Ta en U-sving mot {destination} i enden av veien"
            }
        },
        "fork": {
            "default": {
                "default": "Hold til {modifier} i veikrysset",
                "name": "Hold til {modifier} inn på {way_name}",
                "destination": "Hold til {modifier} mot {destination}"
            },
            "slight left": {
                "default": "Hold til venstre i veikrysset",
                "name": "Hold til venstre inn på {way_name}",
                "destination": "Hold til venstre mot {destination}"
            },
            "slight right": {
                "default": "Hold til høyre i veikrysset",
                "name": "Hold til høyre inn på {way_name}",
                "destination": "Hold til høyre mot {destination}"
            },
            "sharp left": {
                "default": "Sving skarpt til venstre i veikrysset",
                "name": "Sving skarpt til venstre inn på {way_name}",
                "destination": "Sving skarpt til venstre mot {destination}"
            },
            "sharp right": {
                "default": "Sving skarpt til høyre i veikrysset",
                "name": "Sving skarpt til høyre inn på {way_name}",
                "destination": "Svings skarpt til høyre mot {destination}"
            },
            "uturn": {
                "default": "Ta en U-sving",
                "name": "Ta en U-sving til {way_name}",
                "destination": "Ta en U-sving mot {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Hold {modifier} kjørefelt",
                "name": "Hold {modifier} kjørefelt inn på {way_name}",
                "destination": "Hold {modifier} kjørefelt mot {destination}"
            },
            "straight": {
                "default": "Hold kjørefelt",
                "name": "Hold kjørefelt inn på {way_name}",
                "destination": "Hold kjørefelt mot {destination}"
            },
            "slight left": {
                "default": "Hold venstre kjørefelt",
                "name": "Hold venstre kjørefelt inn på {way_name}",
                "destination": "Hold venstre kjørefelt mot {destination}"
            },
            "slight right": {
                "default": "Hold høyre kjørefelt",
                "name": "Hold høyre kjørefelt inn på {way_name}",
                "destination": "Hold høyre kjørefelt mot {destination}"
            },
            "sharp left": {
                "default": "Hold venstre kjørefelt",
                "name": "Hold venstre kjørefelt inn på {way_name}",
                "destination": "Hold venstre kjørefelt mot {destination}"
            },
            "sharp right": {
                "default": "Hold høyre kjørefelt",
                "name": "Hold høyre kjørefelt inn på {way_name}",
                "destination": "Hold høyre kjørefelt mot {destination}"
            },
            "uturn": {
                "default": "Ta en U-sving",
                "name": "Ta en U-sving til {way_name}",
                "destination": "Ta en U-sving mot {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Fortsett {modifier}",
                "name": "Fortsett {modifier} til {way_name}",
                "destination": "Fortsett {modifier} mot  {destination}"
            },
            "straight": {
                "default": "Fortsett rett frem",
                "name": "Fortsett inn på {way_name}",
                "destination": "Fortsett mot {destination}"
            },
            "sharp left": {
                "default": "Sving skarpt til venstre",
                "name": "Sving skarpt til venstre inn på {way_name}",
                "destination": "Sving skarpt til venstre mot {destination}"
            },
            "sharp right": {
                "default": "Sving skarpt til høyre",
                "name": "Sving skarpt til høyre inn på {way_name}",
                "destination": "Svings skarpt til høyre mot {destination}"
            },
            "slight left": {
                "default": "Fortsett litt mot venstre",
                "name": "Fortsett litt mot venstre til {way_name}",
                "destination": "Fortsett litt mot venstre mot {destination}"
            },
            "slight right": {
                "default": "Fortsett litt mot høyre",
                "name": "Fortsett litt mot høyre til {way_name}",
                "destination": "Fortsett litt mot høyre mot {destination}"
            },
            "uturn": {
                "default": "Ta en U-sving",
                "name": "Ta en U-sving til {way_name}",
                "destination": "Ta en U-sving mot {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Fortsett {modifier}",
                "name": "Fortsett {modifier} til {way_name}",
                "destination": "Fortsett {modifier} mot  {destination}"
            },
            "uturn": {
                "default": "Ta en U-sving",
                "name": "Ta en U-sving til {way_name}",
                "destination": "Ta en U-sving mot {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Ta avkjørselen",
                "name": "Ta avkjørselen inn på {way_name}",
                "destination": "Ta avkjørselen mot {destination}",
                "exit": "Ta avkjørsel {exit}",
                "exit_destination": "Ta avkjørsel {exit} mot {destination}"
            },
            "left": {
                "default": "Ta avkjørselen på venstre side",
                "name": "Ta avkjørselen på venstre side inn på {way_name}",
                "destination": "Ta avkjørselen på venstre side mot {destination}",
                "exit": "Ta avkjørsel {exit} på venstre side",
                "exit_destination": "Ta avkjørsel {exit} på venstre side mot {destination}"
            },
            "right": {
                "default": "Ta avkjørselen på høyre side",
                "name": "Ta avkjørselen på høyre side inn på {way_name}",
                "destination": "Ta avkjørselen på høyre side mot {destination}",
                "exit": "Ta avkjørsel {exit} på høyre side",
                "exit_destination": "Ta avkjørsel {exit} på høyre side mot {destination}"
            },
            "sharp left": {
                "default": "Ta avkjørselen på venstre side",
                "name": "Ta avkjørselen på venstre side inn på {way_name}",
                "destination": "Ta avkjørselen på venstre side mot {destination}",
                "exit": "Ta avkjørsel {exit} på venstre side",
                "exit_destination": "Ta avkjørsel {exit} på venstre side mot {destination}"
            },
            "sharp right": {
                "default": "Ta avkjørselen på høyre side",
                "name": "Ta avkjørselen på høyre side inn på {way_name}",
                "destination": "Ta avkjørselen på høyre side mot {destination}",
                "exit": "Ta avkjørsel {exit} på høyre side",
                "exit_destination": "Ta avkjørsel {exit} på høyre side mot {destination}"
            },
            "slight left": {
                "default": "Ta avkjørselen på venstre side",
                "name": "Ta avkjørselen på venstre side inn på {way_name}",
                "destination": "Ta avkjørselen på venstre side mot {destination}",
                "exit": "Ta avkjørsel {exit} på venstre side",
                "exit_destination": "Ta avkjørsel {exit} på venstre side mot {destination}"
            },
            "slight right": {
                "default": "Ta avkjørselen på høyre side",
                "name": "Ta avkjørselen på høyre side inn på {way_name}",
                "destination": "Ta avkjørselen på høyre side mot {destination}",
                "exit": "Ta avkjørsel {exit} på høyre side",
                "exit_destination": "Ta avkjørsel {exit} på høyre side mot {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Ta avkjørselen",
                "name": "Ta avkjørselen inn på {way_name}",
                "destination": "Ta avkjørselen mot {destination}"
            },
            "left": {
                "default": "Ta avkjørselen på venstre side",
                "name": "Ta avkjørselen på venstre side inn på {way_name}",
                "destination": "Ta avkjørselen på venstre side mot {destination}"
            },
            "right": {
                "default": "Ta avkjørselen på høyre side",
                "name": "Ta avkjørselen på høyre side inn på {way_name}",
                "destination": "Ta avkjørselen på høyre side mot {destination}"
            },
            "sharp left": {
                "default": "Ta avkjørselen på venstre side",
                "name": "Ta avkjørselen på venstre side inn på {way_name}",
                "destination": "Ta avkjørselen på venstre side mot {destination}"
            },
            "sharp right": {
                "default": "Ta avkjørselen på høyre side",
                "name": "Ta avkjørselen på høyre side inn på {way_name}",
                "destination": "Ta avkjørselen på høyre side mot {destination}"
            },
            "slight left": {
                "default": "Ta avkjørselen på venstre side",
                "name": "Ta avkjørselen på venstre side inn på {way_name}",
                "destination": "Ta avkjørselen på venstre side mot {destination}"
            },
            "slight right": {
                "default": "Ta avkjørselen på høyre side",
                "name": "Ta avkjørselen på høyre side inn på {way_name}",
                "destination": "Ta avkjørselen på høyre side mot {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Kjør inn i rundkjøringen",
                    "name": "Kjør inn i rundkjøringen og deretter ut på {way_name}",
                    "destination": "Kjør inn i rundkjøringen og deretter ut mot {destination}"
                },
                "name": {
                    "default": "Kjør inn i {rotary_name}",
                    "name": "Kjør inn i {rotary_name} og deretter ut på {way_name}",
                    "destination": "Kjør inn i {rotary_name} og deretter ut mot {destination}"
                },
                "exit": {
                    "default": "Kjør inn i rundkjøringen og ta {exit_number} avkjørsel",
                    "name": "Kjør inn i rundkjøringen og ta {exit_number} avkjørsel ut på {way_name}",
                    "destination": "Kjør inn i rundkjøringen og ta {exit_number} avkjørsel ut mot {destination} "
                },
                "name_exit": {
                    "default": "Kjør inn i {rotary_name} og ta {exit_number} avkjørsel",
                    "name": "Kjør inn i {rotary_name} og ta {exit_number} avkjørsel inn på {way_name}",
                    "destination": "Kjør inn i {rotary_name} og ta {exit_number} avkjørsel mot {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Kjør inn i rundkjøringen og ta {exit_number} avkjørsel",
                    "name": "Kjør inn i rundkjøringen og ta {exit_number} avkjørsel inn på {way_name}",
                    "destination": "Kjør inn i rundkjøringen og ta {exit_number} avkjørsel ut mot {destination} "
                },
                "default": {
                    "default": "Kjør inn i rundkjøringen",
                    "name": "Kjør inn i rundkjøringen og deretter ut på {way_name}",
                    "destination": "Kjør inn i rundkjøringen og deretter ut mot {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Ta en {modifier}",
                "name": "Ta en {modifier} inn på {way_name}",
                "destination": "Ta en {modifier} mot {destination}"
            },
            "left": {
                "default": "Sving til venstre",
                "name": "Sving til venstre inn på {way_name}",
                "destination": "Sving til venstre mot {destination}"
            },
            "right": {
                "default": "Sving til høyre",
                "name": "Sving til høyre inn på {way_name}",
                "destination": "Sving til høyre mot {destination}"
            },
            "straight": {
                "default": "Fortsett rett frem",
                "name": "Fortsett rett frem til  {way_name}",
                "destination": "Fortsett rett frem mot {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Kjør ut av rundkjøringen",
                "name": "Kjør ut av rundkjøringen og inn på {way_name}",
                "destination": "Kjør ut av rundkjøringen mot {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Kjør ut av rundkjøringen",
                "name": "Kjør ut av rundkjøringen og inn på {way_name}",
                "destination": "Kjør ut av rundkjøringen mot {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Ta en {modifier}",
                "name": "Ta en {modifier} inn på {way_name}",
                "destination": "Ta en {modifier} mot {destination}"
            },
            "left": {
                "default": "Sving til venstre",
                "name": "Sving til venstre inn på {way_name}",
                "destination": "Sving til venstre mot {destination}"
            },
            "right": {
                "default": "Sving til høyre",
                "name": "Sving til høyre inn på {way_name}",
                "destination": "Sving til høyre mot {destination}"
            },
            "straight": {
                "default": "Kjør rett frem",
                "name": "Kjør rett frem og inn på {way_name}",
                "destination": "Kjør rett frem mot {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Fortsett rett frem"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],38:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1.",
                "2": "2.",
                "3": "3.",
                "4": "4.",
                "5": "5.",
                "6": "6.",
                "7": "7.",
                "8": "8.",
                "9": "9.",
                "10": "10."
            },
            "direction": {
                "north": "północ",
                "northeast": "północny wschód",
                "east": "wschód",
                "southeast": "południowy wschód",
                "south": "południe",
                "southwest": "południowy zachód",
                "west": "zachód",
                "northwest": "północny zachód"
            },
            "modifier": {
                "left": "lewo",
                "right": "prawo",
                "sharp left": "ostro w lewo",
                "sharp right": "ostro w prawo",
                "slight left": "łagodnie w lewo",
                "slight right": "łagodnie w prawo",
                "straight": "prosto",
                "uturn": "zawróć"
            },
            "lanes": {
                "xo": "Trzymaj się prawej strony",
                "ox": "Trzymaj się lewej strony",
                "xox": "Trzymaj się środka",
                "oxo": "Trzymaj się lewej lub prawej strony"
            }
        },
        "modes": {
            "ferry": {
                "default": "Weź prom",
                "name": "Weź prom {way_name}",
                "destination": "Weź prom w kierunku {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, następnie za {distance} {instruction_two}",
            "two linked": "{instruction_one}, następnie {instruction_two}",
            "one in distance": "Za {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "exit {exit}"
        },
        "arrive": {
            "default": {
                "default": "Dojechano do miejsca docelowego {nth}",
                "upcoming": "Dojechano do miejsca docelowego {nth}",
                "short": "Dojechano do miejsca docelowego {nth}",
                "short-upcoming": "Dojechano do miejsca docelowego {nth}",
                "named": "Dojechano do {waypoint_name}"
            },
            "left": {
                "default": "Dojechano do miejsca docelowego {nth}, po lewej stronie",
                "upcoming": "Dojechano do miejsca docelowego {nth}, po lewej stronie",
                "short": "Dojechano do miejsca docelowego {nth}",
                "short-upcoming": "Dojechano do miejsca docelowego {nth}",
                "named": "Dojechano do {waypoint_name}, po lewej stronie"
            },
            "right": {
                "default": "Dojechano do miejsca docelowego {nth}, po prawej stronie",
                "upcoming": "Dojechano do miejsca docelowego {nth}, po prawej stronie",
                "short": "Dojechano do miejsca docelowego {nth}",
                "short-upcoming": "Dojechano do miejsca docelowego {nth}",
                "named": "Dojechano do {waypoint_name}, po prawej stronie"
            },
            "sharp left": {
                "default": "Dojechano do miejsca docelowego {nth}, po lewej stronie",
                "upcoming": "Dojechano do miejsca docelowego {nth}, po lewej stronie",
                "short": "Dojechano do miejsca docelowego {nth}",
                "short-upcoming": "Dojechano do miejsca docelowego {nth}",
                "named": "Dojechano do {waypoint_name}, po lewej stronie"
            },
            "sharp right": {
                "default": "Dojechano do miejsca docelowego {nth}, po prawej stronie",
                "upcoming": "Dojechano do miejsca docelowego {nth}, po prawej stronie",
                "short": "Dojechano do miejsca docelowego {nth}",
                "short-upcoming": "Dojechano do miejsca docelowego {nth}",
                "named": "Dojechano do {waypoint_name}, po prawej stronie"
            },
            "slight right": {
                "default": "Dojechano do miejsca docelowego {nth}, po prawej stronie",
                "upcoming": "Dojechano do miejsca docelowego {nth}, po prawej stronie",
                "short": "Dojechano do miejsca docelowego {nth}",
                "short-upcoming": "Dojechano do miejsca docelowego {nth}",
                "named": "Dojechano do {waypoint_name}, po prawej stronie"
            },
            "slight left": {
                "default": "Dojechano do miejsca docelowego {nth}, po lewej stronie",
                "upcoming": "Dojechano do miejsca docelowego {nth}, po lewej stronie",
                "short": "Dojechano do miejsca docelowego {nth}",
                "short-upcoming": "Dojechano do miejsca docelowego {nth}",
                "named": "Dojechano do {waypoint_name}, po lewej stronie"
            },
            "straight": {
                "default": "Dojechano do miejsca docelowego {nth} , prosto",
                "upcoming": "Dojechano do miejsca docelowego {nth} , prosto",
                "short": "Dojechano do miejsca docelowego {nth}",
                "short-upcoming": "Dojechano do miejsca docelowego {nth}",
                "named": "Dojechano do {waypoint_name}, prosto"
            }
        },
        "continue": {
            "default": {
                "default": "Skręć {modifier}",
                "name": "Skręć w {modifier}, aby pozostać na {way_name}",
                "destination": "Skręć {modifier} w kierunku {destination}",
                "exit": "Skręć {modifier} na {way_name}"
            },
            "straight": {
                "default": "Kontynuuj prosto",
                "name": "Jedź dalej prosto, aby pozostać na {way_name}",
                "destination": "Kontynuuj w kierunku {destination}",
                "distance": "Jedź dalej prosto przez {distance}",
                "namedistance": "Jedź dalej {way_name} przez {distance}"
            },
            "sharp left": {
                "default": "Skręć ostro w lewo",
                "name": "Skręć w lewo w ostry zakręt, aby pozostać na {way_name}",
                "destination": "Skręć ostro w lewo w kierunku {destination}"
            },
            "sharp right": {
                "default": "Skręć ostro w prawo",
                "name": "Skręć w prawo w ostry zakręt, aby pozostać na {way_name}",
                "destination": "Skręć ostro w prawo w kierunku {destination}"
            },
            "slight left": {
                "default": "Skręć w lewo w łagodny zakręt",
                "name": "Skręć w lewo w łagodny zakręt, aby pozostać na {way_name}",
                "destination": "Skręć w lewo w łagodny zakręt na {destination}"
            },
            "slight right": {
                "default": "Skręć w prawo w łagodny zakręt",
                "name": "Skręć w prawo w łagodny zakręt, aby pozostać na {way_name}",
                "destination": "Skręć w prawo w łagodny zakręt na {destination}"
            },
            "uturn": {
                "default": "Zawróć",
                "name": "Zawróć i jedź dalej {way_name}",
                "destination": "Zawróć w kierunku {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Kieruj się {direction}",
                "name": "Kieruj się {direction} na {way_name}",
                "namedistance": "Head {direction} on {way_name} for {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Skręć {modifier}",
                "name": "Skręć {modifier} na {way_name}",
                "destination": "Skręć {modifier} w kierunku {destination}"
            },
            "straight": {
                "default": "Kontynuuj prosto",
                "name": "Kontynuuj prosto na {way_name}",
                "destination": "Kontynuuj prosto w kierunku {destination}"
            },
            "uturn": {
                "default": "Zawróć na końcu ulicy",
                "name": "Zawróć na końcu ulicy na {way_name}",
                "destination": "Zawróć na końcu ulicy w kierunku {destination}"
            }
        },
        "fork": {
            "default": {
                "default": "Na rozwidleniu trzymaj się {modifier}",
                "name": "Na rozwidleniu trzymaj się {modifier} na {way_name}",
                "destination": "Na rozwidleniu trzymaj się {modifier} w kierunku {destination}"
            },
            "slight left": {
                "default": "Na rozwidleniu trzymaj się lewej strony",
                "name": "Na rozwidleniu trzymaj się lewej strony w {way_name}",
                "destination": "Na rozwidleniu trzymaj się lewej strony w kierunku {destination}"
            },
            "slight right": {
                "default": "Na rozwidleniu trzymaj się prawej strony",
                "name": "Na rozwidleniu trzymaj się prawej strony na {way_name}",
                "destination": "Na rozwidleniu trzymaj się prawej strony w kierunku {destination}"
            },
            "sharp left": {
                "default": "Na rozwidleniu skręć ostro w lewo",
                "name": "Skręć ostro w lewo w {way_name}",
                "destination": "Skręć ostro w lewo w kierunku {destination}"
            },
            "sharp right": {
                "default": "Na rozwidleniu skręć ostro w prawo",
                "name": "Skręć ostro w prawo na {way_name}",
                "destination": "Skręć ostro w prawo w kierunku {destination}"
            },
            "uturn": {
                "default": "Zawróć",
                "name": "Zawróć na {way_name}",
                "destination": "Zawróć w kierunku {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Włącz się {modifier}",
                "name": "Włącz się {modifier} na {way_name}",
                "destination": "Włącz się {modifier} w kierunku {destination}"
            },
            "straight": {
                "default": "Włącz się prosto",
                "name": "Włącz się prosto na {way_name}",
                "destination": "Włącz się prosto w kierunku {destination}"
            },
            "slight left": {
                "default": "Włącz się z lewej strony",
                "name": "Włącz się z lewej strony na {way_name}",
                "destination": "Włącz się z lewej strony w kierunku {destination}"
            },
            "slight right": {
                "default": "Włącz się z prawej strony",
                "name": "Włącz się z prawej strony na {way_name}",
                "destination": "Włącz się z prawej strony w kierunku {destination}"
            },
            "sharp left": {
                "default": "Włącz się z lewej strony",
                "name": "Włącz się z lewej strony na {way_name}",
                "destination": "Włącz się z lewej strony w kierunku {destination}"
            },
            "sharp right": {
                "default": "Włącz się z prawej strony",
                "name": "Włącz się z prawej strony na {way_name}",
                "destination": "Włącz się z prawej strony w kierunku {destination}"
            },
            "uturn": {
                "default": "Zawróć",
                "name": "Zawróć na {way_name}",
                "destination": "Zawróć w kierunku {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Kontynuuj {modifier}",
                "name": "Kontynuuj {modifier} na {way_name}",
                "destination": "Kontynuuj {modifier} w kierunku {destination}"
            },
            "straight": {
                "default": "Kontynuuj prosto",
                "name": "Kontynuuj na {way_name}",
                "destination": "Kontynuuj w kierunku {destination}"
            },
            "sharp left": {
                "default": "Skręć ostro w lewo",
                "name": "Skręć ostro w lewo w {way_name}",
                "destination": "Skręć ostro w lewo w kierunku {destination}"
            },
            "sharp right": {
                "default": "Skręć ostro w prawo",
                "name": "Skręć ostro w prawo na {way_name}",
                "destination": "Skręć ostro w prawo w kierunku {destination}"
            },
            "slight left": {
                "default": "Kontynuuj łagodnie w lewo",
                "name": "Kontynuuj łagodnie w lewo na {way_name}",
                "destination": "Kontynuuj łagodnie w lewo w kierunku {destination}"
            },
            "slight right": {
                "default": "Kontynuuj łagodnie w prawo",
                "name": "Kontynuuj łagodnie w prawo na {way_name}",
                "destination": "Kontynuuj łagodnie w prawo w kierunku {destination}"
            },
            "uturn": {
                "default": "Zawróć",
                "name": "Zawróć na {way_name}",
                "destination": "Zawróć w kierunku {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Kontynuuj {modifier}",
                "name": "Kontynuuj {modifier} na {way_name}",
                "destination": "Kontynuuj {modifier} w kierunku {destination}"
            },
            "uturn": {
                "default": "Zawróć",
                "name": "Zawróć na {way_name}",
                "destination": "Zawróć w kierunku {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Zjedź",
                "name": "Weź zjazd na {way_name}",
                "destination": "Weź zjazd w kierunku {destination}",
                "exit": "Zjedź zjazdem {exit}",
                "exit_destination": "Zjedź zjazdem {exit} na {destination}"
            },
            "left": {
                "default": "Weź zjazd po lewej",
                "name": "Weź zjazd po lewej na {way_name}",
                "destination": "Weź zjazd po lewej w kierunku {destination}",
                "exit": "Zjedź zjazdem {exit} po lewej stronie",
                "exit_destination": "Zjedź zjazdem {exit} po lewej stronie na {destination}"
            },
            "right": {
                "default": "Weź zjazd po prawej",
                "name": "Weź zjazd po prawej na {way_name}",
                "destination": "Weź zjazd po prawej w kierunku {destination}",
                "exit": "Zjedź zjazdem {exit} po prawej stronie",
                "exit_destination": "Zjedź zjazdem {exit} po prawej stronie na {destination}"
            },
            "sharp left": {
                "default": "Weź zjazd po lewej",
                "name": "Weź zjazd po lewej na {way_name}",
                "destination": "Weź zjazd po lewej w kierunku {destination}",
                "exit": "Zjedź zjazdem {exit} po lewej stronie",
                "exit_destination": "Zjedź zjazdem {exit} po lewej stronie na {destination}"
            },
            "sharp right": {
                "default": "Weź zjazd po prawej",
                "name": "Weź zjazd po prawej na {way_name}",
                "destination": "Weź zjazd po prawej w kierunku {destination}",
                "exit": "Zjedź zjazdem {exit} po prawej stronie",
                "exit_destination": "Zjedź zjazdem {exit} po prawej stronie na {destination}"
            },
            "slight left": {
                "default": "Weź zjazd po lewej",
                "name": "Weź zjazd po lewej na {way_name}",
                "destination": "Weź zjazd po lewej w kierunku {destination}",
                "exit": "Zjedź zjazdem {exit} po lewej stronie",
                "exit_destination": "Zjedź zjazdem {exit} po lewej stronie na {destination}"
            },
            "slight right": {
                "default": "Weź zjazd po prawej",
                "name": "Weź zjazd po prawej na {way_name}",
                "destination": "Weź zjazd po prawej w kierunku {destination}",
                "exit": "Zjedź zjazdem {exit} po prawej stronie",
                "exit_destination": "Zjedź zjazdem {exit} po prawej stronie na {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Weź zjazd",
                "name": "Weź zjazd na {way_name}",
                "destination": "Weź zjazd w kierunku {destination}"
            },
            "left": {
                "default": "Weź zjazd po lewej",
                "name": "Weź zjazd po lewej na {way_name}",
                "destination": "Weź zjazd po lewej w kierunku {destination}"
            },
            "right": {
                "default": "Weź zjazd po prawej",
                "name": "Weź zjazd po prawej na {way_name}",
                "destination": "Weź zjazd po prawej w kierunku {destination}"
            },
            "sharp left": {
                "default": "Weź zjazd po lewej",
                "name": "Weź zjazd po lewej na {way_name}",
                "destination": "Weź zjazd po lewej w kierunku {destination}"
            },
            "sharp right": {
                "default": "Weź zjazd po prawej",
                "name": "Weź zjazd po prawej na {way_name}",
                "destination": "Weź zjazd po prawej w kierunku {destination}"
            },
            "slight left": {
                "default": "Weź zjazd po lewej",
                "name": "Weź zjazd po lewej na {way_name}",
                "destination": "Weź zjazd po lewej w kierunku {destination}"
            },
            "slight right": {
                "default": "Weź zjazd po prawej",
                "name": "Weź zjazd po prawej na {way_name}",
                "destination": "Weź zjazd po prawej w kierunku {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Wjedź na rondo",
                    "name": "Wjedź na rondo i skręć na {way_name}",
                    "destination": "Wjedź na rondo i skręć w kierunku {destination}"
                },
                "name": {
                    "default": "Wjedź na {rotary_name}",
                    "name": "Wjedź na {rotary_name} i skręć na {way_name}",
                    "destination": "Wjedź na {rotary_name} i skręć w kierunku {destination}"
                },
                "exit": {
                    "default": "Wjedź na rondo i wyjedź {exit_number} zjazdem",
                    "name": "Wjedź na rondo i wyjedź {exit_number} zjazdem na {way_name}",
                    "destination": "Wjedź na rondo i wyjedź {exit_number} zjazdem w kierunku {destination}"
                },
                "name_exit": {
                    "default": "Wjedź na {rotary_name} i wyjedź {exit_number} zjazdem",
                    "name": "Wjedź na {rotary_name} i wyjedź {exit_number} zjazdem na {way_name}",
                    "destination": "Wjedź na {rotary_name} i wyjedź {exit_number} zjazdem w kierunku {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Wjedź na rondo i wyjedź {exit_number} zjazdem",
                    "name": "Wjedź na rondo i wyjedź {exit_number} zjazdem na {way_name}",
                    "destination": "Wjedź na rondo i wyjedź {exit_number} zjazdem w kierunku {destination}"
                },
                "default": {
                    "default": "Wjedź na rondo",
                    "name": "Wjedź na rondo i wyjedź na {way_name}",
                    "destination": "Wjedź na rondo i wyjedź w kierunku {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "{modifier}",
                "name": "{modifier} na {way_name}",
                "destination": "{modifier} w kierunku {destination}"
            },
            "left": {
                "default": "Skręć w lewo",
                "name": "Skręć w lewo na {way_name}",
                "destination": "Skręć w lewo w kierunku {destination}"
            },
            "right": {
                "default": "Skręć w prawo",
                "name": "Skręć w prawo na {way_name}",
                "destination": "Skręć w prawo w kierunku {destination}"
            },
            "straight": {
                "default": "Kontynuuj prosto",
                "name": "Kontynuuj prosto na {way_name}",
                "destination": "Kontynuuj prosto w kierunku {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "{modifier}",
                "name": "{modifier} na {way_name}",
                "destination": "{modifier} w kierunku {destination}"
            },
            "left": {
                "default": "Skręć w lewo",
                "name": "Skręć w lewo na {way_name}",
                "destination": "Skręć w lewo w kierunku {destination}"
            },
            "right": {
                "default": "Skręć w prawo",
                "name": "Skręć w prawo na {way_name}",
                "destination": "Skręć w prawo w kierunku {destination}"
            },
            "straight": {
                "default": "Kontynuuj prosto",
                "name": "Kontynuuj prosto na {way_name}",
                "destination": "Kontynuuj prosto w kierunku {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "{modifier}",
                "name": "{modifier} na {way_name}",
                "destination": "{modifier} w kierunku {destination}"
            },
            "left": {
                "default": "Skręć w lewo",
                "name": "Skręć w lewo na {way_name}",
                "destination": "Skręć w lewo w kierunku {destination}"
            },
            "right": {
                "default": "Skręć w prawo",
                "name": "Skręć w prawo na {way_name}",
                "destination": "Skręć w prawo w kierunku {destination}"
            },
            "straight": {
                "default": "Jedź prosto",
                "name": "Jedź prosto na {way_name}",
                "destination": "Jedź prosto w kierunku {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "{modifier}",
                "name": "{modifier} na {way_name}",
                "destination": "{modifier} w kierunku {destination}"
            },
            "left": {
                "default": "Skręć w lewo",
                "name": "Skręć w lewo na {way_name}",
                "destination": "Skręć w lewo w kierunku {destination}"
            },
            "right": {
                "default": "Skręć w prawo",
                "name": "Skręć w prawo na {way_name}",
                "destination": "Skręć w prawo w kierunku {destination}"
            },
            "straight": {
                "default": "Jedź prosto",
                "name": "Jedź prosto na {way_name}",
                "destination": "Jedź prosto w kierunku {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Kontynuuj prosto"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],39:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1º",
                "2": "2º",
                "3": "3º",
                "4": "4º",
                "5": "5º",
                "6": "6º",
                "7": "7º",
                "8": "8º",
                "9": "9º",
                "10": "10º"
            },
            "direction": {
                "north": "norte",
                "northeast": "nordeste",
                "east": "leste",
                "southeast": "sudeste",
                "south": "sul",
                "southwest": "sudoeste",
                "west": "oeste",
                "northwest": "noroeste"
            },
            "modifier": {
                "left": "à esquerda",
                "right": "à direita",
                "sharp left": "fechada à esquerda",
                "sharp right": "fechada à direita",
                "slight left": "suave à esquerda",
                "slight right": "suave à direita",
                "straight": "em frente",
                "uturn": "retorno"
            },
            "lanes": {
                "xo": "Mantenha-se à direita",
                "ox": "Mantenha-se à esquerda",
                "xox": "Mantenha-se ao centro",
                "oxo": "Mantenha-se à esquerda ou direita"
            }
        },
        "modes": {
            "ferry": {
                "default": "Pegue a balsa",
                "name": "Pegue a balsa {way_name}",
                "destination": "Pegue a balsa sentido {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, então, em {distance}, {instruction_two}",
            "two linked": "{instruction_one}, então {instruction_two}",
            "one in distance": "Em {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "saída {exit}"
        },
        "arrive": {
            "default": {
                "default": "Você chegou ao seu {nth} destino",
                "upcoming": "Você chegará ao seu {nth} destino",
                "short": "Você chegou",
                "short-upcoming": "Você vai chegar",
                "named": "Você chegou a {waypoint_name}"
            },
            "left": {
                "default": "Você chegou ao seu {nth} destino, à esquerda",
                "upcoming": "Você chegará ao seu {nth} destino, à esquerda",
                "short": "Você chegou",
                "short-upcoming": "Você vai chegar",
                "named": "Você chegou {waypoint_name}, à esquerda"
            },
            "right": {
                "default": "Você chegou ao seu {nth} destino, à direita",
                "upcoming": "Você chegará ao seu {nth} destino, à direita",
                "short": "Você chegou",
                "short-upcoming": "Você vai chegar",
                "named": "Você chegou {waypoint_name}, à direita"
            },
            "sharp left": {
                "default": "Você chegou ao seu {nth} destino, à esquerda",
                "upcoming": "Você chegará ao seu {nth} destino, à esquerda",
                "short": "Você chegou",
                "short-upcoming": "Você vai chegar",
                "named": "Você chegou {waypoint_name}, à esquerda"
            },
            "sharp right": {
                "default": "Você chegou ao seu {nth} destino, à direita",
                "upcoming": "Você chegará ao seu {nth} destino, à direita",
                "short": "Você chegou",
                "short-upcoming": "Você vai chegar",
                "named": "Você chegou {waypoint_name}, à direita"
            },
            "slight right": {
                "default": "Você chegou ao seu {nth} destino, à direita",
                "upcoming": "Você chegará ao seu {nth} destino, à direita",
                "short": "Você chegou",
                "short-upcoming": "Você vai chegar",
                "named": "Você chegou {waypoint_name}, à direita"
            },
            "slight left": {
                "default": "Você chegou ao seu {nth} destino, à esquerda",
                "upcoming": "Você chegará ao seu {nth} destino, à esquerda",
                "short": "Você chegou",
                "short-upcoming": "Você vai chegar",
                "named": "Você chegou {waypoint_name}, à esquerda"
            },
            "straight": {
                "default": "Você chegou ao seu {nth} destino, em frente",
                "upcoming": "Você vai chegar ao seu {nth} destino, em frente",
                "short": "Você chegou",
                "short-upcoming": "Você vai chegar",
                "named": "You have arrived at {waypoint_name}, straight ahead"
            }
        },
        "continue": {
            "default": {
                "default": "Vire {modifier}",
                "name": "Vire {modifier} para manter-se na {way_name}",
                "destination": "Vire {modifier} sentido {destination}",
                "exit": "Vire {modifier} em {way_name}"
            },
            "straight": {
                "default": "Continue em frente",
                "name": "Continue em frente para manter-se na {way_name}",
                "destination": "Continue em direção à {destination}",
                "distance": "Continue em frente por {distance}",
                "namedistance": "Continue na {way_name} por {distance}"
            },
            "sharp left": {
                "default": "Faça uma curva fechada a esquerda",
                "name": "Faça uma curva fechada a esquerda para manter-se na {way_name}",
                "destination": "Faça uma curva fechada a esquerda sentido {destination}"
            },
            "sharp right": {
                "default": "Faça uma curva fechada a direita",
                "name": "Faça uma curva fechada a direita para manter-se na {way_name}",
                "destination": "Faça uma curva fechada a direita sentido {destination}"
            },
            "slight left": {
                "default": "Faça uma curva suave a esquerda",
                "name": "Faça uma curva suave a esquerda para manter-se na {way_name}",
                "destination": "Faça uma curva suave a esquerda em direção a {destination}"
            },
            "slight right": {
                "default": "Faça uma curva suave a direita",
                "name": "Faça uma curva suave a direita para manter-se na {way_name}",
                "destination": "Faça uma curva suave a direita em direção a {destination}"
            },
            "uturn": {
                "default": "Faça o retorno",
                "name": "Faça o retorno e continue em {way_name}",
                "destination": "Faça o retorno sentido {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Siga {direction}",
                "name": "Siga {direction} em {way_name}",
                "namedistance": "Siga {direction} na {way_name} por {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Vire {modifier}",
                "name": "Vire {modifier} em {way_name}",
                "destination": "Vire {modifier} sentido {destination}"
            },
            "straight": {
                "default": "Continue em frente",
                "name": "Continue em frente em {way_name}",
                "destination": "Continue em frente sentido {destination}"
            },
            "uturn": {
                "default": "Faça o retorno no fim da rua",
                "name": "Faça o retorno em {way_name} no fim da rua",
                "destination": "Faça o retorno sentido {destination} no fim da rua"
            }
        },
        "fork": {
            "default": {
                "default": "Mantenha-se {modifier} na bifurcação",
                "name": "Mantenha-se {modifier} na bifurcação em {way_name}",
                "destination": "Mantenha-se {modifier} na bifurcação sentido {destination}"
            },
            "slight left": {
                "default": "Mantenha-se à esquerda na bifurcação",
                "name": "Mantenha-se à esquerda na bifurcação em {way_name}",
                "destination": "Mantenha-se à esquerda na bifurcação sentido {destination}"
            },
            "slight right": {
                "default": "Mantenha-se à direita na bifurcação",
                "name": "Mantenha-se à direita na bifurcação em {way_name}",
                "destination": "Mantenha-se à direita na bifurcação sentido {destination}"
            },
            "sharp left": {
                "default": "Faça uma curva fechada à esquerda na bifurcação",
                "name": "Faça uma curva fechada à esquerda em {way_name}",
                "destination": "Faça uma curva fechada à esquerda sentido {destination}"
            },
            "sharp right": {
                "default": "Faça uma curva fechada à direita na bifurcação",
                "name": "Faça uma curva fechada à direita em {way_name}",
                "destination": "Faça uma curva fechada à direita sentido {destination}"
            },
            "uturn": {
                "default": "Faça o retorno",
                "name": "Faça o retorno em {way_name}",
                "destination": "Faça o retorno sentido {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Entre {modifier}",
                "name": "Entre {modifier} na {way_name}",
                "destination": "Entre {modifier} em direção à {destination}"
            },
            "straight": {
                "default": "Mesclar",
                "name": "Entre reto na {way_name}",
                "destination": "Entre reto em direção à {destination}"
            },
            "slight left": {
                "default": "Entre à esquerda",
                "name": "Entre à esquerda na {way_name}",
                "destination": "Entre à esquerda em direção à {destination}"
            },
            "slight right": {
                "default": "Entre à direita",
                "name": "Entre à direita na {way_name}",
                "destination": "Entre à direita em direção à {destination}"
            },
            "sharp left": {
                "default": "Entre à esquerda",
                "name": "Entre à esquerda na {way_name}",
                "destination": "Entre à esquerda em direção à {destination}"
            },
            "sharp right": {
                "default": "Entre à direita",
                "name": "Entre à direita na {way_name}",
                "destination": "Entre à direita em direção à {destination}"
            },
            "uturn": {
                "default": "Faça o retorno",
                "name": "Faça o retorno em {way_name}",
                "destination": "Faça o retorno sentido {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Continue {modifier}",
                "name": "Continue {modifier} em {way_name}",
                "destination": "Continue {modifier} sentido {destination}"
            },
            "straight": {
                "default": "Continue em frente",
                "name": "Continue em {way_name}",
                "destination": "Continue em direção à {destination}"
            },
            "sharp left": {
                "default": "Faça uma curva fechada à esquerda",
                "name": "Faça uma curva fechada à esquerda em {way_name}",
                "destination": "Faça uma curva fechada à esquerda sentido {destination}"
            },
            "sharp right": {
                "default": "Faça uma curva fechada à direita",
                "name": "Faça uma curva fechada à direita em {way_name}",
                "destination": "Faça uma curva fechada à direita sentido {destination}"
            },
            "slight left": {
                "default": "Continue ligeiramente à esquerda",
                "name": "Continue ligeiramente à esquerda em {way_name}",
                "destination": "Continue ligeiramente à esquerda sentido {destination}"
            },
            "slight right": {
                "default": "Continue ligeiramente à direita",
                "name": "Continue ligeiramente à direita em {way_name}",
                "destination": "Continue ligeiramente à direita sentido {destination}"
            },
            "uturn": {
                "default": "Faça o retorno",
                "name": "Faça o retorno em {way_name}",
                "destination": "Faça o retorno sentido {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Continue {modifier}",
                "name": "Continue {modifier} em {way_name}",
                "destination": "Continue {modifier} sentido {destination}"
            },
            "uturn": {
                "default": "Faça o retorno",
                "name": "Faça o retorno em {way_name}",
                "destination": "Faça o retorno sentido {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Pegue a rampa",
                "name": "Pegue a rampa em {way_name}",
                "destination": "Pegue a rampa sentido {destination}",
                "exit": "Pegue a saída {exit}",
                "exit_destination": "Pegue a saída {exit} em direção à {destination}"
            },
            "left": {
                "default": "Pegue a rampa à esquerda",
                "name": "Pegue a rampa à esquerda em {way_name}",
                "destination": "Pegue a rampa à esquerda sentido {destination}",
                "exit": "Pegue a saída {exit} à esquerda",
                "exit_destination": "Pegue a saída {exit}  à esquerda em direção à {destination}"
            },
            "right": {
                "default": "Pegue a rampa à direita",
                "name": "Pegue a rampa à direita em {way_name}",
                "destination": "Pegue a rampa à direita sentido {destination}",
                "exit": "Pegue a saída {exit} à direita",
                "exit_destination": "Pegue a saída {exit} à direita em direção à {destination}"
            },
            "sharp left": {
                "default": "Pegue a rampa à esquerda",
                "name": "Pegue a rampa à esquerda em {way_name}",
                "destination": "Pegue a rampa à esquerda sentido {destination}",
                "exit": "Pegue a saída {exit} à esquerda",
                "exit_destination": "Pegue a saída {exit}  à esquerda em direção à {destination}"
            },
            "sharp right": {
                "default": "Pegue a rampa à direita",
                "name": "Pegue a rampa à direita em {way_name}",
                "destination": "Pegue a rampa à direita sentido {destination}",
                "exit": "Pegue a saída {exit} à direita",
                "exit_destination": "Pegue a saída {exit} à direita em direção à {destination}"
            },
            "slight left": {
                "default": "Pegue a rampa à esquerda",
                "name": "Pegue a rampa à esquerda em {way_name}",
                "destination": "Pegue a rampa à esquerda sentido {destination}",
                "exit": "Pegue a saída {exit} à esquerda",
                "exit_destination": "Pegue a saída {exit}  à esquerda em direção à {destination}"
            },
            "slight right": {
                "default": "Pegue a rampa à direita",
                "name": "Pegue a rampa à direita em {way_name}",
                "destination": "Pegue a rampa à direita sentido {destination}",
                "exit": "Pegue a saída {exit} à direita",
                "exit_destination": "Pegue a saída {exit} à direita em direção à {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Pegue a rampa",
                "name": "Pegue a rampa em {way_name}",
                "destination": "Pegue a rampa sentido {destination}"
            },
            "left": {
                "default": "Pegue a rampa à esquerda",
                "name": "Pegue a rampa à esquerda em {way_name}",
                "destination": "Pegue a rampa à esquerda sentido {destination}"
            },
            "right": {
                "default": "Pegue a rampa à direita",
                "name": "Pegue a rampa à direita em {way_name}",
                "destination": "Pegue a rampa à direita sentid {destination}"
            },
            "sharp left": {
                "default": "Pegue a rampa à esquerda",
                "name": "Pegue a rampa à esquerda em {way_name}",
                "destination": "Pegue a rampa à esquerda sentido {destination}"
            },
            "sharp right": {
                "default": "Pegue a rampa à direita",
                "name": "Pegue a rampa à direita em {way_name}",
                "destination": "Pegue a rampa à direita sentido {destination}"
            },
            "slight left": {
                "default": "Pegue a rampa à esquerda",
                "name": "Pegue a rampa à esquerda em {way_name}",
                "destination": "Pegue a rampa à esquerda sentido {destination}"
            },
            "slight right": {
                "default": "Pegue a rampa à direita",
                "name": "Pegue a rampa à direita em {way_name}",
                "destination": "Pegue a rampa à direita sentido {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Entre na rotatória",
                    "name": "Entre na rotatória e saia na {way_name}",
                    "destination": "Entre na rotatória e saia sentido {destination}"
                },
                "name": {
                    "default": "Entre em {rotary_name}",
                    "name": "Entre em {rotary_name} e saia em {way_name}",
                    "destination": "Entre em {rotary_name} e saia sentido {destination}"
                },
                "exit": {
                    "default": "Entre na rotatória e pegue a {exit_number} saída",
                    "name": "Entre na rotatória e pegue a {exit_number} saída na {way_name}",
                    "destination": "Entre na rotatória e pegue a {exit_number} saída sentido {destination}"
                },
                "name_exit": {
                    "default": "Entre em {rotary_name} e saia na {exit_number} saída",
                    "name": "Entre em {rotary_name} e saia na {exit_number} saída em {way_name}",
                    "destination": "Entre em {rotary_name} e saia na {exit_number} saída sentido {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Entre na rotatória e pegue a {exit_number} saída",
                    "name": "Entre na rotatória e pegue a {exit_number} saída na {way_name}",
                    "destination": "Entre na rotatória e pegue a {exit_number} saída sentido {destination}"
                },
                "default": {
                    "default": "Entre na rotatória",
                    "name": "Entre na rotatória e saia na {way_name}",
                    "destination": "Entre na rotatória e saia sentido {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Siga {modifier}",
                "name": "Siga {modifier} em {way_name}",
                "destination": "Siga {modifier} sentido {destination}"
            },
            "left": {
                "default": "Vire à esquerda",
                "name": "Vire à esquerda em {way_name}",
                "destination": "Vire à esquerda sentido {destination}"
            },
            "right": {
                "default": "Vire à direita",
                "name": "Vire à direita em {way_name}",
                "destination": "Vire à direita sentido {destination}"
            },
            "straight": {
                "default": "Continue em frente",
                "name": "Continue em frente em {way_name}",
                "destination": "Continue em frente sentido {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Saia da rotatória",
                "name": "Exit the traffic circle onto {way_name}",
                "destination": "Exit the traffic circle towards {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Saia da rotatória",
                "name": "Exit the traffic circle onto {way_name}",
                "destination": "Exit the traffic circle towards {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Siga {modifier}",
                "name": "Siga {modifier} em {way_name}",
                "destination": "Siga {modifier} sentido {destination}"
            },
            "left": {
                "default": "Vire à esquerda",
                "name": "Vire à esquerda em {way_name}",
                "destination": "Vire à esquerda sentido {destination}"
            },
            "right": {
                "default": "Vire à direita",
                "name": "Vire à direita em {way_name}",
                "destination": "Vire à direita sentido {destination}"
            },
            "straight": {
                "default": "Siga em frente",
                "name": "Siga em frente em {way_name}",
                "destination": "Siga em frente sentido {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Continue em frente"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],40:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1º",
                "2": "2º",
                "3": "3º",
                "4": "4º",
                "5": "5º",
                "6": "6º",
                "7": "7º",
                "8": "8º",
                "9": "9º",
                "10": "10º"
            },
            "direction": {
                "north": "norte",
                "northeast": "nordeste",
                "east": "este",
                "southeast": "sudeste",
                "south": "sul",
                "southwest": "sudoeste",
                "west": "oeste",
                "northwest": "noroeste"
            },
            "modifier": {
                "left": "à esquerda",
                "right": "à direita",
                "sharp left": "acentuadamente à esquerda",
                "sharp right": "acentuadamente à direita",
                "slight left": "ligeiramente à esquerda",
                "slight right": "ligeiramente à direita",
                "straight": "em frente",
                "uturn": "inversão de marcha"
            },
            "lanes": {
                "xo": "Mantenha-se à direita",
                "ox": "Mantenha-se à esquerda",
                "xox": "Mantenha-se ao meio",
                "oxo": "Mantenha-se à esquerda ou à direita"
            }
        },
        "modes": {
            "ferry": {
                "default": "Apanhe o ferry",
                "name": "Apanhe o ferry {way_name}",
                "destination": "Apanhe o ferry para {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, depois, a {distance}, {instruction_two}",
            "two linked": "{instruction_one}, depois {instruction_two}",
            "one in distance": "A {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "saída {exit}"
        },
        "arrive": {
            "default": {
                "default": "Chegou ao seu {nth} destino",
                "upcoming": "Está a chegar ao seu {nth} destino",
                "short": "Chegou",
                "short-upcoming": "Está a chegar",
                "named": "Chegou a {waypoint_name}"
            },
            "left": {
                "default": "Chegou ao seu {nth} destino, à esquerda",
                "upcoming": "Está a chegar ao seu {nth} destino, à esquerda",
                "short": "Chegou",
                "short-upcoming": "Está a chegar",
                "named": "Chegou a {waypoint_name}, à esquerda"
            },
            "right": {
                "default": "Chegou ao seu {nth} destino, à direita",
                "upcoming": "Está a chegar ao seu {nth} destino, à direita",
                "short": "Chegou",
                "short-upcoming": "Está a chegar",
                "named": "Chegou a {waypoint_name}, à direita"
            },
            "sharp left": {
                "default": "Chegou ao seu {nth} destino, à esquerda",
                "upcoming": "Está a chegar ao seu {nth} destino, à esquerda",
                "short": "Chegou",
                "short-upcoming": "Está a chegar",
                "named": "Chegou a {waypoint_name}, à esquerda"
            },
            "sharp right": {
                "default": "Chegou ao seu {nth} destino, à direita",
                "upcoming": "Está a chegar ao seu {nth} destino, à direita",
                "short": "Chegou",
                "short-upcoming": "Está a chegar",
                "named": "Chegou a {waypoint_name}, à direita"
            },
            "slight right": {
                "default": "Chegou ao seu {nth} destino, à direita",
                "upcoming": "Está a chegar ao seu {nth} destino, à direita",
                "short": "Chegou",
                "short-upcoming": "Está a chegar",
                "named": "Chegou a {waypoint_name}, à direita"
            },
            "slight left": {
                "default": "Chegou ao seu {nth} destino, à esquerda",
                "upcoming": "Está a chegar ao seu {nth} destino, à esquerda",
                "short": "Chegou",
                "short-upcoming": "Está a chegar",
                "named": "Chegou a {waypoint_name}, à esquerda"
            },
            "straight": {
                "default": "Chegou ao seu {nth} destino, em frente",
                "upcoming": "Está a chegar ao seu {nth} destino, em frente",
                "short": "Chegou",
                "short-upcoming": "Está a chegar",
                "named": "Chegou a {waypoint_name}, em frente"
            }
        },
        "continue": {
            "default": {
                "default": "Vire {modifier}",
                "name": "Vire {modifier} para se manter em {way_name}",
                "destination": "Vire {modifier} em direção a {destination}",
                "exit": "Vire {modifier} para {way_name}"
            },
            "straight": {
                "default": "Continue em frente",
                "name": "Continue em frente para se manter em {way_name}",
                "destination": "Continue em direção a {destination}",
                "distance": "Continue em frente por {distance}",
                "namedistance": "Continue em {way_name} por {distance}"
            },
            "sharp left": {
                "default": "Vire acentuadamente à esquerda",
                "name": "Vire acentuadamente à esquerda para se manter em {way_name}",
                "destination": "Vire acentuadamente à esquerda em direção a {destination}"
            },
            "sharp right": {
                "default": "Vire acentuadamente à direita",
                "name": "Vire acentuadamente à direita para se manter em {way_name}",
                "destination": "Vire acentuadamente à direita em direção a {destination}"
            },
            "slight left": {
                "default": "Vire ligeiramente à esquerda",
                "name": "Vire ligeiramente à esquerda para se manter em {way_name}",
                "destination": "Vire ligeiramente à esquerda em direção a {destination}"
            },
            "slight right": {
                "default": "Vire ligeiramente à direita",
                "name": "Vire ligeiramente à direita para se manter em {way_name}",
                "destination": "Vire ligeiramente à direita em direção a {destination}"
            },
            "uturn": {
                "default": "Faça inversão de marcha",
                "name": "Faça inversão de marcha e continue em {way_name}",
                "destination": "Faça inversão de marcha em direção a {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Dirija-se para {direction}",
                "name": "Dirija-se para {direction} em {way_name}",
                "namedistance": "Dirija-se para {direction} em {way_name} por {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Vire {modifier}",
                "name": "Vire {modifier} para {way_name}",
                "destination": "Vire {modifier} em direção a {destination}"
            },
            "straight": {
                "default": "Continue em frente",
                "name": "Continue em frente para {way_name}",
                "destination": "Continue em frente em direção a {destination}"
            },
            "uturn": {
                "default": "No final da estrada faça uma inversão de marcha",
                "name": "No final da estrada faça uma inversão de marcha para {way_name} ",
                "destination": "No final da estrada faça uma inversão de marcha em direção a {destination}"
            }
        },
        "fork": {
            "default": {
                "default": "Na bifurcação mantenha-se {modifier}",
                "name": "Mantenha-se {modifier} para {way_name}",
                "destination": "Mantenha-se {modifier} em direção a {destination}"
            },
            "slight left": {
                "default": "Na bifurcação mantenha-se à esquerda",
                "name": "Mantenha-se à esquerda para {way_name}",
                "destination": "Mantenha-se à esquerda em direção a {destination}"
            },
            "slight right": {
                "default": "Na bifurcação mantenha-se à direita",
                "name": "Mantenha-se à direita para {way_name}",
                "destination": "Mantenha-se à direita em direção a {destination}"
            },
            "sharp left": {
                "default": "Na bifurcação vire acentuadamente à esquerda",
                "name": "Vire acentuadamente à esquerda para {way_name}",
                "destination": "Vire acentuadamente à esquerda em direção a {destination}"
            },
            "sharp right": {
                "default": "Na bifurcação vire acentuadamente à direita",
                "name": "Vire acentuadamente à direita para {way_name}",
                "destination": "Vire acentuadamente à direita em direção a {destination}"
            },
            "uturn": {
                "default": "Faça inversão de marcha",
                "name": "Faça inversão de marcha para {way_name}",
                "destination": "Faça inversão de marcha em direção a {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Una-se ao tráfego {modifier}",
                "name": "Una-se ao tráfego {modifier} para {way_name}",
                "destination": "Una-se ao tráfego {modifier} em direção a {destination}"
            },
            "straight": {
                "default": "Una-se ao tráfego",
                "name": " Una-se ao tráfego para {way_name}",
                "destination": "Una-se ao tráfego em direção a {destination}"
            },
            "slight left": {
                "default": "Una-se ao tráfego à esquerda",
                "name": "Una-se ao tráfego à esquerda para {way_name}",
                "destination": "Una-se ao tráfego à esquerda em direção a {destination}"
            },
            "slight right": {
                "default": "Una-se ao tráfego à direita",
                "name": "Una-se ao tráfego à direita para {way_name}",
                "destination": "Una-se ao tráfego à direita em direção a {destination}"
            },
            "sharp left": {
                "default": "Una-se ao tráfego à esquerda",
                "name": "Una-se ao tráfego à esquerda para {way_name}",
                "destination": "Una-se ao tráfego à esquerda em direção a {destination}"
            },
            "sharp right": {
                "default": "Una-se ao tráfego à direita",
                "name": "Una-se ao tráfego à direita para {way_name}",
                "destination": "Una-se ao tráfego à direita em direção a {destination}"
            },
            "uturn": {
                "default": "Faça inversão de marcha",
                "name": "Faça inversão de marcha para {way_name}",
                "destination": "Faça inversão de marcha em direção a {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Continue {modifier}",
                "name": "Continue {modifier} para {way_name}",
                "destination": "Continue {modifier} em direção a {destination}"
            },
            "straight": {
                "default": "Continue em frente",
                "name": "Continue para {way_name}",
                "destination": "Continue em direção a {destination}"
            },
            "sharp left": {
                "default": "Vire acentuadamente à esquerda",
                "name": "Vire acentuadamente à esquerda para {way_name}",
                "destination": "Vire acentuadamente à esquerda em direção a{destination}"
            },
            "sharp right": {
                "default": "Vire acentuadamente à direita",
                "name": "Vire acentuadamente à direita para {way_name}",
                "destination": "Vire acentuadamente à direita em direção a {destination}"
            },
            "slight left": {
                "default": "Continue ligeiramente à esquerda",
                "name": "Continue ligeiramente à esquerda para {way_name}",
                "destination": "Continue ligeiramente à esquerda em direção a {destination}"
            },
            "slight right": {
                "default": "Continue ligeiramente à direita",
                "name": "Continue ligeiramente à direita para {way_name}",
                "destination": "Continue ligeiramente à direita em direção a {destination}"
            },
            "uturn": {
                "default": "Faça inversão de marcha",
                "name": "Faça inversão de marcha para {way_name}",
                "destination": "Faça inversão de marcha em direção a {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Continue {modifier}",
                "name": "Continue {modifier} para {way_name}",
                "destination": "Continue {modifier} em direção a {destination}"
            },
            "uturn": {
                "default": "Faça inversão de marcha",
                "name": "Faça inversão de marcha para {way_name}",
                "destination": "Faça inversão de marcha em direção a {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Saia na saída",
                "name": "Saia na saída para {way_name}",
                "destination": "Saia na saída em direção a {destination}",
                "exit": "Saia na saída {exit}",
                "exit_destination": "Saia na saída {exit} em direção a {destination}"
            },
            "left": {
                "default": "Saia na saída à esquerda",
                "name": "Saia na saída à esquerda para {way_name}",
                "destination": "Saia na saída à esquerda em direção a {destination}",
                "exit": "Saia na saída {exit} à esquerda",
                "exit_destination": "Saia na saída {exit} à esquerda em direção a {destination}"
            },
            "right": {
                "default": "Saia na saída à direita",
                "name": "Saia na saída à direita para {way_name}",
                "destination": "Saia na saída à direita em direção a {destination}",
                "exit": "Saia na saída {exit} à direita",
                "exit_destination": "Saia na saída {exit} à direita em direção a {destination}"
            },
            "sharp left": {
                "default": "Saia na saída à esquerda",
                "name": "Saia na saída à esquerda para {way_name}",
                "destination": "Saia na saída à esquerda em direção a {destination}",
                "exit": "Saia na saída {exit} à esquerda",
                "exit_destination": "Saia na saída {exit} à esquerda em direção a {destination}"
            },
            "sharp right": {
                "default": "Saia na saída à direita",
                "name": "Saia na saída à direita para {way_name}",
                "destination": "Saia na saída à direita em direção a {destination}",
                "exit": "Saia na saída {exit} à direita",
                "exit_destination": "Saia na saída {exit} à direita em direção a {destination}"
            },
            "slight left": {
                "default": "Saia na saída à esquerda",
                "name": "Saia na saída à esquerda para {way_name}",
                "destination": "Saia na saída à esquerda em direção a {destination}",
                "exit": "Saia na saída {exit} à esquerda",
                "exit_destination": "Saia na saída {exit} à esquerda em direção a {destination}"
            },
            "slight right": {
                "default": "Saia na saída à direita",
                "name": "Saia na saída à direita para {way_name}",
                "destination": "Saia na saída à direita em direção a {destination}",
                "exit": "Saia na saída {exit} à direita",
                "exit_destination": "Saia na saída {exit} à direita em direção a {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Saia na saída",
                "name": "Saia na saída para {way_name}",
                "destination": "Saia na saída em direção a {destination}"
            },
            "left": {
                "default": "Saia na saída à esquerda",
                "name": "Saia na saída à esquerda para {way_name}",
                "destination": "Saia na saída à esquerda em direção a {destination}"
            },
            "right": {
                "default": "Saia na saída à direita",
                "name": "Saia na saída à direita para {way_name}",
                "destination": "Saia na saída à direita em direção a {destination}"
            },
            "sharp left": {
                "default": "Saia na saída à esquerda",
                "name": "Saia na saída à esquerda para {way_name}",
                "destination": "Saia na saída à esquerda em direção a {destination}"
            },
            "sharp right": {
                "default": "Saia na saída à direita",
                "name": "Saia na saída à direita para {way_name}",
                "destination": "Saia na saída à direita em direção a {destination}"
            },
            "slight left": {
                "default": "Saia na saída à esquerda",
                "name": "Saia na saída à esquerda para {way_name}",
                "destination": "Saia na saída à esquerda em direção a {destination}"
            },
            "slight right": {
                "default": "Saia na saída à direita",
                "name": "Saia na saída à direita para {way_name}",
                "destination": "Saia na saída à direita em direção a {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Entre na rotunda",
                    "name": "Entre na rotunda e saia para {way_name}",
                    "destination": "Entre na rotunda e saia em direção a {destination}"
                },
                "name": {
                    "default": "Entre em {rotary_name}",
                    "name": "Entre em {rotary_name} e saia para {way_name}",
                    "destination": "Entre em {rotary_name} e saia em direção a {destination}"
                },
                "exit": {
                    "default": "Entre na rotunda e saia na saída {exit_number}",
                    "name": "Entre na rotunda e saia na saída {exit_number} para {way_name}",
                    "destination": "Entre na rotunda e saia na saída {exit_number} em direção a {destination}"
                },
                "name_exit": {
                    "default": "Entre em {rotary_name} e saia na saída {exit_number}",
                    "name": "Entre em {rotary_name} e saia na saída {exit_number} para {way_name}",
                    "destination": "Entre em{rotary_name} e saia na saída {exit_number} em direção a {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Entre na rotunda e saia na saída {exit_number}",
                    "name": "Entre na rotunda e saia na saída {exit_number} para {way_name}",
                    "destination": "Entre na rotunda e saia na saída {exit_number} em direção a {destination}"
                },
                "default": {
                    "default": "Entre na rotunda",
                    "name": "Entre na rotunda e saia para {way_name}",
                    "destination": "Entre na rotunda e saia em direção a {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Siga {modifier}",
                "name": "Siga {modifier} para {way_name}",
                "destination": "Siga {modifier} em direção a {destination}"
            },
            "left": {
                "default": "Vire à esquerda",
                "name": "Vire à esquerda para {way_name}",
                "destination": "Vire à esquerda em direção a {destination}"
            },
            "right": {
                "default": "Vire à direita",
                "name": "Vire à direita para {way_name}",
                "destination": "Vire à direita em direção a {destination}"
            },
            "straight": {
                "default": "Continue em frente",
                "name": "Continue em frente para {way_name}",
                "destination": "Continue em frente em direção a {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Saia da rotunda",
                "name": "Saia da rotunda para {way_name}",
                "destination": "Saia da rotunda em direção a {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Saia da rotunda",
                "name": "Saia da rotunda para {way_name}",
                "destination": "Saia da rotunda em direção a {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Siga {modifier}",
                "name": "Siga {modifier} para{way_name}",
                "destination": "Siga {modifier} em direção a {destination}"
            },
            "left": {
                "default": "Vire à esquerda",
                "name": "Vire à esquerda para {way_name}",
                "destination": "Vire à esquerda em direção a {destination}"
            },
            "right": {
                "default": "Vire à direita",
                "name": "Vire à direita para {way_name}",
                "destination": "Vire à direita em direção a {destination}"
            },
            "straight": {
                "default": "Vá em frente",
                "name": "Vá em frente para {way_name}",
                "destination": "Vá em frente em direção a {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Continue em frente"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],41:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "prima",
                "2": "a doua",
                "3": "a treia",
                "4": "a patra",
                "5": "a cincea",
                "6": "a șasea",
                "7": "a șaptea",
                "8": "a opta",
                "9": "a noua",
                "10": "a zecea"
            },
            "direction": {
                "north": "nord",
                "northeast": "nord-est",
                "east": "est",
                "southeast": "sud-est",
                "south": "sud",
                "southwest": "sud-vest",
                "west": "vest",
                "northwest": "nord-vest"
            },
            "modifier": {
                "left": "stânga",
                "right": "dreapta",
                "sharp left": "puternic stânga",
                "sharp right": "puternic dreapta",
                "slight left": "ușor stânga",
                "slight right": "ușor dreapta",
                "straight": "înainte",
                "uturn": "întoarcere"
            },
            "lanes": {
                "xo": "Țineți stânga",
                "ox": "Țineți dreapta",
                "xox": "Țineți pe mijloc",
                "oxo": "Țineți pe laterale"
            }
        },
        "modes": {
            "ferry": {
                "default": "Luați feribotul",
                "name": "Luați feribotul {way_name}",
                "destination": "Luați feribotul spre {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, apoi în {distance}, {instruction_two}",
            "two linked": "{instruction_one} apoi {instruction_two}",
            "one in distance": "În {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "ieșirea {exit}"
        },
        "arrive": {
            "default": {
                "default": "Ați ajuns la {nth} destinație",
                "upcoming": "Ați ajuns la {nth} destinație",
                "short": "Ați ajuns",
                "short-upcoming": "Veți ajunge",
                "named": "Ați ajuns {waypoint_name}"
            },
            "left": {
                "default": "Ați ajuns la {nth} destinație, pe stânga",
                "upcoming": "Ați ajuns la {nth} destinație, pe stânga",
                "short": "Ați ajuns",
                "short-upcoming": "Veți ajunge",
                "named": "Ați ajuns {waypoint_name}, pe stânga"
            },
            "right": {
                "default": "Ați ajuns la {nth} destinație, pe dreapta",
                "upcoming": "Ați ajuns la {nth} destinație, pe dreapta",
                "short": "Ați ajuns",
                "short-upcoming": "Veți ajunge",
                "named": "Ați ajuns {waypoint_name}, pe dreapta"
            },
            "sharp left": {
                "default": "Ați ajuns la {nth} destinație, pe stânga",
                "upcoming": "Ați ajuns la {nth} destinație, pe stânga",
                "short": "Ați ajuns",
                "short-upcoming": "Veți ajunge",
                "named": "Ați ajuns {waypoint_name}, pe stânga"
            },
            "sharp right": {
                "default": "Ați ajuns la {nth} destinație, pe dreapta",
                "upcoming": "Ați ajuns la {nth} destinație, pe dreapta",
                "short": "Ați ajuns",
                "short-upcoming": "Veți ajunge",
                "named": "Ați ajuns {waypoint_name}, pe dreapta"
            },
            "slight right": {
                "default": "Ați ajuns la {nth} destinație, pe dreapta",
                "upcoming": "Ați ajuns la {nth} destinație, pe dreapta",
                "short": "Ați ajuns",
                "short-upcoming": "Veți ajunge",
                "named": "Ați ajuns {waypoint_name}, pe dreapta"
            },
            "slight left": {
                "default": "Ați ajuns la {nth} destinație, pe stânga",
                "upcoming": "Ați ajuns la {nth} destinație, pe stânga",
                "short": "Ați ajuns",
                "short-upcoming": "Veți ajunge",
                "named": "Ați ajuns {waypoint_name}, pe stânga"
            },
            "straight": {
                "default": "Ați ajuns la {nth} destinație, în față",
                "upcoming": "Ați ajuns la {nth} destinație, în față",
                "short": "Ați ajuns",
                "short-upcoming": "Veți ajunge",
                "named": "Ați ajuns {waypoint_name}, în față"
            }
        },
        "continue": {
            "default": {
                "default": "Virați {modifier}",
                "name": "Virați {modifier} pe {way_name}",
                "destination": "Virați {modifier} spre {destination}",
                "exit": "Virați {modifier} pe {way_name}"
            },
            "straight": {
                "default": "Mergeți înainte",
                "name": "Mergeți înainte pe {way_name}",
                "destination": "Continuați spre {destination}",
                "distance": "Mergeți înainte pentru {distance}",
                "namedistance": "Continuați pe {way_name} pentru {distance}"
            },
            "sharp left": {
                "default": "Virați puternic la stânga",
                "name": "Virați puternic la stânga pe {way_name}",
                "destination": "Virați puternic la stânga spre {destination}"
            },
            "sharp right": {
                "default": "Virați puternic la dreapta",
                "name": "Virați puternic la dreapta pe {way_name}",
                "destination": "Virați puternic la dreapta spre {destination}"
            },
            "slight left": {
                "default": "Virați ușor la stânga",
                "name": "Virați ușor la stânga pe {way_name}",
                "destination": "Virați ușor la stânga spre {destination}"
            },
            "slight right": {
                "default": "Virați ușor la dreapta",
                "name": "Virați ușor la dreapta pe {way_name}",
                "destination": "Virați ușor la dreapta spre {destination}"
            },
            "uturn": {
                "default": "Întoarceți-vă",
                "name": "Întoarceți-vă și continuați pe {way_name}",
                "destination": "Întoarceți-vă spre {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Mergeți spre {direction}",
                "name": "Mergeți spre {direction} pe {way_name}",
                "namedistance": "Mergeți spre {direction} pe {way_name} pentru {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Virați {modifier}",
                "name": "Virați {modifier} pe {way_name}",
                "destination": "Virați {modifier} spre {destination}"
            },
            "straight": {
                "default": "Continuați înainte",
                "name": "Continuați înainte pe {way_name}",
                "destination": "Continuați înainte spre {destination}"
            },
            "uturn": {
                "default": "Întoarceți-vă la sfârșitul drumului",
                "name": "Întoarceți-vă pe {way_name} la sfârșitul drumului",
                "destination": "Întoarceți-vă spre {destination} la sfârșitul drumului"
            }
        },
        "fork": {
            "default": {
                "default": "Țineți {modifier} la bifurcație",
                "name": "Țineți {modifier} la bifurcație pe {way_name}",
                "destination": "Țineți {modifier} la bifurcație spre {destination}"
            },
            "slight left": {
                "default": "Țineți pe stânga la bifurcație",
                "name": "Țineți pe stânga la bifurcație pe {way_name}",
                "destination": "Țineți pe stânga la bifurcație spre {destination}"
            },
            "slight right": {
                "default": "Țineți pe dreapta la bifurcație",
                "name": "Țineți pe dreapta la bifurcație pe {way_name}",
                "destination": "Țineți pe dreapta la bifurcație spre {destination}"
            },
            "sharp left": {
                "default": "Virați puternic stânga la bifurcație",
                "name": "Virați puternic stânga la bifurcație pe {way_name}",
                "destination": "Virați puternic stânga la bifurcație spre {destination}"
            },
            "sharp right": {
                "default": "Virați puternic dreapta la bifurcație",
                "name": "Virați puternic dreapta la bifurcație pe {way_name}",
                "destination": "Virați puternic dreapta la bifurcație spre {destination}"
            },
            "uturn": {
                "default": "Întoarceți-vă",
                "name": "Întoarceți-vă pe {way_name}",
                "destination": "Întoarceți-vă spre {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Intrați în {modifier}",
                "name": "Intrați în {modifier} pe {way_name}",
                "destination": "Intrați în {modifier} spre {destination}"
            },
            "straight": {
                "default": "Intrați",
                "name": "Intrați pe {way_name}",
                "destination": "Intrați spre {destination}"
            },
            "slight left": {
                "default": "Intrați în stânga",
                "name": "Intrați în stânga pe {way_name}",
                "destination": "Intrați în stânga spre {destination}"
            },
            "slight right": {
                "default": "Intrați în dreapta",
                "name": "Intrați în dreapta pe {way_name}",
                "destination": "Intrați în dreapta spre {destination}"
            },
            "sharp left": {
                "default": "Intrați în stânga",
                "name": "Intrați în stânga pe {way_name}",
                "destination": "Intrați în stânga spre {destination}"
            },
            "sharp right": {
                "default": "Intrați în dreapta",
                "name": "Intrați în dreapta pe {way_name}",
                "destination": "Intrați în dreapta spre {destination}"
            },
            "uturn": {
                "default": "Întoarceți-vă",
                "name": "Întoarceți-vă pe {way_name}",
                "destination": "Întoarceți-vă spre {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Continuați {modifier}",
                "name": "Continuați {modifier} pe {way_name}",
                "destination": "Continuați {modifier} spre {destination}"
            },
            "straight": {
                "default": "Continuați înainte",
                "name": "Continuați pe {way_name}",
                "destination": "Continuați spre {destination}"
            },
            "sharp left": {
                "default": "Virați puternic la stânga",
                "name": "Virați puternic la stânga pe {way_name}",
                "destination": "Virați puternic la stânga spre {destination}"
            },
            "sharp right": {
                "default": "Virați puternic la dreapta",
                "name": "Virați puternic la dreapta pe {way_name}",
                "destination": "Virați puternic la dreapta spre {destination}"
            },
            "slight left": {
                "default": "Continuați ușor la stânga",
                "name": "Continuați ușor la stânga pe {way_name}",
                "destination": "Continuați ușor la stânga spre {destination}"
            },
            "slight right": {
                "default": "Continuați ușor la dreapta",
                "name": "Continuați ușor la dreapta pe {way_name}",
                "destination": "Continuați ușor la dreapta spre {destination}"
            },
            "uturn": {
                "default": "Întoarceți-vă",
                "name": "Întoarceți-vă pe {way_name}",
                "destination": "Întoarceți-vă spre {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Continuați {modifier}",
                "name": "Continuați {modifier} pe {way_name}",
                "destination": "Continuați {modifier} spre {destination}"
            },
            "uturn": {
                "default": "Întoarceți-vă",
                "name": "Întoarceți-vă pe {way_name}",
                "destination": "Întoarceți-vă spre {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Urmați breteaua",
                "name": "Urmați breteaua pe {way_name}",
                "destination": "Urmați breteaua spre {destination}",
                "exit": "Urmați ieșirea {exit}",
                "exit_destination": "Urmați ieșirea {exit} spre {destination}"
            },
            "left": {
                "default": "Urmați breteaua din stânga",
                "name": "Urmați breteaua din stânga pe {way_name}",
                "destination": "Urmați breteaua din stânga spre {destination}",
                "exit": "Urmați ieșirea {exit} pe stânga",
                "exit_destination": "Urmați ieșirea {exit} pe stânga spre {destination}"
            },
            "right": {
                "default": "Urmați breteaua din dreapta",
                "name": "Urmați breteaua din dreapta pe {way_name}",
                "destination": "Urmați breteaua din dreapta spre {destination}",
                "exit": "Urmați ieșirea {exit} pe dreapta",
                "exit_destination": "Urmați ieșirea {exit} pe dreapta spre {destination}"
            },
            "sharp left": {
                "default": "Urmați breteaua din stânga",
                "name": "Urmați breteaua din stânga pe {way_name}",
                "destination": "Urmați breteaua din stânga spre {destination}",
                "exit": "Urmați ieșirea {exit} pe stânga",
                "exit_destination": "Urmați ieșirea {exit} pe stânga spre {destination}"
            },
            "sharp right": {
                "default": "Urmați breteaua din dreapta",
                "name": "Urmați breteaua din dreapta pe {way_name}",
                "destination": "Urmați breteaua din dreapta spre {destination}",
                "exit": "Urmați ieșirea {exit} pe dreapta",
                "exit_destination": "Urmați ieșirea {exit} pe dreapta spre {destination}"
            },
            "slight left": {
                "default": "Urmați breteaua din stânga",
                "name": "Urmați breteaua din stânga pe {way_name}",
                "destination": "Urmați breteaua din stânga spre {destination}",
                "exit": "Urmați ieșirea {exit} pe stânga",
                "exit_destination": "Urmați ieșirea {exit} pe stânga spre {destination}"
            },
            "slight right": {
                "default": "Urmați breteaua din dreapta",
                "name": "Urmați breteaua din dreapta pe {way_name}",
                "destination": "Urmați breteaua din dreapta spre {destination}",
                "exit": "Urmați ieșirea {exit} pe dreapta",
                "exit_destination": "Urmați ieșirea {exit} pe dreapta spre {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Urmați breteaua de intrare",
                "name": "Urmați breteaua pe {way_name}",
                "destination": "Urmați breteaua spre {destination}"
            },
            "left": {
                "default": "Urmați breteaua din stânga",
                "name": "Urmați breteaua din stânga pe {way_name}",
                "destination": "Urmați breteaua din stânga spre {destination}"
            },
            "right": {
                "default": "Urmați breteaua din dreapta",
                "name": "Urmați breteaua din dreapta pe {way_name}",
                "destination": "Urmați breteaua din dreapta spre {destination}"
            },
            "sharp left": {
                "default": "Urmați breteaua din stânga",
                "name": "Urmați breteaua din stânga pe {way_name}",
                "destination": "Urmați breteaua din stânga spre {destination}"
            },
            "sharp right": {
                "default": "Urmați breteaua din dreapta",
                "name": "Urmați breteaua din dreapta pe {way_name}",
                "destination": "Urmați breteaua din dreapta spre {destination}"
            },
            "slight left": {
                "default": "Urmați breteaua din stânga",
                "name": "Urmați breteaua din stânga pe {way_name}",
                "destination": "Urmați breteaua din stânga spre {destination}"
            },
            "slight right": {
                "default": "Urmați breteaua din dreapta",
                "name": "Urmați breteaua din dreapta pe {way_name}",
                "destination": "Urmați breteaua din dreapta spre {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Intrați în sensul giratoriu",
                    "name": "Intrați în sensul giratoriu și ieșiți pe {way_name}",
                    "destination": "Intrați în sensul giratoriu și ieșiți spre {destination}"
                },
                "name": {
                    "default": "Intrați în {rotary_name}",
                    "name": "Intrați în {rotary_name} și ieșiți pe {way_name}",
                    "destination": "Intrați în {rotary_name} și ieșiți spre {destination}"
                },
                "exit": {
                    "default": "Intrați în sensul giratoriu și urmați {exit_number} ieșire",
                    "name": "Intrați în sensul giratoriu și urmați {exit_number} ieșire pe {way_name}",
                    "destination": "Intrați în sensul giratoriu și urmați {exit_number} ieșire spre {destination}"
                },
                "name_exit": {
                    "default": "Intrați în {rotary_name} și urmați {exit_number} ieșire",
                    "name": "Intrați în {rotary_name} și urmați {exit_number} ieșire pe {way_name}",
                    "destination": "Intrați în  {rotary_name} și urmați {exit_number} ieșire spre {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Intrați în sensul giratoriu și urmați {exit_number} ieșire",
                    "name": "Intrați în sensul giratoriu și urmați {exit_number} ieșire pe {way_name}",
                    "destination": "Intrați în sensul giratoriu și urmați {exit_number} ieșire spre {destination}"
                },
                "default": {
                    "default": "Intrați în sensul giratoriu",
                    "name": "Intrați în sensul giratoriu și ieșiți pe {way_name}",
                    "destination": "Intrați în sensul giratoriu și ieșiți spre {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "La sensul giratoriu virați {modifier}",
                "name": "La sensul giratoriu virați {modifier} pe {way_name}",
                "destination": "La sensul giratoriu virați {modifier} spre {destination}"
            },
            "left": {
                "default": "La sensul giratoriu virați la stânga",
                "name": "La sensul giratoriu virați la stânga pe {way_name}",
                "destination": "La sensul giratoriu virați la stânga spre {destination}"
            },
            "right": {
                "default": "La sensul giratoriu virați la dreapta",
                "name": "La sensul giratoriu virați la dreapta pe {way_name}",
                "destination": "La sensul giratoriu virați la dreapta spre {destination}"
            },
            "straight": {
                "default": "La sensul giratoriu continuați înainte",
                "name": "La sensul giratoriu continuați înainte pe {way_name}",
                "destination": "La sensul giratoriu continuați înainte spre {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Ieșiți din sensul giratoriu",
                "name": "Ieșiți din sensul giratoriu pe {way_name}",
                "destination": "Ieșiți din sensul giratoriu spre {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Ieșiți din sensul giratoriu",
                "name": "Ieșiți din sensul giratoriu pe {way_name}",
                "destination": "Ieșiți din sensul giratoriu spre {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Virați {modifier}",
                "name": "Virați {modifier} pe {way_name}",
                "destination": "Virați {modifier} spre {destination}"
            },
            "left": {
                "default": "Virați la stânga",
                "name": "Virați la stânga pe {way_name}",
                "destination": "Virați la stânga spre {destination}"
            },
            "right": {
                "default": "Virați la dreapta",
                "name": "Virați la dreapta pe {way_name}",
                "destination": "Virați la dreapta spre {destination}"
            },
            "straight": {
                "default": "Mergeți înainte",
                "name": "Mergeți înainte pe {way_name}",
                "destination": "Mergeți înainte spre {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Mergeți înainte"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],42:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "первый",
                "2": "второй",
                "3": "третий",
                "4": "четвёртый",
                "5": "пятый",
                "6": "шестой",
                "7": "седьмой",
                "8": "восьмой",
                "9": "девятый",
                "10": "десятый"
            },
            "direction": {
                "north": "северном",
                "northeast": "северо-восточном",
                "east": "восточном",
                "southeast": "юго-восточном",
                "south": "южном",
                "southwest": "юго-западном",
                "west": "западном",
                "northwest": "северо-западном"
            },
            "modifier": {
                "left": "налево",
                "right": "направо",
                "sharp left": "налево",
                "sharp right": "направо",
                "slight left": "левее",
                "slight right": "правее",
                "straight": "прямо",
                "uturn": "на разворот"
            },
            "lanes": {
                "xo": "Держитесь правее",
                "ox": "Держитесь левее",
                "xox": "Держитесь посередине",
                "oxo": "Держитесь слева или справа"
            }
        },
        "modes": {
            "ferry": {
                "default": "Погрузитесь на паром",
                "name": "Погрузитесь на паром {way_name}",
                "destination": "Погрузитесь на паром в направлении {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, затем через {distance} {instruction_two}",
            "two linked": "{instruction_one}, затем {instruction_two}",
            "one in distance": "Через {distance} {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "съезд {exit}"
        },
        "arrive": {
            "default": {
                "default": "Вы прибыли в {nth} пункт назначения",
                "upcoming": "Вы прибудете в {nth} пункт назначения",
                "short": "Вы прибыли",
                "short-upcoming": "Вы скоро прибудете",
                "named": "Вы прибыли в пункт назначения, {waypoint_name}"
            },
            "left": {
                "default": "Вы прибыли в {nth} пункт назначения, он находится слева",
                "upcoming": "Вы прибудете в {nth} пункт назначения, он будет слева",
                "short": "Вы прибыли",
                "short-upcoming": "Вы скоро прибудете",
                "named": "Вы прибыли в пункт назначения, {waypoint_name}, он находится слева"
            },
            "right": {
                "default": "Вы прибыли в {nth} пункт назначения, он находится справа",
                "upcoming": "Вы прибудете в {nth} пункт назначения, он будет справа",
                "short": "Вы прибыли",
                "short-upcoming": "Вы скоро прибудете",
                "named": "Вы прибыли в пункт назначения, {waypoint_name}, он находится справа"
            },
            "sharp left": {
                "default": "Вы прибыли в {nth} пункт назначения, он находится слева сзади",
                "upcoming": "Вы прибудете в {nth} пункт назначения, он будет слева сзади",
                "short": "Вы прибыли",
                "short-upcoming": "Вы скоро прибудете",
                "named": "Вы прибыли в пункт назначения, {waypoint_name}, он находится слева сзади"
            },
            "sharp right": {
                "default": "Вы прибыли в {nth} пункт назначения, он находится справа сзади",
                "upcoming": "Вы прибудете в {nth} пункт назначения, он будет справа сзади",
                "short": "Вы прибыли",
                "short-upcoming": "Вы скоро прибудете",
                "named": "Вы прибыли в пункт назначения, {waypoint_name}, он находится справа сзади"
            },
            "slight right": {
                "default": "Вы прибыли в {nth} пункт назначения, он находится справа впереди",
                "upcoming": "Вы прибудете в {nth} пункт назначения, он будет справа впереди",
                "short": "Вы прибыли",
                "short-upcoming": "Вы скоро прибудете",
                "named": "Вы прибыли в пункт назначения, {waypoint_name}, он находится справа впереди"
            },
            "slight left": {
                "default": "Вы прибыли в {nth} пункт назначения, он находится слева впереди",
                "upcoming": "Вы прибудете в {nth} пункт назначения, он будет слева впереди",
                "short": "Вы прибыли",
                "short-upcoming": "Вы скоро прибудете",
                "named": "Вы прибыли в пункт назначения, {waypoint_name}, он находится слева впереди"
            },
            "straight": {
                "default": "Вы прибыли в {nth} пункт назначения, он находится перед Вами",
                "upcoming": "Вы прибудете в {nth} пункт назначения, он будет перед Вами",
                "short": "Вы прибыли",
                "short-upcoming": "Вы скоро прибудете",
                "named": "Вы прибыли в пункт назначения, {waypoint_name}, он находится перед Вами"
            }
        },
        "continue": {
            "default": {
                "default": "Двигайтесь {modifier}",
                "name": "Двигайтесь {modifier} по {way_name:dative}",
                "destination": "Двигайтесь {modifier} в направлении {destination}",
                "exit": "Двигайтесь {modifier} на {way_name:accusative}"
            },
            "straight": {
                "default": "Двигайтесь прямо",
                "name": "Продолжите движение по {way_name:dative}",
                "destination": "Продолжите движение в направлении {destination}",
                "distance": "Двигайтесь прямо {distance}",
                "namedistance": "Двигайтесь прямо {distance} по {way_name:dative}"
            },
            "sharp left": {
                "default": "Резко поверните налево",
                "name": "Резко поверните налево на {way_name:accusative}",
                "destination": "Резко поверните налево в направлении {destination}"
            },
            "sharp right": {
                "default": "Резко поверните направо",
                "name": "Резко поверните направо на {way_name:accusative}",
                "destination": "Резко поверните направо в направлении {destination}"
            },
            "slight left": {
                "default": "Плавно поверните налево",
                "name": "Плавно поверните налево на {way_name:accusative}",
                "destination": "Плавно поверните налево в направлении {destination}"
            },
            "slight right": {
                "default": "Плавно поверните направо",
                "name": "Плавно поверните направо на {way_name:accusative}",
                "destination": "Плавно поверните направо в направлении {destination}"
            },
            "uturn": {
                "default": "Развернитесь",
                "name": "Развернитесь и продолжите движение по {way_name:dative}",
                "destination": "Развернитесь в направлении {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Двигайтесь в {direction} направлении",
                "name": "Двигайтесь в {direction} направлении по {way_name:dative}",
                "namedistance": "Двигайтесь {distance} в {direction} направлении по {way_name:dative}"
            }
        },
        "end of road": {
            "default": {
                "default": "Поверните {modifier}",
                "name": "Поверните {modifier} на {way_name:accusative}",
                "destination": "Поверните {modifier} в направлении {destination}"
            },
            "straight": {
                "default": "Двигайтесь прямо",
                "name": "Двигайтесь прямо по {way_name:dative}",
                "destination": "Двигайтесь прямо в направлении {destination}"
            },
            "uturn": {
                "default": "В конце дороги развернитесь",
                "name": "Развернитесь в конце {way_name:genitive}",
                "destination": "В конце дороги развернитесь в направлении {destination}"
            }
        },
        "fork": {
            "default": {
                "default": "На развилке двигайтесь {modifier}",
                "name": "На развилке двигайтесь {modifier} на {way_name:accusative}",
                "destination": "На развилке двигайтесь {modifier} в направлении {destination}"
            },
            "slight left": {
                "default": "На развилке держитесь левее",
                "name": "На развилке держитесь левее на {way_name:accusative}",
                "destination": "На развилке держитесь левее и продолжите движение в направлении {destination}"
            },
            "slight right": {
                "default": "На развилке держитесь правее",
                "name": "На развилке держитесь правее на {way_name:accusative}",
                "destination": "На развилке держитесь правее и продолжите движение в направлении {destination}"
            },
            "sharp left": {
                "default": "На развилке резко поверните налево",
                "name": "Резко поверните налево на {way_name:accusative}",
                "destination": "Резко поверните налево и продолжите движение в направлении {destination}"
            },
            "sharp right": {
                "default": "На развилке резко поверните направо",
                "name": "Резко поверните направо на {way_name:accusative}",
                "destination": "Резко поверните направо и продолжите движение в направлении {destination}"
            },
            "uturn": {
                "default": "На развилке развернитесь",
                "name": "На развилке развернитесь на {way_name:prepositional}",
                "destination": "На развилке развернитесь и продолжите движение в направлении {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Перестройтесь {modifier}",
                "name": "Перестройтесь {modifier} на {way_name:accusative}",
                "destination": "Перестройтесь {modifier} в направлении {destination}"
            },
            "straight": {
                "default": "Двигайтесь прямо",
                "name": "Продолжите движение по {way_name:dative}",
                "destination": "Продолжите движение в направлении {destination}"
            },
            "slight left": {
                "default": "Перестройтесь левее",
                "name": "Перестройтесь левее на {way_name:accusative}",
                "destination": "Перестройтесь левее в направлении {destination}"
            },
            "slight right": {
                "default": "Перестройтесь правее",
                "name": "Перестройтесь правее на {way_name:accusative}",
                "destination": "Перестройтесь правее в направлении {destination}"
            },
            "sharp left": {
                "default": "Перестраивайтесь левее",
                "name": "Перестраивайтесь левее на {way_name:accusative}",
                "destination": "Перестраивайтесь левее в направлении {destination}"
            },
            "sharp right": {
                "default": "Перестраивайтесь правее",
                "name": "Перестраивайтесь правее на {way_name:accusative}",
                "destination": "Перестраивайтесь правее в направлении {destination}"
            },
            "uturn": {
                "default": "Развернитесь",
                "name": "Развернитесь на {way_name:prepositional}",
                "destination": "Развернитесь в направлении {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Двигайтесь {modifier}",
                "name": "Двигайтесь {modifier} на {way_name:accusative}",
                "destination": "Двигайтесь {modifier} в направлении {destination}"
            },
            "straight": {
                "default": "Двигайтесь прямо",
                "name": "Продолжите движение по {way_name:dative}",
                "destination": "Продолжите движение в направлении {destination}"
            },
            "sharp left": {
                "default": "Резко поверните налево",
                "name": "Резко поверните налево на {way_name:accusative}",
                "destination": "Резко поверните налево и продолжите движение в направлении {destination}"
            },
            "sharp right": {
                "default": "Резко поверните направо",
                "name": "Резко поверните направо на {way_name:accusative}",
                "destination": "Резко поверните направо и продолжите движение в направлении {destination}"
            },
            "slight left": {
                "default": "Плавно поверните налево",
                "name": "Плавно поверните налево на {way_name:accusative}",
                "destination": "Плавно поверните налево в направлении {destination}"
            },
            "slight right": {
                "default": "Плавно поверните направо",
                "name": "Плавно поверните направо на {way_name:accusative}",
                "destination": "Плавно поверните направо в направлении {destination}"
            },
            "uturn": {
                "default": "Развернитесь",
                "name": "Развернитесь на {way_name:prepositional}",
                "destination": "Развернитесь и продолжите движение в направлении {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Двигайтесь {modifier}",
                "name": "Двигайтесь {modifier} по {way_name:dative}",
                "destination": "Двигайтесь {modifier} в направлении {destination}"
            },
            "uturn": {
                "default": "Развернитесь",
                "name": "Развернитесь на {way_name:prepositional}",
                "destination": "Развернитесь и продолжите движение в направлении {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Сверните на съезд",
                "name": "Сверните на съезд на {way_name:accusative}",
                "destination": "Сверните на съезд в направлении {destination}",
                "exit": "Сверните на съезд {exit}",
                "exit_destination": "Сверните на съезд {exit} в направлении {destination}"
            },
            "left": {
                "default": "Сверните на левый съезд",
                "name": "Сверните на левый съезд на {way_name:accusative}",
                "destination": "Сверните на левый съезд в направлении {destination}",
                "exit": "Сверните на съезд {exit} слева",
                "exit_destination": "Сверните на съезд {exit} слева в направлении {destination}"
            },
            "right": {
                "default": "Сверните на правый съезд",
                "name": "Сверните на правый съезд на {way_name:accusative}",
                "destination": "Сверните на правый съезд в направлении {destination}",
                "exit": "Сверните на съезд {exit} справа",
                "exit_destination": "Сверните на съезд {exit} справа в направлении {destination}"
            },
            "sharp left": {
                "default": "Поверните налево на съезд",
                "name": "Поверните налево на съезд на {way_name:accusative}",
                "destination": "Поверните налево на съезд в направлении {destination}",
                "exit": "Поверните налево на съезд {exit}",
                "exit_destination": "Поверните налево на съезд {exit} в направлении {destination}"
            },
            "sharp right": {
                "default": "Поверните направо на съезд",
                "name": "Поверните направо на съезд на {way_name:accusative}",
                "destination": "Поверните направо на съезд в направлении {destination}",
                "exit": "Поверните направо на съезд {exit}",
                "exit_destination": "Поверните направо на съезд {exit} в направлении {destination}"
            },
            "slight left": {
                "default": "Перестройтесь левее на съезд",
                "name": "Перестройтесь левее на съезд на {way_name:accusative}",
                "destination": "Перестройтесь левее на съезд в направлении {destination}",
                "exit": "Перестройтесь левее на {exit}",
                "exit_destination": "Перестройтесь левее на съезд {exit} в направлении {destination}"
            },
            "slight right": {
                "default": "Перестройтесь правее на съезд",
                "name": "Перестройтесь правее на съезд на {way_name:accusative}",
                "destination": "Перестройтесь правее на съезд в направлении {destination}",
                "exit": "Перестройтесь правее на съезд {exit}",
                "exit_destination": "Перестройтесь правее на съезд {exit} в направлении {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Сверните на автомагистраль",
                "name": "Сверните на въезд на {way_name:accusative}",
                "destination": "Сверните на въезд на автомагистраль в направлении {destination}"
            },
            "left": {
                "default": "Сверните на левый въезд на автомагистраль",
                "name": "Сверните на левый въезд на {way_name:accusative}",
                "destination": "Сверните на левый въезд на автомагистраль в направлении {destination}"
            },
            "right": {
                "default": "Сверните на правый въезд на автомагистраль",
                "name": "Сверните на правый въезд на {way_name:accusative}",
                "destination": "Сверните на правый въезд на автомагистраль в направлении {destination}"
            },
            "sharp left": {
                "default": "Поверните на левый въезд на автомагистраль",
                "name": "Поверните на левый въезд на {way_name:accusative}",
                "destination": "Поверните на левый въезд на автомагистраль в направлении {destination}"
            },
            "sharp right": {
                "default": "Поверните на правый въезд на автомагистраль",
                "name": "Поверните на правый въезд на {way_name:accusative}",
                "destination": "Поверните на правый въезд на автомагистраль в направлении {destination}"
            },
            "slight left": {
                "default": "Перестройтесь левее на въезд на автомагистраль",
                "name": "Перестройтесь левее на {way_name:accusative}",
                "destination": "Перестройтесь левее на автомагистраль в направлении {destination}"
            },
            "slight right": {
                "default": "Перестройтесь правее на въезд на автомагистраль",
                "name": "Перестройтесь правее на {way_name:accusative}",
                "destination": "Перестройтесь правее на автомагистраль в направлении {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Продолжите движение по круговой развязке",
                    "name": "На круговой развязке сверните на {way_name:accusative}",
                    "destination": "На круговой развязке сверните в направлении {destination}"
                },
                "name": {
                    "default": "Продолжите движение по {rotary_name:dative}",
                    "name": "На {rotary_name:prepositional} сверните на {way_name:accusative}",
                    "destination": "На {rotary_name:prepositional} сверните в направлении {destination}"
                },
                "exit": {
                    "default": "На круговой развязке сверните на {exit_number} съезд",
                    "name": "На круговой развязке сверните на {exit_number} съезд на {way_name:accusative}",
                    "destination": "На круговой развязке сверните на {exit_number} съезд в направлении {destination}"
                },
                "name_exit": {
                    "default": "На {rotary_name:prepositional} сверните на {exit_number} съезд",
                    "name": "На {rotary_name:prepositional} сверните на {exit_number} съезд на {way_name:accusative}",
                    "destination": "На {rotary_name:prepositional} сверните на {exit_number} съезд в направлении {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "На круговой развязке сверните на {exit_number} съезд",
                    "name": "На круговой развязке сверните на {exit_number} съезд на {way_name:accusative}",
                    "destination": "На круговой развязке сверните на {exit_number} съезд в направлении {destination}"
                },
                "default": {
                    "default": "Продолжите движение по круговой развязке",
                    "name": "На круговой развязке сверните на {way_name:accusative}",
                    "destination": "На круговой развязке сверните в направлении {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Двигайтесь {modifier}",
                "name": "Двигайтесь {modifier} на {way_name:accusative}",
                "destination": "Двигайтесь {modifier} в направлении {destination}"
            },
            "left": {
                "default": "Сверните налево",
                "name": "Сверните налево на {way_name:accusative}",
                "destination": "Сверните налево в направлении {destination}"
            },
            "right": {
                "default": "Сверните направо",
                "name": "Сверните направо на {way_name:accusative}",
                "destination": "Сверните направо в направлении {destination}"
            },
            "straight": {
                "default": "Двигайтесь прямо",
                "name": "Двигайтесь прямо по {way_name:dative}",
                "destination": "Двигайтесь прямо в направлении {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Сверните с круговой развязки",
                "name": "Сверните с круговой развязки на {way_name:accusative}",
                "destination": "Сверните с круговой развязки в направлении {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Сверните с круговой развязки",
                "name": "Сверните с круговой развязки на {way_name:accusative}",
                "destination": "Сверните с круговой развязки в направлении {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Двигайтесь {modifier}",
                "name": "Двигайтесь {modifier} на {way_name:accusative}",
                "destination": "Двигайтесь {modifier}  в направлении {destination}"
            },
            "left": {
                "default": "Поверните налево",
                "name": "Поверните налево на {way_name:accusative}",
                "destination": "Поверните налево в направлении {destination}"
            },
            "right": {
                "default": "Поверните направо",
                "name": "Поверните направо на {way_name:accusative}",
                "destination": "Поверните направо  в направлении {destination}"
            },
            "straight": {
                "default": "Двигайтесь прямо",
                "name": "Двигайтесь по {way_name:dative}",
                "destination": "Двигайтесь в направлении {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Продолжайте движение прямо"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],43:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1:a",
                "2": "2:a",
                "3": "3:e",
                "4": "4:e",
                "5": "5:e",
                "6": "6:e",
                "7": "7:e",
                "8": "8:e",
                "9": "9:e",
                "10": "10:e"
            },
            "direction": {
                "north": "norr",
                "northeast": "nordost",
                "east": "öster",
                "southeast": "sydost",
                "south": "söder",
                "southwest": "sydväst",
                "west": "väster",
                "northwest": "nordväst"
            },
            "modifier": {
                "left": "vänster",
                "right": "höger",
                "sharp left": "vänster",
                "sharp right": "höger",
                "slight left": "vänster",
                "slight right": "höger",
                "straight": "rakt fram",
                "uturn": "U-sväng"
            },
            "lanes": {
                "xo": "Håll till höger",
                "ox": "Håll till vänster",
                "xox": "Håll till mitten",
                "oxo": "Håll till vänster eller höger"
            }
        },
        "modes": {
            "ferry": {
                "default": "Ta färjan",
                "name": "Ta färjan på {way_name}",
                "destination": "Ta färjan mot {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, sedan efter {distance}, {instruction_two}",
            "two linked": "{instruction_one}, sedan {instruction_two}",
            "one in distance": "Om {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "exit {exit}"
        },
        "arrive": {
            "default": {
                "default": "Du är framme vid din {nth} destination",
                "upcoming": "Du är snart framme vid din {nth} destination",
                "short": "Du är framme",
                "short-upcoming": "Du är snart framme",
                "named": "Du är framme vid {waypoint_name}"
            },
            "left": {
                "default": "Du är framme vid din {nth} destination, till vänster",
                "upcoming": "Du är snart framme vid din {nth} destination, till vänster",
                "short": "Du är framme",
                "short-upcoming": "Du är snart framme",
                "named": "Du är framme vid {waypoint_name}, till vänster"
            },
            "right": {
                "default": "Du är framme vid din {nth} destination, till höger",
                "upcoming": "Du är snart framme vid din {nth} destination, till höger",
                "short": "Du är framme",
                "short-upcoming": "Du är snart framme",
                "named": "Du är framme vid {waypoint_name}, till höger"
            },
            "sharp left": {
                "default": "Du är framme vid din {nth} destination, till vänster",
                "upcoming": "Du är snart framme vid din {nth} destination, till vänster",
                "short": "Du är framme",
                "short-upcoming": "Du är snart framme",
                "named": "Du är framme vid {waypoint_name}, till vänster"
            },
            "sharp right": {
                "default": "Du är framme vid din {nth} destination, till höger",
                "upcoming": "Du är snart framme vid din {nth} destination, till höger",
                "short": "Du är framme",
                "short-upcoming": "Du är snart framme",
                "named": "Du är framme vid {waypoint_name}, till höger"
            },
            "slight right": {
                "default": "Du är framme vid din {nth} destination, till höger",
                "upcoming": "Du är snart framme vid din {nth} destination, till höger",
                "short": "Du är framme",
                "short-upcoming": "Du är snart framme",
                "named": "Du är framme vid {waypoint_name}, till höger"
            },
            "slight left": {
                "default": "Du är framme vid din {nth} destination, till vänster",
                "upcoming": "Du är snart framme vid din {nth} destination, till vänster",
                "short": "Du är framme",
                "short-upcoming": "Du är snart framme",
                "named": "Du är framme vid {waypoint_name}, till vänster"
            },
            "straight": {
                "default": "Du är framme vid din {nth} destination, rakt fram",
                "upcoming": "Du är snart framme vid din {nth} destination, rakt fram",
                "short": "Du är framme",
                "short-upcoming": "Du är snart framme",
                "named": "Du är framme vid {waypoint_name}, rakt fram"
            }
        },
        "continue": {
            "default": {
                "default": "Sväng {modifier}",
                "name": "Sväng {modifier} och fortsätt på {way_name}",
                "destination": "Sväng {modifier} mot {destination}",
                "exit": "Sväng {modifier} in på {way_name}"
            },
            "straight": {
                "default": "Fortsätt rakt fram",
                "name": "Kör rakt fram och fortsätt på {way_name}",
                "destination": "Fortsätt mot {destination}",
                "distance": "Fortsätt rakt fram i {distance}",
                "namedistance": "Fortsätt på {way_name} i {distance}"
            },
            "sharp left": {
                "default": "Sväng vänster",
                "name": "Sväng vänster och fortsätt på {way_name}",
                "destination": "Sväng vänster mot {destination}"
            },
            "sharp right": {
                "default": "Sväng höger",
                "name": "Sväng höger och fortsätt på {way_name}",
                "destination": "Sväng höger mot {destination}"
            },
            "slight left": {
                "default": "Sväng vänster",
                "name": "Sväng vänster och fortsätt på {way_name}",
                "destination": "Sväng vänster mot {destination}"
            },
            "slight right": {
                "default": "Sväng höger",
                "name": "Sväng höger och fortsätt på {way_name}",
                "destination": "Sväng höger mot {destination}"
            },
            "uturn": {
                "default": "Gör en U-sväng",
                "name": "Gör en U-sväng och fortsätt på {way_name}",
                "destination": "Gör en U-sväng mot {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Kör åt {direction}",
                "name": "Kör åt {direction} på {way_name}",
                "namedistance": "Kör {distance} åt {direction} på {way_name}"
            }
        },
        "end of road": {
            "default": {
                "default": "Sväng {modifier}",
                "name": "Sväng {modifier} in på {way_name}",
                "destination": "Sväng {modifier} mot {destination}"
            },
            "straight": {
                "default": "Fortsätt rakt fram",
                "name": "Fortsätt rakt fram in på {way_name}",
                "destination": "Fortsätt rakt fram mot {destination}"
            },
            "uturn": {
                "default": "Gör en U-sväng i slutet av vägen",
                "name": "Gör en U-sväng in på {way_name} i slutet av vägen",
                "destination": "Gör en U-sväng mot {destination} i slutet av vägen"
            }
        },
        "fork": {
            "default": {
                "default": "Håll till {modifier} där vägen delar sig",
                "name": "Håll till {modifier} in på {way_name}",
                "destination": "Håll till {modifier} mot {destination}"
            },
            "slight left": {
                "default": "Håll till vänster där vägen delar sig",
                "name": "Håll till vänster in på {way_name}",
                "destination": "Håll till vänster mot {destination}"
            },
            "slight right": {
                "default": "Håll till höger där vägen delar sig",
                "name": "Håll till höger in på {way_name}",
                "destination": "Håll till höger mot {destination}"
            },
            "sharp left": {
                "default": "Sväng vänster där vägen delar sig",
                "name": "Sväng vänster in på {way_name}",
                "destination": "Sväng vänster mot {destination}"
            },
            "sharp right": {
                "default": "Sväng höger där vägen delar sig",
                "name": "Sväng höger in på {way_name}",
                "destination": "Sväng höger mot {destination}"
            },
            "uturn": {
                "default": "Gör en U-sväng",
                "name": "Gör en U-sväng in på {way_name}",
                "destination": "Gör en U-sväng mot {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Byt till {modifier} körfält",
                "name": "Byt till {modifier} körfält, in på {way_name}",
                "destination": "Byt till {modifier} körfält, mot {destination}"
            },
            "straight": {
                "default": "Fortsätt",
                "name": "Kör in på {way_name}",
                "destination": "Kör mot {destination}"
            },
            "slight left": {
                "default": "Byt till vänstra körfältet",
                "name": "Byt till vänstra körfältet, in på {way_name}",
                "destination": "Byt till vänstra körfältet, mot {destination}"
            },
            "slight right": {
                "default": "Byt till högra körfältet",
                "name": "Byt till högra körfältet, in på {way_name}",
                "destination": "Byt till högra körfältet, mot {destination}"
            },
            "sharp left": {
                "default": "Byt till vänstra körfältet",
                "name": "Byt till vänstra körfältet, in på {way_name}",
                "destination": "Byt till vänstra körfältet, mot {destination}"
            },
            "sharp right": {
                "default": "Byt till högra körfältet",
                "name": "Byt till högra körfältet, in på {way_name}",
                "destination": "Byt till högra körfältet, mot {destination}"
            },
            "uturn": {
                "default": "Gör en U-sväng",
                "name": "Gör en U-sväng in på {way_name}",
                "destination": "Gör en U-sväng mot {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Fortsätt {modifier}",
                "name": "Fortsätt {modifier} på {way_name}",
                "destination": "Fortsätt {modifier} mot {destination}"
            },
            "straight": {
                "default": "Fortsätt rakt fram",
                "name": "Fortsätt in på {way_name}",
                "destination": "Fortsätt mot {destination}"
            },
            "sharp left": {
                "default": "Gör en skarp vänstersväng",
                "name": "Gör en skarp vänstersväng in på {way_name}",
                "destination": "Gör en skarp vänstersväng mot {destination}"
            },
            "sharp right": {
                "default": "Gör en skarp högersväng",
                "name": "Gör en skarp högersväng in på {way_name}",
                "destination": "Gör en skarp högersväng mot {destination}"
            },
            "slight left": {
                "default": "Fortsätt med lätt vänstersväng",
                "name": "Fortsätt med lätt vänstersväng in på {way_name}",
                "destination": "Fortsätt med lätt vänstersväng mot {destination}"
            },
            "slight right": {
                "default": "Fortsätt med lätt högersväng",
                "name": "Fortsätt med lätt högersväng in på {way_name}",
                "destination": "Fortsätt med lätt högersväng mot {destination}"
            },
            "uturn": {
                "default": "Gör en U-sväng",
                "name": "Gör en U-sväng in på {way_name}",
                "destination": "Gör en U-sväng mot {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Fortsätt {modifier}",
                "name": "Fortsätt {modifier} på {way_name}",
                "destination": "Fortsätt {modifier} mot {destination}"
            },
            "uturn": {
                "default": "Gör en U-sväng",
                "name": "Gör en U-sväng in på {way_name}",
                "destination": "Gör en U-sväng mot {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Ta avfarten",
                "name": "Ta avfarten in på {way_name}",
                "destination": "Ta avfarten mot {destination}",
                "exit": "Ta avfart {exit} ",
                "exit_destination": "Ta avfart {exit} mot {destination}"
            },
            "left": {
                "default": "Ta avfarten till vänster",
                "name": "Ta avfarten till vänster in på {way_name}",
                "destination": "Ta avfarten till vänster mot {destination}",
                "exit": "Ta avfart {exit} till vänster",
                "exit_destination": "Ta avfart {exit} till vänster mot {destination}"
            },
            "right": {
                "default": "Ta avfarten till höger",
                "name": "Ta avfarten till höger in på {way_name}",
                "destination": "Ta avfarten till höger mot {destination}",
                "exit": "Ta avfart {exit} till höger",
                "exit_destination": "Ta avfart {exit} till höger mot {destination}"
            },
            "sharp left": {
                "default": "Ta avfarten till vänster",
                "name": "Ta avfarten till vänster in på {way_name}",
                "destination": "Ta avfarten till vänster mot {destination}",
                "exit": "Ta avfart {exit} till vänster",
                "exit_destination": "Ta avfart {exit} till vänster mot {destination}"
            },
            "sharp right": {
                "default": "Ta avfarten till höger",
                "name": "Ta avfarten till höger in på {way_name}",
                "destination": "Ta avfarten till höger mot {destination}",
                "exit": "Ta avfart {exit} till höger",
                "exit_destination": "Ta avfart {exit} till höger mot {destination}"
            },
            "slight left": {
                "default": "Ta avfarten till vänster",
                "name": "Ta avfarten till vänster in på {way_name}",
                "destination": "Ta avfarten till vänster mot {destination}",
                "exit": "Ta avfart {exit} till vänster",
                "exit_destination": "Ta avfart{exit} till vänster mot {destination}"
            },
            "slight right": {
                "default": "Ta avfarten till höger",
                "name": "Ta avfarten till höger in på {way_name}",
                "destination": "Ta avfarten till höger mot {destination}",
                "exit": "Ta avfart {exit} till höger",
                "exit_destination": "Ta avfart {exit} till höger mot {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Ta påfarten",
                "name": "Ta påfarten in på {way_name}",
                "destination": "Ta påfarten mot {destination}"
            },
            "left": {
                "default": "Ta påfarten till vänster",
                "name": "Ta påfarten till vänster in på {way_name}",
                "destination": "Ta påfarten till vänster mot {destination}"
            },
            "right": {
                "default": "Ta påfarten till höger",
                "name": "Ta påfarten till höger in på {way_name}",
                "destination": "Ta påfarten till höger mot {destination}"
            },
            "sharp left": {
                "default": "Ta påfarten till vänster",
                "name": "Ta påfarten till vänster in på {way_name}",
                "destination": "Ta påfarten till vänster mot {destination}"
            },
            "sharp right": {
                "default": "Ta påfarten till höger",
                "name": "Ta påfarten till höger in på {way_name}",
                "destination": "Ta påfarten till höger mot {destination}"
            },
            "slight left": {
                "default": "Ta påfarten till vänster",
                "name": "Ta påfarten till vänster in på {way_name}",
                "destination": "Ta påfarten till vänster mot {destination}"
            },
            "slight right": {
                "default": "Ta påfarten till höger",
                "name": "Ta påfarten till höger in på {way_name}",
                "destination": "Ta påfarten till höger mot {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Kör in i rondellen",
                    "name": "I rondellen, ta avfarten in på {way_name}",
                    "destination": "I rondellen, ta av mot {destination}"
                },
                "name": {
                    "default": "Kör in i {rotary_name}",
                    "name": "I {rotary_name}, ta av in på {way_name}",
                    "destination": "I {rotary_name}, ta av mot {destination}"
                },
                "exit": {
                    "default": "I rondellen, ta {exit_number} avfarten",
                    "name": "I rondellen, ta {exit_number} avfarten in på {way_name}",
                    "destination": "I rondellen, ta {exit_number} avfarten mot {destination}"
                },
                "name_exit": {
                    "default": "I {rotary_name}, ta {exit_number} avfarten",
                    "name": "I {rotary_name}, ta {exit_number}  avfarten in på {way_name}",
                    "destination": "I {rotary_name}, ta {exit_number} avfarten mot {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "I rondellen, ta {exit_number} avfarten",
                    "name": "I rondellen, ta {exit_number} avfarten in på {way_name}",
                    "destination": "I rondellen, ta {exit_number} avfarten mot {destination}"
                },
                "default": {
                    "default": "Kör in i rondellen",
                    "name": "I rondellen, ta avfarten in på {way_name}",
                    "destination": "I rondellen, ta av mot {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Sväng {modifier}",
                "name": "Sväng {modifier} in på {way_name}",
                "destination": "Sväng {modifier} mot {destination}"
            },
            "left": {
                "default": "Sväng vänster",
                "name": "Sväng vänster in på {way_name}",
                "destination": "Sväng vänster mot {destination}"
            },
            "right": {
                "default": "Sväng höger",
                "name": "Sväng höger in på {way_name}",
                "destination": "Sväng höger mot {destination}"
            },
            "straight": {
                "default": "Fortsätt rakt fram",
                "name": "Fortsätt rakt fram in på {way_name}",
                "destination": "Fortsätt rakt fram mot {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Kör ut ur rondellen",
                "name": "Kör ut ur rondellen in på {way_name}",
                "destination": "Kör ut ur rondellen mot {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Kör ut ur rondellen",
                "name": "Kör ut ur rondellen in på {way_name}",
                "destination": "Kör ut ur rondellen mot {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Sväng {modifier}",
                "name": "Sväng {modifier} in på {way_name}",
                "destination": "Sväng {modifier} mot {destination}"
            },
            "left": {
                "default": "Sväng vänster",
                "name": "Sväng vänster in på {way_name}",
                "destination": "Sväng vänster mot {destination}"
            },
            "right": {
                "default": "Sväng höger",
                "name": "Sväng höger in på {way_name}",
                "destination": "Sväng höger mot {destination}"
            },
            "straight": {
                "default": "Kör rakt fram",
                "name": "Kör rakt fram in på {way_name}",
                "destination": "Kör rakt fram mot {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Fortsätt rakt fram"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],44:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "birinci",
                "2": "ikinci",
                "3": "üçüncü",
                "4": "dördüncü",
                "5": "beşinci",
                "6": "altıncı",
                "7": "yedinci",
                "8": "sekizinci",
                "9": "dokuzuncu",
                "10": "onuncu"
            },
            "direction": {
                "north": "kuzey",
                "northeast": "kuzeydoğu",
                "east": "doğu",
                "southeast": "güneydoğu",
                "south": "güney",
                "southwest": "güneybatı",
                "west": "batı",
                "northwest": "kuzeybatı"
            },
            "modifier": {
                "left": "sol",
                "right": "sağ",
                "sharp left": "keskin sol",
                "sharp right": "keskin sağ",
                "slight left": "hafif sol",
                "slight right": "hafif sağ",
                "straight": "düz",
                "uturn": "U dönüşü"
            },
            "lanes": {
                "xo": "Sağda kalın",
                "ox": "Solda kalın",
                "xox": "Ortada kalın",
                "oxo": "Solda veya sağda kalın"
            }
        },
        "modes": {
            "ferry": {
                "default": "Vapur kullan",
                "name": "{way_name} vapurunu kullan",
                "destination": "{destination} istikametine giden vapuru kullan"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one} ve {distance} sonra {instruction_two}",
            "two linked": "{instruction_one} ve sonra {instruction_two}",
            "one in distance": "{distance} sonra, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "exit {exit}"
        },
        "arrive": {
            "default": {
                "default": "{nth} hedefinize ulaştınız",
                "upcoming": "{nth} hedefinize ulaştınız",
                "short": "{nth} hedefinize ulaştınız",
                "short-upcoming": "{nth} hedefinize ulaştınız",
                "named": "{waypoint_name} ulaştınız"
            },
            "left": {
                "default": "{nth} hedefinize ulaştınız, hedefiniz solunuzdadır",
                "upcoming": "{nth} hedefinize ulaştınız, hedefiniz solunuzdadır",
                "short": "{nth} hedefinize ulaştınız",
                "short-upcoming": "{nth} hedefinize ulaştınız",
                "named": "{waypoint_name} ulaştınız, hedefiniz solunuzdadır"
            },
            "right": {
                "default": "{nth} hedefinize ulaştınız, hedefiniz sağınızdadır",
                "upcoming": "{nth} hedefinize ulaştınız, hedefiniz sağınızdadır",
                "short": "{nth} hedefinize ulaştınız",
                "short-upcoming": "{nth} hedefinize ulaştınız",
                "named": "{waypoint_name} ulaştınız, hedefiniz sağınızdadır"
            },
            "sharp left": {
                "default": "{nth} hedefinize ulaştınız, hedefiniz solunuzdadır",
                "upcoming": "{nth} hedefinize ulaştınız, hedefiniz solunuzdadır",
                "short": "{nth} hedefinize ulaştınız",
                "short-upcoming": "{nth} hedefinize ulaştınız",
                "named": "{waypoint_name} ulaştınız, hedefiniz solunuzdadır"
            },
            "sharp right": {
                "default": "{nth} hedefinize ulaştınız, hedefiniz sağınızdadır",
                "upcoming": "{nth} hedefinize ulaştınız, hedefiniz sağınızdadır",
                "short": "{nth} hedefinize ulaştınız",
                "short-upcoming": "{nth} hedefinize ulaştınız",
                "named": "{waypoint_name} ulaştınız, hedefiniz sağınızdadır"
            },
            "slight right": {
                "default": "{nth} hedefinize ulaştınız, hedefiniz sağınızdadır",
                "upcoming": "{nth} hedefinize ulaştınız, hedefiniz sağınızdadır",
                "short": "{nth} hedefinize ulaştınız",
                "short-upcoming": "{nth} hedefinize ulaştınız",
                "named": "{waypoint_name} ulaştınız, hedefiniz sağınızdadır"
            },
            "slight left": {
                "default": "{nth} hedefinize ulaştınız, hedefiniz solunuzdadır",
                "upcoming": "{nth} hedefinize ulaştınız, hedefiniz solunuzdadır",
                "short": "{nth} hedefinize ulaştınız",
                "short-upcoming": "{nth} hedefinize ulaştınız",
                "named": "{waypoint_name} ulaştınız, hedefiniz solunuzdadır"
            },
            "straight": {
                "default": "{nth} hedefinize ulaştınız, hedefiniz karşınızdadır",
                "upcoming": "{nth} hedefinize ulaştınız, hedefiniz karşınızdadır",
                "short": "{nth} hedefinize ulaştınız",
                "short-upcoming": "{nth} hedefinize ulaştınız",
                "named": "{waypoint_name} ulaştınız, hedefiniz karşınızdadır"
            }
        },
        "continue": {
            "default": {
                "default": "{modifier} yöne dön",
                "name": "{way_name} üzerinde kalmak için {modifier} yöne dön",
                "destination": "{destination} istikametinde {modifier} yöne dön",
                "exit": "{way_name} üzerinde {modifier} yöne dön"
            },
            "straight": {
                "default": "Düz devam edin",
                "name": "{way_name} üzerinde kalmak için düz devam et",
                "destination": "{destination} istikametinde devam et",
                "distance": "{distance} boyunca düz devam et",
                "namedistance": "{distance} boyunca {way_name} üzerinde devam et"
            },
            "sharp left": {
                "default": "Sola keskin dönüş yap",
                "name": "{way_name} üzerinde kalmak için sola keskin dönüş yap",
                "destination": "{destination} istikametinde sola keskin dönüş yap"
            },
            "sharp right": {
                "default": "Sağa keskin dönüş yap",
                "name": "{way_name} üzerinde kalmak için sağa keskin dönüş yap",
                "destination": "{destination} istikametinde sağa keskin dönüş yap"
            },
            "slight left": {
                "default": "Sola hafif dönüş yap",
                "name": "{way_name} üzerinde kalmak için sola hafif dönüş yap",
                "destination": "{destination} istikametinde sola hafif dönüş yap"
            },
            "slight right": {
                "default": "Sağa hafif dönüş yap",
                "name": "{way_name} üzerinde kalmak için sağa hafif dönüş yap",
                "destination": "{destination} istikametinde sağa hafif dönüş yap"
            },
            "uturn": {
                "default": "U dönüşü yapın",
                "name": "Bir U-dönüşü yap ve {way_name} devam et",
                "destination": "{destination} istikametinde bir U-dönüşü yap"
            }
        },
        "depart": {
            "default": {
                "default": "{direction} tarafına yönelin",
                "name": "{way_name} üzerinde {direction} yöne git",
                "namedistance": "Head {direction} on {way_name} for {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "{modifier} tarafa dönün",
                "name": "{way_name} üzerinde {modifier} yöne dön",
                "destination": "{destination} istikametinde {modifier} yöne dön"
            },
            "straight": {
                "default": "Düz devam edin",
                "name": "{way_name} üzerinde düz devam et",
                "destination": "{destination} istikametinde düz devam et"
            },
            "uturn": {
                "default": "Yolun sonunda U dönüşü yapın",
                "name": "Yolun sonunda {way_name} üzerinde bir U-dönüşü yap",
                "destination": "Yolun sonunda {destination} istikametinde bir U-dönüşü yap"
            }
        },
        "fork": {
            "default": {
                "default": "Yol ayrımında {modifier} yönde kal",
                "name": "{way_name} üzerindeki yol ayrımında {modifier} yönde kal",
                "destination": "{destination} istikametindeki yol ayrımında {modifier} yönde kal"
            },
            "slight left": {
                "default": "Çatalın solundan devam edin",
                "name": "Çatalın solundan {way_name} yoluna doğru ",
                "destination": "{destination} istikametindeki yol ayrımında solda kal"
            },
            "slight right": {
                "default": "Çatalın sağından devam edin",
                "name": "{way_name} üzerindeki yol ayrımında sağda kal",
                "destination": "{destination} istikametindeki yol ayrımında sağda kal"
            },
            "sharp left": {
                "default": "Çatalda keskin sola dönün",
                "name": "{way_name} yoluna doğru sola keskin dönüş yapın",
                "destination": "{destination} istikametinde sola keskin dönüş yap"
            },
            "sharp right": {
                "default": "Çatalda keskin sağa dönün",
                "name": "{way_name} yoluna doğru sağa keskin dönüş yapın",
                "destination": "{destination} istikametinde sağa keskin dönüş yap"
            },
            "uturn": {
                "default": "U dönüşü yapın",
                "name": "{way_name} yoluna U dönüşü yapın",
                "destination": "{destination} istikametinde bir U-dönüşü yap"
            }
        },
        "merge": {
            "default": {
                "default": "{modifier} yöne gir",
                "name": "{way_name} üzerinde {modifier} yöne gir",
                "destination": "{destination} istikametinde {modifier} yöne gir"
            },
            "straight": {
                "default": "düz yöne gir",
                "name": "{way_name} üzerinde düz yöne gir",
                "destination": "{destination} istikametinde düz yöne gir"
            },
            "slight left": {
                "default": "Sola gir",
                "name": "{way_name} üzerinde sola gir",
                "destination": "{destination} istikametinde sola gir"
            },
            "slight right": {
                "default": "Sağa gir",
                "name": "{way_name} üzerinde sağa gir",
                "destination": "{destination} istikametinde sağa gir"
            },
            "sharp left": {
                "default": "Sola gir",
                "name": "{way_name} üzerinde sola gir",
                "destination": "{destination} istikametinde sola gir"
            },
            "sharp right": {
                "default": "Sağa gir",
                "name": "{way_name} üzerinde sağa gir",
                "destination": "{destination} istikametinde sağa gir"
            },
            "uturn": {
                "default": "U dönüşü yapın",
                "name": "{way_name} yoluna U dönüşü yapın",
                "destination": "{destination} istikametinde bir U-dönüşü yap"
            }
        },
        "new name": {
            "default": {
                "default": "{modifier} yönde devam et",
                "name": "{way_name} üzerinde {modifier} yönde devam et",
                "destination": "{destination} istikametinde {modifier} yönde devam et"
            },
            "straight": {
                "default": "Düz devam et",
                "name": "{way_name} üzerinde devam et",
                "destination": "{destination} istikametinde devam et"
            },
            "sharp left": {
                "default": "Sola keskin dönüş yapın",
                "name": "{way_name} yoluna doğru sola keskin dönüş yapın",
                "destination": "{destination} istikametinde sola keskin dönüş yap"
            },
            "sharp right": {
                "default": "Sağa keskin dönüş yapın",
                "name": "{way_name} yoluna doğru sağa keskin dönüş yapın",
                "destination": "{destination} istikametinde sağa keskin dönüş yap"
            },
            "slight left": {
                "default": "Hafif soldan devam edin",
                "name": "{way_name} üzerinde hafif solda devam et",
                "destination": "{destination} istikametinde hafif solda devam et"
            },
            "slight right": {
                "default": "Hafif sağdan devam edin",
                "name": "{way_name} üzerinde hafif sağda devam et",
                "destination": "{destination} istikametinde hafif sağda devam et"
            },
            "uturn": {
                "default": "U dönüşü yapın",
                "name": "{way_name} yoluna U dönüşü yapın",
                "destination": "{destination} istikametinde bir U-dönüşü yap"
            }
        },
        "notification": {
            "default": {
                "default": "{modifier} yönde devam et",
                "name": "{way_name} üzerinde {modifier} yönde devam et",
                "destination": "{destination} istikametinde {modifier} yönde devam et"
            },
            "uturn": {
                "default": "U dönüşü yapın",
                "name": "{way_name} yoluna U dönüşü yapın",
                "destination": "{destination} istikametinde bir U-dönüşü yap"
            }
        },
        "off ramp": {
            "default": {
                "default": "Bağlantı yoluna geç",
                "name": "{way_name} üzerindeki bağlantı yoluna geç",
                "destination": "{destination} istikametine giden bağlantı yoluna geç",
                "exit": "{exit} çıkış yoluna geç",
                "exit_destination": "{destination} istikametindeki {exit} çıkış yoluna geç"
            },
            "left": {
                "default": "Soldaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sol bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sol bağlantı yoluna geç",
                "exit": "Soldaki {exit} çıkış yoluna geç",
                "exit_destination": "{destination} istikametindeki {exit} sol çıkış yoluna geç"
            },
            "right": {
                "default": "Sağdaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sağ bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sağ bağlantı yoluna geç",
                "exit": "Sağdaki {exit} çıkış yoluna geç",
                "exit_destination": "{destination} istikametindeki {exit} sağ çıkış yoluna geç"
            },
            "sharp left": {
                "default": "Soldaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sol bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sol bağlantı yoluna geç",
                "exit": "Soldaki {exit} çıkış yoluna geç",
                "exit_destination": "{destination} istikametindeki {exit} sol çıkış yoluna geç"
            },
            "sharp right": {
                "default": "Sağdaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sağ bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sağ bağlantı yoluna geç",
                "exit": "Sağdaki {exit} çıkış yoluna geç",
                "exit_destination": "{destination} istikametindeki {exit} sağ çıkış yoluna geç"
            },
            "slight left": {
                "default": "Soldaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sol bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sol bağlantı yoluna geç",
                "exit": "Soldaki {exit} çıkış yoluna geç",
                "exit_destination": "{destination} istikametindeki {exit} sol çıkış yoluna geç"
            },
            "slight right": {
                "default": "Sağdaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sağ bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sağ bağlantı yoluna geç",
                "exit": "Sağdaki {exit} çıkış yoluna geç",
                "exit_destination": "{destination} istikametindeki {exit} sağ çıkış yoluna geç"
            }
        },
        "on ramp": {
            "default": {
                "default": "Bağlantı yoluna geç",
                "name": "{way_name} üzerindeki bağlantı yoluna geç",
                "destination": "{destination} istikametine giden bağlantı yoluna geç"
            },
            "left": {
                "default": "Soldaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sol bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sol bağlantı yoluna geç"
            },
            "right": {
                "default": "Sağdaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sağ bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sağ bağlantı yoluna geç"
            },
            "sharp left": {
                "default": "Soldaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sol bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sol bağlantı yoluna geç"
            },
            "sharp right": {
                "default": "Sağdaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sağ bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sağ bağlantı yoluna geç"
            },
            "slight left": {
                "default": "Soldaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sol bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sol bağlantı yoluna geç"
            },
            "slight right": {
                "default": "Sağdaki bağlantı yoluna geç",
                "name": "{way_name} üzerindeki sağ bağlantı yoluna geç",
                "destination": "{destination} istikametine giden sağ bağlantı yoluna geç"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Dönel kavşağa gir",
                    "name": "Dönel kavşağa gir ve {way_name} üzerinde çık",
                    "destination": "Dönel kavşağa gir ve {destination} istikametinde çık"
                },
                "name": {
                    "default": "{rotary_name} dönel kavşağa gir",
                    "name": "{rotary_name} dönel kavşağa gir ve {way_name} üzerinde çık",
                    "destination": "{rotary_name} dönel kavşağa gir ve {destination} istikametinde çık"
                },
                "exit": {
                    "default": "Dönel kavşağa gir ve {exit_number} numaralı çıkışa gir",
                    "name": "Dönel kavşağa gir ve {way_name} üzerindeki {exit_number} numaralı çıkışa gir",
                    "destination": "Dönel kavşağa gir ve {destination} istikametindeki {exit_number} numaralı çıkışa gir"
                },
                "name_exit": {
                    "default": "{rotary_name} dönel kavşağa gir ve {exit_number} numaralı çıkışa gir",
                    "name": "{rotary_name} dönel kavşağa gir ve {way_name} üzerindeki {exit_number} numaralı çıkışa gir",
                    "destination": "{rotary_name} dönel kavşağa gir ve {destination} istikametindeki {exit_number} numaralı çıkışa gir"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Göbekli kavşağa gir ve {exit_number} numaralı çıkışa gir",
                    "name": "Göbekli kavşağa gir ve {way_name} üzerindeki {exit_number} numaralı çıkışa gir",
                    "destination": "Göbekli kavşağa gir ve {destination} istikametindeki {exit_number} numaralı çıkışa gir"
                },
                "default": {
                    "default": "Göbekli kavşağa gir",
                    "name": "Göbekli kavşağa gir ve {way_name} üzerinde çık",
                    "destination": "Göbekli kavşağa gir ve {destination} istikametinde çık"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "{modifier} yöne dön",
                "name": "{way_name} üzerinde {modifier} yöne dön",
                "destination": "{destination} istikametinde {modifier} yöne dön"
            },
            "left": {
                "default": "Sola dön",
                "name": "{way_name} üzerinde sola dön",
                "destination": "{destination} istikametinde sola dön"
            },
            "right": {
                "default": "Sağa dön",
                "name": "{way_name} üzerinde sağa dön",
                "destination": "{destination} istikametinde sağa dön"
            },
            "straight": {
                "default": "Düz devam et",
                "name": "{way_name} üzerinde düz devam et",
                "destination": "{destination} istikametinde düz devam et"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "{modifier} yöne dön",
                "name": "{way_name} üzerinde {modifier} yöne dön",
                "destination": "{destination} istikametinde {modifier} yöne dön"
            },
            "left": {
                "default": "Sola dön",
                "name": "{way_name} üzerinde sola dön",
                "destination": "{destination} istikametinde sola dön"
            },
            "right": {
                "default": "Sağa dön",
                "name": "{way_name} üzerinde sağa dön",
                "destination": "{destination} istikametinde sağa dön"
            },
            "straight": {
                "default": "Düz devam et",
                "name": "{way_name} üzerinde düz devam et",
                "destination": "{destination} istikametinde düz devam et"
            }
        },
        "exit rotary": {
            "default": {
                "default": "{modifier} yöne dön",
                "name": "{way_name} üzerinde {modifier} yöne dön",
                "destination": "{destination} istikametinde {modifier} yöne dön"
            },
            "left": {
                "default": "Sola dön",
                "name": "{way_name} üzerinde sola dön",
                "destination": "{destination} istikametinde sola dön"
            },
            "right": {
                "default": "Sağa dön",
                "name": "{way_name} üzerinde sağa dön",
                "destination": "{destination} istikametinde sağa dön"
            },
            "straight": {
                "default": "Düz devam et",
                "name": "{way_name} üzerinde düz devam et",
                "destination": "{destination} istikametinde düz devam et"
            }
        },
        "turn": {
            "default": {
                "default": "{modifier} yöne dön",
                "name": "{way_name} üzerinde {modifier} yöne dön",
                "destination": "{destination} istikametinde {modifier} yöne dön"
            },
            "left": {
                "default": "Sola dönün",
                "name": "{way_name} üzerinde sola dön",
                "destination": "{destination} istikametinde sola dön"
            },
            "right": {
                "default": "Sağa dönün",
                "name": "{way_name} üzerinde sağa dön",
                "destination": "{destination} istikametinde sağa dön"
            },
            "straight": {
                "default": "Düz git",
                "name": "{way_name} üzerinde düz git",
                "destination": "{destination} istikametinde düz git"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Düz devam edin"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],45:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "1й",
                "2": "2й",
                "3": "3й",
                "4": "4й",
                "5": "5й",
                "6": "6й",
                "7": "7й",
                "8": "8й",
                "9": "9й",
                "10": "10й"
            },
            "direction": {
                "north": "північ",
                "northeast": "північний схід",
                "east": "схід",
                "southeast": "південний схід",
                "south": "південь",
                "southwest": "південний захід",
                "west": "захід",
                "northwest": "північний захід"
            },
            "modifier": {
                "left": "ліворуч",
                "right": "праворуч",
                "sharp left": "різко ліворуч",
                "sharp right": "різко праворуч",
                "slight left": "плавно ліворуч",
                "slight right": "плавно праворуч",
                "straight": "прямо",
                "uturn": "розворот"
            },
            "lanes": {
                "xo": "Тримайтесь праворуч",
                "ox": "Тримайтесь ліворуч",
                "xox": "Тримайтесь в середині",
                "oxo": "Тримайтесь праворуч або ліворуч"
            }
        },
        "modes": {
            "ferry": {
                "default": "Скористайтесь поромом",
                "name": "Скористайтесь поромом {way_name}",
                "destination": "Скористайтесь поромом у напрямку {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, потім, через {distance}, {instruction_two}",
            "two linked": "{instruction_one}, потім {instruction_two}",
            "one in distance": "Через {distance}, {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "з'їзд {exit}"
        },
        "arrive": {
            "default": {
                "default": "Ви прибули у ваш {nth} пункт призначення",
                "upcoming": "Ви наближаєтесь до вашого {nth} місця призначення",
                "short": "Ви прибули",
                "short-upcoming": "Ви прибудете",
                "named": "Ви прибули у {waypoint_name}"
            },
            "left": {
                "default": "Ви прибули у ваш {nth} пункт призначення, він – ліворуч",
                "upcoming": "Ви наближаєтесь до вашого {nth} місця призначення, ліворуч",
                "short": "Ви прибули",
                "short-upcoming": "Ви прибудете",
                "named": "Ви прибули у {waypoint_name} ліворуч"
            },
            "right": {
                "default": "Ви прибули у ваш {nth} пункт призначення, він – праворуч",
                "upcoming": "Ви наближаєтесь до вашого {nth} місця призначення, праворуч",
                "short": "Ви прибули",
                "short-upcoming": "Ви прибудете",
                "named": "Ви прибули у {waypoint_name} праворуч"
            },
            "sharp left": {
                "default": "Ви прибули у ваш {nth} пункт призначення, він – ліворуч",
                "upcoming": "Ви наближаєтесь до вашого {nth} місця призначення, ліворуч",
                "short": "Ви прибули",
                "short-upcoming": "Ви прибудете",
                "named": "Ви прибули у {waypoint_name} ліворуч"
            },
            "sharp right": {
                "default": "Ви прибули у ваш {nth} пункт призначення, він – праворуч",
                "upcoming": "Ви наближаєтесь до вашого {nth} місця призначення, праворуч",
                "short": "Ви прибули",
                "short-upcoming": "Ви прибудете",
                "named": "Ви прибули у {waypoint_name} праворуч"
            },
            "slight right": {
                "default": "Ви прибули у ваш {nth} пункт призначення, він – праворуч",
                "upcoming": "Ви наближаєтесь до вашого {nth} місця призначення, праворуч",
                "short": "Ви прибули",
                "short-upcoming": "Ви прибудете",
                "named": "Ви прибули у {waypoint_name} праворуч"
            },
            "slight left": {
                "default": "Ви прибули у ваш {nth} пункт призначення, він – ліворуч",
                "upcoming": "Ви наближаєтесь до вашого {nth} місця призначення, ліворуч",
                "short": "Ви прибули",
                "short-upcoming": "Ви прибудете",
                "named": "Ви прибули у {waypoint_name} ліворуч"
            },
            "straight": {
                "default": "Ви прибули у ваш {nth} пункт призначення, він – прямо перед вами",
                "upcoming": "Ви наближаєтесь до вашого {nth} місця призначення, прямо перед вами",
                "short": "Ви прибули",
                "short-upcoming": "Ви прибудете",
                "named": "Ви прибули у {waypoint_name} прямо перед вами"
            }
        },
        "continue": {
            "default": {
                "default": "Поверніть {modifier}",
                "name": "Поверніть{modifier} залишаючись на {way_name}",
                "destination": "Поверніть {modifier} у напрямку {destination}",
                "exit": "Поверніть {modifier} на {way_name}"
            },
            "straight": {
                "default": "Продовжуйте рух прямо",
                "name": "Продовжуйте рух прямо залишаючись на {way_name}",
                "destination": "Рухайтесь у напрямку {destination}",
                "distance": "Продовжуйте рух прямо {distance}",
                "namedistance": "Продовжуйте рух по {way_name} {distance}"
            },
            "sharp left": {
                "default": "Поверніть різко ліворуч",
                "name": "Поверніть різко ліворуч щоб залишитись на {way_name}",
                "destination": "Поверніть різко ліворуч у напрямку {destination}"
            },
            "sharp right": {
                "default": "Поверніть різко праворуч",
                "name": "Поверніть різко праворуч щоб залишитись на {way_name}",
                "destination": "Поверніть різко праворуч у напрямку {destination}"
            },
            "slight left": {
                "default": "Поверніть різко ліворуч",
                "name": "Поверніть плавно ліворуч щоб залишитись на {way_name}",
                "destination": "Поверніть плавно ліворуч у напрямку {destination}"
            },
            "slight right": {
                "default": "Поверніть плавно праворуч",
                "name": "Поверніть плавно праворуч щоб залишитись на {way_name}",
                "destination": "Поверніть плавно праворуч у напрямку {destination}"
            },
            "uturn": {
                "default": "Здійсніть розворот",
                "name": "Здійсніть розворот та рухайтесь по {way_name}",
                "destination": "Здійсніть розворот у напрямку {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Прямуйте на {direction}",
                "name": "Прямуйте на {direction} по {way_name}",
                "namedistance": "Прямуйте на {direction} по {way_name} {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Поверніть {modifier}",
                "name": "Поверніть {modifier} на {way_name}",
                "destination": "Поверніть {modifier} у напрямку {destination}"
            },
            "straight": {
                "default": "Продовжуйте рух прямо",
                "name": "Продовжуйте рух прямо до {way_name}",
                "destination": "Продовжуйте рух прямо у напрямку {destination}"
            },
            "uturn": {
                "default": "Здійсніть розворот в кінці дороги",
                "name": "Здійсніть розворот на {way_name} в кінці дороги",
                "destination": "Здійсніть розворот у напрямку {destination} в кінці дороги"
            }
        },
        "fork": {
            "default": {
                "default": "На роздоріжжі тримайтеся {modifier}",
                "name": "Тримайтеся {modifier} і рухайтесь на {way_name}",
                "destination": "Тримайтеся {modifier} в напрямку {destination}"
            },
            "slight left": {
                "default": "На роздоріжжі тримайтеся ліворуч",
                "name": "Тримайтеся ліворуч і рухайтесь на {way_name}",
                "destination": "Тримайтеся ліворуч в напрямку {destination}"
            },
            "slight right": {
                "default": "На роздоріжжі тримайтеся праворуч",
                "name": "Тримайтеся праворуч і рухайтесь на {way_name}",
                "destination": "Тримайтеся праворуч в напрямку {destination}"
            },
            "sharp left": {
                "default": "На роздоріжжі різко поверніть ліворуч",
                "name": "Прийміть різко ліворуч на {way_name}",
                "destination": "Прийміть різко ліворуч у напрямку {destination}"
            },
            "sharp right": {
                "default": "На роздоріжжі різко поверніть праворуч",
                "name": "Прийміть різко праворуч на {way_name}",
                "destination": "Прийміть різко праворуч у напрямку {destination}"
            },
            "uturn": {
                "default": "Здійсніть розворот",
                "name": "Здійсніть розворот на {way_name}",
                "destination": "Здійсніть розворот у напрямку {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Приєднайтеся до потоку {modifier}",
                "name": "Приєднайтеся до потоку {modifier} на {way_name}",
                "destination": "Приєднайтеся до потоку {modifier} у напрямку {destination}"
            },
            "straight": {
                "default": "Приєднайтеся до потоку",
                "name": "Приєднайтеся до потоку на {way_name}",
                "destination": "Приєднайтеся до потоку у напрямку {destination}"
            },
            "slight left": {
                "default": "Приєднайтеся до потоку ліворуч",
                "name": "Приєднайтеся до потоку ліворуч на {way_name}",
                "destination": "Приєднайтеся до потоку ліворуч у напрямку {destination}"
            },
            "slight right": {
                "default": "Приєднайтеся до потоку праворуч",
                "name": "Приєднайтеся до потоку праворуч на {way_name}",
                "destination": "Приєднайтеся до потоку праворуч у напрямку {destination}"
            },
            "sharp left": {
                "default": "Приєднайтеся до потоку ліворуч",
                "name": "Приєднайтеся до потоку ліворуч на {way_name}",
                "destination": "Приєднайтеся до потоку ліворуч у напрямку {destination}"
            },
            "sharp right": {
                "default": "Приєднайтеся до потоку праворуч",
                "name": "Приєднайтеся до потоку праворуч на {way_name}",
                "destination": "Приєднайтеся до потоку праворуч у напрямку {destination}"
            },
            "uturn": {
                "default": "Здійсніть розворот",
                "name": "Здійсніть розворот на {way_name}",
                "destination": "Здійсніть розворот у напрямку {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Рухайтесь {modifier}",
                "name": "Рухайтесь {modifier} на {way_name}",
                "destination": "Рухайтесь {modifier} у напрямку {destination}"
            },
            "straight": {
                "default": "Рухайтесь прямо",
                "name": "Рухайтесь по {way_name}",
                "destination": "Рухайтесь у напрямку {destination}"
            },
            "sharp left": {
                "default": "Прийміть різко ліворуч",
                "name": "Прийміть різко ліворуч на {way_name}",
                "destination": "Прийміть різко ліворуч у напрямку {destination}"
            },
            "sharp right": {
                "default": "Прийміть різко праворуч",
                "name": "Прийміть різко праворуч на {way_name}",
                "destination": "Прийміть різко праворуч у напрямку {destination}"
            },
            "slight left": {
                "default": "Рухайтесь плавно ліворуч",
                "name": "Рухайтесь плавно ліворуч на {way_name}",
                "destination": "Рухайтесь плавно ліворуч у напрямку {destination}"
            },
            "slight right": {
                "default": "Рухайтесь плавно праворуч",
                "name": "Рухайтесь плавно праворуч на {way_name}",
                "destination": "Рухайтесь плавно праворуч у напрямку {destination}"
            },
            "uturn": {
                "default": "Здійсніть розворот",
                "name": "Здійсніть розворот на {way_name}",
                "destination": "Здійсніть розворот у напрямку {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Рухайтесь {modifier}",
                "name": "Рухайтесь {modifier} на {way_name}",
                "destination": "Рухайтесь {modifier} у напрямку {destination}"
            },
            "uturn": {
                "default": "Здійсніть розворот",
                "name": "Здійсніть розворот на {way_name}",
                "destination": "Здійсніть розворот у напрямку {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Рухайтесь на зʼїзд",
                "name": "Рухайтесь на зʼїзд на {way_name}",
                "destination": "Рухайтесь на зʼїзд у напрямку {destination}",
                "exit": "Оберіть з'їзд {exit}",
                "exit_destination": "Оберіть з'їзд {exit} у напрямку {destination}"
            },
            "left": {
                "default": "Рухайтесь на зʼїзд ліворуч",
                "name": "Рухайтесь на зʼїзд ліворуч на {way_name}",
                "destination": "Рухайтесь на зʼїзд ліворуч у напрямку {destination}",
                "exit": "Оберіть з'їзд {exit} ліворуч",
                "exit_destination": "Оберіть з'їзд {exit} ліворуч у напрямку {destination}"
            },
            "right": {
                "default": "Рухайтесь на зʼїзд праворуч",
                "name": "Рухайтесь на зʼїзд праворуч на {way_name}",
                "destination": "Рухайтесь на зʼїзд праворуч у напрямку {destination}",
                "exit": "Оберіть з'їзд {exit} праворуч",
                "exit_destination": "Оберіть з'їзд {exit} праворуч у напрямку {destination}"
            },
            "sharp left": {
                "default": "Рухайтесь на зʼїзд ліворуч",
                "name": "Рухайтесь на зʼїзд ліворуч на {way_name}",
                "destination": "Рухайтесь на зʼїзд ліворуч у напрямку {destination}",
                "exit": "Оберіть з'їзд {exit} ліворуч",
                "exit_destination": "Оберіть з'їзд {exit} ліворуч у напрямку {destination}"
            },
            "sharp right": {
                "default": "Рухайтесь на зʼїзд праворуч",
                "name": "Рухайтесь на зʼїзд праворуч на {way_name}",
                "destination": "Рухайтесь на зʼїзд праворуч у напрямку {destination}",
                "exit": "Оберіть з'їзд {exit} праворуч",
                "exit_destination": "Оберіть з'їзд {exit} праворуч у напрямку {destination}"
            },
            "slight left": {
                "default": "Рухайтесь на зʼїзд ліворуч",
                "name": "Рухайтесь на зʼїзд ліворуч на {way_name}",
                "destination": "Рухайтесь на зʼїзд ліворуч у напрямку {destination}",
                "exit": "Оберіть з'їзд {exit} ліворуч",
                "exit_destination": "Оберіть з'їзд {exit} ліворуч у напрямку {destination}"
            },
            "slight right": {
                "default": "Рухайтесь на зʼїзд праворуч",
                "name": "Рухайтесь на зʼїзд праворуч на {way_name}",
                "destination": "Рухайтесь на зʼїзд праворуч у напрямку {destination}",
                "exit": "Оберіть з'їзд {exit} праворуч",
                "exit_destination": "Оберіть з'їзд {exit} праворуч у напрямку {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Рухайтесь на вʼїзд",
                "name": "Рухайтесь на вʼїзд на {way_name}",
                "destination": "Рухайтесь на вʼїзд у напрямку {destination}"
            },
            "left": {
                "default": "Рухайтесь на вʼїзд ліворуч",
                "name": "Рухайтесь на вʼїзд ліворуч на {way_name}",
                "destination": "Рухайтесь на вʼїзд ліворуч у напрямку {destination}"
            },
            "right": {
                "default": "Рухайтесь на вʼїзд праворуч",
                "name": "Рухайтесь на вʼїзд праворуч на {way_name}",
                "destination": "Рухайтесь на вʼїзд праворуч у напрямку {destination}"
            },
            "sharp left": {
                "default": "Рухайтесь на вʼїзд ліворуч",
                "name": "Рухайтесь на вʼїзд ліворуч на {way_name}",
                "destination": "Рухайтесь на вʼїзд ліворуч у напрямку {destination}"
            },
            "sharp right": {
                "default": "Рухайтесь на вʼїзд праворуч",
                "name": "Рухайтесь на вʼїзд праворуч на {way_name}",
                "destination": "Рухайтесь на вʼїзд праворуч у напрямку {destination}"
            },
            "slight left": {
                "default": "Рухайтесь на вʼїзд ліворуч",
                "name": "Рухайтесь на вʼїзд ліворуч на {way_name}",
                "destination": "Рухайтесь на вʼїзд ліворуч у напрямку {destination}"
            },
            "slight right": {
                "default": "Рухайтесь на вʼїзд праворуч",
                "name": "Рухайтесь на вʼїзд праворуч на {way_name}",
                "destination": "Рухайтесь на вʼїзд праворуч у напрямку {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Рухайтесь по колу",
                    "name": "Рухайтесь по колу до {way_name}",
                    "destination": "Рухайтесь по колу в напрямку {destination}"
                },
                "name": {
                    "default": "Рухайтесь по {rotary_name}",
                    "name": "Рухайтесь по {rotary_name} та поверніть на {way_name}",
                    "destination": "Рухайтесь по {rotary_name} та поверніть в напрямку {destination}"
                },
                "exit": {
                    "default": "Рухайтесь по колу та повереніть у {exit_number} з'їзд",
                    "name": "Рухайтесь по колу та поверніть у {exit_number} з'їзд на {way_name}",
                    "destination": "Рухайтесь по колу та поверніть у {exit_number} з'їзд у напрямку {destination}"
                },
                "name_exit": {
                    "default": "Рухайтесь по {rotary_name} та поверніть у {exit_number} з'їзд",
                    "name": "Рухайтесь по {rotary_name} та поверніть у {exit_number} з'їзд на {way_name}",
                    "destination": "Рухайтесь по {rotary_name} та поверніть у {exit_number} з'їзд в напрямку {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Рухайтесь по колу та повереніть у {exit_number} з'їзд",
                    "name": "Рухайтесь по колу та поверніть у {exit_number} з'їзд на {way_name}",
                    "destination": "Рухайтесь по колу та поверніть у {exit_number} з'їзд у напрямку {destination}"
                },
                "default": {
                    "default": "Рухайтесь по колу",
                    "name": "Рухайтесь по колу до {way_name}",
                    "destination": "Рухайтесь по колу в напрямку {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Рухайтесь {modifier}",
                "name": "Рухайтесь {modifier} на {way_name}",
                "destination": "Рухайтесь {modifier} в напрямку {destination}"
            },
            "left": {
                "default": "Поверніть ліворуч",
                "name": "Поверніть ліворуч на {way_name}",
                "destination": "Поверніть ліворуч у напрямку {destination}"
            },
            "right": {
                "default": "Поверніть праворуч",
                "name": "Поверніть праворуч на {way_name}",
                "destination": "Поверніть праворуч у напрямку {destination}"
            },
            "straight": {
                "default": "Рухайтесь прямо",
                "name": "Продовжуйте рух прямо до {way_name}",
                "destination": "Продовжуйте рух прямо у напрямку {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Залишить коло",
                "name": "Залишить коло на {way_name} зʼїзді",
                "destination": "Залишить коло в напрямку {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Залишить коло",
                "name": "Залишить коло на {way_name} зʼїзді",
                "destination": "Залишить коло в напрямку {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Рухайтесь {modifier}",
                "name": "Рухайтесь {modifier} на {way_name}",
                "destination": "Рухайтесь {modifier} в напрямку {destination}"
            },
            "left": {
                "default": "Поверніть ліворуч",
                "name": "Поверніть ліворуч на {way_name}",
                "destination": "Поверніть ліворуч у напрямку {destination}"
            },
            "right": {
                "default": "Поверніть праворуч",
                "name": "Поверніть праворуч на {way_name}",
                "destination": "Поверніть праворуч у напрямку {destination}"
            },
            "straight": {
                "default": "Рухайтесь прямо",
                "name": "Рухайтесь прямо по {way_name}",
                "destination": "Рухайтесь прямо у напрямку {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Продовжуйте рух прямо"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],46:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": true
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "đầu tiên",
                "2": "thứ 2",
                "3": "thứ 3",
                "4": "thứ 4",
                "5": "thứ 5",
                "6": "thú 6",
                "7": "thứ 7",
                "8": "thứ 8",
                "9": "thứ 9",
                "10": "thứ 10"
            },
            "direction": {
                "north": "bắc",
                "northeast": "đông bắc",
                "east": "đông",
                "southeast": "đông nam",
                "south": "nam",
                "southwest": "tây nam",
                "west": "tây",
                "northwest": "tây bắc"
            },
            "modifier": {
                "left": "trái",
                "right": "phải",
                "sharp left": "trái gắt",
                "sharp right": "phải gắt",
                "slight left": "trái nghiêng",
                "slight right": "phải nghiêng",
                "straight": "thẳng",
                "uturn": "ngược"
            },
            "lanes": {
                "xo": "Đi bên phải",
                "ox": "Đi bên trái",
                "xox": "Đi vào giữa",
                "oxo": "Đi bên trái hay bên phải"
            }
        },
        "modes": {
            "ferry": {
                "default": "Lên phà",
                "name": "Lên phà {way_name}",
                "destination": "Lên phà đi {destination}"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}, rồi {distance} nữa thì {instruction_two}",
            "two linked": "{instruction_one}, rồi {instruction_two}",
            "one in distance": "{distance} nữa thì {instruction_one}",
            "name and ref": "{name} ({ref})",
            "exit with number": "lối ra {exit}"
        },
        "arrive": {
            "default": {
                "default": "Đến nơi {nth}",
                "upcoming": "Đến nơi {nth}",
                "short": "Đến nơi",
                "short-upcoming": "Đến nơi",
                "named": "Đến {waypoint_name}"
            },
            "left": {
                "default": "Đến nơi {nth} ở bên trái",
                "upcoming": "Đến nơi {nth} ở bên trái",
                "short": "Đến nơi",
                "short-upcoming": "Đến nơi",
                "named": "Đến {waypoint_name} ở bên trái"
            },
            "right": {
                "default": "Đến nơi {nth} ở bên phải",
                "upcoming": "Đến nơi {nth} ở bên phải",
                "short": "Đến nơi",
                "short-upcoming": "Đến nơi",
                "named": "Đến {waypoint_name} ở bên phải"
            },
            "sharp left": {
                "default": "Đến nơi {nth} ở bên trái",
                "upcoming": "Đến nơi {nth} ở bên trái",
                "short": "Đến nơi",
                "short-upcoming": "Đến nơi",
                "named": "Đến {waypoint_name} ở bên trái"
            },
            "sharp right": {
                "default": "Đến nơi {nth} ở bên phải",
                "upcoming": "Đến nơi {nth} ở bên phải",
                "short": "Đến nơi",
                "short-upcoming": "Đến nơi",
                "named": "Đến {waypoint_name} ở bên phải"
            },
            "slight right": {
                "default": "Đến nơi {nth} ở bên phải",
                "upcoming": "Đến nơi {nth} ở bên phải",
                "short": "Đến nơi",
                "short-upcoming": "Đến nơi",
                "named": "Đến {waypoint_name} ở bên phải"
            },
            "slight left": {
                "default": "Đến nơi {nth} ở bên trái",
                "upcoming": "Đến nơi {nth} ở bên trái",
                "short": "Đến nơi",
                "short-upcoming": "Đến nơi",
                "named": "Đến {waypoint_name} ở bên trái"
            },
            "straight": {
                "default": "Đến nơi {nth} ở trước mặt",
                "upcoming": "Đến nơi {nth} ở trước mặt",
                "short": "Đến nơi",
                "short-upcoming": "Đến nơi",
                "named": "Đến {waypoint_name} ở trước mặt"
            }
        },
        "continue": {
            "default": {
                "default": "Quẹo {modifier}",
                "name": "Quẹo {modifier} để chạy tiếp trên {way_name}",
                "destination": "Quẹo {modifier} về {destination}",
                "exit": "Quẹo {modifier} vào {way_name}"
            },
            "straight": {
                "default": "Chạy thẳng",
                "name": "Chạy tiếp trên {way_name}",
                "destination": "Chạy tiếp về {destination}",
                "distance": "Chạy thẳng cho {distance}",
                "namedistance": "Chạy tiếp trên {way_name} cho {distance}"
            },
            "sharp left": {
                "default": "Quẹo gắt bên trái",
                "name": "Quẹo gắt bên trái để chạy tiếp trên {way_name}",
                "destination": "Quẹo gắt bên trái về {destination}"
            },
            "sharp right": {
                "default": "Quẹo gắt bên phải",
                "name": "Quẹo gắt bên phải để chạy tiếp trên {way_name}",
                "destination": "Quẹo gắt bên phải về {destination}"
            },
            "slight left": {
                "default": "Nghiêng về bên trái",
                "name": "Nghiêng về bên trái để chạy tiếp trên {way_name}",
                "destination": "Nghiêng về bên trái về {destination}"
            },
            "slight right": {
                "default": "Nghiêng về bên phải",
                "name": "Nghiêng về bên phải để chạy tiếp trên {way_name}",
                "destination": "Nghiêng về bên phải về {destination}"
            },
            "uturn": {
                "default": "Quẹo ngược lại",
                "name": "Quẹo ngược lại trên {way_name}",
                "destination": "Quẹo ngược về {destination}"
            }
        },
        "depart": {
            "default": {
                "default": "Đi về hướng {direction}",
                "name": "Đi về hướng {direction} trên {way_name}",
                "namedistance": "Đi về hướng {direction} trên {way_name} cho {distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "Quẹo {modifier}",
                "name": "Quẹo {modifier} vào {way_name}",
                "destination": "Quẹo {modifier} về {destination}"
            },
            "straight": {
                "default": "Chạy thẳng",
                "name": "Chạy tiếp trên {way_name}",
                "destination": "Chạy tiếp về {destination}"
            },
            "uturn": {
                "default": "Quẹo ngược lại tại cuối đường",
                "name": "Quẹo ngược vào {way_name} tại cuối đường",
                "destination": "Quẹo ngược về {destination} tại cuối đường"
            }
        },
        "fork": {
            "default": {
                "default": "Đi bên {modifier} ở ngã ba",
                "name": "Giữ bên {modifier} vào {way_name}",
                "destination": "Giữ bên {modifier} về {destination}"
            },
            "slight left": {
                "default": "Nghiêng về bên trái ở ngã ba",
                "name": "Giữ bên trái vào {way_name}",
                "destination": "Giữ bên trái về {destination}"
            },
            "slight right": {
                "default": "Nghiêng về bên phải ở ngã ba",
                "name": "Giữ bên phải vào {way_name}",
                "destination": "Giữ bên phải về {destination}"
            },
            "sharp left": {
                "default": "Quẹo gắt bên trái ở ngã ba",
                "name": "Quẹo gắt bên trái vào {way_name}",
                "destination": "Quẹo gắt bên trái về {destination}"
            },
            "sharp right": {
                "default": "Quẹo gắt bên phải ở ngã ba",
                "name": "Quẹo gắt bên phải vào {way_name}",
                "destination": "Quẹo gắt bên phải về {destination}"
            },
            "uturn": {
                "default": "Quẹo ngược lại",
                "name": "Quẹo ngược lại {way_name}",
                "destination": "Quẹo ngược lại về {destination}"
            }
        },
        "merge": {
            "default": {
                "default": "Nhập sang {modifier}",
                "name": "Nhập sang {modifier} vào {way_name}",
                "destination": "Nhập sang {modifier} về {destination}"
            },
            "straight": {
                "default": "Nhập đường",
                "name": "Nhập vào {way_name}",
                "destination": "Nhập đường về {destination}"
            },
            "slight left": {
                "default": "Nhập sang trái",
                "name": "Nhập sang trái vào {way_name}",
                "destination": "Nhập sang trái về {destination}"
            },
            "slight right": {
                "default": "Nhập sang phải",
                "name": "Nhập sang phải vào {way_name}",
                "destination": "Nhập sang phải về {destination}"
            },
            "sharp left": {
                "default": "Nhập sang trái",
                "name": "Nhập sang trái vào {way_name}",
                "destination": "Nhập sang trái về {destination}"
            },
            "sharp right": {
                "default": "Nhập sang phải",
                "name": "Nhập sang phải vào {way_name}",
                "destination": "Nhập sang phải về {destination}"
            },
            "uturn": {
                "default": "Quẹo ngược lại",
                "name": "Quẹo ngược lại {way_name}",
                "destination": "Quẹo ngược lại về {destination}"
            }
        },
        "new name": {
            "default": {
                "default": "Chạy tiếp bên {modifier}",
                "name": "Chạy tiếp bên {modifier} trên {way_name}",
                "destination": "Chạy tiếp bên {modifier} về {destination}"
            },
            "straight": {
                "default": "Chạy thẳng",
                "name": "Chạy tiếp trên {way_name}",
                "destination": "Chạy tiếp về {destination}"
            },
            "sharp left": {
                "default": "Quẹo gắt bên trái",
                "name": "Quẹo gắt bên trái vào {way_name}",
                "destination": "Quẹo gắt bên trái về {destination}"
            },
            "sharp right": {
                "default": "Quẹo gắt bên phải",
                "name": "Quẹo gắt bên phải vào {way_name}",
                "destination": "Quẹo gắt bên phải về {destination}"
            },
            "slight left": {
                "default": "Nghiêng về bên trái",
                "name": "Nghiêng về bên trái vào {way_name}",
                "destination": "Nghiêng về bên trái về {destination}"
            },
            "slight right": {
                "default": "Nghiêng về bên phải",
                "name": "Nghiêng về bên phải vào {way_name}",
                "destination": "Nghiêng về bên phải về {destination}"
            },
            "uturn": {
                "default": "Quẹo ngược lại",
                "name": "Quẹo ngược lại {way_name}",
                "destination": "Quẹo ngược lại về {destination}"
            }
        },
        "notification": {
            "default": {
                "default": "Chạy tiếp bên {modifier}",
                "name": "Chạy tiếp bên {modifier} trên {way_name}",
                "destination": "Chạy tiếp bên {modifier} về {destination}"
            },
            "uturn": {
                "default": "Quẹo ngược lại",
                "name": "Quẹo ngược lại {way_name}",
                "destination": "Quẹo ngược lại về {destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "Đi đường nhánh",
                "name": "Đi đường nhánh {way_name}",
                "destination": "Đi đường nhánh về {destination}",
                "exit": "Đi theo lối ra {exit}",
                "exit_destination": "Đi theo lối ra {exit} về {destination}"
            },
            "left": {
                "default": "Đi đường nhánh bên trái",
                "name": "Đi đường nhánh {way_name} bên trái",
                "destination": "Đi đường nhánh bên trái về {destination}",
                "exit": "Đi theo lối ra {exit} bên trái",
                "exit_destination": "Đi theo lối ra {exit} bên trái về {destination}"
            },
            "right": {
                "default": "Đi đường nhánh bên phải",
                "name": "Đi đường nhánh {way_name} bên phải",
                "destination": "Đi đường nhánh bên phải về {destination}",
                "exit": "Đi theo lối ra {exit} bên phải",
                "exit_destination": "Đi theo lối ra {exit} bên phải về {destination}"
            },
            "sharp left": {
                "default": "Đi đường nhánh bên trái",
                "name": "Đi đường nhánh {way_name} bên trái",
                "destination": "Đi đường nhánh bên trái về {destination}",
                "exit": "Đi theo lối ra {exit} bên trái",
                "exit_destination": "Đi theo lối ra {exit} bên trái về {destination}"
            },
            "sharp right": {
                "default": "Đi đường nhánh bên phải",
                "name": "Đi đường nhánh {way_name} bên phải",
                "destination": "Đi đường nhánh bên phải về {destination}",
                "exit": "Đi theo lối ra {exit} bên phải",
                "exit_destination": "Đi theo lối ra {exit} bên phải về {destination}"
            },
            "slight left": {
                "default": "Đi đường nhánh bên trái",
                "name": "Đi đường nhánh {way_name} bên trái",
                "destination": "Đi đường nhánh bên trái về {destination}",
                "exit": "Đi theo lối ra {exit} bên trái",
                "exit_destination": "Đi theo lối ra {exit} bên trái về {destination}"
            },
            "slight right": {
                "default": "Đi đường nhánh bên phải",
                "name": "Đi đường nhánh {way_name} bên phải",
                "destination": "Đi đường nhánh bên phải về {destination}",
                "exit": "Đi theo lối ra {exit} bên phải",
                "exit_destination": "Đi theo lối ra {exit} bên phải về {destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "Đi đường nhánh",
                "name": "Đi đường nhánh {way_name}",
                "destination": "Đi đường nhánh về {destination}"
            },
            "left": {
                "default": "Đi đường nhánh bên trái",
                "name": "Đi đường nhánh {way_name} bên trái",
                "destination": "Đi đường nhánh bên trái về {destination}"
            },
            "right": {
                "default": "Đi đường nhánh bên phải",
                "name": "Đi đường nhánh {way_name} bên phải",
                "destination": "Đi đường nhánh bên phải về {destination}"
            },
            "sharp left": {
                "default": "Đi đường nhánh bên trái",
                "name": "Đi đường nhánh {way_name} bên trái",
                "destination": "Đi đường nhánh bên trái về {destination}"
            },
            "sharp right": {
                "default": "Đi đường nhánh bên phải",
                "name": "Đi đường nhánh {way_name} bên phải",
                "destination": "Đi đường nhánh bên phải về {destination}"
            },
            "slight left": {
                "default": "Đi đường nhánh bên trái",
                "name": "Đi đường nhánh {way_name} bên trái",
                "destination": "Đi đường nhánh bên trái về {destination}"
            },
            "slight right": {
                "default": "Đi đường nhánh bên phải",
                "name": "Đi đường nhánh {way_name} bên phải",
                "destination": "Đi đường nhánh bên phải về {destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "Đi vào bùng binh",
                    "name": "Đi vào bùng binh và ra tại {way_name}",
                    "destination": "Đi vào bùng binh và ra về {destination}"
                },
                "name": {
                    "default": "Đi vào {rotary_name}",
                    "name": "Đi vào {rotary_name} và ra tại {way_name}",
                    "destination": "Đi và {rotary_name} và ra về {destination}"
                },
                "exit": {
                    "default": "Đi vào bùng binh và ra tại đường {exit_number}",
                    "name": "Đi vào bùng binh và ra tại đường {exit_number} tức {way_name}",
                    "destination": "Đi vào bùng binh và ra tại đường {exit_number} về {destination}"
                },
                "name_exit": {
                    "default": "Đi vào {rotary_name} và ra tại đường {exit_number}",
                    "name": "Đi vào {rotary_name} và ra tại đường {exit_number} tức {way_name}",
                    "destination": "Đi vào {rotary_name} và ra tại đường {exit_number} về {destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "Đi vào bùng binh và ra tại đường {exit_number}",
                    "name": "Đi vào bùng binh và ra tại đường {exit_number} tức {way_name}",
                    "destination": "Đi vào bùng binh và ra tại đường {exit_number} về {destination}"
                },
                "default": {
                    "default": "Đi vào bùng binh",
                    "name": "Đi vào bùng binh và ra tại {way_name}",
                    "destination": "Đi vào bùng binh và ra về {destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "Quẹo {modifier}",
                "name": "Quẹo {modifier} vào {way_name}",
                "destination": "Quẹo {modifier} về {destination}"
            },
            "left": {
                "default": "Quẹo trái",
                "name": "Quẹo trái vào {way_name}",
                "destination": "Quẹo trái về {destination}"
            },
            "right": {
                "default": "Quẹo phải",
                "name": "Quẹo phải vào {way_name}",
                "destination": "Quẹo phải về {destination}"
            },
            "straight": {
                "default": "Chạy thẳng",
                "name": "Chạy tiếp trên {way_name}",
                "destination": "Chạy tiếp về {destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "Ra bùng binh",
                "name": "Ra bùng binh vào {way_name}",
                "destination": "Ra bùng binh về {destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "Ra bùng binh",
                "name": "Ra bùng binh vào {way_name}",
                "destination": "Ra bùng binh về {destination}"
            }
        },
        "turn": {
            "default": {
                "default": "Quẹo {modifier}",
                "name": "Quẹo {modifier} vào {way_name}",
                "destination": "Quẹo {modifier} về {destination}"
            },
            "left": {
                "default": "Quẹo trái",
                "name": "Quẹo trái vào {way_name}",
                "destination": "Quẹo trái về {destination}"
            },
            "right": {
                "default": "Quẹo phải",
                "name": "Quẹo phải vào {way_name}",
                "destination": "Quẹo phải về {destination}"
            },
            "straight": {
                "default": "Chạy thẳng",
                "name": "Chạy thẳng vào {way_name}",
                "destination": "Chạy thẳng về {destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "Chạy thẳng"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],47:[function(_dereq_,module,exports){
module.exports={
    "meta": {
        "capitalizeFirstLetter": false
    },
    "v5": {
        "constants": {
            "ordinalize": {
                "1": "第一",
                "2": "第二",
                "3": "第三",
                "4": "第四",
                "5": "第五",
                "6": "第六",
                "7": "第七",
                "8": "第八",
                "9": "第九",
                "10": "第十"
            },
            "direction": {
                "north": "北",
                "northeast": "东北",
                "east": "东",
                "southeast": "东南",
                "south": "南",
                "southwest": "西南",
                "west": "西",
                "northwest": "西北"
            },
            "modifier": {
                "left": "向左",
                "right": "向右",
                "sharp left": "急向左",
                "sharp right": "急向右",
                "slight left": "稍向左",
                "slight right": "稍向右",
                "straight": "直行",
                "uturn": "调头"
            },
            "lanes": {
                "xo": "靠右行驶",
                "ox": "靠左行驶",
                "xox": "保持在道路中间行驶",
                "oxo": "保持在道路左侧或右侧行驶"
            }
        },
        "modes": {
            "ferry": {
                "default": "乘坐轮渡",
                "name": "乘坐{way_name}轮渡",
                "destination": "乘坐开往{destination}的轮渡"
            }
        },
        "phrase": {
            "two linked by distance": "{instruction_one}，{distance}后{instruction_two}",
            "two linked": "{instruction_one}，随后{instruction_two}",
            "one in distance": "{distance}后{instruction_one}",
            "name and ref": "{name}（{ref}）",
            "exit with number": "出口{exit}"
        },
        "arrive": {
            "default": {
                "default": "您已经到达您的{nth}个目的地",
                "upcoming": "您即将到达您的{nth}个目的地",
                "short": "已到达目的地",
                "short-upcoming": "即将到达目的地",
                "named": "您已到达{waypoint_name}"
            },
            "left": {
                "default": "您已经到达您的{nth}个目的地，目的地在道路左侧",
                "upcoming": "您即将到达您的{nth}个目的地，目的地在道路左侧",
                "short": "已到达目的地",
                "short-upcoming": "即将到达目的地",
                "named": "您已到达{waypoint_name}，目的地在您左边。"
            },
            "right": {
                "default": "您已经到达您的{nth}个目的地，目的地在道路右侧",
                "upcoming": "您即将到达您的{nth}个目的地，目的地在道路右侧",
                "short": "已到达目的地",
                "short-upcoming": "即将到达目的地",
                "named": "您已到达{waypoint_name}，目的地在您右边。"
            },
            "sharp left": {
                "default": "您已经到达您的{nth}个目的地，目的地在道路左侧",
                "upcoming": "您即将到达您的{nth}个目的地，目的地在道路左侧",
                "short": "已到达目的地",
                "short-upcoming": "即将到达目的地",
                "named": "您已到达{waypoint_name}，目的地在您左边。"
            },
            "sharp right": {
                "default": "您已经到达您的{nth}个目的地，目的地在道路右侧",
                "upcoming": "您即将到达您的{nth}个目的地，目的地在道路右侧",
                "short": "已到达目的地",
                "short-upcoming": "即将到达目的地",
                "named": "您已到达{waypoint_name}，目的地在您右边。"
            },
            "slight right": {
                "default": "您已经到达您的{nth}个目的地，目的地在道路左侧",
                "upcoming": "您即将到达您的{nth}个目的地，目的地在道路左侧",
                "short": "已到达目的地",
                "short-upcoming": "即将到达目的地",
                "named": "您已到达{waypoint_name}，目的地在您右边。"
            },
            "slight left": {
                "default": "您已经到达您的{nth}个目的地，目的地在道路右侧",
                "upcoming": "您即将到达您的{nth}个目的地，目的地在道路右侧",
                "short": "已到达目的地",
                "short-upcoming": "即将到达目的地",
                "named": "您已到达{waypoint_name}，目的地在您左边。"
            },
            "straight": {
                "default": "您已经到达您的{nth}个目的地，目的地在您正前方",
                "upcoming": "您即将到达您的{nth}个目的地，目的地在您正前方",
                "short": "已到达目的地",
                "short-upcoming": "即将到达目的地",
                "named": "您已到达{waypoint_name}，目的地在您前方。"
            }
        },
        "continue": {
            "default": {
                "default": "{modifier}行驶",
                "name": "在{way_name}上继续{modifier}行驶",
                "destination": "{modifier}行驶，{destination}方向",
                "exit": "{modifier}行驶，驶入{way_name}"
            },
            "straight": {
                "default": "继续直行",
                "name": "在{way_name}上继续直行",
                "destination": "继续直行，前往{destination}",
                "distance": "继续直行{distance}",
                "namedistance": "继续在{way_name}上直行{distance}"
            },
            "sharp left": {
                "default": "前方左急转弯",
                "name": "前方左急转弯，继续在{way_name}上行驶",
                "destination": "左急转弯，前往{destination}"
            },
            "sharp right": {
                "default": "前方右急转弯",
                "name": "前方右急转弯，继续在{way_name}上行驶",
                "destination": "右急转弯，前往{destination}"
            },
            "slight left": {
                "default": "前方稍向左转",
                "name": "前方稍向左转，继续在{way_name}上行驶",
                "destination": "稍向左转，前往{destination}"
            },
            "slight right": {
                "default": "前方稍向右转",
                "name": "前方稍向右转，继续在{way_name}上行驶",
                "destination": "前方稍向右转，前往{destination}"
            },
            "uturn": {
                "default": "前方调头",
                "name": "前方调头，继续在{way_name}上行驶",
                "destination": "前方调头，前往{destination}"
            }
        },
        "depart": {
            "default": {
                "default": "出发向{direction}",
                "name": "出发向{direction}，驶入{way_name}",
                "namedistance": "出发向{direction}，在{way_name}上继续行驶{distance}"
            }
        },
        "end of road": {
            "default": {
                "default": "{modifier}行驶",
                "name": "{modifier}行驶，驶入{way_name}",
                "destination": "{modifier}行驶，前往{destination}"
            },
            "straight": {
                "default": "继续直行",
                "name": "继续直行，驶入{way_name}",
                "destination": "继续直行，前往{destination}"
            },
            "uturn": {
                "default": "在道路尽头调头",
                "name": "在道路尽头调头驶入{way_name}",
                "destination": "在道路尽头调头，前往{destination}"
            }
        },
        "fork": {
            "default": {
                "default": "在岔道保持{modifier}",
                "name": "在岔道口保持{modifier}，驶入{way_name}",
                "destination": "在岔道口保持{modifier}，前往{destination}"
            },
            "slight left": {
                "default": "在岔道口保持左侧行驶",
                "name": "在岔道口保持左侧行驶，驶入{way_name}",
                "destination": "在岔道口保持左侧行驶，前往{destination}"
            },
            "slight right": {
                "default": "在岔道口保持右侧行驶",
                "name": "在岔道口保持右侧行驶，驶入{way_name}",
                "destination": "在岔道口保持右侧行驶，前往{destination}"
            },
            "sharp left": {
                "default": "在岔道口左急转弯",
                "name": "在岔道口左急转弯，驶入{way_name}",
                "destination": "在岔道口左急转弯，前往{destination}"
            },
            "sharp right": {
                "default": "在岔道口右急转弯",
                "name": "在岔道口右急转弯，驶入{way_name}",
                "destination": "在岔道口右急转弯，前往{destination}"
            },
            "uturn": {
                "default": "前方调头",
                "name": "前方调头，驶入{way_name}",
                "destination": "前方调头，前往{destination}"
            }
        },
        "merge": {
            "default": {
                "default": "{modifier}并道",
                "name": "{modifier}并道，驶入{way_name}",
                "destination": "{modifier}并道，前往{destination}"
            },
            "straight": {
                "default": "直行并道",
                "name": "直行并道，驶入{way_name}",
                "destination": "直行并道，前往{destination}"
            },
            "slight left": {
                "default": "稍向左并道",
                "name": "稍向左并道，驶入{way_name}",
                "destination": "稍向左并道，前往{destination}"
            },
            "slight right": {
                "default": "稍向右并道",
                "name": "稍向右并道，驶入{way_name}",
                "destination": "稍向右并道，前往{destination}"
            },
            "sharp left": {
                "default": "急向左并道",
                "name": "急向左并道，驶入{way_name}",
                "destination": "急向左并道，前往{destination}"
            },
            "sharp right": {
                "default": "急向右并道",
                "name": "急向右并道，驶入{way_name}",
                "destination": "急向右并道，前往{destination}"
            },
            "uturn": {
                "default": "前方调头",
                "name": "前方调头，驶入{way_name}",
                "destination": "前方调头，前往{destination}"
            }
        },
        "new name": {
            "default": {
                "default": "继续{modifier}",
                "name": "继续{modifier}，驶入{way_name}",
                "destination": "继续{modifier}，前往{destination}"
            },
            "straight": {
                "default": "继续直行",
                "name": "继续在{way_name}上直行",
                "destination": "继续直行，前往{destination}"
            },
            "sharp left": {
                "default": "前方左急转弯",
                "name": "前方左急转弯，驶入{way_name}",
                "destination": "左急转弯，前往{destination}"
            },
            "sharp right": {
                "default": "前方右急转弯",
                "name": "前方右急转弯，驶入{way_name}",
                "destination": "右急转弯，前往{destination}"
            },
            "slight left": {
                "default": "继续稍向左",
                "name": "继续稍向左，驶入{way_name}",
                "destination": "继续稍向左，前往{destination}"
            },
            "slight right": {
                "default": "继续稍向右",
                "name": "继续稍向右，驶入{way_name}",
                "destination": "继续稍向右，前往{destination}"
            },
            "uturn": {
                "default": "前方调头",
                "name": "前方调头，上{way_name}",
                "destination": "前方调头，前往{destination}"
            }
        },
        "notification": {
            "default": {
                "default": "继续{modifier}",
                "name": "继续{modifier}，驶入{way_name}",
                "destination": "继续{modifier}，前往{destination}"
            },
            "uturn": {
                "default": "前方调头",
                "name": "前方调头，驶入{way_name}",
                "destination": "前方调头，前往{destination}"
            }
        },
        "off ramp": {
            "default": {
                "default": "下匝道",
                "name": "下匝道，驶入{way_name}",
                "destination": "下匝道，前往{destination}",
                "exit": "从{exit}出口驶出",
                "exit_destination": "从{exit}出口驶出，前往{destination}"
            },
            "left": {
                "default": "下左侧匝道",
                "name": "下左侧匝道，上{way_name}",
                "destination": "下左侧匝道，前往{destination}",
                "exit": "从左侧{exit}出口驶出",
                "exit_destination": "从左侧{exit}出口驶出，前往{destination}"
            },
            "right": {
                "default": "下右侧匝道",
                "name": "下右侧匝道，驶入{way_name}",
                "destination": "下右侧匝道，前往{destination}",
                "exit": "从右侧{exit}出口驶出",
                "exit_destination": "从右侧{exit}出口驶出，前往{destination}"
            },
            "sharp left": {
                "default": "急向左下匝道",
                "name": "急向左下匝道，驶入{way_name}",
                "destination": "急向左下匝道，前往{destination}",
                "exit": "从左侧{exit}出口驶出",
                "exit_destination": "从左侧{exit}出口驶出，前往{destination}"
            },
            "sharp right": {
                "default": "急向右下匝道",
                "name": "急向右下匝道，驶入{way_name}",
                "destination": "急向右下匝道，前往{destination}",
                "exit": "从右侧{exit}出口驶出",
                "exit_destination": "从右侧{exit}出口驶出，前往{destination}"
            },
            "slight left": {
                "default": "稍向左下匝道",
                "name": "稍向左下匝道，驶入{way_name}",
                "destination": "稍向左下匝道，前往{destination}",
                "exit": "从左侧{exit}出口驶出",
                "exit_destination": "从左侧{exit}出口驶出，前往{destination}"
            },
            "slight right": {
                "default": "稍向右下匝道",
                "name": "稍向右下匝道，驶入{way_name}",
                "destination": "稍向右下匝道，前往{destination}",
                "exit": "从右侧{exit}出口驶出",
                "exit_destination": "从右侧{exit}出口驶出，前往{destination}"
            }
        },
        "on ramp": {
            "default": {
                "default": "上匝道",
                "name": "上匝道，驶入{way_name}",
                "destination": "上匝道，前往{destination}"
            },
            "left": {
                "default": "上左侧匝道",
                "name": "上左侧匝道，驶入{way_name}",
                "destination": "上左侧匝道，前往{destination}"
            },
            "right": {
                "default": "上右侧匝道",
                "name": "上右侧匝道，驶入{way_name}",
                "destination": "上右侧匝道，前往{destination}"
            },
            "sharp left": {
                "default": "急向左上匝道",
                "name": "急向左上匝道，驶入{way_name}",
                "destination": "急向左上匝道，前往{destination}"
            },
            "sharp right": {
                "default": "急向右上匝道",
                "name": "急向右上匝道，驶入{way_name}",
                "destination": "急向右上匝道，前往{destination}"
            },
            "slight left": {
                "default": "稍向左上匝道",
                "name": "稍向左上匝道，驶入{way_name}",
                "destination": "稍向左上匝道，前往{destination}"
            },
            "slight right": {
                "default": "稍向右上匝道",
                "name": "稍向右上匝道，驶入{way_name}",
                "destination": "稍向右上匝道，前往{destination}"
            }
        },
        "rotary": {
            "default": {
                "default": {
                    "default": "进入环岛",
                    "name": "通过环岛后驶入{way_name}",
                    "destination": "通过环岛后前往{destination}"
                },
                "name": {
                    "default": "进入{rotary_name}环岛",
                    "name": "通过{rotary_name}环岛后驶入{way_name}",
                    "destination": "通过{rotary_name}环岛后前往{destination}"
                },
                "exit": {
                    "default": "进入环岛后从{exit_number}出口驶出",
                    "name": "进入环岛后从{exit_number}出口驶出，上{way_name}",
                    "destination": "进入环岛后从{exit_number}出口驶出，前往{destination}"
                },
                "name_exit": {
                    "default": "进入{rotary_name}环岛后从{exit_number}出口驶出",
                    "name": "进入{rotary_name}环岛后从{exit_number}出口驶出，上{way_name}",
                    "destination": "进入{rotary_name}环岛后从{exit_number}出口驶出，前往{destination}"
                }
            }
        },
        "roundabout": {
            "default": {
                "exit": {
                    "default": "进入环岛后从{exit_number}出口驶出",
                    "name": "进入环岛后从{exit_number}出口驶出，上{way_name}",
                    "destination": "进入环岛后从{exit_number}出口驶出，前往{destination}"
                },
                "default": {
                    "default": "进入环岛",
                    "name": "通过环岛后驶入{way_name}",
                    "destination": "通过环岛后前往{destination}"
                }
            }
        },
        "roundabout turn": {
            "default": {
                "default": "{modifier}转弯",
                "name": "{modifier}转弯，驶入{way_name}",
                "destination": "{modifier}转弯，前往{destination}"
            },
            "left": {
                "default": "左转",
                "name": "左转，驶入{way_name}",
                "destination": "左转，前往{destination}"
            },
            "right": {
                "default": "右转",
                "name": "右转，驶入{way_name}",
                "destination": "右转，前往{destination}"
            },
            "straight": {
                "default": "继续直行",
                "name": "继续直行，驶入{way_name}",
                "destination": "继续直行，前往{destination}"
            }
        },
        "exit roundabout": {
            "default": {
                "default": "驶离环岛",
                "name": "驶离环岛，驶入{way_name}",
                "destination": "驶离环岛，前往{destination}"
            }
        },
        "exit rotary": {
            "default": {
                "default": "驶离环岛",
                "name": "驶离环岛，驶入{way_name}",
                "destination": "驶离环岛，前往{destination}"
            }
        },
        "turn": {
            "default": {
                "default": "{modifier}转弯",
                "name": "{modifier}转弯，驶入{way_name}",
                "destination": "{modifier}转弯，前往{destination}"
            },
            "left": {
                "default": "左转",
                "name": "左转，驶入{way_name}",
                "destination": "左转，前往{destination}"
            },
            "right": {
                "default": "右转",
                "name": "右转，驶入{way_name}",
                "destination": "右转，前往{destination}"
            },
            "straight": {
                "default": "直行",
                "name": "直行，驶入{way_name}",
                "destination": "直行，前往{destination}"
            }
        },
        "use lane": {
            "no_lanes": {
                "default": "继续直行"
            },
            "default": {
                "default": "{lane_instruction}"
            }
        }
    }
}

},{}],48:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);

	module.exports = L.Class.extend({
		options: {
			timeout: 500,
			blurTimeout: 100,
			noResultsMessage: 'No results found.'
		},

		initialize: function(elem, callback, context, options) {
			L.setOptions(this, options);

			this._elem = elem;
			this._resultFn = options.resultFn ? L.Util.bind(options.resultFn, options.resultContext) : null;
			this._autocomplete = options.autocompleteFn ? L.Util.bind(options.autocompleteFn, options.autocompleteContext) : null;
			this._selectFn = L.Util.bind(callback, context);
			this._container = L.DomUtil.create('div', 'leaflet-routing-geocoder-result');
			this._resultTable = L.DomUtil.create('table', '', this._container);

			// TODO: looks a bit like a kludge to register same for input and keypress -
			// browsers supporting both will get duplicate events; just registering
			// input will not catch enter, though.
			L.DomEvent.addListener(this._elem, 'input', this._keyPressed, this);
			L.DomEvent.addListener(this._elem, 'keypress', this._keyPressed, this);
			L.DomEvent.addListener(this._elem, 'keydown', this._keyDown, this);
			L.DomEvent.addListener(this._elem, 'blur', function() {
				if (this._isOpen) {
					this.close();
				}
			}, this);
		},

		close: function() {
			L.DomUtil.removeClass(this._container, 'leaflet-routing-geocoder-result-open');
			this._isOpen = false;
		},

		_open: function() {
			var rect = this._elem.getBoundingClientRect();
			if (!this._container.parentElement) {
				// See notes section under https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX
				// This abomination is required to support all flavors of IE
				var scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset
					: (document.documentElement || document.body.parentNode || document.body).scrollLeft;
				var scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset
					: (document.documentElement || document.body.parentNode || document.body).scrollTop;
				this._container.style.left = (rect.left + scrollX) + 'px';
				this._container.style.top = (rect.bottom + scrollY) + 'px';
				this._container.style.width = (rect.right - rect.left) + 'px';
				document.body.appendChild(this._container);
			}

			L.DomUtil.addClass(this._container, 'leaflet-routing-geocoder-result-open');
			this._isOpen = true;
		},

		_setResults: function(results) {
			var i,
			    tr,
			    td,
			    text;

			delete this._selection;
			this._results = results;

			while (this._resultTable.firstChild) {
				this._resultTable.removeChild(this._resultTable.firstChild);
			}

			for (i = 0; i < results.length; i++) {
				tr = L.DomUtil.create('tr', '', this._resultTable);
				tr.setAttribute('data-result-index', i);
				td = L.DomUtil.create('td', '', tr);
				text = document.createTextNode(results[i].name);
				td.appendChild(text);
				// mousedown + click because:
				// http://stackoverflow.com/questions/10652852/jquery-fire-click-before-blur-event
				L.DomEvent.addListener(td, 'mousedown', L.DomEvent.preventDefault);
				L.DomEvent.addListener(td, 'click', this._createClickListener(results[i]));
			}

			if (!i) {
				tr = L.DomUtil.create('tr', '', this._resultTable);
				td = L.DomUtil.create('td', 'leaflet-routing-geocoder-no-results', tr);
				td.innerHTML = this.options.noResultsMessage;
			}

			this._open();

			if (results.length > 0) {
				// Select the first entry
				this._select(1);
			}
		},

		_createClickListener: function(r) {
			var resultSelected = this._resultSelected(r);
			return L.bind(function() {
				this._elem.blur();
				resultSelected();
			}, this);
		},

		_resultSelected: function(r) {
			return L.bind(function() {
				this.close();
				this._elem.value = r.name;
				this._lastCompletedText = r.name;
				this._selectFn(r);
			}, this);
		},

		_keyPressed: function(e) {
			var index;

			if (this._isOpen && e.keyCode === 13 && this._selection) {
				index = parseInt(this._selection.getAttribute('data-result-index'), 10);
				this._resultSelected(this._results[index])();
				L.DomEvent.preventDefault(e);
				return;
			}

			if (e.keyCode === 13) {
				L.DomEvent.preventDefault(e);
				this._complete(this._resultFn, true);
				return;
			}

			if (this._autocomplete && document.activeElement === this._elem) {
				if (this._timer) {
					clearTimeout(this._timer);
				}
				this._timer = setTimeout(L.Util.bind(function() { this._complete(this._autocomplete); }, this),
					this.options.timeout);
				return;
			}

			this._unselect();
		},

		_select: function(dir) {
			var sel = this._selection;
			if (sel) {
				L.DomUtil.removeClass(sel.firstChild, 'leaflet-routing-geocoder-selected');
				sel = sel[dir > 0 ? 'nextSibling' : 'previousSibling'];
			}
			if (!sel) {
				sel = this._resultTable[dir > 0 ? 'firstChild' : 'lastChild'];
			}

			if (sel) {
				L.DomUtil.addClass(sel.firstChild, 'leaflet-routing-geocoder-selected');
				this._selection = sel;
			}
		},

		_unselect: function() {
			if (this._selection) {
				L.DomUtil.removeClass(this._selection.firstChild, 'leaflet-routing-geocoder-selected');
			}
			delete this._selection;
		},

		_keyDown: function(e) {
			if (this._isOpen) {
				switch (e.keyCode) {
				// Escape
				case 27:
					this.close();
					L.DomEvent.preventDefault(e);
					return;
				// Up
				case 38:
					this._select(-1);
					L.DomEvent.preventDefault(e);
					return;
				// Down
				case 40:
					this._select(1);
					L.DomEvent.preventDefault(e);
					return;
				}
			}
		},

		_complete: function(completeFn, trySelect) {
			var v = this._elem.value;
			function completeResults(results) {
				this._lastCompletedText = v;
				if (trySelect && results.length === 1) {
					this._resultSelected(results[0])();
				} else {
					this._setResults(results);
				}
			}

			if (!v) {
				return;
			}

			if (v !== this._lastCompletedText) {
				completeFn(v, completeResults, this);
			} else if (trySelect) {
				completeResults.call(this, this._results);
			}
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],49:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);

	var Itinerary = _dereq_('./itinerary');
	var Line = _dereq_('./line');
	var Plan = _dereq_('./plan');
	var OSRMv1 = _dereq_('./osrm-v1');

	module.exports = Itinerary.extend({
		options: {
			fitSelectedRoutes: 'smart',
			routeLine: function(route, options) { return new Line(route, options); },
			autoRoute: true,
			routeWhileDragging: false,
			routeDragInterval: 500,
			waypointMode: 'connect',
			showAlternatives: false,
			defaultErrorHandler: function(e) {
				console.error('Routing error:', e.error);
			}
		},

		initialize: function(options) {
			L.Util.setOptions(this, options);

			this._router = this.options.router || new OSRMv1(options);
			this._plan = this.options.plan || new Plan(this.options.waypoints, options);
			this._requestCount = 0;

			Itinerary.prototype.initialize.call(this, options);

			this.on('routeselected', this._routeSelected, this);
			if (this.options.defaultErrorHandler) {
				this.on('routingerror', this.options.defaultErrorHandler);
			}
			this._plan.on('waypointschanged', this._onWaypointsChanged, this);
			if (options.routeWhileDragging) {
				this._setupRouteDragging();
			}
		},

		_onZoomEnd: function() {
			if (!this._selectedRoute ||
				!this._router.requiresMoreDetail) {
				return;
			}

			var map = this._map;
			if (this._router.requiresMoreDetail(this._selectedRoute,
					map.getZoom(), map.getBounds())) {
				this.route({
					callback: L.bind(function(err, routes) {
						var i;
						if (!err) {
							for (i = 0; i < routes.length; i++) {
								this._routes[i].properties = routes[i].properties;
							}
							this._updateLineCallback(err, routes);
						}

					}, this),
					simplifyGeometry: false,
					geometryOnly: true
				});
			}
		},

		onAdd: function(map) {
			if (this.options.autoRoute) {
				this.route();
			}

			var container = Itinerary.prototype.onAdd.call(this, map);

			this._map = map;
			this._map.addLayer(this._plan);

			this._map.on('zoomend', this._onZoomEnd, this);

			if (this._plan.options.geocoder) {
				container.insertBefore(this._plan.createGeocoders(), container.firstChild);
			}

			return container;
		},

		onRemove: function(map) {
			map.off('zoomend', this._onZoomEnd, this);
			if (this._line) {
				map.removeLayer(this._line);
			}
			map.removeLayer(this._plan);
			if (this._alternatives && this._alternatives.length > 0) {
				for (var i = 0, len = this._alternatives.length; i < len; i++) {
					map.removeLayer(this._alternatives[i]);
				}
			}
			return Itinerary.prototype.onRemove.call(this, map);
		},

		getWaypoints: function() {
			return this._plan.getWaypoints();
		},

		setWaypoints: function(waypoints) {
			this._plan.setWaypoints(waypoints);
			return this;
		},

		spliceWaypoints: function() {
			var removed = this._plan.spliceWaypoints.apply(this._plan, arguments);
			return removed;
		},

		getPlan: function() {
			return this._plan;
		},

		getRouter: function() {
			return this._router;
		},

		_routeSelected: function(e) {
			var route = this._selectedRoute = e.route,
				alternatives = this.options.showAlternatives && e.alternatives,
				fitMode = this.options.fitSelectedRoutes,
				fitBounds =
					(fitMode === 'smart' && !this._waypointsVisible()) ||
					(fitMode !== 'smart' && fitMode);

			this._updateLines({route: route, alternatives: alternatives});

			if (fitBounds) {
				this._map.fitBounds(this._line.getBounds());
			}

			if (this.options.waypointMode === 'snap') {
				this._plan.off('waypointschanged', this._onWaypointsChanged, this);
				this.setWaypoints(route.waypoints);
				this._plan.on('waypointschanged', this._onWaypointsChanged, this);
			}
		},

		_waypointsVisible: function() {
			var wps = this.getWaypoints(),
				mapSize,
				bounds,
				boundsSize,
				i,
				p;

			try {
				mapSize = this._map.getSize();

				for (i = 0; i < wps.length; i++) {
					p = this._map.latLngToLayerPoint(wps[i].latLng);

					if (bounds) {
						bounds.extend(p);
					} else {
						bounds = L.bounds([p]);
					}
				}

				boundsSize = bounds.getSize();
				return (boundsSize.x > mapSize.x / 5 ||
					boundsSize.y > mapSize.y / 5) && this._waypointsInViewport();

			} catch (e) {
				return false;
			}
		},

		_waypointsInViewport: function() {
			var wps = this.getWaypoints(),
				mapBounds,
				i;

			try {
				mapBounds = this._map.getBounds();
			} catch (e) {
				return false;
			}

			for (i = 0; i < wps.length; i++) {
				if (mapBounds.contains(wps[i].latLng)) {
					return true;
				}
			}

			return false;
		},

		_updateLines: function(routes) {
			var addWaypoints = this.options.addWaypoints !== undefined ?
				this.options.addWaypoints : true;
			this._clearLines();

			// add alternatives first so they lie below the main route
			this._alternatives = [];
			if (routes.alternatives) routes.alternatives.forEach(function(alt, i) {
				this._alternatives[i] = this.options.routeLine(alt,
					L.extend({
						isAlternative: true
					}, this.options.altLineOptions || this.options.lineOptions));
				this._alternatives[i].addTo(this._map);
				this._hookAltEvents(this._alternatives[i]);
			}, this);

			this._line = this.options.routeLine(routes.route,
				L.extend({
					addWaypoints: addWaypoints,
					extendToWaypoints: this.options.waypointMode === 'connect'
				}, this.options.lineOptions));
			this._line.addTo(this._map);
			this._hookEvents(this._line);
		},

		_hookEvents: function(l) {
			l.on('linetouched', function(e) {
				this._plan.dragNewWaypoint(e);
			}, this);
		},

		_hookAltEvents: function(l) {
			l.on('linetouched', function(e) {
				var alts = this._routes.slice();
				var selected = alts.splice(e.target._route.routesIndex, 1)[0];
				this.fire('routeselected', {route: selected, alternatives: alts});
			}, this);
		},

		_onWaypointsChanged: function(e) {
			if (this.options.autoRoute) {
				this.route({});
			}
			if (!this._plan.isReady()) {
				this._clearLines();
				this._clearAlts();
			}
			this.fire('waypointschanged', {waypoints: e.waypoints});
		},

		_setupRouteDragging: function() {
			var timer = 0,
				waypoints;

			this._plan.on('waypointdrag', L.bind(function(e) {
				waypoints = e.waypoints;

				if (!timer) {
					timer = setTimeout(L.bind(function() {
						this.route({
							waypoints: waypoints,
							geometryOnly: true,
							callback: L.bind(this._updateLineCallback, this)
						});
						timer = undefined;
					}, this), this.options.routeDragInterval);
				}
			}, this));
			this._plan.on('waypointdragend', function() {
				if (timer) {
					clearTimeout(timer);
					timer = undefined;
				}
				this.route();
			}, this);
		},

		_updateLineCallback: function(err, routes) {
			if (!err) {
				routes = routes.slice();
				var selected = routes.splice(this._selectedRoute.routesIndex, 1)[0];
				this._updateLines({
					route: selected,
					alternatives: this.options.showAlternatives ? routes : []
				});
			} else if (err.type !== 'abort') {
				this._clearLines();
			}
		},

		route: function(options) {
			var ts = ++this._requestCount,
				wps;

			if (this._pendingRequest && this._pendingRequest.abort) {
				this._pendingRequest.abort();
				this._pendingRequest = null;
			}

			options = options || {};

			if (this._plan.isReady()) {
				if (this.options.useZoomParameter) {
					options.z = this._map && this._map.getZoom();
				}

				wps = options && options.waypoints || this._plan.getWaypoints();
				this.fire('routingstart', {waypoints: wps});
				this._pendingRequest = this._router.route(wps, function(err, routes) {
					this._pendingRequest = null;

					if (options.callback) {
						return options.callback.call(this, err, routes);
					}

					// Prevent race among multiple requests,
					// by checking the current request's count
					// against the last request's; ignore result if
					// this isn't the last request.
					if (ts === this._requestCount) {
						this._clearLines();
						this._clearAlts();
						if (err && err.type !== 'abort') {
							this.fire('routingerror', {error: err});
							return;
						}

						routes.forEach(function(route, i) { route.routesIndex = i; });

						if (!options.geometryOnly) {
							this.fire('routesfound', {waypoints: wps, routes: routes});
							this.setAlternatives(routes);
						} else {
							var selectedRoute = routes.splice(0,1)[0];
							this._routeSelected({route: selectedRoute, alternatives: routes});
						}
					}
				}, this, options);
			}
		},

		_clearLines: function() {
			if (this._line) {
				this._map.removeLayer(this._line);
				delete this._line;
			}
			if (this._alternatives && this._alternatives.length) {
				for (var i in this._alternatives) {
					this._map.removeLayer(this._alternatives[i]);
				}
				this._alternatives = [];
			}
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./itinerary":55,"./line":56,"./osrm-v1":59,"./plan":60}],50:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);

	module.exports = L.Control.extend({
		options: {
			header: 'Routing error',
			formatMessage: function(error) {
				if (error.status < 0) {
					return 'Calculating the route caused an error. Technical description follows: <code><pre>' +
						error.message + '</pre></code';
				} else {
					return 'The route could not be calculated. ' +
						error.message;
				}
			}
		},

		initialize: function(routingControl, options) {
			L.Control.prototype.initialize.call(this, options);
			routingControl
				.on('routingerror', L.bind(function(e) {
					if (this._element) {
						this._element.children[1].innerHTML = this.options.formatMessage(e.error);
						this._element.style.visibility = 'visible';
					}
				}, this))
				.on('routingstart', L.bind(function() {
					if (this._element) {
						this._element.style.visibility = 'hidden';
					}
				}, this));
		},

		onAdd: function() {
			var header,
				message;

			this._element = L.DomUtil.create('div', 'leaflet-bar leaflet-routing-error');
			this._element.style.visibility = 'hidden';

			header = L.DomUtil.create('h3', null, this._element);
			message = L.DomUtil.create('span', null, this._element);

			header.innerHTML = this.options.header;

			return this._element;
		},

		onRemove: function() {
			delete this._element;
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],51:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);

	var Localization = _dereq_('./localization');

	module.exports = L.Class.extend({
		options: {
			units: 'metric',
			unitNames: null,
			language: 'en',
			roundingSensitivity: 1,
			distanceTemplate: '{value} {unit}'
		},

		initialize: function(options) {
			L.setOptions(this, options);

			var langs = L.Util.isArray(this.options.language) ?
				this.options.language :
				[this.options.language, 'en'];
			this._localization = new Localization(langs);
		},

		formatDistance: function(d /* Number (meters) */, sensitivity) {
			var un = this.options.unitNames || this._localization.localize('units'),
				simpleRounding = sensitivity <= 0,
				round = simpleRounding ? function(v) { return v; } : L.bind(this._round, this),
			    v,
			    yards,
				data,
				pow10;

			if (this.options.units === 'imperial') {
				yards = d / 0.9144;
				if (yards >= 1000) {
					data = {
						value: round(d / 1609.344, sensitivity),
						unit: un.miles
					};
				} else {
					data = {
						value: round(yards, sensitivity),
						unit: un.yards
					};
				}
			} else {
				v = round(d, sensitivity);
				data = {
					value: v >= 1000 ? (v / 1000) : v,
					unit: v >= 1000 ? un.kilometers : un.meters
				};
			}

			if (simpleRounding) {
				data.value = data.value.toFixed(-sensitivity);
			}

			return L.Util.template(this.options.distanceTemplate, data);
		},

		_round: function(d, sensitivity) {
			var s = sensitivity || this.options.roundingSensitivity,
				pow10 = Math.pow(10, (Math.floor(d / s) + '').length - 1),
				r = Math.floor(d / pow10),
				p = (r > 5) ? pow10 : pow10 / 2;

			return Math.round(d / p) * p;
		},

		formatTime: function(t /* Number (seconds) */) {
			var un = this.options.unitNames || this._localization.localize('units');
			// More than 30 seconds precision looks ridiculous
			t = Math.round(t / 30) * 30;

			if (t > 86400) {
				return Math.round(t / 3600) + ' ' + un.hours;
			} else if (t > 3600) {
				return Math.floor(t / 3600) + ' ' + un.hours + ' ' +
					Math.round((t % 3600) / 60) + ' ' + un.minutes;
			} else if (t > 300) {
				return Math.round(t / 60) + ' ' + un.minutes;
			} else if (t > 60) {
				return Math.floor(t / 60) + ' ' + un.minutes +
					(t % 60 !== 0 ? ' ' + (t % 60) + ' ' + un.seconds : '');
			} else {
				return t + ' ' + un.seconds;
			}
		},

		formatInstruction: function(instr, i) {
			if (instr.text === undefined) {
				return this.capitalize(L.Util.template(this._getInstructionTemplate(instr, i),
					L.extend({}, instr, {
						exitStr: instr.exit ? this._localization.localize('formatOrder')(instr.exit) : '',
						dir: this._localization.localize(['directions', instr.direction]),
						modifier: this._localization.localize(['directions', instr.modifier])
					})));
			} else {
				return instr.text;
			}
		},

		getIconName: function(instr, i) {
			switch (instr.type) {
			case 'Head':
				if (i === 0) {
					return 'depart';
				}
				break;
			case 'WaypointReached':
				return 'via';
			case 'Roundabout':
				return 'enter-roundabout';
			case 'DestinationReached':
				return 'arrive';
			}

			switch (instr.modifier) {
			case 'Straight':
				return 'continue';
			case 'SlightRight':
				return 'bear-right';
			case 'Right':
				return 'turn-right';
			case 'SharpRight':
				return 'sharp-right';
			case 'TurnAround':
			case 'Uturn':
				return 'u-turn';
			case 'SharpLeft':
				return 'sharp-left';
			case 'Left':
				return 'turn-left';
			case 'SlightLeft':
				return 'bear-left';
			}
		},

		capitalize: function(s) {
			return s.charAt(0).toUpperCase() + s.substring(1);
		},

		_getInstructionTemplate: function(instr, i) {
			var type = instr.type === 'Straight' ? (i === 0 ? 'Head' : 'Continue') : instr.type,
				strings = this._localization.localize(['instructions', type]);

			if (!strings) {
				strings = [
					this._localization.localize(['directions', type]),
					' ' + this._localization.localize(['instructions', 'Onto'])
				];
			}

			return strings[0] + (strings.length > 1 && instr.road ? strings[1] : '');
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./localization":57}],52:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);
	var Autocomplete = _dereq_('./autocomplete');
	var Localization = _dereq_('./localization');

	function selectInputText(input) {
		if (input.setSelectionRange) {
			// On iOS, select() doesn't work
			input.setSelectionRange(0, 9999);
		} else {
			// On at least IE8, setSeleectionRange doesn't exist
			input.select();
		}
	}

	module.exports = L.Class.extend({
		includes: ((typeof L.Evented !== 'undefined' && L.Evented.prototype) || L.Mixin.Events),

		options: {
			createGeocoder: function(i, nWps, options) {
				var container = L.DomUtil.create('div', 'leaflet-routing-geocoder'),
					input = L.DomUtil.create('input', '', container),
					remove = options.addWaypoints ? L.DomUtil.create('span', 'leaflet-routing-remove-waypoint', container) : undefined;

				input.disabled = !options.addWaypoints;

				return {
					container: container,
					input: input,
					closeButton: remove
				};
			},
			geocoderPlaceholder: function(i, numberWaypoints, geocoderElement) {
				var l = new Localization(geocoderElement.options.language).localize('ui');
				return i === 0 ?
					l.startPlaceholder :
					(i < numberWaypoints - 1 ?
						L.Util.template(l.viaPlaceholder, {viaNumber: i}) :
						l.endPlaceholder);
			},

			geocoderClass: function() {
				return '';
			},

			waypointNameFallback: function(latLng) {
				var ns = latLng.lat < 0 ? 'S' : 'N',
					ew = latLng.lng < 0 ? 'W' : 'E',
					lat = (Math.round(Math.abs(latLng.lat) * 10000) / 10000).toString(),
					lng = (Math.round(Math.abs(latLng.lng) * 10000) / 10000).toString();
				return ns + lat + ', ' + ew + lng;
			},
			maxGeocoderTolerance: 200,
			autocompleteOptions: {},
			language: 'en',
		},

		initialize: function(wp, i, nWps, options) {
			L.setOptions(this, options);

			var g = this.options.createGeocoder(i, nWps, this.options),
				closeButton = g.closeButton,
				geocoderInput = g.input;
			geocoderInput.setAttribute('placeholder', this.options.geocoderPlaceholder(i, nWps, this));
			geocoderInput.className = this.options.geocoderClass(i, nWps);

			this._element = g;
			this._waypoint = wp;

			this.update();
			// This has to be here, or geocoder's value will not be properly
			// initialized.
			// TODO: look into why and make _updateWaypointName fix this.
			geocoderInput.value = wp.name;

			L.DomEvent.addListener(geocoderInput, 'click', function() {
				selectInputText(this);
			}, geocoderInput);

			if (closeButton) {
				L.DomEvent.addListener(closeButton, 'click', function() {
					this.fire('delete', { waypoint: this._waypoint });
				}, this);
			}

			new Autocomplete(geocoderInput, function(r) {
					geocoderInput.value = r.name;
					wp.name = r.name;
					wp.latLng = r.center;
					this.fire('geocoded', { waypoint: wp, value: r });
				}, this, L.extend({
					resultFn: this.options.geocoder.geocode,
					resultContext: this.options.geocoder,
					autocompleteFn: this.options.geocoder.suggest,
					autocompleteContext: this.options.geocoder
				}, this.options.autocompleteOptions));
		},

		getContainer: function() {
			return this._element.container;
		},

		setValue: function(v) {
			this._element.input.value = v;
		},

		update: function(force) {
			var wp = this._waypoint,
				wpCoords;

			wp.name = wp.name || '';

			if (wp.latLng && (force || !wp.name)) {
				wpCoords = this.options.waypointNameFallback(wp.latLng);
				if (this.options.geocoder && this.options.geocoder.reverse) {
					this.options.geocoder.reverse(wp.latLng, 67108864 /* zoom 18 */, function(rs) {
						if (rs.length > 0 && rs[0].center.distanceTo(wp.latLng) < this.options.maxGeocoderTolerance) {
							wp.name = rs[0].name;
						} else {
							wp.name = wpCoords;
						}
						this._update();
					}, this);
				} else {
					wp.name = wpCoords;
					this._update();
				}
			}
		},

		focus: function() {
			var input = this._element.input;
			input.focus();
			selectInputText(input);
		},

		_update: function() {
			var wp = this._waypoint,
			    value = wp && wp.name ? wp.name : '';
			this.setValue(value);
			this.fire('reversegeocoded', {waypoint: wp, value: value});
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./autocomplete":48,"./localization":57}],53:[function(_dereq_,module,exports){
(function (global){
var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null),
    Control = _dereq_('./control'),
    Itinerary = _dereq_('./itinerary'),
    Line = _dereq_('./line'),
    OSRMv1 = _dereq_('./osrm-v1'),
    Plan = _dereq_('./plan'),
    Waypoint = _dereq_('./waypoint'),
    Autocomplete = _dereq_('./autocomplete'),
    Formatter = _dereq_('./formatter'),
    GeocoderElement = _dereq_('./geocoder-element'),
    Localization = _dereq_('./localization'),
    ItineraryBuilder = _dereq_('./itinerary-builder'),
    Mapbox = _dereq_('./mapbox'),
    ErrorControl = _dereq_('./error-control');

L.routing = {
    control: function(options) { return new Control(options); },
    itinerary: function(options) {
        return Itinerary(options);
    },
    line: function(route, options) {
        return new Line(route, options);
    },
    plan: function(waypoints, options) {
        return new Plan(waypoints, options);
    },
    waypoint: function(latLng, name, options) {
        return new Waypoint(latLng, name, options);
    },
    osrmv1: function(options) {
        return new OSRMv1(options);
    },
    localization: function(options) {
        return new Localization(options);
    },
    formatter: function(options) {
        return new Formatter(options);
    },
    geocoderElement: function(wp, i, nWps, plan) {
        return new L.Routing.GeocoderElement(wp, i, nWps, plan);
    },
    itineraryBuilder: function(options) {
        return new ItineraryBuilder(options);
    },
    mapbox: function(accessToken, options) {
        return new Mapbox(accessToken, options);
    },
    errorControl: function(routingControl, options) {
        return new ErrorControl(routingControl, options);
    },
    autocomplete: function(elem, callback, context, options) {
        return new Autocomplete(elem, callback, context, options);
    }
};

module.exports = L.Routing = {
    Control: Control,
    Itinerary: Itinerary,
    Line: Line,
    OSRMv1: OSRMv1,
    Plan: Plan,
    Waypoint: Waypoint,
    Autocomplete: Autocomplete,
    Formatter: Formatter,
    GeocoderElement: GeocoderElement,
    Localization: Localization,
    Formatter: Formatter,
    ItineraryBuilder: ItineraryBuilder,

    // Legacy; remove these in next major release
    control: L.routing.control,
    itinerary: L.routing.itinerary,
    line: L.routing.line,
    plan: L.routing.plan,
    waypoint: L.routing.waypoint,
    osrmv1: L.routing.osrmv1,
    geocoderElement: L.routing.geocoderElement,
    mapbox: L.routing.mapbox,
    errorControl: L.routing.errorControl,
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./autocomplete":48,"./control":49,"./error-control":50,"./formatter":51,"./geocoder-element":52,"./itinerary":55,"./itinerary-builder":54,"./line":56,"./localization":57,"./mapbox":58,"./osrm-v1":59,"./plan":60,"./waypoint":61}],54:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);

	module.exports = L.Class.extend({
		options: {
			containerClassName: ''
		},

		initialize: function(options) {
			L.setOptions(this, options);
		},

		createContainer: function(className) {
			var table = L.DomUtil.create('table', (className || '') + ' ' + this.options.containerClassName),
				colgroup = L.DomUtil.create('colgroup', '', table);

			L.DomUtil.create('col', 'leaflet-routing-instruction-icon', colgroup);
			L.DomUtil.create('col', 'leaflet-routing-instruction-text', colgroup);
			L.DomUtil.create('col', 'leaflet-routing-instruction-distance', colgroup);

			return table;
		},

		createStepsContainer: function() {
			return L.DomUtil.create('tbody', '');
		},

		createStep: function(text, distance, icon, steps) {
			var row = L.DomUtil.create('tr', '', steps),
				span,
				td;
			td = L.DomUtil.create('td', '', row);
			span = L.DomUtil.create('span', 'leaflet-routing-icon leaflet-routing-icon-'+icon, td);
			td.appendChild(span);
			td = L.DomUtil.create('td', '', row);
			td.appendChild(document.createTextNode(text));
			td = L.DomUtil.create('td', '', row);
			td.appendChild(document.createTextNode(distance));
			return row;
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],55:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);
	var Formatter = _dereq_('./formatter');
	var ItineraryBuilder = _dereq_('./itinerary-builder');

	module.exports = L.Control.extend({
		includes: ((typeof L.Evented !== 'undefined' && L.Evented.prototype) || L.Mixin.Events),

		options: {
			pointMarkerStyle: {
				radius: 5,
				color: '#03f',
				fillColor: 'white',
				opacity: 1,
				fillOpacity: 0.7
			},
			summaryTemplate: '<h2>{name}</h2><h3>{distance}, {time}</h3>',
			timeTemplate: '{time}',
			containerClassName: '',
			alternativeClassName: '',
			minimizedClassName: '',
			itineraryClassName: '',
			totalDistanceRoundingSensitivity: -1,
			show: true,
			collapsible: undefined,
			collapseBtn: function(itinerary) {
				var collapseBtn = L.DomUtil.create('span', itinerary.options.collapseBtnClass);
				L.DomEvent.on(collapseBtn, 'click', itinerary._toggle, itinerary);
				itinerary._container.insertBefore(collapseBtn, itinerary._container.firstChild);
			},
			collapseBtnClass: 'leaflet-routing-collapse-btn'
		},

		initialize: function(options) {
			L.setOptions(this, options);
			this._formatter = this.options.formatter || new Formatter(this.options);
			this._itineraryBuilder = this.options.itineraryBuilder || new ItineraryBuilder({
				containerClassName: this.options.itineraryClassName
			});
		},

		onAdd: function(map) {
			var collapsible = this.options.collapsible;

			collapsible = collapsible || (collapsible === undefined && map.getSize().x <= 640);
            console.log(`collapsible: ${collapsible}`);

			this._container = L.DomUtil.create('div', 'leaflet-routing-container leaflet-bar ' +
				(!this.options.show ? 'leaflet-routing-container-hide ' : '') +
				(collapsible ? 'leaflet-routing-collapsible ' : '') +
				this.options.containerClassName);
			this._altContainer = this.createAlternativesContainer();
			this._container.appendChild(this._altContainer);
			L.DomEvent.disableClickPropagation(this._container);
			L.DomEvent.addListener(this._container, 'mousewheel', function(e) {
				L.DomEvent.stopPropagation(e);
			});

			if (collapsible) {
				this.options.collapseBtn(this);
			}

			return this._container;
		},

		onRemove: function() {
		},

		createAlternativesContainer: function() {
			return L.DomUtil.create('div', 'leaflet-routing-alternatives-container');
		},

		setAlternatives: function(routes) {
			var i,
			    alt,
			    altDiv;

			this._clearAlts();

			this._routes = routes;

			for (i = 0; i < this._routes.length; i++) {
				alt = this._routes[i];
				altDiv = this._createAlternative(alt, i);
				this._altContainer.appendChild(altDiv);
				this._altElements.push(altDiv);
			}

			this._selectRoute({route: this._routes[0], alternatives: this._routes.slice(1)});

			return this;
		},

		show: function() {
			L.DomUtil.removeClass(this._container, 'leaflet-routing-container-hide');
		},

		hide: function() {
			L.DomUtil.addClass(this._container, 'leaflet-routing-container-hide');
		},

		_toggle: function() {
			var collapsed = L.DomUtil.hasClass(this._container, 'leaflet-routing-container-hide');
			this[collapsed ? 'show' : 'hide']();
		},

		_createAlternative: function(alt, i) {
			var altDiv = L.DomUtil.create('div', 'leaflet-routing-alt ' +
				this.options.alternativeClassName +
				(i > 0 ? ' leaflet-routing-alt-minimized ' + this.options.minimizedClassName : '')),
				template = this.options.summaryTemplate,
				data = L.extend({
					name: alt.name,
					distance: this._formatter.formatDistance(alt.summary.totalDistance, this.options.totalDistanceRoundingSensitivity),
					time: this._formatter.formatTime(alt.summary.totalTime)
				}, alt);
			altDiv.innerHTML = typeof(template) === 'function' ? template(data) : L.Util.template(template, data);
			L.DomEvent.addListener(altDiv, 'click', this._onAltClicked, this);
			this.on('routeselected', this._selectAlt, this);

			altDiv.appendChild(this._createItineraryContainer(alt));
			return altDiv;
		},

		_clearAlts: function() {
			var el = this._altContainer;
			while (el && el.firstChild) {
				el.removeChild(el.firstChild);
			}

			this._altElements = [];
		},

		_createItineraryContainer: function(r) {
			var container = this._itineraryBuilder.createContainer(),
			    steps = this._itineraryBuilder.createStepsContainer(),
			    i,
			    instr,
			    step,
			    distance,
			    text,
			    icon;

			container.appendChild(steps);

			for (i = 0; i < r.instructions.length; i++) {
				instr = r.instructions[i];
				text = this._formatter.formatInstruction(instr, i);
				distance = this._formatter.formatDistance(instr.distance);
				icon = this._formatter.getIconName(instr, i);
				step = this._itineraryBuilder.createStep(text, distance, icon, steps);

				if(instr.index) {
					this._addRowListeners(step, r.coordinates[instr.index]);
				}
			}

			return container;
		},

		_addRowListeners: function(row, coordinate) {
			L.DomEvent.addListener(row, 'mouseover', function() {
				this._marker = L.circleMarker(coordinate,
					this.options.pointMarkerStyle).addTo(this._map);
			}, this);
			L.DomEvent.addListener(row, 'mouseout', function() {
				if (this._marker) {
					this._map.removeLayer(this._marker);
					delete this._marker;
				}
			}, this);
			L.DomEvent.addListener(row, 'click', function(e) {
				this._map.panTo(coordinate);
				L.DomEvent.stopPropagation(e);
			}, this);
		},

		_onAltClicked: function(e) {
			var altElem = e.target || window.event.srcElement;
			while (!L.DomUtil.hasClass(altElem, 'leaflet-routing-alt')) {
				altElem = altElem.parentElement;
			}

			var j = this._altElements.indexOf(altElem);
			var alts = this._routes.slice();
			var route = alts.splice(j, 1)[0];

			this.fire('routeselected', {
				route: route,
				alternatives: alts
			});
		},

		_selectAlt: function(e) {
			var altElem,
			    j,
			    n,
			    classFn;

			altElem = this._altElements[e.route.routesIndex];

			if (L.DomUtil.hasClass(altElem, 'leaflet-routing-alt-minimized')) {
				for (j = 0; j < this._altElements.length; j++) {
					n = this._altElements[j];
					classFn = j === e.route.routesIndex ? 'removeClass' : 'addClass';
					L.DomUtil[classFn](n, 'leaflet-routing-alt-minimized');
					if (this.options.minimizedClassName) {
						L.DomUtil[classFn](n, this.options.minimizedClassName);
					}

					if (j !== e.route.routesIndex) n.scrollTop = 0;
				}
			}

			L.DomEvent.stop(e);
		},

		_selectRoute: function(routes) {
			if (this._marker) {
				this._map.removeLayer(this._marker);
				delete this._marker;
			}
			this.fire('routeselected', routes);
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./formatter":51,"./itinerary-builder":54}],56:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);

	module.exports = L.LayerGroup.extend({
		includes: ((typeof L.Evented !== 'undefined' && L.Evented.prototype) || L.Mixin.Events),

		options: {
			styles: [
				{color: 'black', opacity: 0.15, weight: 9},
				{color: 'white', opacity: 0.8, weight: 6},
				{color: 'red', opacity: 1, weight: 2}
			],
			missingRouteStyles: [
				{color: 'black', opacity: 0.15, weight: 7},
				{color: 'white', opacity: 0.6, weight: 4},
				{color: 'gray', opacity: 0.8, weight: 2, dashArray: '7,12'}
			],
			addWaypoints: true,
			extendToWaypoints: true,
			missingRouteTolerance: 10
		},

		initialize: function(route, options) {
			L.setOptions(this, options);
			L.LayerGroup.prototype.initialize.call(this, options);
			this._route = route;

			if (this.options.extendToWaypoints) {
				this._extendToWaypoints();
			}

			this._addSegment(
				route.coordinates,
				this.options.styles,
				this.options.addWaypoints);
		},

		getBounds: function() {
			return L.latLngBounds(this._route.coordinates);
		},

		_findWaypointIndices: function() {
			var wps = this._route.inputWaypoints,
			    indices = [],
			    i;
			for (i = 0; i < wps.length; i++) {
				indices.push(this._findClosestRoutePoint(wps[i].latLng));
			}

			return indices;
		},

		_findClosestRoutePoint: function(latlng) {
			var minDist = Number.MAX_VALUE,
				minIndex,
			    i,
			    d;

			for (i = this._route.coordinates.length - 1; i >= 0 ; i--) {
				// TODO: maybe do this in pixel space instead?
				d = latlng.distanceTo(this._route.coordinates[i]);
				if (d < minDist) {
					minIndex = i;
					minDist = d;
				}
			}

			return minIndex;
		},

		_extendToWaypoints: function() {
			var wps = this._route.inputWaypoints,
				wpIndices = this._getWaypointIndices(),
			    i,
			    wpLatLng,
			    routeCoord;

			for (i = 0; i < wps.length; i++) {
				wpLatLng = wps[i].latLng;
				routeCoord = L.latLng(this._route.coordinates[wpIndices[i]]);
				if (wpLatLng.distanceTo(routeCoord) >
					this.options.missingRouteTolerance) {
					this._addSegment([wpLatLng, routeCoord],
						this.options.missingRouteStyles);
				}
			}
		},

		_addSegment: function(coords, styles, mouselistener) {
			var i,
				pl;

			for (i = 0; i < styles.length; i++) {
				pl = L.polyline(coords, styles[i]);
				this.addLayer(pl);
				if (mouselistener) {
					pl.on('mousedown', this._onLineTouched, this);
				}
			}
		},

		_findNearestWpBefore: function(i) {
			var wpIndices = this._getWaypointIndices(),
				j = wpIndices.length - 1;
			while (j >= 0 && wpIndices[j] > i) {
				j--;
			}

			return j;
		},

		_onLineTouched: function(e) {
			var afterIndex = this._findNearestWpBefore(this._findClosestRoutePoint(e.latlng));
			this.fire('linetouched', {
				afterIndex: afterIndex,
				latlng: e.latlng
			});
			L.DomEvent.stop(e);
		},

		_getWaypointIndices: function() {
			if (!this._wpIndices) {
				this._wpIndices = this._route.waypointIndices || this._findWaypointIndices();
			}

			return this._wpIndices;
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],57:[function(_dereq_,module,exports){
/* 
   NOTICE
   Since version 3.2.5, the functionality in this file is by
   default NOT used for localizing OSRM instructions.
   Instead, we rely on the module osrm-text-instructions (https://github.com/Project-OSRM/osrm-text-instructions/).
   
   This file can still be used for other routing backends, or if you specify the
   stepToText option in the OSRMv1 class.
*/

(function() {
	'use strict';

	var spanish = {
		directions: {
			N: 'norte',
			NE: 'noreste',
			E: 'este',
			SE: 'sureste',
			S: 'sur',
			SW: 'suroeste',
			W: 'oeste',
			NW: 'noroeste',
			SlightRight: 'leve giro a la derecha',
			Right: 'derecha',
			SharpRight: 'giro pronunciado a la derecha',
			SlightLeft: 'leve giro a la izquierda',
			Left: 'izquierda',
			SharpLeft: 'giro pronunciado a la izquierda',
			Uturn: 'media vuelta'
		},
		instructions: {
			// instruction, postfix if the road is named
			'Head':
				['Derecho {dir}', ' sobre {road}'],
			'Continue':
				['Continuar {dir}', ' en {road}'],
			'TurnAround':
				['Dar vuelta'],
			'WaypointReached':
				['Llegó a un punto del camino'],
			'Roundabout':
				['Tomar {exitStr} salida en la rotonda', ' en {road}'],
			'DestinationReached':
				['Llegada a destino'],
			'Fork': ['En el cruce gira a {modifier}', ' hacia {road}'],
			'Merge': ['Incorpórate {modifier}', ' hacia {road}'],
			'OnRamp': ['Gira {modifier} en la salida', ' hacia {road}'],
			'OffRamp': ['Toma la salida {modifier}', ' hacia {road}'],
			'EndOfRoad': ['Gira {modifier} al final de la carretera', ' hacia {road}'],
			'Onto': 'hacia {road}'
		},
		formatOrder: function(n) {
			return n + 'º';
		},
		ui: {
			startPlaceholder: 'Inicio',
			viaPlaceholder: 'Via {viaNumber}',
			endPlaceholder: 'Destino'
		},
		units: {
			meters: 'm',
			kilometers: 'km',
			yards: 'yd',
			miles: 'mi',
			hours: 'h',
			minutes: 'min',
			seconds: 's'
		}
	};

	L.Routing = L.Routing || {};

	var Localization = L.Class.extend({
		initialize: function(langs) {
			this._langs = L.Util.isArray(langs) ? langs.slice() : [langs, 'en'];

			for (var i = 0, l = this._langs.length; i < l; i++) {
				var generalizedCode = /([A-Za-z]+)/.exec(this._langs[i])[1]
				if (!Localization[this._langs[i]]) {
					if (Localization[generalizedCode]) {
						this._langs[i] = generalizedCode;
					} else {
						throw new Error('No localization for language "' + this._langs[i] + '".');
					}
				}
			}
		},

		localize: function(keys) {
			var dict,
				key,
				value;

			keys = L.Util.isArray(keys) ? keys : [keys];

			for (var i = 0, l = this._langs.length; i < l; i++) {
				dict = Localization[this._langs[i]];
				for (var j = 0, nKeys = keys.length; dict && j < nKeys; j++) {
					key = keys[j];
					value = dict[key];
					dict = value;
				}

				if (value) {
					return value;
				}
			}
		}
	});

	module.exports = L.extend(Localization, {
		'en': {
			directions: {
				N: 'north',
				NE: 'northeast',
				E: 'east',
				SE: 'southeast',
				S: 'south',
				SW: 'southwest',
				W: 'west',
				NW: 'northwest',
				SlightRight: 'slight right',
				Right: 'right',
				SharpRight: 'sharp right',
				SlightLeft: 'slight left',
				Left: 'left',
				SharpLeft: 'sharp left',
				Uturn: 'Turn around'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Head {dir}', ' on {road}'],
				'Continue':
					['Continue {dir}'],
				'TurnAround':
					['Turn around'],
				'WaypointReached':
					['Waypoint reached'],
				'Roundabout':
					['Take the {exitStr} exit in the roundabout', ' onto {road}'],
				'DestinationReached':
					['Destination reached'],
				'Fork': ['At the fork, turn {modifier}', ' onto {road}'],
				'Merge': ['Merge {modifier}', ' onto {road}'],
				'OnRamp': ['Turn {modifier} on the ramp', ' onto {road}'],
				'OffRamp': ['Take the ramp on the {modifier}', ' onto {road}'],
				'EndOfRoad': ['Turn {modifier} at the end of the road', ' onto {road}'],
				'Onto': 'onto {road}'
			},
			formatOrder: function(n) {
				var i = n % 10 - 1,
				suffix = ['st', 'nd', 'rd'];

				return suffix[i] ? n + suffix[i] : n + 'th';
			},
			ui: {
				startPlaceholder: 'Start',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'End'
			},
			units: {
				meters: 'm',
				kilometers: 'km',
				yards: 'yd',
				miles: 'mi',
				hours: 'h',
				minutes: 'min',
				seconds: 's'
			}
		},

		'de': {
			directions: {
				N: 'Norden',
				NE: 'Nordosten',
				E: 'Osten',
				SE: 'Südosten',
				S: 'Süden',
				SW: 'Südwesten',
				W: 'Westen',
				NW: 'Nordwesten',
				SlightRight: 'leicht rechts',
				Right: 'rechts',
				SharpRight: 'scharf rechts',
				SlightLeft: 'leicht links',
				Left: 'links',
				SharpLeft: 'scharf links',
				Uturn: 'Wenden'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Richtung {dir}', ' auf {road}'],
				'Continue':
					['Geradeaus Richtung {dir}', ' auf {road}'],
				'SlightRight':
					['Leicht rechts abbiegen', ' auf {road}'],
				'Right':
					['Rechts abbiegen', ' auf {road}'],
				'SharpRight':
					['Scharf rechts abbiegen', ' auf {road}'],
				'TurnAround':
					['Wenden'],
				'SharpLeft':
					['Scharf links abbiegen', ' auf {road}'],
				'Left':
					['Links abbiegen', ' auf {road}'],
				'SlightLeft':
					['Leicht links abbiegen', ' auf {road}'],
				'WaypointReached':
					['Zwischenhalt erreicht'],
				'Roundabout':
					['Nehmen Sie die {exitStr} Ausfahrt im Kreisverkehr', ' auf {road}'],
				'DestinationReached':
					['Sie haben ihr Ziel erreicht'],
				'Fork': ['An der Kreuzung {modifier}', ' auf {road}'],
				'Merge': ['Fahren Sie {modifier} weiter', ' auf {road}'],
				'OnRamp': ['Fahren Sie {modifier} auf die Auffahrt', ' auf {road}'],
				'OffRamp': ['Nehmen Sie die Ausfahrt {modifier}', ' auf {road}'],
				'EndOfRoad': ['Fahren Sie {modifier} am Ende der Straße', ' auf {road}'],
				'Onto': 'auf {road}'
			},
			formatOrder: function(n) {
				return n + '.';
			},
			ui: {
				startPlaceholder: 'Start',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Ziel'
			}
		},

		'sv': {
			directions: {
				N: 'norr',
				NE: 'nordost',
				E: 'öst',
				SE: 'sydost',
				S: 'syd',
				SW: 'sydväst',
				W: 'väst',
				NW: 'nordväst',
				SlightRight: 'svagt höger',
				Right: 'höger',
				SharpRight: 'skarpt höger',
				SlightLeft: 'svagt vänster',
				Left: 'vänster',
				SharpLeft: 'skarpt vänster',
				Uturn: 'Vänd'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Åk åt {dir}', ' till {road}'],
				'Continue':
					['Fortsätt {dir}'],
				'SlightRight':
					['Svagt höger', ' till {road}'],
				'Right':
					['Sväng höger', ' till {road}'],
				'SharpRight':
					['Skarpt höger', ' till {road}'],
				'TurnAround':
					['Vänd'],
				'SharpLeft':
					['Skarpt vänster', ' till {road}'],
				'Left':
					['Sväng vänster', ' till {road}'],
				'SlightLeft':
					['Svagt vänster', ' till {road}'],
				'WaypointReached':
					['Viapunkt nådd'],
				'Roundabout':
					['Tag {exitStr} avfarten i rondellen', ' till {road}'],
				'DestinationReached':
					['Framme vid resans mål'],
				'Fork': ['Tag av {modifier}', ' till {road}'],
				'Merge': ['Anslut {modifier} ', ' till {road}'],
				'OnRamp': ['Tag påfarten {modifier}', ' till {road}'],
				'OffRamp': ['Tag avfarten {modifier}', ' till {road}'],
				'EndOfRoad': ['Sväng {modifier} vid vägens slut', ' till {road}'],
				'Onto': 'till {road}'
			},
			formatOrder: function(n) {
				return ['första', 'andra', 'tredje', 'fjärde', 'femte',
					'sjätte', 'sjunde', 'åttonde', 'nionde', 'tionde'
					/* Can't possibly be more than ten exits, can there? */][n - 1];
			},
			ui: {
				startPlaceholder: 'Från',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Till'
			}
		},

		'es': spanish,
		'sp': spanish,
		
		'nl': {
			directions: {
				N: 'noordelijke',
				NE: 'noordoostelijke',
				E: 'oostelijke',
				SE: 'zuidoostelijke',
				S: 'zuidelijke',
				SW: 'zuidewestelijke',
				W: 'westelijke',
				NW: 'noordwestelijke'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Vertrek in {dir} richting', ' de {road} op'],
				'Continue':
					['Ga in {dir} richting', ' de {road} op'],
				'SlightRight':
					['Volg de weg naar rechts', ' de {road} op'],
				'Right':
					['Ga rechtsaf', ' de {road} op'],
				'SharpRight':
					['Ga scherpe bocht naar rechts', ' de {road} op'],
				'TurnAround':
					['Keer om'],
				'SharpLeft':
					['Ga scherpe bocht naar links', ' de {road} op'],
				'Left':
					['Ga linksaf', ' de {road} op'],
				'SlightLeft':
					['Volg de weg naar links', ' de {road} op'],
				'WaypointReached':
					['Aangekomen bij tussenpunt'],
				'Roundabout':
					['Neem de {exitStr} afslag op de rotonde', ' de {road} op'],
				'DestinationReached':
					['Aangekomen op eindpunt'],
			},
			formatOrder: function(n) {
				if (n === 1 || n >= 20) {
					return n + 'ste';
				} else {
					return n + 'de';
				}
			},
			ui: {
				startPlaceholder: 'Vertrekpunt',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Bestemming'
			}
		},
		'fr': {
			directions: {
				N: 'nord',
				NE: 'nord-est',
				E: 'est',
				SE: 'sud-est',
				S: 'sud',
				SW: 'sud-ouest',
				W: 'ouest',
				NW: 'nord-ouest'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Tout droit au {dir}', ' sur {road}'],
				'Continue':
					['Continuer au {dir}', ' sur {road}'],
				'SlightRight':
					['Légèrement à droite', ' sur {road}'],
				'Right':
					['A droite', ' sur {road}'],
				'SharpRight':
					['Complètement à droite', ' sur {road}'],
				'TurnAround':
					['Faire demi-tour'],
				'SharpLeft':
					['Complètement à gauche', ' sur {road}'],
				'Left':
					['A gauche', ' sur {road}'],
				'SlightLeft':
					['Légèrement à gauche', ' sur {road}'],
				'WaypointReached':
					['Point d\'étape atteint'],
				'Roundabout':
					['Au rond-point, prenez la {exitStr} sortie', ' sur {road}'],
				'DestinationReached':
					['Destination atteinte'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Départ',
				viaPlaceholder: 'Intermédiaire {viaNumber}',
				endPlaceholder: 'Arrivée'
			}
		},
		'it': {
			directions: {
				N: 'nord',
				NE: 'nord-est',
				E: 'est',
				SE: 'sud-est',
				S: 'sud',
				SW: 'sud-ovest',
				W: 'ovest',
				NW: 'nord-ovest'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Dritto verso {dir}', ' su {road}'],
				'Continue':
					['Continuare verso {dir}', ' su {road}'],
				'SlightRight':
					['Mantenere la destra', ' su {road}'],
				'Right':
					['A destra', ' su {road}'],
				'SharpRight':
					['Strettamente a destra', ' su {road}'],
				'TurnAround':
					['Fare inversione di marcia'],
				'SharpLeft':
					['Strettamente a sinistra', ' su {road}'],
				'Left':
					['A sinistra', ' sur {road}'],
				'SlightLeft':
					['Mantenere la sinistra', ' su {road}'],
				'WaypointReached':
					['Punto di passaggio raggiunto'],
				'Roundabout':
					['Alla rotonda, prendere la {exitStr} uscita'],
				'DestinationReached':
					['Destinazione raggiunta'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Partenza',
				viaPlaceholder: 'Intermedia {viaNumber}',
				endPlaceholder: 'Destinazione'
			}
		},
		'pt': {
			directions: {
				N: 'norte',
				NE: 'nordeste',
				E: 'leste',
				SE: 'sudeste',
				S: 'sul',
				SW: 'sudoeste',
				W: 'oeste',
				NW: 'noroeste',
				SlightRight: 'curva ligeira a direita',
				Right: 'direita',
				SharpRight: 'curva fechada a direita',
				SlightLeft: 'ligeira a esquerda',
				Left: 'esquerda',
				SharpLeft: 'curva fechada a esquerda',
				Uturn: 'Meia volta'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Siga {dir}', ' na {road}'],
				'Continue':
					['Continue {dir}', ' na {road}'],
				'SlightRight':
					['Curva ligeira a direita', ' na {road}'],
				'Right':
					['Curva a direita', ' na {road}'],
				'SharpRight':
					['Curva fechada a direita', ' na {road}'],
				'TurnAround':
					['Retorne'],
				'SharpLeft':
					['Curva fechada a esquerda', ' na {road}'],
				'Left':
					['Curva a esquerda', ' na {road}'],
				'SlightLeft':
					['Curva ligueira a esquerda', ' na {road}'],
				'WaypointReached':
					['Ponto de interesse atingido'],
				'Roundabout':
					['Pegue a {exitStr} saída na rotatória', ' na {road}'],
				'DestinationReached':
					['Destino atingido'],
				'Fork': ['Na encruzilhada, vire a {modifier}', ' na {road}'],
				'Merge': ['Entre à {modifier}', ' na {road}'],
				'OnRamp': ['Vire {modifier} na rampa', ' na {road}'],
				'OffRamp': ['Entre na rampa na {modifier}', ' na {road}'],
				'EndOfRoad': ['Vire {modifier} no fim da rua', ' na {road}'],
				'Onto': 'na {road}'
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Origem',
				viaPlaceholder: 'Intermédio {viaNumber}',
				endPlaceholder: 'Destino'
			}
		},
		'sk': {
			directions: {
				N: 'sever',
				NE: 'serverovýchod',
				E: 'východ',
				SE: 'juhovýchod',
				S: 'juh',
				SW: 'juhozápad',
				W: 'západ',
				NW: 'serverozápad'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Mierte na {dir}', ' na {road}'],
				'Continue':
					['Pokračujte na {dir}', ' na {road}'],
				'SlightRight':
					['Mierne doprava', ' na {road}'],
				'Right':
					['Doprava', ' na {road}'],
				'SharpRight':
					['Prudko doprava', ' na {road}'],
				'TurnAround':
					['Otočte sa'],
				'SharpLeft':
					['Prudko doľava', ' na {road}'],
				'Left':
					['Doľava', ' na {road}'],
				'SlightLeft':
					['Mierne doľava', ' na {road}'],
				'WaypointReached':
					['Ste v prejazdovom bode.'],
				'Roundabout':
					['Odbočte na {exitStr} výjazde', ' na {road}'],
				'DestinationReached':
					['Prišli ste do cieľa.'],
			},
			formatOrder: function(n) {
				var i = n % 10 - 1,
				suffix = ['.', '.', '.'];

				return suffix[i] ? n + suffix[i] : n + '.';
			},
			ui: {
				startPlaceholder: 'Začiatok',
				viaPlaceholder: 'Cez {viaNumber}',
				endPlaceholder: 'Koniec'
			}
		},
		'el': {
			directions: {
				N: 'βόρεια',
				NE: 'βορειοανατολικά',
				E: 'ανατολικά',
				SE: 'νοτιοανατολικά',
				S: 'νότια',
				SW: 'νοτιοδυτικά',
				W: 'δυτικά',
				NW: 'βορειοδυτικά'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Κατευθυνθείτε {dir}', ' στην {road}'],
				'Continue':
					['Συνεχίστε {dir}', ' στην {road}'],
				'SlightRight':
					['Ελαφρώς δεξιά', ' στην {road}'],
				'Right':
					['Δεξιά', ' στην {road}'],
				'SharpRight':
					['Απότομη δεξιά στροφή', ' στην {road}'],
				'TurnAround':
					['Κάντε αναστροφή'],
				'SharpLeft':
					['Απότομη αριστερή στροφή', ' στην {road}'],
				'Left':
					['Αριστερά', ' στην {road}'],
				'SlightLeft':
					['Ελαφρώς αριστερά', ' στην {road}'],
				'WaypointReached':
					['Φτάσατε στο σημείο αναφοράς'],
				'Roundabout':
					['Ακολουθήστε την {exitStr} έξοδο στο κυκλικό κόμβο', ' στην {road}'],
				'DestinationReached':
					['Φτάσατε στον προορισμό σας'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Αφετηρία',
				viaPlaceholder: 'μέσω {viaNumber}',
				endPlaceholder: 'Προορισμός'
			}
		},
		'ca': {
			directions: {
				N: 'nord',
				NE: 'nord-est',
				E: 'est',
				SE: 'sud-est',
				S: 'sud',
				SW: 'sud-oest',
				W: 'oest',
				NW: 'nord-oest',
				SlightRight: 'lleu gir a la dreta',
				Right: 'dreta',
				SharpRight: 'gir pronunciat a la dreta',
				SlightLeft: 'gir pronunciat a l\'esquerra',
				Left: 'esquerra',
				SharpLeft: 'lleu gir a l\'esquerra',
				Uturn: 'mitja volta'
			},
			instructions: {
				'Head':
					['Recte {dir}', ' sobre {road}'],
				'Continue':
					['Continuar {dir}'],
				'TurnAround':
					['Donar la volta'],
				'WaypointReached':
					['Ha arribat a un punt del camí'],
				'Roundabout':
					['Agafar {exitStr} sortida a la rotonda', ' a {road}'],
				'DestinationReached':
					['Arribada al destí'],
				'Fork': ['A la cruïlla gira a la {modifier}', ' cap a {road}'],
				'Merge': ['Incorpora\'t {modifier}', ' a {road}'],
				'OnRamp': ['Gira {modifier} a la sortida', ' cap a {road}'],
				'OffRamp': ['Pren la sortida {modifier}', ' cap a {road}'],
				'EndOfRoad': ['Gira {modifier} al final de la carretera', ' cap a {road}'],
				'Onto': 'cap a {road}'
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Origen',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Destí'
			},
			units: {
				meters: 'm',
				kilometers: 'km',
				yards: 'yd',
				miles: 'mi',
				hours: 'h',
				minutes: 'min',
				seconds: 's'
			}
		},
		'ru': {
			directions: {
				N: 'север',
				NE: 'северовосток',
				E: 'восток',
				SE: 'юговосток',
				S: 'юг',
				SW: 'югозапад',
				W: 'запад',
				NW: 'северозапад',
				SlightRight: 'плавно направо',
				Right: 'направо',
				SharpRight: 'резко направо',
				SlightLeft: 'плавно налево',
				Left: 'налево',
				SharpLeft: 'резко налево',
				Uturn: 'развернуться'
			},
			instructions: {
				'Head':
					['Начать движение на {dir}', ' по {road}'],
				'Continue':
					['Продолжать движение на {dir}', ' по {road}'],
				'SlightRight':
					['Плавный поворот направо', ' на {road}'],
				'Right':
					['Направо', ' на {road}'],
				'SharpRight':
					['Резкий поворот направо', ' на {road}'],
				'TurnAround':
					['Развернуться'],
				'SharpLeft':
					['Резкий поворот налево', ' на {road}'],
				'Left':
					['Поворот налево', ' на {road}'],
				'SlightLeft':
					['Плавный поворот налево', ' на {road}'],
				'WaypointReached':
					['Точка достигнута'],
				'Roundabout':
					['{exitStr} съезд с кольца', ' на {road}'],
				'DestinationReached':
					['Окончание маршрута'],
				'Fork': ['На развилке поверните {modifier}', ' на {road}'],
				'Merge': ['Перестройтесь {modifier}', ' на {road}'],
				'OnRamp': ['Поверните {modifier} на съезд', ' на {road}'],
				'OffRamp': ['Съезжайте на {modifier}', ' на {road}'],
				'EndOfRoad': ['Поверните {modifier} в конце дороги', ' на {road}'],
				'Onto': 'на {road}'
			},
			formatOrder: function(n) {
				return n + '-й';
			},
			ui: {
				startPlaceholder: 'Начало',
				viaPlaceholder: 'Через {viaNumber}',
				endPlaceholder: 'Конец'
			},
			units: {
				meters: 'м',
				kilometers: 'км',
				yards: 'ярд',
				miles: 'ми',
				hours: 'ч',
				minutes: 'м',
				seconds: 'с'
			}
		},
                
                'pl': {
			directions: {
				N: 'północ',
				NE: 'północny wschód',
				E: 'wschód',
				SE: 'południowy wschód',
				S: 'południe',
				SW: 'południowy zachód',
				W: 'zachód',
				NW: 'północny zachód',
				SlightRight: 'lekko w prawo',
				Right: 'w prawo',
				SharpRight: 'ostro w prawo',
				SlightLeft: 'lekko w lewo',
				Left: 'w lewo',
				SharpLeft: 'ostro w lewo',
				Uturn: 'zawróć'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Kieruj się na {dir}', ' na {road}'],
				'Continue':
					['Jedź dalej przez {dir}'],
				'TurnAround':
					['Zawróć'],
				'WaypointReached':
					['Punkt pośredni'],
				'Roundabout':
					['Wyjedź {exitStr} zjazdem na rondzie', ' na {road}'],
				'DestinationReached':
					['Dojechano do miejsca docelowego'],
				'Fork': ['Na rozwidleniu {modifier}', ' na {road}'],
				'Merge': ['Zjedź {modifier}', ' na {road}'],
				'OnRamp': ['Wjazd {modifier}', ' na {road}'],
				'OffRamp': ['Zjazd {modifier}', ' na {road}'],
				'EndOfRoad': ['Skręć {modifier} na końcu drogi', ' na {road}'],
				'Onto': 'na {road}'
			},
			formatOrder: function(n) {
				return n + '.';
			},
			ui: {
				startPlaceholder: 'Początek',
				viaPlaceholder: 'Przez {viaNumber}',
				endPlaceholder: 'Koniec'
			},
			units: {
				meters: 'm',
				kilometers: 'km',
				yards: 'yd',
				miles: 'mi',
				hours: 'godz',
				minutes: 'min',
				seconds: 's'
			}
		}
	});
})();

},{}],58:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);

	var OSRMv1 = _dereq_('./osrm-v1');

	/**
	 * Works against OSRM's new API in version 5.0; this has
	 * the API version v1.
	 */
	module.exports = OSRMv1.extend({
		options: {
			serviceUrl: 'https://api.mapbox.com/directions/v5',
			profile: 'mapbox/driving',
			useHints: false
		},

		initialize: function(accessToken, options) {
			L.Routing.OSRMv1.prototype.initialize.call(this, options);
			this.options.requestParameters = this.options.requestParameters || {};
			/* jshint camelcase: false */
			this.options.requestParameters.access_token = accessToken;
			/* jshint camelcase: true */
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./osrm-v1":59}],59:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null),
		corslite = _dereq_('@mapbox/corslite'),
		polyline = _dereq_('@mapbox/polyline'),
		osrmTextInstructions = _dereq_('osrm-text-instructions')('v5');

	// Ignore camelcase naming for this file, since OSRM's API uses
	// underscores.
	/* jshint camelcase: false */

	var Waypoint = _dereq_('./waypoint');

	/**
	 * Works against OSRM's new API in version 5.0; this has
	 * the API version v1.
	 */
	module.exports = L.Class.extend({
		options: {
			serviceUrl: 'https://router.project-osrm.org/route/v1',
			profile: 'driving',
			timeout: 30 * 1000,
			routingOptions: {
				alternatives: true,
				steps: true
			},
			polylinePrecision: 5,
			useHints: true,
			suppressDemoServerWarning: false,
			language: 'en'
		},

		initialize: function(options) {
			L.Util.setOptions(this, options);
			this._hints = {
				locations: {}
			};

			if (!this.options.suppressDemoServerWarning &&
				this.options.serviceUrl.indexOf('//router.project-osrm.org') >= 0) {
				console.warn('You are using OSRM\'s demo server. ' +
					'Please note that it is **NOT SUITABLE FOR PRODUCTION USE**.\n' +
					'Refer to the demo server\'s usage policy: ' +
					'https://github.com/Project-OSRM/osrm-backend/wiki/Api-usage-policy\n\n' +
					'To change, set the serviceUrl option.\n\n' +
					'Please do not report issues with this server to neither ' +
					'Leaflet Routing Machine or OSRM - it\'s for\n' +
					'demo only, and will sometimes not be available, or work in ' +
					'unexpected ways.\n\n' +
					'Please set up your own OSRM server, or use a paid service ' +
					'provider for production.');
			}
		},

		route: function(waypoints, callback, context, options) {
			var timedOut = false,
				wps = [],
				url,
				timer,
				wp,
				i,
				xhr;

			options = L.extend({}, this.options.routingOptions, options);
			url = this.buildRouteUrl(waypoints, options);
			if (this.options.requestParameters) {
				url += L.Util.getParamString(this.options.requestParameters, url);
			}

			timer = setTimeout(function() {
				timedOut = true;
				callback.call(context || callback, {
					status: -1,
					message: 'OSRM request timed out.'
				});
			}, this.options.timeout);

			// Create a copy of the waypoints, since they
			// might otherwise be asynchronously modified while
			// the request is being processed.
			for (i = 0; i < waypoints.length; i++) {
				wp = waypoints[i];
				wps.push(new Waypoint(wp.latLng, wp.name, wp.options));
			}

			return xhr = corslite(url, L.bind(function(err, resp) {
				var data,
					error =  {};

				clearTimeout(timer);
				if (!timedOut) {
					if (!err) {
						try {
							data = JSON.parse(resp.responseText);
							try {
								return this._routeDone(data, wps, options, callback, context);
							} catch (ex) {
								error.status = -3;
								error.message = ex.toString();
							}
						} catch (ex) {
							error.status = -2;
							error.message = 'Error parsing OSRM response: ' + ex.toString();
						}
					} else {
						error.message = 'HTTP request failed: ' + err.type +
							(err.target && err.target.status ? ' HTTP ' + err.target.status + ': ' + err.target.statusText : '');
						error.url = url;
						error.status = -1;
						error.target = err;
					}

					callback.call(context || callback, error);
				} else {
					xhr.abort();
				}
			}, this));
		},

		requiresMoreDetail: function(route, zoom, bounds) {
			if (!route.properties.isSimplified) {
				return false;
			}

			var waypoints = route.inputWaypoints,
				i;
			for (i = 0; i < waypoints.length; ++i) {
				if (!bounds.contains(waypoints[i].latLng)) {
					return true;
				}
			}

			return false;
		},

		_routeDone: function(response, inputWaypoints, options, callback, context) {
			var alts = [],
			    actualWaypoints,
			    i,
			    route;

			context = context || callback;
			if (response.code !== 'Ok') {
				callback.call(context, {
					status: response.code
				});
				return;
			}

			actualWaypoints = this._toWaypoints(inputWaypoints, response.waypoints);

			for (i = 0; i < response.routes.length; i++) {
				route = this._convertRoute(response.routes[i]);
				route.inputWaypoints = inputWaypoints;
				route.waypoints = actualWaypoints;
				route.properties = {isSimplified: !options || !options.geometryOnly || options.simplifyGeometry};
				alts.push(route);
			}

			this._saveHintData(response.waypoints, inputWaypoints);

			callback.call(context, null, alts);
		},

		_convertRoute: function(responseRoute) {
			var result = {
					name: '',
					coordinates: [],
					instructions: [],
					summary: {
						totalDistance: responseRoute.distance,
						totalTime: responseRoute.duration
					}
				},
				legNames = [],
				waypointIndices = [],
				index = 0,
				legCount = responseRoute.legs.length,
				hasSteps = responseRoute.legs[0].steps.length > 0,
				i,
				j,
				leg,
				step,
				geometry,
				type,
				modifier,
				text,
				stepToText;

			if (this.options.stepToText) {
				stepToText = this.options.stepToText;
			} else {
				stepToText = L.bind(osrmTextInstructions.compile, osrmTextInstructions, this.options.language);
			}

			for (i = 0; i < legCount; i++) {
				leg = responseRoute.legs[i];
				legNames.push(leg.summary && leg.summary.charAt(0).toUpperCase() + leg.summary.substring(1));
				for (j = 0; j < leg.steps.length; j++) {
					step = leg.steps[j];
					geometry = this._decodePolyline(step.geometry);
					result.coordinates.push.apply(result.coordinates, geometry);
					type = this._maneuverToInstructionType(step.maneuver, i === legCount - 1);
					modifier = this._maneuverToModifier(step.maneuver);
					text = stepToText(step, {legCount: legCount, legIndex: i});

					if (type) {
						if ((i == 0 && step.maneuver.type == 'depart') || step.maneuver.type == 'arrive') {
							waypointIndices.push(index);
						}

						result.instructions.push({
							type: type,
							distance: step.distance,
							time: step.duration,
							road: step.name,
							direction: this._bearingToDirection(step.maneuver.bearing_after),
							exit: step.maneuver.exit,
							index: index,
							mode: step.mode,
							modifier: modifier,
							text: text
						});
					}

					index += geometry.length;
				}
			}

			result.name = legNames.join(', ');
			if (!hasSteps) {
				result.coordinates = this._decodePolyline(responseRoute.geometry);
			} else {
				result.waypointIndices = waypointIndices;
			}

			return result;
		},

		_bearingToDirection: function(bearing) {
			var oct = Math.round(bearing / 45) % 8;
			return ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][oct];
		},

		_maneuverToInstructionType: function(maneuver, lastLeg) {
			switch (maneuver.type) {
			case 'new name':
				return 'Continue';
			case 'depart':
				return 'Head';
			case 'arrive':
				return lastLeg ? 'DestinationReached' : 'WaypointReached';
			case 'roundabout':
			case 'rotary':
				return 'Roundabout';
			case 'merge':
			case 'fork':
			case 'on ramp':
			case 'off ramp':
			case 'end of road':
				return this._camelCase(maneuver.type);
			// These are all reduced to the same instruction in the current model
			//case 'turn':
			//case 'ramp': // deprecated in v5.1
			default:
				return this._camelCase(maneuver.modifier);
			}
		},

		_maneuverToModifier: function(maneuver) {
			var modifier = maneuver.modifier;

			switch (maneuver.type) {
			case 'merge':
			case 'fork':
			case 'on ramp':
			case 'off ramp':
			case 'end of road':
				modifier = this._leftOrRight(modifier);
			}

			return modifier && this._camelCase(modifier);
		},

		_camelCase: function(s) {
			var words = s.split(' '),
				result = '';
			for (var i = 0, l = words.length; i < l; i++) {
				result += words[i].charAt(0).toUpperCase() + words[i].substring(1);
			}

			return result;
		},

		_leftOrRight: function(d) {
			return d.indexOf('left') >= 0 ? 'Left' : 'Right';
		},

		_decodePolyline: function(routeGeometry) {
			var cs = polyline.decode(routeGeometry, this.options.polylinePrecision),
				result = new Array(cs.length),
				i;
			for (i = cs.length - 1; i >= 0; i--) {
				result[i] = L.latLng(cs[i]);
			}

			return result;
		},

		_toWaypoints: function(inputWaypoints, vias) {
			var wps = [],
			    i,
			    viaLoc;
			for (i = 0; i < vias.length; i++) {
				viaLoc = vias[i].location;
				wps.push(new Waypoint(L.latLng(viaLoc[1], viaLoc[0]),
				                            inputWaypoints[i].name,
											inputWaypoints[i].options));
			}

			return wps;
		},

		buildRouteUrl: function(waypoints, options) {
			var locs = [],
				hints = [],
				wp,
				latLng,
			    computeInstructions,
			    computeAlternative = true;

			for (var i = 0; i < waypoints.length; i++) {
				wp = waypoints[i];
				latLng = wp.latLng;
				locs.push(latLng.lng + ',' + latLng.lat);
				hints.push(this._hints.locations[this._locationKey(latLng)] || '');
			}

			computeInstructions =
				true;

			return this.options.serviceUrl + '/' + this.options.profile + '/' +
				locs.join(';') + '?' +
				(options.geometryOnly ? (options.simplifyGeometry ? '' : 'overview=full') : 'overview=false') +
				'&alternatives=' + computeAlternative.toString() +
				'&steps=' + computeInstructions.toString() +
				(this.options.useHints ? '&hints=' + hints.join(';') : '') +
				(options.allowUTurns ? '&continue_straight=' + !options.allowUTurns : '');
		},

		_locationKey: function(location) {
			return location.lat + ',' + location.lng;
		},

		_saveHintData: function(actualWaypoints, waypoints) {
			var loc;
			this._hints = {
				locations: {}
			};
			for (var i = actualWaypoints.length - 1; i >= 0; i--) {
				loc = waypoints[i].latLng;
				this._hints.locations[this._locationKey(loc)] = actualWaypoints[i].hint;
			}
		},
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./waypoint":61,"@mapbox/corslite":1,"@mapbox/polyline":2,"osrm-text-instructions":3}],60:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);
	var GeocoderElement = _dereq_('./geocoder-element');
	var Waypoint = _dereq_('./waypoint');

	module.exports = (L.Layer || L.Class).extend({
		includes: ((typeof L.Evented !== 'undefined' && L.Evented.prototype) || L.Mixin.Events),

		options: {
			dragStyles: [
				{color: 'black', opacity: 0.15, weight: 9},
				{color: 'white', opacity: 0.8, weight: 6},
				{color: 'red', opacity: 1, weight: 2, dashArray: '7,12'}
			],
			draggableWaypoints: true,
			routeWhileDragging: false,
			addWaypoints: true,
			reverseWaypoints: false,
			addButtonClassName: '',
			language: 'en',
			createGeocoderElement: function(wp, i, nWps, plan) {
				return new GeocoderElement(wp, i, nWps, plan);
			},
			createMarker: function(i, wp) {
				var options = {
						draggable: this.draggableWaypoints
					},
				    marker = L.marker(wp.latLng, options);

				return marker;
			},
			geocodersClassName: ''
		},

		initialize: function(waypoints, options) {
			L.Util.setOptions(this, options);
			this._waypoints = [];
			this.setWaypoints(waypoints);
		},

		isReady: function() {
			var i;
			for (i = 0; i < this._waypoints.length; i++) {
				if (!this._waypoints[i].latLng) {
					return false;
				}
			}

			return true;
		},

		getWaypoints: function() {
			var i,
				wps = [];

			for (i = 0; i < this._waypoints.length; i++) {
				wps.push(this._waypoints[i]);
			}

			return wps;
		},

		setWaypoints: function(waypoints) {
			var args = [0, this._waypoints.length].concat(waypoints);
			this.spliceWaypoints.apply(this, args);
			return this;
		},

		spliceWaypoints: function() {
			var args = [arguments[0], arguments[1]],
			    i;

			for (i = 2; i < arguments.length; i++) {
				args.push(arguments[i] && arguments[i].hasOwnProperty('latLng') ? arguments[i] : new Waypoint(arguments[i]));
			}

			[].splice.apply(this._waypoints, args);

			// Make sure there's always at least two waypoints
			while (this._waypoints.length < 2) {
				this.spliceWaypoints(this._waypoints.length, 0, null);
			}

			this._updateMarkers();
			this._fireChanged.apply(this, args);
		},

		onAdd: function(map) {
			this._map = map;
			this._updateMarkers();
		},

		onRemove: function() {
			var i;
			this._removeMarkers();

			if (this._newWp) {
				for (i = 0; i < this._newWp.lines.length; i++) {
					this._map.removeLayer(this._newWp.lines[i]);
				}
			}

			delete this._map;
		},

		createGeocoders: function() {
			var container = L.DomUtil.create('div', 'leaflet-routing-geocoders ' + this.options.geocodersClassName),
				waypoints = this._waypoints,
			    addWpBtn,
			    reverseBtn;

			this._geocoderContainer = container;
			this._geocoderElems = [];


			if (this.options.addWaypoints) {
				addWpBtn = L.DomUtil.create('button', 'leaflet-routing-add-waypoint ' + this.options.addButtonClassName, container);
				addWpBtn.setAttribute('type', 'button');
				L.DomEvent.addListener(addWpBtn, 'click', function() {
					this.spliceWaypoints(waypoints.length, 0, null);
				}, this);
			}

			if (this.options.reverseWaypoints) {
				reverseBtn = L.DomUtil.create('button', 'leaflet-routing-reverse-waypoints', container);
				reverseBtn.setAttribute('type', 'button');
				L.DomEvent.addListener(reverseBtn, 'click', function() {
					this._waypoints.reverse();
					this.setWaypoints(this._waypoints);
				}, this);
			}

			this._updateGeocoders();
			this.on('waypointsspliced', this._updateGeocoders);

			return container;
		},

		_createGeocoder: function(i) {
			var geocoder = this.options.createGeocoderElement(this._waypoints[i], i, this._waypoints.length, this.options);
			geocoder
			.on('delete', function() {
				if (i > 0 || this._waypoints.length > 2) {
					this.spliceWaypoints(i, 1);
				} else {
					this.spliceWaypoints(i, 1, new Waypoint());
				}
			}, this)
			.on('geocoded', function(e) {
				this._updateMarkers();
				this._fireChanged();
				this._focusGeocoder(i + 1);
				this.fire('waypointgeocoded', {
					waypointIndex: i,
					waypoint: e.waypoint
				});
			}, this)
			.on('reversegeocoded', function(e) {
				this.fire('waypointgeocoded', {
					waypointIndex: i,
					waypoint: e.waypoint
				});
			}, this);

			return geocoder;
		},

		_updateGeocoders: function() {
			var elems = [],
				i,
			    geocoderElem;

			for (i = 0; i < this._geocoderElems.length; i++) {
				this._geocoderContainer.removeChild(this._geocoderElems[i].getContainer());
			}

			for (i = this._waypoints.length - 1; i >= 0; i--) {
				geocoderElem = this._createGeocoder(i);
				this._geocoderContainer.insertBefore(geocoderElem.getContainer(), this._geocoderContainer.firstChild);
				elems.push(geocoderElem);
			}

			this._geocoderElems = elems.reverse();
		},

		_removeMarkers: function() {
			var i;
			if (this._markers) {
				for (i = 0; i < this._markers.length; i++) {
					if (this._markers[i]) {
						this._map.removeLayer(this._markers[i]);
					}
				}
			}
			this._markers = [];
		},

		_updateMarkers: function() {
			var i,
			    m;

			if (!this._map) {
				return;
			}

			this._removeMarkers();

			for (i = 0; i < this._waypoints.length; i++) {
				if (this._waypoints[i].latLng) {
					m = this.options.createMarker(i, this._waypoints[i], this._waypoints.length);
					if (m) {
						m.addTo(this._map);
						if (this.options.draggableWaypoints) {
							this._hookWaypointEvents(m, i);
						}
					}
				} else {
					m = null;
				}
				this._markers.push(m);
			}
		},

		_fireChanged: function() {
			this.fire('waypointschanged', {waypoints: this.getWaypoints()});

			if (arguments.length >= 2) {
				this.fire('waypointsspliced', {
					index: Array.prototype.shift.call(arguments),
					nRemoved: Array.prototype.shift.call(arguments),
					added: arguments
				});
			}
		},

		_hookWaypointEvents: function(m, i, trackMouseMove) {
			var eventLatLng = function(e) {
					return trackMouseMove ? e.latlng : e.target.getLatLng();
				},
				dragStart = L.bind(function(e) {
					this.fire('waypointdragstart', {index: i, latlng: eventLatLng(e)});
				}, this),
				drag = L.bind(function(e) {
					this._waypoints[i].latLng = eventLatLng(e);
					this.fire('waypointdrag', {index: i, latlng: eventLatLng(e)});
				}, this),
				dragEnd = L.bind(function(e) {
					this._waypoints[i].latLng = eventLatLng(e);
					this._waypoints[i].name = '';
					if (this._geocoderElems) {
						this._geocoderElems[i].update(true);
					}
					this.fire('waypointdragend', {index: i, latlng: eventLatLng(e)});
					this._fireChanged();
				}, this),
				mouseMove,
				mouseUp;

			if (trackMouseMove) {
				mouseMove = L.bind(function(e) {
					this._markers[i].setLatLng(e.latlng);
					drag(e);
				}, this);
				mouseUp = L.bind(function(e) {
					this._map.dragging.enable();
					this._map.off('mouseup', mouseUp);
					this._map.off('mousemove', mouseMove);
					dragEnd(e);
				}, this);
				this._map.dragging.disable();
				this._map.on('mousemove', mouseMove);
				this._map.on('mouseup', mouseUp);
				dragStart({latlng: this._waypoints[i].latLng});
			} else {
				m.on('dragstart', dragStart);
				m.on('drag', drag);
				m.on('dragend', dragEnd);
			}
		},

		dragNewWaypoint: function(e) {
			var newWpIndex = e.afterIndex + 1;
			if (this.options.routeWhileDragging) {
				this.spliceWaypoints(newWpIndex, 0, e.latlng);
				this._hookWaypointEvents(this._markers[newWpIndex], newWpIndex, true);
			} else {
				this._dragNewWaypoint(newWpIndex, e.latlng);
			}
		},

		_dragNewWaypoint: function(newWpIndex, initialLatLng) {
			var wp = new Waypoint(initialLatLng),
				prevWp = this._waypoints[newWpIndex - 1],
				nextWp = this._waypoints[newWpIndex],
				marker = this.options.createMarker(newWpIndex, wp, this._waypoints.length + 1),
				lines = [],
				draggingEnabled = this._map.dragging.enabled(),
				mouseMove = L.bind(function(e) {
					var i,
						latLngs;
					if (marker) {
						marker.setLatLng(e.latlng);
					}
					for (i = 0; i < lines.length; i++) {
						latLngs = lines[i].getLatLngs();
						latLngs.splice(1, 1, e.latlng);
						lines[i].setLatLngs(latLngs);
					}

					L.DomEvent.stop(e);
				}, this),
				mouseUp = L.bind(function(e) {
					var i;
					if (marker) {
						this._map.removeLayer(marker);
					}
					for (i = 0; i < lines.length; i++) {
						this._map.removeLayer(lines[i]);
					}
					this._map.off('mousemove', mouseMove);
					this._map.off('mouseup', mouseUp);
					this.spliceWaypoints(newWpIndex, 0, e.latlng);
					if (draggingEnabled) {
						this._map.dragging.enable();
					}

					L.DomEvent.stop(e);
				}, this),
				i;

			if (marker) {
				marker.addTo(this._map);
			}

			for (i = 0; i < this.options.dragStyles.length; i++) {
				lines.push(L.polyline([prevWp.latLng, initialLatLng, nextWp.latLng],
					this.options.dragStyles[i]).addTo(this._map));
			}

			if (draggingEnabled) {
				this._map.dragging.disable();
			}

			this._map.on('mousemove', mouseMove);
			this._map.on('mouseup', mouseUp);
		},

		_focusGeocoder: function(i) {
			if (this._geocoderElems[i]) {
				this._geocoderElems[i].focus();
			} else {
				document.activeElement.blur();
			}
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./geocoder-element":52,"./waypoint":61}],61:[function(_dereq_,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);

	module.exports = L.Class.extend({
		options: {
			allowUTurn: false,
		},
		initialize: function(latLng, name, options) {
			L.Util.setOptions(this, options);
			this.latLng = L.latLng(latLng);
			this.name = name;
		}
	});
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[53]);

;/* 
   NOTICE
   Since version 3.2.5, the functionality in this file is by
   default NOT used for localizing OSRM instructions.
   Instead, we rely on the module osrm-text-instructions (https://github.com/Project-OSRM/osrm-text-instructions/).
   
   This file can still be used for other routing backends, or if you specify the
   stepToText option in the OSRMv1 class.
*/

(function() {
	'use strict';

	var spanish = {
		directions: {
			N: 'norte',
			NE: 'noreste',
			E: 'este',
			SE: 'sureste',
			S: 'sur',
			SW: 'suroeste',
			W: 'oeste',
			NW: 'noroeste',
			SlightRight: 'leve giro a la derecha',
			Right: 'derecha',
			SharpRight: 'giro pronunciado a la derecha',
			SlightLeft: 'leve giro a la izquierda',
			Left: 'izquierda',
			SharpLeft: 'giro pronunciado a la izquierda',
			Uturn: 'media vuelta'
		},
		instructions: {
			// instruction, postfix if the road is named
			'Head':
				['Derecho {dir}', ' sobre {road}'],
			'Continue':
				['Continuar {dir}', ' en {road}'],
			'TurnAround':
				['Dar vuelta'],
			'WaypointReached':
				['Llegó a un punto del camino'],
			'Roundabout':
				['Tomar {exitStr} salida en la rotonda', ' en {road}'],
			'DestinationReached':
				['Llegada a destino'],
			'Fork': ['En el cruce gira a {modifier}', ' hacia {road}'],
			'Merge': ['Incorpórate {modifier}', ' hacia {road}'],
			'OnRamp': ['Gira {modifier} en la salida', ' hacia {road}'],
			'OffRamp': ['Toma la salida {modifier}', ' hacia {road}'],
			'EndOfRoad': ['Gira {modifier} al final de la carretera', ' hacia {road}'],
			'Onto': 'hacia {road}'
		},
		formatOrder: function(n) {
			return n + 'º';
		},
		ui: {
			startPlaceholder: 'Inicio',
			viaPlaceholder: 'Via {viaNumber}',
			endPlaceholder: 'Destino'
		},
		units: {
			meters: 'm',
			kilometers: 'km',
			yards: 'yd',
			miles: 'mi',
			hours: 'h',
			minutes: 'min',
			seconds: 's'
		}
	};

	L.Routing = L.Routing || {};

	var Localization = L.Class.extend({
		initialize: function(langs) {
			this._langs = L.Util.isArray(langs) ? langs.slice() : [langs, 'en'];

			for (var i = 0, l = this._langs.length; i < l; i++) {
				var generalizedCode = /([A-Za-z]+)/.exec(this._langs[i])[1]
				if (!Localization[this._langs[i]]) {
					if (Localization[generalizedCode]) {
						this._langs[i] = generalizedCode;
					} else {
						throw new Error('No localization for language "' + this._langs[i] + '".');
					}
				}
			}
		},

		localize: function(keys) {
			var dict,
				key,
				value;

			keys = L.Util.isArray(keys) ? keys : [keys];

			for (var i = 0, l = this._langs.length; i < l; i++) {
				dict = Localization[this._langs[i]];
				for (var j = 0, nKeys = keys.length; dict && j < nKeys; j++) {
					key = keys[j];
					value = dict[key];
					dict = value;
				}

				if (value) {
					return value;
				}
			}
		}
	});

	module.exports = L.extend(Localization, {
		'en': {
			directions: {
				N: 'north',
				NE: 'northeast',
				E: 'east',
				SE: 'southeast',
				S: 'south',
				SW: 'southwest',
				W: 'west',
				NW: 'northwest',
				SlightRight: 'slight right',
				Right: 'right',
				SharpRight: 'sharp right',
				SlightLeft: 'slight left',
				Left: 'left',
				SharpLeft: 'sharp left',
				Uturn: 'Turn around'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Head {dir}', ' on {road}'],
				'Continue':
					['Continue {dir}'],
				'TurnAround':
					['Turn around'],
				'WaypointReached':
					['Waypoint reached'],
				'Roundabout':
					['Take the {exitStr} exit in the roundabout', ' onto {road}'],
				'DestinationReached':
					['Destination reached'],
				'Fork': ['At the fork, turn {modifier}', ' onto {road}'],
				'Merge': ['Merge {modifier}', ' onto {road}'],
				'OnRamp': ['Turn {modifier} on the ramp', ' onto {road}'],
				'OffRamp': ['Take the ramp on the {modifier}', ' onto {road}'],
				'EndOfRoad': ['Turn {modifier} at the end of the road', ' onto {road}'],
				'Onto': 'onto {road}'
			},
			formatOrder: function(n) {
				var i = n % 10 - 1,
				suffix = ['st', 'nd', 'rd'];

				return suffix[i] ? n + suffix[i] : n + 'th';
			},
			ui: {
				startPlaceholder: 'Start',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'End'
			},
			units: {
				meters: 'm',
				kilometers: 'km',
				yards: 'yd',
				miles: 'mi',
				hours: 'h',
				minutes: 'min',
				seconds: 's'
			}
		},

		'de': {
			directions: {
				N: 'Norden',
				NE: 'Nordosten',
				E: 'Osten',
				SE: 'Südosten',
				S: 'Süden',
				SW: 'Südwesten',
				W: 'Westen',
				NW: 'Nordwesten',
				SlightRight: 'leicht rechts',
				Right: 'rechts',
				SharpRight: 'scharf rechts',
				SlightLeft: 'leicht links',
				Left: 'links',
				SharpLeft: 'scharf links',
				Uturn: 'Wenden'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Richtung {dir}', ' auf {road}'],
				'Continue':
					['Geradeaus Richtung {dir}', ' auf {road}'],
				'SlightRight':
					['Leicht rechts abbiegen', ' auf {road}'],
				'Right':
					['Rechts abbiegen', ' auf {road}'],
				'SharpRight':
					['Scharf rechts abbiegen', ' auf {road}'],
				'TurnAround':
					['Wenden'],
				'SharpLeft':
					['Scharf links abbiegen', ' auf {road}'],
				'Left':
					['Links abbiegen', ' auf {road}'],
				'SlightLeft':
					['Leicht links abbiegen', ' auf {road}'],
				'WaypointReached':
					['Zwischenhalt erreicht'],
				'Roundabout':
					['Nehmen Sie die {exitStr} Ausfahrt im Kreisverkehr', ' auf {road}'],
				'DestinationReached':
					['Sie haben ihr Ziel erreicht'],
				'Fork': ['An der Kreuzung {modifier}', ' auf {road}'],
				'Merge': ['Fahren Sie {modifier} weiter', ' auf {road}'],
				'OnRamp': ['Fahren Sie {modifier} auf die Auffahrt', ' auf {road}'],
				'OffRamp': ['Nehmen Sie die Ausfahrt {modifier}', ' auf {road}'],
				'EndOfRoad': ['Fahren Sie {modifier} am Ende der Straße', ' auf {road}'],
				'Onto': 'auf {road}'
			},
			formatOrder: function(n) {
				return n + '.';
			},
			ui: {
				startPlaceholder: 'Start',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Ziel'
			}
		},

		'sv': {
			directions: {
				N: 'norr',
				NE: 'nordost',
				E: 'öst',
				SE: 'sydost',
				S: 'syd',
				SW: 'sydväst',
				W: 'väst',
				NW: 'nordväst',
				SlightRight: 'svagt höger',
				Right: 'höger',
				SharpRight: 'skarpt höger',
				SlightLeft: 'svagt vänster',
				Left: 'vänster',
				SharpLeft: 'skarpt vänster',
				Uturn: 'Vänd'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Åk åt {dir}', ' till {road}'],
				'Continue':
					['Fortsätt {dir}'],
				'SlightRight':
					['Svagt höger', ' till {road}'],
				'Right':
					['Sväng höger', ' till {road}'],
				'SharpRight':
					['Skarpt höger', ' till {road}'],
				'TurnAround':
					['Vänd'],
				'SharpLeft':
					['Skarpt vänster', ' till {road}'],
				'Left':
					['Sväng vänster', ' till {road}'],
				'SlightLeft':
					['Svagt vänster', ' till {road}'],
				'WaypointReached':
					['Viapunkt nådd'],
				'Roundabout':
					['Tag {exitStr} avfarten i rondellen', ' till {road}'],
				'DestinationReached':
					['Framme vid resans mål'],
				'Fork': ['Tag av {modifier}', ' till {road}'],
				'Merge': ['Anslut {modifier} ', ' till {road}'],
				'OnRamp': ['Tag påfarten {modifier}', ' till {road}'],
				'OffRamp': ['Tag avfarten {modifier}', ' till {road}'],
				'EndOfRoad': ['Sväng {modifier} vid vägens slut', ' till {road}'],
				'Onto': 'till {road}'
			},
			formatOrder: function(n) {
				return ['första', 'andra', 'tredje', 'fjärde', 'femte',
					'sjätte', 'sjunde', 'åttonde', 'nionde', 'tionde'
					/* Can't possibly be more than ten exits, can there? */][n - 1];
			},
			ui: {
				startPlaceholder: 'Från',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Till'
			}
		},

		'es': spanish,
		'sp': spanish,
		
		'nl': {
			directions: {
				N: 'noordelijke',
				NE: 'noordoostelijke',
				E: 'oostelijke',
				SE: 'zuidoostelijke',
				S: 'zuidelijke',
				SW: 'zuidewestelijke',
				W: 'westelijke',
				NW: 'noordwestelijke'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Vertrek in {dir} richting', ' de {road} op'],
				'Continue':
					['Ga in {dir} richting', ' de {road} op'],
				'SlightRight':
					['Volg de weg naar rechts', ' de {road} op'],
				'Right':
					['Ga rechtsaf', ' de {road} op'],
				'SharpRight':
					['Ga scherpe bocht naar rechts', ' de {road} op'],
				'TurnAround':
					['Keer om'],
				'SharpLeft':
					['Ga scherpe bocht naar links', ' de {road} op'],
				'Left':
					['Ga linksaf', ' de {road} op'],
				'SlightLeft':
					['Volg de weg naar links', ' de {road} op'],
				'WaypointReached':
					['Aangekomen bij tussenpunt'],
				'Roundabout':
					['Neem de {exitStr} afslag op de rotonde', ' de {road} op'],
				'DestinationReached':
					['Aangekomen op eindpunt'],
			},
			formatOrder: function(n) {
				if (n === 1 || n >= 20) {
					return n + 'ste';
				} else {
					return n + 'de';
				}
			},
			ui: {
				startPlaceholder: 'Vertrekpunt',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Bestemming'
			}
		},
		'fr': {
			directions: {
				N: 'nord',
				NE: 'nord-est',
				E: 'est',
				SE: 'sud-est',
				S: 'sud',
				SW: 'sud-ouest',
				W: 'ouest',
				NW: 'nord-ouest'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Tout droit au {dir}', ' sur {road}'],
				'Continue':
					['Continuer au {dir}', ' sur {road}'],
				'SlightRight':
					['Légèrement à droite', ' sur {road}'],
				'Right':
					['A droite', ' sur {road}'],
				'SharpRight':
					['Complètement à droite', ' sur {road}'],
				'TurnAround':
					['Faire demi-tour'],
				'SharpLeft':
					['Complètement à gauche', ' sur {road}'],
				'Left':
					['A gauche', ' sur {road}'],
				'SlightLeft':
					['Légèrement à gauche', ' sur {road}'],
				'WaypointReached':
					['Point d\'étape atteint'],
				'Roundabout':
					['Au rond-point, prenez la {exitStr} sortie', ' sur {road}'],
				'DestinationReached':
					['Destination atteinte'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Départ',
				viaPlaceholder: 'Intermédiaire {viaNumber}',
				endPlaceholder: 'Arrivée'
			}
		},
		'it': {
			directions: {
				N: 'nord',
				NE: 'nord-est',
				E: 'est',
				SE: 'sud-est',
				S: 'sud',
				SW: 'sud-ovest',
				W: 'ovest',
				NW: 'nord-ovest'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Dritto verso {dir}', ' su {road}'],
				'Continue':
					['Continuare verso {dir}', ' su {road}'],
				'SlightRight':
					['Mantenere la destra', ' su {road}'],
				'Right':
					['A destra', ' su {road}'],
				'SharpRight':
					['Strettamente a destra', ' su {road}'],
				'TurnAround':
					['Fare inversione di marcia'],
				'SharpLeft':
					['Strettamente a sinistra', ' su {road}'],
				'Left':
					['A sinistra', ' sur {road}'],
				'SlightLeft':
					['Mantenere la sinistra', ' su {road}'],
				'WaypointReached':
					['Punto di passaggio raggiunto'],
				'Roundabout':
					['Alla rotonda, prendere la {exitStr} uscita'],
				'DestinationReached':
					['Destinazione raggiunta'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Partenza',
				viaPlaceholder: 'Intermedia {viaNumber}',
				endPlaceholder: 'Destinazione'
			}
		},
		'pt': {
			directions: {
				N: 'norte',
				NE: 'nordeste',
				E: 'leste',
				SE: 'sudeste',
				S: 'sul',
				SW: 'sudoeste',
				W: 'oeste',
				NW: 'noroeste',
				SlightRight: 'curva ligeira a direita',
				Right: 'direita',
				SharpRight: 'curva fechada a direita',
				SlightLeft: 'ligeira a esquerda',
				Left: 'esquerda',
				SharpLeft: 'curva fechada a esquerda',
				Uturn: 'Meia volta'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Siga {dir}', ' na {road}'],
				'Continue':
					['Continue {dir}', ' na {road}'],
				'SlightRight':
					['Curva ligeira a direita', ' na {road}'],
				'Right':
					['Curva a direita', ' na {road}'],
				'SharpRight':
					['Curva fechada a direita', ' na {road}'],
				'TurnAround':
					['Retorne'],
				'SharpLeft':
					['Curva fechada a esquerda', ' na {road}'],
				'Left':
					['Curva a esquerda', ' na {road}'],
				'SlightLeft':
					['Curva ligueira a esquerda', ' na {road}'],
				'WaypointReached':
					['Ponto de interesse atingido'],
				'Roundabout':
					['Pegue a {exitStr} saída na rotatória', ' na {road}'],
				'DestinationReached':
					['Destino atingido'],
				'Fork': ['Na encruzilhada, vire a {modifier}', ' na {road}'],
				'Merge': ['Entre à {modifier}', ' na {road}'],
				'OnRamp': ['Vire {modifier} na rampa', ' na {road}'],
				'OffRamp': ['Entre na rampa na {modifier}', ' na {road}'],
				'EndOfRoad': ['Vire {modifier} no fim da rua', ' na {road}'],
				'Onto': 'na {road}'
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Origem',
				viaPlaceholder: 'Intermédio {viaNumber}',
				endPlaceholder: 'Destino'
			}
		},
		'sk': {
			directions: {
				N: 'sever',
				NE: 'serverovýchod',
				E: 'východ',
				SE: 'juhovýchod',
				S: 'juh',
				SW: 'juhozápad',
				W: 'západ',
				NW: 'serverozápad'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Mierte na {dir}', ' na {road}'],
				'Continue':
					['Pokračujte na {dir}', ' na {road}'],
				'SlightRight':
					['Mierne doprava', ' na {road}'],
				'Right':
					['Doprava', ' na {road}'],
				'SharpRight':
					['Prudko doprava', ' na {road}'],
				'TurnAround':
					['Otočte sa'],
				'SharpLeft':
					['Prudko doľava', ' na {road}'],
				'Left':
					['Doľava', ' na {road}'],
				'SlightLeft':
					['Mierne doľava', ' na {road}'],
				'WaypointReached':
					['Ste v prejazdovom bode.'],
				'Roundabout':
					['Odbočte na {exitStr} výjazde', ' na {road}'],
				'DestinationReached':
					['Prišli ste do cieľa.'],
			},
			formatOrder: function(n) {
				var i = n % 10 - 1,
				suffix = ['.', '.', '.'];

				return suffix[i] ? n + suffix[i] : n + '.';
			},
			ui: {
				startPlaceholder: 'Začiatok',
				viaPlaceholder: 'Cez {viaNumber}',
				endPlaceholder: 'Koniec'
			}
		},
		'el': {
			directions: {
				N: 'βόρεια',
				NE: 'βορειοανατολικά',
				E: 'ανατολικά',
				SE: 'νοτιοανατολικά',
				S: 'νότια',
				SW: 'νοτιοδυτικά',
				W: 'δυτικά',
				NW: 'βορειοδυτικά'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Κατευθυνθείτε {dir}', ' στην {road}'],
				'Continue':
					['Συνεχίστε {dir}', ' στην {road}'],
				'SlightRight':
					['Ελαφρώς δεξιά', ' στην {road}'],
				'Right':
					['Δεξιά', ' στην {road}'],
				'SharpRight':
					['Απότομη δεξιά στροφή', ' στην {road}'],
				'TurnAround':
					['Κάντε αναστροφή'],
				'SharpLeft':
					['Απότομη αριστερή στροφή', ' στην {road}'],
				'Left':
					['Αριστερά', ' στην {road}'],
				'SlightLeft':
					['Ελαφρώς αριστερά', ' στην {road}'],
				'WaypointReached':
					['Φτάσατε στο σημείο αναφοράς'],
				'Roundabout':
					['Ακολουθήστε την {exitStr} έξοδο στο κυκλικό κόμβο', ' στην {road}'],
				'DestinationReached':
					['Φτάσατε στον προορισμό σας'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Αφετηρία',
				viaPlaceholder: 'μέσω {viaNumber}',
				endPlaceholder: 'Προορισμός'
			}
		},
		'ca': {
			directions: {
				N: 'nord',
				NE: 'nord-est',
				E: 'est',
				SE: 'sud-est',
				S: 'sud',
				SW: 'sud-oest',
				W: 'oest',
				NW: 'nord-oest',
				SlightRight: 'lleu gir a la dreta',
				Right: 'dreta',
				SharpRight: 'gir pronunciat a la dreta',
				SlightLeft: 'gir pronunciat a l\'esquerra',
				Left: 'esquerra',
				SharpLeft: 'lleu gir a l\'esquerra',
				Uturn: 'mitja volta'
			},
			instructions: {
				'Head':
					['Recte {dir}', ' sobre {road}'],
				'Continue':
					['Continuar {dir}'],
				'TurnAround':
					['Donar la volta'],
				'WaypointReached':
					['Ha arribat a un punt del camí'],
				'Roundabout':
					['Agafar {exitStr} sortida a la rotonda', ' a {road}'],
				'DestinationReached':
					['Arribada al destí'],
				'Fork': ['A la cruïlla gira a la {modifier}', ' cap a {road}'],
				'Merge': ['Incorpora\'t {modifier}', ' a {road}'],
				'OnRamp': ['Gira {modifier} a la sortida', ' cap a {road}'],
				'OffRamp': ['Pren la sortida {modifier}', ' cap a {road}'],
				'EndOfRoad': ['Gira {modifier} al final de la carretera', ' cap a {road}'],
				'Onto': 'cap a {road}'
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Origen',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Destí'
			},
			units: {
				meters: 'm',
				kilometers: 'km',
				yards: 'yd',
				miles: 'mi',
				hours: 'h',
				minutes: 'min',
				seconds: 's'
			}
		},
		'ru': {
			directions: {
				N: 'север',
				NE: 'северовосток',
				E: 'восток',
				SE: 'юговосток',
				S: 'юг',
				SW: 'югозапад',
				W: 'запад',
				NW: 'северозапад',
				SlightRight: 'плавно направо',
				Right: 'направо',
				SharpRight: 'резко направо',
				SlightLeft: 'плавно налево',
				Left: 'налево',
				SharpLeft: 'резко налево',
				Uturn: 'развернуться'
			},
			instructions: {
				'Head':
					['Начать движение на {dir}', ' по {road}'],
				'Continue':
					['Продолжать движение на {dir}', ' по {road}'],
				'SlightRight':
					['Плавный поворот направо', ' на {road}'],
				'Right':
					['Направо', ' на {road}'],
				'SharpRight':
					['Резкий поворот направо', ' на {road}'],
				'TurnAround':
					['Развернуться'],
				'SharpLeft':
					['Резкий поворот налево', ' на {road}'],
				'Left':
					['Поворот налево', ' на {road}'],
				'SlightLeft':
					['Плавный поворот налево', ' на {road}'],
				'WaypointReached':
					['Точка достигнута'],
				'Roundabout':
					['{exitStr} съезд с кольца', ' на {road}'],
				'DestinationReached':
					['Окончание маршрута'],
				'Fork': ['На развилке поверните {modifier}', ' на {road}'],
				'Merge': ['Перестройтесь {modifier}', ' на {road}'],
				'OnRamp': ['Поверните {modifier} на съезд', ' на {road}'],
				'OffRamp': ['Съезжайте на {modifier}', ' на {road}'],
				'EndOfRoad': ['Поверните {modifier} в конце дороги', ' на {road}'],
				'Onto': 'на {road}'
			},
			formatOrder: function(n) {
				return n + '-й';
			},
			ui: {
				startPlaceholder: 'Начало',
				viaPlaceholder: 'Через {viaNumber}',
				endPlaceholder: 'Конец'
			},
			units: {
				meters: 'м',
				kilometers: 'км',
				yards: 'ярд',
				miles: 'ми',
				hours: 'ч',
				minutes: 'м',
				seconds: 'с'
			}
		},
                
                'pl': {
			directions: {
				N: 'północ',
				NE: 'północny wschód',
				E: 'wschód',
				SE: 'południowy wschód',
				S: 'południe',
				SW: 'południowy zachód',
				W: 'zachód',
				NW: 'północny zachód',
				SlightRight: 'lekko w prawo',
				Right: 'w prawo',
				SharpRight: 'ostro w prawo',
				SlightLeft: 'lekko w lewo',
				Left: 'w lewo',
				SharpLeft: 'ostro w lewo',
				Uturn: 'zawróć'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Kieruj się na {dir}', ' na {road}'],
				'Continue':
					['Jedź dalej przez {dir}'],
				'TurnAround':
					['Zawróć'],
				'WaypointReached':
					['Punkt pośredni'],
				'Roundabout':
					['Wyjedź {exitStr} zjazdem na rondzie', ' na {road}'],
				'DestinationReached':
					['Dojechano do miejsca docelowego'],
				'Fork': ['Na rozwidleniu {modifier}', ' na {road}'],
				'Merge': ['Zjedź {modifier}', ' na {road}'],
				'OnRamp': ['Wjazd {modifier}', ' na {road}'],
				'OffRamp': ['Zjazd {modifier}', ' na {road}'],
				'EndOfRoad': ['Skręć {modifier} na końcu drogi', ' na {road}'],
				'Onto': 'na {road}'
			},
			formatOrder: function(n) {
				return n + '.';
			},
			ui: {
				startPlaceholder: 'Początek',
				viaPlaceholder: 'Przez {viaNumber}',
				endPlaceholder: 'Koniec'
			},
			units: {
				meters: 'm',
				kilometers: 'km',
				yards: 'yd',
				miles: 'mi',
				hours: 'godz',
				minutes: 'min',
				seconds: 's'
			}
		}
	});
})();

;
//# sourceMappingURL=scripts.js.map