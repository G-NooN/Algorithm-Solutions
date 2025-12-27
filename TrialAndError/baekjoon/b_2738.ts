/**
 * <행렬 덧셈>
 *
 * - 레벨 : Bronze III
 * - 링크 : https://www.acmicpc.net/problem/2738
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : slice() 로 배열 분할
 */

const [size, ...values] = input.split("\n");

const [row, column] = size.split(" ").map(Number);

// 각 배열 -> 2차원 배열로 변환
const array1 = values
  .slice(0, row)
  .map((value) => value.split(" ").map(Number));
const array2 = values.slice(row).map((value) => value.split(" ").map(Number));

// 결과 배열
const resultArray = Array.from({ length: row }, () =>
  Array.from({ length: column }, () => 0)
);

const solution = () => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      resultArray[i][j] = array1[i][j] + array2[i][j];
    }
  }

  const result = resultArray.map((value) => value.join(" ")).join("\n");

  console.log(result);
};

solution();
