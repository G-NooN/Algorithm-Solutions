import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

let num = Number(input);

let [crossCount, top, bottom] = [1, 1, 1];

while (num > crossCount) {
  num -= crossCount;
  crossCount++;
}

const crossCountEven = crossCount % 2 === 0;

top = crossCountEven ? num : crossCount - num + 1;
bottom = crossCountEven ? crossCount - num + 1 : num;

console.log(`${top}/${bottom}`);