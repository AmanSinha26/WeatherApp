(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(8),r=n.n(s),o=(n(6),n(2)),a=n(3),l=n.n(a),j=n(4),u=n(0),d=function(e){var t={display:"".concat(e.Display)};return Object(u.jsx)("div",{className:"img",children:Object(u.jsx)("img",{className:"image",src:e.Imageurl,alt:"imag",style:t})})};n(15).config();var b=new(window.SpeechRecognition||window.webkitSpeechRecognition);b.continuous=!0,b.interimResults=!0,b.lang="en-US";var p=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)("none"),r=Object(o.a)(s,2),a=r[0],p=r[1],h=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.querySelector("#hd1"),console.log(y),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(y,"&appid=").concat("51060af077c6188bf71470fe92fb7d5d")).then((function(e){return t.innerText="Speak City Name :-",e.json()})).then((function(e){var t=document.querySelector("#span1"),n=document.querySelector("#span2"),c=document.querySelector("#span3"),s=document.querySelector("#span4"),r=document.querySelector("#span5"),o=document.querySelector("#span6"),a=e.weather[0].main;"Clear"===a&&(a=e.weather[0].description),fetch("https://api.pexels.com/v1/search?query=".concat(a),{headers:{Authorization:"563492ad6f917000010000017ea19148d32e4b26af3b35fe109b5167"}}).then((function(e){return e.json()})).then((function(e){console.log(e),"clear sky"===a?(p("inline"),i(e.photos[1].src.medium)):"Rain"===a?(p("inline"),i(e.photos[5].src.medium)):(p("inline"),i(e.photos[2].src.medium))})).catch((function(e){console.log(e)})),t.innerHTML="Weather: ".concat(e.weather[0].description),n.innerHTML="Temperature: &nbsp Avg: ".concat((e.main.temp-273).toPrecision(4),"\xb0C"),c.innerHTML="&nbsp Max: ".concat((e.main.temp_max-273).toPrecision(4),"\xb0C"),s.innerHTML="&nbsp Min: ".concat((e.main.temp_min-273).toPrecision(4),"\xb0C"),r.innerHTML="Coordinates: &nbsp Long: ".concat(e.coord.lon.toPrecision(4)),o.innerHTML="&nbsp Lat: ".concat(e.coord.lat.toPrecision(4))})).catch((function(e){t.innerText="Error !!",t.style.color="red"}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(c.useState)(!1),x=Object(o.a)(m,2),O=x[0],f=x[1],g=Object(c.useState)(null),v=Object(o.a)(g,2),y=v[0],S=v[1];Object(c.useEffect)((function(){C()}),[O]);var C=function(){O?b.start():(b.stop(),b.onend=function(){console.log("Stopped Mic on Click")}),b.onstart=function(){console.log("Mics on")},b.onresult=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");console.log(t),S(t),b.onerror=function(e){console.log(e.error)}}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[O?Object(u.jsx)("span",{id:"span",children:Object(u.jsx)("i",{class:"fas fa-microphone"})}):Object(u.jsx)("span",{id:"span",children:Object(u.jsx)("i",{class:"fas fa-microphone-slash"})}),Object(u.jsx)("button",{className:"imgtext",onClick:function(){return f((function(e){return!e}))},children:"Start/Stop"})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"hd1",children:"Speak City Name :-"}),Object(u.jsx)("input",{className:"input",value:y}),Object(u.jsx)("button",{className:"button",onClick:h,children:"Search"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{id:"imagetext",children:[Object(u.jsx)(d,{Imageurl:n,Display:a}),Object(u.jsxs)("div",{className:"imagetext",children:[Object(u.jsx)("h4",{id:"hd4",children:Object(u.jsx)("span",{id:"span1"})}),Object(u.jsxs)("ul",{id:"list",children:[Object(u.jsx)("li",{id:"span2"}),Object(u.jsx)("li",{id:"span3"}),Object(u.jsx)("li",{id:"span4"})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("ul",{id:"list1",children:[Object(u.jsx)("li",{id:"span5"}),Object(u.jsx)("li",{id:"span6"})]})]})]})]})},h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)("none"),r=Object(o.a)(s,2),a=r[0],b=r[1],p=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.querySelector(".input"),n=document.querySelector("#hd1"),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t.value,"&appid=").concat("51060af077c6188bf71470fe92fb7d5d")).then((function(e){return n.innerText="Enter City Name :-",e.json()})).then((function(e){var t=document.querySelector("#span1"),n=document.querySelector("#span2"),c=document.querySelector("#span3"),s=document.querySelector("#span4"),r=document.querySelector("#span5"),o=document.querySelector("#span6"),a=e.weather[0].main;"Clear"===a&&(a=e.weather[0].description),fetch("https://api.pexels.com/v1/search?query=".concat(a),{headers:{Authorization:"563492ad6f917000010000017ea19148d32e4b26af3b35fe109b5167"}}).then((function(e){return e.json()})).then((function(e){console.log(e),"clear sky"===a?(b("inline"),i(e.photos[1].src.medium)):(b("inline"),i(e.photos[2].src.medium))})).catch((function(e){console.log(e)})),t.innerHTML="Weather: ".concat(e.weather[0].description),n.innerHTML="Temperature: &nbsp Avg: ".concat((e.main.temp-273).toPrecision(4),"\xb0C"),c.innerHTML="&nbsp Max: ".concat((e.main.temp_max-273).toPrecision(4),"\xb0C"),s.innerHTML="&nbsp Min: ".concat((e.main.temp_min-273).toPrecision(4),"\xb0C"),r.innerHTML="Coordinates: &nbsp Long: ".concat(e.coord.lon.toPrecision(4)),o.innerHTML="&nbsp Lat: ".concat(e.coord.lat.toPrecision(4))})).catch((function(e){n.innerText="Error !!",n.style.color="red"}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"hd1",children:"Enter City Name :-"}),Object(u.jsx)("input",{className:"input"}),Object(u.jsx)("button",{className:"button",onClick:p,children:"Search"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{id:"imagetext",children:[Object(u.jsx)(d,{Imageurl:n,Display:a}),Object(u.jsxs)("div",{className:"textimage",children:[Object(u.jsx)("h4",{id:"hd4",children:Object(u.jsx)("span",{id:"span1"})}),Object(u.jsxs)("ul",{id:"listt",children:[Object(u.jsx)("li",{id:"span2"}),Object(u.jsx)("li",{id:"span3"}),Object(u.jsx)("li",{id:"span4"})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("ul",{id:"list1",children:[Object(u.jsx)("li",{id:"span5"}),Object(u.jsx)("li",{id:"span6"})]})]})]})]})},m=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],s=function(){i("voice")},r=function(){i("text")};return console.log(n),"voice"===n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"button",onClick:s,children:"Voice"}),Object(u.jsx)("button",{className:"button",onClick:r,children:"Text"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(p,{})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"button",onClick:s,children:"Voice"}),Object(u.jsx)("button",{className:"button",onClick:r,children:"Text"}),Object(u.jsx)("br",{}),Object(u.jsx)(h,{})]})};var x=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"App",children:[Object(u.jsx)("h1",{className:"heading1",children:"Weather App"}),Object(u.jsx)(m,{})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),O()},6:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.f3cb6f8e.chunk.js.map