import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

const starText = "* ".repeat(count);
const reversedStarText = " *".repeat(count);

for (let i = 1; i <= count; i++) {
  if (i % 2 === 0) {
    console.log(reversedStarText);
  } else {
    console.log(starText);
  }
}
