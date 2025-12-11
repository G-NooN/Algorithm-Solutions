import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

const count = Number(input);

function writeLine(i: number, desc?: boolean) {
  const space = " ".repeat(i - 1);
  const star = "*".repeat(
    desc ? 2 * count - (2 * (i - 1) + 1) : 2 * (count - i) + 1
  );

  console.log(space + star);
}

for (let i = 1; i < count; i++) {
  writeLine(i, true);
}

for (let i = count; i > 0; i--) {
  writeLine(i);
}