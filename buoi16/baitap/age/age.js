let input = document.querySelector(".input");
let calBtn = document.querySelector(".cal-btn");
let showNoti = document.querySelector(".show-noti");

input.focus();

function calAge() {
  let bornYear = parseFloat(input.value);
  let d = new Date();
  let currentYear = d.getFullYear();
  showNoti.style.fontWeight = "500";

  if (Number.isInteger(bornYear) === false || bornYear < 0) {
    showNoti.innerText = "Năm sinh nhập vào không hợp lệ!";
    showNoti.style.color = "red";
  } else if (bornYear < 1900 || bornYear > currentYear) {
    showNoti.innerText =
      "Vui lòng nhập năm sinh trong khoảng từ 1900 đến " + currentYear + ".";
    showNoti.style.color = "red";
  } else {
    let age = currentYear - bornYear;
    showNoti.innerText = "Năm nay bạn " + age + " tuổi.";
    showNoti.style.color = "inherit";
    showNoti.style.fontWeight = "600";
  }
}

function reset() {
  location.reload();
}
