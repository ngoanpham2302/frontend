let timeout;

// Hiển thị toast
$(".show-toast").click(function () {
  $(".toast").slideDown(600);
  // Tự động ẩn toast sau 5s:
  timeout = setTimeout(closeToast, 5000);
});

// Ẩn toast
$(".btn-close").click(closeToast);
function closeToast() {
  $(".toast").slideUp(500);
  clearTimeout(timeout);
}
