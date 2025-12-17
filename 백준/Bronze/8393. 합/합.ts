import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const solution = (value: number) => {
  let sum = 0;

  for (value; value > 0; value--) {
    sum += value;
  }

  console.log(sum);
};

solution(Number(input));
