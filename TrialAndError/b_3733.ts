/**
 * <Shares>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/3733
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 포인트
 * : N 명과 Judge 가 같이 share 함 -> N + 1
 * : 동등하게 가질 수 있는 최대값 = 몫 (Math.floor())
 */

/**
 * NOTE - 1st Trial (Success)
 */

const pastSolution = () => {
  const array = input.split("\n");

  const result: number[] = [];

  array.forEach((value) => {
    const [a, b] = value.split(" ").map(Number);

    result.push(Math.floor(b / (a + 1)));
  });

  console.log(result.join("\n"));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : array 자체에서 map() 사용
 */

const solution = () => {
  const array = input.split("\n").map((value) => {
    const [a, b] = value.split(" ").map((value) => Number(value));

    return Math.floor(b / (a + 1));
  });

  console.log(array.join("\n"));
};

solution();
