import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

for (let i = 0; i < Number(input); i++) {
  const space = " ".repeat(Number(input) - (i + 1));
  const star = "*".repeat(2 * i + 1);

  console.log(space + star);
}