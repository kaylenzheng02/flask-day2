const themeButton = document.querySelector("#theme-button");

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.textContent = isDark ? "use light theme" : "use dark theme";
}

themeButton.addEventListener("click", toggleTheme);
