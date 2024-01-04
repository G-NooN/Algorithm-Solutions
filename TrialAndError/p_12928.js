/*
  <문제(Lv.1) - 약수의 합>

  정수 n을 입력받아 n의 약수를 모두 더한 값을 return하는 solution 함수를 완성하라.

  [제한사항]
  1. n은 0 이상 3,000 이하의 정수다.

  [입출력 예시]
  12 => 28 (1+2+3+4+6+12)
  5 => 6 (1+5)
*/

/*
  [해결 방법]
  1. 합계를 출력할 변수를 선언
  2. 1부터 n까지 반복하며 n의 약수를 탐색
  (n의 약수 x = n을 x로 나누었을 때 나머지가 0)
  3. 약수가 나올 때마다 합계에 더함
  4. 결과 출력
*/

// let n1 = 12;
// let n2 = 5;

function solution(n) {
  let answer = 0; // 합계

  for (let i = 1; i <= n; i++) {
    // 약수 = n % i === 0
    if (n % i === 0) {
      // 약수 발견 시 합계에 추가
      answer += i;
    }
  }
  // 합계 출력
  return answer;
}

// console.log(solution(n1));
// console.log(solution(n2));
