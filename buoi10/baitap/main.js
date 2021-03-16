/* Bài 1. Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:
- Mùa xuân từ tháng 1 đến tháng 3
- Mùa hè từ tháng 4 đến tháng 6
- Mùa thu từ tháng 7 đến tháng 9
- Mùa đông từ tháng 10 đến tháng 12
 */

function findSeason() {
  let date = new Date();
  let month = date.getMonth() + 1;
  console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);

  if (month < 1 || month > 12) {
    return "Tháng không hợp lệ";
  }

  if (month <= 3) {
    return "Mùa xuân";
  } else if (month <= 6) {
    return "Mùa hè";
  } else if (month <= 9) {
    return "Mùa thu";
  } else {
    return "Mùa đông";
  }
}

console.log(findSeason());

/* Bài 2: Viết hàm trả về số ngày có trong 1 tháng.
Lưu ý: Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.
 */

function isLeapYear(year) {
  if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

function daysInMonth(month, year) {
  if (month < 1 || month > 12 || year < 1) {
    return "Dữ liệu không hợp lệ";
  }

  if (month === 2) {
    if (isLeapYear(year)) {
      return `Tháng 2 năm ${year} có 29 ngày`;
    }
    return `Tháng 2 năm ${year} có 28 ngày`;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return `Tháng ${month} có 30 ngày`;
  } else {
    return `Tháng ${month} có 31 ngày`;
  }
}

console.log(daysInMonth(2, 2020));

// Bài 3. Tính tổng các chữ số trong 1 số nguyên dương.

function sumDigits(n) {
  if (n.isInteger === false || n <= 0) {
    return;
  }

  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumDigits(2789));

/* Bài 4. In ra một chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi lấy 10 ký tự và hiển thị phía sau là dấu ba chấm (10 kí tự + ...)
Ví dụ: Tôi học lớ....
Gợi ý: Sử dụng hàm length() để đếm độ dài chuỗi, sử dụng hàm subString() để cắt chuỗi
 */

function shortenString(str) {
  let len = str.length;

  if (len <= 10) {
    return str;
  } else {
    return str.substring(0, 10) + "...";
  }
}

console.log(shortenString("Hôm nay là chủ nhật"));

/* 5. Viết hàm có tính năng translate. Truyền vào hàm tên đất nước bạn muốn biết về lời chào ở nuớc họ: French, Hawaiian, Germany, Italy, Croatia. Nếu không nhập gì chúng tôi có thể cho rằng bạn muốn nói biết ở Việt Nam. Hàm sẽ in ra lời chào theo đất nước tương ứng.
Ví dụ nước Việt Nam có lời chào: "Xin chào"
 */

function transGreeting(country) {
  switch (country) {
    case "French":
      console.log("Bonjour!");
      break;
    case "Hawaiian":
      console.log("Aloha");
      break;
    case "Germany":
      console.log("Hallo!");
      break;
    case "Italy":
      console.log("Ciao!");
      break;
    case "Croatia":
      console.log("Zdravo!");
      break;
    default:
      console.log("Xin chào!");
      break;
  }
}

transGreeting("French");
transGreeting();
