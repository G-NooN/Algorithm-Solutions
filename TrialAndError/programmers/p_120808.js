/**
 * <분수의 덧셈>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120808
 */

// NOTE - 공통 상위 코드
const [numer1, denom1] = [1, 2];
const [numer2, denom2] = [3, 4];

/**
 * NOTE - 1st Trial (Fail)
 * - 포인트
 * : 분모 최소공배수 계산
 * : 최소공배수 / 각 분모 만큼 분자 **
 * - 실패 원인
 * : 분자/분모 약분이 가능함
 */

const failedSolution = () => {
  let denom = 1; // 최종 분모

  // 각 분모로 나눴을 때 나머지가 모두 0이 되는 최소 최종 분모 계산
  while (denom % denom1 !== 0 || denom % denom2 !== 0) {
    denom++;
  }

  // 분자 합계
  const sum = (denom / denom1) * numer1 + (denom / denom2) * numer2;

  return [sum, denom];
};

/**
 * SECTION 규칙
 *
 * NOTE - 분수의 덧셈 공식
 * : a/b + c/d = (a * d + c * b) / (b * d)
 *
 * NOTE - 유클리드 호제법
 * : 최대공약수를 계산하는 알고리즘
 * : a, b 가 있을 때, a % b 수행
 * : 나머지가 0이 될 때까지 b % (a % b) 수행
 * => 최대공약수 = 나머지가 0일 때의 b
 *
 * !SECTION
 */

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 분수의 덧셈 공식 활용
 * : 최대공약수 계산 함수 분리
 */

// 최대공약수 (GCD: Greatest Common Divisor) 계산 (유클리드 호제법)
const getGcd = (dividend, divisor) => {
  if (divisor === 0) return dividend;
  return getGcd(divisor, dividend % divisor);
};

const solution = () => {
  const numer = numer1 * denom2 + denom1 * numer2; // 분자
  const denom = denom1 * denom2; // 분모

  const gcdValue = getGcd(numer, denom); // 최대공약수

  return [numer / gcdValue, denom / gcdValue]; // 약분
};

console.log(solution());
