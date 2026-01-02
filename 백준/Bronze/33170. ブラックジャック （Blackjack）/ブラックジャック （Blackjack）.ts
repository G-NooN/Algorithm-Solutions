import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const sum = input
  .split("\n")
  .reduce((acc, current) => acc + Number(current), 0);

console.log(Number(sum <= 21));
