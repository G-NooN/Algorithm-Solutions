import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

let result = 1;

for (let i = 1; i <= Number(input); i++) {
  result *= i;
}

console.log(result);