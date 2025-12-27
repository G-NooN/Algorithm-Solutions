/*
  <문제(Lv. 1) - 가운데 글자 가져오기>

  단어 s의 가운데 글자를 return하는 solution 함수를 완성하라.

  단어의 길이가 짝수인 경우, 가운데 두 글자를 return한다.

  [제한 사항]
  1. s는 길이가 1 이상, 100 이하인 String이다.
*/

/*
  [접근 방식]
  1. 입력값 : 문자열 s / 출력값 : 가운데 문자열
  2. 문자열의 가운데로 접근하기 위해 문자열의 길이에서 반을 나눈다.
  3. 나누었을 때 딱 떨어지면 문자열 길이가 짝수, 아니면 홀수
  4. 가운데 부분을 String의 메서드를 사용하여 출력
*/

/*
  [해결 방법]
  1. Math.floor()를 사용하여 문자열의 절반을 나눈다.
  2. 문자열의 길이를 2로 나눠서 나머지가 0인지 판단한다.
  3. String.slice()를 사용하여 문자를 더한다.
*/

// let s1 = "abcde";
// let s2 = "qwer";

function solution(s) {
  let answer = "";
  let centerIdx = Math.floor(s.length / 2);
  answer =
    s.length % 2 === 0 ? s.slice(centerIdx - 1, centerIdx + 1) : s.slice(centerIdx, centerIdx + 1);
  // answer = s.length % 2 === 0 ? s[centerIdx - 1] + s[centerIdx] : s[centerIdx];
  return answer;
}

// console.log(solution(s1));
// console.log(solution(s2));
