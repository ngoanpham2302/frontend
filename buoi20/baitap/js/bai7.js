// Function check chiều rộng màn hình
$(function () {
  if (window.matchMedia && window.matchMedia("(max-width: 600px)".matches)) {
    $(".menu").addClass("hide");
    $(".form").addClass("hide");
  }
});

$(".menu-icon").on("click", function () {
  $(".menu").toggleClass("hide");
  $(".form").toggleClass("hide");
});
