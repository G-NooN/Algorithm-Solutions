/**
 * <코딩은 체육과목 입니다>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/25314
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

const value = Number(input);

/**
 * NOTE - 1st Trial (Success)
 */

const pastSolution = (value: number) => {
  let longText = "";
  const count = value / 4;

  for (let i = 0; i < count; i++) {
    longText += "long ";
  }

  console.log(longText + "int");
};

/**
 * NOTE - 2nd(Final) Trial (Success)
 * - 포인트
 * : repeat
 */
const solution = (value: number) => {
  const count = value / 4;
  const longText = "long ";

  console.log(`${longText.repeat(count)}int`);
};

solution(value);
