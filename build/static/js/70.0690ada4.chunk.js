(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[70,198],{141:function(e,t,c){"use strict";var n=c(63),a=c(12),s=c(58),r=c(1);t.a=function(e){var t=Object(a.g)(),c=t.pathname.split("/")[1],o=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(n.c,{children:[Object(r.jsx)(n.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(n.d,{active:!0,children:c}):"",o?Object(r.jsx)(n.d,{active:!0,children:o}):""]})]})}},142:function(e,t,c){"use strict";var n=c(150);c(167);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},144:function(e,t,c){"use strict";c.r(t);var n=c(63),a=(c(2),c(1));function s(e){var t=e.details,c=void 0===t?null:t,s=e.title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(n.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(a.jsxs)(n.eb,{children:[Object(a.jsx)(n.s,{children:s}),c&&Object(a.jsxs)(n.s,{children:[Object(a.jsx)(n.eb,{children:Object(a.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(a.jsx)(n.eb,{className:"d-flex",children:Object(a.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,o=e.creationModificationDate;return Object(a.jsxs)(n.i,{className:"shadow-none",children:[Object(a.jsx)(s,{details:o,title:c}),Object(a.jsxs)(n.j,{className:"p-4",children:[Object(a.jsx)(n.m,{className:"text-muted mb-3",children:r||""}),Object(a.jsx)("div",{children:t})]})]})}},1582:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(9),s=c(27),r=c(2),o=c(63),i=c(276),l=c(12),j=c(58),d=(c(265),c(207),c(150)),b=c(141),O=c(208),h=c(142),u=c(7),x=c(144),m=c(183),p=c(1);function f(e){var t=e.addContactToggleTeam,c=e.addContactModalTeam,n=(e.setEditTeamEditModal,e.id),a=e.teamById,i=(e.setContactDataTeam,e.getTeamById),l=Object(r.useState)(),j=Object(s.a)(l,2),d=j[0],b=j[1],O=Object(r.useState)([]),x=Object(s.a)(O,2),m=x[0],f=x[1];return Object(r.useEffect)((function(){u.a.get("/contact/getContactwithoutCompany").then((function(e){f(e.data.data)})).catch((function(){Object(h.a)("Team titles not found","info")}))}),[n]),Object(p.jsxs)(o.A,{children:[Object(p.jsx)(o.eb,{children:Object(p.jsx)(o.s,{md:"3",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.e,{color:"primary",className:"shadow-none",onClick:t.bind(null),children:"Add New"}),Object(p.jsxs)(o.N,{size:"lg",isOpen:c,toggle:t.bind(null),children:[Object(p.jsx)(o.Q,{style:{backgroundColor:" #0096FF",color:"white"},toggle:t.bind(null),children:"New Contact"}),Object(p.jsx)(o.O,{children:Object(p.jsx)(o.eb,{children:Object(p.jsx)(o.s,{md:"12",children:Object(p.jsx)(o.i,{children:Object(p.jsx)(o.j,{children:Object(p.jsx)(o.A,{children:Object(p.jsx)(o.eb,{children:Object(p.jsx)(o.s,{md:"4",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:"Select Contact"}),Object(p.jsxs)(o.E,{type:"select",onChange:function(e){b(e.target.value)},value:d,children:[Object(p.jsx)("option",{value:"",children:"Please Select"}),m&&m.map((function(e){return Object(p.jsx)("option",{value:e.contact_id,children:e.name},e.contact_id)}))]})]})})})})})})})})}),Object(p.jsxs)(o.P,{children:[Object(p.jsx)(o.e,{className:"shadow-none",color:"primary",onClick:function(){!function(){if(d)if(console.log("selectedContact",d),n){var e={contact_id:d,company_id:n};u.a.post("/contact/editContactCompany",e).then((function(){Object(h.a)("Contact updated successfully.","success"),i()})).catch((function(){Object(h.a)("Network connection error.","error")}))}else Object(h.a)("Company ID not available","error");else Object(h.a)("Please select a team title","danger")}()},children:"Submit"}),Object(p.jsx)(o.e,{color:"secondary",className:"shadow-none",onClick:t.bind(null),children:"Cancel"})]})]})]})})}),Object(p.jsxs)(o.ib,{id:"example",className:"display border border-secondary rounded",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:"Name"})]})}),Object(p.jsx)("tbody",{children:a&&a.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:e.name})]},e.contact_id)}))})]})]})}t.default=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),c=t[0],g=t[1],y=Object(r.useState)(),C=Object(s.a)(y,2),v=C[0],w=C[1],_=Object(l.i)().id,S=Object(l.h)(),k=Object(r.useState)([]),N=Object(s.a)(k,2),E=N[0],T=N[1],B=Object(r.useState)(),H=Object(s.a)(B,2),I=(H[0],H[1]),M=Object(r.useState)(!1),P=Object(s.a)(M,2),D=P[0],R=P[1],z=Object(r.useState)(!1),A=Object(s.a)(z,2),F=(A[0],A[1],Object(r.useState)(null)),L=Object(s.a)(F,2),Y=(L[0],L[1]),G=Object(r.useState)(""),J=Object(s.a)(G,2),Q=(J[0],J[1],Object(r.useState)("")),U=Object(s.a)(Q,2),V=(U[0],U[1],Object(r.useState)("")),W=Object(s.a)(V,2),q=(W[0],W[1],Object(r.useState)()),K=Object(s.a)(q,2),X=(K[0],K[1]),Z=Object(r.useState)(""),$=Object(s.a)(Z,2),ee=$[0],te=$[1];Object(r.useEffect)((function(){u.a.post("/score/getGapReportByCompanyId",{company_id:_}).then((function(e){Y(e.data.data),te(e.data.data)})).catch((function(){Object(h.a)("Over all sales Data Not Found","info")})),u.a.get("/company/getCompany").then((function(e){X(e.data.data)}))}),[]);var ce=Object(r.useState)(0),ne=Object(s.a)(ce,2),ae=ne[0],se=(ne[1],20*ae),re=ee.slice(se,se+20),oe=(Math.ceil(ee.length/20),[{name:"#",selector:"",grow:0,wrap:!0,width:"4%"},{name:"Edit",selector:"edit",cell:function(){return Object(p.jsx)(i.a,{})},grow:0,width:"auto",button:!0,sortable:!1},{name:"ISO Code",selector:"title",sortable:!0,grow:0},{name:"Score",selector:"first_name",sortable:!0,grow:0,wrap:!0},{name:"Result",selector:"result",sortable:!0,grow:2,wrap:!0},{name:"Review Status",selector:"review_status",sortable:!0,grow:2,wrap:!0}]),ie=Object(r.useState)("1"),le=Object(s.a)(ie,2),je=le[0],de=le[1],be=function(e){de(e)},Oe=function(e){g(Object(a.a)(Object(a.a)({},c),{},Object(n.a)({},e.target.name,e.target.value)))},he=function(){u.a.post("/contact/getContactByCompanyId",{company_id:_}).then((function(e){T(e.data.data)})).catch((function(){}))},ue=function(){c.modification_date=m.a,console.log(c),u.a.post("/contact/editCompany",c).then((function(){Object(h.a)("Record edited successfully","success")})).catch((function(){Object(h.a)("Unable to edit record.","error")}))};return Object(r.useEffect)((function(){u.a.post("/contact/getCompanyByCompanyId",{company_id:_}).then((function(e){g(e.data.data[0])})).catch((function(){Object(h.a)("Content Data Not Found","info")})),u.a.get("/contact/getCountry").then((function(e){w(e.data.data)})).catch((function(){})),he()}),[_]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{heading:c&&c.title}),Object(p.jsx)(o.A,{children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(O.a,{children:Object(p.jsxs)(o.eb,{children:[Object(p.jsx)(o.s,{children:Object(p.jsx)(o.e,{color:"primary",onClick:function(){ue(),setTimeout((function(){S("/Customer")}),1100)},children:"Save"})}),Object(p.jsx)(o.s,{children:Object(p.jsx)(o.e,{color:"primary",onClick:function(){ue()},children:"Apply"})}),Object(p.jsx)(o.s,{children:Object(p.jsx)(o.e,{color:"dark",onClick:function(){S("/Company"),console.log("back to list")},children:"Back to List"})})]})}),Object(p.jsxs)(x.default,{title:"Company details",creationModificationDate:c,children:[Object(p.jsx)(d.a,{}),Object(p.jsxs)(o.eb,{children:[Object(p.jsx)(o.s,{md:"3",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:" Customer Id "}),Object(p.jsx)(o.E,{type:"text",onChange:Oe,value:c&&c.company_code,name:"company_code",disabled:!0})]})}),Object(p.jsx)(o.s,{md:"3",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:"Name"}),Object(p.jsx)(o.E,{type:"text",onChange:Oe,value:c&&c.company_name,name:"company_name"})]})}),Object(p.jsx)(o.s,{md:"3",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:"Mobile"}),Object(p.jsx)(o.E,{type:"text",onChange:Oe,value:c&&c.phone,name:"phone"})]})}),Object(p.jsx)(o.s,{md:"3",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:"Email"}),Object(p.jsx)(o.E,{type:"text",onChange:Oe,value:c&&c.email,name:"email"})]})}),Object(p.jsx)(o.s,{md:"3",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:"Street"}),Object(p.jsx)(o.E,{type:"text",onChange:Oe,value:c&&c.address_street,name:"address_street"})]})}),Object(p.jsx)(o.s,{md:"3",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:"State"}),Object(p.jsx)(o.E,{type:"text",onChange:Oe,value:c&&c.address_state,name:"address_state"})]})}),Object(p.jsx)(o.s,{md:"3",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:"Country"}),Object(p.jsxs)(o.E,{type:"select",name:"address_country",onChange:Oe,value:c&&c.address_country,children:[Object(p.jsx)("option",{defaultValue:"selected",value:"",children:"Please Select"}),v&&v.map((function(e){return Object(p.jsx)("option",{value:e.country_code,children:e.name},e.country_code)}))]})]})})]})]})]})}),Object(p.jsxs)(x.default,{title:"More Details",children:[Object(p.jsxs)(o.R,{tabs:!0,children:[Object(p.jsx)(o.S,{children:Object(p.jsx)(o.T,{className:"2"===je?"active":"",onClick:function(){be("2")},children:"  Contacts Linked"})}),Object(p.jsx)(o.S,{children:Object(p.jsx)(o.T,{className:"4"===je?"active":"",onClick:function(){be("4")},children:"Reports"})})]}),Object(p.jsxs)(o.gb,{className:"p-4",activeTab:je,children:[Object(p.jsx)(o.hb,{tabId:"2",children:Object(p.jsx)(o.eb,{children:Object(p.jsx)(f,{setContactDataTeam:I,id:_,teamById:E,addContactToggleTeam:function(){R(!D)},addContactModalTeam:D,getTeamById:he})})}),Object(p.jsx)(o.hb,{tabId:"4",children:Object(p.jsx)(o.eb,{children:Object(p.jsxs)(o.ib,{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:oe.map((function(e){return Object(p.jsx)("td",{children:e.name},e.name)}))})}),Object(p.jsx)("tbody",{children:re&&re.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:Object(p.jsx)(j.b,{to:"/GapAnalysisReportEdit/".concat(e.gap_report_id,"?tab=1"),children:Object(p.jsx)(i.a,{})})}),Object(p.jsx)("td",{children:e.title}),Object(p.jsx)("td",{children:e.correct_count}),Object(p.jsx)("td",{children:e.result}),Object(p.jsx)("td",{children:e.review_status})]},e.gap_report_id)}))})]})})})]})]})]})}},183:function(e,t,c){"use strict";var n=c(181),a=c.n(n)()().format("DD-MM-YYYY h:mm:ss a");t.a=a},207:function(e,t,c){},208:function(e,t,c){"use strict";var n=c(63),a=c(1),s={textAlign:"right",marginRight:"10px"},r={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(a.jsx)(n.i,{className:"shadow-none",children:Object(a.jsx)(n.j,{style:s,children:Object(a.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:r,children:t})})})}},265:function(e,t,c){},276:function(e,t,c){"use strict";var n=c(2),a=c.n(n),s=c(0),r=c.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}var l=Object(n.forwardRef)((function(e,t){var c=e.color,n=void 0===c?"currentColor":c,s=e.size,r=void 0===s?24:s,l=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}))}));l.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},l.displayName="Edit2",t.a=l}}]);
//# sourceMappingURL=70.0690ada4.chunk.js.map