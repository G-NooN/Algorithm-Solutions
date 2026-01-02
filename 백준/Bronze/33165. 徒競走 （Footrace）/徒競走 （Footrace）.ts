import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(
  input.split("\n").reduce((acc, current) => acc * Number(current), 1)
);
