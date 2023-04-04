// 사용자 도전 횟수
let count_guess = 1;

$(document).ready(() => {
  $("#form-baseball").on("submit", (e) => {
    e.preventDefault();
    guessNum();
  });
});

// 숫자 맞히기
const guessNum = () => {
  let user_num = $(".inp-user").val();
  console.log(new_num);
  let b = 0;
  let s = 0;
  // 값만 맞으면 b, 위치도 맞으면 s
  // indexOf = 인덱스반환 / includes = 트루폴스
  for (let i = 0; i < 3; i++) {
    if (new_num.includes(user_num[i])) {
      console.log(`${i + 1}번째 값이 같다.`);
      if (new_num[i] == user_num[i]) {
        s += 1;
      } else b += 1;
    }
  }
  if (s == 3) {
    let temp_html = `<p class="txt-user-num">와! ${count_guess}번째 시도만에 성공💖 정답은 ${new_num}입니다!</p>`;
    $("#con-user-nums").append(temp_html);
    $("#btn-submit").attr("disabled", true);
  } else {
    let temp_html = `<p class="txt-user-num">${count_guess}번째 시도 : 숫자 ${user_num}는 ✌🏻B : ${b} / S : ${s}✌🏻</p>`;
    $("#con-user-nums").append(temp_html);
  }
  count_guess += 1;
};

// 랜덤 숫자 생성
const makeNum = () => {
  myNum = new Set();
  while (myNum.size < 3) {
    let randomNum = Math.floor(Math.random() * 10);
    if (myNum.size == 0 && randomNum == 0) continue;
    myNum.add(randomNum);
  }
  return Array.from(myNum).join("");
};
let new_num = makeNum();
