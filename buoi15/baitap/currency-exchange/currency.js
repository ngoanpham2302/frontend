let fromAmount = document.querySelector(".from-amount");
let toAmount = document.querySelector(".to-amount");
let fromUnit = document.querySelector(".from-unit");
let toUnit = document.querySelector(".to-unit");
let arrowIcon = document.querySelector(".arrow-icon");
let alertMess = document.querySelector(".alert");
let swapBtn = document.querySelector(".swap-btn");

fromAmount.focus();

function convertUSD(amount, toCur) {
  let result;
  if (toCur === "vnd") {
    result = (amount * 23000).toFixed(2);
  } else if (toCur === "eur") {
    result = ((amount * 23) / 27).toFixed(4);
  } else if (toCur === "usd") {
    result = amount;
  }
  return result;
}

function convertVND(amount, toCur) {
  let result;
  if (toCur === "usd") {
    result = (amount / 23000).toFixed(6);
  } else if (toCur === "eur") {
    result = (amount / 27000).toFixed(6);
  } else if (toCur === "vnd") {
    result = amount;
  }
  return result;
}

function convertEur(amount, toCur) {
  let result;
  if (toCur === "usd") {
    result = ((amount * 27) / 23).toFixed(4);
  } else if (toCur === "vnd") {
    result = (amount * 27000).toFixed(2);
  } else if (toCur === "eur") {
    result = amount;
  }
  return result;
}

// Chuyển đổi tiền tệ

function convertCurrency() {
  let fromCur = fromUnit.value;
  let toCur = toUnit.value;
  let from = fromAmount.value;
  let to;

  if (from === "") {
    alertMess.style.visibility = "visible";
    fromAmount.style.borderColor = "#ec0101";
    toAmount.value = "";
  } else {
    alertMess.style.visibility = "hidden";
    fromAmount.style.borderColor = "#393b44";
    arrowIcon.style.color = "#393b44";

    if (fromCur === "usd") {
      to = convertUSD(from, toCur);
    } else if (fromCur === "vnd") {
      to = convertVND(from, toCur);
    } else if (fromCur === "eur") {
      to = convertEur(from, toCur);
    }
  }

  toAmount.value = to;
}

// Hoán đổi đơn vị tiền tệ

function swapCurrency() {
  let unit = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = unit;
}

// Reset

function resetBtn() {
  location.reload();
}
