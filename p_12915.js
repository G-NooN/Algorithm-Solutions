/*
  <문제(Lv.1) - 문자열 내 마음대로 정렬하기>

  문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
  각 문자열의 인덱스 n번째 글자를 기준으로 오름차순으로 정렬하는 solution 함수를 완성하라.

  [제한사항]
  1. strings는 길이가 1 이상, 50 이하인 배열이다.
  2. strings의 원소는 소문자 알파벳으로 이루어져 있다.
  3. strings의 원소는 길이가 1 이상, 100 이하인 문자열이다.
  4. 모든 strings의 원소의 길이는 n보다 크다.
  5. 인덱스 n의 문자가 같은 문자열이 여러 개일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치한다.

  [입출력 예시]
  [strings | n]
  ["sun","bed","car" | 1]   =>  ["car","bed","sun"] (sun[1] = "u", bed[1] = "e", car[1] = "a")
  ["abce","abcd","cdx" | 2] =>  ["abcd","abce","cdx"] (abce[2] "c", abcd[2] = "c", cdx[2] = "x")  
*/

/*
  [해결 방법]
  1. n번째 글자를 각 원소의 제일 앞 글자로 추가
  2. 사전순으로 정렬(sort() 메서드 사용)
  3. 각 원소의 제일 앞글자(=1에서 추가한 n번째 글자)를 제거
  4. 최종 strings 출력
*/

let string1 = ["sun", "bed", "car"];
let string2 = ["abce", "abcd", "cdx"];

function solution(strings, n) {
  let answer = [];

  // n번째 글자를 각 원소의 제일 앞 글자로 추가
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }

  // 배열을 사전순으로 정렬
  strings.sort();

  // 각 원소의 제일 앞글자 제거
  for (let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "");
    // 최종 answer 배열에 입력
    answer.push(strings[j]);
  }

  return answer;
}

// console.log(solution(string1, 1));
// console.log(solution(string2, 2));

/* -------------------------------- */

// 안되는 이유: word는 지역 변수 => forEach문을 벗어나지 못함
function solution1(strings, n) {
  // n번재 글자를 각 원소의 제일 앞 글자로 추가
  strings.forEach((word) => {
    word = word[n] + word;
  });

  return strings;
}

console.log(solution1(string1, 1));

/*
  [내가 생각한 초기 해결 방법]
  1. 최종 결과를 출력할 변수 선언
  2. strings의 각 원소의 n번째 인덱스의 문자에 접근
  3. 해당 문자들을 뽑아 배열로 생성
  4. 해당 배열을 정렬
  4-1. 동일한 문자가 나왔을 시, strings 각 원소 자체를 사전순으로 정렬 (근데 어떻게?)
  5. 인덱스 배열의 정렬 상태에 따라 strings의 원소들을 정렬 (인덱스 배열 -> strings 배열 연동 how?)
  6. 결과 출력
*/
