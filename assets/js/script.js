/**
 * Wait for dom to load before starting page 
 */
document.addEventListener("DOMContentLoaded", function() {
    let burgerIcon = document.getElementById("mega-menu");
    burgerIcon.addEventListener("click", function() {
        burgerNav();
    });
});

/**
 * Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu or bar icon
 */
function burgerNav() {
    var x = document.getElementById("menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}