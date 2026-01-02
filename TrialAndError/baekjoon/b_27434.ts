/**
 * <팩토리얼 3>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/27434
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : 시간 초과
 */

const failedSolution1 = () => {
  let result = BigInt(1);

  for (let i = 1; i <= Number(input); i++) {
    result *= BigInt(i);
  }

  console.log(result.toString());
};

/**
 * NOTE - 2nd Trial (Fail)
 * - 포인트
 * : 재귀 함수 사용
 * - 실패 원인
 * : 시간 초과
 */

const failedSolution2 = () => {
  const factorial = (n: bigint): bigint => {
    return n === BigInt(0) ? BigInt(1) : n * factorial(n - BigInt(1));
  };

  console.log(factorial(BigInt(input)).toString());
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : 분할정복 알고리즘
 * - 효과
 * : 시간복잡도 감소 (O(n) -> O(n log n))
 */

const solution = () => {
  const num = Number(input);

  const factorial = (left: number, right: number): bigint => {
    if (left === right) return BigInt(left);

    const mid = Math.floor((left + right) / 2);

    return factorial(left, mid) * factorial(mid + 1, right);
  };

  console.log(num === 0 ? 1 : factorial(1, num).toString());
};

solution();
