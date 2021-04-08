let data = [
  {
    ask:
      "Trên bề mặt trái đất nơi được mặt trời lên thiên đỉnh 2 lần trong năm là:",
    answer: "Vùng nằm giữa hai chí tuyến.",
    choices: [
      "Cực Bắc và cực Nam.",
      "Vùng từ chí tuyến đến cực.",
      "Vùng nằm giữa hai chí tuyến.",
      "Khắp bề mặt trái đất.",
    ],
  },
  {
    ask:
      "Trên bề mặt trái đất có hiện tượng ngày đêm luân phiên nhau với nhịp điệu 24 giờ là do:",
    answer: "Trái Đất tự quay quanh trục.",
    choices: [
      "Trái Đất tự quay quanh trục.",
      "Trục Trái Đất nghiêng.",
      "Trái Đất chuyển động quanh Mặt Trời.",
      "Trái Đất có dạng hình khối cầu.",
    ],
  },
  {
    ask: "Giờ quốc tế (giờ GMT) được tính theo giờ của múi giờ số mấy ?",
    answer: "Múi giờ số 0.",
    choices: [
      "Múi giờ số 12.",
      "Múi giờ số 0.",
      "Múi giờ số 6.",
      "Múi giờ số 18.",
    ],
  },
  {
    ask:
      "Chí tuyến Bắc và chí tuyến Nam có hiện tượng Mặt Trời lên thiên đỉnh mấy lần trong năm?",
    answer: "Một lần duy nhất.",
    choices: [
      "Không có lần nào.",
      "Một lần duy nhất.",
      "Hai lần trong năm.",
      "Ba lần trong năm.",
    ],
  },
  {
    ask:
      "Ở bán cầu Bắc từ ngày 23/9 đến ngày 21/3 hiện tượng ngày và đêm diễn ra thế nào?",
    answer: "Ngày ngắn hơn đêm.",
    choices: [
      "Ngày dài hơn đêm.",
      "Ngày và đêm khác nhau.",
      "Ngày và đêm bằng nhau.",
      "Ngày ngắn hơn đêm.",
    ],
  },
];

// Shuffle thứ tự các lựa chọn trong mảng choices
for (let i = 0; i < data.length; i++) {
  data[i].choices = data[i].choices.sort(() => Math.random() - 0.5);
}

// Shuffle thứ tự câu hỏi trong mảng data
data = data.sort(() => Math.random() - 0.5);

// Câu hỏi hiện tại (current question)
let curQuestion = 0;

// Function render ra từng câu hỏi

function renderQuestion(count) {
  // Lấy ra câu hỏi hiện tại
  let question = data[count];

  // Cập nhật title, nội dung câu hỏi:
  $(".question-title").html(`Câu hỏi ${count + 1}/${data.length}`);

  $(".question-content").html(`${question.ask}`);

  // Cập nhật các lựa chọn cho câu hỏi:
  $(".choices-box")[0].innerHTML = "";

  for (let i = 0; i < question.choices.length; i++) {
    $(".choices-box")[0].innerHTML += `<div
              class="choice border"
              id="choice-${count + 1}"
              onclick="checkResult(this)"
            >
              <p>${question.choices[i]}</p>
              <i class="fas fa-check-circle hide"></i>
             <i class="fas fa-times-circle hide"></i>
            </div>
             `;
  }

  // Xử lý khi ở câu hỏi cuối: Nút "Câu tiếp theo" thành nút "Kết thúc"
  if (count == data.length - 1) {
    $(".btn-next").addClass("hide");
    $(".btn-submit").removeClass("hide");
  }

  // Cập nhật thanh tiến trình
  $(".progress-bar").css(
    "width",
    `${((curQuestion + 1) / data.length) * 100}%`
  );
}

renderQuestion(curQuestion);

// Biến kiểm tra nếu người dùng trả lời mới cho next, không cho phép chọn lại đáp án
let flag = false;

// Lắng nghe sự kiện nút "Câu hỏi tiếp"
$(".btn-next").on("click", function () {
  // Tăng câu hỏi lên 1, nếu là câu hỏi cuối cùng thì không tăng lên nữa
  if (curQuestion < data.length) {
    if (flag) {
      curQuestion++;
      if (curQuestion > data.length - 1) {
        curQuestion = data.length - 1;
      }
      renderQuestion(curQuestion);
      flag = false;
    }
  }
});

// Check và show kết quả đúng sai cho từng câu hỏi, cập nhật diamond

var userCorrect = 0;
var diamonds = 0;

function checkResult(choice) {
  if (!flag) {
    if (choice.firstElementChild.innerText == data[curQuestion].answer) {
      diamonds += 100;
      userCorrect++;

      choice.querySelector(".fa-check-circle").classList.remove("hide");
      flag = true;
    } else {
      diamonds -= 50;
      choice.querySelector(".fa-times-circle").classList.remove("hide");
      flag = true;
    }

    $(".diamonds").html(`${diamonds}`);

    if (userCorrect == data.length) {
      $(".end-title").html("Thật xuất sắc !");
      $(".end-result").html(`Bạn đã trả lời đúng tất cả các câu hỏi.`);
    } else {
      $(".end-result").html(
        `Bạn đã trả lời đúng ${userCorrect}/${data.length} câu hỏi.`
      );
    }
  }
}

// Sau khi trả lời hết, người dùng ấn button "Kết thúc"
$(".btn-submit").on("click", function () {
  $(".end-game").removeClass("hide");
  $(".quiz").addClass("hide");

  const endSound = new Audio("../audio/winner-sound.mp3");
  endSound.play();
});

// Btn "Chơi lại"
$(".play-again").on("click", function () {
  window.location.reload();
});

// Countdown thời gian chơi game
let time = 50;
let interval = setInterval(countDown, 1000);

function countDown() {
  time--;
  $(".time").html(`${time}s`);

  if (time <= 5) {
    $(".time").css("color", "#ff0000");
  } else {
    $(".time").css("color", "#fff");
  }

  if (time == 0) {
    clearInterval(interval);

    $(".end-game").removeClass("hide");
    $(".quiz").addClass("hide");
    $(".end-title").html("Hết giờ !");

    const endLose = new Audio("../audio/loser-sound.mp3");
    endLose.play();
  }
}

// Button 50:50
let allowHint = true;

$(".hint").on("click", hint);

function hint() {
  if (allowHint) {
    let curChoices = data[curQuestion].choices;
    for (let i = 0; i < curChoices.length; i++) {
      if (curChoices[i] == data[curQuestion].answer) {
        curChoices.splice(i, 1);
        break;
      }
    }

    curChoices = curChoices.sort(() => Math.random() - 0.5);
    let firstHint = curChoices[0];
    let secondHint = curChoices[1];
    console.log(curChoices[0]);
    console.log(curChoices[1]);

    let list = document.querySelectorAll(".choice p");

    Array.from(list).forEach((item) => {
      if (item.innerText == firstHint || item.innerText == secondHint) {
        item.classList.add("hint-choice");
        item.parentNode
          .querySelector(".fa-times-circle")
          .classList.remove("hide");
      }
    });
  }
  allowHint = false;
  $(".hint").addClass("disable");
}
