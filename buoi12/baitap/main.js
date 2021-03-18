/* Bài 1: Hai anh em nhà cừu không có gì chơi, thằng anh mới đố thằng em: “Tao cho mày 1 số, nếu nó chẵn thì chia đôi, nó lẻ thì nhân 3 cộng 1. Đố mày biết sau bao nhiêu phép tính thì nó ra 1 ???”. Ông em ngẩn tò te không biết trả lời như nào. Bạn hãy giúp chú bé 1 tay với. In ra đáp án hoặc “-1” nếu ko có số nào hợp lệ. */

function countCalculations(n) {
  if (Number.isInteger(n) === false) {
    return;
  }

  if (n <= 0) {
    return -1;
  }

  let count = 0;

  if (n === 1) {
    count++;
    n = n * 3 + 1;
  }

  do {
    if (n % 2 === 0) {
      count++;
      n /= 2;
    } else {
      count++;
      n = n * 3 + 1;
    }
  } while (n > 1);

  if (count) {
    return count;
  }
  return -1;
}

console.log(countCalculations(6));

/* Bài 2. Vẽ hình chữ nhật đặc (kích thước m x n): */

document.writeln("Bài 2. Vẽ hình chữ nhật đặc (kích thước m x n)");

function drawSolidReact(m, n) {
  document.writeln("<br /><br />");

  if (
    m <= 0 ||
    n <= 0 ||
    Number.isInteger(m) === false ||
    Number.isInteger(n) === false
  ) {
    return "Thông số đầu vào không hợp lệ";
  }

  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      str += "*&nbsp&nbsp";
    }
    str += "<br /><br />";
  }

  document.writeln(str);
}

drawSolidReact(7, 4);

/* Bài 3. Vẽ hình chữ nhật rỗng: */
document.writeln("Bài 3. Vẽ hình chữ nhật rỗng");

function drawEmptyReact(m, n) {
  document.writeln("<br /><br />");

  if (
    m <= 0 ||
    n <= 0 ||
    Number.isInteger(m) === false ||
    Number.isInteger(n) === false
  ) {
    return "Thông số đầu vào không hợp lệ";
  }

  let str = "";

  // Vẽ hàng thứ nhất:
  for (let i = 0; i < m; i++) {
    str += "*&nbsp&nbsp";
  }
  str += "<br /><br />";

  // Vẽ các hàng ở giữa:
  for (let j = 1; j < n - 1; j++) {
    for (let k = 0; k < m; k++) {
      if (k === 0 || k === m - 1) {
        str += "*&nbsp&nbsp";
      } else {
        str += "*&nbsp&nbsp".fontcolor("white");
      }
    }

    str += "<br /><br />";
  }

  // Vẽ hàng cuối cùng:
  for (let i = 0; i < m; i++) {
    str += "*&nbsp&nbsp";
  }

  document.writeln(str);
}

drawEmptyReact(7, 4);

/* Bài 4. Vẽ tam giác vuông: */
document.writeln("<br /><br />");
document.writeln("Bài 4. Vẽ tam giác vuông");

// Function vẽ tam giác vuông có chiều cao n:

function drawRightTriangle(n) {
  document.writeln("<br /><br />");

  if (n <= 0 || Number.isInteger(n) === false) {
    return "Thông số đầu vào không hợp lệ";
  }

  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += "*&nbsp&nbsp";
    }

    str += "<br /><br />";
  }

  document.writeln(str);
}

drawRightTriangle(5);

/* Bài 5. Vẽ tam giác cân ngược: */

document.writeln("Bài 5. Vẽ tam giác cân ngược");

function drawIsoTriangle(h) {
  document.writeln("<br /><br />");

  if (h <= 0 || Number.isInteger(h) === false) {
    return "Thông số đầu vào không hợp lệ";
  }

  let str = "";

  // Tìm độ dài đáy của tam giác cân có chiều cao h:
  let b = h * 2 - 1;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < b; j++) {
      if (j < i || j > b - 1 - i) {
        str += "*&nbsp&nbsp".fontcolor("white");
      } else {
        str += "*&nbsp&nbsp";
      }
    }

    str += "<br /><br />";
  }

  document.writeln(str);
}

drawIsoTriangle(4);
