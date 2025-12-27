/*
  <문제(Lv.1) - x만큼 간격이 있는 n개의 숫자>

  임의의 정수 x와 자연수 n을 입력 받아, 
  x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 return 하는 solution 함수를 완성하라.

  [제한사항]
  1. x는 -10,000,000 이상, 10,000,000 이하인 정수다.
  2. n은 1,000 이하인 자연수다.

  [입출력 예시]
  [x | n]
  [2 | 5] => [2,4,6,8,10]
  [4 | 3] => [4,8,12]
  [-4 | 2] => [-4,-8]
*/

/*
  [해결 방법]
  1. 결과값을 출력할 배열을 선언한다.
  2. x를 1번부터 n번까지 계속해서 더한다.
  3. Array.push()를 사용하여 더한 값을 결과 배열에 추가한다.
  4. 결과 배열을 출력한다.
*/

// let x1 = 2;
// let x2 = 4;
// let x3 = -4;
// let n1 = 5;
// let n2 = 3;
// let n3 = 2;

function solution(x, n) {
  let answer = []; // 결과값 배열

  // x를 n번 더한다 => x의 배수다
  for (let i = 1; i <= n; i++) {
    // Array.push()를 사용하여 배열에 추가
    answer.push(i * x);
  }

  // 결과 출력
  return answer;
}

// console.log(solution(x1, n1));
// console.log(solution(x2, n2));
// console.log(solution(x3, n3));
