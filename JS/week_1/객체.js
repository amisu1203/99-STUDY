// 1-1. 기본적인 객체 생성
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

// 1-2. 생성자 함수를 사용한 객체 생성
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 25, "여자");

// 2. 객체 속성 접근
let person3 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

console.log(person.name); // "홍길동"
console.log(person.age); // 30
console.log(person.gender); // "남자"

// 3. 객체 메소드
// 3-1. Object.keys() 메소드
let person4 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let keys = Object.keys(person);

console.log(keys); // ["name", "age", "gender"]

// 3-2. Object.values() 메소드
let person5 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let values = Object.values(person);

console.log(values); // ["홍길동", 30, "남자"]

// 3-3. Object.entries() 메소드 (2차원 배열 반환)
let person6 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let entries = Object.entries(person); // [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

console.log(entries);

// 3-4. Object.assign() 메소드
let person7 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let newPerson = Object.assign({}, person7, { age: 35 });

console.log(newPerson); // { name: "홍길동", age: 35, gender: "남자" }
// Object.assign 메소드는 기존 객체를 복사하여 새로운 객체를 만든다.

// 3-5. 객체 비교
let person8 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let person9 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

console.log(person8 === person9); // false
console.log(JSON.stringify(person8) === JSON.stringify(person9)); // true
// 일반적으로 객체는 비교 연산자로 비교할 수 없다. 따라서 JSON.stringify를 통해 객체를 문자열로 변환한 후 문자열 자체를 비교한다.

// 3.6 - 객체병합
let person10 = {
  name: "홍길동",
  age: 30,
};

let person11 = {
  gender: "남자",
};

let mergedPerson = { ...person11, ...person10 };

console.log(mergedPerson); // { name: "홍길동", age: 30, gender: "남자" }
// ... 전개 연산자를 사용하여 문자열로 만들고 그것을 다시 {}에 담아 하나로 병합한다.
