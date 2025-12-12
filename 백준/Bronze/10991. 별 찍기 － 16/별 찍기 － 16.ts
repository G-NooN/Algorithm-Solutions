import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

const result: string[] = [];

for (let i = 0; i < count; i++) {
  const leftTab = " ".repeat(count - (i + 1));
  const rightStarText = " *".repeat(i);

  result.push(leftTab + "*" + rightStarText);
}

console.log(result.join("\n"));
