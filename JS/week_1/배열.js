//1. 배열 생성
// 1-1. 기본적인 배열 생성
let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 배열의 크기 지정
let numbers = new Array(5);

// 2. 배열 요소 접근
fruits = ["사과", "바나나", "오렌지"];

console.log(fruits[0]); // "사과"
console.log(fruits[1]); // "바나나"
console.log(fruits[2]); // "오렌지"

// 3. 배열 메소드
// 3-1. push() 메소드
fruits = ["사과", "바나나"];

fruits.push("오렌지");

console.log(fruits); // ["사과", "바나나", "오렌지"]

// 3-2. pop() 메소드
fruits = ["사과", "바나나", "오렌지"];

fruits.pop();

console.log(fruits); // ["사과", "바나나"]

// 3-3. shift() 메소드
fruits = ["사과", "바나나", "오렌지"];

fruits.shift();

console.log(fruits); // ["바나나", "오렌지"]

// 3-4. unshift() 메소드
fruits = ["바나나", "오렌지"];

fruits.unshift("사과");

console.log(fruits); // ["사과", "바나나", "오렌지"]

// 3-5. splice() 메소드
fruits = ["사과", "바나나", "오렌지"];

fruits.splice(1, 1, "포도");

console.log(fruits); // ["사과", "포도", "오렌지"]

// 3-6. slice() 메소드
fruits = ["사과", "바나나", "오렌지"];

let slicedFruits = fruits.slice(1, 2);

console.log(slicedFruits); // ["바나나"]

//3-7. forEach() 메소드
numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// 3-8. map() 메소드
// map() 메소드는 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과를 새로운 배열로 반환합니다.
numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// 3-9. filter() 메소드
// filter() 메소드는 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 요소만 새로운 배열로 반환합니다.
numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

// 3-10. reduce() 메소드
numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// 3-11. find() 메소드
// find() 메소드는 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 첫 번째 요소를 반환합니다.
let numbers = [1, 2, 3, 4, 5];

let foundNumber = numbers.find(function (number) {
  return number > 3;
});

console.log(foundNumber); // 4
