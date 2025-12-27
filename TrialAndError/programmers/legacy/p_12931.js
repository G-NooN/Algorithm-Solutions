/*
  <문제(Lv.1) - 자릿수 구하기>

  자연수 N이 주어졌을 때, N의 각 자릿수의 합을 구해서 return 하는 Solution 함수를 완성하라.

  예를 들어, N = 123이면 6 (1+2+3)을 return한다.

  [제한사항]
  1. N은 100,000,000 이하의 자연수다.

  [입출력 예시]
  123 => 6 (1+2+3)
  987 => 24 (9+8+7)
*/

/*
  [해결 방법]
  1. 합계를 출력할 변수를 선언
  2. 자연수 N을 문자열 타입으로 형 변환
  3. 문자열의 길이만큼 반복
  4. 각 문자(자릿수)의 값을 숫자 타입으로 변환하여 합계에 더함
  5. 결과 출력
*/

// let n1 = 123;
// let n2 = 987;

function solution(n) {
  let answer = 0;
  let stringN = String(n); // n을 문자열화 (ex. 123 → "123")

  // stringN의 각 문자를 다시 숫자로 변환하여 answer에 더함 (ex. 1+2+3)
  for (let i = 0; i < stringN.length; i++) {
    answer += Number(stringN[i]); // stringN[i]를 숫자화 (ex. "2" → 2)
  }

  // 결과 출력
  return answer;
}

// console.log(solution(n1));
// console.log(solution(n2));
