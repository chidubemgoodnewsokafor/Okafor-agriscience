// Okafor Agriscience website

// Mobile menu
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navigation) {
      navigation.classList.remove("open");
    }
  });
});

// Simple reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 80) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
