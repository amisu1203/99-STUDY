// 문제 3. 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 입출력 예시
//"abcde"	결과 : "c"
// "qwer"	결과 : "we"

function solution(s) {
  let answer = "";
  let index = s.length; // 7
  let index_odd = Math.floor(index / 2);
  if (index % 2) {
    //홀수
    answer = s[index_odd];
  } else {
    //짝수
    index = index_odd - 1;
    answer = s.slice(index, index + 2);
  }
  return console.log(answer);

  // 홀수 : 글자수/2 = 인덱스값 1개

  // 짝수 : (글자수/2)-1 = 인덱스값 slice 2개
}
// solution("abccss");

// 문제 4. 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
//
// 제한조건
// - a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// - a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// - a와 b의 대소관계는 정해져있지 않습니다.

// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

function solution2(a, b) {
  var answer = 0;
  if (a > b) {
    [a, b] = [b, a]; // 비 구조화할당 swap
    let temp = b - a;
    for (let i = a; i <= a + temp; i++) {
      answer += i;
    }
  } else if (b > a) {
    let temp = b - a;
    for (let i = a; i <= a + temp; i++) {
      answer += i;
    }
  } else {
    answer = a;
  }

  return answer;
}
console.log(solution2(-3, -1)); // -6

// 문제 6. 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// 입출력 예
// numbers : [1,2,3,4,6,7,8,0]	result : 14
// numbers : [5,8,4,0,6,7,9] result :	6

// 배열에 숫자가 있는지 없는지
// pop forEach 1. 모든값이 있는 배열 2. 넘버스랑 비교 => 있으면 pop 3.배열의 값 합
// includes answer+= 없는값 1.모든값 있는 배열 2. 만든[].includes ? 넘어가고 : answer +=

// function solution3(numbers) {
//   var answer = 0;
//   let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   arr.forEach((i) => {
//     numbers.includes(i) ? answer : (answer += i);
//   });

//   return answer;
// }
// console.log(solution3([5, 8, 4, 0, 6, 7, 9]));

// ------------------------------------------------------------------------------------------------------------------------------------------------
// 문제 07.
// 어떤 정수들이 있습니다.
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0

// 입출력 예 #1

// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.

// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; i < absolutes.length; i++) {
//     answer += signs[i] ? absolutes[i] : -1 * absolutes[i];
//   }
//   return answer;
// }
// console.log(solution([1, 2, 3], [false, false, true]));

// 문제 08.  정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

// function solution(arr) {
//   var answer = 0;
//   arr.forEach((i) => {
//     answer += i;
//   });
//   return answer / arr.length;
// }
// console.log(solution([5, 5]));

// 09 .프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

// 입출력 예시
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

// function solution(phone_number) {
//   var answer = "";
//   let len = phone_number.length;
//   answer = "*".repeat(len - 4) + phone_number.slice(len - 4, len);
//   return answer;
// }
// solution("0277");
// -로 인덱스를 조회할 수 있음

// 10. 문제 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의
// 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 입출력 예
// [[1,2],[2,3]]	[[3,4],[5,6]] result :	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

// [1 2] + [3 4]
// [2 3]   [5 6]

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

// 11. 함수 solution은 정수 x와 자연수 n을 입력 받아,
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

function solution(x, n) {
  var answer = [];
  let 곱하는숫자 = x;
  let 반복해야되는숫자 = n;
  for (let i = 0; i < 반복해야되는숫자; i++) {
    answer.push(곱하는숫자);
    곱하는숫자 += x;
  }

  return answer;
}

console.log(solution(4, 3)); // [2,4,6,8,10]
