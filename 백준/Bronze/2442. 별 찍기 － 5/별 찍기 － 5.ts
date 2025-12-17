import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: string[] = [];

for (let i = 0; i < Number(input); i++) {
  const space = " ".repeat(Number(input) - (i + 1));
  const star = "*".repeat(2 * i + 1);

  result.push(space + star);
}

console.log(result.join("\n"));