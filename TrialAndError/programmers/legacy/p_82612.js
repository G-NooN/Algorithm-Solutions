/*
  <문제(Lv. 1) - 부족한 금액 계산하기>

  새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이지 않는다.
  따라서, 놀이기구의 원래 이용료는 price원인데, 놀이기구를 n번째 이용하는 경우, 원래 이용료의 n배를 받는다.
  즉, 처음 이용료가 100원이면, 2번째에는 200원, 3번째에는 300원으로 요금이 인상된다.

  놀이기구를 count번 타고 싶은 경우,
  현재 자신이 가지고 있는 금액 money에서 얼마가 모자라는지를 return하는 solution 함수를 완성하라.

  단, 금액이 부족하지 않으면 0을 return 하라.

  [제한 사항]
  1. price는 1보다 크고 2,500보다 작은 자연수다.
  2. money는 1보다 크고 1,000,000,000보다 작은 자연수다.
  3. count는 1보다 크고 2,500보다 작은 자연수다.
*/

/*
  [접근 방식]
  1. 입력값 : 초기 이용료, 잔고, 타고싶은 횟수 / 출력값 : 부족한 잔고의 액수
  2. 결과적으로 알고 싶은 것은 'count번까지 다 탔을 때의 이용료가 잔고와 얼마나 차이나는가'다.
  3. count번까지의 이용료를 합산한 금액을 새로운 변수로 할당하고, 해당 금액과 잔고를 비교한다.
  3-1. 합산한 이용료가 잔고보다 높으면 차액을 출력한다.
  3-2. 합산한 이용료가 잔고보다 낮다면 잔고가 남는다는 뜻이므로 0을 출력한다.
*/

/*
  [해결 방법]
  1. count번까지의 이용료를 합산한 금액을 저장할 변수를 선언한다.
  2. 1부터 count번까지 반복문을 수행한다.
  2-1. 반복문을 수행할 때마다 price에 price를 더한다.
  3. 합산한 이용료와 잔고를 비교한다.
  3-1. 합산한 이용료가 잔고보다 높으면 차액을 return한다.
  3-2. 합산한 이용료가 잔고보다 낮으면 0을 return한다.
*/

function solution(price, money, count) {
  let answer = -1;
  let totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += i * price;
  }

  answer = totalPrice - money > 0 ? totalPrice - money : 0;

  return answer;
}

console.log(solution(3, 20, 4));

/* -------------------- */
// 초기 접근 방식

/*
  1. 1부터 count까지 반복문을 수행한다.
  1-1. 반복문을 수행할 때마다 price에 price를 더한다.
  1-2. 더해진 price를 money에서 뺀다.

  2. 최종 money을 확인한다.
  2-1. money가 0보다 크면, 돈이 부족하지 않다는 뜻이기 때문에 0을 return한다.
  2-2. money가 음수면, 해당 값을 양수로 변환하여 return한다.
*/

function solution1(price, money, count) {
  let answer = -1;
  let pricePerCount = 0;

  for (let i = 1; i <= count; i++) {
    pricePerCount = i * price;
    money -= pricePerCount;
  }

  answer = money - pricePerCount > 0 ? 0 : pricePerCount - money;

  return answer;
}

console.log(solution1(3, 20, 4));
