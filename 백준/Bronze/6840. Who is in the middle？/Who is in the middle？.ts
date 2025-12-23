import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, middle] = input
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

console.log(middle);
