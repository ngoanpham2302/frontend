// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại:
// °F = (°C × 1.8 ) +  32

// Từ độ °C sang °F
function celToFah(c) {
  let tempF = c * 1.8 + 32;
  console.log(`${c}°C tương đương ${tempF}°F`);
}

celToFah(35);

// Từ độ °F sang °C
function fahToCel(f) {
  let tempC = (f - 32) / 1.8;
  console.log(`${f}°F tương đương ${tempC}°C`);
}

fahToCel(86);

// Bài 2: Viết hàm chuyển đổi tiền tệ: chuyển đổi từ USD, Euro sang VNĐ và ngược lại

// Từ USD sang VND
function usdToVnd(usd) {
  let vnd = usd * 23048.72;
  console.log(`${usd} USD bằng ${vnd} VND`);
}

usdToVnd(24);

// Từ EURO sang VND
function euroToVnd(euro) {
  let vnd = euro * 27419.22;
  console.log(`${euro} EURO bằng ${vnd} VND`);
}

euroToVnd(32);

// Từ VND sang USD, EURO
function convertVnd(vnd) {
  let usd = (vnd / 23048.72).toFixed(2);
  let euro = (vnd / 27419.22).toFixed(2);

  console.log(`${vnd} VND bằng ${usd} USD`);
  console.log(`${vnd} VND bằng ${euro} EURO`);
}

convertVnd(500000);

// Bài 3. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

function calCentury(year) {
  let century = Math.floor((year - 1) / 100) + 1;
  console.log(`Năm ${year} thuộc thế kỷ ${century}`);
}

calCentury(1999);
calCentury(2000);
calCentury(2021);
