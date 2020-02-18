(this["webpackJsonplogin-view"]=this["webpackJsonplogin-view"]||[]).push([[0],{54:function(e,t,a){e.exports=a(65)},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(59),a(13)),i=a(113),s=a(108),u=a(106),m=a(111),d=a(109),p=a(112),b=a(46),g=a.n(b),f=a(28),h=a(107),v=a(101),E=a(103),y=a(104),j=a(44),w=a(105),O=Object(j.a)((function(e){return{error:{color:"#ff0000"}}}));var _=function(e){var t=O();return r.a.createElement("div",{className:t.error},e.error)},S=Object(j.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var k=function(){var e=S(),t=window.location.search,a=new URLSearchParams(t),o=Object(n.useState)(""),c=Object(l.a)(o,2),b=c[0],j=c[1],O=Object(n.useState)(""),k=Object(l.a)(O,2),x=k[0],C=k[1],N=Object(n.useState)(!1),T=Object(l.a)(N,2),U=T[0],I=T[1],W=Object(n.useState)(null==a.get("state")?"":a.get("state")),D=Object(l.a)(W,1)[0],R=Object(n.useState)(null==a.get("client_id")?"":a.get("client_id")),P=Object(l.a)(R,1)[0],V=Object(n.useState)(null==a.get("user_type")?"":a.get("user_type")),q=Object(l.a)(V,1)[0],A=Object(n.useState)(null==a.get("redirect_uri")?"":a.get("redirect_uri")),B=Object(l.a)(A,1)[0],J=Object(n.useState)(""),F=Object(l.a)(J,2),L=F[0],$=F[1],z=Object(n.useState)(null),G=Object(l.a)(z,2),H=G[0],K=G[1],M=Object(n.useState)(null),Q=Object(l.a)(M,2),X=Q[0],Y=Q[1],Z=Object(n.useState)([]),ee=Object(l.a)(Z,2),te=ee[0],ae=ee[1],ne=function(e){e.preventDefault(),console.log("handleAccept is called"),window.location.href=H};return null!==H?(console.log("display consent"),console.log(te),r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:ne},r.a.createElement(f.a,{component:"h1",variant:"h5"},"Consent"),"This application would like to access:",r.a.createElement(h.a,null),r.a.createElement(v.a,{component:"nav","aria-label":"secondary mailbox folders"},r.a.createElement((function(){return r.a.createElement(v.a,{component:"nav","aria-label":"secondary mailbox folders"},te.map((function(e,t){return r.a.createElement(E.a,{button:!0},r.a.createElement(y.a,{key:t,primary:e}))})))}),null)),r.a.createElement(h.a,null),r.a.createElement(s.a,{type:"submit",variant:"contained",onClick:function(e){e.preventDefault(),console.log("redirectUrl = ",H),console.log("fetch url = ",H+"/deny"),fetch(H+"/deny",{credentials:"include"}).then((function(e){if(!e.ok)throw Error(e.statusText);window.location.href=X})).catch((function(e){console.log("error=",e),$(e.toString())}))},className:e.submit},"Deny"),r.a.createElement(s.a,{type:"submit",variant:"contained",color:"primary",onClick:ne,className:e.submit},"Accept"))))):r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(i.a,{className:e.avatar},r.a.createElement(g.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(_,{error:L}),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){console.log("username = "+b+" password = "+x+" remember = "+U),console.log("state = "+D+" clientId = "+P+" userType = "+q+" redirectUri = "+B),e.preventDefault();var t={j_username:b,j_password:x,state:D,client_id:P,user_type:q,redirect_uri:B},a=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");console.log(a),fetch("/oauth2/code",{method:"POST",redirect:"follow",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then((function(e){if(e.ok)return e.json();throw Error(e.statusText)})).then((function(e){console.log(e),K(e.redirectUri),Y(e.denyUri),ae(e.scopes)})).catch((function(e){console.log("error=",e),$(e.toString())}))}},r.a.createElement(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"j_username",label:"User Id",name:"j_username",value:b,autoComplete:"username",autoFocus:!0,onChange:function(e){j(e.target.value)}}),r.a.createElement(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"j_password",value:x,label:"Password",type:"password",id:"j_password",autoComplete:"password",onChange:function(e){C(e.target.value)}}),r.a.createElement(m.a,{name:"state",value:D,type:"hidden",id:"state"}),r.a.createElement(m.a,{name:"client_id",value:P,type:"hidden",id:"client_id"}),r.a.createElement(m.a,{name:"user_type",value:q,type:"hidden",id:"user_type"}),r.a.createElement(m.a,{name:"redirect_uri",value:B,type:"hidden",id:"redirect_uri"}),r.a.createElement(d.a,{control:r.a.createElement(p.a,{value:"remember",color:"primary"}),label:"Remember me",onChange:function(e){I(e.target.value)}}),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(47),C=a(110),N=Object(x.a)({typography:{useNextVariants:!0}});c.a.render(r.a.createElement(C.a,{theme:N},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.57912e35.chunk.js.map