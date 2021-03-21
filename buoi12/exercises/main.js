/* Bài 1. Đếm số nguyên tố trong đoạn [a, b] */
console.log("Bài 1:");

// Hàm kiểm tra 1 số có phải số nguyên tố không

function isPrimeNumber(n) {
  if (Number.isInteger(n) === false || n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n > 2) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Hàm đếm số nguyên tố trong đoạn [a, b]

function countPrimeNumbers(a, b) {
  let count = 0;

  if (a > b) {
    greater = a;
    smaller = b;
  } else {
    greater = b;
    smaller = a;
  }

  for (let i = Math.ceil(smaller); i <= Math.floor(greater); i++) {
    if (isPrimeNumber(i)) {
      count++;
    }
  }

  return `Có ${count} số nguyên tố trong đoạn [${smaller}, ${greater}]`;
}

console.log(countPrimeNumbers(-2, 7));
console.log(countPrimeNumbers(10.5, 30));

/* Bài 2. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng. */
console.log("Bài 2:");

// Hàm tìm vị trí của phần tử có giá trị lớn nhất trong mảng

function findMaxIndex(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

// Hàm chèn phần tử X vào phía sau phần tử có giá trị lớn nhất trong mảng

function insertAfterMax(x, arr) {
  let xIndex = findMaxIndex(arr) + 1;

  arr.splice(xIndex, 0, x);

  return arr;
}

let array = [3, -5, 6, -10, 20, 67, 45, 0, -2, 6, 19];

console.log(insertAfterMax(33, array));

/* Bài 3. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần. */
console.log("Bài 3:");

// Hàm kiểm tra 1 mảng có phải mảng tăng dần không

function isAscendingArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Hàm chèn phần tử X vào mảng sao cho mảng vẫn có thứ tự tăng dần

function insertElement(x, arr) {
  if (!isAscendingArray(arr)) {
    return `Mảng nhập vào không phải mảng tăng dần`;
  }

  let xIndex;

  // Tìm vị trí sẽ chèn x trong mảng:
  for (let i = 0; i < arr.length; i++) {
    if (x >= arr[i] && x <= arr[i + 1]) {
      xIndex = i + 1;
    }
  }

  // Chèn x vào trong mảng:
  arr.splice(xIndex, 0, x);

  return arr;
}

let arrayTwo = [-35, -24, -18, -6, 2, 7, 15, 15, 28, 39, 46, 52];

console.log(insertElement(20, arrayTwo));

/* Bài 4. Kiểm tra tính đối xứng của một số. */
console.log("Bài 4:");

function isPalindrome(n) {
  if (Number.isInteger(n) === false || n < 0) {
    return false;
  }

  // Kiểm tra số tự nhiên có 1 chữ số: đều là số đối xứng
  if (n >= 0 && n < 10) {
    return true;
  }

  let reverseNum = 0;
  let innitialNum = n;

  while (n > 0) {
    let digit = n % 10;
    reverseNum = reverseNum * 10 + digit;
    n = (n - digit) / 10;
  }

  if (reverseNum === innitialNum) {
    return `${innitialNum} là số đối xứng`;
  } else {
    return `${innitialNum} không phải số đối xứng`;
  }
}

console.log(isPalindrome(12321));
console.log(isPalindrome(9898));

/* Bài 5. Viết chương trình tính tiền cước TAXI. Biết rằng:
Giá cước khi mở cửa là 9.000 đồng/km.
Giá cước từ km đầu tiên cho đến km thứ 30 là 11.000 đồng/km.
Giá cước là 9.500 đồng/km tính từ km thứ 31.
Thời gian chờ: 20.000 đồng/tiếng. */
console.log("Bài 5:");

function calTaxiFare(distance, wait) {
  // distance: tham số chỉ độ dài quãng đường, đơn vị km
  // wait: tham số chỉ thời gian chờ, đơn vị hour(tiếng)

  if (distance < 0 || wait < 0) {
    return "Thông số đầu vào không hợp lệ";
  }

  let fare;

  if (distance <= 1) {
    fare = 9000 + 20000 * wait;
  } else if (distance <= 30) {
    fare = 9000 + 11000 * (distance - 1) + 20000 * wait;
  } else {
    fare = 9000 + 11000 * (30 - 1) + 9500 * (distance - 30) + 20000 * wait;
  }

  return `Tiền cước taxi đi ${distance} km, chờ ${wait} tiếng là ${fare} đồng.`;
}

console.log(calTaxiFare(55, 2));
