let firstPara = document.getElementById("first");
let secondPara = document.getElementById("second");
let thirdPara = document.getElementById("third");
let container = document.querySelector(".container");

// function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor() {
  firstPara.style.color = "green";
  secondPara.style.color = "yellow";
  thirdPara.style.color = "red";
}

changeColor();

// function changeBgColor(color): Thay đổi màu nền của trang thành màu color.

function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}

changeBgColor("#333");

// function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).

function copyContent(paragraph1, paragraph2) {
  paragraph1.innerText = paragraph2.innerText;
}

copyContent(firstPara, secondPara);

// function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).

function changeFontSize(x) {
  container.style.fontSize = x + "px";
}

changeFontSize(20);

// function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).

function increaseFontSize(paragraph) {
  let paraStyle = window.getComputedStyle(paragraph);
  let paraFontSize = parseFloat(paraStyle.getPropertyValue("font-size"));

  if (paraFontSize <= 29) {
    paragraph.style.fontSize = paraFontSize + 1 + "px";
  }
}

increaseFontSize(secondPara);

// function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.

function decreaseFontSize(paragraph) {
  let paraStyle = window.getComputedStyle(paragraph);
  let paraFontSize = parseFloat(paraStyle.getPropertyValue("font-size"));

  if (paraFontSize >= 11) {
    paragraph.style.fontSize = paraFontSize - 1 + "px";
  }
}

decreaseFontSize(firstPara);
