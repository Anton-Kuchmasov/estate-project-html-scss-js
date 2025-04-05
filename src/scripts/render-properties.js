import properties from "/public/api/properties.json";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".properties__container");
  try {
    renderProperties(properties);
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
  const searchButton = document.querySelector("#search-button");
  const resetButton = document.querySelector("#reset-button");
  const searchForm = document.querySelector(".hero__searchbar");
  const searchInput = searchForm.elements["search"];

  resetButton.disabled = true;
  searchButton.disabled = true;

  searchForm.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      handleSearch();
    }
  });
  searchButton.addEventListener("click", handleSearch);
  resetButton.addEventListener("click", resetSearchParams);
  searchInput.addEventListener("input", () => {
    resetButton.disabled = searchInput.value.trim() === "";
    searchButton.disabled = searchInput.value.trim() === "";
  });

  function handleSearch() {
    const searchQuery = searchInput.value;
    const propertiesToRender = properties.filter((prop) =>
      prop.title.toLowerCase().includes(searchQuery)
    );
    renderProperties(propertiesToRender);
  }

  function resetSearchParams() {
    searchInput.value = "";
    renderProperties(properties);
    resetButton.disabled = true;
  }

  function renderProperties(properties) {
    container.innerHTML = ""; // Очистим контейнер

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
  }
});
