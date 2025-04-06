const burgerOpen = document.getElementById("burger-button");
const burgerClose = document.getElementById("burger-close");
const burgerMenu = document.getElementById("menu");

burgerOpen.addEventListener("click", () => {
  burgerMenu.classList.add("open");
});

burgerClose.addEventListener("click", () => {
  burgerMenu.classList.remove("open");
});
