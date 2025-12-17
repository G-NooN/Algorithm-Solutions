import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split(" ");

const solution = (a: string, b: string) => {
  const result = Number(a) / Number(b);
  console.log(result);
};

solution(array[0], array[1]);
