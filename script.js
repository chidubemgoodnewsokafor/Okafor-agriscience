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
const previousButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentSlide = 0;
let autoPlay;


function showSlide(index) {

    if (!slides.length) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === currentSlide);
    });
}


function nextSlide() {
    showSlide(currentSlide + 1);
}


function previousSlide() {
    showSlide(currentSlide - 1);
}


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


indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        showSlide(index);
        restartAutoPlay();
    });
});


function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 6000);
}


function stopAutoPlay() {
    clearInterval(autoPlay);
}


function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}


const heroCarousel = document.querySelector(".hero-carousel");

if (heroCarousel) {
    heroCarousel.addEventListener("mouseenter", stopAutoPlay);
    heroCarousel.addEventListener("mouseleave", startAutoPlay);
}


showSlide(0);
startAutoPlay();


// =========================================================
// IMPACT COUNTERS — START WHEN VISIBLE
// =========================================================

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {

    const target = Number(counter.dataset.target);
    const duration = 1800;
    const startTime = performance.now();

    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        const currentValue =
            Math.floor(easedProgress * target);

        counter.textContent =
            currentValue.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent =
                target.toLocaleString();
        }
    }

    counter.textContent = "0";

    requestAnimationFrame(updateCounter);
}


const impactSection = document.querySelector(".impact-section");

if (impactSection && counters.length) {

    let countersStarted = false;

    const counterObserver = new IntersectionObserver(
        (entries) => {

            if (entries[0].isIntersecting && !countersStarted) {

                countersStarted = true;

                counters.forEach(counter => {
                    animateCounter(counter);
                });

                counterObserver.unobserve(impactSection);
            }

        },
        {
            threshold: 0.35
        }
    );

    counterObserver.observe(impactSection);
                                    }
