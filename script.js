// Tjekker om der tidligere er gemt en farvetilstand i browseren
const savedMode = localStorage.getItem("colorMode");
if (savedMode) {
  // Hvis der findes en gemt tilstand, bliver den sat på body som data-attribut
  document.body.setAttribute("data-mode", savedMode);
}

// Henter de elementer som bruges til farvevalg i menuen
const colorToggle = document.getElementById("colorToggle");
const colorMenu = document.getElementById("colorMenu");
const modeButtons = document.querySelectorAll(".color-menu button");

// Åbner eller lukker dropdown-menuen når brugeren klikker på farveblind-knappen
colorToggle.addEventListener("click", () => {
  const isHidden = colorMenu.hidden;
  colorMenu.hidden = !isHidden; // Skifter mellem skjult og synlig
  colorToggle.setAttribute("aria-expanded", !isHidden); // Opdaterer ARIA-status for tilgængelighed
  colorToggle.parentElement.classList.toggle("active"); // Tilføjer/fjerner CSS-klasse til animation
});

// Når en farveknap vælges, ændres tilstand og gemmes lokalt
modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.getAttribute("data-mode"); // Læser hvilken tilstand der er valgt
    document.body.setAttribute("data-mode", mode); // Ændrer farvetilstand
    localStorage.setItem("colorMode", mode); // Gemmer brugerens valg i localStorage
    colorMenu.hidden = true; // Lukker dropdown efter valg
    colorToggle.setAttribute("aria-expanded", false);
    colorToggle.parentElement.classList.remove("active");
  });
});

// Lukker dropdown-menuen, hvis brugeren klikker et sted udenfor den
document.addEventListener("click", (e) => {
  if (!colorToggle.contains(e.target) && !colorMenu.contains(e.target)) {
    colorMenu.hidden = true;
    colorToggle.setAttribute("aria-expanded", false);
    colorToggle.parentElement.classList.remove("active");
  }
});

// Henter burger-knappen og selve menuen til mobilversionen
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

// Gør så burger-menuen åbner/lukker ved klik på knappen
burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Tilføjer/fjerner klassen "active"
});

// Henter alle farveknapper i dropdown-menuen
const buttons = document.querySelectorAll('.color-menu button');

// Gør så kun én knap ad gangen er markeret som valgt (ARIA-checked)
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.setAttribute('aria-checked', 'false')); // Nulstiller alle
    btn.setAttribute('aria-checked', 'true'); // Markerer den valgte
  });
});

document.addEventListener("click", (e) => {
  const isClickInsideMenu = navLinks.contains(e.target);
  const isClickOnBurger = burgerBtn.contains(e.target);

  // Hvis menuen er åben + man klikker udenfor = luk menuen
  if (navLinks.classList.contains("active") && !isClickInsideMenu && !isClickOnBurger) {
    navLinks.classList.remove("active");
  }
});

