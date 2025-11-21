// Elements
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");
const themeSelect = document.getElementById("themeSelect");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeSelect.value = savedTheme;
}

// Toggle settings panel
settingsBtn.addEventListener("click", () => {
    settingsPanel.classList.toggle("open");
});

closeSettings.addEventListener("click", () => {
    settingsPanel.classList.remove("open");
});

// Theme switching
themeSelect.addEventListener("change", () => {
    document.body.className = "";
    document.body.classList.add(themeSelect.value);
    localStorage.setItem("theme", themeSelect.value);
});
