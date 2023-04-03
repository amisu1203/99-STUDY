// if문
let x = 10;

if (x > 0) {
  console.log("x는 양수입니다.");
}

// if else 문
x = -10;
if (x > 0) {
  console.log("x는 양수입니다.");
} else {
  console.log("x는 음수입니다.");
}

// else문
x = 0;

if (x > 0) {
  console.log("x는 양수입니다.");
} else if (x < 0) {
  console.log("x는 음수입니다.");
} else {
  console.log("x는 0입니다.");
}

// switch 문
// 반드시 switch 문은 break와 함께 사용한다.
let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("사과는 빨간색입니다.");
    break;
  case "바나나":
    console.log("바나나는 노란색입니다.");
    break;
  case "오렌지":
    console.log("오렌지는 주황색입니다.");
    break;
  default:
    console.log("해당하는 과일이 없습니다.");
    break;
}

// 조건문 중첩
let age = 20;
let gender = "여성";

if (age >= 18) {
  if (gender === "남성") {
    console.log("성인 남성입니다.");
  } else {
    console.log("성인 여성입니다.");
  }
} else {
  console.log("미성년자입니다.");
}
