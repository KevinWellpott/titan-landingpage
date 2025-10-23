// Konsolen-Check
console.log("Script geladen ✅");

// --- SIMON ---
const simonButton = document.getElementById("contact-simon");
if (simonButton) {
  simonButton.addEventListener("click", function() {
    console.log("Simon-Button geklickt ✅");
    window.open("kontakt.html");
  });
}


// --- LOGO ---
const logotitan = document.getElementById("logotitan");
if (logotitan) {
  logotitan.addEventListener("click", function() {
    console.log("titanButton geklickt ✅");
    window.open("index.html");
  });
}


// --- KEVIN ---
const kevinButton = document.getElementById("contact-kevin");
if (kevinButton) {
  kevinButton.addEventListener("click", function() {
    console.log("Kevin-Button geklickt ✅");
    window.open("kontakt.html");
  });
}

// --- HEADER BURGERBTN ---
const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.header-navbar-content');

if (burger && nav) {
  burger.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
}

// --- MOBILE CARD SLIDER ---
const slider = document.querySelector('.card-slider');
const progressBar = document.querySelector('.slider-progress-bar');

if (slider && progressBar) {
  slider.addEventListener('scroll', function() {
    const scrollLeft = slider.scrollLeft;
    const scrollWidth = slider.scrollWidth - slider.clientWidth;
    const scrollPercent = (scrollLeft / scrollWidth) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// --- HEADER CTABTN ---
const fancybtn = document.getElementById("fancy-btn");
if (fancybtn) {
  fancybtn.addEventListener("click", function() {
    console.log("fancybtn clicked");
    window.location.href = "kontakt.html";
  });
}

// ========================================
// KONTAKTFORMULAR - BUDGET SLIDER
// ========================================

window.addEventListener('load', function() {
  console.log("Window loaded - checking slider...");
  
  const budgetSlider = document.getElementById('budget');
  const budgetValue = document.getElementById('budget-value');
  
  console.log("Budget Slider:", budgetSlider);
  console.log("Budget Value:", budgetValue);
  
  if (budgetSlider && budgetValue) {
    console.log("Slider gefunden! Event wird angehängt...");
    
    budgetSlider.addEventListener('input', function() {
      console.log("Slider bewegt! Neuer Wert:", this.value);
      
      const value = parseInt(this.value);
      
      if (value >= 50000) {
        budgetValue.textContent = '50.000 €+';
      } else {
        budgetValue.textContent = value.toLocaleString('de-DE') + ' €';
      }
    });
  } else {
    console.log("Slider NICHT gefunden - wahrscheinlich nicht auf Kontaktseite");
  }
});

// ========================================
// KONTAKTFORMULAR - SUBMIT HANDLER
// ========================================

window.addEventListener('load', function() {
  const kontaktForm = document.getElementById('kontakt-form');
  
  if (kontaktForm) {
    kontaktForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = document.querySelector('.submit-btn');
      const successMsg = document.getElementById('success-message');
      const budgetSlider = document.getElementById('budget');
      const budgetValue = document.getElementById('budget-value');
      
      // Button deaktivieren
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Wird gesendet...</span>';
      
      // Simuliert Versand (2 Sekunden)
      setTimeout(function() {
        // Success Message anzeigen
        successMsg.classList.add('show');
        
        // Formular zurücksetzen
        kontaktForm.reset();
        
        // Slider zurücksetzen
        if (budgetSlider && budgetValue) {
          budgetSlider.value = 5000;
          budgetValue.textContent = '5.000 €';
        }
        
        // Button wieder aktivieren
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Anfrage absenden</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        `;
        
        // Success Message nach 3 Sekunden ausblenden
        setTimeout(function() {
          successMsg.classList.remove('show');
        }, 3000);
        
      }, 2000);
    });
  }
});