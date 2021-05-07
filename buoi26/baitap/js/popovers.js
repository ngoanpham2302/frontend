$(".btn-pop").click(function () {
  let btnName = $(this).attr("value");
  $(btnName).toggleClass("d-none");
});
