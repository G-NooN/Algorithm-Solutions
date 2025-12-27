/**
 * <피갤컵>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/33612
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 월이 12가 넘어가면, 월-- 와 동시에 연도++
 */

const pastSolution = () => {
  let [year, month] = [2024, 8];

  let targetMonth = month + 7 * (Number(input) - 1);

  while (targetMonth > 12) {
    targetMonth -= 12;
    year++;
  }

  console.log(year, targetMonth);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 1회부터 체크할 수 있도록 초기 월 변경
 * : Math.floor() 사용하여 반복문 제거
 * : 나머지가 0 인 경우 연도가 하나 더 ++ 되는 부분 처리
 */

const solution = () => {
  let [year, month] = [2024, 1];

  const target = month + 7 * Number(input);
  const yearEnd = target % 12 === 0;

  year += yearEnd ? Math.floor(target / 12) - 1 : Math.floor(target / 12);
  month = yearEnd ? 12 : target % 12;

  console.log(year, month);
};
