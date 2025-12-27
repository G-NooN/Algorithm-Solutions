/*
  <문제(Lv.1) - 문자열 내 p와 y의 개수>

  대문자와 소문자가 섞여있는 문자열 s가 주어졌을 때,
  s에 'p'의 개수와 'y'의 개수를 비교하여 같으면 true, 다르면 false를 반환하는 solution 함수를 완성하라.
  
  [제한사항]
  1. 'p'와 'y'가 모두 하나도 없는 경우는 항상 true를 반환한다.
  2. 개수를 비교할 때, 대문자와 소문자는 구별하지 않는다.
  3. 문자열 s의 길이 : 50 이하의 자연수
  4. 문자열 s는 알파벳으로만 이루어져 있다.

  [입출력 예시]
  "pPoooyY" =>  true (p:2, y:2)
  "Pyy" =>  false (p:1, y:2)
*/

/* 
  [해결 방법]
  1. p와 y의 개수를 count할 변수를 선언한다.
  2. 대/소문자를 통일한다.
  3. 전체 문자를 순회하면 p를 count하면 변수에 1을 더하고, y를 count하면 변수에 1을 뺀다.
  4. 최종 count 결과가 0이면 p의 개수 = y의 개수 이기 때문에, 최종 결과가 0이면 true, 아니면 false를 반환한다.
  5. 결과를 출력한다.
*/

// let string1 = "pPoooyY";
// let string2 = "Pyy";

function solution(s) {
  // p와 y의 개수를 count할 변수
  let alphabetCount = 0;

  // 대소문자 통일 (소문자 -> 대문자)
  s = s.toUpperCase();

  // p를 발견하면 개수++, y를 발견하면 개수--
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") alphabetCount++;
    if (s[i] === "Y") alphabetCount--;
  }

  // p와 y의 개수가 동일하면 0, 다르면 양수 or 음수
  let answer = alphabetCount === 0 ? true : false;

  // 결과 출력
  return answer;
}

// console.log(solution(string1));
// console.log(solution(string2));

/* -------------------------------- */

// // 초기 코드
// let string1 = "pPoooyY";
// let string2 = "Pyy";

// function solution(s) {
//   let pCount = 0; // p의 개수를 세는 변수
//   let yCount = 0; // y의 개수를 세는 변수

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "p" || s[i] === "P") pCount++; // p, P 발견 시 pCount+1
//     if (s[i] === "y" || s[i] === "Y") yCount++; // y, Y 발견 시 yCount+1
//   }

//   // pCount의 값과 yCount의 값을 비교하여 같으면 true, 다르면 false 반환
//   let answer = pCount === yCount ? true : false;

//   // 결과 출력
//   return answer;
// }

// console.log(solution(string1));
// console.log(solution(string2));
