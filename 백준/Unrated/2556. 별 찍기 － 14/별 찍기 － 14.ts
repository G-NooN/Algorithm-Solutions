import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

for (let i = 0; i < count; i++) {
  console.log("*".repeat(count));
}