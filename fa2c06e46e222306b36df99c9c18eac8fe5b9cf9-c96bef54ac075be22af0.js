(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"61uB":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("q1tI"),l=(r=c)&&r.__esModule?r:{default:r};var u={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var r=void 0;return r=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":o(t))&&(t={default:parseInt(t)||2});var n=1/0,r=t.default||2;for(var a in t){var i=parseInt(a);i>0&&e<=i&&i<n&&(n=i,r=t[a])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),r=0;r<n.length;r++){var a=r%e;t[a]||(t[a]=[]),t[a].push(n[r])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,r=void 0===n?{}:n,o=e.columnClassName,i=this.itemsInColumns(),c=100/i.length+"%",u=o;"string"!=typeof u&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===u&&(u="my-masonry-grid_column"));var s=a({},t,r,{style:a({},r.style,{width:c}),className:u});return i.map((function(e,t){return l.default.createElement("div",a({},s,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),r=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(r="my-masonry-grid")),l.default.createElement("div",a({},n,{className:r}),this.renderColumns())}}]),t}(l.default.Component);s.defaultProps=u,t.default=s},A73j:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("61uB"),c=n.n(i),l=Object(o.b)(c.a).withConfig({displayName:"MyMasonry__StyledMasonry",componentId:"crrh7j-0"})(["display:flex;width:auto;margin-left:-1rem;> div{padding-left:1rem;}"]);function u(e){return a.a.createElement(l,{breakpointCols:e.breakpointCols,columnClassName:""},e.children)}},BEMX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("vOnD").b.div.withConfig({displayName:"SwitchableShowcase__ShowcaseContainer",componentId:"sc-1j8bb1e-0"})(["display:",""],(function(e){return e.$hidden?"none":"block"}));function i(e){var t=e.layoutSwitcher,n=e.localLayoutConfig,i=e.items,c=Object(r.useState)({layout:i[0].layout,hasMounted:!1}),l=c[0],u=c[1];if(Object(r.useEffect)((function(){var e=localStorage.getItem(n);u({layout:e||i[0].layout,hasMounted:!0})}),[]),!l.hasMounted)return null;return a.a.createElement(a.a.Fragment,null,a.a.cloneElement(t,{layout:l.layout,handleLayoutChange:function(e){return function(){u((function(t){return Object.assign({},t,{layout:e})})),localStorage.setItem(n,e)}}}),i.map((function(e,t){return a.a.createElement(o,{$hidden:l.layout!==e.layout,key:t},e.content)})))}},"C+47":function(e,t,n){"use strict";n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return T}));var r=n("zLVn"),a=n("q1tI"),o=n.n(a),i=n("vOnD"),c=n("PsDL"),l=n("BEMX"),u=n("A73j"),s=n("9CnA"),m=n("C/1G"),d=n("JrlI"),p=n("9M6+"),f=n("cYtq"),h=n("D7KU"),y=n("ckOl"),b=Object(i.b)(p.a).withConfig({displayName:"CharShowcase__CharImgWrapper",componentId:"sc-1a2axcw-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-end;width:100%;min-width:10rem;height:3.6rem;background-repeat:no-repeat;background-size:6rem 6rem;background-position:0 -1.6rem;"]),g=i.b.div.withConfig({displayName:"CharShowcase__TextWrapper",componentId:"sc-1a2axcw-1"})(["margin-left:0;margin-right:1rem;transition:all 0.3s ease;text-shadow:0 0 1px ",",-2px 0 1px  ",",2px 0 1px  ",",0 -2px 1px ",",0 2px 1px  ",",2px 2px 1px ",",2px -2px 1px ",",-2px 2px 1px ",",-2px -2px 1px ",";"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface})),C=function(e){var t=e.className,n=e.id,r=Object(a.useContext)(h.a).charString;return o.a.createElement(b,{className:t,name:"char_small_"+n+".png",isBackground:!0,alt:""},o.a.createElement(g,null,r.name[n].split(" ").slice(0,-1).join(" ")),o.a.createElement(g,null,r.name[n].split(" ").slice(-1)[0]))},w=i.b.div.withConfig({displayName:"CharShowcase__TagWrapper",componentId:"sc-1a2axcw-2"})(["display:flex;flex-direction:row;"]),v=i.b.div.withConfig({displayName:"CharShowcase__IconWrapper",componentId:"sc-1a2axcw-3"})(["margin-bottom:.1rem;margin-left:.25rem;margin-right:.4rem;> svg{width:1.2rem;fill:",";color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),x=function(e){var t=Object(a.useContext)(h.a).charString,n={attribute:y.c,position:y.B,race:y.D,body:y.d,oppai:y.z,rank:y.E,else:y.j},i=f.map((function(e){var t=e.id,n=e.rarity,a=e.tags;Object(r.a)(e,["id","rarity","tags"]);return Object.assign({id:t,rarity:n},a)}));return f[e.idx].tags.available?o.a.createElement(m.a,{striped:!0},o.a.createElement("tbody",null,Object.entries(i[e.idx]).map((function(e,r){return"id"===e[0]||"rarity"===e[0]||"available"===e[0]||("else"===e[0]?e[1].map((function(a,i){return o.a.createElement("tr",{key:r+i+1},o.a.createElement("td",null,o.a.createElement(w,null,o.a.createElement(v,null,n[e[0]]),t.tags[a])))})):0===e[1].length||o.a.createElement("tr",{key:r},o.a.createElement("td",null,o.a.createElement(w,null,o.a.createElement(v,null,n[e[0]]),t.tags[e[1]]))))})))):o.a.createElement(m.a,{striped:!0},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,t.tagWarnMsg))))},E=Object(i.b)(s.a).withConfig({displayName:"CharShowcase__StyledAccordion",componentId:"sc-1a2axcw-4"})(["&&{&&{margin-bottom:1rem;}border:1px solid ",";border-radius:.25rem;box-shadow:0 0 .15em lightgray;> .MuiAccordionSummary-root{padding:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom:0px solid ",";}> .MuiAccordionSummary-root.Mui-expanded{border-bottom:1px solid ",";}.MuiAccordionSummary-content{display:flex;align-items:center;justify-content:space-between;padding:0;margin:0;}.MuiAccordionDetails-root{margin:0;padding:0;}}"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border})),k=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return o.a.createElement(E,{expanded:n,onChange:function(){return r(!n)},title:e.header,content:e.body})},j=i.b.div.withConfig({displayName:"CharShowcase__LayoutBtnContainer",componentId:"sc-1a2axcw-5"})(["position:absolute;right:0;top:-4rem;@media screen and (max-width:410px){font-size:0;}"]),S=Object(i.b)(c.a).withConfig({displayName:"CharShowcase__StyledBtn",componentId:"sc-1a2axcw-6"})(["padding:.75rem .5rem;svg{width:1.6rem;height:1.6rem;fill:",";}&:hover svg{fill:",";}"],(function(e){return e.$active?e.theme.colors.secondary:e.theme.colors.onSurface}),(function(e){return e.theme.colors.secondary})),O=function(e){var t=Object(a.useContext)(h.a).pageString;return o.a.createElement(j,null,t.enlist.index.layout,o.a.createElement(S,{$active:"Masonry"===e.layout,onClick:e.handleLayoutChange("Masonry")},y.v),o.a.createElement(S,{$active:"Table"===e.layout,onClick:e.handleLayoutChange("Table")},y.H))},_=function(){var e=Object(a.useContext)(h.a).charString;return o.a.createElement(u.a,{breakpointCols:{default:6,1360:5,1200:4,992:3,600:2}},Object.entries(e.name).map((function(e,t){return"nr"===e[0]||o.a.createElement(k,{header:o.a.createElement(C,{id:e[0]}),body:o.a.createElement(x,{idx:t}),key:t})})))},N=Object(i.b)(d.g).withConfig({displayName:"CharShowcase__StyledTh",componentId:"sc-1a2axcw-7"})(["background-color:",";color:",";white-space:nowrap;"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary})),I=Object(i.b)(C).withConfig({displayName:"CharShowcase__CharCardHeader",componentId:"sc-1a2axcw-8"})(["@media screen and (min-width:","px){flex-direction:row;align-items:center;justify-content:flex-start;> div{margin-left:7rem}> div:last-child{margin-left:-.6rem;}}"],(function(e){return e.$textWrapConfig})),M=function(e){var t=Object(a.useContext)(h.a),n=t.userLanguage,r=t.charString,i=function(e){return 0===e?"N":1===e?"R":2===e?"SR":"SSR"},c=function(){return o.a.createElement("thead",null,o.a.createElement("tr",null,Object.entries(r.tagAttributes).map((function(t,n){return o.a.createElement(N,{onClick:function(){return e.requestSort(t[0])},direction:e.getSortDirection(t[0]),key:n},t[1])}))))},l={"zh-TW":900,en:1300},u=function(){return o.a.createElement("tbody",null,e.sortedResult.map((function(e){return e.available?o.a.createElement("tr",{key:e.id},Object.entries(e).map((function(t,a){return"available"===t[0]||("id"===t[0]?o.a.createElement("td",{key:a},o.a.createElement(I,{id:e.id,$textWrapConfig:l[n]})):"rarity"===t[0]?o.a.createElement("td",{key:a},i(t[1])):"else"===t[0]?o.a.createElement("td",{key:a,nowrap:"nowrap"},t[1].map((function(e){return r.tags[e]})).join(", ")):(c=0===t[1].length?"-":r.tags[t[1]],o.a.createElement("td",{key:a,nowrap:"nowrap"},c)));var c}))):o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,o.a.createElement(I,{id:e.id,$textWrapConfig:l[n]})),o.a.createElement("td",null,i(e.rarity)),o.a.createElement("td",null,r.tags[e.attribute]),o.a.createElement("td",null,r.tags[e.position]),o.a.createElement("td",{colSpan:"5"},r.tagWarnMsg))})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,null),o.a.createElement(u,null))},A=Object(i.b)(d.h).withConfig({displayName:"CharShowcase__CharTableWrapper",componentId:"sc-1a2axcw-9"})(["overflow-x:auto;height:calc(100vh - 12rem);"]),D=function(){var e=Object(a.useContext)(h.a).charString,t=f.map((function(e){var t=e.id,n=e.rarity,a=e.tags;Object(r.a)(e,["id","rarity","tags"]);return Object.assign({id:t,rarity:n},a)}));return o.a.createElement(A,null,o.a.createElement(d.f,{sortFunc:function(t,n){t.sort((function(t,r){var a,o;return"else"===n.key?(a=t[n.key].join(""),o=r[n.key].join("")):"name"===n.key?(a=e.name[t.id],o=e.name[r.id]):(a=t[n.key],o=r[n.key]),a<o?"asc"===n.direction?-1:1:a>o?"asc"===n.direction?1:-1:0}))},defaultSortKey:"rarity",result:t,border:!0},o.a.createElement(M,null)))};function T(){return o.a.createElement(l.a,{localLayoutConfig:"enlist-character-layout",layoutSwitcher:o.a.createElement(O,null),items:[{layout:"Masonry",content:o.a.createElement(_,null)},{layout:"Table",content:o.a.createElement(D,null)}]})}},"C/1G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("MBJH"),c=Object(o.b)(i.a).withConfig({displayName:"CardTable__StyledTable",componentId:"sc-1j1dfok-0"})(["font-size:.9rem;color:",";margin:0;> tbody > tr >{td:first-child{padding-left:.75rem;}}"],(function(e){return e.theme.colors.onSurface}));function l(e){var t=e.className,n=e.children,r=e.striped;return a.a.createElement(c,{className:t,striped:r,borderless:!0,size:"sm"},n)}}}]);
//# sourceMappingURL=fa2c06e46e222306b36df99c9c18eac8fe5b9cf9-c96bef54ac075be22af0.js.map