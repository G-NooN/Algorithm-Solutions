import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

for (let i = 1; i <= count; i++) {
  if (i % 2 === 0) {
    console.log(" *".repeat(count));
  } else {
    console.log("* ".repeat(count));
  }
}
