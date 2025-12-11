import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

for (let i = Number(input); i > 0; i--) {
  const star = "*".repeat(2 * i - 1);
  const space = " ".repeat(Number(input) - i);

  console.log(space + star);
}