(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[68,198],{141:function(e,t,n){"use strict";var a=n(63),c=n(12),s=n(58),i=n(1);t.a=function(e){var t=Object(c.g)(),n=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(a.c,{children:[Object(i.jsx)(a.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),n?Object(i.jsx)(a.d,{active:!0,children:n}):"",r?Object(i.jsx)(a.d,{active:!0,children:r}):""]})]})}},142:function(e,t,n){"use strict";var a=n(150);n(167);t.a=function(e,t){return"success"===t?a.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?a.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?a.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?a.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(a.b)(e)}},144:function(e,t,n){"use strict";n.r(t);var a=n(63),c=(n(2),n(1));function s(e){var t=e.details,n=void 0===t?null:t,s=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(a.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(c.jsxs)(a.eb,{children:[Object(c.jsx)(a.s,{children:s}),n&&Object(c.jsxs)(a.s,{children:[Object(c.jsx)(a.eb,{children:Object(c.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",n&&n.created_by," ",n&&n.creation_date]})}),Object(c.jsx)(a.eb,{className:"d-flex",children:Object(c.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",n&&n.modified_by," ",n&&n.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,n=e.title,i=e.subtitle,r=e.creationModificationDate;return Object(c.jsxs)(a.i,{className:"shadow-none",children:[Object(c.jsx)(s,{details:r,title:n}),Object(c.jsxs)(a.j,{className:"p-4",children:[Object(c.jsx)(a.m,{className:"text-muted mb-3",children:i||""}),Object(c.jsx)("div",{children:t})]})]})}},1581:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(9),s=n(27),i=n(2),r=n(12),l=n(63),o=(n(265),n(207),n(765)),d=n(150),j=n(141),u=n(144),b=n(279),h=n(280),f=n(142),O=n(7),x=n(1);function m(e){var t=e.stafftypedetails,n=e.staffeditdetails,a=e.handleInputs,c=e.userdetails,s=e.staffteamdetails;return Object(x.jsx)(l.A,{children:Object(x.jsx)(l.C,{children:Object(x.jsx)(u.default,{title:"User Details",creationModificationDate:n,children:Object(x.jsxs)(l.eb,{children:[Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsxs)(l.H,{children:["Name ",Object(x.jsx)("span",{className:"required",children:" *"})]}),Object(x.jsx)(l.E,{type:"text",onChange:a,value:n&&n.first_name,name:"first_name"})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsxs)(l.H,{children:["Email ",Object(x.jsx)("span",{className:"required",children:" *"})]}),Object(x.jsx)(l.E,{type:"email",onChange:a,value:n&&n.email,name:"email"})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Password"}),Object(x.jsx)(l.E,{type:"text",onChange:a,value:n&&n.pass_word,name:"pass_word"})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Status"}),Object(x.jsxs)(l.E,{type:"select",name:"status",onChange:a,value:n&&n.status,children:[Object(x.jsx)("option",{value:"",children:"Please Select"}),Object(x.jsx)("option",{defaultValue:"Current",children:"Current"}),Object(x.jsx)("option",{value:"Archive",children:"Archive"})]})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"User Group"}),Object(x.jsxs)(l.E,{type:"select",name:"user_group_id",onChange:a,value:n&&n.user_group_id,children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),c&&c.map((function(e){return Object(x.jsx)("option",{value:e.user_group_id,children:e.title},e.user_group_id)}))]})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Staff Team"}),Object(x.jsxs)(l.E,{type:"select",name:"team",onChange:a,value:n&&n.team,children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),s&&s.map((function(e){return Object(x.jsx)("option",{value:e.value,children:e.value},e.value)}))]})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Staff Type"}),Object(x.jsxs)(l.E,{type:"select",name:"staff_type",onChange:a,value:n&&n.staff_type,children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),t&&t.map((function(e){return Object(x.jsx)("option",{value:e.value,children:e.value},e.value)}))]})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Staff Rate"}),Object(x.jsx)(l.E,{type:"text",onChange:a,value:n&&n.staff_rate,name:"staff_rate"})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Position"}),Object(x.jsx)(l.E,{type:"text",onChange:a,value:n&&n.position,name:"position"})]})}),Object(x.jsx)(l.s,{md:"4",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Published"}),Object(x.jsx)("br",{}),Object(x.jsx)(l.H,{children:"Yes"}),Object(x.jsx)(l.E,{name:"published",value:"1",type:"radio",defaultChecked:n&&1===n.published&&!0,onChange:a}),Object(x.jsx)(l.H,{children:"No"}),Object(x.jsx)(l.E,{name:"published",value:"0",type:"radio",defaultChecked:n&&0===n.published&&!0,onChange:a})]})})]})})})})}function p(e){var t=e.staffeditdetails,n=e.handleInputs,a=e.allCountries;return Object(x.jsx)(l.A,{children:Object(x.jsx)(l.C,{children:Object(x.jsx)(u.default,{title:"Address",children:Object(x.jsxs)(l.eb,{children:[Object(x.jsx)(l.s,{md:"6",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Street Address"}),Object(x.jsx)(l.E,{type:"text",onChange:n,value:t&&t.address_street,name:"address_street"})]})}),Object(x.jsx)(l.s,{md:"6",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Town/Suburb"}),Object(x.jsx)(l.E,{type:"text",onChange:n,value:t&&t.address_town,name:"address_town"})]})}),Object(x.jsx)(l.s,{md:"6",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"State"}),Object(x.jsx)(l.E,{type:"text",onChange:n,value:t&&t.address_state,name:"address_state"})]})}),Object(x.jsx)(l.s,{md:"6",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Country"}),Object(x.jsxs)(l.E,{type:"select",name:"address_country",onChange:n,value:t&&t.address_country,children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),a&&a.map((function(e){return Object(x.jsx)("option",{value:e.country_code,children:e.name},e.country_code)}))]})]})})]})})})})}var g=n(208);function v(e){var t=e.applyChanges,n=e.backToList,a=e.editStaffData,c=e.navigate;return Object(x.jsx)(l.A,{children:Object(x.jsx)(l.C,{children:Object(x.jsx)(g.a,{children:Object(x.jsxs)(l.eb,{children:[Object(x.jsx)(l.s,{children:Object(x.jsx)(l.e,{className:"shadow-none",color:"primary",onClick:function(){a(),setTimeout((function(){c("/User")}),1100)},children:"Save"})}),Object(x.jsx)(l.s,{children:Object(x.jsx)(l.e,{className:"shadow-none",color:"primary",onClick:function(){a(),t()},children:"Apply"})}),Object(x.jsx)(l.s,{children:Object(x.jsx)(l.e,{className:"shadow-none",color:"dark",onClick:function(){window.confirm("Are you sure you want to cancel  \n  \n You will lose any changes made")?c("/Staff"):t()},children:"Cancel"})}),Object(x.jsx)(l.s,{children:Object(x.jsx)(l.e,{className:"shadow-none",color:"dark",onClick:function(){n()},children:"Back to List"})})]})})})})}var y=n(183);t.default=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],g=t[1],C=Object(i.useState)(),_=Object(s.a)(C,2),w=_[0],S=_[1],N=Object(i.useState)(),E=Object(s.a)(N,2),k=E[0],P=E[1],H=Object(i.useState)(),T=Object(s.a)(H,2),D=T[0],F=T[1],A=Object(i.useState)(""),I=Object(s.a)(A,2),M=I[0],U=I[1],L=Object(i.useState)(""),q=Object(s.a)(L,2),B=q[0],V=q[1],G=Object(i.useState)(!1),Y=Object(s.a)(G,2),Z=Y[0],z=Y[1],R=Object(i.useState)([]),J=Object(s.a)(R,2),Q=J[0],$=J[1],W=Object(i.useState)({modelType:""}),K=Object(s.a)(W,2),X=K[0],ee=K[1],te=Object(r.i)().id,ne=Object(r.h)(),ae=function(e){console.log(e),g(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},e.target.name,e.target.value)))},ce=function(){O.a.post("/staff/getStaffById",{staff_id:te}).then((function(e){var t=e.data.data;t.status||(t.status="Current"),t.user_group_id||(t.user_group_id="1"),g(t)})).catch((function(){Object(f.a)("Staff Data Not Found","info")}))};return Object(i.useEffect)((function(){O.a.get("/staff/getStaffTypeFromValueList").then((function(e){S(e.data.data)})).catch((function(){Object(f.a)("Staff Data Not Found","info")})),O.a.get("/staff/getStaffTeamFromValueList").then((function(e){P(e.data.data)})).catch((function(){Object(f.a)("Staff Data Not Found","info")})),O.a.get("/staff/getUserGroup").then((function(e){F(e.data.data)})).catch((function(){Object(f.a)("Staff Data Not Found","info")})),ce(),O.a.get("/staff/getCountry").then((function(e){$(e.data.data)})).catch((function(){Object(f.a)("Country Data Not Found","info")}))}),[te]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(d.a,{}),Object(x.jsx)(v,{navigate:ne,saveChanges:function(){n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.email)?""!==n.email&&""!==n.first_name&&ne("/Staff"):Object(f.a)("Enter valid email","warning"):Object(f.a)("Email is required","warning"),window.location.reload()},applyChanges:function(){},backToList:function(){ne("/Staff")},editStaffData:function(){n.modification_date=y.a,n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.email)?""!==n.email&&""!==n.first_name?O.a.post("/staff/editStaff",n).then((function(){Object(f.a)("Record editted successfully","success"),ce()})).catch((function(){Object(f.a)("Unable to edit record.","error")})):Object(f.a)("Please fill all required fields","warning"):Object(f.a)("Enter valid email","warning"):Object(f.a)("Email is required","warning")},deleteStaffData:function(){O.a.post("/staff/deleteStaff",{staff_id:te}).then((function(){Object(f.a)("Record editted successfully","success")})).catch((function(){Object(f.a)("Unable to edit record.","error")}))},id:te}),Object(x.jsx)(j.a,{heading:n&&n.staff_id}),Object(x.jsx)(m,{stafftypedetails:w,staffeditdetails:n,handleInputs:ae,userdetails:D,staffteamdetails:k}),Object(x.jsx)(p,{staffeditdetails:n,handleInputs:ae,allCountries:Q}),Object(x.jsx)(l.A,{children:Object(x.jsx)(l.C,{children:Object(x.jsxs)(u.default,{title:"Picture",children:[Object(x.jsx)(l.eb,{children:Object(x.jsx)(l.s,{xs:"12",md:"3",className:"mb-3",children:Object(x.jsx)(l.e,{className:"shadow-none",color:"primary",onClick:function(){U("StaffPic"),V(["JPG","JPEG","PNG","GIF"]),ee({modelType:"picture"}),z(!0)},children:Object(x.jsx)(o.a,{className:"rounded-circle",width:"20"})})})}),Object(x.jsx)(b.a,{moduleId:te,attachmentModal:Z,setAttachmentModal:z,roomName:M,fileTypes:B,altTagData:"Staff Data",desc:"Staff Data",recordType:"Picture",mediaType:X.modelType}),Object(x.jsx)(h.a,{moduleId:te,roomName:"StaffPic",recordType:"Picture"})]})})})]})}},183:function(e,t,n){"use strict";var a=n(181),c=n.n(a)()().format("DD-MM-YYYY h:mm:ss a");t.a=c},207:function(e,t,n){},208:function(e,t,n){"use strict";var a=n(63),c=n(1),s={textAlign:"right",marginRight:"10px"},i={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(c.jsx)(a.i,{className:"shadow-none",children:Object(c.jsx)(a.j,{style:s,children:Object(c.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:i,children:t})})})}},279:function(e,t,n){"use strict";var a=n(27),c=n(2),s=n(63),i=n(330),r=n(7),l=n(142),o=n(1);t.a=function(e){var t=e.attachmentModal,n=e.setAttachmentModal,d=e.moduleId,j=e.quesId,u=e.roomName,b=e.fileTypes,h=e.altTagData,f=e.desc;console.log("Question ID in Modal:",j);var O=Object(c.useState)([]),x=Object(a.a)(O,2),m=x[0],p=x[1],g=Object(c.useState)(),v=Object(a.a)(g,2),y=v[0],C=v[1],_=Object(c.useState)(null),w=Object(a.a)(_,2),S=w[0],N=w[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(s.N,{isOpen:t,children:[Object(o.jsx)(s.Q,{children:"Upload Media"}),Object(o.jsxs)(s.O,{children:[Object(o.jsxs)(s.C,{children:[Object(o.jsx)(i.a,{multiple:!0,handleChange:function(e){var t=Object.entries(e).map((function(e){return e[1]}));p(e),C(t),console.log(e)},name:"file",types:b}),y?y.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("span",{children:["Name: ",e.name]})},e.name)})):Object(o.jsx)("span",{children:"No file selected"})]}),S&&Object(o.jsx)("div",{className:"progress mt-2",children:Object(o.jsx)("div",{className:"progress-bar h-4",role:"progressbar","aria-valuenow":S,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(S,"%")},children:"".concat(S,"% uploaded")})})]}),Object(o.jsxs)(s.P,{children:[Object(o.jsx)(s.e,{color:"primary",className:"shadow-none",onClick:function(){if(m){var e=new FormData;Object.entries(m).map((function(e){return e[1]})).forEach((function(t){e.append("files",t)})),e.append("sub_category_id",j),e.append("record_id",d),e.append("room_name",u),e.append("alt_tag_data",h),e.append("description",f),r.a.post("/file/uploadFiles",e,{onUploadProgress:function(e){console.log(Math.round(e.loaded/e.total*100)),N(Math.round(e.loaded/e.total*100))}}).then((function(){Object(l.a)("Files Uploaded Successfully","success"),setTimeout((function(){window.location.reload()}),400)})).catch((function(){n(!1),Object(l.a)("Unable to upload File","error")}))}else Object(l.a)("No files selected","info")},children:"Upload"}),Object(o.jsx)(s.e,{color:"secondary",className:"shadow-none",onClick:function(){window.location.reload(),n(!1)},children:"Cancel"})]})]})})}},280:function(e,t,n){"use strict";var a=n(27),c=n(2),s=n(484),i=n(142),r=n(7),l=n(1);t.a=function(e){var t=e.moduleId,n=e.quesId,o=e.roomName,d=e.updateFile,j={},u=Object(c.useState)(null),b=Object(a.a)(u,2),h=b[0],f=b[1],O=function(){r.a.post("/file/getListOfFiles",{record_id:t,sub_category_id:n,room_name:o}).then((function(e){f(e.data)})).catch((function(){Object(i.a)("Unable to fetch files","info")}))};return Object(c.useEffect)((function(){O()}),[d]),Object(c.useEffect)((function(){O()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("table",{style:j,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{style:j,children:[Object(l.jsx)("th",{style:j,children:"File Name"}),Object(l.jsx)("th",{width:"5%"})]})}),Object(l.jsx)("tbody",{children:h?h.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:j,children:Object(l.jsx)("a",{href:"https://isodemo.unitdtechnologies.com/storage/uploads/".concat(e.name),target:"_blank",rel:"noreferrer",children:e.name})}),Object(l.jsx)("td",{style:j,children:Object(l.jsxs)("button",{type:"button",className:"btn shadow-none",onClick:function(){var t;t=e.media_id,r.a.post("/file/deleteFile",{media_id:t}).then((function(){f((function(e){return e.filter((function(e){return e.media_id!==t}))}))})).catch((function(){Object(i.a)("Unable to Delete Media","info")}))},children:[Object(l.jsx)(s.a,{})," "]})})]},e.media_id)})):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:Object(l.jsx)("p",{children:"no files uploaded yet"})})})})]})})}},765:function(e,t,n){"use strict";var a=n(2),c=n.n(a),s=n(0),i=n.n(s);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,i=void 0===s?24:s,o=l(e,["color","size"]);return c.a.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),c.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),c.a.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),c.a.createElement("polyline",{points:"21 15 16 10 5 21"}))}));o.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},o.displayName="Image",t.a=o}}]);
//# sourceMappingURL=68.22940356.chunk.js.map