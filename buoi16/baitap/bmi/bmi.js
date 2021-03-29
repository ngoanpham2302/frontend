const data = [
  {
    message: "Chỉ số BMI dưới 18.5 là thiếu cân.",
    advice:
      "Bạn cần phải đi khám bác sĩ và áp dụng một chế độ tập luyện thể thao, dinh dưỡng tốt nhất để có thể tăng cân an toàn, đảm bảo sức khỏe.",
  },
  {
    message: "Chỉ số BMI từ 18.5 đến 24.9 là bình thường.",
    advice:
      "Bạn có một cơ thể tốt và khỏe mạnh. Hãy tiếp tục duy trì rèn luyện thể thao và ăn uống đầy đủ nhé.",
  },
  {
    message: "Chỉ số BMI từ 25.0 đến 29.9 được coi là thừa cân.",
    advice:
      "Tình trạng thừa cân lúc này chưa quá trầm trọng, tuy nhiên bạn hãy tìm phương pháp và chế độ giảm cân phù hợp để sớm đưa cơ thể về vóc dáng cân đối, đảm bảo sức khỏe và phòng ngừa bệnh tật.",
  },
  {
    message: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì.",
    advice:
      "Ở cấp độ béo phì, cơ thể của bạn gặp khó khăn mỗi ngày khi trọng lượng mỡ tạo áp lực lên cơ xương. Từ đó, không chỉ sinh hoạt của bạn bị xáo trộn mà sức khỏe của bạn cũng bị ảnh hưởng rất nhiều. Bạn nên đi khám bác sĩ để được tư vấn phương pháp giảm cân phù hợp và hiệu quả nhất. ",
  },
];

let calBtn = document.querySelector(".cal-btn");
let resetBtn = document.querySelector(".reset-btn");

let definition = document.querySelector(".definition");
let result = document.querySelector(".result");

let bmiResult = document.querySelector(".bmi-result");
let message = document.querySelector(".message");
let advice = document.querySelector(".advice");

let heightInput = document.querySelector(".height");
let weightInput = document.querySelector(".weight");

let height, weight, isValidInput;

// set kết quả BMI

function setBmiContent(item) {
  message.innerText = item.message;
  advice.innerText = item.advice;
}

// Style sau khi check input

function setError(input, noti) {
  let inputParent = input.parentNode;
  inputParent.classList.add("error");
  let small = inputParent.querySelector("small");
  small.innerText = noti;
}

function setSuccess(input) {
  let inputParent = input.parentNode;
  inputParent.classList.add("success");
}

// Check input value

function checkInputValue() {
  height = heightInput.value;
  weight = weightInput.value;
  isValidInput = true;

  if (height === "") {
    isValidInput = false;
    setError(heightInput, "Chiều cao không được để trống");
  } else if (isNaN(height)) {
    isValidInput = false;
    setError(heightInput, "Chiều cao không đúng định dạng");
  } else if (height < 100 || height > 200) {
    isValidInput = false;
    setError(
      heightInput,
      "Vui lòng nhập chiều cao trong khoảng từ 100 đến 200"
    );
  } else {
    setSuccess(heightInput);
  }

  if (weight === "") {
    isValidInput = false;
    setError(weightInput, "Cân nặng không được để trống");
  } else if (isNaN(weight)) {
    isValidInput = false;
    setError(weightInput, "Cân nặng không đúng định dạng");
  } else if (weight < 20 || weight > 200) {
    isValidInput = false;
    setError(weightInput, "Vui lòng nhập cân nặng trong khoảng từ 20 đến 200");
  } else {
    setSuccess(weightInput);
  }

  return isValidInput;
}

function calBmi() {
  let bmi;
  heightInput.parentNode.classList.remove("error", "success");
  weightInput.parentNode.classList.remove("error", "success");

  checkInputValue();

  if (isValidInput) {
    bmi = (weight / (height / 100) ** 2).toFixed(1);
    bmiResult.innerText = "Chỉ số BMI của bạn: " + bmi;
    definition.classList.add("hide");
    result.classList.remove("hide");

    if (bmi < 18.5) {
      setBmiContent(data[0]);
    } else if (bmi < 25) {
      setBmiContent(data[1]);
    } else if (bmi < 30) {
      setBmiContent(data[2]);
    } else {
      setBmiContent(data[3]);
    }
  }
}

// Reset

function reset() {
  location.reload();
}
