import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

let [year, month] = [2024, 8];

let targetMonth = month + 7 * (Number(input) - 1);

while (targetMonth > 12) {
  targetMonth -= 12;
  year++;
}

console.log(year, targetMonth);
