let interval;
let time = 100;
// Biến check trạng thái progress bar đã pause hay chưa
let isPaused = false;

// Button start
$(".btn-start").click(function () {
  interval = setInterval(countDown, 1000);

  // Enable button pause/resume, reset, disable button start
  $(".btn-pause").removeClass("disabled");
  $(".btn-reset").removeClass("disabled");
  $(".btn-start").addClass("disabled");
});

// Button pause/resume
$(".btn-pause").click(function () {
  // Khi progress đang active, click để dừng progress
  if (!isPaused) {
    clearInterval(interval);
    $(".btn-pause").text("Resume");
    isPaused = true;

    // Khi progress đang pause, click để tiếp tục
  } else {
    interval = setInterval(countDown, 1000);
    $(".btn-pause").text("Pause");
    isPaused = false;
  }
});

// Button reset
$(".btn-reset").click(function () {
  clearInterval(interval);
  time = 100;
  $(".progress-bar").text("");
  $(".progress-bar").css("width", "0%");

  // Đưa button pause/resume về trạng thái ban đầu
  $(".btn-pause").text("Pause");
  isPaused = false;

  // Disable button pause/resume, reset, enable button start
  $(".btn-start").removeClass("disabled");
  $(".btn-pause").addClass("disabled");
  $(".btn-reset").addClass("disabled");
});

// Function đếm ngược thời gian
function countDown() {
  time--;
  let progressBarWidth = 100 - time + "%";
  $(".progress-bar").text(progressBarWidth);
  $(".progress-bar").css("width", progressBarWidth);

  if (time == 0) {
    clearInterval(interval);
    $(".btn-pause").addClass("disabled");
  }
}
