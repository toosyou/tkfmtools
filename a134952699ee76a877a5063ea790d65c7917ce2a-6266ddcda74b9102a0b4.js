(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[463],{43337:function(e,t,n){"use strict";var r=n(22122),o=n(28481),i=n(81253),a=n(67294),s=n(81423),c=n(59355),l=n(19701),u=n(11291);function f(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var p={entering:{opacity:1,transform:f(1)},entered:{opacity:1,transform:"none"}},d=a.forwardRef((function(e,t){var n=e.children,d=e.disableStrictModeCompat,m=void 0!==d&&d,h=e.in,g=e.onEnter,v=e.onEntered,b=e.onEntering,y=e.onExit,w=e.onExited,E=e.onExiting,x=e.style,T=e.timeout,k=void 0===T?"auto":T,O=e.TransitionComponent,Z=void 0===O?s.ZP:O,M=(0,i.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),C=a.useRef(),D=a.useRef(),N=(0,c.Z)(),L=N.unstable_strictMode&&!m,S=a.useRef(null),P=(0,u.Z)(n.ref,t),H=(0,u.Z)(L?S:void 0,P),F=function(e){return function(t,n){if(e){var r=L?[S.current,t]:[t,n],i=(0,o.Z)(r,2),a=i[0],s=i[1];void 0===s?e(a):e(a,s)}}},B=F(b),I=F((function(e,t){(0,l.n)(e);var n,r=(0,l.C)({style:x,timeout:k},{mode:"enter"}),o=r.duration,i=r.delay;"auto"===k?(n=N.transitions.getAutoHeightDuration(e.clientHeight),D.current=n):n=o,e.style.transition=[N.transitions.create("opacity",{duration:n,delay:i}),N.transitions.create("transform",{duration:.666*n,delay:i})].join(","),g&&g(e,t)})),R=F(v),W=F(E),A=F((function(e){var t,n=(0,l.C)({style:x,timeout:k},{mode:"exit"}),r=n.duration,o=n.delay;"auto"===k?(t=N.transitions.getAutoHeightDuration(e.clientHeight),D.current=t):t=r,e.style.transition=[N.transitions.create("opacity",{duration:t,delay:o}),N.transitions.create("transform",{duration:.666*t,delay:o||.333*t})].join(","),e.style.opacity="0",e.style.transform=f(.75),y&&y(e)})),_=F(w);return a.useEffect((function(){return function(){clearTimeout(C.current)}}),[]),a.createElement(Z,(0,r.Z)({appear:!0,in:h,nodeRef:L?S:void 0,onEnter:I,onEntered:R,onEntering:B,onExit:A,onExited:_,onExiting:W,addEndListener:function(e,t){var n=L?e:t;"auto"===k&&(C.current=setTimeout(n,D.current||0))},timeout:"auto"===k?null:k},M),(function(e,t){return a.cloneElement(n,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:f(.75),visibility:"exited"!==e||h?void 0:"hidden"},p[e],x,n.props.style),ref:H},t))}))}));d.muiSupportAuto=!0,t.Z=d},71065:function(e,t,n){"use strict";n.d(t,{ZP:function(){return We}});var r=n(22122),o=n(28481),i=n(81253),a=n(96156),s=n(67294),c=n(73935),l=n(85505),u=n(47643),f=n(37595),p=n(34621),d=n(81664),m=n(43337),h="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,g=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(h&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var v=h&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),g))}};function b(e){return e&&"[object Function]"==={}.toString.call(e)}function y(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function w(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function E(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=y(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+r)?e:E(w(e))}function x(e){return e&&e.referenceNode?e.referenceNode:e}var T=h&&!(!window.MSInputMethodContext||!document.documentMode),k=h&&/MSIE 10/.test(navigator.userAgent);function O(e){return 11===e?T:10===e?k:T||k}function Z(e){if(!e)return document.documentElement;for(var t=O(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===y(n,"position")?Z(n):n:e?e.ownerDocument.documentElement:document.documentElement}function M(e){return null!==e.parentNode?M(e.parentNode):e}function C(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var a,s,c=i.commonAncestorContainer;if(e!==c&&t!==c||r.contains(o))return"BODY"===(s=(a=c).nodeName)||"HTML"!==s&&Z(a.firstElementChild)!==a?Z(c):c;var l=M(e);return l.host?C(l.host,t):C(e,M(t).host)}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var o=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||o;return i[n]}return e[n]}function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=D(t,"top"),o=D(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}function L(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+r+"Width"])}function S(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],O(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function P(e){var t=e.body,n=e.documentElement,r=O(10)&&getComputedStyle(n);return{height:S("Height",t,n,r),width:S("Width",t,n,r)}}var H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function R(e){return I({},e,{right:e.left+e.width,bottom:e.top+e.height})}function W(e){var t={};try{if(O(10)){t=e.getBoundingClientRect();var n=D(e,"top"),r=D(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(f){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?P(e.ownerDocument):{},a=i.width||e.clientWidth||o.width,s=i.height||e.clientHeight||o.height,c=e.offsetWidth-a,l=e.offsetHeight-s;if(c||l){var u=y(e);c-=L(u,"x"),l-=L(u,"y"),o.width-=c,o.height-=l}return R(o)}function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=O(10),o="HTML"===t.nodeName,i=W(e),a=W(t),s=E(e),c=y(t),l=parseFloat(c.borderTopWidth),u=parseFloat(c.borderLeftWidth);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var f=R({top:i.top-a.top-l,left:i.left-a.left-u,width:i.width,height:i.height});if(f.marginTop=0,f.marginLeft=0,!r&&o){var p=parseFloat(c.marginTop),d=parseFloat(c.marginLeft);f.top-=l-p,f.bottom-=l-p,f.left-=u-d,f.right-=u-d,f.marginTop=p,f.marginLeft=d}return(r&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(f=N(f,t)),f}function _(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=A(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:D(n),s=t?0:D(n,"left"),c={top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:o,height:i};return R(c)}function j(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===y(e,"position"))return!0;var n=w(e);return!!n&&j(n)}function z(e){if(!e||!e.parentElement||O())return document.documentElement;for(var t=e.parentElement;t&&"none"===y(t,"transform");)t=t.parentElement;return t||document.documentElement}function U(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=o?z(e):C(e,x(t));if("viewport"===r)i=_(a,o);else{var s=void 0;"scrollParent"===r?"BODY"===(s=E(w(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===r?e.ownerDocument.documentElement:r;var c=A(s,a,o);if("HTML"!==s.nodeName||j(a))i=c;else{var l=P(e.ownerDocument),u=l.height,f=l.width;i.top+=c.top-c.marginTop,i.bottom=u+c.top,i.left+=c.left-c.marginLeft,i.right=f+c.left}}var p="number"==typeof(n=n||0);return i.left+=p?n:n.left||0,i.top+=p?n:n.top||0,i.right-=p?n:n.right||0,i.bottom-=p?n:n.bottom||0,i}function q(e){return e.width*e.height}function V(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=U(n,r,i,o),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},c=Object.keys(s).map((function(e){return I({key:e},s[e],{area:q(s[e])})})).sort((function(e,t){return t.area-e.area})),l=c.filter((function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight})),u=l.length>0?l[0].key:c[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function $(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=r?z(t):C(t,x(n));return A(n,o,r)}function Y(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function G(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function K(e,t,n){n=n.split("-")[0];var r=Y(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",c=i?"height":"width",l=i?"width":"height";return o[a]=t[a]+t[c]/2-r[c]/2,o[s]=n===s?t[s]-r[l]:t[G(s)],o}function X(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function J(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var r=X(e,(function(e){return e[t]===n}));return e.indexOf(r)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&b(n)&&(t.offsets.popper=R(t.offsets.popper),t.offsets.reference=R(t.offsets.reference),t=n(t,e))})),t}function Q(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=$(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=V(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=K(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=J(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function ee(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function te(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var o=t[r],i=o?""+o+n:e;if(void 0!==document.body.style[i])return i}return null}function ne(){return this.state.isDestroyed=!0,ee(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[te("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function re(e){var t=e.ownerDocument;return t?t.defaultView:window}function oe(e,t,n,r){var o="BODY"===e.nodeName,i=o?e.ownerDocument.defaultView:e;i.addEventListener(t,n,{passive:!0}),o||oe(E(i.parentNode),t,n,r),r.push(i)}function ie(e,t,n,r){n.updateBound=r,re(e).addEventListener("resize",n.updateBound,{passive:!0});var o=E(e);return oe(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function ae(){this.state.eventsEnabled||(this.state=ie(this.reference,this.options,this.state,this.scheduleUpdate))}function se(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,re(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function ce(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function le(e,t){Object.keys(t).forEach((function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&ce(t[n])&&(r="px"),e.style[n]=t[n]+r}))}var ue=h&&/Firefox/i.test(navigator.userAgent);function fe(e,t,n){var r=X(e,(function(e){return e.name===t})),o=!!r&&e.some((function(e){return e.name===n&&e.enabled&&e.order<r.order}));if(!o){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}var pe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],de=pe.slice(3);function me(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=de.indexOf(e),r=de.slice(n+1).concat(de.slice(0,n));return t?r.reverse():r}var he="flip",ge="clockwise",ve="counterclockwise";function be(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map((function(e){return e.trim()})),s=a.indexOf(X(a,(function(e){return-1!==e.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,l=-1!==s?[a.slice(0,s).concat([a[s].split(c)[0]]),[a[s].split(c)[1]].concat(a.slice(s+1))]:[a];return(l=l.map((function(e,r){var o=(1===r?!i:i)?"height":"width",a=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2];if(!i)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}return R(s)[t]/100*i}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;return i}(e,o,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,r){ce(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))}))})),o}var ye={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),c=s?"left":"top",l=s?"width":"height",u={start:B({},c,i[c]),end:B({},c,i[c]+i[l]-a[l])};e.offsets.popper=I({},a,u[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,r=e.placement,o=e.offsets,i=o.popper,a=o.reference,s=r.split("-")[0],c=void 0;return c=ce(+n)?[+n,0]:be(n,i,a,s),"left"===s?(i.top+=c[0],i.left-=c[1]):"right"===s?(i.top+=c[0],i.left+=c[1]):"top"===s?(i.left+=c[0],i.top-=c[1]):"bottom"===s&&(i.left+=c[0],i.top+=c[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||Z(e.instance.popper);e.instance.reference===n&&(n=Z(n));var r=te("transform"),o=e.instance.popper.style,i=o.top,a=o.left,s=o[r];o.top="",o.left="",o[r]="";var c=U(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);o.top=i,o.left=a,o[r]=s,t.boundaries=c;var l=t.priority,u=e.offsets.popper,f={primary:function(e){var n=u[e];return u[e]<c[e]&&!t.escapeWithReference&&(n=Math.max(u[e],c[e])),B({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=u[n];return u[e]>c[e]&&!t.escapeWithReference&&(r=Math.min(u[n],c[e]-("right"===e?u.width:u.height))),B({},n,r)}};return l.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=I({},u,f[t](e))})),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",c=a?"left":"top",l=a?"width":"height";return n[s]<i(r[c])&&(e.offsets.popper[c]=i(r[c])-n[l]),n[c]>i(r[s])&&(e.offsets.popper[c]=i(r[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!fe(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],i=e.offsets,a=i.popper,s=i.reference,c=-1!==["left","right"].indexOf(o),l=c?"height":"width",u=c?"Top":"Left",f=u.toLowerCase(),p=c?"left":"top",d=c?"bottom":"right",m=Y(r)[l];s[d]-m<a[f]&&(e.offsets.popper[f]-=a[f]-(s[d]-m)),s[f]+m>a[d]&&(e.offsets.popper[f]+=s[f]+m-a[d]),e.offsets.popper=R(e.offsets.popper);var h=s[f]+s[l]/2-m/2,g=y(e.instance.popper),v=parseFloat(g["margin"+u]),b=parseFloat(g["border"+u+"Width"]),w=h-e.offsets.popper[f]-v-b;return w=Math.max(Math.min(a[l]-m,w),0),e.arrowElement=r,e.offsets.arrow=(B(n={},f,Math.round(w)),B(n,p,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(ee(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=U(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],o=G(r),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case he:a=[r,o];break;case ge:a=me(r);break;case ve:a=me(r,!0);break;default:a=t.behavior}return a.forEach((function(s,c){if(r!==s||a.length===c+1)return e;r=e.placement.split("-")[0],o=G(r);var l=e.offsets.popper,u=e.offsets.reference,f=Math.floor,p="left"===r&&f(l.right)>f(u.left)||"right"===r&&f(l.left)<f(u.right)||"top"===r&&f(l.bottom)>f(u.top)||"bottom"===r&&f(l.top)<f(u.bottom),d=f(l.left)<f(n.left),m=f(l.right)>f(n.right),h=f(l.top)<f(n.top),g=f(l.bottom)>f(n.bottom),v="left"===r&&d||"right"===r&&m||"top"===r&&h||"bottom"===r&&g,b=-1!==["top","bottom"].indexOf(r),y=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&m||!b&&"start"===i&&h||!b&&"end"===i&&g),w=!!t.flipVariationsByContent&&(b&&"start"===i&&m||b&&"end"===i&&d||!b&&"start"===i&&g||!b&&"end"===i&&h),E=y||w;(p||v||E)&&(e.flipped=!0,(p||v)&&(r=a[c+1]),E&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=I({},e.offsets.popper,K(e.instance.popper,e.offsets.reference,e.placement)),e=J(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=i[n]-(s?o[a?"width":"height"]:0),e.placement=G(t),e.offsets.popper=R(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!fe(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=X(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=X(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=Z(e.instance.popper),c=W(s),l={position:o.position},u=function(e,t){var n=e.offsets,r=n.popper,o=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},c=i(o.width),l=i(r.width),u=-1!==["left","right"].indexOf(e.placement),f=-1!==e.placement.indexOf("-"),p=t?u||f||c%2==l%2?i:a:s,d=t?i:s;return{left:p(c%2==1&&l%2==1&&!f&&t?r.left-1:r.left),top:d(r.top),bottom:d(r.bottom),right:p(r.right)}}(e,window.devicePixelRatio<2||!ue),f="bottom"===n?"top":"bottom",p="right"===r?"left":"right",d=te("transform"),m=void 0,h=void 0;if(h="bottom"===f?"HTML"===s.nodeName?-s.clientHeight+u.bottom:-c.height+u.bottom:u.top,m="right"===p?"HTML"===s.nodeName?-s.clientWidth+u.right:-c.width+u.right:u.left,a&&d)l[d]="translate3d("+m+"px, "+h+"px, 0)",l[f]=0,l[p]=0,l.willChange="transform";else{var g="bottom"===f?-1:1,v="right"===p?-1:1;l[f]=h*g,l[p]=m*v,l.willChange=f+", "+p}var b={"x-placement":e.placement};return e.attributes=I({},b,e.attributes),e.styles=I({},l,e.styles),e.arrowStyles=I({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return le(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&le(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,o){var i=$(o,t,e,n.positionFixed),a=V(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),le(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},we=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};H(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=v(this.update.bind(this)),this.options=I({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(I({},e.Defaults.modifiers,o.modifiers)).forEach((function(t){r.options.modifiers[t]=I({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return I({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&b(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return F(e,[{key:"update",value:function(){return Q.call(this)}},{key:"destroy",value:function(){return ne.call(this)}},{key:"enableEventListeners",value:function(){return ae.call(this)}},{key:"disableEventListeners",value:function(){return se.call(this)}}]),e}();we.Utils=("undefined"!=typeof window?window:n.g).PopperUtils,we.placements=pe,we.Defaults=ye;var Ee=we,xe=n(4427),Te=n(8590),ke=n(88231),Oe=n(71474),Ze=n(11291);function Me(e){return"function"==typeof e?e():e}var Ce="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,De={},Ne=s.forwardRef((function(e,t){var n=e.anchorEl,o=e.children,a=e.container,c=e.disablePortal,l=void 0!==c&&c,u=e.keepMounted,f=void 0!==u&&u,p=e.modifiers,d=e.open,m=e.placement,h=void 0===m?"bottom":m,g=e.popperOptions,v=void 0===g?De:g,b=e.popperRef,y=e.style,w=e.transition,E=void 0!==w&&w,x=(0,i.Z)(e,["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"]),T=s.useRef(null),k=(0,Ze.Z)(T,t),O=s.useRef(null),Z=(0,Ze.Z)(O,b),M=s.useRef(Z);Ce((function(){M.current=Z}),[Z]),s.useImperativeHandle(b,(function(){return O.current}),[]);var C=s.useState(!0),D=C[0],N=C[1],L=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(h,(0,xe.Z)()),S=s.useState(L),P=S[0],H=S[1];s.useEffect((function(){O.current&&O.current.update()}));var F=s.useCallback((function(){if(T.current&&n&&d){O.current&&(O.current.destroy(),M.current(null));var e=function(e){H(e.placement)},t=(Me(n),new Ee(Me(n),T.current,(0,r.Z)({placement:L},v,{modifiers:(0,r.Z)({},l?{}:{preventOverflow:{boundariesElement:"window"}},p,v.modifiers),onCreate:(0,ke.Z)(e,v.onCreate),onUpdate:(0,ke.Z)(e,v.onUpdate)})));M.current(t)}}),[n,l,p,d,L,v]),B=s.useCallback((function(e){(0,Oe.Z)(k,e),F()}),[k,F]),I=function(){O.current&&(O.current.destroy(),M.current(null))};if(s.useEffect((function(){return function(){I()}}),[]),s.useEffect((function(){d||E||I()}),[d,E]),!f&&!d&&(!E||D))return null;var R={placement:P};return E&&(R.TransitionProps={in:d,onEnter:function(){N(!1)},onExited:function(){N(!0),I()}}),s.createElement(Te.Z,{disablePortal:l,container:a},s.createElement("div",(0,r.Z)({ref:B,role:"tooltip"},x,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:d||!f||E?null:"none"},y)}),"function"==typeof o?o(R):o))})),Le=n(15126),Se=n(64095),Pe=n(12933),He=n(59355);function Fe(e){return Math.round(1e5*e)/1e5}var Be=!1,Ie=null;var Re=s.forwardRef((function(e,t){var n=e.arrow,a=void 0!==n&&n,f=e.children,p=e.classes,h=e.disableFocusListener,g=void 0!==h&&h,v=e.disableHoverListener,b=void 0!==v&&v,y=e.disableTouchListener,w=void 0!==y&&y,E=e.enterDelay,x=void 0===E?100:E,T=e.enterNextDelay,k=void 0===T?0:T,O=e.enterTouchDelay,Z=void 0===O?700:O,M=e.id,C=e.interactive,D=void 0!==C&&C,N=e.leaveDelay,L=void 0===N?0:N,S=e.leaveTouchDelay,P=void 0===S?1500:S,H=e.onClose,F=e.onOpen,B=e.open,I=e.placement,R=void 0===I?"bottom":I,W=e.PopperComponent,A=void 0===W?Ne:W,_=e.PopperProps,j=e.title,z=e.TransitionComponent,U=void 0===z?m.Z:z,q=e.TransitionProps,V=(0,i.Z)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),$=(0,He.Z)(),Y=s.useState(),G=Y[0],K=Y[1],X=s.useState(null),J=X[0],Q=X[1],ee=s.useRef(!1),te=s.useRef(),ne=s.useRef(),re=s.useRef(),oe=s.useRef(),ie=(0,Pe.Z)({controlled:B,default:!1,name:"Tooltip",state:"open"}),ae=(0,o.Z)(ie,2),se=ae[0],ce=ae[1],le=se,ue=(0,Le.Z)(M);s.useEffect((function(){return function(){clearTimeout(te.current),clearTimeout(ne.current),clearTimeout(re.current),clearTimeout(oe.current)}}),[]);var fe=function(e){clearTimeout(Ie),Be=!0,ce(!0),F&&F(e)},pe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=f.props;"mouseover"===t.type&&n.onMouseOver&&e&&n.onMouseOver(t),ee.current&&"touchstart"!==t.type||(G&&G.removeAttribute("title"),clearTimeout(ne.current),clearTimeout(re.current),x||Be&&k?(t.persist(),ne.current=setTimeout((function(){fe(t)}),Be?k:x)):fe(t))}},de=(0,Se.Z)(),me=de.isFocusVisible,he=de.onBlurVisible,ge=de.ref,ve=s.useState(!1),be=ve[0],ye=ve[1],we=function(){be&&(ye(!1),he())},Ee=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){G||K(t.currentTarget),me(t)&&(ye(!0),pe()(t));var n=f.props;n.onFocus&&e&&n.onFocus(t)}},xe=function(e){clearTimeout(Ie),Ie=setTimeout((function(){Be=!1}),800+L),ce(!1),H&&H(e),clearTimeout(te.current),te.current=setTimeout((function(){ee.current=!1}),$.transitions.duration.shortest)},Te=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=f.props;"blur"===t.type&&(n.onBlur&&e&&n.onBlur(t),we()),"mouseleave"===t.type&&n.onMouseLeave&&t.currentTarget===G&&n.onMouseLeave(t),clearTimeout(ne.current),clearTimeout(re.current),t.persist(),re.current=setTimeout((function(){xe(t)}),L)}},ke=function(e){ee.current=!0;var t=f.props;t.onTouchStart&&t.onTouchStart(e)},Me=(0,Ze.Z)(K,t),Ce=(0,Ze.Z)(ge,Me),De=s.useCallback((function(e){(0,Oe.Z)(Ce,c.findDOMNode(e))}),[Ce]),Fe=(0,Ze.Z)(f.ref,De);""===j&&(le=!1);var Re=!le&&!b,We=(0,r.Z)({"aria-describedby":le?ue:null,title:Re&&"string"==typeof j?j:null},V,f.props,{className:(0,l.Z)(V.className,f.props.className),onTouchStart:ke,ref:Fe}),Ae={};w||(We.onTouchStart=function(e){ke(e),clearTimeout(re.current),clearTimeout(te.current),clearTimeout(oe.current),e.persist(),oe.current=setTimeout((function(){pe()(e)}),Z)},We.onTouchEnd=function(e){f.props.onTouchEnd&&f.props.onTouchEnd(e),clearTimeout(oe.current),clearTimeout(re.current),e.persist(),re.current=setTimeout((function(){xe(e)}),P)}),b||(We.onMouseOver=pe(),We.onMouseLeave=Te(),D&&(Ae.onMouseOver=pe(!1),Ae.onMouseLeave=Te(!1))),g||(We.onFocus=Ee(),We.onBlur=Te(),D&&(Ae.onFocus=Ee(!1),Ae.onBlur=Te(!1)));var _e=s.useMemo((function(){return(0,u.Z)({popperOptions:{modifiers:{arrow:{enabled:Boolean(J),element:J}}}},_)}),[J,_]);return s.createElement(s.Fragment,null,s.cloneElement(f,We),s.createElement(A,(0,r.Z)({className:(0,l.Z)(p.popper,D&&p.popperInteractive,a&&p.popperArrow),placement:R,anchorEl:G,open:!!G&&le,id:We["aria-describedby"],transition:!0},Ae,_e),(function(e){var t=e.placement,n=e.TransitionProps;return s.createElement(U,(0,r.Z)({timeout:$.transitions.duration.shorter},n,q),s.createElement("div",{className:(0,l.Z)(p.tooltip,p["tooltipPlacement".concat((0,d.Z)(t.split("-")[0]))],ee.current&&p.touch,a&&p.tooltipArrow)},j,a?s.createElement("span",{className:p.arrow,ref:Q}):null))})))})),We=(0,p.Z)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:(0,f.U1)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(Fe(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,f.U1)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(Fe(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:(0,a.Z)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:(0,a.Z)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:(0,a.Z)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:(0,a.Z)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(Re)},15126:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=r.useState(e),n=t[0],o=t[1],i=e||n;return r.useEffect((function(){null==n&&o("mui-".concat(Math.round(1e5*Math.random())))}),[n]),i}},47378:function(e,t,n){"use strict";var r=n(67294),o=n(35414),i=n(93670);t.Z=function(e){var t=e.title,n=e.description,a=e.path,s=(0,i.ZK)(),c=s.isDefault,l=s.userLanguage,u="/"===a?"":a.split("/").slice(0,-1).join("_");return r.createElement(o.q,null,r.createElement("meta",{name:"title",content:t}),r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"twitter:title",content:t}),r.createElement("meta",{property:"twitter:description",content:n}),r.createElement("meta",{property:"og:url",content:"https://purindaisuki.github.io/tkfmtools"+(c?"":"/"+l)+a}),r.createElement("meta",{property:"og:image",content:"https://purindaisuki.github.io/tkfmtools/website_preview"+u+(c?"":"_"+l)+".png"}),r.createElement("meta",{property:"twitter:url",content:"https://purindaisuki.github.io/tkfmtools"+(c?"":"/"+l)+a}),r.createElement("meta",{property:"twitter:image",content:"https://purindaisuki.github.io/tkfmtools/website_preview"+u+(c?"":"_"+l)+".png"}),r.createElement("title",{lang:l},t))}},17182:function(e,t,n){"use strict";var r=n(67294),o=n(50009),i=n(27859),a=n(28437),s=o.ZP.div.withConfig({displayName:"MyHeader__StyledHeader",componentId:"sc-1smeadm-0"})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;height:2.2rem;border-bottom:solid 1px ",";color:",";font-size:large;font-weight:normal;"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.onSurface})),c=o.ZP.div.withConfig({displayName:"MyHeader__TitleWrapper",componentId:"sc-1smeadm-1"})(["display:flex;flex-direction:row;align-items:center;> span{display:inline-block;vertical-align:middle;line-height:normal;svg{width:1.2rem;height:1.2rem;margin-right:.4rem;margin-bottom:.2rem;fill:",";}}"],(function(e){return e.theme.colors.onSurface}));t.Z=function(e){var t=e.className,n=e.title,o=e.titleIcon,l=e.withHelp,u=e.onClickHelp,f=e.end,p=e.id;return r.createElement(s,{className:t},r.createElement(c,null,r.createElement("span",{id:p},o,n),l&&u&&r.createElement(i.Io,{onClick:u,tooltipText:"Help"},a.by)),f&&r.createElement("div",null,f))}},27859:function(e,t,n){"use strict";n.d(t,{j3:function(){return O},Io:function(){return E},ZP:function(){return Z}});var r=n(67294),o=n(50009),i=n(22122),a=n(81253),s=n(85505),c=n(34621),l=n(81664),u=44,f=r.forwardRef((function(e,t){var n=e.classes,o=e.className,c=e.color,f=void 0===c?"primary":c,p=e.disableShrink,d=void 0!==p&&p,m=e.size,h=void 0===m?40:m,g=e.style,v=e.thickness,b=void 0===v?3.6:v,y=e.value,w=void 0===y?0:y,E=e.variant,x=void 0===E?"indeterminate":E,T=(0,a.Z)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),k={},O={},Z={};if("determinate"===x||"static"===x){var M=2*Math.PI*((u-b)/2);k.strokeDasharray=M.toFixed(3),Z["aria-valuenow"]=Math.round(w),k.strokeDashoffset="".concat(((100-w)/100*M).toFixed(3),"px"),O.transform="rotate(-90deg)"}return r.createElement("div",(0,i.Z)({className:(0,s.Z)(n.root,o,"inherit"!==f&&n["color".concat((0,l.Z)(f))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[x]),style:(0,i.Z)({width:h,height:h},O,g),ref:t,role:"progressbar"},Z,T),r.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(u," ").concat(u)},r.createElement("circle",{className:(0,s.Z)(n.circle,d&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[x]),style:k,cx:u,cy:u,r:(u-b)/2,fill:"none",strokeWidth:b})))})),p=(0,c.Z)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(f),d=n(23729),m=n(71065),h=n(93670),g=n(28437),v=o.ZP.span.withConfig({displayName:"MyIconButton__TextWrapper",componentId:"sc-1giquey-0"})(["font-size:small;"]),b=(0,o.ZP)(d.Z).withConfig({displayName:"MyIconButton__StyledIconButton",componentId:"sc-1giquey-1"})(["padding:.75rem .5rem;svg{width:1.6rem;height:1.6rem;fill:",";}&:hover{box-shadow:inset 0 0 10rem 10rem ",";svg{fill:",";}}"],(function(e){return e.$active?e.theme.colors.secondary:e.theme.colors.onSurface}),(function(e){return e.theme.colors.shadow+"33"}),(function(e){return e.theme.colors.secondary})),y=function(e){var t=e.children,n=e.className,o=e.tooltipText,i=e.onClick,a=e.dataHtml2canvasIgnore;return r.createElement(m.ZP,{title:r.createElement(v,null,o)},r.createElement(b,{"aria-label":o,onClick:i,className:n,"data-html2canvas-ignore":a?"true":"false"},t))},w=(0,o.ZP)(y).withConfig({displayName:"MyIconButton__StyledHeaderIconButton",componentId:"sc-1giquey-2"})(["&&{padding:.4rem;svg{width:1.4rem;height:1.4rem;}}"]),E=function(e){var t=e.children,n=e.className,o=e.tooltipText,i=e.onClick;return r.createElement(w,{tooltipText:o,onClick:i,className:n},t)},x={"zh-TW":"匯出成圖片",en:"Export as an image"},T=(0,o.ZP)(y).withConfig({displayName:"MyIconButton__StyledExportIcon",componentId:"sc-1giquey-3"})(["&&&{"," svg{","}}"],(function(e){return e.$isLoading?"background-color: "+e.theme.colors.dropdownHover+";":""}),(function(e){return e.$isLoading?"fill: "+e.theme.colors.shadow+";":""})),k=(0,o.ZP)(p).withConfig({displayName:"MyIconButton__StyledSpinner",componentId:"sc-1giquey-4"})(["position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;color:",";"],(function(e){return e.theme.colors.blue})),O=function(e){var t=e.className,n=e.onClick,o=e.isLoading,i=(0,h.ZK)().userLanguage;return r.createElement(T,{className:t,onClick:n,disableFocusRipple:!0,tooltipText:x[i],$isLoading:o,dataHtml2canvasIgnore:!0},g.Hy,o&&r.createElement(k,{size:24,thickness:6}))},Z=y}}]);
//# sourceMappingURL=a134952699ee76a877a5063ea790d65c7917ce2a-6266ddcda74b9102a0b4.js.map