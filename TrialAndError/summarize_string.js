/*
  <문자열 요약하기>
  알파벳으로 구성된 strings의 각 알파벳의 개수를 요약해서 출력하는 solution 함수를 완성하라.

  [제한사항]
  1. strings는 소문자 알파벳으로 이루어져 있다.
  2. strings는 오름차순으로 정렬되어 있다. (ex. abccd)

  [입출력 예시]
  abc => a1/b1/c1
  aaabbbc => a3/b3/c1
  ahhhhz => a1/h4/z1
  acccdeee => a1/c3/d1/e3
*/

/*
  [접근]
  1. strings의 각 문자에 도착할 때마다 조건을 수행한다.
  2. 마지막 문자는 출력할 때 /를 입력하지 않아야 하기 때문에 별도 코드로 작성한다.
*/

/*
  [해결 방법]
  1. 문자열의 길이, 알파벳 count 횟수를 변수로 선언
  2. 반복문을 사용하여 0번째 ~ n-2번째 까지의 문자를 순회
  2-1. 현재 위치의 문자와 다음 위치의 문자가 같은 경우
    - 현재 위치에서 count++
  2-2. 현재 위치의 문자와 다음 위치의 문자가 다른 경우
    - 현재 위치에서 count++
    - 요약된 내용을 출력 문자열에 추가
    - count 초기화
  3. 마지막(n-1)번째 문자의 요약된 내용을 출력 문자열에 추가
  3-1. n-2번째 문자와 n-1번째 문자가 같은 경우
    - count++
    - 요약된 내용을 출력 문자열에 추가
  3-2. n-2번째 문자와 n-1번째 문자가 다른 경우
    - count++
    - 요약된 내용을 출력 문자열에 추가
  4. 결과 출력
*/

let s1 = "abc";
let s2 = "aaabbbc";
let s3 = "ahhhhz";
let s4 = "acccdeee";

function solution(strings) {
  let answer = ""; // 결과 문자열
  let n = strings.length; // 문자열의 길이
  let count = 0; // 알파벳 count 횟수

  // 0 ~ n-2까지 반복 실행
  for (let i = 0; i < n - 1; i++) {
    // i번째 문자와 i+1번째 문자가 같은 경우
    if (strings[i] === strings[i + 1]) {
      count++;
    } else {
      // i번째 문자와 i+1번째 문자가 같지 않은 경우
      count++;
      answer += strings[i] + String(count) + "/"; // 요약된 내용 출력 문자열에 추가
      count = 0; // count 초기화
    }
  }

  // 마지막(n-1)번째 문자의 요약된 내용 출력 문자열에 추가
  count++;
  answer += strings[n - 1] + String(count);

  // 결과 출력
  return answer;
}

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));

/* -------------------- */

// 시행착오

/*
  [초기 접근방법]
  1. 알파벳(a-z)만큼의 길이를 가지는 알파벳 개수 count 배열을 생성
  2. strings를 순회하며 알파벳에 해당하는 문자를 발견하면 count 배열의 해당 요소를 ++
  3. 알파벳 개수 count 배열에서 0이 아닌 요소만 따로 배열로 생성
  4. 해당 배열을 요약해서 출력
*/
