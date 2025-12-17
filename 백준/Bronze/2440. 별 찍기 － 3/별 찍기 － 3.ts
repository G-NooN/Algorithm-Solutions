import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

for (let i = Number(input); i > 0; i--) {
  console.log("*".repeat(i));
}