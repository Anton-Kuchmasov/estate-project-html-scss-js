const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
const navButtons = document.querySelectorAll(".slider-nav button");
let currentSlide = 0;
let autoSlideInterval;
function goToSlide(index) {
    slider.scrollTo({
        left: slides[index].offsetLeft,
        behavior: 'smooth'
    });
    navButtons.forEach((btn)=>btn.classList.remove('active'));
    navButtons[index].classList.add('active');
    currentSlide = index;
}
function startAutoSlide() {
    autoSlideInterval = setInterval(()=>{
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 2000);
}
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}
navButtons.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        stopAutoSlide();
        goToSlide(index);
    });
});
startAutoSlide();
navButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        stopAutoSlide();
        setTimeout(startAutoSlide, 5000);
    });
});

//# sourceMappingURL=capstone-estate-project.19db4d44.js.map
