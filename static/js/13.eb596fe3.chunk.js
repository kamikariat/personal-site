(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[13],{174:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(5),c=n(21),r=n(1),i=function(e){var t=e.label,n=e.link,a=e.value,s=e.format;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{width:"70%",children:t}),Object(r.jsx)("td",{children:n?Object(r.jsx)("a",{href:n,children:s(a)}):s(a)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,u=function(e){var t=e.data;return Object(r.jsx)("table",{children:Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},o=n(22),j=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("2001-05-12T13:00:00");s(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(r.jsx)(r.Fragment,{children:n})},b=[{key:"age",label:"Current age",value:Object(r.jsx)(j,{})},{key:"countries",label:"Continents visited",value:"NA, EU, AS"},{key:"location",label:"Current city",value:"Berkeley, CA  "}],d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Some stats about me"}),Object(r.jsx)(u,{data:b})]})},h=n(160),f=n.n(h),O=n(56),m=n(162),p=n(72),v=n.n(p),x=[{label:"Last updated at",key:"pushed_at",link:"https://github.com/kevinismyname/personal-site/commits",format:function(e){return v()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2031",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],k=function(){var e=Object(a.useState)(x),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useCallback)(Object(m.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/kevinismyname/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(x.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{value:Object.keys(n).includes(e.key)?n[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){c()}),[c]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Some stats about this site"}),Object(r.jsx)(u,{data:n})]})};t.default=function(){return Object(r.jsx)(c.a,{title:"Stats",description:"Some statistics about Tony Kam and tonykam.me",children:Object(r.jsxs)("article",{className:"post",id:"stats",children:[Object(r.jsx)("header",{children:Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(s.b,{to:"/stats",children:"Stats"})})})}),Object(r.jsx)(d,{}),Object(r.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=13.eb596fe3.chunk.js.map