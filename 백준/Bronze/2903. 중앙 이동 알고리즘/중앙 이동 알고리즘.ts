import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

let sum = 2;

for (let i = 0; i < count; i++) {
  sum += Math.pow(2, i);
}

console.log(Math.pow(sum, 2));
