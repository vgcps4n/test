(window.webpackJsonpasta=window.webpackJsonpasta||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logopic.e1f5f591.png"},45:function(e,t,a){e.exports=a.p+"static/media/logowordblack.adb442a5.png"},46:function(e,t,a){e.exports=a.p+"static/media/bg.8b69af64.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/logo.fef593c9.png"},48:function(e,t,a){e.exports=a.p+"static/media/logoword.d3eaf389.png"},49:function(e,t,a){e.exports=a(86)},54:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),c=(a(54),a(2)),l=a(3),i=a(5),u=a(4),m=a(6),d=a(21),p=a(19),h=a(41),b=a(13),f=Object(b.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(h.a)(e,["component","auth"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/"})}}))}),v=a(20),g=a(44),E=a(18);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){Object(E.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=a(60),O={isAuthenticated:!1,user:{},loading:!1},w={},k=Object(v.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return y({},e,{isAuthenticated:!j(t.payload),user:t.payload});case"USER_LOADING":return y({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),C=[g.a],S=Object(v.d)(k,{},v.a.apply(void 0,C)),x=a(25),R=a.n(x),D=a(16),U=a.n(D),A=function(e){e?U.a.defaults.headers.common.Authorization=e:delete U.a.defaults.headers.common.Authorization},P=function(e){return{type:"SET_CURRENT_USER",payload:e}},T=function(){return function(e){localStorage.removeItem("jwtToken"),A(!1),e(P({}))}},M=function(e){return U.a.post("/api/banner",e)},_=a(14),I=a.n(_),B=a(26),F=a.n(B),G=a(45),L=a.n(G),W=a(46),V=a.n(W),z=(a(80),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState(Object(E.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password};a.props.loginUser(t)},a.state={username:"",password:"",errors:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/admin/dashboard")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e,t){e.auth.isAuthenticated&&this.props.history.push("/admin/dashboard"),e.errors!==this.state.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("article",{className:"container-extended h-100",id:"bg",style:{backgroundImage:"url(".concat(V.a,")")}},r.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},r.a.createElement("div",{className:"col shadow p-5",id:"form"},r.a.createElement("img",{src:F.a,className:"img-fluid",alt:"logo"}),r.a.createElement("img",{src:L.a,className:"img-fluid",alt:"word"}),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group mt-4"},r.a.createElement("input",{"aria-label":"Username","aria-describedby":"basic-addon1",onChange:this.onChange,value:this.state.username,error:e.username,id:"username",placeholder:"\u041d\u044d\u0432\u0442\u0440\u044d\u0445 \u043d\u044d\u0440",className:I()("form-control",{invalid:e.username||e.usernamenotfound})})),r.a.createElement("small",{className:"text-danger pl-2"},e.username,e.usernamenotfound),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{"aria-label":"Password","aria-describedby":"basic-addon1",type:"password",onChange:this.onChange,value:this.state.password,id:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433",className:I()("form-control",{invalid:e.password||e.passwordincorrect})})),r.a.createElement("small",{className:"text-danger pl-2"},e.password,e.passwordincorrect),r.a.createElement("div",{className:"input-group justify-content-center"},r.a.createElement("button",{className:"btn btn-primary mb-3",type:"submit"},"\u041d\u044d\u0432\u0442\u0440\u044d\u0445"))))))}}]),t}(n.Component)),J=Object(b.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){U.a.post("/api/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),A(a);var n=R()(a);t(P(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(z),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState(Object(E.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password,password2:a.state.password2};a.props.registerUser(t,a.props.history)},a.state={username:"",password:"",password2:"",errors:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/admin/dashboard")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("article",{className:"container"},r.a.createElement("div",{className:"row justify-content-sm-center m-5"},r.a.createElement("div",{className:"col-sm-5"},r.a.createElement("div",{className:"sub-container-sm shadow p-4 mb-5 bg-white rounded"},r.a.createElement("center",null,r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"text-secondary"},"Already have an acc?"," ",r.a.createElement(d.b,{className:"highlight",to:"/admin"}," ","Log In"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group p-2"},r.a.createElement("input",{onChange:this.onChange,value:this.state.username,error:e.username,id:"username",type:"text",placeholder:"Username",className:I()("form-control",{invalid:e.username})})),r.a.createElement("span",{className:"text-danger"},e.username),r.a.createElement("div",{className:"input-group p-2"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",placeholder:"Password",className:I()("form-control",{invalid:e.password})})),r.a.createElement("span",{className:"text-danger"},e.password),r.a.createElement("div",{className:"input-group p-2"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",placeholder:"Confirm password",className:I()("form-control",{invalid:e.password2})})),r.a.createElement("span",{className:"text-danger"},e.password2),r.a.createElement("div",{className:"input-group justify-content-md-center"},r.a.createElement("button",{className:"btn btn-primary m-2",type:"submit"},"Register")))))))}}]),t}(n.Component),q=Object(b.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){U.a.post("/api/register",e).then(function(e){return t.push("/admin")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(p.g)($)),H=a(17),K=a(47),Q=a.n(K),X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("h4",{className:"overlay"},r.a.createElement("span",null,r.a.createElement("b",null,"\u0422\u0430\u0432\u0442\u0430\u0439 \u043c\u043e\u0440\u0438\u043b\u043d\u043e \u0443\u0443")," "),r.a.createElement("span",null,e.username.split(" ")[0])," ",r.a.createElement("span",{className:"text-primary"},"\u0442\u0430 \u0430\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u043d\u044d\u0432\u0442\u044d\u0440\u043b\u044d\u044d."))}}]),t}(n.Component),Y=function(){return U.a.get("/api/banner")},Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateBanner=function(){Y().then(function(e){a.setState({count:e.data.count,banners:e.data.banners})}).catch(function(e){return console.log(e)})},a.banners=function(){var e=a.state.banners.map(function(e){return e.name});return new Array(a.state.count).fill(0).map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",{scope:"col"},a+1),r.a.createElement("td",null,e[a]),r.a.createElement("td",null,"testing"))})},a.onChange=function(e){a.setState(Object(E.a)({},e.target.id,e.target.value))},a.readFile=function(e){a.setState({file:e.target.files[0],loaded:0})},a.onSubmit=function(e){e.preventDefault();var t=new FormData;t.append("name",a.state.name),t.append("banner",a.state.file),M(t).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a.state={count:"",banners:[],name:"",file:null,errors:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateBanner()}},{key:"componentDidUpdate",value:function(e,t){t.banners!==this.state.banners&&this.updateBanner()}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm p-5"},r.a.createElement("h3",{className:"text-center"},"\u0416\u0430\u0433\u0441\u0430\u0430\u043b\u0442"),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"\u041d\u044d\u0440"),r.a.createElement("th",{scope:"col"},"\u0422\u0430\u0439\u043b\u0431\u0430\u0440"))),r.a.createElement("tbody",null,this.banners())))),r.a.createElement("div",{className:"col-sm p-5"},r.a.createElement("h3",{className:"text-center"},"\u0411\u0430\u043d\u043d\u0435\u0440 \u043d\u044d\u043c\u044d\u0445"),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{"aria-label":"Name","aria-describedby":"basic-addon1",onChange:this.onChange,value:this.state.name,error:e.name,id:"name",placeholder:"\u0411\u0430\u043d\u043d\u0435\u0440\u0438\u0439\u043d \u043d\u044d\u0440",className:I()("form-control",{invalid:e.name})})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"file",name:"file","aria-label":"Image",onChange:this.readFile,error:e.image,id:"image",className:I()("file-input",{invalid:e.image})})),r.a.createElement("div",{className:"input-group justify-content-center"},r.a.createElement("button",{className:"btn btn-primary mt-3",type:"submit"},"\u041d\u044d\u043c\u044d\u0445")))))}}]),t}(n.Component),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"product")}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a.state={mode:"home"},a.handleMode=a.handleMode.bind(Object(H.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleMode",value:function(e){this.setState({mode:e})}},{key:"render",value:function(){var e=this,t=this.props.auth.user,a=this.state.mode;return r.a.createElement("main",{className:"sub-container"},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},r.a.createElement("div",{className:"navbar-brand",onClick:function(){return e.handleMode("home")}},r.a.createElement("img",{src:Q.a,width:"30",height:"30",alt:"logo"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#nav-items","aria-controls":"nav-items","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"nav-items"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link btn btn-link",onClick:function(){return e.handleMode("banner")}},"\u0411\u0430\u043d\u043d\u0435\u0440")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link btn btn-link",onClick:function(){return e.handleMode("product")}},"\u0411\u04af\u0442\u044d\u044d\u0433\u0434\u044d\u0445\u04af\u04af\u043d"))),r.a.createElement("button",{onClick:this.onLogoutClick,className:"btn btn-outline-info my-2 my-sm-0 float-right",id:"btn"},"\u0413\u0430\u0440\u0430\u0445"))),"home"===a?r.a.createElement(X,{user:t}):"banner"===a?r.a.createElement(Z,null):r.a.createElement(ee,null))}}]),t}(n.Component),ae=Object(b.b)(function(e){return{auth:e.auth}},{logoutUser:T})(te),ne=a(48),re=a.n(ne),se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).indicators=function(){var e=new Array(a.state.count).fill(0).map(function(e,t){return 0===t?r.a.createElement("li",{"data-target":"#banner","data-slide-to":t,key:t,className:"active",id:"carousel-dot"}):r.a.createElement("li",{"data-target":"#banner","data-slide-to":t,key:t,id:"carousel-dot"})});return r.a.createElement("ol",{className:"carousel-indicators"},e)},a.banners=function(){var e=a.state.banners.map(function(e){return"/"+e.image});return new Array(a.state.banners.length).fill(0).map(function(t,a){return 0===a?r.a.createElement("div",{className:"carousel-item active",key:a},r.a.createElement("img",{src:e[a],alt:a,className:"d-block w-100"})):r.a.createElement("div",{className:"carousel-item",key:a},r.a.createElement("img",{src:e[a],alt:a,className:"d-block w-100"}))})},a.state={count:"",banners:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y().then(function(t){e.setState({count:t.data.count,banners:t.data.banners})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{id:"banner",className:"carousel slide","data-ride":"carousel"},this.indicators(),r.a.createElement("div",{className:"carousel-inner"},this.banners()),r.a.createElement("a",{className:"carousel-control-prev",href:"#banner",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#banner",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))}}]),t}(n.Component),oe=(a(81),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={menu:!1},a.toggle=a.toggle.bind(Object(H.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({menu:!this.state.menu})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-extended"},r.a.createElement("header",{className:"navbar navbar-extend-sm navbar-light",id:"nav"},r.a.createElement("button",{className:"col-sm-auto btn btn-link",href:""},r.a.createElement("img",{src:F.a,alt:"pic",className:"img-fluid",id:"logo"})),r.a.createElement("button",{className:"col btn btn-link"},r.a.createElement("img",{src:re.a,alt:"word",className:"img-fluid",id:"logo"})),r.a.createElement("div",{className:this.state.menu?"change":"nochange",onClick:this.toggle,id:"menu"},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"}))),r.a.createElement(se,null))}}]),t}(n.Component));if(localStorage.jwtToken){var ce=localStorage.jwtToken;A(ce);var le=R()(ce);S.dispatch(P(le));var ie=Date.now()/1e3;le.exp<ie&&(S.dispatch(T()),window.location.href="./components/login")}var ue=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{store:S},r.a.createElement(d.a,null,r.a.createElement("div",{className:"container-extended"},r.a.createElement("div",{className:"row vh-100"},r.a.createElement("div",{className:"col"},r.a.createElement(p.b,{exact:!0,path:"/",component:oe}),r.a.createElement(p.b,{exact:!0,path:"/admin",component:J}),r.a.createElement(p.b,{exact:!0,path:"/admin/register",component:q}),r.a.createElement(p.d,null,r.a.createElement(f,{exact:!0,path:"/admin/dashboard",component:ae})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82),a(83);o.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.38cb5f99.chunk.js.map