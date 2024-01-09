/*
  <문제(Lv.1) - 서울에서 김서방 찾기>

  String 형태의 배열 seoul의 element 중 "Kim"의 위치 x를 찾아 "김서방은 x에 있다"라는 String을 return하는 solution 함수를 완성하라.
  
  [제한 사항]
  1. seoul은 길이가 1 이상, 1,000 이하인 배열이다.
  2. seoul의 원소는 길이가 1 이상, 20 이하인 문자열이다.
  3. "Kim"은 반드시 seoul 안에 포함되어 있다.
  4. "Kim"은 seoul에 오직 한 번만 나타난다.

  [입출력 예시]
  ["Jane", "Kim"] => "김서방은 1에 있다"
*/

/*
  [접근 개념]
  1. Kim은 seoul 배열에 딱 한 번 등장한다.
  2. Array.indexOf()는 배열에서 주어진 요소를 찾은 가장 첫번째 index를 반환한다.
  3. 따라서, seoul.indexOf("Kim")은 seoul에서 "Kim"의 위치를 찾는 것과 동일하다.

  [해결 방법]
  1. Array.indexOf()를 사용하여 seoul에서 Kim이 있는 인덱스를 반환한다.
*/

// let seoul = ["Jane", "Kim"];
// let kim = "Kim";

function solution(seoul) {
  let answer = "";
  let x = seoul.indexOf("Kim");

  answer = `김서방은 ${x}에 있다.`;

  return answer;
}

// console.log(solution(seoul));

/* ----------------------------------- */

// 초기 코드
// function solution(seoul) {
//   let answer = "";
//   let x = 0;

//   for (let i = 0; i < seoul.length; i++) {
//     if (seoul[i] === "Kim") {
//       x = i;
//     }
//   }

//   answer = `김서방은 ${x}에 있다.`;

//   return answer;
// }
