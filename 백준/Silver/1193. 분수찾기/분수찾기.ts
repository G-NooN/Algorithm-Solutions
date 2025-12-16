import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const num = Number(input);

let [crossCount, currentNumber, top, bottom] = [1, 0, 1, 1];

while (num > crossCount + currentNumber) {
  currentNumber += crossCount;
  crossCount++;
}

const position = num - currentNumber;

const crossCountEven = crossCount % 2 === 0;

top = crossCountEven ? position : crossCount - position + 1;
bottom = crossCountEven ? crossCount - position + 1 : position;

console.log(`${top}/${bottom}`);