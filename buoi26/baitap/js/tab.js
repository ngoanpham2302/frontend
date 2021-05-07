$(".nav-item").click(function () {
  // Bỏ class active cũ
  $(".tab-pane").removeClass("active");
  $(".nav-link").removeClass("active");

  // Thêm class active mới
  $(this).children().addClass("active");
  let tabName = $(this).attr("data-name");
  $(tabName).addClass("active");
});
