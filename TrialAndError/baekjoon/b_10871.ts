/**
 * <X보다 작은 수>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/10871
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split("\n");
const [targetArray, valueArray] = array;

const [, target] = targetArray.split(" ");
const values = valueArray.split(" ");

/**
 * NOTE - 1st Trial (Success)
 */
const pastSolution = () => {
  let result = "";

  values.forEach((value) => {
    if (Number(value) < Number(target)) {
      result += `${value} `;
    }
  });

  console.log(result);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : filter & join
 */
const solution = () => {
  const targetValues = values.filter((value) => Number(value) < Number(target));

  console.log(targetValues.join(" "));
};

solution();
