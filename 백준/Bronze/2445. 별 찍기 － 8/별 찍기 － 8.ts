import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const max = Number(input);
const starArray: string[] = [];

for (let i = 0; i < max; i++) {
  const star = "*".repeat(i + 1);
  const tab = " ".repeat(2 * (max - (i + 1)));

  starArray.push(star + tab + star);
}

const reversedArray = [...starArray].reverse().slice(1);
const result = [...starArray, ...reversedArray];

console.log(result.join("\n"));