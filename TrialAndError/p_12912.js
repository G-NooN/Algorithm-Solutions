/*
  <문제(Lv.1) - 두 정수 사이의 합>

  두 정수 a, b가 주어졌을 때, a와 b 사이에 속한 모든 정수의 합을 return하는 solution 함수를 완성하라.

  예를 들어 a = 3, b = 5인 경우, 12 (3+4+5)를 return한다.

  [제한사항]
  1. a와 b는 -10,000,000 이상, 10,000,000 이하인 정수다.
  2. a와 b의 대소관계는 정해져있지 않다.
  3. a와 b가 같은 경우에는 둘 중 아무거나 return한다.
  
  [입출력 예시]
  [a | b]
  [3 | 5] => 12
  [3 | 3] => 3
  [5 | 3] => 12
*/

/*
  [해결 방법]
  1. Math.min()과 Math.max()를 사용하여 큰 수와 작은 수를 설정한다.
  2. 반복문을 사용하여 작은 수부터 큰 수까지 모두 더한다.
  3. 결과를 출력한다.
*/

// let a1 = 3;
// let b1 = 5;
// let a2 = 3;
// let b2 = 3;
// let a3 = 5;
// let b3 = 3;

function solution(a, b) {
  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}

// console.log(solution(a1, b1));
// console.log(solution(a2, b2));
// console.log(solution(a3, b3));

/* -------------------------------- */

// // 초기코드
// function solution(a, b) {
//   let answer = 0;

//   // 조건 분리
//   if (a < b) {
//     // a < b인 경우, a부터 b까지의 모든 수를 더함
//     for (let i = a; i <= b; i++) {
//       answer += i;
//     }
//   } else if (a > b) {
//     // a > b인 경우, b부터 a까지의 모든 수를 더함
//     for (let i = b; i <= a; i++) {
//       answer += i;
//     }
//   } else {
//     // a === b인 경우, a나 b 중 하나를 출력
//     answer = a;  // b도 상관없음
//   }

//   return answer;
// }
