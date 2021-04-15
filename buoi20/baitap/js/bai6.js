// Function check chiều rộng màn hình
$(function () {
  if (window.matchMedia && window.matchMedia("(max-width: 600px)".matches)) {
    $(".menu").addClass("hide");
  }
});

// Ẩn hiện menu
$(".menu-icon").on("click", function () {
  $(".menu").toggleClass("hide");
});
