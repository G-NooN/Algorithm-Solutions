import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

for (let i = Number(input); i > 0; i--) {
  console.log("*".repeat(i));
}