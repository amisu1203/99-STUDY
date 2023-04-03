function solution(s) {
  var answer = true;
  let count_p = 0;
  let count_y = 0;
  s = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "P") {
      count_p += 1;
    } else if (s[i] == "Y") {
      count_y += 1;
    }
  }
  count_p == count_y ? (answer = true) : (answer = false);
  return answer;
}

function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      absolutes[i] = absolutes[i] * -1;
    }
    answer += absolutes[i];
  }
  return answer;
}
console.log(solution([1, 2, 3], [false, false, true]));
