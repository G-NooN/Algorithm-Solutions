/*
  <문제(Lv. 1) - 없는 숫자 더하기>

  0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 주어졌을 때,
  numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return하는 solution 함수를 완성하라.

  [제한 사항]
  1. numbers는 길이가 1 이상 9 이하인 정수 배열이다.
  2. numbers의 모든 원소는 0 이상 9 이하인 정수다.
  3. numbers의 모든 원소는 서로 다르다.
*/

/*
  [접근 방식]
  1. 입력값 : 정수 배열 / 출력값 : 없는 원소들의 합계
  2. 0부터 9까지 모두 더한 값을 변수로 선언한다.
  3. 배열의 모든 요소는 0 ~ 9 이기 때문에, 없는 요소의 합계 = 0 ~ 9 합계 - 있는 요소의 합계
  4. 따라서, 배열을 순회하면서 배열의 모든 요소를 0 ~ 9 합계에서 뺀다.
  5. 결과를 출력한다.
*/

// let n1 = [1, 2, 3, 4, 6, 7, 8, 0];
// let n2 = [5, 8, 4, 0, 6, 7, 9];

function solution(numbers) {
  let answer = 45; // 0+1+2+3+4+5+6+7+8+9

  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }

  return answer;
}

// console.log(solution(n1));
// console.log(solution(n2));

/* ---------- */

// 개선 방안1 (includes 사용)
function solution1(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
// console.log(solution1(n1));
// console.log(solution1(n2));

// 개선 방안2 (reduce 사용)
function solution2(numbers) {
  let answer = 0;

  answer = 45 - numbers.reduce((cur, acc) => cur + acc, 0);

  return answer;
}
// console.log(solution2(n1));
// console.log(solution2(n2));
