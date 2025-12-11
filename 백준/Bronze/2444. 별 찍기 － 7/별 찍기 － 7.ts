import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const max = Number(input);
const starArray: string[] = [];

for (let i = 0; i < max; i++) {
  const tab = " ".repeat(max - (i + 1));
  const star = "*".repeat(2 * i + 1);

  starArray.push(tab + star);
}

const reversedArray = [...starArray].reverse().slice(1);
const result = [...starArray, ...reversedArray];

console.log(result.join("\n"));