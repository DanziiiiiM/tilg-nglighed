// === GEMT FARVETILSTAND PÅ TVÆRS AF SIDER ===
const savedMode = localStorage.getItem("colorMode");
if (savedMode) {
  document.body.setAttribute("data-mode", savedMode);
}

// === FARVEMENU ===
const colorToggle = document.getElementById("colorToggle");
const colorContainer = document.querySelector(".colorblind");
const modeButtons = document.querySelectorAll(".color-menu button");

// Åbn/luk dropdown-menu
colorToggle.addEventListener("click", () => {
  colorContainer.classList.toggle("active");
});

// Skift farvetilstand og gem
modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.getAttribute("data-mode");
    document.body.setAttribute("data-mode", mode);
    colorContainer.classList.remove("active");
    localStorage.setItem("colorMode", mode);
  });
});

