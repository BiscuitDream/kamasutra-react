(this["webpackJsonpkamasutra-react"]=this["webpackJsonpkamasutra-react"]||[]).push([[4],{304:function(e,s,a){e.exports={dialogsBlock:"Dialogs_dialogsBlock__2Rxz4",dialogs:"Dialogs_dialogs__2xRSA",messages:"Dialogs_messages__1w_Up"}},305:function(e,s,a){e.exports={dialog:"DialogItem_dialog__3tDA2",active:"DialogItem_active__2qnc5"}},306:function(e,s,a){e.exports={message:"Message_message__1MOXo"}},314:function(e,s,a){"use strict";a.r(s);a(1);var t=a(127),n=a(304),c=a.n(n),i=a(305),o=a.n(i),l=a(19),r=a(0),d=function(e){var s="/dialogs/".concat(e.id);return Object(r.jsx)("li",{className:o.a.dialog,children:Object(r.jsx)(l.c,{to:s,activeClassName:o.a.active,children:e.name})})},g=a(306),j=a.n(g),u=function(e){return Object(r.jsx)("li",{className:j.a.message,children:e.text})},m=a(128),b=a(129),x=a(32),O=a(89),_=Object(O.a)(100),f=Object(b.a)({form:"addMessage"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("p",{children:Object(r.jsx)(m.a,{name:"newMessageText",component:x.b,placeholder:"Enter your message",validate:[O.b,_]})}),Object(r.jsx)("p",{children:Object(r.jsx)("button",{type:"submit",children:"Send message"})})]})})),h=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(r.jsx)(d,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(r.jsx)(u,{text:e.text},e.id)}));return Object(r.jsxs)("section",{className:c.a.dialogsBlock,children:[Object(r.jsx)("ul",{className:c.a.dialogs,children:a}),Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{className:c.a.messages,children:t}),Object(r.jsx)(f,{onSubmit:function(s){console.log(s),e.sendNewMessage(s.newMessageText)}})]})]})},p=a(16),v=a(139),N=a(11);s.default=Object(N.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendNewMessage:function(s){var a=Object(t.b)(s);e(a)}}})),v.a)(h)}}]);
//# sourceMappingURL=4.59587f94.chunk.js.map