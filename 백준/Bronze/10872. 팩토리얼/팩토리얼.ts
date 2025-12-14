import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

let result = 1;

for (let i = 0; i < count; i++) {
  result *= i + 1;
}

console.log(result);