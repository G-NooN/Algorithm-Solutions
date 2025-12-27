import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input
  .split("\n")
  .reduce((acc, value) => acc + BigInt(value), BigInt(0));

console.log(result.toString());
