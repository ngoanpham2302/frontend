/* Bài 1. Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó). */
console.log("Bài 1: ");

// Hàm check 1 số có phải số hoàn hảo không

function isPerfectNumber(x) {
  if (Number.isInteger(x) === false || x <= 0) {
    return false;
  }

  let sumDivisors = 0;

  for (let i = 1; i <= x / 2; i++) {
    if (x % i === 0) {
      sumDivisors += i;
    }
  }

  return sumDivisors === x;
}

// Hàm in ra những số hoàn hảo nhỏ hơn n

function printPerfectNumbers(n) {
  if (Number.isInteger(n) === false || n <= 0) {
    return;
  }

  for (let i = 1; i < n; i++) {
    if (isPerfectNumber(i)) {
      console.log(i);
    }
  }
}

printPerfectNumbers(500);

/* Bài 2. Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên */

// Cách 1: Dùng vòng lặp for
console.log("Bài 2. Cách 1: Dùng vòng lặp for:");

// Tìm số nhỏ nhất trong mảng số nguyên

function findMinNumber(arr) {
  let min = arr[0];

  for (let i in arr) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Tìm số nhỏ nhất trong mảng số nguyên

function findMaxNumber(arr) {
  let max = arr[0];

  for (let i in arr) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let array = [4, -3, 29, 7, -10, 5, 35, 16, -32, -23];

console.log(findMinNumber(array));
console.log(findMaxNumber(array));

// Bài 3. Tìm số lớn thứ 2 trong mảng số nguyên
console.log("Bài 3:");

function findSecondMax(arr) {
  let secondMax = arr[0];

  for (let i in arr) {
    if (arr[i] < findMaxNumber(arr) && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

console.log(findSecondMax(array));

/* Bài 4. Trả về Vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì. */
console.log("Bài 4:");

// Trả về vị trí đầu tiên của số lẻ trong mảng

function findFirstOdd(arr) {
  for (let i in arr) {
    if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
      return i;
    }
  }
}

// Trả về vị trí cuối cùng của số chẵn trong mảng

function findLastEven(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      return i;
    }
  }
}

let arrayOne = [-3.5, -5, 11, -4, 0, 7.6, 8, -10, 9, -15, 6.4];

console.log(findFirstOdd(arrayOne));
console.log(findLastEven(arrayOne));

/* Bài 5. In một chuỗi cho trước theo thứ tự ngược lại (Ví dụ: Hello in thành olleH) */
console.log("Bài 5:");

function reverseString(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

console.log(reverseString("Hello, how are you?"));

/* Bài 6. Sắp xếp mảng số nguyên theo chiều tăng dần và giảm dần. */

// Cách 1: Dùng vòng lặp for
console.log("Bài 6. Cách 1: Dùng vòng lặp for:");

// Sắp xếp mảng số nguyên theo chiều tăng dần

function sortArrAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let item = arr[i];
        arr[i] = arr[j];
        arr[j] = item;
      }
    }
  }

  return arr;
}

console.log(sortArrAscending(array));

// Sắp xếp mảng số nguyên theo chiều giảm dần

function sortArrDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        let item = arr[i];
        arr[i] = arr[j];
        arr[j] = item;
      }
    }
  }

  return arr;
}

console.log(sortArrDescending(array));

// Cách 2: Dùng sort
console.log("----------------------------");
console.log("Bài 2. Cách 2: Dùng sort:");

function findMinMax(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let min = arr[0];
  let max = arr[arr.length - 1];

  return `Số nhỏ nhất trong mảng là ${min}\nSố lớn nhất trong mảng là ${max}`;
}

console.log(findMinMax(array));

console.log("Bài 6. Cách 2: Dùng sort:");

let arrayTwo = [-5, 30, -43, 60, 4, 18, -37, 62, 0, -39, 8, 6];

// Sắp xếp mảng số nguyên theo chiều tăng dần

function sortArrAscend(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

console.log(sortArrAscend(arrayTwo));

// Sắp xếp mảng số nguyên theo chiều giảm dần

function sortArrDescend(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
}

console.log(sortArrDescend(arrayTwo));
