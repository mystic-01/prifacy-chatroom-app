(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var s,c=n(1),a=n(68),i=n.n(a),r=n(18),o=n(2),j=n(6),l=n(16),u=n.p+"static/media/july-banner.ab3138e9.svg",m=(n(78),n(0)),b=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],b=i[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("nav",{children:[Object(m.jsxs)("button",{className:"brand",children:[Object(m.jsx)("div",{className:"brand-logo",children:Object(m.jsx)(l.b,{})})," Prifacy"]}),Object(m.jsxs)("button",{className:"action-button action-button-2",children:[Object(m.jsx)(l.a,{}),"  Get Support"]}),Object(m.jsxs)("button",{className:"action-button",children:[Object(m.jsx)(l.d,{})," Register"]})]}),Object(m.jsxs)("main",{className:"main-container",children:[Object(m.jsxs)("section",{className:"flex-container",children:[Object(m.jsxs)("p",{className:"biggest-heading",children:["Wanna chat with",Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"biggest-heading-orange",children:"more privacy?"})]}),Object(m.jsx)("p",{className:"second-heading",children:"Have real time conversations with friends & family on Prifacy!"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsxs)("span",{className:"form-label",children:[Object(m.jsx)("div",{className:"triangle",children:Object(m.jsx)(l.c,{})})," Username"]}),Object(m.jsx)("input",{type:"text",className:"form-input",onChange:function(e){return s(e.target.value)},required:!0})]}),Object(m.jsxs)("div",{className:"form-group form-group-2",children:[Object(m.jsxs)("span",{className:"form-label",children:[Object(m.jsx)("div",{className:"triangle",children:Object(m.jsx)(l.c,{})})," Room"]}),Object(m.jsx)("input",{type:"text",className:"form-input form-input-2",onChange:function(e){return b(e.target.value)},required:!0})]}),Object(m.jsx)(r.b,{onClick:function(e){return n&&o?null:e.preventDefault},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(m.jsxs)("button",{className:"submit-btn",type:"submit",children:[Object(m.jsx)("div",{className:"triangle",children:Object(m.jsx)(l.c,{})})," Sign In"]})})]}),Object(m.jsx)("section",{className:"flex-container",children:Object(m.jsx)("img",{src:u,alt:"fox background"})})]})]})},O=(n(84),function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],l=i[1];return Object(m.jsx)("div",{className:"joinOuterContainer",children:Object(m.jsxs)("div",{className:"joinInnerContainer",children:[Object(m.jsx)("h1",{className:"heading",children:"Join!"}),Object(m.jsx)("input",{placeholder:"Name",type:"text",className:"joinInput",onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("input",{placeholder:"Room",type:"text",className:"joinInput mt-20",onChange:function(e){return l(e.target.value)}}),Object(m.jsx)(r.b,{onClick:function(e){return n&&o?null:e.preventDefault},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(m.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})}),d=n(73),x=n(70),h=n.n(x),g=n(71),f=n.n(g),p=(n(120),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="),A=(n(121),function(e){var t=e.room;return Object(m.jsxs)("div",{className:"infoBar",children:[Object(m.jsxs)("div",{className:"leftInnerContainer",children:[Object(m.jsx)("img",{src:p,alt:"online icon",className:"onlineIcon"}),Object(m.jsx)("h3",{children:t})]}),Object(m.jsx)("div",{className:"rightInnerContainer",children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close icon",className:"closeIcon"})})})]})}),N=n(72),v=n.n(N),C=(n(143),n(40)),I=(n(144),function(e){var t=e.message,n=t.user,s=t.text,c=!1;return e.name.trim().toLowerCase()===n&&(c=!0),c?Object(m.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(m.jsx)("p",{className:"sentText pr-10",children:n}),Object(m.jsx)("div",{className:"messageBox backgroundBlue",children:Object(m.jsx)("p",{className:"messageText colorWhite",children:Object(C.emojify)(s)})})]}):Object(m.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(m.jsx)("div",{className:"messageBox backgroundLight",children:Object(m.jsx)("p",{className:"messageText colorDark",children:Object(C.emojify)(s)})}),Object(m.jsx)("p",{className:"sentText pl-10",children:n})]})}),S=function(e){var t=e.messages,n=e.name;return Object(m.jsx)(v.a,{className:"messages",children:t.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)(I,{message:e,name:n})},t)}))})},y=n.p+"static/media/paper-plane.9e8d13f9.png",k=(n(145),function(e){var t=e.message,n=e.setMessage,s=e.sendMessage;return Object(m.jsxs)("form",{className:"form",children:[Object(m.jsx)("input",{type:"text",value:t,className:"input",placeholder:"Type a message",onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s(e):null}}),Object(m.jsx)("button",{className:"sendButton",onClick:function(e){return s(e)},children:Object(m.jsx)("img",{src:y,className:"img-send-button",alt:"send icon"})})]})}),R=(n(146),function(e){var t=e.users;return console.log(t),Object(m.jsxs)("div",{className:"textContainer",children:[Object(m.jsx)("h1",{className:"users-heading",children:"People in current room:"}),Object(m.jsx)("hr",{className:"heading-rule"}),Object(m.jsx)("div",{className:"activeContainer",children:Object(m.jsx)("h2",{children:t.map((function(e){return Object(m.jsxs)("div",{className:"activeItem",children:[Object(m.jsx)("img",{className:"onlineIcon",src:p,alt:"online icon"}),e.name]},e.name)}))})})]})}),w=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(j.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],O=Object(c.useState)(""),x=Object(j.a)(O,2),g=x[0],p=x[1],N=Object(c.useState)([]),v=Object(j.a)(N,2),C=v[0],I=v[1],y=Object(c.useState)([]),w=Object(j.a)(y,2),E=w[0],U=w[1],B="https://prifacy-chatroom-app.herokuapp.com/";Object(c.useEffect)((function(){var e=h.a.parse(t.search),n=e.name,c=e.room;return r(n),b(c),(s=f()(B,{transports:["websocket","polling","flashsocket"]})).emit("join",{name:n,room:c},(function(){})),function(){s.emit("disconnect"),s.off()}}),[B,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){I([].concat(Object(d.a)(C),[e]))}))}),[C]),Object(c.useEffect)((function(){s.on("roomData",(function(e){var t=e.users;U(t)}))}),[E]);return console.log(i,g,C),Object(m.jsxs)("div",{className:"outerContainer",children:[Object(m.jsx)("div",{className:"user-container",children:Object(m.jsx)(R,{users:E})}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(A,{room:u}),Object(m.jsx)(S,{messages:C,name:i}),Object(m.jsx)(k,{message:g,setMessage:p,sendMessage:function(e){e.preventDefault(),g&&s.emit("sendMessage",g,(function(){p("")}))}})]})]})},E=(n(147),function(){return Object(m.jsxs)(r.a,{children:[Object(m.jsx)(o.a,{path:"/",component:b,exact:!0}),Object(m.jsx)(o.a,{path:"/join",component:O,exact:!0}),Object(m.jsx)(o.a,{path:"/chat",component:w})]})});i.a.render(Object(m.jsx)(E,{}),document.querySelector("#root"))},78:function(e,t,n){},84:function(e,t,n){}},[[148,1,2]]]);
//# sourceMappingURL=main.65c6f21a.chunk.js.map