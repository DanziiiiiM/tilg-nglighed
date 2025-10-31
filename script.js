// === GEMT FARVETILSTAND ===
const savedMode = localStorage.getItem("colorMode");
if (savedMode) {
  document.body.setAttribute("data-mode", savedMode);
}

// === ELEMENTER ===
const colorToggle = document.getElementById("colorToggle");
const colorMenu = document.getElementById("colorMenu");
const modeButtons = document.querySelectorAll(".color-menu button");

// === ÅBN / LUK DROPDOWN ===
colorToggle.addEventListener("click", () => {
  const isHidden = colorMenu.hidden;
  colorMenu.hidden = !isHidden;
  colorToggle.setAttribute("aria-expanded", !isHidden);
  colorToggle.parentElement.classList.toggle("active");
});

// === SKIFT FARVETILSTAND ===
modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.getAttribute("data-mode");
    document.body.setAttribute("data-mode", mode);
    localStorage.setItem("colorMode", mode);
    colorMenu.hidden = true;
    colorToggle.setAttribute("aria-expanded", false);
    colorToggle.parentElement.classList.remove("active");
  });
});

// === LUK MENU VED KLIK UDENFOR ===
document.addEventListener("click", (e) => {
  if (!colorToggle.contains(e.target) && !colorMenu.contains(e.target)) {
    colorMenu.hidden = true;
    colorToggle.setAttribute("aria-expanded", false);
    colorToggle.parentElement.classList.remove("active");
  }
});

  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
