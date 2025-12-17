import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const value = Number(input);

const solution = (num: number) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

solution(value);
