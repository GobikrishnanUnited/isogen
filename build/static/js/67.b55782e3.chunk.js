(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[67,198],{141:function(e,t,c){"use strict";var n=c(63),a=c(12),s=c(58),i=c(1);t.a=function(e){var t=Object(a.g)(),c=t.pathname.split("/")[1],o=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),c?Object(i.jsx)(n.d,{active:!0,children:c}):"",o?Object(i.jsx)(n.d,{active:!0,children:o}):""]})]})}},142:function(e,t,c){"use strict";var n=c(150);c(167);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},144:function(e,t,c){"use strict";c.r(t);var n=c(63),a=(c(2),c(1));function s(e){var t=e.details,c=void 0===t?null:t,s=e.title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(n.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(a.jsxs)(n.eb,{children:[Object(a.jsx)(n.s,{children:s}),c&&Object(a.jsxs)(n.s,{children:[Object(a.jsx)(n.eb,{children:Object(a.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(a.jsx)(n.eb,{className:"d-flex",children:Object(a.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,i=e.subtitle,o=e.creationModificationDate;return Object(a.jsxs)(n.i,{className:"shadow-none",children:[Object(a.jsx)(s,{details:o,title:c}),Object(a.jsxs)(n.j,{className:"p-4",children:[Object(a.jsx)(n.m,{className:"text-muted mb-3",children:i||""}),Object(a.jsx)("div",{children:t})]})]})}},1608:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(9),s=c(27),i=c(2),o=c(12),r=(c(265),c(207),c(150)),l=c(63),d=c(141),j=c(142),b=c(7),h=c(789),u=c(183),O=c(144),x=c(279),m=c(280),f=c(1);function p(e){var t=e.categoryDetails,c=e.handleInputs;e.section,e.valuelist;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(l.A,{children:Object(f.jsx)(l.C,{children:Object(f.jsxs)(O.default,{title:"Correlation Details",creationModificationDate:t,children:[Object(f.jsxs)(l.eb,{children:[Object(f.jsx)(l.s,{md:"4",children:Object(f.jsxs)(l.C,{children:[Object(f.jsxs)(l.H,{children:["Software Version ",Object(f.jsx)("span",{className:"required",children:" *"})]}),Object(f.jsx)(l.E,{type:"text",onChange:c,value:t&&t.software_version,name:"software_version"})]})}),Object(f.jsx)(l.s,{md:"4",children:Object(f.jsxs)(l.C,{children:[Object(f.jsx)(l.H,{children:"File Name"}),Object(f.jsx)(l.E,{type:"text",onChange:c,value:t&&t.file_name,name:"file_name"})]})}),Object(f.jsx)(l.s,{md:"4",children:Object(f.jsxs)(l.C,{children:[Object(f.jsx)(l.H,{children:"File Size"}),Object(f.jsx)(l.E,{type:"text",value:t&&t.file_size,onChange:c,name:"file_size"})]})})]}),Object(f.jsxs)(l.eb,{children:[Object(f.jsx)(l.s,{md:"4",children:Object(f.jsxs)(l.C,{children:[Object(f.jsx)(l.H,{children:"Provider"}),Object(f.jsx)(l.E,{value:t&&t.provider,type:"textarea",onChange:c,name:"provider"})]})}),Object(f.jsx)(l.s,{md:"4",children:Object(f.jsxs)(l.C,{children:[Object(f.jsx)(l.H,{children:"Validation Test Run"}),Object(f.jsx)("br",{}),Object(f.jsx)(l.E,{name:"validation_test",value:"1",type:"radio",defaultChecked:t&&1===t.validation_test&&!0,onChange:c}),"\xa0",Object(f.jsx)(l.H,{children:" Pass "}),"\xa0 \xa0",Object(f.jsx)(l.E,{name:"validation_test",value:"0",type:"radio",defaultChecked:t&&0===t.validation_test&&!0,onChange:c}),"\xa0",Object(f.jsx)(l.H,{children:"Fail"})]})}),Object(f.jsx)(l.s,{md:"4",children:Object(f.jsxs)(l.C,{children:[Object(f.jsx)(l.H,{children:"Validation Date"}),Object(f.jsx)(l.E,{value:t&&t.validation_date,type:"date",onChange:c,name:"validation_date"})]})})]}),Object(f.jsxs)(l.eb,{children:[Object(f.jsx)(l.s,{md:"4",children:Object(f.jsxs)(l.C,{children:[Object(f.jsx)(l.H,{children:"Validated By"}),Object(f.jsx)(l.E,{value:t&&t.validated_by,type:"text",onChange:c,name:"validated_by"})]})}),Object(f.jsx)(l.s,{md:"4",children:Object(f.jsxs)(l.C,{children:[Object(f.jsx)(l.H,{children:"Comments"}),Object(f.jsx)(l.E,{value:t&&t.comments,type:"textarea",onChange:c,name:"comments"})]})})]})]})})})})}t.default=function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),c=t[0],g=t[1],v=Object(i.useState)(),y=Object(s.a)(v,2),C=y[0],_=y[1],N=Object(i.useState)(),w=Object(s.a)(N,2),k=w[0],D=w[1],F=Object(i.useState)(!1),S=Object(s.a)(F,2),H=S[0],M=S[1],E=Object(i.useState)({modelType:""}),T=Object(s.a)(E,2),A=T[0],I=T[1],P=Object(o.i)().id,U=Object(o.h)();return Object(i.useEffect)((function(){b.a.post("/category/getCorrelationById",{correlation_id:P}).then((function(e){g(e.data.data[0])})).catch((function(){Object(j.a)("category Data Not Found","info")})),b.a.get("/category/getSectionTitle").then((function(e){_(e.data.data)})).catch((function(){Object(j.a)("Section not found","info")})),b.a.get("/category/get-ValueList").then((function(e){D(e.data.data)})).catch((function(){Object(j.a)("valuelist not found","info")}))}),[P]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{}),Object(f.jsx)(r.a,{}),Object(f.jsx)(h.a,{editCategoryData:function(){c.modification_date=u.a,""!==c.software_version?b.a.post("/category/editCorrelation",c).then((function(){Object(j.a)("Record editted successfully","success")})).catch((function(){Object(j.a)("Unable to edit record.","error")})):Object(j.a)("Please fill all required fields","warning")},navigate:U,applyChanges:function(){},saveChanges:function(){""!==c.category_title&&U("/Correlation")},deleteCategoryData:function(){b.a.post("/category/deleteCorrelation",{correlation_id:P}).then((function(){Object(j.a)("Record deteled successfully","success")})).catch((function(){Object(j.a)("Unable to delete record.","error")}))},backToList:function(){U("/Correlation")},id:P}),Object(f.jsx)(p,{categoryDetails:c,handleInputs:function(e){g(Object(a.a)(Object(a.a)({},c),{},Object(n.a)({},e.target.name,e.target.value)))},section:C,valuelist:k}),Object(f.jsx)(l.A,{children:Object(f.jsx)(l.C,{children:Object(f.jsxs)(O.default,{title:"Attachments",children:[Object(f.jsx)(l.eb,{children:Object(f.jsx)(l.s,{xs:"12",md:"3",className:"mb-3",children:Object(f.jsx)(l.e,{color:"primary",onClick:function(){I({modelType:"attachment"}),console.log("inside DataForAttachment"),M(!0)},children:"Add"})})}),Object(f.jsx)(x.a,{moduleId:P,roomName:"Category",altTagData:"Category Data",desc:"Category Data",modelType:A.modelType,attachmentModal:H,setAttachmentModal:M}),Object(f.jsx)(m.a,{moduleId:P,roomName:"Category"})]})})})]})}},183:function(e,t,c){"use strict";var n=c(181),a=c.n(n)()().format("DD-MM-YYYY h:mm:ss a");t.a=a},207:function(e,t,c){},208:function(e,t,c){"use strict";var n=c(63),a=c(1),s={textAlign:"right",marginRight:"10px"},i={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(a.jsx)(n.i,{className:"shadow-none",children:Object(a.jsx)(n.j,{style:s,children:Object(a.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:i,children:t})})})}},279:function(e,t,c){"use strict";var n=c(27),a=c(2),s=c(63),i=c(330),o=c(7),r=c(142),l=c(1);t.a=function(e){var t=e.attachmentModal,c=e.setAttachmentModal,d=e.moduleId,j=e.quesId,b=e.roomName,h=e.fileTypes,u=e.altTagData,O=e.desc;console.log("Question ID in Modal:",j);var x=Object(a.useState)([]),m=Object(n.a)(x,2),f=m[0],p=m[1],g=Object(a.useState)(),v=Object(n.a)(g,2),y=v[0],C=v[1],_=Object(a.useState)(null),N=Object(n.a)(_,2),w=N[0],k=N[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(s.N,{isOpen:t,children:[Object(l.jsx)(s.Q,{children:"Upload Media"}),Object(l.jsxs)(s.O,{children:[Object(l.jsxs)(s.C,{children:[Object(l.jsx)(i.a,{multiple:!0,handleChange:function(e){var t=Object.entries(e).map((function(e){return e[1]}));p(e),C(t),console.log(e)},name:"file",types:h}),y?y.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Name: ",e.name]})},e.name)})):Object(l.jsx)("span",{children:"No file selected"})]}),w&&Object(l.jsx)("div",{className:"progress mt-2",children:Object(l.jsx)("div",{className:"progress-bar h-4",role:"progressbar","aria-valuenow":w,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(w,"%")},children:"".concat(w,"% uploaded")})})]}),Object(l.jsxs)(s.P,{children:[Object(l.jsx)(s.e,{color:"primary",className:"shadow-none",onClick:function(){if(f){var e=new FormData;Object.entries(f).map((function(e){return e[1]})).forEach((function(t){e.append("files",t)})),e.append("sub_category_id",j),e.append("record_id",d),e.append("room_name",b),e.append("alt_tag_data",u),e.append("description",O),o.a.post("/file/uploadFiles",e,{onUploadProgress:function(e){console.log(Math.round(e.loaded/e.total*100)),k(Math.round(e.loaded/e.total*100))}}).then((function(){Object(r.a)("Files Uploaded Successfully","success"),setTimeout((function(){window.location.reload()}),400)})).catch((function(){c(!1),Object(r.a)("Unable to upload File","error")}))}else Object(r.a)("No files selected","info")},children:"Upload"}),Object(l.jsx)(s.e,{color:"secondary",className:"shadow-none",onClick:function(){window.location.reload(),c(!1)},children:"Cancel"})]})]})})}},280:function(e,t,c){"use strict";var n=c(27),a=c(2),s=c(484),i=c(142),o=c(7),r=c(1);t.a=function(e){var t=e.moduleId,c=e.quesId,l=e.roomName,d=e.updateFile,j={},b=Object(a.useState)(null),h=Object(n.a)(b,2),u=h[0],O=h[1],x=function(){o.a.post("/file/getListOfFiles",{record_id:t,sub_category_id:c,room_name:l}).then((function(e){O(e.data)})).catch((function(){Object(i.a)("Unable to fetch files","info")}))};return Object(a.useEffect)((function(){x()}),[d]),Object(a.useEffect)((function(){x()}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("table",{style:j,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{style:j,children:[Object(r.jsx)("th",{style:j,children:"File Name"}),Object(r.jsx)("th",{width:"5%"})]})}),Object(r.jsx)("tbody",{children:u?u.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:j,children:Object(r.jsx)("a",{href:"https://isodemo.unitdtechnologies.com/storage/uploads/".concat(e.name),target:"_blank",rel:"noreferrer",children:e.name})}),Object(r.jsx)("td",{style:j,children:Object(r.jsxs)("button",{type:"button",className:"btn shadow-none",onClick:function(){var t;t=e.media_id,o.a.post("/file/deleteFile",{media_id:t}).then((function(){O((function(e){return e.filter((function(e){return e.media_id!==t}))}))})).catch((function(){Object(i.a)("Unable to Delete Media","info")}))},children:[Object(r.jsx)(s.a,{})," "]})})]},e.media_id)})):Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:Object(r.jsx)("p",{children:"no files uploaded yet"})})})})]})})}},789:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));c(2);var n=c(63),a=c(12),s=c(208),i=c(1);function o(e){var t=e.editCategoryData,c=e.applyChanges,o=e.saveChanges,r=e.backToList,l=Object(a.h)();return Object(i.jsx)(n.A,{children:Object(i.jsx)(n.C,{children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(n.eb,{children:[Object(i.jsx)(n.s,{children:Object(i.jsx)(n.e,{className:"shadow-none",color:"primary",onClick:function(){t(),o(),setTimeout((function(){l("/Category")}),1100)},children:"Save"})}),Object(i.jsx)(n.s,{children:Object(i.jsx)(n.e,{color:"primary",className:"shadow-none",onClick:function(){t(),c(),console.log("cancel process")},children:"Apply"})}),Object(i.jsx)(n.s,{children:Object(i.jsx)(n.e,{color:"dark",className:"shadow-none",onClick:function(){r(),console.log("back to list")},children:"Back to List"})})]})})})})}}}]);
//# sourceMappingURL=67.b55782e3.chunk.js.map