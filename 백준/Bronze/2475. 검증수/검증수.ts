import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input
  .split(" ")
  .map(Number)
  .map((value) => Math.pow(value, 2));

const result = array.reduce((acc, current) => acc + current, 0) % 10;

console.log(result);