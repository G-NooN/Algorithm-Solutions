/*
  <문제(Lv.1) - 정수 내림차순으로 배치하기>

  정수 n이 주어졌을 때, n의 각 자릿수를 큰 것부터 작은 순서로 정렬한 새로운 정수를 return하는 solution 함수를 완성하라.

  예를 들어, n이 118372면 873211을 return한다.

  [제한사항]
  1. n은 1 이상 8,000,000,000 이하인 자연수다.

  [입출력 예시]
  118372 => 873211
*/

/*
  [해결 방법]
  1. String()을 사용하여 n을 문자열로 변환
  2. String.split('')을 사용하여 각 문자를 분할하여 배열 형태로 return
  3. Array.sort()를 사용하여 배열을 오름차순으로 정렬
  4. Array.reverse()를 사용하여 배열을 역순으로 정렬(오름차순 -> 내림차순)
  5. Array.join('')을 사용하여 배열을 문자열 형태로 return
  6. Number()를 사용하여 문자열을 숫자로 변환
  7. 결과 출력
*/

// let n = 118372;

function solution(n) {
  let answer = 0; // 최종적으로 내림차순으로 정렬된 숫자

  answer = Number(String(n).split("").sort().reverse().join(""));

  return answer;
}

// console.log(solution(n));
