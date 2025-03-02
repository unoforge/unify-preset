

const getThemePreference = () => {
  const currentTheme = localStorage.getItem("theme");
  if (localStorage !== undefined && currentTheme) {
    return currentTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const themeSwitcher = () => {
  const switchTheme = document.querySelector("[data-switch-theme]");

  const isDark = getThemePreference() === "dark";
  document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  if (switchTheme) {
    switchTheme.addEventListener("click", (e) => {
      e.preventDefault();
      const doc = document.documentElement;
      if (doc) {
        const isDarkTheme = getThemePreference() === "dark";
        doc.classList[isDarkTheme ? "remove" : "add"]("dark");
        localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
      }
    });
  }
};

themeSwitcher();
