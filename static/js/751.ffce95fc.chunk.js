"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[751],{2751:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var i=t(1686),o=t.n(i),r=t(4942),a=t(1413),s=t(9439),l=t(2791),d=t(3466),p=t(3400),u=t(6151),c=t(9569),m=t(3710),x=t(6599),h=t(6797),f=t(184),v=function(e){var n=e.onSubmit,t=(0,l.useState)((0,a.Z)({},{name:"",email:"",password:""})),i=(0,s.Z)(t,2),o=i[0],v=i[1],g=function(e){var n=e.target,t=n.name,i=n.value;v((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))},Z=(0,l.useState)(!1),b=(0,s.Z)(Z,2),w=b[0],j=b[1],y=(0,l.useState)(!0),S=(0,s.Z)(y,2),P=S[0],C=S[1],M=P?"password":"text";return(0,f.jsxs)(h.l,{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),n((0,a.Z)({},o))},children:[(0,f.jsx)(x.t,{name:"name",type:"text",label:"Your name",value:o.name,onChange:g,required:!0,helperText:"Provide your name",autoComplete:"current"}),(0,f.jsx)(x.t,{name:"email",type:"email",label:"Your email",value:o.email,onChange:g,required:!0,helperText:"Provide the valid email here - example@example.com",autoComplete:"current"}),(0,f.jsx)(x.t,{name:"password",type:M,label:"Password",value:o.password,onChange:g,required:!0,helperText:"The password must be minimum 7 letters AND digits",autoComplete:"current",InputProps:{endAdornment:(0,f.jsx)(d.Z,{position:"end",children:(0,f.jsx)(p.Z,{onMouseDown:function(e){e.preventDefault(),C(!1),j(!0)},onMouseUp:function(e){e.preventDefault(),C(!0),j(!1)},children:w?(0,f.jsx)(c.Z,{}):(0,f.jsx)(m.Z,{})})})}}),(0,f.jsx)(u.Z,{type:"submit",variant:"contained",sx:{marginRight:"auto",marginLeft:"auto",width:"100px"},children:"Register"})]})},g=t(2375),Z=t(9434),b=t(6351),w=t(5822),j=t(3767),y=t(8870),S=t(890),P=function(){var e=(0,Z.I0)(),n=(0,Z.v9)(b.Hn),t=n.status,i=n.message;(0,l.useEffect)((function(){t&&(o().Notify.init({width:"400px",position:"right-top",timeout:5e3}),o().Notify.info(i),o().Notify.warning("Please follow the instructitons under the input fields"),e((0,w.eB)()))}),[t,i,e]);return(0,f.jsxs)(j.Z,{display:"flex",flexDirection:{xs:"column",sm:"column",md:"row"},alignItems:"center",justifyContent:"space-evenly",sx:{padding:{xs:"20px",md:"50px"}},children:[(0,f.jsxs)(y.Z,{sx:{width:{xs:"90%",sm:"60%",md:"30%",lg:"30%"}},children:[(0,f.jsx)(S.Z,{sx:{padding:"5px",textAlign:"center",marginBottom:"40px",fontSize:{xs:"12px",sm:"15px",md:"18px",lg:"18px"},textTransform:"uppercase",color:"#1976d2",borderRadius:"5px",boxShadow:"0px 0px 20px 5px orange",backgroundColor:"white"},component:"h1",children:"Spend time with your friends..."}),(0,f.jsx)(v,{onSubmit:function(n){e((0,w.pt)(n))}})]}),(0,f.jsx)(y.Z,{component:"img",src:g,alt:"register-friends",sx:{width:{xs:"90%",sm:"90%",md:"50%",lg:"50%"},height:"100%",objectFit:"contain",borderRadius:{xs:"50px",sm:"50px",md:"5px",lg:"5px"},boxShadow:"5px 5px 15px 5px #000",marginTop:{xs:"20px",sm:"20px",md:"20px",lg:"0px"}}})]})}},6797:function(e,n,t){t.d(n,{l:function(){return r}});var i,o=t(168),r=t(6088).Z.form(i||(i=(0,o.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 15px;\n  width: 90%;\n  box-shadow: 0px 0px 20px 5px #1976d2;\n  border-radius: 5px;\n\n  @media (min-width: 600px) {\n    width: 60%;\n  }\n"])))},6599:function(e,n,t){t.d(n,{t:function(){return o}});var i=t(1826),o=(0,t(6088).Z)(i.Z)({"& label.Mui-focused":{color:"white",backgroundColor:"orange",border:"1px solid blue"},"& label":{backgroundColor:"white",padding:"0 5px ",borderRadius:"5px"},marginBottom:"40px"})},3710:function(e,n,t){var i=t(9201),o=t(184);n.Z=(0,i.Z)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,n,t){var i=t(9201),o=t(184);n.Z=(0,i.Z)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3466:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(4942),o=t(3366),r=t(7462),a=t(2791),s=t(8182),l=t(4419),d=t(4036),p=t(890),u=t(3840),c=t(2930),m=t(6934),x=t(5878),h=t(1217);function f(e){return(0,h.Z)("MuiInputAdornment",e)}var v,g=(0,x.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Z=t(1402),b=t(184),w=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,d.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,i.Z)({},"&.".concat(g.positionStart,"&:not(.").concat(g.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),y=a.forwardRef((function(e,n){var t=(0,Z.Z)({props:e,name:"MuiInputAdornment"}),i=t.children,m=t.className,x=t.component,h=void 0===x?"div":x,g=t.disablePointerEvents,y=void 0!==g&&g,S=t.disableTypography,P=void 0!==S&&S,C=t.position,M=t.variant,z=(0,o.Z)(t,w),k=(0,c.Z)()||{},E=M;M&&k.variant,k&&!E&&(E=k.variant);var R=(0,r.Z)({},t,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:y,position:C,variant:E}),T=function(e){var n=e.classes,t=e.disablePointerEvents,i=e.hiddenLabel,o=e.position,r=e.size,a=e.variant,s={root:["root",t&&"disablePointerEvents",o&&"position".concat((0,d.Z)(o)),a,i&&"hiddenLabel",r&&"size".concat((0,d.Z)(r))]};return(0,l.Z)(s,f,n)}(R);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(j,(0,r.Z)({as:h,ownerState:R,className:(0,s.Z)(T.root,m),ref:n},z,{children:"string"!==typeof i||P?(0,b.jsxs)(a.Fragment,{children:["start"===C?v||(v=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,b.jsx)(p.Z,{color:"text.secondary",children:i})}))})}))},3767:function(e,n,t){var i=t(9109),o=t(6934),r=t(1402),a=(0,i.Z)({createStyledComponent:(0,o.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,r.Z)({props:e,name:"MuiStack"})}});n.Z=a},2375:function(e,n,t){e.exports=t.p+"static/media/photo-1.1e3911e7991b18f82d94.jpeg"}}]);
//# sourceMappingURL=751.ffce95fc.chunk.js.map