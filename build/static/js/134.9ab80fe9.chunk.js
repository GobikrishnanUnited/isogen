(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[134,198],{141:function(e,t,s){"use strict";var c=s(63),n=s(12),i=s(58),r=s(1);t.a=function(e){var t=Object(n.g)(),s=t.pathname.split("/")[1],a=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(c.c,{children:[Object(r.jsx)(c.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),s?Object(r.jsx)(c.d,{active:!0,children:s}):"",a?Object(r.jsx)(c.d,{active:!0,children:a}):""]})]})}},142:function(e,t,s){"use strict";var c=s(150);s(167);t.a=function(e,t){return"success"===t?c.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?c.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?c.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?c.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(c.b)(e)}},144:function(e,t,s){"use strict";s.r(t);var c=s(63),n=(s(2),s(1));function i(e){var t=e.details,s=void 0===t?null:t,i=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(c.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(c.eb,{children:[Object(n.jsx)(c.s,{children:i}),s&&Object(n.jsxs)(c.s,{children:[Object(n.jsx)(c.eb,{children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",s&&s.created_by," ",s&&s.creation_date]})}),Object(n.jsx)(c.eb,{className:"d-flex",children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",s&&s.modified_by," ",s&&s.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,s=e.title,r=e.subtitle,a=e.creationModificationDate;return Object(n.jsxs)(c.i,{className:"shadow-none",children:[Object(n.jsx)(i,{details:a,title:s}),Object(n.jsxs)(c.j,{className:"p-4",children:[Object(n.jsx)(c.m,{className:"text-muted mb-3",children:r||""}),Object(n.jsx)("div",{children:t})]})]})}},1531:function(e,t,s){"use strict";s.r(t);var c=s(3),n=s(9),i=s(27),r=s(2),a=s(63),o=s(150),l=s(12),d=s(141),j=s(144),b=s(7),h=s(142),O=s(1);t.default=function(){var e=Object(r.useState)({key_text:""}),t=Object(i.a)(e,2),s=t[0],u=t[1],x=Object(l.h)();return Object(r.useEffect)((function(){}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(o.a,{}),Object(O.jsx)(a.eb,{children:Object(O.jsx)(a.s,{md:"6",xs:"12",children:Object(O.jsx)(j.default,{title:"Key Details",children:Object(O.jsxs)(a.A,{children:[Object(O.jsx)(a.C,{children:Object(O.jsx)(a.eb,{children:Object(O.jsxs)(a.s,{md:"12",children:[Object(O.jsxs)(a.H,{children:[" ","Key Text ",Object(O.jsx)("span",{className:"required",children:" *"})," "]}),Object(O.jsx)(a.E,{type:"text",name:"key_text",onChange:function(e){u(Object(n.a)(Object(n.a)({},s),{},Object(c.a)({},e.target.name,e.target.value)))}})]})})}),Object(O.jsx)(a.C,{children:Object(O.jsx)(a.eb,{children:Object(O.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(O.jsx)(a.e,{color:"primary",onClick:function(){""!==s.key_text?b.a.post("/setting/insertSetting",s).then((function(e){var t=e.data.data.insertId;console.log(t),Object(h.a)("Setting inserted successfully.","success"),setTimeout((function(){x("/SettingEdit/".concat(t))}),300)})).catch((function(){Object(h.a)("Network connection error.","error")})):Object(h.a)("Please fill all required fields.","error")},type:"button",className:"btn mr-2 shadow-none",children:"Save & Continue"}),Object(O.jsx)(a.e,{onClick:function(){x("/Setting")},type:"button",className:"btn btn-dark shadow-none",children:"Go to List"})]})})})]})})})})]})}}}]);
//# sourceMappingURL=134.9ab80fe9.chunk.js.map