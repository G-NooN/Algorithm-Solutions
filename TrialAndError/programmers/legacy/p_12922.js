/*
  <문제(Lv. 1) - 수박수박수박수박수박수?>

  길이가 n이고, '수박수박수박수...'와 같은 패턴을 유지하는 문자열을 return하는 solution 함수를 완성하라.

  예를 들어, n이 4이면, '수박수박'을 return하고, n이 3이면, '수박수'를 return한다.

  [제한 사항]
  1. n은 길이 10,000 이하인 자연수다.
*/

/*
  [접근 방식]
  1. 입력값 : 길이 / 출력값 : 문자열
  2. n이 홀수인 경우와 짝수인 경우 분리
  2-1. n이 짝수인 경우, '수박'을 n/2번 반복
  2-2. n이 홀수인 경우, '수박'을 (n-1)/2번 반복하고 '수' 1번 추가
*/

function solution(n) {
  let answer = "";

  answer = n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat((n - 1) / 2) + "수";

  return answer;
}

// console.log(solution(3));
// console.log(solution(4));
