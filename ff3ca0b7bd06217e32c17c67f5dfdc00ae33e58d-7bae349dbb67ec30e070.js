(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[732],{7408:function(e,t,a){"use strict";var r=a(22122),i=a(19756),l=a(75900),o=a.n(l),n=a(67294),s=a(99541),c=["xl","lg","md","sm","xs"],d=n.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,d=e.as,m=void 0===d?"div":d,u=(0,i.Z)(e,["bsPrefix","className","as"]),f=(0,s.vE)(a,"col"),b=[],v=[];return c.forEach((function(e){var t,a,r,i=u[e];if(delete u[e],"object"==typeof i&&null!=i){var l=i.span;t=void 0===l||l,a=i.offset,r=i.order}else t=i;var o="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+f+o:""+f+o+"-"+t),null!=r&&v.push("order"+o+"-"+r),null!=a&&v.push("offset"+o+"-"+a)})),b.length||b.push(f),n.createElement(m,(0,r.Z)({},u,{ref:t,className:o().apply(void 0,[l].concat(b,v))}))}));d.displayName="Col",t.Z=d},53013:function(e,t,a){"use strict";a.d(t,{Z:function(){return z}});var r=a(22122),i=a(19756),l=a(75900),o=a.n(l),n=a(67294),s=(a(7526),n.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,s=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,u=void 0!==m&&m,f=(0,i.Z)(e,["as","className","type","tooltip"]);return n.createElement(l,(0,r.Z)({},f,{ref:t,className:o()(s,d+"-"+(u?"tooltip":"feedback"))}))})));s.displayName="Feedback";var c=s,d=n.createContext({controlId:void 0}),m=a(99541),u=n.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,u=e.type,f=void 0===u?"checkbox":u,b=e.isValid,v=void 0!==b&&b,p=e.isInvalid,h=void 0!==p&&p,y=e.isStatic,x=e.as,N=void 0===x?"input":x,g=(0,i.Z)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),E=(0,n.useContext)(d),w=E.controlId,P=E.custom?[s,"custom-control-input"]:[l,"form-check-input"],k=P[0],C=P[1];return l=(0,m.vE)(k,C),n.createElement(N,(0,r.Z)({},g,{ref:t,type:f,id:a||w,className:o()(c,l,v&&"is-valid",h&&"is-invalid",y&&"position-static")}))}));u.displayName="FormCheckInput";var f=u,b=n.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,c=e.htmlFor,u=(0,i.Z)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=(0,n.useContext)(d),b=f.controlId,v=f.custom?[l,"custom-control-label"]:[a,"form-check-label"],p=v[0],h=v[1];return a=(0,m.vE)(p,h),n.createElement("label",(0,r.Z)({},u,{ref:t,htmlFor:c||b,className:o()(s,a)}))}));b.displayName="FormCheckLabel";var v=b,p=n.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.inline,b=void 0!==u&&u,p=e.disabled,h=void 0!==p&&p,y=e.isValid,x=void 0!==y&&y,N=e.isInvalid,g=void 0!==N&&N,E=e.feedbackTooltip,w=void 0!==E&&E,P=e.feedback,k=e.className,C=e.style,Z=e.title,I=void 0===Z?"":Z,F=e.type,_=void 0===F?"checkbox":F,R=e.label,S=e.children,L=e.custom,M=e.as,V=void 0===M?"input":M,T=(0,i.Z)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),z="switch"===_||L,D=z?[s,"custom-control"]:[l,"form-check"],H=D[0],O=D[1];l=(0,m.vE)(H,O);var j=(0,n.useContext)(d).controlId,A=(0,n.useMemo)((function(){return{controlId:a||j,custom:z}}),[j,z,a]),W=z||null!=R&&!1!==R&&!S,B=n.createElement(f,(0,r.Z)({},T,{type:"switch"===_?"checkbox":_,ref:t,isValid:x,isInvalid:g,isStatic:!W,disabled:h,as:V}));return n.createElement(d.Provider,{value:A},n.createElement("div",{style:C,className:o()(k,l,z&&"custom-"+_,b&&l+"-inline")},S||n.createElement(n.Fragment,null,B,W&&n.createElement(v,{title:I},R),(x||g)&&n.createElement(c,{type:x?"valid":"invalid",tooltip:w},P))))}));p.displayName="FormCheck",p.Input=f,p.Label=v;var h=p,y=n.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,u=e.isValid,f=e.isInvalid,b=e.lang,v=e.as,p=void 0===v?"input":v,h=(0,i.Z)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),y=(0,n.useContext)(d),x=y.controlId,N=y.custom?[s,"custom-file-input"]:[l,"form-control-file"],g=N[0],E=N[1];return l=(0,m.vE)(g,E),n.createElement(p,(0,r.Z)({},h,{ref:t,id:a||x,type:"file",lang:b,className:o()(c,l,u&&"is-valid",f&&"is-invalid")}))}));y.displayName="FormFileInput";var x=y,N=n.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,c=e.htmlFor,u=(0,i.Z)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=(0,n.useContext)(d),b=f.controlId,v=f.custom?[l,"custom-file-label"]:[a,"form-file-label"],p=v[0],h=v[1];return a=(0,m.vE)(p,h),n.createElement("label",(0,r.Z)({},u,{ref:t,htmlFor:c||b,className:o()(s,a),"data-browse":u["data-browse"]}))}));N.displayName="FormFileLabel";var g=N,E=n.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.disabled,f=void 0!==u&&u,b=e.isValid,v=void 0!==b&&b,p=e.isInvalid,h=void 0!==p&&p,y=e.feedbackTooltip,N=void 0!==y&&y,E=e.feedback,w=e.className,P=e.style,k=e.label,C=e.children,Z=e.custom,I=e.lang,F=e["data-browse"],_=e.as,R=void 0===_?"div":_,S=e.inputAs,L=void 0===S?"input":S,M=(0,i.Z)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),V=Z?[s,"custom"]:[l,"form-file"],T=V[0],z=V[1];l=(0,m.vE)(T,z);var D=(0,n.useContext)(d).controlId,H=(0,n.useMemo)((function(){return{controlId:a||D,custom:Z}}),[D,Z,a]),O=null!=k&&!1!==k&&!C,j=n.createElement(x,(0,r.Z)({},M,{ref:t,isValid:v,isInvalid:h,disabled:f,as:L,lang:I}));return n.createElement(d.Provider,{value:H},n.createElement(R,{style:P,className:o()(w,l,Z&&"custom-file")},C||n.createElement(n.Fragment,null,Z?n.createElement(n.Fragment,null,j,O&&n.createElement(g,{"data-browse":F},k)):n.createElement(n.Fragment,null,O&&n.createElement(g,null,k),j),(v||h)&&n.createElement(c,{type:v?"valid":"invalid",tooltip:N},E))))}));E.displayName="FormFile",E.Input=x,E.Label=g;var w=E,P=(a(42473),n.forwardRef((function(e,t){var a,l,s=e.bsPrefix,c=e.bsCustomPrefix,u=e.type,f=e.size,b=e.htmlSize,v=e.id,p=e.className,h=e.isValid,y=void 0!==h&&h,x=e.isInvalid,N=void 0!==x&&x,g=e.plaintext,E=e.readOnly,w=e.custom,P=e.as,k=void 0===P?"input":P,C=(0,i.Z)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),Z=(0,n.useContext)(d).controlId,I=w?[c,"custom"]:[s,"form-control"],F=I[0],_=I[1];if(s=(0,m.vE)(F,_),g)(l={})[s+"-plaintext"]=!0,a=l;else if("file"===u){var R;(R={})[s+"-file"]=!0,a=R}else if("range"===u){var S;(S={})[s+"-range"]=!0,a=S}else if("select"===k&&w){var L;(L={})[s+"-select"]=!0,L[s+"-select-"+f]=f,a=L}else{var M;(M={})[s]=!0,M[s+"-"+f]=f,a=M}return n.createElement(k,(0,r.Z)({},C,{type:u,size:b,ref:t,readOnly:E,id:v||Z,className:o()(p,a,y&&"is-valid",N&&"is-invalid")}))})));P.displayName="FormControl";var k=Object.assign(P,{Feedback:c}),C=n.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.children,c=e.controlId,u=e.as,f=void 0===u?"div":u,b=(0,i.Z)(e,["bsPrefix","className","children","controlId","as"]);a=(0,m.vE)(a,"form-group");var v=(0,n.useMemo)((function(){return{controlId:c}}),[c]);return n.createElement(d.Provider,{value:v},n.createElement(f,(0,r.Z)({},b,{ref:t,className:o()(l,a)}),s))}));C.displayName="FormGroup";var Z=C,I=a(7408),F=n.forwardRef((function(e,t){var a=e.as,l=void 0===a?"label":a,s=e.bsPrefix,c=e.column,u=e.srOnly,f=e.className,b=e.htmlFor,v=(0,i.Z)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),p=(0,n.useContext)(d).controlId;s=(0,m.vE)(s,"form-label");var h="col-form-label";"string"==typeof c&&(h=h+" "+h+"-"+c);var y=o()(f,s,u&&"sr-only",c&&h);return b=b||p,c?n.createElement(I.Z,(0,r.Z)({as:"label",className:y,htmlFor:b},v)):n.createElement(l,(0,r.Z)({ref:t,className:y,htmlFor:b},v))}));F.displayName="FormLabel",F.defaultProps={column:!1,srOnly:!1};var _=F,R=n.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.as,c=void 0===s?"small":s,d=e.muted,u=(0,i.Z)(e,["bsPrefix","className","as","muted"]);return a=(0,m.vE)(a,"form-text"),n.createElement(c,(0,r.Z)({},u,{ref:t,className:o()(l,a,d&&"text-muted")}))}));R.displayName="FormText";var S=R,L=n.forwardRef((function(e,t){return n.createElement(h,(0,r.Z)({},e,{ref:t,type:"switch"}))}));L.displayName="Switch",L.Input=h.Input,L.Label=h.Label;var M=L,V=(0,a(38870).Z)("form-row"),T=n.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,s=e.className,c=e.validated,d=e.as,u=void 0===d?"form":d,f=(0,i.Z)(e,["bsPrefix","inline","className","validated","as"]);return a=(0,m.vE)(a,"form"),n.createElement(u,(0,r.Z)({},f,{ref:t,className:o()(s,c&&"was-validated",l&&a+"-inline")}))}));T.displayName="Form",T.defaultProps={inline:!1},T.Row=V,T.Group=Z,T.Control=k,T.Check=h,T.File=w,T.Switch=M,T.Label=_,T.Text=S;var z=T},25072:function(e,t,a){"use strict";var r=a(67294),i=a(50009),l=a(50208),o=a(28437),n=i.ZP.div.withConfig({displayName:"Header__StyledHeader",componentId:"iju225-0"})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;height:2.2rem;"," color:",";font-size:large;font-weight:normal;"],(function(e){return e.$border?"border-bottom: solid 1px "+e.theme.colors.border+";":""}),(function(e){return e.theme.colors.onSurface})),s=i.ZP.div.withConfig({displayName:"Header__TitleWrapper",componentId:"iju225-1"})(["display:flex;flex-direction:row;align-items:center;> span{display:inline-block;vertical-align:middle;line-height:normal;svg{width:1.2rem;height:1.2rem;margin-right:.4rem;margin-bottom:.2rem;fill:",";}}"],(function(e){return e.theme.colors.onSurface}));t.Z=function(e){var t=e.className,a=e.title,i=e.titleIcon,c=e.withHelp,d=e.onClickHelp,m=e.end,u=e.id,f=e.border;return r.createElement(n,{className:t,$border:f},r.createElement(s,null,r.createElement("span",{id:u},i,a),c&&d&&r.createElement(l.Io,{onClick:d,tooltipText:"Help"},o.by)),m&&r.createElement("div",null,m))}},22776:function(e,t,a){"use strict";a.d(t,{WQ:function(){return p},p2:function(){return x}});var r=a(85061),i=a(67294),l=a(50009),o=a(21407),n=a(90494),s=a(48649),c=a(50033),d=a(25072),m=l.ZP.div.withConfig({displayName:"Modal__ModalContentWrapper",componentId:"o6bkb-0"})(["background-color:",";color:",";position:absolute;width:70%;height:auto;left:0;right:0;top:10%;bottom:auto;margin:auto;@media screen and (max-width:1000px){width:80%;}@media screen and (max-width:768px){width:90%;}padding:1rem;border-radius:.25rem;border:1px solid ",";"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.border})),u=(0,l.ZP)(d.Z).withConfig({displayName:"Modal__ModalHeader",componentId:"o6bkb-1"})(["margin:-1rem;margin-bottom:1rem;padding:.2rem .5rem;background-color:",";span{color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary})),f=l.ZP.span.withConfig({displayName:"Modal__CloseWrapper",componentId:"o6bkb-2"})(["cursor:pointer;font-size:x-large;"]),b=function(e){var t=e.children,a=e.className,r=e.title,l=e.open,c=e.onClose,d=e.ariaLabelledby,b=e.ariaDescribedby;return i.createElement(s.Z,{className:a,open:l,onClose:c,closeAfterTransition:!0,BackdropComponent:o.Z,BackdropProps:{timeout:500},disableEnforceFocus:!0,"aria-labelledby":d,"aria-describedby":b},i.createElement(n.Z,{in:l},i.createElement(m,null,i.createElement(u,{title:r,id:d,end:i.createElement(f,{onClick:c},"×")}),t)))},v=(0,l.ZP)(b).withConfig({displayName:"Modal__StyledScrollableModal",componentId:"o6bkb-3"})(["> div:nth-child(3) > div{max-height:calc(80vh - 2rem);}"]),p=function(e){var t=e.children,a=e.className,r=e.title,l=e.open,o=e.onClose,n=e.ariaLabelledby,s=e.ariaDescribedby;return i.createElement(v,{className:a,title:r,open:l,onClose:o,ariaLabelledby:n,ariaDescribedby:s},i.createElement(c.Z,null,t))},h=l.ZP.div.withConfig({displayName:"Modal__ModalBody",componentId:"o6bkb-4"})(["margin:1rem 0;"]),y=function(e){var t=e.content,a=e.ariaDescribedby;return t.map((function(e,t){return i.createElement(i.Fragment,{key:t},i.createElement(d.Z,{title:e.title,border:!0}),i.createElement(h,null,e.content.map((function(e,t){return i.createElement("p",{key:t,id:a+"_"+t},e)}))))}))},x=function(e){var t=e.title,a=e.content,l=e.open,o=e.onClose,n=e.ariaLabelledby,s=e.ariaDescribedby;return i.createElement(p,{title:t,open:l,onClose:o,ariaLabelledby:n,ariaDescribedby:(0,r.Z)(Array(a.length).keys()).map((function(e){return s+"_"+e})).join(" ")},i.createElement(y,{content:a,ariaDescribedby:s}))};t.ZP=b},50033:function(e,t,a){"use strict";var r=a(50009).ZP.div.withConfig({displayName:"Scrollable",componentId:"sc-1ueymsi-0"})(["overflow:auto;height:100%;scrollbar-width:thin;padding-right:.5rem;margin-right:-.5rem;&::-webkit-scrollbar{width:.4rem;height:.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}));t.Z=r}}]);
//# sourceMappingURL=ff3ca0b7bd06217e32c17c67f5dfdc00ae33e58d-7bae349dbb67ec30e070.js.map