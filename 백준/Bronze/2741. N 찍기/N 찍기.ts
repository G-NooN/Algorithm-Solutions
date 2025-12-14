import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

const result: number[] = [];

for (let i = 0; i < count; i++) {
  result.push(i + 1);
}

console.log(result.join("\n"));