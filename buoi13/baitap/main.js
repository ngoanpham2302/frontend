/* Bài 1. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh', age: 20 }. Viết hàm tính ra tuổi trung bình của toàn bộ sinh viên. */
console.log("Bài 1:");

function calAveAge(arr) {
  let sumAge = 0;
  let aveAge;

  for (let item of arr) {
    sumAge += item.age;
  }
  aveAge = sumAge / arr.length;

  return aveAge;
}

let arrayOfStudents = [
  { name: "Anna", age: 20 },
  { name: "Mark", age: 24 },
  { name: "John", age: 19 },
  { name: "Adam", age: 21 },
  { name: "David", age: 25 },
  { name: "Elen", age: 22 },
  { name: "Christina", age: 24 },
  { name: "Tommy", age: 19 },
];

console.log(calAveAge(arrayOfStudents));

/* Bài 2. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh'', age: 20 }. Viết hàm sắp mảng theo tuổi học viên từ cao đến thấp. */
console.log("Bài 2:");

// Cách 1: Dùng for

function sortDescendAge(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i].age > arr[j].age) {
        let item = arr[i];
        arr[i] = arr[j];
        arr[j] = item;
      }
    }
  }

  return arr;
}

console.log(sortDescendAge(arrayOfStudents));

// Cách 2: Dùng sort

function sortDescendingAge(arr) {
  arr.sort((a, b) => b.age - a.age);
  return arr;
}

/* Bài 3. Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''. */
console.log("Bài 3:");

// Cách 1: Dùng for, splice

function removeFalsyValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}

let array = [
  "hello",
  50,
  0,
  NaN,
  "java",
  false,
  true,
  "",
  null,
  Infinity,
  undefined,
  -20,
];

console.log(removeFalsyValues(array));

// Cách 2: Dùng filter

eliminateFalsyValues = (arr) => {
  arr = arr.filter((value) => value);
  return arr;
};

/* Bài 4. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false. */
console.log("Bài 4:");

// Cách 1: Dùng for

function isSymmetricStr(str) {
  str = str.toLowerCase();

  let removedSpaceStr = "";
  let reverseStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      removedSpaceStr += str[i];
      reverseStr = str[i] + reverseStr;
    }
  }

  return removedSpaceStr === reverseStr;
}

let str_1 = "Race car";
let str_2 = "Hello tomorrow";

console.log(isSymmetricStr(str_1));
console.log(isSymmetricStr(str_2));

// Cách 2: Dùng method của string, array

function isSymmetricString(str) {
  str = str.toLowerCase();

  let removedSpaceStr = str.split(" ").join("");
  let reverseStr = removedSpaceStr.split("").reverse().join("");

  return removedSpaceStr === reverseStr;
}

/* Bài 5. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd'']. */
console.log("Bài 5:");

// Cách 1: Dùng for

function findLongestEle(arr) {
  let maxLength = arr[0].length;
  let maxLenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === maxLength) {
      maxLenArr.push(arr[i]);
    }
  }

  return maxLenArr;
}

let arrayOne = ["dgv", "bn", "ahhn", "gh", "abdc", "cdg", "hrte", "h"];

console.log(findLongestEle(arrayOne));

// Cách 2: Dùng sort, filter

function findLongestElement(arr) {
  arr.sort((a, b) => a.length - b.length);
  let maxLength = arr[arr.length - 1].length;

  let maxLenArr = arr.filter((value) => value.length === maxLength);

  return maxLenArr;
}
