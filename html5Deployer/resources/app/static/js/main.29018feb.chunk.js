(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/bosch_logo.12c077f3.jpg"},37:function(e,t,a){e.exports=a(71)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(33),c=a.n(o),r=(a(42),a(12)),i=a(13),s=a(17),u=a(15),m=a(10),d=a(2),p=(a(43),a(34)),E=a.n(p),f=(a(44),Object(d.f)((function(e){var t=!1;t="/"===e.location.pathname||"/signup"===e.location.pathname;var a=l.a.createElement("h3",null,"Welcome ",localStorage.getItem("name")),n=l.a.createElement("div",{className:"signup"},l.a.createElement(m.b,{className:"h3",to:{pathname:"/"}},"Sign in"),l.a.createElement(m.b,{className:"h3",to:{pathname:"/signup"}},"Sign up"));return l.a.createElement("header",null,l.a.createElement("img",{src:E.a,alt:"Bosch Logo"}),l.a.createElement("h1",null,"Forum Feed"),t?n:a)}))),h=(a(50),function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Footer"))}),g=a(16),v=a(4),b=a.n(v),y=(a(68),function(e){var t=localStorage.getItem("token");b.a.defaults.headers.common.Authorization=t;var a=Object(n.useState)(!1),o=Object(g.a)(a,2),c=o[0],r=o[1],i="",s="",u="",m=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"E-mail/Username "),l.a.createElement("input",{disabled:c,id:"email",type:"text"}),c?null:l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){i=document.getElementById("email").value,b.a.get("/node/user/auth/otp?user="+i).then((function(e){r(!0),alert(e.data.msg)})).catch((function(e){console.log(e)}))}},"Get OTP")),l.a.createElement("div",{className:"clear"})),d=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"OTP:"),l.a.createElement("input",{type:"text",id:"otp",placeholder:"Enter your OTP"}),l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){var t=document.getElementById("email").value;s=document.getElementById("otp").value,b.a.post("/node/user/auth/login",{user:t,otp:s}).then((function(t){200===t.status?(u=t.data.token,e.history.push({pathname:"/landing"}),localStorage.setItem("token",u),localStorage.setItem("type",t.data.type),localStorage.setItem("name",t.data.name),localStorage.setItem("email",t.data.email)):alert(t.data.msg)})).catch((function(e){console.log(e)}))}},"Login")),l.a.createElement("div",{className:"clear"}));return l.a.createElement("div",{className:"login"},m,c?d:null)}),I=(a(69),function(e){var t,a,n,o,c,r;return l.a.createElement("div",null,l.a.createElement("div",{className:"login"},l.a.createElement("label",null,"E-mail* "),l.a.createElement("input",{type:"text",placeholder:"Enter your Email",id:"email"}),l.a.createElement("label",null,"Id number* "),l.a.createElement("input",{type:"text",placeholder:"Enter your Employee Id",id:"idno"}),l.a.createElement("label",null,"Full Name* "),l.a.createElement("input",{type:"text",placeholder:"Enter your Full Name",id:"name"}),l.a.createElement("label",null,"NT-ID* "),l.a.createElement("input",{type:"text",placeholder:"Enter your NT ID",id:"ntid"}),l.a.createElement("label",null,"Department* "),l.a.createElement("input",{type:"text",placeholder:"Enter your Department",id:"dept"}),l.a.createElement("label",null,"Username "),l.a.createElement("input",{type:"text",placeholder:"Enter your Username",id:"username"}),l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){t=document.getElementById("email").value,a=document.getElementById("idno").value,n=document.getElementById("name").value,o=document.getElementById("ntid").value,c=document.getElementById("dept").value,r=document.getElementById("username").value,b.a.post("/node/user/signup",{email:t,idno:a,name:n,ntid:o,dept:c,username:r}).then((function(t){console.log(t),alert(t.data.msg),201===t.status&&e.history.push({pathname:"/"})})).catch((function(e){console.log(e)}))}},"Signup")),l.a.createElement("div",{className:"clear"}))}),w=a(22),N=a(18),k=a(36),S=a.n(k),O=function(e){var t=e.down,a=t[0].split(".");console.log(t);return l.a.createElement("li",null,l.a.createElement("p",{target:"_blank",rel:"noopener noreferrer",onClick:function(){b.a.get("/node/file/download?filename="+t[1]).then((function(e){console.log(e),S()(e.data,t[1])}))}},l.a.createElement("span",null,a[1]),a[0]))},T=(a(70),function(e,t){var a=localStorage.getItem("token"),o="requester="+localStorage.getItem("email")+";rbei_access_token="+a;b.a.defaults.headers.common.Authorization=o;for(var c=Object(n.useState)(!1),r=Object(g.a)(c,2),i=r[0],s=r[1],u=[],m=[],d=[],p=0;p<e.topics.length;p++)u.push(e.topics[p].SUB_TOPIC),m.push(e.topics[p].USER_EMAIL);for(var E=0;E<e.files.length;E++){var f=e.files[E].FILE_NAME.split("-");d.push([f[f.length-1],e.files[E].FILE_NAME])}var h,v=Object(w.a)(new Set(m)),y=(u=Object(w.a)(new Set(u))).toString(),I=l.a.createElement("div",null,v.map((function(e,t){var a="mailto:"+e;return l.a.createElement("li",{key:t},l.a.createElement("a",{style:{color:"#868686"},href:a},e))}))),k=l.a.createElement("ul",{className:"downloads"},l.a.createElement("h5",{style:{"margin-left":"10px"}},"Attachments"),d.map((function(e,t){return l.a.createElement(O,{key:t,down:e})}))),S=function(t){t.preventDefault();var a=new FormData;a.append("files",h),a.append("session_id",e.session_id);b.a.post("/node/file/upload",a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){200===e.status&&alert(e.data.status)})).catch((function(e){}))},T=l.a.createElement("div",{className:"admin-notify"},l.a.createElement("i",{"data-tip":!0,"data-for":"emailTip",className:"boschicon-bosch-ic-mail",onClick:function(){b.a.get("/node/publishagenda?session_id="+e.session_id)}}),l.a.createElement(N.a,{id:"emailTip",place:"top",effect:"solid"},"Email Subscribers"));return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"head"},l.a.createElement("label",null,e.index+1),l.a.createElement("strong",null,y),l.a.createElement("span",null,l.a.createElement("b",null,e.date))),l.a.createElement("div",{className:"desc"},e.description),l.a.createElement("div",{className:"presenters"},l.a.createElement("h5",null,"Presented\xa0by"),I),l.a.createElement("div",{className:"upload"},l.a.createElement("form",{onSubmit:S},l.a.createElement("i",{className:"boschicon-bosch-ic-cloud-upload"}),l.a.createElement(N.a,{id:"uploadTip",place:"top",effect:"solid"},"Upload Attachments"),l.a.createElement("input",{"data-tip":!0,"data-for":"uploadTip",type:"file",name:"files",onChange:function(e){h=e.target.files[0],S(e)}}),l.a.createElement("div",{className:"clear"}))),d&&d.length?l.a.createElement("div",{className:"resources"},l.a.createElement("i",{"data-tip":!0,"data-for":"attachmentsTip",className:"boschicon-bosch-ic-book",onClick:function(){s(!i)}}),l.a.createElement(N.a,{id:"attachmentsTip",place:"top",effect:"solid"},"View Attachments")):null,l.a.createElement("div",null,i?k:null),l.a.createElement("div",null,new Date(e.date)>new Date&&"A"===localStorage.getItem("type")?T:null),l.a.createElement("div",{className:"clear"}))}),j=function(e){return e.session.map((function(t,a){return l.a.createElement(T,{title:t.TITLE,index:a,description:t.DESC,date:t.DATE,key:t.ID,session_id:t.ID,topics:t.TOPICS,files:t.FILES,showPopup:e.showPopup,toggle:e.toggle}," ")}))},x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).reset=function(){var t=localStorage.getItem("token"),a="requester="+localStorage.getItem("email")+";rbei_access_token="+t;b.a.defaults.headers.common.Authorization=a,b.a.get("/api/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc").then((function(t){e.setState({session:t.data.value})})).catch((function(t){console.log(t),e.setState({session:[]})}))},e.state={session:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.reset()}},{key:"render",value:function(){return l.a.createElement(j,{session:this.state.session})}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"sticky"},l.a.createElement(f,{user:this.user})),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:y}),l.a.createElement(d.a,{exact:!0,path:"/landing",component:x}),l.a.createElement(d.a,{exact:!0,path:"/signup",component:I})),l.a.createElement("div",{className:"footer"},l.a.createElement(h,null))))}}]),a}(n.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");_?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):D(e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.29018feb.chunk.js.map