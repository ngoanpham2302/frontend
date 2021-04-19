// Function check chiều rộng màn hìnhfunction hideMenu() {
function hideMenu() {
  if (window.matchMedia && window.matchMedia("(max-width: 600px)").matches) {
    $(".menu").addClass("hide");
    $(".form").addClass("hide");
  }
}

window.onload = hideMenu;
window.onresize = hideMenu;

$(".menu-icon").on("click", function () {
  $(".menu").toggleClass("hide");
  $(".form").toggleClass("hide");
});
