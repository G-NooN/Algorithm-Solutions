import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: string[] = [];

for (let i = 0; i < Number(input); i++) {
  result.push("I love DGU");
}

console.log(result.join("\n"));