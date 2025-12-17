import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = Array.from(
  { length: Number(input) },
  (_, index) => Number(input) - index
);

console.log(array.join("\n"));