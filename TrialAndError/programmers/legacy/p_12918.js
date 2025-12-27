/*
  <문제(Lv. 1) - 문자열 다루기 기본>

  문자열 s가 주어졌을 때, s의 길이가 4 또는 6이고, 숫자로만 구성되어있는지 return하는 solution 함수를 완성하라.

  [제한 사항]
  1. s의 길이는 1 이상 8 이하다.
  2. s는 영문 알파벳 대/소문자 또는 0부터 9까지의 숫자로 이루어져 있다.
*/

/*
  [접근 방식]
  1. 입력값 : 문자열 s / 출력값 : 조건의 만족 여부(True/False)
  2. s의 길이가 4 또는 6이 아니면 된다.
  3. s를 숫자로 변환한 값이 NaN이 아니면 된다.
  4. 두 조건을 합친다.
*/

/*
  [해결 방법]
  1. s의 길이가 4 또는 6이 아니면 false를 return한다.
  2. s의 각 문자 중 숫자가 아닌 값이 있으면 false를 return한다.
  3. 결과를 출력한다.
*/

function solution(s) {
  let answer = true;

  if (s.length !== 4 && s.length !== 6) answer = false;

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) answer = false;
  }

  return answer;
}

// console.log(solution("10e1"));
// console.log(solution("a234"));
// console.log(solution("1234"));

// console.log(isNaN(Number("a234"))); // true
// console.log(isNaN(Number("1234"))); // false

/* -------------------- */
// 초기 코드

function solution1(s) {
  let answer = true;

  if (isNaN(Number(s)) || (s.length !== 4 && s.length !== 6)) answer = false;

  return answer;
}
