(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[143],{1035:function(e,t,c){},1577:function(e,t,c){"use strict";c.r(t);var n=c(63),r=c(2),s=c(39),i=c(72),o=c(1),a=[{bg:"primary"},{bg:"success"},{bg:"danger"},{bg:"info"},{bg:"warning"}],l=function(){var e=Object(s.c)((function(e){return e.notesReducer.notes[e.notesReducer.notesContent-1]})),t=Object(s.c)((function(e){return e.notesReducer.notes.length+1})),c=Object(s.b)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"border-bottom p-3 text-end",children:Object(o.jsx)(n.e,{className:"btn btn-success ms-auto",size:"sm",onClick:function(e){e.preventDefault(),c(Object(i.e)(t,"dummy Title","primary"))},children:"Add New Note"})}),e&&!1===e.deleted?Object(o.jsxs)("div",{className:"p-4",children:[Object(o.jsxs)(n.C,{children:[Object(o.jsx)(n.H,{for:"title1",tag:"h5",children:"Edit Note"}),Object(o.jsx)(n.E,{id:"title1",name:"title1",type:"textarea",rows:"5",value:e.title,onChange:function(t){return c(Object(i.d)(e.id,"title",t.target.value))}})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h5",{children:"Change Note color"}),Object(o.jsx)("div",{className:"button-group",children:a.map((function(t){return Object(o.jsx)(n.e,{color:t.bg,size:"sm",onClick:function(){return c(Object(i.d)(e.id,"color","".concat(t.bg)))},children:e.color===t.bg?Object(o.jsx)("i",{className:"bi bi-check"}):Object(o.jsx)("i",{className:"bi bi-circle"})},t.bg)}))})]}):Object(o.jsxs)("div",{className:"d-flex mt-3 p-4 flex-column align-items-center justify-content-center",children:[Object(o.jsx)("i",{className:"ti-agenda display-5"}),Object(o.jsx)("h4",{className:"mt-2",children:"Please select a Note or Add Note."})]})]})},b=c(9),j=function(e){var t=e.onClick,c=e.id,r=e.active,s=e.noteTitle,i=e.noteColor,a=e.noteDatef,l=e.onDeleteClick;return Object(o.jsx)(n.S,{className:"border-bottom cursor-pointer ".concat(r===c?"bg-light":""),children:Object(o.jsxs)("div",{onClick:t,className:"border-start p-3 border-4 border-".concat(i),children:[Object(o.jsx)("h5",{className:"text-truncate noteText",children:s}),Object(o.jsxs)("div",{className:"d-flex",children:[Object(o.jsx)("small",{children:a}),Object(o.jsx)(n.qb,{placement:"top",target:"delete",children:"Delete"}),Object(o.jsx)("i",{onClick:l,className:"bi bi-trash ms-auto",id:"delete"})]})]})})},d=function(){var e=Object(s.b)();Object(r.useEffect)((function(){e(Object(i.g)())}),[e]);var t=Object(s.c)((function(e){return function(e,t){return""!==t?e.filter((function(e){return!e.deleted&&e.title.toLocaleLowerCase().concat(" ").includes(t.toLocaleLowerCase())})):e.filter((function(e){return!e.deleted}))}(e.notesReducer.notes,e.notesReducer.noteSearch)})),c=Object(s.c)((function(e){return e.notesReducer.notesContent}));return Object(o.jsx)(n.R,{children:t&&t.length?t.map((function(t){return Object(o.jsx)(j,Object(b.a)(Object(b.a)({},t),{},{active:c,onClick:function(){return e(Object(i.c)(t.id))},onDeleteClick:function(){return e(Object(i.a)(t.id))},noteTitle:t.title,noteColor:t.color,noteDatef:new Date(t.datef).toLocaleDateString({weekday:"short",year:"numeric",month:"short"})}),t.id)})):"no notes"})},u=function(){var e=Object(s.c)((function(e){return e.notesReducer.noteSearch})),t=Object(s.b)();return Object(o.jsx)("div",{className:"p-3 border-bottom",children:Object(o.jsx)(n.A,{children:Object(o.jsx)("div",{className:"position-relative has-icon-left",children:Object(o.jsx)(n.E,{className:"form-control",id:"searchNote",name:"searchNote",type:"text",onChange:function(e){return t(Object(i.b)(e.target.value))},value:e,placeholder:"Search Notes..."})})})})},h=c(670);c(1035),t.default=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(n.i,{children:Object(o.jsx)(n.j,{children:Object(o.jsx)(h.a,{leftContent:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)(d,{})]}),rightContent:Object(o.jsx)(l,{})})})})})}},670:function(e,t,c){"use strict";var n=c(27),r=c(2),s=c.n(r),i=c(63),o=c(331),a=c(1);t.a=function(e){var t=e.leftContent,c=e.rightContent,r=s.a.useState(!1),l=Object(n.a)(r,2),b=l[0],j=l[1];return Object(a.jsxs)("div",{className:"d-lg-flex d-md-block border position-relative leftRightBox",children:[Object(a.jsxs)("div",{className:"leftPart flex-shrink-0  bg-white border-end ".concat(b?"showLeftPart":""),children:[Object(a.jsx)(i.e,{className:"d-lg-none d-md-block openCloseBtn",color:"danger",children:Object(a.jsx)("i",{className:"bi ".concat(b?"bi-x":"bi-list"),onClick:function(){j(!b)}})}),Object(a.jsx)(o.a,{style:{height:"calc(100vh - 200px)"},children:t})]}),Object(a.jsxs)("div",{className:"rightPart",children:[c,b?Object(a.jsx)("div",{className:"contentOverlay"}):""]})]})}}}]);
//# sourceMappingURL=143.c7c6bf16.chunk.js.map