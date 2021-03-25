let input = document.querySelector(".input");
let btnGuess = document.querySelector(".btn-guess");
let noti = document.querySelector(".noti");
let data = document.querySelector(".data");

input.focus();
let random = Math.floor(Math.random() * 100);
let count = 0;

function guessBtn() {
  input.focus();

  if (input.value === "") {
    noti.innerHTML = "Vui lòng nhập số !";
  } else {
    var userNum = +input.value;
  }

  if (!Number.isInteger(userNum)) {
    if (!isNaN(userNum)) {
      noti.innerHTML = "Vui lòng nhập số nguyên !";
    } else {
      noti.innerHTML = "Vui lòng nhập số !";
    }
    noti.style.color = "red";
  } else if (userNum > 100 || userNum < 0) {
    noti.innerHTML = "Số bạn đoán nằm ngoài khoảng cho phép !";
    noti.style.color = "green";
  } else {
    count++;

    if (userNum > random) {
      noti.innerHTML = "Số bạn đoán quá lớn !";
      noti.style.color = "green";
    } else if (userNum < random) {
      noti.innerHTML = "Số bạn đoán quá nhỏ !";
      noti.style.color = "green";
    } else {
      noti.innerHTML = "Chúc mừng! Bạn đã đoán đúng !";
      noti.style.color = "red";
      btnGuess.disabled = true;
      input.blur();
    }

    data.innerHTML += `Số bạn đoán lần ${count} là ${userNum}<br />`;

    if (count === 10) {
      if (userNum === random) {
        noti.innerHTML = "Chúc mừng! Bạn đã đoán đúng !";
      } else {
        noti.innerHTML = "Rất tiếc, bạn đã hết lượt đoán !";
      }

      // disable button
      btnGuess.disabled = true;
      noti.style.color = "red";
      input.blur();
    }
  }

  input.value = "";
}

// Reset lại trang

let btnReset = document.querySelector(".btn-restart");

function restartBtn() {
  location.reload();
}
