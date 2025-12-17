import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: string[] = [];

for (let i = Number(input); i > 0; i--) {
  const star = "*".repeat(2 * i - 1);
  const space = " ".repeat(Number(input) - i);

  result.push(space + star);
}

console.log(result.join("\n"));