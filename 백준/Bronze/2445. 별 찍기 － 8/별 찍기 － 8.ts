import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

const max = Number(input);

function writeLine(i: number) {
  const star = "*".repeat(i);
  const space = " ".repeat(2 * (max - i));

  console.log(star + space + star);
}

for (let i = 1; i < max; i++) {
  writeLine(i);
}

for (let i = max; i > 0; i--) {
  writeLine(i);
}