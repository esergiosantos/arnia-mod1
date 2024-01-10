const button = document.getElementById("carregarEstilo");
const body = document.getElementById("body");
const darkModeBtn = document.getElementById("darkModeBtn");

button.addEventListener("click", function () {
  body.classList.toggle("active");
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

darkModeBtn.addEventListener("click", toggleDarkMode);

