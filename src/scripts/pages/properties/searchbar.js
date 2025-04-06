import properties from "/public/api/properties.json";
import { renderProperties } from "./render-properties.js";

const searchButton = document.querySelector("#search-button");
const resetButton = document.querySelector("#reset-button");
const searchForm = document.querySelector(".hero__searchbar");
const searchInput = searchForm.elements["search"];
const sortingSelect = searchForm.elements["sort-by"];
const sortingOrder = searchForm.elements["sort-order"];

const paginationContainer = document.createElement("div");
paginationContainer.className = "pagination";
document.querySelector(".properties__container").before(paginationContainer);

resetButton.disabled = true;
searchButton.disabled = true;

const itemsPerPage = 10;
let currentPage = 1;
let filteredProperties = [...properties];

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
sortingSelect.addEventListener("change", handleSearch);
sortingOrder.addEventListener("change", handleSearch);

function handleSearch() {
  resetButton.disabled = false;

  const searchQuery = searchInput.value.toLowerCase().trim();
  filteredProperties = properties.filter((prop) =>
    prop.title.toLowerCase().includes(searchQuery)
  );

  const sortBy = sortingSelect.value;
  const sortOrder = sortingOrder.value;

  filteredProperties.sort((a, b) => {
    let valueA, valueB;
    switch (sortBy) {
      case "price":
        valueA = a.price || 0;
        valueB = b.price || 0;
        break;
      case "area":
        valueA = a.area || 0;
        valueB = b.area || 0;
        break;
      case "bedrooms":
        valueA = a.bedrooms || 0;
        valueB = b.bedrooms || 0;
        break;
      default:
        return 0;
    }
    return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
  });

  currentPage = 1;
  renderPage();
}

function resetSearchParams() {
  searchInput.value = "";
  sortingSelect.value = "price";
  sortingOrder.value = "asc";
  filteredProperties = [...properties];
  currentPage = 1;
  renderPage();
  resetButton.disabled = true;
  searchButton.disabled = true;
}

function renderPage() {
  paginationContainer.style.display = "none";
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const propertiesToRender = filteredProperties.slice(startIndex, endIndex);

  renderProperties(propertiesToRender);
  paginationContainer.style.display = "flex";
  updatePaginationControls();
}

function updatePaginationControls() {
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  paginationContainer.innerHTML = "";
  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  });
  paginationContainer.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = i === currentPage ? "active" : "";
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderPage();
    });
    paginationContainer.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
    }
  });
  paginationContainer.appendChild(nextButton);
}

renderPage();
