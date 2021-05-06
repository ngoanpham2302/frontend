$(".accordion-header").click(function () {
  // Ẩn content, thay đổi style của accordion item cũ
  $(".accordion-header").not(this).next(".accordion-collapse").slideUp();
  $(".accordion-header").not(this).children().addClass("collapsed");

  // Show/hide content và thay đổi style của accordion item mới
  $(this).next(".accordion-collapse").slideToggle();
  $(this).children().toggleClass("collapsed");
});
