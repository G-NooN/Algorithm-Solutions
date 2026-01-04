import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(result.join(" "));
