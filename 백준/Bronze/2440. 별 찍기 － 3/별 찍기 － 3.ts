import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: string[] = [];

for (let i = Number(input); i > 0; i--) {
  result.push("*".repeat(i));
}

console.log(result.join("\n"));