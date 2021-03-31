/* Bài 1: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7). */
console.log("Bài 1:");

function sumInt(a, b) {
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return;
  }

  if (a === b) {
    return 0;
  }

  // Tìm số lớn hơn, nhỏ hơn giữa a và b
  let min, max;
  if (a !== b) {
    max = Math.max(a, b);
    min = Math.min(a, b);
  }

  let sum = 0;

  for (let i = min + 1; i < max; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumInt(3, 8));
console.log(sumInt(9, 6));

/* Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''. */
console.log("Bài 2:");

function toSpinalCase(str) {
  str = str.toLowerCase().split(" ").join("-");

  return str;
}

console.log(toSpinalCase("HELLo MonDAy TuesdAy"));

/* Bài 3: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ: với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''. */
console.log("Bài 3:");

function toStr(num) {
  let str = "";

  if (num < 10) {
    str = "0" + num;
  } else {
    str = "" + num;
  }
  return str;
}

function displayTime(t, x) {
  if (x < 0 || x > 1000) {
    return "Tham số nhập vào chưa hợp lệ";
  }

  let second = parseInt(t[t.length - 2] + t[t.length - 1]);
  let minute = parseInt(t[3] + t[4]);
  let hour = parseInt(t[0] + t[1]);

  let newSecond, newMinute, newHour;

  if (x < 60) {
    if (second + x <= 59) {
      newSecond = second + x;
      newMinute = minute;
    } else {
      newSecond = second + x - 60;
      if (minute + 1 <= 59) {
        newMinute = minute + 1;
        newHour = hour;
      } else {
        newMinute = minute + 1 - 60;
        newHour = hour + 1;
      }
    }
  } else {
    // Do x <= 1000 nên không cần thêm tham số giờ
    let m = Math.round(x / 60);
    let s = x % 60;

    if (second + s <= 59) {
      newSecond = second + s;
      newMinute = minute;
    } else {
      newSecond = second + s - 60;
      newMinute = minute + m;
    }

    if (minute + m <= 59) {
      newMinute = newMinute + m;
      newHour = hour;
    } else {
      newMinute = newMinute + m - 60;
      newHour = hour + 1;
    }
  }

  if (newHour === 24) {
    newHour = 0;
  }

  return `${toStr(newHour)}:${toStr(newMinute)}:${toStr(newSecond)}`;
}

console.log(displayTime("09:20:56", 7));
console.log(displayTime("09:59:57", 7));
console.log(displayTime("09:23:56", 70));
console.log(displayTime("09:59:58", 70));
console.log(displayTime("23:59:58", 5));

/* Bài 4: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0). */
console.log("Bài 4:");

function countDays(h, x, y) {
  if (h <= 0 || x <= 0 || y <= 0 || x <= y) {
    return;
  }

  let day = 0;

  while (h > 0) {
    day++;

    // Do ngày cuối cùng ban ngày ốc sên đã bò lên đến miệng giếng rồi, không tính bị tụt xuống ban đêm nữa.
    if (h - x === 0) {
      h = h - x;
    } else {
      h = h - x + y;
    }
  }

  return `Sau ${day} ngày ốc sên sẽ bò lên đến miệng giếng.`;
}

console.log(countDays(10, 4, 2));

/* Bài 5: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557. */
console.log("Bài 5:");

function sortDigits(n) {
  if (Number.isInteger(n) === false || n <= 0) {
    return;
  }

  let arr = [];

  while (n > 0) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }

  arr.sort((a, b) => a - b);

  if (arr[0] === 0) {
    arr[0] = arr[1];
    arr[1] = 0;
  }

  return arr.join("");
}

console.log(sortDigits(530751));
console.log(sortDigits(536751));

/* Bài 6: Tạo 1 trang HTML có một nút để thay đổi màu nền của trang web và hiển thị tên màu tương ứng. Random màu bất kỳ, sử dụng mã hex, biết rằng, mã hex được tạo thành từ các ký tự sau [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']. */
console.log("Bài 6:");

function changeBgColor() {
  let hexCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let len = hexCharacters.length;
  let randomColor = "#";

  for (let i = 1; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * len);
    randomColor += hexCharacters[randomIndex];
  }

  let changeBtn = document.getElementById("change-btn");

  changeBtn.innerText = randomColor;
  document.body.style.backgroundColor = randomColor;
}
