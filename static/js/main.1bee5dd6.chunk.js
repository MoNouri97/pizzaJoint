(this.webpackJsonpninjajoint=this.webpackJsonpninjajoint||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),l=a.n(r),o=(a(28),a(22)),s=a(16),c=a(15),p=a(7),m=a(1),d=function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"logo"},i.a.createElement("svg",{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},i.a.createElement("path",{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"}),i.a.createElement("path",{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z"}))),i.a.createElement(m.b.div,{className:"title",animate:{y:0},initial:{y:-200}},i.a.createElement("h1",null,"Pizza Joint")))},u=a(5),b=function(){return i.a.createElement(m.b.div,{className:"home container",animate:{opacity:1,y:0},initial:{opacity:0,y:50},exit:{x:"-100vh",transition:{ease:"easeInOut"}},transition:{delay:.5}},i.a.createElement("h2",null,"Welcome to Pizza Joint"),i.a.createElement(u.b,{to:"/base"},i.a.createElement(m.b.button,{whileHover:{scale:1.3,textShadow:"0 0 8px rgb(255,255,255)",boxShadow:"0 0 8px rgb(255,255,255)",transition:{yoyo:1/0}}},"Create Your Pizza")))},h={hidden:{x:"100vh"},visible:{x:0,transition:{type:"spring",delay:.5}},exit:{x:"-100vh",transition:{ease:"easeInOut"}}},v={hidden:{x:"-100vh"},visible:{x:0,transition:{type:"spring",stiffness:90}}},E=function(e){var t=e.addBase,a=e.pizza;return i.a.createElement(m.b.div,{className:"base container",variants:h,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 1: Choose Your Base"),i.a.createElement("ul",null,["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=a.base===e?"active":"";return i.a.createElement(m.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,textShadow:"0 0 8px rgb(255,255,255)",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),a.base&&i.a.createElement(m.b.div,{className:"next",variants:v},i.a.createElement(u.b,{to:"/toppings"},i.a.createElement(m.b.button,{whileHover:{scale:1.3,textShadow:"0 0 8px rgb(255,255,255)",boxShadow:"0 0 8px rgb(255,255,255)"}},"Next"))))},x={hidden:{x:"100vh"},visible:{x:0,transition:{type:"spring",delay:.5}},exit:{x:"-100vh",transition:{ease:"easeInOut"}}},g=function(e){var t=e.addTopping,a=e.pizza;return i.a.createElement(m.b.div,{className:"toppings container",variants:x,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 2: Choose Toppings"),i.a.createElement("ul",null,["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=a.toppings.includes(e)?"active":"";return i.a.createElement(m.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,textShadow:"0 0 8px rgb(255,255,255)",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),i.a.createElement(u.b,{to:"/order"},i.a.createElement(m.b.button,{whileHover:{scale:1.3,textShadow:"0 0 8px rgb(255,255,255)",boxShadow:"0 0 8px rgb(255,255,255)"}},"Order")))},f={hidden:{x:"100vh"},visible:{x:0,transition:{type:"spring",delay:.5,damping:10,stiffness:120,when:"beforeChildren",staggerChildren:.4}}},y={hidden:{opacity:0},visible:{opacity:1},exit:{x:"-100vh",transition:{ease:"easeInOut"}}},w=function(e){var t=e.pizza,a=e.setModal;return Object(n.useEffect)((function(){setTimeout((function(){return a(!0)}),5e3),console.log("enter")}),[a]),i.a.createElement(m.b.div,{className:"container order",variants:f,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"Thank you for your order :"),i.a.createElement(m.b.p,{variants:y},"You ordered a ",t.base," pizza with:"),t.toppings.map((function(e){return i.a.createElement(m.b.div,{key:e,variants:y},e)})))},z={hidden:{opacity:0},visible:{opacity:1}},C={hidden:{y:"-100vh",opacity:0},visible:{y:200,opacity:1,transition:{delay:.5}}},O=function(e){var t=e.modal;e.setModal;return i.a.createElement(m.a,{exitBeforeEnter:!0},t&&i.a.createElement(m.b.div,{className:"backdrop",variants:z,animate:"visible",initial:"hidden",exit:"hidden"},i.a.createElement(m.b.div,{className:"modal",variants:C},i.a.createElement("p",null,"make another one ?"),i.a.createElement(u.b,{to:"/"},i.a.createElement("button",null,"Start Again")))))};var S=function(){var e=Object(p.f)(),t=Object(n.useState)({base:"",toppings:[]}),a=Object(c.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)(!1),h=Object(c.a)(u,2),v=h[0],x=h[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement(O,{modal:v,setModal:x}),i.a.createElement(m.a,{exitBeforeEnter:!0,onExitComplete:function(){x(!1)}},i.a.createElement(p.c,{location:e,key:e.key},i.a.createElement(p.a,{path:"/base"},i.a.createElement(E,{addBase:function(e){l(Object(s.a)({},r,{base:e}))},pizza:r})),i.a.createElement(p.a,{path:"/toppings"},i.a.createElement(g,{addTopping:function(e){var t;t=r.toppings.includes(e)?r.toppings.filter((function(t){return t!==e})):[].concat(Object(o.a)(r.toppings),[e]),l(Object(s.a)({},r,{toppings:t}))},pizza:r})),i.a.createElement(p.a,{path:"/order"},i.a.createElement(w,{pizza:r,setModal:x})),i.a.createElement(p.a,{path:"/"},i.a.createElement(b,null)))))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,null,i.a.createElement(S,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.1bee5dd6.chunk.js.map