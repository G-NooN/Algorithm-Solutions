/*
  <문제(Lv. 1) - 약수의 개수와 덧셈>

  두 정수 left, right가 매개변수로 주어졌을 때, left부터 right까지의 모든 수들 중에서,
  약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 결과값을 return하는 solution을 완성하라.

  [제한 사항]
  1. 1 <= left <= right <= 1,000
*/

/*
  [접근 방식]
  1. 입력값: 정수 2개 / 출력값: left~right까지의 수를 조건에 의해 더하고 뺀 결과값
  2. 약수: 정수 n을 1~n까지 나눠서 나누어 떨어지는 수
  3. 1 ~ 각 수까지 반복하여 나눠지는 지 판단하여 나눠지는 수가 나올 때마다 약수 개수 변수값++
  4. left~right까지 3의 작업을 반복하여 약수 개수 변수값이 짝수면 더하고, 홀수면 뺀다.
*/

/*
  [해결 방법]
  1. 약수를 count하는 함수를 별도로 선언한다.
  1-1. 약수의 개수를 count하는 변수를 선언한다.
  1-2. 1~num까지 반복하며 나눠지는 지 확인한 후, 나눠지면 count++
  2. left부터 right까지 반복문을 수행한다.
  2-1. 각 수의 count가 짝수면 합계에 더하고, 홀수면 뺀다.
  3. 결과를 출력한다.
*/

function solution(left, right) {
  let answer = 0;

  // 약수 count
  function divisorCount(num) {
    let divisorCount = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) divisorCount++;
    }
    return divisorCount;
  }

  for (let i = left; i <= right; i++) {
    divisorCount(i) % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}

// console.log(solution(13, 17));
// console.log(solution(24, 27));
