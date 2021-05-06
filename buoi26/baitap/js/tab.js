function changeTab(liEle, tabId) {
  // Remove class active cũ
  $(".tab-pane").removeClass("active");
  $(".nav-link").removeClass("active");

  // Thêm class active mới
  $(tabId).addClass("active");
  $(liEle).children().addClass("active");
}
