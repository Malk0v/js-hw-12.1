function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return fetch(`https://restcountries.com/v3.1/name/${t}`).then((t=>t.json())).catch((t=>console.error(t)))}var i,o="Expected a function",r=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,p="object"==typeof self&&self&&self.Object===Object&&self,v=d||p||Function("return this")(),m=Object.prototype.toString,b=Math.max,j=Math.min,y=function(){return v.Date.now()};function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&m.call(t)==u}(t))return r;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var e=a.test(t);return e||c.test(t)?s(t.slice(2),e?2:8):f.test(t)?r:+t}i=function(t,n,e){var i,r,u,l,f,a,c=0,s=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(o);function v(n){var e=i,o=r;return i=r=void 0,c=n,l=t.apply(o,e)}function m(t){var e=t-a;return void 0===a||e>=n||e<0||d&&t-c>=u}function $(){var t=y();if(m(t))return T(t);f=setTimeout($,function(t){var e=n-(t-a);return d?j(e,u-(t-c)):e}(t))}function T(t){return f=void 0,p&&i?v(t):(i=r=void 0,l)}function w(){var t=y(),e=m(t);if(i=arguments,r=this,a=t,e){if(void 0===f)return function(t){return c=t,f=setTimeout($,n),s?v(t):l}(a);if(d)return f=setTimeout($,n),v(a)}return void 0===f&&(f=setTimeout($,n)),l}return n=h(n)||0,g(e)&&(s=!!e.leading,u=(d="maxWait"in e)?b(h(e.maxWait)||0,n):u,p="trailing"in e?!!e.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},w.flush=function(){return void 0===f?l:T(y())},w};const $=document.querySelector(".input-js");let T=document.querySelector(".list-js");$.addEventListener("input",t(i)((function(){T.innerHTML="";const t=e($.value);t.then((n=>{n.length>=10?alert("Необходимо сделать запрос более специфичным"):t.then((n=>{1===n.length?n.map((t=>T.insertAdjacentHTML("beforeend",`<img src="${t.flags.png}" alt="${t.flags.alt}" width="350px">\n            <div>\n                <li class="js-li"> Официальное название - ${t.name.common} </li>\n                <li class="js-li"> Столица - ${t.capital} </li>\n                <li class="js-li"> Флаг - ${t.flag} </li>\n                <li class="js-li"> Население - ${t.population} </li> \n            </div>`))):t.then((t=>t.map((t=>T.insertAdjacentHTML("beforeend",`<div>\n              <li class="js-li">\n              ${t.name.common} ${t.flag} \n              </li>\n              </div>`)))))}))}))}),500));
//# sourceMappingURL=index.a1decf4c.js.map
