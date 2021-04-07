let expression = document.querySelector(".expression");
let result = document.querySelector(".result");

// Btn AC
function allClear() {
  expression.innerHTML = "";
  result.innerHTML = "0";
}

// Btn CE
function clearEntry() {
  result.innerHTML = result.innerHTML.slice(0, -1);
  if (result.innerHTML.length === 0) {
    result.innerHTML = "0";
  }
}

// Validate input

// Display Expression
function display(value) {
  // Không cho phép đóng ngoặc khi chưa nhập biểu thức
  if (result.innerHTML == "") {
    if (value == ")") {
      value = "";
    }
  }
  // Xử lý ban đầu khi nhập vào có số 0
  if (result.innerHTML === "0") {
    result.innerHTML = "";

    if (value == ")") {
      value = "0";
    }

    if (
      value == "^3" ||
      value == "%" ||
      value == "^2" ||
      value == "." ||
      value == "+" ||
      value == "-" ||
      value == "×" ||
      value == "÷" ||
      value == "!"
    ) {
      value = "0" + value;
    }
  }

  result.innerHTML += value;
}

// Btn Equal
function calculate() {
  let cal = result.innerHTML;

  cal = cal.replace(/ × /g, " * ");
  cal = cal.replace(/ ÷ /g, " / ");
  cal = cal.replace(/%/g, "/ 100");
  cal = cal.replace(/\^2/g, "**2");
  cal = cal.replace(/\^3/g, "**3");
  cal = cal.replace(/π/g, "Math.PI");
  cal = cal.replace(/e\^\(/g, "Math.exp(");
  cal = cal.replace(/√\(/g, "Math.sqrt(");
  cal = cal.replace(/log\(/g, "Math.log10(");
  cal = cal.replace(/ln\(/g, "Math.log(");
  cal = calFacExp(cal);

  let answer = eval(cal);

  if ((answer + "").includes("NaN")) {
    alert("Biểu thức nhập vào không hợp lệ!");
    return;
  } else {
    expression.innerHTML = result.innerHTML + " =";
    result.innerHTML = answer;
  }
}

// Tính giai thừa trong biểu thức có chứa 1 hoặc nhiều giai thừa

function calFacExp(str) {
  let startIndex = 0;
  let pos;

  do {
    let num = "";
    pos = str.indexOf("!", startIndex);

    if (pos != -1) {
      startIndex = pos + 1;
      let i;
      for (i = pos - 1; i >= 0; i--) {
        if (str[i] == " " || i == 0) break;
      }
      num = str.slice(i, pos);
      let factorial = calFac(+num);
      str = str.replace(num + "!", factorial);
    }
  } while (pos != -1);

  return str;
}

// Tính giai thừa của 1 số

function calFac(n) {
  if (Number.isInteger(n) == false || n < 0) {
    alert("Biểu thức nhập vào không hợp lệ!");
    return;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
}

// Bổ sung đóng ngoặc
// Xử lý >=2 dấu phép tính liền nhau
// Thêm dấu +/- cho số âm
