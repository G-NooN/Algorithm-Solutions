import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [[a1, b1], [a2, b2]] = input
  .split("\n")
  .map((value) => value.split(" ").map(Number));

console.log(Math.min(a1 + b2, a2 + b1));
