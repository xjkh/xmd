var body = document.querySelector("body");
var nav_menu_toggle = document.querySelector("header button");

nav_menu_toggle.addEventListener("click", function() {
    body.classList.toggle("md-no-scroll");
});