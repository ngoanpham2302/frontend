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
      value == "^" ||
      value == "%" ||
      value == "^2" ||
      value == "." ||
      value == "+" ||
      value == "-" ||
      value == "×" ||
      value == "÷"
    ) {
      value = "0" + value;
    }
  }

  result.innerHTML += value;
}

// Btn Equal
function calculate() {
  let cal = result.innerHTML;

  cal = cal.replace(/×/g, "*");
  cal = cal.replace(/÷/g, "/");
  cal = cal.replace(/%/g, "/100");
  cal = cal.replace(/\^2/g, "**2");
  cal = cal.replace(/\^3/g, "**3");
  cal = cal.replace(/π/g, "Math.PI");
  cal = cal.replace(/e\^\(/g, "Math.exp(");
  cal = cal.replace(/√\(/g, "Math.sqrt(");
  cal = cal.replace(/log\(/g, "Math.log10(");
  cal = cal.replace(/ln\(/g, "Math.log(");

  let answer = eval(cal);

  if ((answer + "").includes("NaN")) {
    alert("Biểu thức nhập vào không hợp lệ!");
    return;
  } else {
    expression.innerHTML = result.innerHTML + "=";
    result.innerHTML = answer;
  }
}

// Tính giai thừa

function calFactorial(n) {
  if (Number.isInteger(n) === false || n < 0) {
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
