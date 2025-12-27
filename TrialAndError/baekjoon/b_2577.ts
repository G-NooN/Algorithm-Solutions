/**
 * <숫자의 개수>
 *
 * - 레벨 : Bronze II
 * - 링크 : https://www.acmicpc.net/problem/2577
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

const array = input.split("\n").map(Number);
const multipleText = array
  .reduce((acc, current) => acc * current)
  .toString()
  .split("");

const numbers = Array.from({ length: 10 }, () => 0);

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 숫자 0 ~ 9 를 배열 index로 활용
 */

const pastSolution = () => {
  numbers.forEach((_, i) => {
    multipleText.forEach((value) => {
      if (value === i.toString()) {
        numbers[i]++;
      }
    });
  });

  console.log(numbers.join("\n"));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 이중 반복문 제거 (index 자체가 숫자이기 때문에 바로 연결)
 */

const solution = () => {
  multipleText.forEach((value) => {
    numbers[Number(value)]++;
  });

  console.log(numbers.join("\n"));
};

solution();
