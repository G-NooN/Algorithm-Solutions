/**
 * <영수증>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/25304
 */

// NOTE - 공통 상위 코드
import fs from "fs";
const input = fs.readFileSync("./input.txt").toString().trim();

const array = input.split("\n");

const [total, , ...values] = array;

/**
 * NOTE - 1st Trial (Success)
 * - 개선 필요사항 : 불필요한 map 사용
 */

const pastSolution = () => {
  const productArray = values.map((value) => {
    const [price, count] = value.split(" ");
    return Number(price) * Number(count);
  });

  const sum = productArray.reduce((prev, current) => prev + current);

  const result = Number(total) === sum ? "Yes" : "No";

  console.log(result);
};

/**
 * NOTE - 2nd(Final) Trial (Success)
 * - 포인트
 * : reduce 메서드의 initialValue 설정 (미설정 시 index[0])
 */
const solution = () => {
  const sum = values.reduce((acc, value) => {
    const [price, count] = value.split(" ");
    return acc + Number(price) * Number(count);
  }, 0);

  const result = Number(total) === sum ? "Yes" : "No";

  console.log(result);
};

solution();
