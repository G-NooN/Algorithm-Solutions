/*
  <문제(Lv. 1) - 내적>

  길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어졌을 때, a와 b의 내적을 return하는 solution 함수를 완성하라.

  이 때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 이다. (n은 a, b의 길이)

  [제한 사항]
  1. a, b의 길이는 1 이상, 1,000 이하다.
  2. a, b의 모든 수는 -1,000 이상 1,000 이하다.
*/

/*
  [접근 방식]
  1. 입력값: 1차원 정수 배열 2개 / 출력값: 내적 결과값(정수)
  2. 내적: 같은 index의 요소를 곱하여 더한 것
  3. 두 배열이 길이가 같기 때문에, 배열 하나만 반복해서 연산하면 된다.
  4. 배열을 순회하며 두 배열의 각 index의 값을 곱하며 더한다.
  5. 결과를 출력한다.
*/

/*
  [해결 방법]
  1. Array.reduce() 메서드를 사용하여 a의 현재 index의 값과 b의 동일한 index의 값을 곱한 뒤 다음으로 전달한다.
*/

// let a1 = [1, 2, 3, 4];
// let b1 = [-3, -1, 0, 2];
// let a2 = [-1, 0, 1];
// let b2 = [1, 0, -1];

function solution(a, b) {
  let answer = 1234567890;

  answer = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);

  return answer;
}

// console.log(solution(a1, b1));
// console.log(solution(a2, b2));

/* --------------------- */

// 초기 코드
// function solution(a, b) {
//   let answer = 1234567890;
//   let sum = 0;

//   for (let i = 0; i < a.length; i++) {
//     sum += a[i] * b[i];
//   }
//   answer = sum;

//   return answer;
// }
