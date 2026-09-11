// =========================================================
// OKAFOR AGRISCIENCE
// Website JavaScript
// =========================================================


// =========================================================
// MOBILE MENU
// =========================================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
}


// =========================================================
// HERO CAROUSEL
// =========================================================

const slides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll(".indicator");

const previousButton =
    document.querySelector(".carousel-prev");

const nextButton =
    document.querySelector(".carousel-next");

let currentSlide = 0;
let autoPlay;


// Show a particular slide
function showSlide(index) {

    if (!slides.length) return;

    if (index >= slides.length) {
        index = 0;
    }

    if (index < 0) {
        index = slides.length - 1;
    }

    currentSlide = index;


    // Remove active state
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    indicators.forEach(indicator => {
        indicator.classList.remove("active");
    });


    // Add active state
    slides[currentSlide].classList.add("active");

    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add("active");
    }
}


// Next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}


// Previous slide
function previousSlide() {
    showSlide(currentSlide - 1);
}


// =========================================================
// CAROUSEL BUTTONS
// =========================================================

if (nextButton) {
    nextButton.addEventListener("click", () => {

        nextSlide();
        restartAutoPlay();

    });
}


if (previousButton) {
    previousButton.addEventListener("click", () => {

        previousSlide();
        restartAutoPlay();

    });
}


// =========================================================
// CAROUSEL INDICATORS
// =========================================================

indicators.forEach((indicator, index) => {

    indicator.addEventListener("click", () => {

        showSlide(index);
        restartAutoPlay();

    });

});


// =========================================================
// AUTOMATIC SLIDESHOW
// =========================================================

function startAutoPlay() {

    autoPlay = setInterval(() => {
        nextSlide();
    }, 5000);

}


function restartAutoPlay() {

    clearInterval(autoPlay);

    startAutoPlay();

}


// Start carousel
if (slides.length) {

    showSlide(0);

    startAutoPlay();

}


// =========================================================
// PAUSE CAROUSEL WHEN MOUSE IS OVER IT
// =========================================================

const heroCarousel =
    document.querySelector(".hero-carousel");

if (heroCarousel) {

    heroCarousel.addEventListener("mouseenter", () => {
        clearInterval(autoPlay);
    });

    heroCarousel.addEventListener("mouseleave", () => {
        startAutoPlay();
    });

}
