(this["webpackJsonpkamasutra-react"]=this["webpackJsonpkamasutra-react"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(46),a=n(3),c="SEND-NEW-MESSAGE",s={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,text:"Hi"},{id:2,text:"How is your Yo?"},{id:3,text:"Yo!"},{id:4,text:"Yo!"},{id:5,text:"Yo!"}]},i=function(e){return{type:c,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:6,text:t.newMessageText};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},130:function(e,t,n){"use strict";n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return P})),n.d(t,"d",(function(){return k}));var r=n(7),a=n.n(r),c=n(12),s=n(46),i=n(3),o=n(15),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="FOLLOW",j="UNFOLLOW",d="SET-USERS",f="SET-CURRENT-PAGE",b="SET-TOTAL-USERS-COUNT",p="TOGGLE-IS-FETCHING",h="TOGGLE-FOLLOWING-PROGRESS",O={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:l,userId:e}},x=function(e){return{type:j,userId:e}},v=function(e){return{type:p,isFetching:e}},g=function(e,t){return{type:h,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(!0)),r({type:f,currentPage:e}),n.next=4,o.a.getUsers(e,t);case 4:c=n.sent,r((s=c.items,{type:d,users:s})),r((a=c.totalCount,{type:b,totalUsersCount:a})),r(v(!1));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(g(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),P=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.a.followUser.bind(o.a),y(n,e,r,m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.a.unFollowUser.bind(o.a),y(n,e,r,x);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAKE":return Object(i.a)({},e);case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case j:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case p:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},136:function(e,t,n){e.exports={item:"Post_item__ihtu9"}},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),a=n(26),c=n(27),s=n(29),i=n(28),o=n(1),u=n.n(o),l=n(10),j=n(16),d=n(0),f=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(s.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(j.b)(f)(t)}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(135),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f6c84f1f-526b-455b-b54c-ae0f09e46ef0"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unFollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("/auth/login").then((function(e){return e.data}))},getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("/profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("/profile/status",{status:e}).then((function(e){return e.data}))},uploadPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return a.put("/profile",e).then((function(e){return e.data}))}}},168:function(e,t,n){},169:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",navList:"Navbar_navList__1GFvw",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},182:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,309)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(1),c=n.n(a),s=n(66),i=n.n(s),o=(n(168),n(26)),u=n(27),l=n(29),j=n(28),d=n(10),f=n(19),b=(n(169),n(17)),p=n.n(b),h=n(0),O=function(){return Object(h.jsx)("nav",{className:p.a.nav,children:Object(h.jsxs)("ul",{className:p.a.navList,children:[Object(h.jsx)("li",{className:p.a.item,children:Object(h.jsx)(f.c,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(h.jsx)("li",{className:p.a.item,children:Object(h.jsx)(f.c,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(h.jsx)("li",{className:p.a.item,children:Object(h.jsx)(f.c,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})}),Object(h.jsx)("li",{className:p.a.item,children:Object(h.jsx)(f.c,{to:"/news",activeClassName:p.a.activeLink,children:"News"})}),Object(h.jsx)("li",{className:p.a.item,children:Object(h.jsx)(f.c,{to:"/music",activeClassName:p.a.activeLink,children:"Music"})}),Object(h.jsx)("li",{className:p.a.item,children:Object(h.jsx)(f.c,{to:"/settings",activeClassName:p.a.activeLink,children:"Settings"})})]})})},m=(n(178),function(e){return Object(h.jsx)("div",{children:"News"})}),x=(n(179),function(e){return Object(h.jsx)("div",{children:"Music"})}),v=(n(180),function(e){return Object(h.jsx)("div",{children:"Settings"})}),g=n(3),w=n(16),y=(n(182),n(34)),P=n(57),k=n.n(P),_=n(52),S=(c.a.Component,function(e){var t=Object(a.useState)(!1),n=Object(y.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(e.status),i=Object(y.a)(s,2),o=i[0],u=i[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return Object(h.jsxs)(h.Fragment,{children:[!r&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Status"}),": ",Object(h.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"no status"})]}),r&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",onChange:function(e){u(e.target.value)},onBlur:function(){c(!1),e.updateStatus(o)},autoFocus:!0,value:o})})]})}),C=n(97),N=n(32),E=n(127),I=n(128),T=n(42),A=n.n(T),L=Object(I.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"save"})}),r&&Object(h.jsx)("p",{className:A.a.commonError,children:r}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name"}),": ",Object(h.jsx)(E.a,{name:"fullName",component:N.a,type:"text",placeholder:"Full name"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"looking for a job"}),": ",Object(h.jsx)(E.a,{name:"lookingForAJob",component:N.a,type:"checkbox"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills"}),": ",Object(h.jsx)(E.a,{name:"lookingForAJobDescription",component:N.b,placeholder:"My professional skills"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",Object(h.jsx)(E.a,{name:"aboutMe",component:N.b,placeholder:"About me"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),":",Object(h.jsx)("ul",{children:Object.entries(n.contacts).map((function(e){var t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(h.jsx)("li",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("b",{children:n}),":",Object(h.jsx)(E.a,{name:"contacts.".concat(n),component:N.a,value:r,placeholder:n})]})},n)}))})]})]})})),F=function(e){var t=e.contactTitle,n=e.contactValue;return Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:t}),": ",n]})},U=function(e){var t=e.userProfile,n=e.isOwner,r=e.goToEditMode;return Object(h.jsxs)("div",{children:[n?Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:r,children:"edit"})}):null,Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name"}),": ",t.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),":",Object(h.jsx)("ul",{className:k.a.contacts,children:Object.entries(t.contacts).map((function(e){var t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(h.jsx)("li",{className:k.a.contact,children:Object(h.jsx)(F,{contactTitle:n,contactValue:r})},n)}))})]})]})},M=function(e){var t=e.userProfile,n=e.status,r=e.updateStatus,c=e.isOwner,s=e.uploadPhoto,i=e.saveProfile,o=Object(a.useState)(!1),u=Object(y.a)(o,2),l=u[0],j=u[1];if(!t)return Object(h.jsx)(_.a,{});return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:k.a.descriptionBlock,children:[Object(h.jsx)("p",{children:Object(h.jsx)("img",{className:k.a.userPhoto,src:t.photos.large||C.a})}),Object(h.jsx)("p",{children:c&&Object(h.jsx)("input",{type:"file",name:"profile-pic",accept:".jpg, .jpeg, .png",onChange:function(e){e.target.files.length>0&&s(e.target.files[0])}})}),l?Object(h.jsx)(L,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){return j(!1)}))}}):Object(h.jsx)(U,{userProfile:t,isOwner:c,goToEditMode:function(){return j(!0)}}),Object(h.jsx)(S,{status:n,updateStatus:r})]})})},D=n(7),R=n.n(D),B=n(12),z=n(46),G=n(15),H=n(38),Y="ADD-POST",J="SET-USER-PROFILE",V="SET-STATUS",X="DELETE-POST",W="UPLOAD-PHOTO-SUCCESS",q={posts:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"It's my first post",likesCount:20}],userProfile:null,status:""},K=function(e){return{type:V,status:e}},Z=function(e){return function(){var t=Object(B.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.getProfile(e);case 2:r=t.sent,n({type:J,userProfile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:var n={id:5,message:t.newPostText,likesCount:0};return Object(g.a)(Object(g.a)({},e),{},{posts:[].concat(Object(z.a)(e.posts),[n])});case J:return Object(g.a)(Object(g.a)({},e),{},{userProfile:t.userProfile});case V:return Object(g.a)(Object(g.a)({},e),{},{status:t.status});case X:return Object(g.a)(Object(g.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case W:return Object(g.a)(Object(g.a)({},e),{},{userProfile:Object(g.a)(Object(g.a)({},e.userProfile),{},{photos:t.photos})});default:return e}},$=n(95),ee=n.n($),te=n(136),ne=n.n(te),re=function(e){return Object(h.jsxs)("div",{className:ne.a.item,children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIRZXYvGCN_04MZEpnTlOAhtRMU9iXOlQoQ&usqp=CAU"}),e.message,Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:["like ",e.likesCount]})})]})},ae=n(89),ce=Object(ae.a)(10),se=Object(I.a)({form:"profileAddNewPost"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("p",{children:Object(h.jsx)(E.a,{name:"newPostText",component:N.b,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430",validate:[ae.b,ce]})}),Object(h.jsx)("p",{children:Object(h.jsx)("button",{type:"submit",children:"Add post"})})]})})),ie=c.a.memo((function(e){var t=e.postsData.map((function(e){return Object(h.jsx)(re,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(h.jsxs)("div",{className:ee.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)(se,{onSubmit:function(t){console.log(t),e.addPost(t.newPostText)}}),Object(h.jsx)("div",{className:ee.a.posts,children:t})]})})),oe=Object(w.b)((function(e){return{postsData:e.profilePage.posts}}),(function(e){return{addPost:function(t){var n=function(e){return{type:Y,newPostText:e}}(t);e(n)}}}))(ie),ue=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(M,{userProfile:e.userProfile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,uploadPhoto:e.uploadPhoto,saveProfile:e.saveProfile}),Object(h.jsx)(oe,{})]})},le=(n(138),n(11)),je=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(ue,Object(g.a)(Object(g.a)({},this.props),{},{isOwner:!this.props.match.params.userId}))}}]),n}(c.a.Component),de=Object(le.d)(Object(w.b)((function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:Z,getStatus:function(e){return function(){var t=Object(B.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.getStatus(e);case 2:r=t.sent,n(K(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(B.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.updateStatus(e);case 2:0===t.sent.resultCode&&n(K(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},uploadPhoto:function(e){return function(){var t=Object(B.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.uploadPhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:W,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(B.a)(R.a.mark((function t(n,r){var a,c,s,i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,G.a.saveProfile(e);case 3:if(0!==(c=t.sent).resultCode){t.next=8;break}n(Z(a)),t.next=12;break;case 8:throw s=c.messages.length>0?c.messages[0]:"Some error",i=Object(H.a)("editProfile",{_error:s}),n(i),s;case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),d.g)(je),fe=n(41),be=n(71),pe=n.n(be),he=function(e){return Object(h.jsxs)("header",{className:pe.a.header,children:[Object(h.jsx)("img",{src:"https://www.vhv.rs/dpng/d/573-5732595_logo-maker-shop-make-your-logo-in-5.png",width:"50px"}),Object(h.jsx)("div",{className:pe.a.loginBlock,children:e.isAuth?Object(h.jsxs)("p",{children:[e.login," - ",Object(h.jsx)("button",{type:"button",onClick:e.logout,children:"Log out"})," "]}):Object(h.jsx)(f.b,{className:pe.a.loginLink,to:"/login",children:"Login"})})]})},Oe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(he,Object(g.a)({},this.props))}}]),n}(c.a.Component),me=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:fe.d})(Oe),xe="INITIALIZED-SUCCESS",ve={initialized:!1},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},we=n(126),ye=n(130),Pe=n(137),ke=n(129),_e=Object(le.c)({profilePage:Q,dialogsPage:we.a,usersPage:ye.a,auth:fe.a,app:ge,form:ke.a}),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,Ce=Object(le.e)(_e,Se(Object(le.a)(Pe.a))),Ne=c.a.lazy((function(){return n.e(3).then(n.bind(null,312))})),Ee=c.a.lazy((function(){return n.e(4).then(n.bind(null,311))})),Ie=c.a.lazy((function(){return n.e(5).then(n.bind(null,310))})),Te=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(h.jsxs)("div",{className:"app-wrapper",children:[Object(h.jsx)(me,{}),Object(h.jsx)(O,{}),Object(h.jsx)("div",{className:"app-wrapper-content",children:Object(h.jsx)(c.a.Suspense,{fallback:Object(h.jsx)(_.a,{}),children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(de,{})}}),Object(h.jsx)(d.b,{path:"/dialogs",render:function(){return Object(h.jsx)(Ne,{})}}),Object(h.jsx)(d.b,{path:"/users",render:function(){return Object(h.jsx)(Ee,{})}}),Object(h.jsx)(d.b,{path:"/news",component:m}),Object(h.jsx)(d.b,{path:"/music",component:x}),Object(h.jsx)(d.b,{path:"/settings",component:v}),Object(h.jsx)(d.b,{path:"/login",component:Ie}),Object(h.jsx)(d.a,{from:"/",to:"/profile"})]})})})]}):Object(h.jsx)(_.a,{})}}]),n}(c.a.Component),Ae=Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(B.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(fe.b)());case 2:t({type:xe});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Te),Le=function(){return Object(h.jsx)(f.a,{children:Object(h.jsx)(w.a,{store:Ce,children:Object(h.jsx)(Ae,{})})})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Le,{})}),document.getElementById("root")),r()},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var r=n(3),a=n(132),c=n(42),s=n.n(c),i=n(0),o=["input","meta"],u=function(e){return function(t){var n=t.input,c=t.meta,u=c.error,l=c.touched,j=(c.submitting,c.submitFailed,c.visited,Object(a.a)(t,o)),d=l&&u;return Object(i.jsxs)("div",{className:s.a.field,children:[Object(i.jsx)(e,Object(r.a)(Object(r.a)({className:d?s.a.error:""},n),j)),d&&Object(i.jsxs)("span",{className:s.a.errorMessage,children:["\xa0",u]})]})}},l=u("input"),j=u("textarea")},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b}));var r=n(7),a=n.n(r),c=n(12),s=n(3),i=n(15),o=n(38),u="samurai-network/auth/SET-AUTH-USER-DATA",l={userId:null,login:null,email:null,isAuth:!1},j=function(e,t,n,r){return{type:u,payload:{userId:e,login:t,email:n,isAuth:r}}},d=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,s=r.login,o=r.email,t(j(c,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s,u,l;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(s=r.sent).resultCode?c(d()):(u=s.messages.length>0?s.messages[0]:"Some error",l=Object(o.a)("login",{_error:u}),c(l));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},42:function(e,t,n){e.exports={field:"CustomFields_field__2n1Rd",error:"CustomFields_error__2mqrG",errorMessage:"CustomFields_errorMessage__P464I",commonError:"CustomFields_commonError__1eqtW"}},52:function(e,t,n){"use strict";var r,a=n(92),c=n.n(a),s=n(1),i=["title","titleId"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){var n=e.title,a=e.titleId,c=u(e,i);return s.createElement("svg",o({id:"L9",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?s.createElement("title",{id:a},n):null,r||(r=s.createElement("path",{fill:"#fff",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},s.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}))))}var j=s.forwardRef(l),d=(n.p,n(0));t.a=function(){return Object(d.jsx)("div",{className:c.a.overlay,children:Object(d.jsx)(j,{className:c.a.preloader})})}},57:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",userPhoto:"ProfileInfo_userPhoto__1UIR7",contacts:"ProfileInfo_contacts__3y62P",contact:"ProfileInfo_contact__1N3gp"}},71:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5",loginLink:"Header_loginLink__1yPle"}},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"},a=function(e){return function(t){if(t&&t.length>e)return"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},92:function(e,t,n){e.exports={overlay:"Preloader_overlay__10YTb",preloader:"Preloader_preloader__2dvkO"}},95:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},97:function(e,t,n){"use strict";t.a=n.p+"static/media/user.2e4b3717.png"}},[[302,1,2]]]);
//# sourceMappingURL=main.7878fc15.chunk.js.map