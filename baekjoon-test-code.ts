// NOTE - 백준 제출용 (JavaScript)
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// NOTE - 내부 테스트용 (TypeScript)
import fs from "fs";
const input = fs.readFileSync("./baekjoon-test-input.txt").toString().trim();

/**
 * NOTE - input 참고사항
 * - input 값에 toString().trim() 기본 적용 (미적용 시 Buffer 객체 반환)
 * - 이후 입력되는 형태에 따라 split, map 등 메서드 활용 필요
 */

/** ----------코드 작성 지점---------- **/

const array = input.split(" ");

const a = Number(array[0]);
const b = Number(array[1]);

const solution = (a: number, b: number) => {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
};

solution(a, b);
