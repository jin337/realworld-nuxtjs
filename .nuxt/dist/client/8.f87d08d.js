(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{189:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l}));var n=r(62),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})}},260:function(e,t,r){"use strict";r.r(t);r(29);var n=r(4),o=(r(32),r(189)),c=r(183),l={name:"LoginPage",middleware:"notAuthenticated",computed:{isLogin:function(){return"login"===this.$route.name}},data:function(){return{user:{username:"",email:"",password:""},errors:{}}},methods:{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.isLogin){t.next=7;break}return t.next=4,Object(o.a)({user:e.user});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,Object(o.b)({user:e.user});case 9:t.t0=t.sent;case 10:r=t.t0,data=r.data,console.log("data",data),e.$store.commit("setUser",data.user),c.set("user",data.user),e.$router.push("/"),t.next=23;break;case 18:t.prev=18,t.t1=t.catch(0),console.log("请求失败",t.t1),console.dir(t.t1),e.errors=t.t1.response.data.errors;case 23:case"end":return t.stop()}}),t,null,[[0,18]])})))()}}},m=r(22),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.isLogin?"Sign in":"Sign up"))]),e._v(" "),r("p",{staticClass:"text-xs-center"},[e.isLogin?r("nuxt-link",{attrs:{to:"/register"}},[e._v("Need an account?")]):r("nuxt-link",{attrs:{to:"/login"}},[e._v("Have an account?")])],1),e._v(" "),r("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(t,n){return e._l(t,(function(o,c){return r("li",{key:c},[e._v("\n              "+e._s(n)+" "+e._s(t)+"\n            ")])}))}))],2),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.isLogin?e._e():r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{required:"",type:"text",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{required:"",type:"email",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{required:"",type:"password",placeholder:"Password",minlength:"8"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            "+e._s(e.isLogin?"Sign in":"Sign up")+"\n          ")])])])])])])}),[],!1,null,"01a3346a",null);t.default=component.exports}}]);