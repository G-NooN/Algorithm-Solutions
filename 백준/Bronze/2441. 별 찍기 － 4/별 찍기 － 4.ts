import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

for (let i = 0; i < Number(input); i++) {
  const space = " ".repeat(i);
  const star = "*".repeat(Number(input) - i);

  console.log(space + star);
}