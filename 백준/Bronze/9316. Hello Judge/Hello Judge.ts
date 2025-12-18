import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: string[] = [];

for (let i = 0; i < Number(input); i++) {
  result.push(`Hello World, Judge ${i + 1}!`);
}

console.log(result.join("\n"));