(this["webpackJsonpreact-js-calculator"]=this["webpackJsonpreact-js-calculator"]||[]).push([[0],[,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.d63691ca.png"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(14),a(15),a(1)),i=["+","-","\xd7","\xf7"],u=i.concat([".","=","C","CE","=/-"]),m=function(e,t,a){var n;return"\xf7"===e&&(n=void 0===t?a:parseFloat(t)/parseFloat(a)),"\xd7"===e&&(n=void 0===t?a:parseFloat(t)*parseFloat(a)),"-"===e&&(n=void 0===t?a:parseFloat(t)-parseFloat(a)),"+"===e&&(n=void 0===t?a:parseFloat(t)+parseFloat(a)),n},s=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),u=Object(l.a)(i,2),d=u[0],v=u[1],E=Object(n.useState)("0"),f=Object(l.a)(E,2),b=f[0],O=f[1],j=Object(n.useState)("0"),g=Object(l.a)(j,2),p=g[0],h=g[1],C=Object(n.useState)(""),N=Object(l.a)(C,2),x=N[0],L=N[1];return Object(n.useEffect)((function(){!function(){var e=document.querySelector(".display"),t=document.querySelector(".historico");e.scrollLeft=e.scrollWidth,t.scrollLeft=t.scrollWidth}()}),[b,c,d,p]),Object(n.useEffect)((function(){var e="";c.forEach((function(t,a){e+=t,d[a]&&(e+=d[a])})),L(e);var t=function(e,t){var a=e[0];e.forEach((function(e,n){t[n-1]&&(a=m(t[n-1],a,e))}));try{return 1*a.toFixed(6)}catch(n){}return a}(c,d);h(void 0===t?"0":t)}),[c,d,h]),r.a.createElement(s.Provider,{value:{mNumeros:[c,o],mOperadores:[d,v],mDigito:[b,O],mResultado:[p,h],mHistorico:[x,L]}},e.children)},v=(a(16),a(8)),E=a.n(v);var f=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:E.a,alt:"Logo"}),"React Js Calculator")};a(17);var b=function(){var e=Object(n.useContext)(s).mResultado,t=Object(l.a)(e,1)[0];return r.a.createElement("div",{className:"display"},t)};a(18);var O=function(){var e=Object(n.useContext)(s).mHistorico[0];return r.a.createElement("div",{className:"historico"},e)};a(19),a(2);var j=function(){var e=Object(n.useContext)(s),t=e.mDigito,a=e.mNumeros,c=e.mOperadores,o=e.mResultado,i=Object(l.a)(t,2),u=i[0],m=i[1],d=a[1],v=o[1],E=c[1];return r.a.createElement("div",{className:"botao cinza",onClick:function(){"="===u?(d([]),E([]),m("0"),v("0")):(m("0"),v("0"))}},"CE")};var g=function(){var e=Object(n.useContext)(s),t=e.mDigito,a=e.mNumeros,c=e.mOperadores,o=e.mResultado,l=t[1],i=a[1],u=o[1],m=c[1];return r.a.createElement("div",{className:"botao cinza",onClick:function(){i([]),m([]),l("0"),u("0")}},"C")};var p=function(){var e=Object(n.useContext)(s),t=e.mDigito,a=e.mResultado,c=Object(l.a)(t,2),o=c[0],u=c[1],m=a[1];return r.a.createElement("div",{className:"botao cinza",onClick:function(){var e=o;"="!==e&&(i.includes(e)||((e=e.slice(0,-1)).length<1&&(e="0"),u(e),m(e)))}},"\u2190")},h=a(3);var C=function(e){var t=Object(n.useContext)(s),a=t.mDigito,c=t.mNumeros,o=t.mOperadores,u=Object(l.a)(a,2),m=u[0],d=u[1],v=Object(l.a)(c,2),E=v[0],f=v[1],b=Object(l.a)(o,2),O=b[0],j=b[1];return r.a.createElement("div",{className:"botao cinza",onClick:function(e){var t=m;if(""===t||i.includes(t)){if(O.length===E.length){var a=Object(h.a)(O);a[a.length-1]=e.target.innerHTML,j(a)}}else"="!==t&&(1*t===0||1===t.length&&"."===t?t="0":"."===t[t.length-1]&&(t+="0"),f([].concat(Object(h.a)(E),[t]))),t=e.target.innerHTML,j([].concat(Object(h.a)(O),[t])),d(t)}},e.operador)};var N=function(e){var t=Object(n.useContext)(s),a=t.mDigito,c=t.mNumeros,o=t.mOperadores,u=t.mResultado,m=Object(l.a)(a,2),d=m[0],v=m[1],E=c[1],f=o[1],b=u[1];return r.a.createElement("div",{className:"botao",onClick:function(e){var t=d;t.includes(".")&&"."===e.target.innerHTML||("="===t?(E([]),f([]),t=e.target.innerHTML):(i.includes(t)&&(t="0"),"0"===t?t=e.target.innerHTML:t+=e.target.innerHTML),"."!==e.target.innerHTML||"0"!==t&&"."!==t||(t="0"+e.target.innerHTML),setTimeout((function(){v(t),b(t)}),1))}},e.numero)};var x=function(){var e=Object(n.useContext)(s),t=e.mDigito,a=e.mNumeros,c=e.mOperadores,o=e.mResultado,i=a[1],m=o[1],d=c[1],v=Object(l.a)(t,2),E=v[0],f=v[1];return r.a.createElement("div",{className:"botao",onClick:function(){var e=E;if("="===e&&(i([]),d([]),f("0"),m("0")),!u.includes(e)&&1*parseFloat(e)!==0){var t=e.charAt(0);e="-"===t?e.substring(1):"-"+e,f(e),m(e)}}},"+/-")};var L=function(){var e=Object(n.useContext)(s),t=e.mDigito,a=e.mNumeros,c=Object(l.a)(t,2),o=c[0],i=c[1],m=Object(l.a)(a,2),d=m[0],v=m[1];return r.a.createElement("div",{className:"botao azul",onClick:function(e){"="!==o&&(u.includes(o)||v([].concat(Object(h.a)(d),[o])),i(e.target.innerHTML))}},"=")};var k=function(){return r.a.createElement("div",{className:"botoes"},r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(g,null),r.a.createElement(p,null),r.a.createElement(C,{operador:"\xf7"})),r.a.createElement("div",null,r.a.createElement(N,{numero:"7"}),r.a.createElement(N,{numero:"8"}),r.a.createElement(N,{numero:"9"}),r.a.createElement(C,{operador:"\xd7"})),r.a.createElement("div",null,r.a.createElement(N,{numero:"4"}),r.a.createElement(N,{numero:"5"}),r.a.createElement(N,{numero:"6"}),r.a.createElement(C,{operador:"-"})),r.a.createElement("div",null,r.a.createElement(N,{numero:"1"}),r.a.createElement(N,{numero:"2"}),r.a.createElement(N,{numero:"3"}),r.a.createElement(C,{operador:"+"})),r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(N,{numero:"0"}),r.a.createElement(N,{numero:"."}),r.a.createElement(L,null)))};var H=function(){return r.a.createElement(d,null,r.a.createElement("div",{className:"calculadora"},r.a.createElement(f,null),r.a.createElement(O,null),r.a.createElement(b,null),r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ac5b8147.chunk.js.map