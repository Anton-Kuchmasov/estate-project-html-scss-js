import properties from "/public/api/properties.json";
const container = document.querySelector(".properties__container");
document.addEventListener("DOMContentLoaded", () => {
  try {
    renderProperties(properties);
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
});

export function renderProperties(properties) {
  container.style.display = "flex";
  container.innerHTML = `
    <div class="loader loader__content"></div>
  `;

  setTimeout(() => {
    container.style.display = "grid";
    container.innerHTML = "";
    properties.forEach((property) => {
      const card = document.createElement("article");
      card.className = "properties__card";
      card.innerHTML = `
              <div class="card__container">
                <img src="${property.img}" alt="Estate Photo" />
                <div class="card__delimiter"></div>
                <p class="card__price">$${property.price.toLocaleString(
                  "en-US"
                )}</p>
                <p class="card__description">${property.title}</p>
                <div class="card__props">
                  <div class="card__prop">
                    <img src="images/icons/icon-scale.svg" alt="Scale" />
                    <span class="card__prop--text">${property.area}</span>
                  </div>
                  <div class="card__prop">
                    <img src="images/icons/icon-bed.svg" alt="Bedrooms" />
                    <span class="card__prop--text">${property.bedrooms}</span>
                  </div>
                  <div class="card__prop">
                    <img src="images/icons/icon-bathroom.svg" alt="Bathrooms" />
                    <span class="card__prop--text">${property.bathrooms}</span>
                  </div>
                </div>
              </div>
            `;

      container.appendChild(card);
    });
  }, 1000);
}
