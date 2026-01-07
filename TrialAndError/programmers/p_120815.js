/**
 * <피자 나눠 먹기 (2)
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120815
 */

// NOTE - 공통 상위 코드
const n = 10;

/**
 * NOTE - 1st Trial (Success, AI Assisted)
 * - 포인트
 * : 최대공약수 공식 활용
 */

const pastSolution = () => {
  const getGcd = (dividend, divisor) =>
    divisor === 0 ? dividend : getGcd(divisor, dividend % divisor);

  return n / getGcd(n, 6);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 반복문 활용
 * - 효과
 * : 시간 감소 (0.05 ms -> 0.03 ms)
 */

const solution = () => {
  let piece = 6; // n 명이 먹기 위해 필요한 총 피자 조각 수

  while (piece % n !== 0) {
    piece += 6;
  }

  return piece / 6; // 피자 판 수 = 총 피자 조각 수 / 6
};

console.log(solution());
