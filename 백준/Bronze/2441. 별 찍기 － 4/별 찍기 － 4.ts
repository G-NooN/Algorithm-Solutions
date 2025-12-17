import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: string[] = [];

for (let i = 0; i < Number(input); i++) {
  const space = " ".repeat(i);
  const star = "*".repeat(Number(input) - i);

  result.push(space + star);
}

console.log(result.join("\n"));