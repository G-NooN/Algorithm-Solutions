import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const number = Number(input);

let count = 1;
let currentNumber = 1;

while (number > currentNumber) {
  currentNumber += 6 * count;
  count++;
}

console.log(count);