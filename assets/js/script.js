// navbar
function toggleMenu() {
  $("#hamburgerMenu").toggleClass("collapsed");
  $(".mobile-overlay").animate({
        height: "toggle",
        opacity: "toggle"
    }, 300);
}

// parallax
const header = Array.from(document.querySelectorAll(".header"));

window.onscroll = () => {
   header.forEach((el) => {
      // apparent scroll speed of the background
      // defaults to half the scroll amount
      const speed = el.dataset.speed || 0.5;
      const windowYOffset = window.pageYOffset;
      const newBgPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = newBgPos;
   });
}

// hide scroll when scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){

  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById('nav').style.top = "0";
  }else {
    document.getElementById('nav').style.top = "-100px";
  }

  prevScrollpos = currentScrollpos;

}
