/*
  <문제(Lv.1) - 하샤드 수>

  양의 정수 n이 n의 자릿수의 합으로 나누어지면 n을 하샤드 수라고 한다.
  자연수 x를 입력 받아 x가 하샤드 수인지 검사하는 solution 함수를 완성하라.

  예를 들어, 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수다.

  [제한사항]
  1. x는 1 이상, 10,000 이하인 정수다.

  [입출력 예시]
  10 => true (10 % (1+0) === 0)
  12 => true (12 % (1+2) === 0)
  11 => true (11 % (1+1) === 1)
  13 => true (13 % (1+3) === 1)
*/

/*
  [해결 방법]
  1. 각 자릿수의 합계를 저장할 변수를 선언한다.
  2. String()을 사용하여 x를 문자열로 변환한다.
  3. 문자열의 길이만큼 반복을 수행한다.
  3-1. Number()를 사용하여 각 자릿수의 값을 숫자로 변환한 뒤 합계에 더한다.
  4. if (x % 합계 !== 0) return false;  // 나머지가 0이 아니면 false
*/

// let x1 = 10;
// let x2 = 12;
// let x3 = 11;
// let x4 = 13;

function solution(x) {
  let answer = true; // 하샤드 수 여부 T/F
  let sum = 0; // 각 자릿수의 합계

  for (let i = 0; i < String(x).length; i++) {
    sum += Number(String(x)[i]);
  }

  if (x % sum !== 0) answer = false;

  return answer;
}

// console.log(solution(x1));
// console.log(solution(x2));
// console.log(solution(x3));
// console.log(solution(x4));
