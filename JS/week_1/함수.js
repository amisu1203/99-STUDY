// 함수 선언문
function add(x, y) {
  return x + y;
}
console.log(add(2, 3)); // 5

// 함수 표현식
let add2 = function (x, y) {
  return x + y;
};
console.log(add2(2, 3)); // 5

// input : 함수의 매개변수
// output : 함수의 반환값 (return 값)

// 화살표 함수
let add3 = (x, y) => {
  return x + y;
};

console.log(add3(2, 3)); // 5
