webpackJsonp([0],[function(e,t,n){"use strict";n(1);var r=n(3);(0,r.getUsers)().then(function(e){var t="";e.map(function(e){var n=e.id,r=e.name,u=e.userName,o=e.email;t+='\n\t\t<tr>\n\t\t\t<td><a href="#" data-id="'+n+'" class="deleteUser">Delete</a></td>\n\t\t\t<td>'+n+"</td>\n\t\t\t<td>"+r+"</td>\n\t\t\t<td>"+u+"</td>\n\t\t\t<td>"+o+"</td>\n\t\t</tr>\n\t\t"}),document.querySelector("#users").innerHTML=t;var n=document.querySelectorAll(".deleteUser");Array.from(n,function(e){e.onclick=function(e){var t=e.target;e.preventDefault(),(0,r.deleteUser)(t.attributes["data-id"].value);var n=t.parentNode.parentNode;n.parentNode.removeChild(n)}})})},function(e,t){},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){return a("users")}function o(e){return c("users/"+e)}function a(e){return fetch(f+e).then(d,s)}function c(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(d,s)}function d(e){return e.json()}function s(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=u,t.deleteUser=o,n(4);var i=n(5),l=r(i),f=(0,l["default"])()},,function(e,t){"use strict";function n(){return r("usemockapi")?"http://localhost:3001/":"https://stormy-plateau-61467.herokuapp.com/"}function r(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.cf4c0ea07d81cd3d19e4.js.map