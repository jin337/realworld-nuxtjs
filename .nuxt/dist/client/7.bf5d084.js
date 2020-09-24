(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(t,e,r){"use strict";r.d(e,"i",(function(){return o})),r.d(e,"k",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"g",(function(){return m})),r.d(e,"d",(function(){return d})),r.d(e,"e",(function(){return O})),r.d(e,"h",(function(){return h})),r.d(e,"l",(function(){return _})),r.d(e,"j",(function(){return C})),r.d(e,"a",(function(){return j}));var n=r(62),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},d=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},O=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},_=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},C=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},j=function(t,body){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:{body:body}})}},258:function(t,e,r){"use strict";r.r(e);r(78),r(30),r(61);var n=r(43),o=(r(31),r(13),r(44),r(41)),c=(r(29),r(4)),l=r(63),f=r(62),v=function(t){return Object(f.b)({method:"GET",url:"/api/profiles/".concat(t)})},m=r(188);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"UserProfile",watchQuery:["tab","page"],asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,f,d,O,h,_,C,j,w,k,y,x,E,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=r.tab,c=void 0===n?"my":n,l=r.page,f=void 0===l?1:l,d=t.params.username,h=(f-1)*(O=5),(_="my"===c?{author:d}:{favorited:d}).limit=O,_.offset=h,e.next=9,Promise.all([v(d),Object(m.i)(_)]);case 9:return C=e.sent,j=Object(o.a)(C,2),w=j[0],k=j[1],y=w.data.profile,x=k.data,E=x.articles,P=x.articlesCount,E.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{tab:c,limit:O,page:f,profile:y,articles:E,articlesCount:P});case 17:case"end":return e.stop()}}),e)})))()},computed:O(O({},Object(l.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.user){e.next=2;break}return e.abrupt("return",t.$router.push("/login"));case 2:if(article.favoriteDisabled=!0,!article.favorited){e.next=10;break}return e.next=6,Object(m.f)(article.slug);case 6:article.favorited=!1,article.favoritesCount-=1,e.next=14;break;case 10:return e.next=12,Object(m.b)(article.slug);case 12:article.favorited=!0,article.favoritesCount+=1;case 14:article.favoriteDisabled=!1;case 15:case"end":return e.stop()}}),e)})))()},onFollow:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.user){r.next=2;break}return r.abrupt("return",e.$router.push("/login"));case 2:if(t.followDisabled=!0,!t.following){r.next=10;break}return r.next=6,Object(m.g)(t.username);case 6:t.following=!1,t.favoritesCount-=1,r.next=14;break;case 10:return r.next=12,Object(m.c)(t.username);case 12:t.following=!0,t.followesCount+=1;case 14:t.followDisabled=!1;case 15:case"end":return r.stop()}}),r)})))()}}},_=r(22),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v("\n            "+t._s(t.profile.bio)+"\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{active:t.profile.following},on:{click:function(e){return t.onFollow(t.profile)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n             \n            Follow "+t._s(t.profile.username)+" \n          ")])])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"my"===t.tab},attrs:{exact:"",to:{name:"profile",params:{profile:t.profile.username},query:{tab:"my"}}}},[t._v("My Articles")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"favorited"===t.tab},attrs:{exact:"",to:{name:"profile",params:{profile:t.profile.username},query:{tab:"favorited"}}}},[t._v("Favorited Articles")])],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n              ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(article.tagList,(function(e){return r("li",{key:e,staticClass:"tag-default tag-pill tag-outline"},[t._v("\n                "+t._s(e)+"\n              ")])})),0)])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"profile",params:{username:t.profile.username},query:{page:e,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2)])])])}),[],!1,null,"64a6ab3c",null);e.default=component.exports}}]);