import"./properties.5d7aa05b.js";function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,r={},n={},a=t.parcelRequire823f;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire823f=a),a.register;var l=a("dYDiN"),i=a("9YILQ");let d=document.querySelector("#search-button"),o=document.querySelector("#reset-button"),s=document.querySelector(".hero__searchbar"),c=s.elements.search,u=s.elements["sort-by"],p=s.elements["sort-order"],v=document.createElement("div");v.className="pagination",document.querySelector(".properties__container").before(v),o.disabled=!0,d.disabled=!0;let m=1,b=[...e(l)];function f(){o.disabled=!1;let t=c.value.toLowerCase().trim();b=e(l).filter(e=>e.title.toLowerCase().includes(t));let r=u.value,n=p.value;b.sort((e,t)=>{let a,l;switch(r){case"price":a=e.price||0,l=t.price||0;break;case"area":a=e.area||0,l=t.area||0;break;case"bedrooms":a=e.bedrooms||0,l=t.bedrooms||0;break;default:return 0}return"asc"===n?a-l:l-a}),m=1,E()}function E(){v.style.display="none";let e=(m-1)*10,t=b.slice(e,e+10);(0,i.renderProperties)(t),v.style.display="flex",function(){let e=Math.ceil(b.length/10);v.innerHTML="";let t=document.createElement("button");t.textContent="Previous",t.disabled=1===m,t.addEventListener("click",()=>{m>1&&(m--,E())}),v.appendChild(t);for(let t=1;t<=e;t++){let e=document.createElement("button");e.textContent=t,e.className=t===m?"active":"",e.addEventListener("click",()=>{m=t,E()}),v.appendChild(e)}let r=document.createElement("button");r.textContent="Next",r.disabled=m===e,r.addEventListener("click",()=>{m<e&&(m++,E())}),v.appendChild(r)}()}s.addEventListener("keydown",e=>{"Enter"===e.key&&(e.preventDefault(),f())}),d.addEventListener("click",f),o.addEventListener("click",function(){c.value="",u.value="price",p.value="asc",b=[...e(l)],m=1,E(),o.disabled=!0,d.disabled=!0}),c.addEventListener("input",()=>{o.disabled=""===c.value.trim(),d.disabled=""===c.value.trim()}),u.addEventListener("change",f),p.addEventListener("change",f),E();
//# sourceMappingURL=properties.8b2a0393.js.map
