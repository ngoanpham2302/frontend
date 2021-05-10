let time = 100;
let interval;
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
  // Khi progress đang active, ấn pause
  if (!isPaused) {
    clearInterval(interval);
    $(".btn-pause").html("Resume");
    isPaused = true;

    //   Khi đã ấn pause, ấn resume để tiếp tục
  } else {
    interval = setInterval(countDown, 1000);
    $(".btn-pause").html("Pause");
    isPaused = false;
  }
});

// Button reset
$(".btn-reset").click(function () {
  clearInterval(interval);
  time = 100;
  $(".progress-bar").css("width", "0%");
  $(".progress-bar").html("");

  // Set button pause/resume về trạng thái ban đầu
  $(".btn-pause").html("Pause");
  isPaused = false;
  // Disable button pause/resume, reset, enable button start
  $(".btn-start").removeClass("disabled");
  $(".btn-pause").addClass("disabled");
  $(".btn-reset").addClass("disabled");
});

// Hàm đếm ngược thời gian
function countDown() {
  time--;
  let progressBarWidth = 100 - time + "%";
  $(".progress-bar").css("width", progressBarWidth);
  $(".progress-bar").html(progressBarWidth);

  if (time == 0) {
    clearInterval(interval);
    $(".btn-pause").addClass("disabled");
  }
}
