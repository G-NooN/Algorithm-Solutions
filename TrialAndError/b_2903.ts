/**
 * <중앙 이동 알고리즘>
 *
 * - 레벨 : Bronze III
 * - 링크 : https://www.acmicpc.net/problem/2903
 */

// NOTE - 공통 상위 코드
import fs from "fs";
const input = fs.readFileSync("./baekjoon-test-input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 규칙
 * 1 - (2 + 2^0)^2
 * 2 - (2 + 2^0 + 2^1)^2
 * 3 - (2 + 2^0 + 2^1 + 2^2)^2
 * 4 - (2 + 2^0 + 2^1 + 2^2 + 2^3)^2
 * 5 - (2 + 2^0 + 2^1 + 2^2 + 2^3 + 2^4)^2
 */

const solution = () => {
  const count = Number(input);

  let sum = 2;

  for (let i = 0; i < count; i++) {
    sum += Math.pow(2, i);
  }

  console.log(Math.pow(sum, 2));
};

solution();
