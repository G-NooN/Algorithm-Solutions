import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [sum, diff] = input.split(" ").map(Number);

const a = (sum + diff) / 2;
const b = (sum - diff) / 2;

const validScore = [a, b].every(
  (value) => Number.isInteger(value) && value >= 0
);

console.log(validScore ? `${a} ${b}` : -1);
