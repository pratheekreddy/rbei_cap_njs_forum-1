(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/bosch_logo.12c077f3.jpg"},37:function(e,t,a){e.exports=a(73)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(33),c=a.n(o),r=(a(42),a(13)),i=a(14),s=a(17),m=a(16),u=a(10),d=a(2),p=(a(43),a(34)),E=a.n(p),f=a(9),h=(a(44),Object(d.f)((function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),o=a[0],c=a[1],r=localStorage.getItem("type"),i=l.a.createElement("div",null,l.a.createElement("p",{onClick:function(){}},"Approve users"),l.a.createElement("p",{onClick:function(){}},"Post Agenda")),s=l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("p",{onClick:function(){e.history.push({pathname:"/profile"})}},"Your Profile"),"A"===r?i:null,l.a.createElement("p",{onClick:function(){localStorage.clear(),e.history.push({pathname:"/login"})}},"Sign out"));return l.a.createElement("div",{className:"dropdown"},l.a.createElement("i",{className:"boschicon-bosch-ic-user",onClick:function(){c(!o)}}),o?s:null)}))),g=(a(50),Object(d.f)((function(e){var t=!0;t="/login"===e.location.pathname||"/signup"===e.location.pathname;var a=l.a.createElement(h,{className:"h3"}),n=l.a.createElement("div",{className:"signup"},l.a.createElement(u.b,{className:"h3",to:{pathname:"/"}},"Sign in"),l.a.createElement(u.b,{className:"h3",to:{pathname:"/signup"}},"Sign up"));return l.a.createElement("header",null,l.a.createElement("img",{src:E.a,alt:"Bosch Logo"}),l.a.createElement("h1",null,"Forum Feed"),t?n:a)}))),b=(a(51),function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Footer"))}),v=a(4),y=a.n(v),N=(a(69),function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),o=a[0],c=a[1],r="",i="",s="",m=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"E-mail/Username "),l.a.createElement("input",{disabled:o,id:"email",type:"text"}),o?null:l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){if(!(r=document.getElementById("email").value))return alert("please enter a valid username or email");y.a.get("/node/user/auth/otp?user="+r).then((function(e){c(!0),alert(e.data.msg)})).catch((function(e){alert(e.response.data.msg),console.log(e.response.data.msg)}))}},"Get OTP")),l.a.createElement("div",{className:"clear"})),u=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"OTP:"),l.a.createElement("input",{type:"text",id:"otp",placeholder:"Enter your OTP"}),l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){var t=document.getElementById("email").value;if(!(i=document.getElementById("otp").value))return alert("please enter a valid otp");y.a.post("/node/user/auth/login",{user:t,otp:i}).then((function(t){if(200===t.status){s=t.data.token;var a=t.data.name;localStorage.setItem("token",s),localStorage.setItem("type",t.data.type),localStorage.setItem("name",a.split(" ")[0]),localStorage.setItem("email",t.data.email),localStorage.getItem("token")?e.history.push({pathname:"/"}):e.history.push({pathname:"/login"})}else alert(t.data.msg),e.history.push({pathname:"/login"})})).catch((function(e){console.log(e),alert(e.response.data.msg)}))}},"Login")),l.a.createElement("div",{className:"clear"}));return l.a.createElement("div",{className:"login"},m,o?u:null)}),I=(a(70),function(e){var t,a,n,o,c,r;return l.a.createElement("div",null,l.a.createElement("div",{className:"login"},l.a.createElement("label",null,"E-mail* "),l.a.createElement("input",{type:"text",placeholder:"Enter your Email",id:"email"}),l.a.createElement("label",null,"Id number* "),l.a.createElement("input",{type:"text",placeholder:"Enter your Employee Id",id:"idno"}),l.a.createElement("label",null,"Full Name* "),l.a.createElement("input",{type:"text",placeholder:"Enter your Full Name",id:"name"}),l.a.createElement("label",null,"NT-ID* "),l.a.createElement("input",{type:"text",placeholder:"Enter your NT ID",id:"ntid"}),l.a.createElement("label",null,"Department* "),l.a.createElement("input",{type:"text",placeholder:"Enter your Department",id:"dept"}),l.a.createElement("label",null,"Username "),l.a.createElement("input",{type:"text",placeholder:"Enter your Username",id:"username"}),l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){if(t=document.getElementById("email").value,a=document.getElementById("idno").value,n=document.getElementById("name").value,o=document.getElementById("ntid").value,c=document.getElementById("dept").value,r=document.getElementById("username").value,!t||!a||!n||!o||!c)return alert("please enter credientials");y.a.post("/node/user/signup",{email:t,idno:a,name:n,ntid:o,dept:c,username:r}).then((function(t){console.log(t),alert(t.data.msg),201===t.status&&e.history.push({pathname:"/login"})})).catch((function(e){alert(e.response.data.msg),console.log(e.response.data.msg)}))}},"Signup")),l.a.createElement("div",{className:"clear"}))}),k=(a(71),Object(d.f)((function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),o=a[0],c=a[1],r=function(e){document.getElementById(e).disabled=!1},i=l.a.createElement("div",null,l.a.createElement("div",{className:"updateprofile"},l.a.createElement("label",null,"E-mail "),l.a.createElement("input",{type:"text",placeholder:"krishnan.gautam@in.bosch.com",value:o.EMAIL,id:"email",disabled:!0}),l.a.createElement("label",null,"Id number "),l.a.createElement("input",{type:"text",placeholder:"33378755",id:"idno",value:o.IDNO,disabled:!0}),l.a.createElement("label",null,"Full Name "),l.a.createElement("input",{type:"text",placeholder:"Gautam Krishnan",value:o.NAME,id:"name",disabled:!0}),l.a.createElement("i",{className:"boschicon-bosch-ic-edit",onClick:function(){return r("name")}}),l.a.createElement("label",null,"NT-ID "),l.a.createElement("input",{type:"text",placeholder:"TKG1KOR",value:o.NTID,id:"ntid",disabled:!0}),l.a.createElement("label",null,"Department "),l.a.createElement("input",{type:"text",placeholder:"RBEI/BLS5",value:o.DEPT,id:"dept",disabled:!0}),l.a.createElement("i",{className:"boschicon-bosch-ic-edit",onClick:function(){return r("dept")}}),l.a.createElement("label",null,"Username "),l.a.createElement("input",{type:"text",placeholder:"Gomzi",value:o.USERNAME,id:"username",disabled:!0}),l.a.createElement("i",{className:"boschicon-bosch-ic-edit",onClick:function(){return r("username")}}),l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){document.getElementById("name").value,document.getElementById("dept").value,document.getElementById("username").value}},"Update"))),s=localStorage.getItem("email");return y.a.get("/srv_api/profile/readprofile(email='"+s+"')/Set").then((function(e){console.log(e),c(e)})).catch((function(e){})),{profileDisplay:i}}))),S=a(22),w=a(18),O=a(36),x=a.n(O),T=function(e){var t=e.down,a=t[0].split(".");return l.a.createElement("li",null,l.a.createElement("p",{target:"_blank",rel:"noopener noreferrer",onClick:function(){y.a.get("/node/file/download?filename="+t[1],{responseType:"blob"}).then((function(e){x()(e.data,t[0])})).catch((function(e){alert(e.response.data.msg)}))}},l.a.createElement("span",null,a[1]),a[0]))},j=(a(72),function(e,t){var a=localStorage.getItem("token"),o="requester="+localStorage.getItem("email")+";rbei_access_token="+a;y.a.defaults.headers.common.Authorization=o;for(var c=Object(n.useState)(!1),r=Object(f.a)(c,2),i=r[0],s=r[1],m=[],u=[],d=[],p=0;p<e.topics.length;p++)m.push(e.topics[p].SUB_TOPIC),u.push(e.topics[p].USER_EMAIL);for(var E=0;E<e.files.length;E++){var h=e.files[E].FILE_NAME.split("-");d.push([h[h.length-1],e.files[E].FILE_NAME])}var g,b=Object(S.a)(new Set(u)),v=(m=Object(S.a)(new Set(m))).toString(),N=l.a.createElement("div",null,b.map((function(e,t){var a="mailto:"+e;return l.a.createElement("li",{key:t},l.a.createElement("a",{style:{color:"#868686"},href:a},e))}))),I=l.a.createElement("ul",{className:"downloads"},l.a.createElement("h5",{style:{"margin-left":"10px"}},"Attachments"),d.map((function(e,t){return l.a.createElement(T,{key:t,down:e})}))),k=function(t){t.preventDefault();var a=new FormData;a.append("files",g),a.append("session_id",e.session_id),a.append("uploaded_by",localStorage.getItem("name"));y.a.post("/node/file/upload",a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){200===e.status&&alert(e.data.status)})).catch((function(e){alert(e.response.data.msg)}))},O=l.a.createElement("div",{className:"admin-notify"},l.a.createElement("i",{"data-tip":!0,"data-for":"emailTip",className:"boschicon-bosch-ic-mail",onClick:function(){y.a.get("/node/publishagenda?session_id="+e.session_id)}}),l.a.createElement(w.a,{id:"emailTip",place:"top",effect:"solid"},"Email Subscribers"));return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"head"},l.a.createElement("label",null,e.index+1),l.a.createElement("strong",null,v),l.a.createElement("span",null,l.a.createElement("b",null,e.date))),l.a.createElement("div",{className:"desc"},e.description),l.a.createElement("div",{className:"presenters"},l.a.createElement("h5",null,"Presented\xa0by"),N),l.a.createElement("div",{className:"upload"},l.a.createElement("form",{onSubmit:k},l.a.createElement("i",{className:"boschicon-bosch-ic-cloud-upload"}),l.a.createElement(w.a,{id:"uploadTip",place:"top",effect:"solid"},"Upload Attachments"),l.a.createElement("input",{"data-tip":!0,"data-for":"uploadTip",type:"file",name:"files",onChange:function(e){g=e.target.files[0],k(e)}}),l.a.createElement("div",{className:"clear"}))),d&&d.length?l.a.createElement("div",{className:"resources"},l.a.createElement("i",{"data-tip":!0,"data-for":"attachmentsTip",className:"boschicon-bosch-ic-book",onClick:function(){s(!i)}}),l.a.createElement(w.a,{id:"attachmentsTip",place:"top",effect:"solid"},"View Attachments")):null,l.a.createElement("div",null,i?I:null),l.a.createElement("div",null,new Date(e.date)>new Date&&"A"===localStorage.getItem("type")?O:null),l.a.createElement("div",{className:"clear"}))}),C=function(e){return e.session.map((function(t,a){return l.a.createElement(j,{title:t.TITLE,index:a,description:t.DESC,date:t.DATE,key:t.ID,session_id:t.ID,topics:t.TOPICS,files:t.FILES,showPopup:e.showPopup,toggle:e.toggle}," ")}))},D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).reset=function(){var t=localStorage.getItem("token"),a="requester="+localStorage.getItem("email")+";rbei_access_token="+t;y.a.defaults.headers.common.Authorization=a,y.a.get("/api/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc").then((function(t){e.setState({session:t.data.value})})).catch((function(t){alert("Please login again"),e.setState({session:[]})}))},e.state={session:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.reset()}},{key:"render",value:function(){return l.a.createElement(C,{session:this.state.session})}}]),a}(n.Component),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"sticky"},l.a.createElement(g,{user:this.user})),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:D}),l.a.createElement(d.a,{exact:!0,path:"/index.html",component:D}),l.a.createElement(d.a,{exact:!0,path:"/login",component:N}),l.a.createElement(d.a,{exact:!0,path:"/signup",component:I}),l.a.createElement(d.a,{exact:!0,path:"/profile",component:k})),l.a.createElement("div",{className:"footer"},l.a.createElement(b,null))))}}]),a}(n.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");A?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):_(e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.6a964268.chunk.js.map