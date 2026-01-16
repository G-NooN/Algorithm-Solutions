/**
 * <출석 이벤트>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/25704
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [count, price] = input.split("\n").map(Number);

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 할인된 가격 선언
 * : count 에 따라 최저 가격 계산
 */

const pastSolution1 = () => {
  const [count5, count10, count15, count20] = [
    price - 500,
    price * 0.9,
    price - 2000,
    price * 0.75,
  ];

  let lowestPrice = price;

  if (count >= 20) {
    lowestPrice = Math.min(lowestPrice, count5, count10, count15, count20);
  } else if (count >= 15) {
    lowestPrice = Math.min(lowestPrice, count5, count10, count15);
  } else if (count >= 10) {
    lowestPrice = Math.min(lowestPrice, count5, count10);
  } else if (count >= 5) {
    lowestPrice = Math.min(lowestPrice, count5);
  }

  console.log(lowestPrice > 0 ? lowestPrice : 0);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : count 증가마다 할인된 가격을 배열에 추가
 * : Math.min(...prices) 로 최저 가격 계산
 * : Math.max 로 0 이하 처리
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 9624 KB -> 9612 KB / 시간 : 112 ms -> 108 ms)
 */

const pastSolution2 = () => {
  const prices = [price];

  if (count >= 5) prices.push(price - 500);
  if (count >= 10) prices.push(price * 0.9);
  if (count >= 15) prices.push(price - 2000);
  if (count >= 20) prices.push(price * 0.75);

  const lowestPrice = Math.min(...prices);

  console.log(Math.max(lowestPrice, 0));
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : 정액할인 가격, 정률할인 가격 별도 계산
 * : Math.min 으로 최저 가격 계산
 * : Math.max 로 0 이하 처리
 * - 효과
 * : 메모리 감소 (9612 KB -> 9608 KB)
 */

const solution = () => {
  const valueDiscountedPrice =
    price - (count >= 15 ? 2000 : count >= 5 ? 500 : 0);

  const percentDiscountedPrice =
    price * (count >= 20 ? 0.75 : count >= 10 ? 0.9 : 1);

  const lowestPrice = Math.min(valueDiscountedPrice, percentDiscountedPrice);

  console.log(Math.max(lowestPrice, 0));
};

solution();
