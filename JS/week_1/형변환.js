// 명시적 형변환과 암시적 형변환

// 1. 암시적
// 1-1. 문자열
let result = "1" + 2;
console.log(result, typeof result); // 12

let result2 = "1" + true;
console.log(result2, typeof result2); // 1true
console.log(["a", "b"] + "1"); // a,b1
// + 연산자를 사용하면 문자열이 우선시되어 문자열로 형 변환
// {}, null, undefined + '1' = 문자열

// 1-2. 숫자
let result3 = "1" - 2;
console.log(result3, typeof result3);
let result4 = "2" * "2";
console.log(result4, typeof result4);
// + 연산자를 제외한 연산자 사용시 숫자로 형 변환

// 2. 명시적 형변환
// 2-1. Boolean
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log("-------");
console.log(Boolean("false"));
console.log(Boolean({})); // 객체는 비어있어도 true

// 2-2. 문자열
let result5 = String(123);
console.log(result5, typeof result5);

let result6 = String(false);
console.log(result6, typeof result6);

let result7 = String(null);
console.log(result7, typeof result7);

let result8 = String(undefined);
console.log(result8, typeof result8);

// 2-3. 숫자
let result9 = Number("123");
console.log(result9, typeof result9);
