import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [n, grade] = input.split(" ").map(Number);

if (grade < 3) {
  console.log("NEWBIE!");
} else if (grade <= n) {
  console.log("OLDBIE!");
} else {
  console.log("TLE!");
}
