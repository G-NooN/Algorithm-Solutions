import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split("\n");

const x = array[0];
const y = array[1];

const solution = (x: number, y: number) => {
  if (x > 0) {
    console.log(y > 0 ? 1 : 4);
  } else {
    console.log(y > 0 ? 2 : 3);
  }
};

solution(Number(x), Number(y));
