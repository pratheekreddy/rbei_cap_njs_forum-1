(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{21:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/bosch_logo.12c077f3.jpg"},39:function(e,t,a){e.exports=a(77)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(34),c=a.n(o),i=(a(44),a(10)),r=a(11),s=a(13),u=a(12),m=a(14),d=a(3),p=(a(45),a(35)),h=a.n(p),E=a(5),g=(a(46),Object(d.f)((function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),o=a[0],c=a[1],i=localStorage.getItem("type"),r=l.a.createElement("div",null,l.a.createElement("li",{onClick:function(){e.history.push({pathname:"/approve"}),c(!1)}},"Approve users"),l.a.createElement("li",{onClick:function(){e.history.push({pathname:"/postagenda"}),c(!1)}},"Post Agenda")),s=l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("li",{onClick:function(){e.history.push({pathname:"/"}),c(!1)}},"Home"),l.a.createElement("li",{onClick:function(){e.history.push({pathname:"/profile"}),c(!1)}},"Your Profile"),"A"===i?r:null,l.a.createElement("li",{onClick:function(){localStorage.clear(),e.history.push({pathname:"/index.html#login"}),c(!1)}},"Sign out"));return l.a.createElement("div",{className:"dropdown",onBlur:function(){return c(!1)},tabIndex:"-1"},l.a.createElement("i",{className:"boschicon-bosch-ic-user",onClick:function(){c(!o)}}),o?s:null)}))),f=(a(52),Object(d.f)((function(e){var t=!0;t="/index.html#login"===e.location.pathname||"/index.html#signup"===e.location.pathname;var a=l.a.createElement(g,{className:"h3"}),n=l.a.createElement("div",{className:"signup"},l.a.createElement(m.b,{to:{pathname:"/index.html#login"}},"Sign in"),l.a.createElement(m.b,{to:{pathname:"/index.html#signup"}},"Sign up"));return l.a.createElement("header",null,l.a.createElement("img",{src:h.a,alt:"Bosch Logo"}),l.a.createElement("h1",null,"RBEI - SbS Forum"),t?n:a)}))),b=(a(53),function(){return l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("span",{style:{float:"left",marginLeft:"5px"}},"\xa9 Robert Bosch Engineering and Business Solutions Pvt Ltd."),l.a.createElement("span",{style:{float:"right",marginRight:"5px"}},"Powered by CAP, HANA, React.js")))}),v=a(2),y=a.n(v),I=(a(71),a(72),function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"spinner"},l.a.createElement("div",{className:"bounce1"}),l.a.createElement("div",{className:"bounce2"}),l.a.createElement("div",{className:"bounce3"})))}),N=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),r=Object(E.a)(i,2),s=r[0],u=r[1],m="",d="",p="",h=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"E-mail "),l.a.createElement("input",{disabled:o,id:"email",type:"text"}),o?null:l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){if(!(m=document.getElementById("email").value))return alert("please enter a valid username or email");u(!0),y.a.get("/node/user/auth/otp?user="+m).then((function(e){c(!0),alert(e.data.msg),u(!1)})).catch((function(e){u(!1),alert(e.response.data.msg),console.log(e.response.data.msg)}))}},"Get OTP")),l.a.createElement("div",{className:"clear"})),g=l.a.createElement(I,null),f=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"OTP:"),l.a.createElement("input",{type:"text",id:"otp",placeholder:"Enter your OTP"}),l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){var t=document.getElementById("email").value;if(!(d=document.getElementById("otp").value))return alert("please enter a valid otp");u(!0),y.a.post("/node/user/auth/login",{user:t,otp:d}).then((function(t){if(u(!1),200===t.status){p=t.data.token;var a=t.data.name;localStorage.setItem("token",p),localStorage.setItem("type",t.data.type),localStorage.setItem("name",a.split(" ")[0]),localStorage.setItem("email",t.data.email),localStorage.getItem("token")?e.history.push({pathname:"/"}):e.history.push({pathname:"/index.html#login"})}else u(!1),alert(t.data.msg),e.history.push({pathname:"/index.html#login"})})).catch((function(e){console.log(e),alert(e.response.data.msg)}))}},"Login")),l.a.createElement("div",{className:"clear"}));return l.a.createElement("div",{className:"login"},l.a.createElement("p",null,"Sign in (only Bosch employees)"),h,o?f:null,s?g:null)},S=(a(73),function(e){var t,a,o,c,i,r,s=Object(n.useState)(),u=Object(E.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(!1),h=Object(E.a)(p,2),g=h[0],f=h[1],b=l.a.createElement(I,null);return l.a.createElement("div",{className:"login"},l.a.createElement("p",null,"Sign up (only Bosch employees)"),l.a.createElement("div",null,l.a.createElement("label",{className:"required"},"E-mail"),l.a.createElement("input",{type:"text",placeholder:"Eg. john@in.bosch.com",id:"email"}),l.a.createElement("label",null,"Username "),l.a.createElement("input",{className:m,type:"text",onBlur:function(){0!==(r=document.getElementById("username").value).length&&(d("loading"),y.a.get("/node/user/valid?username="+r).then((function(e){console.log(e.data.valid),!0===e.data.valid?d("valid"):d("invalid")})).catch((function(e){alert(e),d("invalid")})))},placeholder:"Eg. Johnny",id:"username"}),l.a.createElement("label",{className:"required"},"Full Name"),l.a.createElement("input",{type:"text",placeholder:"Eg. John Doe",id:"name"}),l.a.createElement("label",{className:"required"},"Department"),l.a.createElement("input",{type:"text",placeholder:"Eg. RBEI/ETC5",id:"dept"}),l.a.createElement("label",null,"Employee Id"),l.a.createElement("input",{type:"text",placeholder:"Eg. 12345678",id:"idno"}),l.a.createElement("label",null,"NT-ID"),l.a.createElement("input",{type:"text",placeholder:"Eg. JOD4COB",id:"ntid"}),l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:function(){return t=document.getElementById("email").value,a=document.getElementById("idno").value,o=document.getElementById("name").value,c=document.getElementById("ntid").value,i=document.getElementById("dept").value,r=document.getElementById("username").value,t&&o&&i?t.endsWith("@in.bosch.com")&&0!==t.split("@")[0].length?i.startsWith("RBEI/")?(f(!0),void y.a.post("/node/user/signup",{email:t,idno:a,name:o,ntid:c,dept:i,username:r}).then((function(t){console.log(t),f(!1),alert(t.data.msg),201===t.status&&e.history.push({pathname:"/index.html#login"})})).catch((function(e){f(!1),alert(e.response.data.msg),console.log(e.response.data.msg)}))):alert("Please fill in the department as shown in the example"):alert("Please enter a valid bosch email id."):(console.log("User Information :- "),console.log("Email ",t,", length :- ",t.length),console.log("Full Name ",o,", length :- ",o.length),console.log("Department ",i,", length :- ",i.length),alert("Please fill in the mandatory fields"))}},"Signup")),g?b:null,l.a.createElement("div",{className:"clear"}))}),O=(a(74),a(37)),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).t=localStorage.getItem("token"),n.email=localStorage.getItem("email"),n.email_local=localStorage.getItem("email"),n.token="requester="+n.email_local+";rbei_access_token="+n.t,n.load=l.a.createElement(I,null),n.enableElement=function(e){document.getElementById(e).disabled=!1},n.disableElement=function(){document.getElementById("ntid").disabled=!0,document.getElementById("idno").disabled=!0,document.getElementById("name").disabled=!0,document.getElementById("dept").disabled=!0},n.onChange=function(e){n.setState(Object(O.a)({},e.target.id,e.target.value))},n.update=function(){var e=document.getElementById("name").value,t=document.getElementById("dept").value,a=document.getElementById("idno").value,l=document.getElementById("username").value,o=document.getElementById("ntid").value;return e&&t?t.startsWith("RBEI/")?(y.a.defaults.headers.common.Authorization=n.token,n.setState({loading:!0}),void y()({url:"/api/profile/updateprofile('"+n.email+"')",data:{DEPT:t,USERNAME:l,NAME:e,IDNO:a,NTID:o},method:"PATCH"}).then((function(t){n.setState({loading:!1}),alert("Profile updated sucessfully"),localStorage.setItem("name",e),n.disableElement()})).catch((function(e){n.setState({loading:!1})}))):alert("Please fill in the department as shown in the example"):(console.log("User Information :- "),console.log("Employee ID ",a,", length :- ",a.length),console.log("NTID ",o,", length :- ",o.length),console.log("Full Name ",e,", length :- ",e.length),console.log("Department ",t,", length :- ",t.length),alert("Please fill in the mandatory fields"))},n.state={props:e,name:e.NAME,dept:e.DEPT,username:e.USERNAME,idno:e.IDNO,ntid:e.NTID,loading:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"updateprofile"},l.a.createElement("label",{className:"required"},"E-mail "),l.a.createElement("input",{type:"text",placeholder:"Eg. john@in.bosch.com",value:this.props.EMAIL,id:"email",disabled:!0}),l.a.createElement("label",null,"Username "),l.a.createElement("input",{type:"text",placeholder:"Eg. Johnny",onChange:this.onChange,value:this.state.username,id:"username",disabled:!0}),l.a.createElement("label",{className:"required"},"Full Name "),l.a.createElement("input",{type:"text",placeholder:"Eg. John Doe",onChange:this.onChange,value:this.state.name,id:"name",disabled:!0}),l.a.createElement("i",{className:"boschicon-bosch-ic-edit",onClick:function(){return e.enableElement("name")}}),l.a.createElement("label",{className:"required"},"Department "),l.a.createElement("input",{type:"text",placeholder:"Eg. RBEI/ETC5",onChange:this.onChange,value:this.state.dept,id:"dept",disabled:!0}),l.a.createElement("i",{className:"boschicon-bosch-ic-edit",onClick:function(){return e.enableElement("dept")}}),l.a.createElement("label",null,"Employee ID "),l.a.createElement("input",{type:"text",placeholder:"Eg. 12345678",onChange:this.onChange,value:this.state.idno,id:"idno",disabled:!0}),l.a.createElement("i",{className:"boschicon-bosch-ic-edit",onClick:function(){return e.enableElement("idno")}}),l.a.createElement("label",null,"NT-ID "),l.a.createElement("input",{type:"text",placeholder:"Eg. JOD4COB",onChange:this.onChange,value:this.state.ntid,id:"ntid",disabled:!0}),l.a.createElement("i",{className:"boschicon-bosch-ic-edit",onClick:function(){return e.enableElement("ntid")}}),l.a.createElement("button",{className:"rb-button rb-button--primary",onClick:this.update},"Update")),this.state.loading?this.load:null)}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getProfileInfo=function(){var t=localStorage.getItem("token"),a=localStorage.getItem("email"),n="requester="+localStorage.getItem("email")+";rbei_access_token="+t;y.a.defaults.headers.common.Authorization=n,e.setState({loading:!1}),y.a.get("/api/profile/readprofile(email='"+a+"')/Set").then((function(t){e.setState({profileinfomation:t.data.value[0],loading:!0})})).catch((function(t){console.log(t),e.setState({loading:!0})}))},e.state={profileinfomation:[],loading:!1},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getProfileInfo()}},{key:"render",value:function(){return this.state.loading?l.a.createElement(k,{EMAIL:this.state.profileinfomation.EMAIL_ID,IDNO:this.state.profileinfomation.IDNO,NAME:this.state.profileinfomation.NAME,NTID:this.state.profileinfomation.NTID,DEPT:this.state.profileinfomation.DEPT,USERNAME:this.state.profileinfomation.USERNAME}):l.a.createElement(I,null)}}]),a}(n.Component),C=Object(d.f)(j),D=a(15),x=a(19),A=a(38),T=a.n(A),B=function(e){var t=e.down,a=t[0].split(".");return l.a.createElement("li",null,l.a.createElement("p",{target:"_blank",rel:"noopener noreferrer",onClick:function(){y.a.get("/node/file/download?filename="+t[1],{responseType:"blob"}).then((function(e){T()(e.data,t[0])})).catch((function(e){alert(e.response.data.msg)}))}},l.a.createElement("span",null,a[1]),a[0]))},w=(a(75),function(e,t){var a=localStorage.getItem("token"),o="requester="+localStorage.getItem("email")+";rbei_access_token="+a;y.a.defaults.headers.common.Authorization=o;for(var c=Object(n.useState)(!1),i=Object(E.a)(c,2),r=i[0],s=i[1],u=Object(n.useState)(!1),m=Object(E.a)(u,2),d=m[0],p=m[1],h=[],g=[],f=[],b=0;b<e.topics.length;b++)h.push(e.topics[b].SUB_TOPIC),g.push(e.topics[b].USER_EMAIL);for(var v=0;v<e.files.length;v++){var N=e.files[v].FILE_NAME.split("-");f.push([N[N.length-1],e.files[v].FILE_NAME])}var S,O=Object(D.a)(new Set(g)),k=(h=Object(D.a)(new Set(h))).toString(),j=l.a.createElement("div",null,O.map((function(e,t){var a="mailto:"+e;return l.a.createElement("li",{key:t},l.a.createElement("a",{style:{color:"#868686"},href:a},e))}))),C=l.a.createElement("ul",{className:"downloads"},l.a.createElement("h5",{style:{"margin-left":"10px"}},"Attachments"),f.map((function(e,t){return l.a.createElement(B,{key:t,down:e})}))),A=function(t){t.preventDefault();var a=new FormData;a.append("files",S),a.append("session_id",e.session_id),a.append("uploaded_by",localStorage.getItem("name"));p(!0),y.a.post("/node/file/upload",a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){p(!1),200===e.status&&alert(e.data.status)})).catch((function(e){p(!1),alert(e.response.data.msg)}))},T=l.a.createElement("div",{className:"admin-notify"},l.a.createElement("i",{"data-tip":!0,"data-for":"emailTip",className:"boschicon-bosch-ic-mail",onClick:function(){p(!0),y.a.get("/node/admin/publishagenda?session_id="+e.session_id).then((function(e){p(!1)})).catch((function(e){p(!1)}))}}),l.a.createElement(x.a,{id:"emailTip",place:"top",effect:"solid"},"Email Participants")),w=l.a.createElement(I,null);return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"head"},l.a.createElement("label",null,e.index),l.a.createElement("strong",null,k),l.a.createElement("span",null,l.a.createElement("b",null,e.date))),l.a.createElement("div",{className:"desc"},e.description),l.a.createElement("div",{className:"presenters"},l.a.createElement("h5",null,"Presented\xa0by"),j),l.a.createElement("div",{className:"upload"},l.a.createElement("form",{onSubmit:A},l.a.createElement("i",{className:"boschicon-bosch-ic-cloud-upload"}),l.a.createElement(x.a,{id:"uploadTip",place:"top",effect:"solid"},"Upload Attachments"),l.a.createElement("input",{"data-tip":!0,"data-for":"uploadTip",type:"file",name:"files",onChange:function(e){S=e.target.files[0],A(e)}}),l.a.createElement("div",{className:"clear"}))),f&&f.length?l.a.createElement("div",{className:"resources"},l.a.createElement("i",{"data-tip":!0,"data-for":"attachmentsTip",className:"boschicon-bosch-ic-book",onClick:function(){s(!r)}}),l.a.createElement(x.a,{id:"attachmentsTip",place:"top",effect:"solid"},"View Attachments")):null,l.a.createElement("div",null,r?C:null),l.a.createElement("div",null,new Date(e.date).toISOString().substring(0,10)+"T18:29:59.000Z">=(new Date).toISOString()&&"A"===localStorage.getItem("type")?T:null),l.a.createElement("div",{className:"clear"}),d?w:null)}),_=function(e){return e.session.map((function(t,a){return l.a.createElement(w,{title:t.TITLE,index:e.no_of_sessions-a,description:t.DESC,date:t.DATE,key:t.ID,session_id:t.ID,topics:t.TOPICS,files:t.FILES,showPopup:e.showPopup,toggle:e.toggle}," ")}))},P=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).reset=function(){var t=localStorage.getItem("token");if(!t)return e.props.history.push({pathname:"/index.html#login"});var a="requester="+localStorage.getItem("email")+";rbei_access_token="+t;y.a.defaults.headers.common.Authorization=a,e.setState({loading:!1}),y.a.get("/api/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc").then((function(t){e.setState({session:t.data.value,loading:!0})})).catch((function(t){alert("Please login again"),console.log(t),e.setState({loading:!0}),e.props.history.push({pathname:"/index.html#login"})}))},e.state={session:[],loading:!1},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.reset()}},{key:"render",value:function(){return this.state.loading?l.a.createElement(_,{session:this.state.session,no_of_sessions:this.state.session.length}):l.a.createElement(I,null)}}]),a}(n.Component),M=(a(76),Object(d.f)((function(e){var t=localStorage.getItem("token"),a="requester="+localStorage.getItem("email")+";rbei_access_token="+t;y.a.defaults.headers.common.Authorization=a;var o=Object(n.useState)([{USER_EMAIL:null,SUB_TOPIC:null}]),c=Object(E.a)(o,2),i=c[0],r=c[1],s=Object(n.useState)(!1),u=Object(E.a)(s,2),m=u[0],d=u[1],p=l.a.createElement(I,null);return l.a.createElement("div",{className:"agenda"},l.a.createElement("label",null,"Title  "),l.a.createElement("input",{type:"text",id:"title"}),l.a.createElement("label",null,"  Date  "),l.a.createElement("input",{type:"date",id:"date"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"desclabel"},"Description  "),l.a.createElement("textarea",{id:"description",rows:"5",cols:"70",className:"desc",placeholder:"Some description about the session"}),l.a.createElement("i",{className:"boschicon-bosch-ic-add",onClick:function(){var e=Object(D.a)(i);e.push({USER_EMAIL:null,SUB_TOPIC:null}),r(e)}}),i.map((function(e,t){return l.a.createElement("div",{key:"".concat(e,"-").concat(t)},l.a.createElement("label",null,"Presentor Email  "),l.a.createElement("input",{type:"text",onChange:function(e){return function(e,t){var a=Object(D.a)(i);a[e].USER_EMAIL=t.target.value,r(a)}(t,e)}}),l.a.createElement("label",null,"     Topic    "),l.a.createElement("input",{type:"text",onChange:function(e){return function(e,t){var a=Object(D.a)(i);a[e].SUB_TOPIC=t.target.value,r(a)}(t,e)}}),l.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=Object(D.a)(i);t.splice(e,1),r(t)}(t)}},"X"))})),l.a.createElement("div",{className:"submit"},l.a.createElement("button",{type:"button",className:"rb-button rb-button--primary",onClick:function(){var e=document.getElementById("title").value,t=document.getElementById("date").value,a=document.getElementById("description").value;console.log(e,t,a,i),d(!0),y.a.post("/api/agenda/sessions",{DATE:t,TITLE:e,DESC:a,TOPICS:i}).then((function(e){d(!1),alert("session uploaded sucessfully")})).catch((function(e){console.log(e),d(!1),alert("something went wrong")}))}},"Submit")),m?p:null)}))),L=(a(21),function(e){var t=Object(n.useState)(!0),a=Object(E.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),r=Object(E.a)(i,2),s=r[0],u=r[1],m=l.a.createElement(I,null),d=l.a.createElement("tr",null,l.a.createElement("td",null,e.user.EMAIL_ID),l.a.createElement("td",null,e.user.NAME),l.a.createElement("td",null,e.user.DEPT),l.a.createElement("td",null,e.user.IDNO),l.a.createElement("td",null,e.user.NTID),l.a.createElement("td",null,e.user.USERNAME),l.a.createElement("td",null,e.user.REGD_ON),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){u(!0),y.a.post("/node/admin/approve",{email:e.user.EMAIL_ID,status:"A"}).then((function(e){c(!1),u(!1)})).catch((function(e){console.log(e)}))},className:"aprove"},"Approve"),l.a.createElement("button",{onClick:function(){u(!1),y.a.post("/node/admin/approve",{email:e.user.EMAIL_ID,status:"R"}).then((function(e){c(!1),u(!0)})).catch((function(e){u(!0),console.log(e)}))},className:"reject"},"reject")));return l.a.createElement("tbody",null,o?d:null,s?m:null)}),R=function(e){var t=l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Department"),l.a.createElement("th",null,"ID-NO"),l.a.createElement("th",null,"NT-ID"),l.a.createElement("th",null,"UserName"),l.a.createElement("th",null,"Registered on"),l.a.createElement("th",null,"Action"))),e.data.map((function(e,t){return l.a.createElement(L,{key:t,user:e})})));return l.a.createElement("div",null,t)},U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getusers=function(){var t=localStorage.getItem("token");if(!t)return e.props.history.push({pathname:"/index.html#login"});var a="requester="+localStorage.getItem("email")+";rbei_access_token="+t;y.a.defaults.headers.common.Authorization=a,e.setState({loading:!1}),y.a.get("/api/admin/users").then((function(t){e.setState({users:t.data.value,loading:!0})})).catch((function(t){console.log(t),e.setState({loading:!0})}))},e.state={users:[],loading:!1},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getusers()}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",null,l.a.createElement(R,{data:this.state.users})):l.a.createElement(I,null)}}]),a}(n.Component),q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"sticky"},l.a.createElement(f,{user:this.user})),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:P}),l.a.createElement(d.a,{exact:!0,path:"/index.html#login",component:N}),l.a.createElement(d.a,{exact:!0,path:"/index.html#signup",component:S}),l.a.createElement(d.a,{exact:!0,path:"/profile",component:C}),l.a.createElement(d.a,{exact:!0,path:"/postagenda",component:M}),l.a.createElement(d.a,{exact:!0,path:"/approve",component:U})),l.a.createElement("div",{className:"footer"},l.a.createElement(b,null))))}}]),a}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");F?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):J(e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.d4dc0548.chunk.js.map