/*
  <문제(Lv.1) - 음양 더하기>

  어떠한 정수들의 절대값을 차례대로 담은 정수 배열 absolutes와
  이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어진다.
  실제 정수의 합을 구하여 return 하도록 solution 함수를 완성하라.

  [제한사항]
  1. absolutes의 길이는 1 이상 1,000 이하다.
  2. absolutes의 모든 수는 각각 1 이상 1,000 이하다.
  3. signs의 길이는 absolutes의 길이와 같다.
  4. signs[i]가 참이면 absolutes[i]의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미한다.

  [입출력 예시]
  [absolutes | signs]
  [4,7,12 | true,false,true]  =>  9 (4,-7,12)
  [1,2,3 | false,false,true]  =>  0 (-1,-2,3)
*/

/*
  [해결방법]
  1. 합계를 저장할 변수 선언
  2. absolutes를 순회하며 absolutes[n]의 signs[n]이 true(양수)면 합계에 +, false(음수)면 합계에 -
  3. 결과 출력
*/

function solution(absolutes, signs) {
  // 합계를 저장할 변수
  let answer = 0;

  // 배열의 요소가 양수이면 합계 +, 음수면 합계 -
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }

  // 결과 출력
  return answer;
}
