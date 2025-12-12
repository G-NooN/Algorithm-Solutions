import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

const result: string[] = [];

for (let i = 0; i < count; i++) {
  const leftTab = " ".repeat(count - (i + 1));
  const rightStarText = i > 0 ? " ".repeat(2 * i - 1) + "*" : "";

  result.push(leftTab + "*" + rightStarText);
}

console.log(result.join("\n"));