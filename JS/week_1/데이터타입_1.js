// js의 데이터 타입은 코드를 작성할 때가 아닌, run time에 데이터 타입이 결정된다.

// 1. 숫자
// 1-1. 정수형
let num1 = 10;
console.log(num1, typeof num1);

// 1-2. 실수형(float)
let num2 = 3.14;
console.log(num2, typeof num2);

// 1-3 지수형(Exp)
let num3 = 2.5e5;
console.log(num3, typeof num3);

// 1-4. Nan : Not a Number
let num4 = "hi" / 2;
console.log(num4, typeof num4);

// 1-5. Infinity
let num5 = 1 / 0;
console.log(num5, typeof num5);

// 1-6. - Infinity
let num6 = -1 / 0;
console.log(num6, typeof num6);

// 2. 문자
let str = "hello world";
console.log(str, typeof str);

// 2-1. 문자열 길이
console.log(str.length);

// 2-2. 문자열 결합
let str1 = "hi";
let str2 = " jisu";
let result1 = str1.concat(str2);
console.log(result1);

// 2-3. 문자열 자르기
let str3 = "oh jisu";
console.log(str3.substr(3, 6));
console.log(str3.slice(3, 6));

// 2-4. 문자열 찾기
let str4 = "hihey jisu";
console.log(str4.search("hey")); // index 반환

// 2-5. 문자열 대체
let str5 = "jjajangmyeon";
let result2 = str5.replace("myeon", " 맛있다");
console.log(result2);

// 2-6. 문자열 분할
let str6 = "starbucks, apple, banana";
let result3 = str6.split(","); // list로 반환
console.log(result3);
