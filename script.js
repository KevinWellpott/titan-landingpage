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

const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.getElementById("nav-menu");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
