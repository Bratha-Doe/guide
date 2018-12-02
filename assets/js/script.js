// navbar
function toggleMenu() {
  $("#hamburgerMenu").toggleClass("collapsed");
  $(".mobile-overlay").animate({
        height: "toggle",
        opacity: "toggle"
    }, 300);
}
