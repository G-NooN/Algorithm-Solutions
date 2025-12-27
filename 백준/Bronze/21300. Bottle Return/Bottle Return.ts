import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input
  .split(" ")
  .map((value) => Number(value) * 5)
  .reduce((acc, value) => acc + value, 0);

console.log(result);
