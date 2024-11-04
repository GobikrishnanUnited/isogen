(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[96],{142:function(e,t,r){"use strict";var s=r(150);r(167);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},1484:function(e,t,r){"use strict";r.r(t);r(2);var s=r(63),a=r(713),c=r(711),n=r(58),i=r(150),o=r(466),l=r(7),d=r(467),m=r(468),b=r(142),j=r(1);t.default=function(){var e=c.b().shape({UserName:c.d().required("UserName is required"),email:c.d().email("Email is invalid").required("Email is required"),password:c.d().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:c.d().oneOf([c.c("password"),null],"Passwords must match").required("Confirm Password is required"),acceptTerms:c.a().oneOf([!0],"Accept Terms & Conditions is required")});return Object(j.jsxs)("div",{className:"loginBox",children:[Object(j.jsx)(i.a,{}),Object(j.jsx)(d.a,{className:"position-absolute left bottom-0"}),Object(j.jsx)(m.a,{className:"position-absolute end-0 top"}),Object(j.jsx)(s.u,{fluid:!0,className:"h-100",children:Object(j.jsx)(s.eb,{className:"justify-content-center align-items-center h-100",children:Object(j.jsxs)(s.s,{lg:"12",className:"loginContainer",children:[Object(j.jsx)(o.a,{}),Object(j.jsx)(s.i,{children:Object(j.jsxs)(s.j,{className:"p-4 m-1",children:[Object(j.jsx)("h5",{className:"mb-0",children:"Register"}),Object(j.jsxs)("small",{className:"pb-4 d-block",children:["Already have an account? ",Object(j.jsx)(n.b,{to:"/login",children:"Login"})]}),Object(j.jsx)(a.d,{initialValues:{UserName:"",email:"",password:"",confirmPassword:"",acceptTerms:!1},validationSchema:e,onSubmit:function(e){var t;t=e,l.a.post("/api/register",t).then((function(e){console.log(e.data.data),Object(b.a)("Account is Registered successfully","success")})).catch((function(){Object(b.a)("Unable to register","error")})),alert("SUCCESS!! :-)\n\n".concat(JSON.stringify(e,null,4)))},render:function(e){var t=e.errors,r=e.touched;return Object(j.jsxs)(a.c,{children:[Object(j.jsxs)(s.C,{children:[Object(j.jsx)(s.H,{htmlFor:"firstName",children:"User Name"}),Object(j.jsx)(a.b,{name:"UserName",type:"text",className:"form-control ".concat(t.UserName&&r.UserName?" is-invalid":"")}),Object(j.jsx)(a.a,{name:"UserName",component:"div",className:"invalid-feedback"})]}),Object(j.jsxs)(s.C,{children:[Object(j.jsx)(s.H,{htmlFor:"email",children:"Email"}),Object(j.jsx)(a.b,{name:"email",type:"text",className:"form-control".concat(t.email&&r.email?" is-invalid":"")}),Object(j.jsx)(a.a,{name:"email",component:"div",className:"invalid-feedback"})]}),Object(j.jsxs)(s.C,{children:[Object(j.jsx)(s.H,{htmlFor:"password",children:"Password"}),Object(j.jsx)(a.b,{name:"password",type:"password",className:"form-control".concat(t.password&&r.password?" is-invalid":"")}),Object(j.jsx)(a.a,{name:"password",component:"div",className:"invalid-feedback"})]}),Object(j.jsxs)(s.C,{children:[Object(j.jsx)(s.H,{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(j.jsx)(a.b,{name:"confirmPassword",type:"password",className:"form-control".concat(t.confirmPassword&&r.confirmPassword?" is-invalid":"")}),Object(j.jsx)(a.a,{name:"confirmPassword",component:"div",className:"invalid-feedback"})]}),Object(j.jsxs)(s.C,{inline:!0,className:"form-check",children:[Object(j.jsx)(a.b,{type:"checkbox",name:"acceptTerms",id:"acceptTerms",className:"form-check-input ".concat(t.acceptTerms&&r.acceptTerms?" is-invalid":"")}),Object(j.jsx)(s.H,{htmlFor:"acceptTerms",className:"form-check-label",children:"Accept Terms & Conditions"}),Object(j.jsx)(a.a,{name:"acceptTerms",component:"div",className:"invalid-feedback"})]}),Object(j.jsxs)(s.C,{children:[Object(j.jsx)(s.e,{type:"submit",color:"primary",className:"me-2",children:"Register"}),Object(j.jsx)(s.e,{type:"reset",color:"secondary",children:"Reset"})]})]})}})]})})]})})})]})}},376:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.b8526821.png"},466:function(e,t,r){"use strict";var s=r(58),a=(r(2),r(376)),c=r(1);t.a=function(){return Object(c.jsx)(s.b,{to:"/",className:"d-flex align-items-center gap-2",children:Object(c.jsx)("img",{src:a.a,alt:"Logo",className:"w-100"})})}},467:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var s,a=r(2),c=["title","titleId"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},c=Object.keys(e);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function o(e,t){var r=e.title,o=e.titleId,l=i(e,c);return a.createElement("svg",n({width:376,height:317,viewBox:"0 0 376 317",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},l),r?a.createElement("title",{id:o},r):null,s||(s=a.createElement("path",{d:"M98 59.596C70 -2.00401 21 -4.07068 0 2.59599V316.596L375 315.596C377.4 234.796 297 180.263 257 165.596C215.667 155.929 126 121.196 98 59.596Z",fill:"#2B87F3"})))}var l=a.forwardRef(o);r.p},468:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var s,a,c=r(2),n=["title","titleId"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},c=Object.keys(e);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(e,t){var r=e.title,l=e.titleId,d=o(e,n);return c.createElement("svg",i({width:235,height:255,viewBox:"0 0 235 255",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},d),r?c.createElement("title",{id:l},r):null,s||(s=c.createElement("path",{d:"M68.0998 80.8352C29.568 58.8255 50.7474 26.3993 66.1536 12.9374L221.331 57.3035L173.743 227.335C119.588 252.59 90.715 235.279 83.0476 223.467C77.2742 209.877 90.3539 183.104 97.6153 171.416C117.578 148.566 120.185 122.853 118.994 112.853C112.554 93.0899 82.3813 83.2732 68.0998 80.8352Z",fill:"#62CFF1",fillOpacity:.5})),a||(a=c.createElement("path",{d:"M88 72C43.2 60 55.3333 19 67 0L235 1V197C187.8 240.2 154 230.333 143 220C133.4 207.2 139 174.667 143 160C156.6 129.6 152 101.333 148 91C136 71.8 103 70.3333 88 72Z",fill:"#62CFF1"})))}var d=c.forwardRef(l);r.p}}]);
//# sourceMappingURL=96.e6d72a61.chunk.js.map