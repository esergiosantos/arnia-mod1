const styleBtn = document.getElementById("styleBtn");

function applyStyle() {
  document.body.classList.add("styled");
}
styleBtn.addEventListener("click", applyStyle);
const darkModeBtn = document.getElementById("darkModeBtn");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
darkModeBtn.addEventListener("click", toggleDarkMode);
