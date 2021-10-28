const burgerMenuButton = document.getElementById("side-menu-btn");
const sideMenu = document.getElementById("min-menu");
const overlay = document.getElementById("overlay");

burgerMenuButton.addEventListener("click", function () {

    let right = sideMenu.style.right;

    if (right = 0) {
        sideMenu.style.right = "-100%";
        overlay.style.left = "-100%";
    } else {
        sideMenu.style.right = 0;
        overlay.style.left = 0;
    }
    // overlay action
    overlay.addEventListener("click", () => {
        sideMenu.style.right = "-100%";
        overlay.style.left = "-100%";
    })

});

// esc btn aciton 
window.addEventListener("keydown", (event) => {
    if (event.key=== "Escape") {
        sideMenu.style.right = "-100%";
        overlay.style.left = "-100%";
    }
})