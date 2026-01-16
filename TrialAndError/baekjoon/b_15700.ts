/**
 * <타일 채우기 4>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/15700
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

/**
 * NOTE - 1st Trial (Fail)
 * - 포인트
 * : 1 x 2 또는 2 x 1 모두 차지하는 칸 = 2 칸
 * : 최대 칸 수 = (width * height) / 2
 * - 실패 원인
 * : width, height 최대값 = 1,000,000,000
 * => Number 최대값 초과
 */

const failedSolution = () => {
  const [width, height] = input.split(" ").map(Number);

  console.log(Math.floor((width * height) / 2));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : BigInt 는 소수점 처리 x
 */

const solution = () => {
  const [width, height] = input.split(" ").map(BigInt);

  console.log(((width * height) / BigInt(2)).toString());
};

solution();
