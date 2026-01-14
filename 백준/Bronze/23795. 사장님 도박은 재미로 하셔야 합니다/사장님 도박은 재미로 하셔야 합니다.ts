import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input
  .split("\n")
  .slice(0, -1)
  .reduce((acc, value) => acc + Number(value), 0);

console.log(result);
