import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

for (let i = 0; i < Number(input); i++) {
  const space = " ".repeat(Number(input) - (i + 1));
  const star = "*".repeat(2 * i + 1);

  console.log(space + star);
}