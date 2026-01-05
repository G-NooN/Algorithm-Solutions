/**
 * <바구니 뒤집기>
 *
 * - 레벨 : Bronze II
 * - 링크 : https://www.acmicpc.net/problem/10811
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [targetArray, ...valueArray] = input.split("\n");

const [basketLength, _] = targetArray.split(" ").map(Number);

const resultArray = Array.from({ length: basketLength }).map(
  (_, index) => index + 1
);

/**
 * NOTE - 1st Trial (Success, AI Assisted)
 * - 포인트
 * : slice() 메서드 사용
 */

const pastSolution = () => {
  valueArray.forEach((value) => {
    const [start, end] = value.split(" ").map(Number);
    const startIndex = start - 1;

    const reversedArray = resultArray.slice(startIndex, end).reverse();

    for (let i = startIndex; i < end; i++) {
      resultArray[i] = reversedArray[i - startIndex];
    }
  });

  console.log(resultArray.join(" "));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : splice() 메서드 사용
 */

const solution = () => {
  valueArray.forEach((value) => {
    const [start, end] = value.split(" ").map(Number);
    const startIndex = start - 1;

    const reversedArray = resultArray.slice(startIndex, end).reverse();

    resultArray.splice(startIndex, end - start + 1, ...reversedArray);

    console.log(resultArray.join(" "));
  });
};

solution();
