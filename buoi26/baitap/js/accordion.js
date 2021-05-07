$(".accordion-header").click(function () {
  // Ẩn content, thay đổi style của accordion item cũ
  $(".accordion-header").not(this).next().slideUp(600);
  $(".accordion-header").not(this).children().addClass("collapsed");

  // Hiện/ẩn content và thay đổi style của accordion item mới
  $(this).next().slideToggle(600);
  $(this).children().toggleClass("collapsed");
});
