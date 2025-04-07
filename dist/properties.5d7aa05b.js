var e=globalThis,a={},t={},i=e.parcelRequire823f;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return a[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){t[e]=a},e.parcelRequire823f=i);var r=i.register;r("9YILQ",function(e,a){Object.defineProperty(e.exports,"renderProperties",{get:()=>o,set:void 0,enumerable:!0,configurable:!0});var t=i("dYDiN");let r=document.querySelector(".properties__container");function o(e){r.style.display="flex",r.innerHTML=`
    <div class="loader loader__content"></div>
  `,setTimeout(()=>{r.style.display="grid",r.innerHTML="",e.forEach(e=>{let a=document.createElement("article");a.className="properties__card",a.innerHTML=`
              <div class="card__container">
                <img src="${e.img}" alt="Estate Photo" />
                <div class="card__delimiter"></div>
                <p class="card__price">$${e.price.toLocaleString("en-US")}</p>
                <p class="card__description">${e.title}</p>
                <div class="card__props">
                  <div class="card__prop">
                    <img src="images/icons/icon-scale.svg" alt="Scale" />
                    <span class="card__prop--text">${e.area}</span>
                  </div>
                  <div class="card__prop">
                    <img src="images/icons/icon-bed.svg" alt="Bedrooms" />
                    <span class="card__prop--text">${e.bedrooms}</span>
                  </div>
                  <div class="card__prop">
                    <img src="images/icons/icon-bathroom.svg" alt="Bathrooms" />
                    <span class="card__prop--text">${e.bathrooms}</span>
                  </div>
                </div>
              </div>
            `,r.appendChild(a)})},1e3)}document.addEventListener("DOMContentLoaded",()=>{try{o(t&&t.__esModule?t.default:t)}catch(e){console.error("Произошла ошибка:",e)}})}),r("dYDiN",function(e,a){e.exports=JSON.parse('[{"id":1,"title":"Cozy Apartment in Berlin","area":1100,"bedrooms":2,"bathrooms":1,"price":74500,"img":"/images/photos/estate-card-4.png"},{"id":2,"title":"Modern House in Amsterdam","area":2000,"bedrooms":3,"bathrooms":2,"price":98500,"img":"/images/photos/estate-card-2.png"},{"id":3,"title":"Luxury Villa in Barcelona","area":3400,"bedrooms":4,"bathrooms":3,"price":186000,"img":"/images/photos/estate-card-5.png"},{"id":4,"title":"Studio in Prague","area":750,"bedrooms":1,"bathrooms":1,"price":51200,"img":"/images/photos/estate-card-3.png"},{"id":5,"title":"Townhouse in Paris","area":1800,"bedrooms":3,"bathrooms":2,"price":109500,"img":"/images/photos/estate-card-6.png"},{"id":6,"title":"Family Home in Lisbon","area":2200,"bedrooms":4,"bathrooms":3,"price":132400,"img":"/images/photos/estate-card-1.png"},{"id":7,"title":"Apartment near River Thames","area":1450,"bedrooms":2,"bathrooms":2,"price":89500,"img":"/images/photos/estate-card-4.png"},{"id":8,"title":"Penthouse in Rome","area":3100,"bedrooms":4,"bathrooms":3,"price":179000,"img":"/images/photos/estate-card-3.png"},{"id":9,"title":"Rustic Cabin in Alps","area":1700,"bedrooms":2,"bathrooms":1,"price":72800,"img":"/images/photos/estate-card-6.png"},{"id":10,"title":"Seaside Home in Nice","area":2600,"bedrooms":3,"bathrooms":2,"price":148300,"img":"/images/photos/estate-card-2.png"},{"id":11,"title":"Quiet Suburb House in Warsaw","area":2000,"bedrooms":3,"bathrooms":2,"price":93500,"img":"/images/photos/estate-card-5.png"},{"id":12,"title":"Designer Flat in Vienna","area":1300,"bedrooms":2,"bathrooms":1,"price":76500,"img":"/images/photos/estate-card-1.png"},{"id":13,"title":"Lakeside House in Zurich","area":2400,"bedrooms":4,"bathrooms":3,"price":155200,"img":"/images/photos/estate-card-4.png"},{"id":14,"title":"Minimalist Home in Copenhagen","area":1900,"bedrooms":3,"bathrooms":2,"price":108400,"img":"/images/photos/estate-card-2.png"},{"id":15,"title":"Quiet Bungalow in Budapest","area":1600,"bedrooms":2,"bathrooms":2,"price":84500,"img":"/images/photos/estate-card-6.png"},{"id":16,"title":"Elegant Apartment in Brussels","area":1500,"bedrooms":2,"bathrooms":1,"price":76800,"img":"/images/photos/estate-card-3.png"},{"id":17,"title":"Historic Cottage in Dublin","area":1800,"bedrooms":3,"bathrooms":2,"price":99000,"img":"/images/photos/estate-card-5.png"},{"id":18,"title":"Smart Home in Stockholm","area":2100,"bedrooms":4,"bathrooms":3,"price":124000,"img":"/images/photos/estate-card-1.png"},{"id":19,"title":"Vintage Apartment in Florence","area":1250,"bedrooms":2,"bathrooms":1,"price":70500,"img":"/images/photos/estate-card-2.png"},{"id":20,"title":"Mountain House in Innsbruck","area":2750,"bedrooms":5,"bathrooms":3,"price":161300,"img":"/images/photos/estate-card-3.png"}]')}),i("9YILQ");
//# sourceMappingURL=properties.5d7aa05b.js.map
