// Konsolen-Check
console.log("Script geladen ✅");

// --- SIMON ---
const simonButton = document.getElementById("contact-simon");
if (simonButton) {
  simonButton.addEventListener("click", function() {
    console.log("Simon-Button geklickt ✅");
    window.open("https://titanagency.de");
    // oder: window.location.href = "https://titanagency.de";
  });
}

// --- KEVIN ---
const kevinButton = document.getElementById("contact-kevin");
if (kevinButton) {
  kevinButton.addEventListener("click", function() {
    console.log("Kevin-Button geklickt ✅");
    window.open("https://titanagency.de");
    // oder: window.location.href = "https://titanagency.de";
  });
}

const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.header-navbar-content');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


const slider = document.querySelector('.card-slider');
const progressBar = document.querySelector('.slider-progress-bar');

slider.addEventListener('scroll', () => {
  const scrollLeft = slider.scrollLeft;
  const scrollWidth = slider.scrollWidth - slider.clientWidth;
  const scrollPercent = (scrollLeft / scrollWidth) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});


