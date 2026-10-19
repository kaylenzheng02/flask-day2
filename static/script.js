const themeButton = document.querySelector("#theme-button");

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.textContent = isDark ? "Use light theme" : "Use dark theme";
}

themeButton.addEventListener("click", toggleTheme);
