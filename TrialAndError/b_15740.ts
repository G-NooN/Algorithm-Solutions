/**
 * <A + B - 9>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/15740
 */

/**
 * NOTE - Sub Tasks
 * 1. 0 ~ 10
 * 2. -100 ~ 100
 * 3. 0 ~ 10^9
 * 4. -10^9 ~ 10^9
 * 5. 0 ~ 2^60
 * 6. -2^60 ~ 2^60
 * 7. 0 ~ 10^10000
 * 8. -10^10000 ~ 10^10000
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Success - Partial (1,2,3,4))
 * - 실패 원인
 * : Number의 최댓값 - 2^53 -1
 */

const pastSolution = () => {
  const [a, b] = input.split(" ").map(Number);
  console.log(a + b);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : BigInt 사용
 * : BigInt 뒤 n 제거 시, toString() 사용
 */

const solution = () => {
  const [a, b] = input.split(" ").map(BigInt);
  console.log((a + b).toString());
};

solution();
