// 변수, 상수

// 01. 변수
// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

var saying = "hi";
var saying = "jojo";
console.log(saying); // jojo
// var 중복 선언 가능, 재할당 가능

let saying2 = "hi let";
saying2 = "mola";
console.log(saying2); // mola
let mo;
console.log(mo); // undefined로 값을 할당하지 않아도 선언 가능
// let 중복 선언 불가능, 재할당 가능

const sayConst = "hi const";
console.log(sayConst);
// const 중복 선언 불가능, 재할당 불가능, 선언과 동시에 값 할당 필수
