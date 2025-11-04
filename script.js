// Denne del tjekker om der allerede er gemt en farvetilstand fra tidligere
const savedMode = localStorage.getItem("colorMode");
if (savedMode) {
  // Hvis der er gemt en farvetilstand, bliver den sat på body
  document.body.setAttribute("data-mode", savedMode);
}

// Denne henter de forskellige elementer der skal bruges til farvevalg
const colorToggle = document.getElementById("colorToggle");
const colorMenu = document.getElementById("colorMenu");
const modeButtons = document.querySelectorAll(".color-menu button");

// Når man trykker på knappen, åbner eller lukker dropdown-menuen
colorToggle.addEventListener("click", () => {
  const isHidden = colorMenu.hidden;
  colorMenu.hidden = !isHidden;
  colorToggle.setAttribute("aria-expanded", !isHidden);
  colorToggle.parentElement.classList.toggle("active");
});

// Når man trykker på en farve-knap, skiftes farvetilstand
modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Henter data-mode fra den valgte knap
    const mode = btn.getAttribute("data-mode");
    // Ændrer farvetilstand på body
    document.body.setAttribute("data-mode", mode);
    // Gemmer farvetilstanden i localStorage
    localStorage.setItem("colorMode", mode);
    // Lukker dropdown igen efter valg
    colorMenu.hidden = true;
    colorToggle.setAttribute("aria-expanded", false);
    colorToggle.parentElement.classList.remove("active");
  });
});

// Denne lukker dropdown-menuen, hvis man klikker udenfor den
document.addEventListener("click", (e) => {
  if (!colorToggle.contains(e.target) && !colorMenu.contains(e.target)) {
    colorMenu.hidden = true;
    colorToggle.setAttribute("aria-expanded", false);
    colorToggle.parentElement.classList.remove("active");
  }
});

// Denne henter burger-knappen og menuen
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

// Når man trykker på burger-knappen, åbner eller lukker menuen
burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const buttons = document.querySelectorAll('.color-menu button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.setAttribute('aria-checked', 'false'));
    btn.setAttribute('aria-checked', 'true');
  });
});


