import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split(" ");

const a = Number(array[0]);
const b = Number(array[1]);
const c = Number(array[2]);

const solution = (a: number, b: number, c: number) => {
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);
};

solution(a, b, c);
