/**
 * <단어의 개수>
 *
 * - 레벨 : Bronze II
 * - 링크 : https://www.acmicpc.net/problem/1152
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : 문자열 분리 시 '' 도 하나의 단어로 카운트 됨
 */

const failedSolution = () => {
  const words = input.trim().split(" ");
  console.log(words.length);
};

/**
 * NOTE - 2nd Trial (Success)
 */

const solution = () => {
  const words = input
    .trim()
    .split(" ")
    .filter((word) => word !== "");

  console.log(words.length);
};

solution();
