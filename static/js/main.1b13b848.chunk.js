(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),o=a(12),l=a.n(o),n=(a(19),a(5)),r=(a(20),a(0));function i(e){var t={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#0e3978":"white"};return Object(r.jsxs)("div",{className:"container my-4 py-3 rounded",style:t,children:[Object(r.jsx)("h1",{children:"About us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(r.jsx)("strong",{children:"Analyze your text"})})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(r.jsx)("strong",{children:"Free to use"})})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(r.jsx)("strong",{children:"Browser Compatible"})})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})}var d=a(6);function h(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"form-check form-switch ".concat(e.toggleTxt),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ",e.modeTxt,"mode"]})]})]})]})})}function b(e){var t=Object(s.useState)(""),a=Object(n.a)(t,2),c=a[0],o=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{style:{color:e.toggleTxtC},children:"Enter Text Below"}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:c,style:{backgroundColor:e.toggleTxtA,color:e.toggleTxtC},onChange:function(e){o(e.target.value)},id:"myBox",rows:"8"})}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary",onClick:function(){var t=c.toUpperCase();o(t),e.showAlert("Text has been converted to Uppercase","success")},children:"Convert Uppercase"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toLowerCase();o(t),e.showAlert("Text has been converted to Lowercase","success")},children:"Convert Lowercase"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){o(""),e.showAlert("Text has been Cleared","success")},children:"Clear"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("Text has been copied to clipboard","success")},children:"Copy"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra spaces have been removed","success")},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-2",children:[Object(r.jsx)("h2",{style:{color:e.toggleTxtC},children:"Your Text Summary"}),Object(r.jsxs)("p",{style:{color:e.toggleTxtC},children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(r.jsxs)("p",{style:{color:e.toggleTxtC},children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," Minutes Read"]}),Object(r.jsx)("h2",{style:{color:e.toggleTxtC},children:"Preview"}),Object(r.jsx)("p",{style:{color:e.toggleTxtC},children:c.length>0?c:"Nothing to preview!"})]})]})}function j(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsx)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(r.jsx)("strong",{children:e.alert.msg})})})}h.defaultProps={title:"set title here",aboutText:"set about text here"};var u=a(2);var x=function(){var e=Object(s.useState)(null),t=Object(n.a)(e,2),a=t[0],c=t[1],o=function e(t,a){c({msg:t,type:a}),setTimeout((function(){e(null)}),2e3)},l=Object(s.useState)("light"),x=Object(n.a)(l,2),g=x[0],m=x[1],p=Object(s.useState)("text-dark"),O=Object(n.a)(p,2),v=O[0],y=O[1],w=Object(s.useState)("white"),f=Object(n.a)(w,2),T=f[0],C=f[1],N=Object(s.useState)("black"),k=Object(n.a)(N,2),S=k[0],A=k[1],E=Object(s.useState)("Dark-"),L=Object(n.a)(E,2),B=L[0],I=L[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(h,{title:"TextUtils",aboutText:"About",mode:g,toggleMode:function(){"light"===g?(m("dark"),y("text-light"),document.body.style.backgroundColor="#0C2C5C",C("darkgrey"),A("white"),I("Light-"),o("Dark-mode has been activated","success")):(m("light"),y("text-dark"),document.body.style.backgroundColor="white",C("white"),A("black"),I("Dark-"),o("Light-mode has been activated","success"))},toggleTxt:v,modeTxt:B}),Object(r.jsx)(j,{alert:a}),Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)(b,{showAlert:o,heading:"Enter Text Below",toggleTxtA:T,toggleTxtC:S}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",children:Object(r.jsx)(b,{showAlert:o,heading:"Enter Text Below",toggleTxtA:T,toggleTxtC:S})}),Object(r.jsx)(u.a,{exact:!0,path:"/about",children:Object(r.jsx)(i,{mode:g})})]})]})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),o(e),l(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()}},[[30,1,2]]]);
//# sourceMappingURL=main.1b13b848.chunk.js.map