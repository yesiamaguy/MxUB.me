// Elements
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");
const themeSelect = document.getElementById("themeSelect");
const themeBtn = document.getElementById("themeBtn");

const homeScreen = document.getElementById("homeScreen");
const contentPanel = document.getElementById("contentPanel");
const contentArea = document.getElementById("contentArea");
const backBtn = document.getElementById("backBtn");

// Themes
const themes = ["light", "dark", "neon"];
let currentTheme = localStorage.getItem("theme") || "neon";

// Apply saved theme
document.body.className = currentTheme;
themeSelect.value = currentTheme;

// --- SETTINGS PANEL ---
settingsBtn.addEventListener("click", () => {
    settingsPanel.classList.toggle("open");
});

closeSettings.addEventListener("click", () => {
    settingsPanel.classList.remove("open");
});

// --- THEME SELECTOR (dropdown) ---
themeSelect.addEventListener("change", () => {
    setTheme(themeSelect.value);
});

// --- THEME BUTTON (cycles themes) ---
themeBtn.addEventListener("click", () => {
    let i = themes.indexOf(currentTheme);
    i = (i + 1) % themes.length;
    setTheme(themes[i]);
    themeSelect.value = currentTheme;
});

function setTheme(theme) {
    currentTheme = theme;
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}

// --- SECTION LOADER ---
function openSection(section) {
    homeScreen.style.display = "none";
    contentPanel.style.display = "block";

    let src = "";

    // G+ (Gfiles mirror)
    if (section === "games") {
        src = "https://sites.google.com/view/drive-u-7-home/";
    }

    // Apps (Photopea)
    if (section === "apps") {
        src = "https://www.photopea.com/";
    }

    // Tools (dcode)
    if (section === "tools") {
        src = "https://www.dcode.fr/";
    }

    // Proxy (Rammerhead)
    if (section === "proxy") {
        src = "https://browser.rammerhead.org/";
    }

    contentArea.innerHTML = `<iframe src="${src}"></iframe>`;
}

// --- BACK BUTTON ---
backBtn.addEventListener("click", () => {
    contentPanel.style.display = "none";
    homeScreen.style.display = "block";
});
