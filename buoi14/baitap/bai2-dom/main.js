let firstPara = document.getElementById("first");
let secondPara = document.getElementById("second");
let thirdPara = document.getElementById("third");
let container = document.querySelector(".container");

// function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor() {
  firstPara.style.color = "#007965";
  secondPara.style.color = "#e48900";
  thirdPara.style.color = "#e84545";
}

// function changeBgColor(color): Thay đổi màu nền của trang thành màu color.

function changeBgColor(color) {
  container.style.backgroundColor = color;
}

// function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).

function copyContent(paragraph1, paragraph2) {
  paragraph1.innerText = paragraph2.innerText;
}

// function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).

function changeFontSize() {
  let newFontsize = prompt("Mời nhập kích cỡ chữ", "20px");
  container.style.fontSize = newFontsize;
}

// function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).

function increaseFontSize() {
  let x = parseInt(
    prompt(
      "Mời nhập số thứ tự đoạn văn muốn tăng kích cỡ chữ (1, 2 hoặc 3)",
      "1"
    )
  );
  let para;

  if (x === 1) {
    para = firstPara;
  } else if (x === 2) {
    para = secondPara;
  } else if (x === 3) {
    para = thirdPara;
  } else {
    alert("Thông số nhập vào chưa hợp lệ");
  }

  let paraStyle = window.getComputedStyle(para);
  let paraFontSize = parseFloat(paraStyle.getPropertyValue("font-size"));

  if (paraFontSize <= 29) {
    para.style.fontSize = paraFontSize + 1 + "px";
  }
}

// function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.

function decreaseFontSize() {
  let x = parseInt(
    prompt(
      "Mời nhập số thứ tự đoạn văn muốn tăng kích cỡ chữ (1, 2 hoặc 3)",
      "1"
    )
  );

  let para;

  if (x === 1) {
    para = firstPara;
  } else if (x === 2) {
    para = secondPara;
  } else if (x === 3) {
    para = thirdPara;
  } else {
    alert("Thông số nhập vào chưa hợp lệ");
  }

  let paraStyle = window.getComputedStyle(para);
  let paraFontSize = parseFloat(paraStyle.getPropertyValue("font-size"));

  if (paraFontSize >= 11) {
    para.style.fontSize = paraFontSize - 1 + "px";
  }
}

// reset button

function reset() {
  location.reload();
}
