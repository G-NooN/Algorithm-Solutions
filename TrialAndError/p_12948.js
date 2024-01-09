/*
  <문제(Lv. 1) - 핸드폰 번호 가리기>

  전화번호 문자열 phone_number가 주어졌을 때,
  전화번호의 뒷 4자리를 제외한 나머지 숫자를 *로 가린 문자열을 return하는 solution 함수를 완성하라.

  [제한 사항]
  phone_number는 길이가 4 이상, 20 이하인 문자열이다.

  [입출력 예시]
  "01033334444" => "********4444"
  "027778888"   => "*****8888"
*/

/*
  [접근 방식]
  1. 입력 값은 전화번호 문자열, 출력 값은 *로 가린 문자열이다.
  2. 전화번호의 뒤에서 4자리만 가져온다.
  3. 나머지 자리의 길이만큼 *을 출력하고 2.의 번호를 붙인다.
  4. 결과를 출력한다.
*/

/* 
  [해결 방법]
  1. String.substring을 사용하여 전화번호 뒤 4자리를 가져옴
  2. string.repeat을 사용하여 (전화번호 길이-4)까지 반복문을 사용하여 *을 입력
  3. String.concat을 사용하여 * 뒤에 전화번호 4자리를 붙임
  4. 결과 출력
*/

// let pn1 = "01033334444";
// let pn2 = "027778888";

function solution(phone_number) {
  let answer = "";
  // 전화번호의 마지막 4자리
  let lastFour = phone_number.substring(phone_number.length - 4);

  // 전화번호 길이-4 만큼 *을 반복하고 그 뒤에 마지막 4자리를 붙임
  answer = "*".repeat(phone_number.length - 4).concat(lastFour);

  return answer;
}

// console.log(solution(pn1));
// console.log(solution(pn2));
