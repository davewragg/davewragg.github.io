(function(){var g="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function l(){l=function(){};k.Symbol||(k.Symbol=m)}var n=0;function m(a){return"jscomp_symbol_"+(a||"")+n++}
function p(){l();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&g(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return q(this)}});p=function(){}}function q(a){var b=0;return r(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function r(a){p();a={next:a};a[k.Symbol.iterator]=function(){return this};return a}function t(a){p();l();p();var b=a[Symbol.iterator];return b?b.call(a):q(a)}
function v(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var w=window.Element.prototype,x=w.matches||w.matchesSelector||w.webkitMatchesSelector||w.mozMatchesSelector||w.msMatchesSelector||w.oMatchesSelector;function y(a,b){if(a&&1==a.nodeType&&b){if("string"==typeof b||1==b.nodeType)return a==b||z(a,b);if("length"in b)for(var c=0,d;d=b[c];c++)if(a==d||z(a,d))return!0}return!1}
function z(a,b){if("string"!=typeof b)return!1;if(x)return x.call(a,b);b=a.parentNode.querySelectorAll(b);for(var c=0,d;d=b[c];c++)if(d==a)return!0;return!1}function A(a){for(var b=[];a&&a.parentNode&&1==a.parentNode.nodeType;)a=a.parentNode,b.push(a);return b}
function B(a,b,c){function d(a){var d;if(h.composed&&"function"==typeof a.composedPath)for(var e=a.composedPath(),f=0,u;u=e[f];f++)1==u.nodeType&&y(u,b)&&(d=u);else a:{if((d=a.target)&&1==d.nodeType&&b)for(d=[d].concat(A(d)),e=0;f=d[e];e++)if(y(f,b)){d=f;break a}d=void 0}d&&c.call(d,a,d)}var e=document,h={composed:!0,l:!0},h=void 0===h?{}:h;e.addEventListener(a,d,h.l);return{h:function(){e.removeEventListener(a,d,h.l)}}}
function aa(a){var b={};if(!a||1!=a.nodeType)return b;a=a.attributes;if(!a.length)return{};for(var c=0,d;d=a[c];c++)b[d.name]=d.value;return b}var ba=/:(80|443)$/,C=document.createElement("a"),D={};
function E(a){a=a&&"."!=a?a:location.href;if(D[a])return D[a];C.href=a;if("."==a.charAt(0)||"/"==a.charAt(0))return E(C.href);var b="80"==C.port||"443"==C.port?"":C.port,b="0"==b?"":b,c=C.host.replace(ba,"");return D[a]={hash:C.hash,host:c,hostname:C.hostname,href:C.href,origin:C.origin?C.origin:C.protocol+"//"+c,pathname:"/"==C.pathname.charAt(0)?C.pathname:"/"+C.pathname,port:b,protocol:C.protocol,search:C.search}}var F=[];
function G(a,b){var c=this;this.context=a;this.i=b;this.f=(this.c=/Task$/.test(b))?a.get(b):a[b];this.b=[];this.a=[];this.g=function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];return c.a[c.a.length-1].apply(null,[].concat(v(b)))};this.c?a.set(b,this.g):a[b]=this.g}function H(a,b){a.b.push(b);I(a)}function J(a,b){b=a.b.indexOf(b);-1<b&&(a.b.splice(b,1),0<a.b.length?I(a):a.h())}function I(a){a.a=[];for(var b,c=0;b=a.b[c];c++){var d=a.a[c-1]||a.f.bind(a.context);a.a.push(b(d))}}
G.prototype.h=function(){var a=F.indexOf(this);-1<a&&(F.splice(a,1),this.c?this.context.set(this.i,this.f):this.context[this.i]=this.f)};function K(a,b){var c=F.filter(function(c){return c.context==a&&c.i==b})[0];c||(c=new G(a,b),F.push(c));return c}function L(a,b,c,d,e,h){if("function"==typeof d){var f=c.get("buildHitTask");return{buildHitTask:function(c){c.set(a,null,!0);c.set(b,null,!0);d(c,e,h);f(c)}}}return M({},a,b)}
function N(a,b){var c=aa(a),d={};Object.keys(c).forEach(function(a){if(!a.indexOf(b)&&a!=b+"on"){var e=c[a];"true"==e&&(e=!0);"false"==e&&(e=!1);a=ca(a.slice(b.length));d[a]=e}});return d}function O(a){function b(){c||(c=!0,a())}var c=!1;setTimeout(b,2E3);return b}var M=Object.assign||function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(var d=0,e=c.length;d<e;d++){var h=Object(c[d]),f;for(f in h)Object.prototype.hasOwnProperty.call(h,f)&&(a[f]=h[f])}return a};
function ca(a){return a.replace(/[\-\_]+(\w?)/g,function(a,c){return c.toUpperCase()})}function Q(a,b){var c=window.GoogleAnalyticsObject||"ga";window[c]=window[c]||function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];(window[c].q=window[c].q||[]).push(b)};window.gaDevIds=window.gaDevIds||[];0>window.gaDevIds.indexOf("i5iSjo")&&window.gaDevIds.push("i5iSjo");window[c]("provide",a,b);window.gaplugins=window.gaplugins||{};window.gaplugins[a.charAt(0).toUpperCase()+a.slice(1)]=b}
var R={m:1,v:2,w:3,B:4,o:5,s:6,C:7,D:8,u:9,A:10},S=Object.keys(R).length;function T(a,b){a.set("\x26_av","2.4.1");var c=a.get("\x26_au"),c=parseInt(c||"0",16).toString(2);if(c.length<S)for(var d=S-c.length;d;)c="0"+c,d--;b=S-b;c=c.substr(0,b)+1+c.substr(b+1);a.set("\x26_au",parseInt(c||"0",2).toString(16))}
function U(a,b){var c=this;T(a,R.s);window.addEventListener&&(this.a=M({events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"},b),this.b=a,this.f=this.f.bind(this),this.c={},this.a.events.forEach(function(a){c.c[a]=B(a,c.a.linkSelector,c.f)}))}
U.prototype.f=function(a,b){var c=this;if(this.a.shouldTrackOutboundLink(b,E)){var d=b.getAttribute("href")||b.getAttribute("xlink:href"),e=E(d),e={transport:"beacon",eventCategory:"Outbound Link",eventAction:a.type,eventLabel:e.href},h=M({},this.a.fieldsObj,N(b,this.a.attributePrefix)),f=L(e,h,this.b,this.a.hitFilter,b,a);if(navigator.sendBeacon||"click"!=a.type||"_blank"==b.target||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||1<a.which)this.b.send("event",f);else{var P=function(){window.removeEventListener("click",
P);if(!a.defaultPrevented){a.preventDefault();var b=f.hitCallback;f.hitCallback=O(function(){"function"==typeof b&&b();location.href=d})}c.b.send("event",f)};window.addEventListener("click",P)}}};U.prototype.shouldTrackOutboundLink=function(a,b){a=a.getAttribute("href")||a.getAttribute("xlink:href");b=b(a);return b.hostname!=location.hostname&&"http"==b.protocol.slice(0,4)};U.prototype.remove=function(){var a=this;Object.keys(this.c).forEach(function(b){a.c[b].h()})};Q("outboundLinkTracker",U);
function V(a,b){T(a,R.u);history.pushState&&window.addEventListener&&(this.a=M({shouldTrackUrlChange:this.shouldTrackUrlChange,trackReplaceState:!1,fieldsObj:{},hitFilter:null},b),this.g=a,this.j=location.pathname+location.search,this.c=this.c.bind(this),this.f=this.f.bind(this),this.b=this.b.bind(this),a=this.c,H(K(history,"pushState"),a),a=this.f,H(K(history,"replaceState"),a),window.addEventListener("popstate",this.b))}
V.prototype.c=function(a){var b=this;return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];a.apply(null,[].concat(v(d)));W(b,!0)}};V.prototype.f=function(a){var b=this;return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];a.apply(null,[].concat(v(d)));W(b,!1)}};V.prototype.b=function(){W(this,!0)};
function W(a,b){setTimeout(function(){var c=a.j,d=location.pathname+location.search;c!=d&&a.a.shouldTrackUrlChange.call(a,d,c)&&(a.j=d,a.g.set({page:d,title:document.title}),(b||a.a.trackReplaceState)&&a.g.send("pageview",L({transport:"beacon"},a.a.fieldsObj,a.g,a.a.hitFilter)))},0)}V.prototype.shouldTrackUrlChange=function(a,b){return!(!a||!b)};V.prototype.remove=function(){var a=this.c;J(K(history,"pushState"),a);a=this.f;J(K(history,"replaceState"),a);window.removeEventListener("popstate",this.b)};
Q("urlChangeTracker",V);function X(a,b){T(a,R.m);this.a=M({},b);this.g=a;this.b=this.a.stripQuery&&this.a.queryDimensionIndex?"dimension"+this.a.queryDimensionIndex:null;this.f=this.f.bind(this);this.c=this.c.bind(this);b=this.f;H(K(a,"get"),b);b=this.c;H(K(a,"buildHitTask"),b)}X.prototype.f=function(a){var b=this;return function(c){if("page"==c||c==b.b){var d={location:a("location"),page:a("page")};return Y(b,d)[c]}return a(c)}};
X.prototype.c=function(a){var b=this;return function(c){var d=Y(b,{location:c.get("location"),page:c.get("page")});c.set(d,null,!0);a(c)}};
function Y(a,b){var c=E(b.page||b.location),d=c.pathname;if(a.a.indexFilename){var e=d.split("/");a.a.indexFilename==e[e.length-1]&&(e[e.length-1]="",d=e.join("/"))}"remove"==a.a.trailingSlash?d=d.replace(/\/+$/,""):"add"==a.a.trailingSlash&&(/\.\w+$/.test(d)||"/"==d.substr(-1)||(d+="/"));d={page:d+(a.a.stripQuery?da(a,c.search):c.search)};b.location&&(d.location=b.location);a.b&&(d[a.b]=c.search.slice(1)||"(not set)");return"function"==typeof a.a.urlFieldsFilter?(b=a.a.urlFieldsFilter(d,E),c={page:b.page,
location:b.location},a.b&&(c[a.b]=b[a.b]),c):d}function da(a,b){if(Array.isArray(a.a.queryParamsWhitelist)){var c=[];b.slice(1).split("\x26").forEach(function(b){var d=t(b.split("\x3d"));b=d.next().value;d=d.next().value;-1<a.a.queryParamsWhitelist.indexOf(b)&&d&&c.push([b,d])});return c.length?"?"+c.map(function(a){return a.join("\x3d")}).join("\x26"):""}return""}X.prototype.remove=function(){var a=this.f;J(K(this.g,"get"),a);a=this.c;J(K(this.g,"buildHitTask"),a)};Q("cleanUrlTracker",X);
function Z(a,b){T(a,R.o);window.addEventListener&&(this.a=M({formSelector:"form",shouldTrackOutboundForm:this.shouldTrackOutboundForm,fieldsObj:{},attributePrefix:"ga-"},b),this.b=a,this.c=B("submit",this.a.formSelector,this.f.bind(this)))}
Z.prototype.f=function(a,b){var c={transport:"beacon",eventCategory:"Outbound Form",eventAction:"submit",eventLabel:E(b.action).href};if(this.a.shouldTrackOutboundForm(b,E)){navigator.sendBeacon||(a.preventDefault(),c.hitCallback=O(function(){b.submit()}));var d=M({},this.a.fieldsObj,N(b,this.a.attributePrefix));this.b.send("event",L(c,d,this.b,this.a.hitFilter,b,a))}};
Z.prototype.shouldTrackOutboundForm=function(a,b){a=b(a.action);return a.hostname!=location.hostname&&"http"==a.protocol.slice(0,4)};Z.prototype.remove=function(){this.c.h()};Q("outboundFormTracker",Z);})();
//# sourceMappingURL=autotrack.custom.js.map