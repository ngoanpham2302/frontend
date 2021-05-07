// Open modal
$(".btn-open").click(openModal);
function openModal() {
  $(".modal").removeClass("out");
  $(".modal-backdrop").removeClass("out");

  $(".modal").addClass("show");
  $(".modal").css("display", "block");
  $(".modal-backdrop").css("display", "block");
}

// Close modal
$(".close-modal").click(closeModal);
function closeModal() {
  // Add class cho animation
  $(".modal").addClass("out");
  $(".modal-backdrop").addClass("out");

  setTimeout(() => {
    $(".modal").removeClass("show");
    $(".modal").css("display", "none");
    $(".modal-backdrop").css("display", "none");
  }, 200);
}

// Khi click vào mọi vị trí (ngoại trừ modal dialog và button open modal) sẽ đóng modal
$(document).click(function (event) {
  let flag = $(event.target).closest(".modal-dialog, .btn-open").length;
  if (!flag) {
    closeModal();
  }
});
