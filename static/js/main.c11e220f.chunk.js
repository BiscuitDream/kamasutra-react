(this["webpackJsonpkamasutra-react"]=this["webpackJsonpkamasutra-react"]||[]).push([[0],{123:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n(42),a=n(5),s="SEND-NEW-MESSAGE",c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,text:"Hi"},{id:2,text:"How is your Yo?"},{id:3,text:"Yo!"},{id:4,text:"Yo!"},{id:5,text:"Yo!"}]},i=function(t){return{type:s,newMessageText:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:var n={id:6,text:e.newMessageText};return Object(a.a)(Object(a.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[n])});default:return t}}},127:function(t,e,n){"use strict";n.d(e,"c",(function(){return w})),n.d(e,"b",(function(){return k})),n.d(e,"d",(function(){return _}));var r=n(9),a=n.n(r),s=n(15),c=n(42),i=n(5),u=n(17),o=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(i.a)(Object(i.a)({},t),r):t}))},l="FOLLOW",f="UNFOLLOW",d="SET-USERS",j="SET-CURRENT-PAGE",p="SET-TOTAL-USERS-COUNT",b="TOGGLE-IS-FETCHING",O="TOGGLE-FOLLOWING-PROGRESS",h={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(t){return{type:l,userId:t}},v=function(t){return{type:f,userId:t}},g=function(t){return{type:b,isFetching:t}},x=function(t,e){return{type:O,isFetching:t,userId:e}},w=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),r({type:j,currentPage:t}),n.next=4,u.a.getUsers(t,e);case 4:s=n.sent,r((c=s.items,{type:d,users:c})),r((a=s.totalCount,{type:p,totalUsersCount:a})),r(g(!1));case 8:case"end":return n.stop()}var a,c}),n)})));return function(t){return n.apply(this,arguments)}}()},y=function(){var t=Object(s.a)(a.a.mark((function t(e,n,r,s){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x(!0,n)),t.next=3,r(n);case 3:0===t.sent.resultCode&&e(s(n)),e(x(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),k=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=u.a.followUser.bind(u.a),y(n,t,r,m);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=u.a.unFollowUser.bind(u.a),y(n,t,r,v);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FAKE":return Object(i.a)({},t);case l:return Object(i.a)(Object(i.a)({},t),{},{users:o(t.users,e.userId,"id",{followed:!0})});case f:return Object(i.a)(Object(i.a)({},t),{},{users:o(t.users,e.userId,"id",{followed:!1})});case d:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case j:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case p:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.totalUsersCount});case b:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});case O:return Object(i.a)(Object(i.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(c.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!==e.userId}))});default:return t}}},129:function(t,e,n){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y"}},131:function(t,e,n){t.exports={item:"Post_item__ihtu9"}},136:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(5),a=n(26),s=n(27),c=n(29),i=n(28),u=n(0),o=n.n(u),l=n(10),f=n(14),d=n(1),j=function(t){return{isAuth:t.auth.isAuth}},p=function(t){var e=function(e){Object(c.a)(u,e);var n=Object(i.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),u}(o.a.Component);return Object(f.b)(j)(e)}},16:function(t,e,n){t.exports={nav:"Navbar_nav__2imOE",navList:"Navbar_navList__1GFvw",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},166:function(t,e,n){},167:function(t,e,n){},17:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(130),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f6c84f1f-526b-455b-b54c-ae0f09e46ef0"}}),s={getUsers:function(t,e){return a.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},followUser:function(t){return a.post("follow/".concat(t)).then((function(t){return t.data}))},unFollowUser:function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))},me:function(){return a.get("auth/me").then((function(t){return t.data}))},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:t,password:e,rememberMe:n}).then((function(t){return t.data}))},logout:function(){return a.delete("/auth/login").then((function(t){return t.data}))},getProfile:function(t){return a.get("profile/".concat(t)).then((function(t){return t.data}))},getStatus:function(t){return a.get("/profile/status/".concat(t)).then((function(t){return t.data}))},updateStatus:function(t){return a.put("/profile/status",{status:t}).then((function(t){return t.data}))}}},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},180:function(t,e,n){},299:function(t,e,n){"use strict";n.r(e);var r=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,306)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),s(t),c(t)}))},a=n(0),s=n.n(a),c=n(62),i=n.n(c),u=(n(166),n(26)),o=n(27),l=n(29),f=n(28),d=n(10),j=n(19),p=(n(167),n(16)),b=n.n(p),O=n(1),h=function(){return Object(O.jsx)("nav",{className:b.a.nav,children:Object(O.jsxs)("ul",{className:b.a.navList,children:[Object(O.jsx)("li",{className:b.a.item,children:Object(O.jsx)(j.c,{to:"/profile",activeClassName:b.a.activeLink,children:"Profile"})}),Object(O.jsx)("li",{className:b.a.item,children:Object(O.jsx)(j.c,{to:"/dialogs",activeClassName:b.a.activeLink,children:"Messages"})}),Object(O.jsx)("li",{className:b.a.item,children:Object(O.jsx)(j.c,{to:"/users",activeClassName:b.a.activeLink,children:"Users"})}),Object(O.jsx)("li",{className:b.a.item,children:Object(O.jsx)(j.c,{to:"/news",activeClassName:b.a.activeLink,children:"News"})}),Object(O.jsx)("li",{className:b.a.item,children:Object(O.jsx)(j.c,{to:"/music",activeClassName:b.a.activeLink,children:"Music"})}),Object(O.jsx)("li",{className:b.a.item,children:Object(O.jsx)(j.c,{to:"/settings",activeClassName:b.a.activeLink,children:"Settings"})})]})})},m=(n(176),function(t){return Object(O.jsx)("div",{children:"News"})}),v=(n(177),function(t){return Object(O.jsx)("div",{children:"Music"})}),g=(n(178),function(t){return Object(O.jsx)("div",{children:"Settings"})}),x=n(5),w=n(14),y=(n(180),n(129)),k=n.n(y),_=n(48),S=(s.a.Component,n(86)),P=function(t){var e=Object(a.useState)(!1),n=Object(S.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)(t.status),i=Object(S.a)(c,2),u=i[0],o=i[1];Object(a.useEffect)((function(){o(t.status)}),[t.status]);return Object(O.jsxs)(O.Fragment,{children:[!r&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"no status"})}),r&&Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",onChange:function(t){o(t.target.value)},onBlur:function(){s(!1),t.updateStatus(u)},autoFocus:!0,value:u})})]})},C=function(t){var e=t.userProfile,n=t.status,r=t.updateStatus;return e?Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:k.a.descriptionBlock,children:[Object(O.jsx)("p",{children:Object(O.jsx)("img",{src:e.photos.large})}),Object(O.jsx)(P,{status:n,updateStatus:r})]})}):Object(O.jsx)(_.a,{})},N=n(9),E=n.n(N),I=n(15),T=n(42),L=n(17),A="ADD-POST",U="SET-USER-PROFILE",F="SET-STATUS",M="DELETE-POST",B={posts:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"It's my first post",likesCount:20}],userProfile:null,status:""},D=function(t){return{type:F,status:t}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case A:var n={id:5,message:e.newPostText,likesCount:0};return Object(x.a)(Object(x.a)({},t),{},{posts:[].concat(Object(T.a)(t.posts),[n])});case U:return Object(x.a)(Object(x.a)({},t),{},{userProfile:e.userProfile});case F:return Object(x.a)(Object(x.a)({},t),{},{status:e.status});case M:return Object(x.a)(Object(x.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!==e.postId}))});default:return t}},z=n(90),G=n.n(z),H=n(131),Y=n.n(H),X=function(t){return Object(O.jsxs)("div",{className:Y.a.item,children:[Object(O.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIRZXYvGCN_04MZEpnTlOAhtRMU9iXOlQoQ&usqp=CAU"}),t.message,Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["like ",t.likesCount]})})]})},W=n(124),q=n(125),K=n(71),V=n(93),Z=Object(K.a)(10),J=Object(q.a)({form:"profileAddNewPost"})((function(t){return Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("p",{children:Object(O.jsx)(W.a,{name:"newPostText",component:V.b,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430",validate:[K.b,Z]})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{type:"submit",children:"Add post"})})]})})),Q=s.a.memo((function(t){var e=t.postsData.map((function(t){return Object(O.jsx)(X,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(O.jsxs)("div",{className:G.a.postsBlock,children:[Object(O.jsx)("h3",{children:"My posts"}),Object(O.jsx)(J,{onSubmit:function(e){console.log(e),t.addPost(e.newPostText)}}),Object(O.jsx)("div",{className:G.a.posts,children:e})]})})),$=Object(w.b)((function(t){return{postsData:t.profilePage.posts}}),(function(t){return{addPost:function(e){var n=function(t){return{type:A,newPostText:t}}(e);t(n)}}}))(Q),tt=function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{userProfile:t.userProfile,status:t.status,updateStatus:t.updateStatus}),Object(O.jsx)($,{})]})},et=(n(136),n(11)),nt=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(O.jsx)(tt,Object(x.a)({},this.props))}}]),n}(s.a.Component),rt=Object(et.d)(Object(w.b)((function(t){return{userProfile:t.profilePage.userProfile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:function(t){return function(){var e=Object(I.a)(E.a.mark((function e(n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.getProfile(t);case 2:r=e.sent,n({type:U,userProfile:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getStatus:function(t){return function(){var e=Object(I.a)(E.a.mark((function e(n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.getStatus(t);case 2:r=e.sent,n(D(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateStatus:function(t){return function(){var e=Object(I.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.updateStatus(t);case 2:0===e.sent.resultCode&&n(D(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),d.g)(nt),at=n(38),st=n(68),ct=n.n(st),it=function(t){return Object(O.jsxs)("header",{className:ct.a.header,children:[Object(O.jsx)("img",{src:"https://www.vhv.rs/dpng/d/573-5732595_logo-maker-shop-make-your-logo-in-5.png",width:"50px"}),Object(O.jsx)("div",{className:ct.a.loginBlock,children:t.isAuth?Object(O.jsxs)("p",{children:[t.login," - ",Object(O.jsx)("button",{type:"button",onClick:t.logout,children:"Log out"})," "]}):Object(O.jsx)(j.b,{className:ct.a.loginLink,to:"/login",children:"Login"})})]})},ut=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(it,Object(x.a)({},this.props))}}]),n}(s.a.Component),ot=Object(w.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logout:at.d})(ut),lt="INITIALIZED-SUCCESS",ft={initialized:!1},dt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case lt:return Object(x.a)(Object(x.a)({},t),{},{initialized:!0});default:return t}},jt=n(123),pt=n(127),bt=n(135),Ot=n(126),ht=Object(et.c)({profilePage:R,dialogsPage:jt.a,usersPage:pt.a,auth:at.a,app:dt,form:Ot.a}),mt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||et.d,vt=Object(et.e)(ht,mt(Object(et.a)(bt.a))),gt=s.a.lazy((function(){return n.e(3).then(n.bind(null,309))})),xt=s.a.lazy((function(){return n.e(4).then(n.bind(null,308))})),wt=s.a.lazy((function(){return n.e(5).then(n.bind(null,307))})),yt=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(ot,{}),Object(O.jsx)(h,{}),Object(O.jsx)("div",{className:"app-wrapper-content",children:Object(O.jsx)(s.a.Suspense,{fallback:Object(O.jsx)(_.a,{}),children:Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(O.jsx)(rt,{})}}),Object(O.jsx)(d.b,{path:"/dialogs",render:function(){return Object(O.jsx)(gt,{})}}),Object(O.jsx)(d.b,{path:"/users",render:function(){return Object(O.jsx)(xt,{})}}),Object(O.jsx)(d.b,{path:"/news",component:m}),Object(O.jsx)(d.b,{path:"/music",component:v}),Object(O.jsx)(d.b,{path:"/settings",component:g}),Object(O.jsx)(d.b,{path:"/login",component:wt}),Object(O.jsx)(d.a,{from:"/",to:"/profile"})]})})})]}):Object(O.jsx)(_.a,{})}}]),n}(s.a.Component),kt=Object(w.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(){var t=Object(I.a)(E.a.mark((function t(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(at.b)());case 2:e({type:lt});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(yt),_t=function(){return Object(O.jsx)(j.a,{children:Object(O.jsx)(w.a,{store:vt,children:Object(O.jsx)(kt,{})})})};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(_t,{})}),document.getElementById("root")),r()},38:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return p}));var r=n(9),a=n.n(r),s=n(15),c=n(5),i=n(17),u=n(53),o="samurai-network/auth/SET-AUTH-USER-DATA",l={userId:null,login:null,email:null,isAuth:!1},f=function(t,e,n,r){return{type:o,payload:{userId:t,login:e,email:n,isAuth:r}}},d=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){var n,r,s,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.me();case 2:0===(n=t.sent).resultCode&&(r=n.data,s=r.id,c=r.login,u=r.email,e(f(s,c,u,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(t,e,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c,o,l;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(t,e,n);case 2:0===(c=r.sent).resultCode?s(d()):(o=c.messages.length>0?c.messages[0]:"Some error",l=Object(u.a)("login",{_error:o}),s(l));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},p=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.logout();case 2:0===t.sent.resultCode&&e(f(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(c.a)(Object(c.a)({},t),e.payload);default:return t}}},48:function(t,e,n){"use strict";var r,a=n(89),s=n.n(a),c=n(0),i=["title","titleId"];function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function l(t,e){var n=t.title,a=t.titleId,s=o(t,i);return c.createElement("svg",u({id:"L9",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",ref:e,"aria-labelledby":a},s),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{fill:"#fff",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},c.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}))))}var f=c.forwardRef(l),d=(n.p,n(1));e.a=function(){return Object(d.jsx)("div",{className:s.a.overlay,children:Object(d.jsx)(f,{className:s.a.preloader})})}},65:function(t,e,n){t.exports={field:"CustomFields_field__2n1Rd",error:"CustomFields_error__2mqrG",errorMessage:"CustomFields_errorMessage__P464I",commonError:"CustomFields_commonError__1eqtW"}},68:function(t,e,n){t.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5",loginLink:"Header_loginLink__1yPle"}},71:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r=function(t){if(!t)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"},a=function(t){return function(e){if(e&&e.length>t)return"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 ".concat(t," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},89:function(t,e,n){t.exports={overlay:"Preloader_overlay__10YTb",preloader:"Preloader_preloader__2dvkO"}},90:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(5),a=n(132),s=n(65),c=n.n(s),i=n(1),u=["input","meta"],o=function(t){return function(e){var n=e.input,s=e.meta,o=s.error,l=s.touched,f=(s.submitting,s.submitFailed,s.visited,Object(a.a)(e,u)),d=l&&o;return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{className:c.a.field,children:[Object(i.jsx)(t,Object(r.a)(Object(r.a)({className:d?c.a.error:""},n),f)),d&&Object(i.jsxs)("span",{className:c.a.errorMessage,children:["\xa0",o]})]})})}},l=o("input"),f=o("textarea")}},[[299,1,2]]]);
//# sourceMappingURL=main.c11e220f.chunk.js.map