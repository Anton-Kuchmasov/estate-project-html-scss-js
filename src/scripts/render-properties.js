import scaleIcon from "/public/images/icons/icon-scale.svg";
import bedIcon from "../../public/images/icons/icon-bed.svg";
import bathroomIcon from "/public/images/icons/icon-bathroom.svg";
import estateCard1 from "/public/images/photos/estate-card-1.png";
import estateCard2 from "/public/images/photos/estate-card-2.png";
import estateCard3 from "/public/images/photos/estate-card-3.png";
import estateCard4 from "/public/images/photos/estate-card-4.png";
import estateCard5 from "/public/images/photos/estate-card-5.png";
import estateCard6 from "/public/images/photos/estate-card-6.png";

const imageMap = {
  "/public/images/photos/estate-card-1.png": estateCard1,
  "/public/images/photos/estate-card-2.png": estateCard2,
  "/public/images/photos/estate-card-3.png": estateCard3,
  "/public/images/photos/estate-card-4.png": estateCard4,
  "/public/images/photos/estate-card-5.png": estateCard5,
  "/public/images/photos/estate-card-6.png": estateCard6,
};
import properties from "/public/api/properties.json";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".popular__container");
    console.log(bedIcon);
  try {
    const updatedProperties = properties.map((property) => ({
      ...property,
      img: imageMap[property.img] || property.img,
    }));
    renderProperties(updatedProperties);
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }

  function renderProperties(properties) {
    container.innerHTML = ""; // Очистим контейнер

    properties.forEach((property) => {
      const card = document.createElement("article");
      card.className = "popular__card";
      card.innerHTML = `
          <div class="card card__container">
            <img src="${property.img}" alt="Estate Photo" />
            <div class="card__delimiter"></div>
            <p class="card__price">${property.price}</p>
            <p class="card__description">${property.description}</p>
            <div class="card__props">
              <div class="card__prop">
                <img src="${scaleIcon.default}" alt="Scale" />
                <span class="card__prop--text">${property.size}</span>
              </div>
              <div class="card__prop">
                <img src="${bedIcon}" alt="Bedrooms" />
                <span class="card__prop--text">${property.bedrooms}</span>
              </div>
              <div class="card__prop">
                <img src="${bathroomIcon}" alt="Bathrooms" />
                <span class="card__prop--text">${property.bathrooms}</span>
              </div>
            </div>
          </div>
        `;

      container.appendChild(card);
    });
  }
});
