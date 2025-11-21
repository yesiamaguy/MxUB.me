let menu = document.getElementById("menu");
let hotspot = document.getElementById("hotspot");
let menuOpen = false;

hotspot.addEventListener("click", toggleMenu);

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "h") {
        toggleMenu();
    }
});

function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menu.style.left = "0";
    } else {
        menu.style.left = "-250px";
    }
}
