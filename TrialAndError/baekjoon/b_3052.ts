/**
 * <나머지>
 *
 * - 레벨 : Bronze II
 * - 링크 : https://www.acmicpc.net/problem/3052
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : sort 조건 누락 [1,10,2,...]
 */

const failedSolution = () => {
  const array = input
    .split("\n")
    .map(Number)
    .map((value) => value % 42)
    .sort();

  let count = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      count++;
    }
  }

  console.log(count);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : sort 조건 추가
 */

const pastSolution = () => {
  const array = input
    .split("\n")
    .map(Number)
    .map((value) => value % 42)
    .sort((a, b) => a - b);

  let count = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      count++;
    }
  }

  console.log(count);
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : Set 사용 (중복 제거)
 * : 효과 - sort 필요 없음
 */

const solution = () => {
  const array = input
    .split("\n")
    .map(Number)
    .map((value) => value % 42);

  const targetArray = new Set(array);

  console.log(targetArray.size);
};

solution();
