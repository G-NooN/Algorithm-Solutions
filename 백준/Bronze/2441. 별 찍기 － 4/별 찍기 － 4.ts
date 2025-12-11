import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

for (let i = 0; i < Number(input); i++) {
  const space = " ".repeat(i);
  const star = "*".repeat(Number(input) - i);

  console.log(space + star);
}