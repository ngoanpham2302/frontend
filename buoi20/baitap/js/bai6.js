// Function check chiều rộng màn hình
function hideMenu() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    $(".menu").addClass("hide");
  }
}

window.onload = hideMenu;
window.onresize = hideMenu;

// Ẩn hiện menu
$(".menu-icon").click(function () {
  $(".menu").toggleClass("hide");
});
