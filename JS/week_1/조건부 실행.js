// 1. 조건부 실행
let x = 10;

x > 0 && console.log("x는 양수입니다.");
// x가 0보다 크면 바로 콘솔 실행

// 2. 단축 평가
let a;
let y = a || 10;
// a가 undefined면 바로 10 할당
console.log(y); // 10

a = 2;
y = a || 10;
// a가 falsy값이 아니므로 바로 a 할당
console.log(y);

//
// 3. falsy와 truthy한 값
if (0) {
  console.log("이 코드는 실행되지 않습니다.");
}

if ("") {
  console.log("이 코드는 실행되지 않습니다.");
}

if (null) {
  console.log("이 코드는 실행되지 않습니다.");
}

if (undefined) {
  console.log("이 코드는 실행되지 않습니다.");
}

if (NaN) {
  console.log("이 코드는 실행되지 않습니다.");
}

if (false) {
  console.log("이 코드는 실행되지 않습니다.");
}
