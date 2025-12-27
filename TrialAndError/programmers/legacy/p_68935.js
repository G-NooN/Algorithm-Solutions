/*
  <문제(Lv. 1) - 3진법 뒤집기>

  자연수 n이 매개변수로 주어졌을 때, n을 3진법 상에서 앞뒤로 뒤집은 후,
  이를 다시 10진법으로 표현한 수를 return하는 solution 함수를 완성하라.

  [제한 사항]
  1. n는 1 이상, 100,000,000 이하인 자연수다.
*/

/*
  [접근 방식]
  1. 입력값 : 자연수(10진수) n / 출력값 : 3진법으로 뒤집고 10진수로 반환한 값
  2. n을 3진법으로 변환한다.
  3. n을 뒤집는다.
  4. n을 10진수로 변환한다.
*/

/*
  [해결 방법]
  1. toString()을 사용하여 n을 진수가 변경된 문자열로 변환한다.
  2. split('').reverse().join('')을 사용하여 해당 값(문자열)을 뒤집는다.
  3. parseInt()을 사용하여 해당 값(문자열)을 10진수(숫자)로 변환한다.
  4. 값을 출력한다.
*/

function solution(n) {
  let answer = 0;
  const ternaryN = n.toString(3);
  const reverseTernaryN = ternaryN.split("").reverse().join("");

  answer = parseInt(reverseTernaryN, 3);

  return answer;
}

// console.log(solution(45));
// console.log(solution(125));

/* ------------------- */

// const reverseTernaryN = String(ternaryN).split("").reverse().join("");
// answer = parseInt(Number(reverseTernaryN), 3);
