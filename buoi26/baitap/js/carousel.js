let slideIndex, interval;

// Mặc định show slide đầu tiên, autoplay slide
$(function () {
  slideIndex = 0;
  showSlide();
  interval = setInterval(autoplaySlide, 5000);
});

// Button prev
$(".btn-prev").click(function () {
  slideIndex--;
  showSlide();
});

// Button next
$(".btn-next").click(function () {
  slideIndex++;
  showSlide();
});

// Dot indicators
$(".dot").click(function () {
  slideIndex = $(this).attr("data-index");
  showSlide();
});

// Function hiển thị từng slide
function showSlide() {
  let numberOfSlides = $(".carousel-item").length;
  if (slideIndex >= numberOfSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = numberOfSlides - 1;

  // Ẩn ảnh cũ, remove class active của dot cũ
  $(".carousel-item").fadeOut(500);
  $(".dot").removeClass("active");

  // Hiện ảnh mới, add class active cho dot mới
  let currentSlide = $(".carousel-item")[slideIndex];
  $(currentSlide).fadeIn(500);
  $($(".dot")[slideIndex]).addClass("active");
}

// Function autoplay slide
function autoplaySlide() {
  slideIndex++;
  showSlide();
}

// Khi hover lên button control hoặc dot (để click) thì tạm dừng autoplay slide, bỏ hover thì tiếp tục autoplay slide
$(".btn-control").hover(mouseOver, mouseLeave);
$(".dot").hover(mouseOver, mouseLeave);

function mouseOver() {
  clearInterval(interval);
}
function mouseLeave() {
  interval = setInterval(autoplaySlide, 5000);
}
