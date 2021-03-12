// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại:
// °F = (°C × 1.8 ) +  32

// Từ độ °C sang °F
function celToFah(c) {
  let tempF = c * 1.8 + 32;
  return tempF;
}

console.log(celToFah(35));

// Từ độ °F sang °C
function fahToCel(f) {
  let tempC = (f - 32) / 1.8;
  return tempC;
}

console.log(fahToCel(86));

// Bài 2: Viết hàm chuyển đổi tiền tệ: chuyển đổi từ USD, Euro sang VNĐ và ngược lại

// Từ USD sang VND
function usdToVnd(usd) {
  let vnd = usd * 23048.72;
  return vnd;
}

console.log(usdToVnd(24));

// Từ EURO sang VND
function euroToVnd(euro) {
  let vnd = euro * 27419.22;
  return vnd;
}

console.log(euroToVnd(32));

// Từ VND sang USD
function VndToUsd(vnd) {
  let usd = (vnd / 23048.72).toFixed(2);
  return usd;
}

console.log(VndToUsd(500000));

// Từ VND sang EURO
function VndToEuro(vnd) {
  let euro = (vnd / 27419.22).toFixed(2);
  return euro;
}

console.log(VndToEuro(250000));

// Bài 3. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

function calCentury(year) {
  let century = Math.floor((year - 1) / 100) + 1;
  return century;
}

console.log(calCentury(2000));
console.log(calCentury(2021));
