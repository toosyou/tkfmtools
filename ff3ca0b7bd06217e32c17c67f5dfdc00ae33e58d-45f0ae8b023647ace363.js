(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[732],{7408:function(e,a,t){"use strict";var r=t(22122),i=t(19756),l=t(75900),o=t.n(l),s=t(67294),n=t(99541),c=["xl","lg","md","sm","xs"],d=s.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,d=e.as,m=void 0===d?"div":d,u=(0,i.Z)(e,["bsPrefix","className","as"]),f=(0,n.vE)(t,"col"),b=[],v=[];return c.forEach((function(e){var a,t,r,i=u[e];if(delete u[e],"object"==typeof i&&null!=i){var l=i.span;a=void 0===l||l,t=i.offset,r=i.order}else a=i;var o="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+f+o:""+f+o+"-"+a),null!=r&&v.push("order"+o+"-"+r),null!=t&&v.push("offset"+o+"-"+t)})),b.length||b.push(f),s.createElement(m,(0,r.Z)({},u,{ref:a,className:o().apply(void 0,[l].concat(b,v))}))}));d.displayName="Col",a.Z=d},53013:function(e,a,t){"use strict";t.d(a,{Z:function(){return D}});var r=t(22122),i=t(19756),l=t(75900),o=t.n(l),s=t(67294),n=(t(7526),s.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,n=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,u=void 0!==m&&m,f=(0,i.Z)(e,["as","className","type","tooltip"]);return s.createElement(l,(0,r.Z)({},f,{ref:a,className:o()(n,d+"-"+(u?"tooltip":"feedback"))}))})));n.displayName="Feedback";var c=n,d=s.createContext({controlId:void 0}),m=t(99541),u=s.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,c=e.className,u=e.type,f=void 0===u?"checkbox":u,b=e.isValid,v=void 0!==b&&b,p=e.isInvalid,h=void 0!==p&&p,y=e.isStatic,x=e.as,N=void 0===x?"input":x,E=(0,i.Z)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),w=(0,s.useContext)(d),P=w.controlId,C=w.custom?[n,"custom-control-input"]:[l,"form-check-input"],g=C[0],Z=C[1];return l=(0,m.vE)(g,Z),s.createElement(N,(0,r.Z)({},E,{ref:a,type:f,id:t||P,className:o()(c,l,v&&"is-valid",h&&"is-invalid",y&&"position-static")}))}));u.displayName="FormCheckInput";var f=u,b=s.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,c=e.htmlFor,u=(0,i.Z)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=(0,s.useContext)(d),b=f.controlId,v=f.custom?[l,"custom-control-label"]:[t,"form-check-label"],p=v[0],h=v[1];return t=(0,m.vE)(p,h),s.createElement("label",(0,r.Z)({},u,{ref:a,htmlFor:c||b,className:o()(n,t)}))}));b.displayName="FormCheckLabel";var v=b,p=s.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,u=e.inline,b=void 0!==u&&u,p=e.disabled,h=void 0!==p&&p,y=e.isValid,x=void 0!==y&&y,N=e.isInvalid,E=void 0!==N&&N,w=e.feedbackTooltip,P=void 0!==w&&w,C=e.feedback,g=e.className,Z=e.style,k=e.title,I=void 0===k?"":k,F=e.type,M=void 0===F?"checkbox":F,R=e.label,L=e.children,S=e.custom,V=e.as,_=void 0===V?"input":V,z=(0,i.Z)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),D="switch"===M||S,O=D?[n,"custom-control"]:[l,"form-check"],T=O[0],A=O[1];l=(0,m.vE)(T,A);var j=(0,s.useContext)(d).controlId,B=(0,s.useMemo)((function(){return{controlId:t||j,custom:D}}),[j,D,t]),G=D||null!=R&&!1!==R&&!L,W=s.createElement(f,(0,r.Z)({},z,{type:"switch"===M?"checkbox":M,ref:a,isValid:x,isInvalid:E,isStatic:!G,disabled:h,as:_}));return s.createElement(d.Provider,{value:B},s.createElement("div",{style:Z,className:o()(g,l,D&&"custom-"+M,b&&l+"-inline")},L||s.createElement(s.Fragment,null,W,G&&s.createElement(v,{title:I},R),(x||E)&&s.createElement(c,{type:x?"valid":"invalid",tooltip:P},C))))}));p.displayName="FormCheck",p.Input=f,p.Label=v;var h=p,y=s.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,c=e.className,u=e.isValid,f=e.isInvalid,b=e.lang,v=e.as,p=void 0===v?"input":v,h=(0,i.Z)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),y=(0,s.useContext)(d),x=y.controlId,N=y.custom?[n,"custom-file-input"]:[l,"form-control-file"],E=N[0],w=N[1];return l=(0,m.vE)(E,w),s.createElement(p,(0,r.Z)({},h,{ref:a,id:t||x,type:"file",lang:b,className:o()(c,l,u&&"is-valid",f&&"is-invalid")}))}));y.displayName="FormFileInput";var x=y,N=s.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,c=e.htmlFor,u=(0,i.Z)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=(0,s.useContext)(d),b=f.controlId,v=f.custom?[l,"custom-file-label"]:[t,"form-file-label"],p=v[0],h=v[1];return t=(0,m.vE)(p,h),s.createElement("label",(0,r.Z)({},u,{ref:a,htmlFor:c||b,className:o()(n,t),"data-browse":u["data-browse"]}))}));N.displayName="FormFileLabel";var E=N,w=s.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,u=e.disabled,f=void 0!==u&&u,b=e.isValid,v=void 0!==b&&b,p=e.isInvalid,h=void 0!==p&&p,y=e.feedbackTooltip,N=void 0!==y&&y,w=e.feedback,P=e.className,C=e.style,g=e.label,Z=e.children,k=e.custom,I=e.lang,F=e["data-browse"],M=e.as,R=void 0===M?"div":M,L=e.inputAs,S=void 0===L?"input":L,V=(0,i.Z)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),_=k?[n,"custom"]:[l,"form-file"],z=_[0],D=_[1];l=(0,m.vE)(z,D);var O=(0,s.useContext)(d).controlId,T=(0,s.useMemo)((function(){return{controlId:t||O,custom:k}}),[O,k,t]),A=null!=g&&!1!==g&&!Z,j=s.createElement(x,(0,r.Z)({},V,{ref:a,isValid:v,isInvalid:h,disabled:f,as:S,lang:I}));return s.createElement(d.Provider,{value:T},s.createElement(R,{style:C,className:o()(P,l,k&&"custom-file")},Z||s.createElement(s.Fragment,null,k?s.createElement(s.Fragment,null,j,A&&s.createElement(E,{"data-browse":F},g)):s.createElement(s.Fragment,null,A&&s.createElement(E,null,g),j),(v||h)&&s.createElement(c,{type:v?"valid":"invalid",tooltip:N},w))))}));w.displayName="FormFile",w.Input=x,w.Label=E;var P=w,C=(t(42473),s.forwardRef((function(e,a){var t,l,n=e.bsPrefix,c=e.bsCustomPrefix,u=e.type,f=e.size,b=e.htmlSize,v=e.id,p=e.className,h=e.isValid,y=void 0!==h&&h,x=e.isInvalid,N=void 0!==x&&x,E=e.plaintext,w=e.readOnly,P=e.custom,C=e.as,g=void 0===C?"input":C,Z=(0,i.Z)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),k=(0,s.useContext)(d).controlId,I=P?[c,"custom"]:[n,"form-control"],F=I[0],M=I[1];if(n=(0,m.vE)(F,M),E)(l={})[n+"-plaintext"]=!0,t=l;else if("file"===u){var R;(R={})[n+"-file"]=!0,t=R}else if("range"===u){var L;(L={})[n+"-range"]=!0,t=L}else if("select"===g&&P){var S;(S={})[n+"-select"]=!0,S[n+"-select-"+f]=f,t=S}else{var V;(V={})[n]=!0,V[n+"-"+f]=f,t=V}return s.createElement(g,(0,r.Z)({},Z,{type:u,size:b,ref:a,readOnly:w,id:v||k,className:o()(p,t,y&&"is-valid",N&&"is-invalid")}))})));C.displayName="FormControl";var g=Object.assign(C,{Feedback:c}),Z=s.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.children,c=e.controlId,u=e.as,f=void 0===u?"div":u,b=(0,i.Z)(e,["bsPrefix","className","children","controlId","as"]);t=(0,m.vE)(t,"form-group");var v=(0,s.useMemo)((function(){return{controlId:c}}),[c]);return s.createElement(d.Provider,{value:v},s.createElement(f,(0,r.Z)({},b,{ref:a,className:o()(l,t)}),n))}));Z.displayName="FormGroup";var k=Z,I=t(7408),F=s.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,n=e.bsPrefix,c=e.column,u=e.srOnly,f=e.className,b=e.htmlFor,v=(0,i.Z)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),p=(0,s.useContext)(d).controlId;n=(0,m.vE)(n,"form-label");var h="col-form-label";"string"==typeof c&&(h=h+" "+h+"-"+c);var y=o()(f,n,u&&"sr-only",c&&h);return b=b||p,c?s.createElement(I.Z,(0,r.Z)({as:"label",className:y,htmlFor:b},v)):s.createElement(l,(0,r.Z)({ref:a,className:y,htmlFor:b},v))}));F.displayName="FormLabel",F.defaultProps={column:!1,srOnly:!1};var M=F,R=s.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,c=void 0===n?"small":n,d=e.muted,u=(0,i.Z)(e,["bsPrefix","className","as","muted"]);return t=(0,m.vE)(t,"form-text"),s.createElement(c,(0,r.Z)({},u,{ref:a,className:o()(l,t,d&&"text-muted")}))}));R.displayName="FormText";var L=R,S=s.forwardRef((function(e,a){return s.createElement(h,(0,r.Z)({},e,{ref:a,type:"switch"}))}));S.displayName="Switch",S.Input=h.Input,S.Label=h.Label;var V=S,_=(0,t(38870).Z)("form-row"),z=s.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,n=e.className,c=e.validated,d=e.as,u=void 0===d?"form":d,f=(0,i.Z)(e,["bsPrefix","inline","className","validated","as"]);return t=(0,m.vE)(t,"form"),s.createElement(u,(0,r.Z)({},f,{ref:a,className:o()(n,c&&"was-validated",l&&t+"-inline")}))}));z.displayName="Form",z.defaultProps={inline:!1},z.Row=_,z.Group=k,z.Control=g,z.Check=h,z.File=P,z.Switch=V,z.Label=M,z.Text=L;var D=z},42474:function(e,a,t){"use strict";t.d(a,{WQ:function(){return p},p2:function(){return x}});var r=t(85061),i=t(67294),l=t(50009),o=t(21407),s=t(90494),n=t(48649),c=t(17182),d=t(1020),m=l.ZP.div.withConfig({displayName:"MyModal__StyledModal",componentId:"sc-1hhn0ws-0"})(["background-color:",";color:",";position:absolute;width:70%;height:auto;left:0;right:0;top:10%;bottom:auto;margin:auto;@media screen and (max-width:992px){width:80%;}@media screen and (max-width:768px){width:90%;}padding:1rem;border-radius:.25rem;border:1px solid ",";"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.border})),u=(0,l.ZP)(c.Z).withConfig({displayName:"MyModal__ModalHeader",componentId:"sc-1hhn0ws-1"})(["margin:-1rem;margin-bottom:1rem;padding:.2rem .5rem;background-color:",";span{color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary})),f=l.ZP.span.withConfig({displayName:"MyModal__CloseWrapper",componentId:"sc-1hhn0ws-2"})(["cursor:pointer;font-size:x-large;"]),b=function(e){var a=e.children,t=e.className,r=e.title,l=e.open,c=e.onClose,d=e.ariaLabelledby,b=e.ariaDescribedby;return i.createElement(n.Z,{className:t,open:l,onClose:c,closeAfterTransition:!0,BackdropComponent:o.Z,BackdropProps:{timeout:500},disableEnforceFocus:!0,"aria-labelledby":d,"aria-describedby":b},i.createElement(s.Z,{in:l},i.createElement(m,null,i.createElement(u,{title:r,id:d,end:i.createElement(f,{onClick:c},"×")}),a)))},v=(0,l.ZP)(b).withConfig({displayName:"MyModal__StyledScrollableModal",componentId:"sc-1hhn0ws-3"})(["> div:nth-child(3) > div{max-height:calc(80vh - 2rem);}"]),p=function(e){var a=e.children,t=e.className,r=e.title,l=e.open,o=e.onClose,s=e.ariaLabelledby,n=e.ariaDescribedby;return i.createElement(v,{className:t,title:r,open:l,onClose:o,ariaLabelledby:s,ariaDescribedby:n},i.createElement(d.Z,null,a))},h=l.ZP.div.withConfig({displayName:"MyModal__ModalBody",componentId:"sc-1hhn0ws-4"})(["margin:1rem 0;"]),y=function(e){var a=e.content,t=e.ariaDescribedby;return a.map((function(e,a){return i.createElement(i.Fragment,{key:a},i.createElement(c.Z,{title:e.title}),i.createElement(h,null,e.content.map((function(e,a){return i.createElement("p",{key:a,id:t+"_"+a},e)}))))}))},x=function(e){var a=e.title,t=e.content,l=e.open,o=e.onClose,s=e.ariaLabelledby,n=e.ariaDescribedby;return i.createElement(p,{title:a,open:l,onClose:o,ariaLabelledby:s,ariaDescribedby:(0,r.Z)(Array(t.length).keys()).map((function(e){return n+"_"+e})).join(" ")},i.createElement(y,{content:t,ariaDescribedby:n}))};a.ZP=b},1020:function(e,a,t){"use strict";t(67294);var r=t(50009).ZP.div.withConfig({displayName:"ScrollableContainer",componentId:"d2xz5e-0"})(["overflow:auto;height:100%;scrollbar-width:thin;padding-right:.5rem;margin-right:-.5rem;&::-webkit-scrollbar{width:.4rem;height:.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}));a.Z=r}}]);
//# sourceMappingURL=ff3ca0b7bd06217e32c17c67f5dfdc00ae33e58d-45f0ae8b023647ace363.js.map