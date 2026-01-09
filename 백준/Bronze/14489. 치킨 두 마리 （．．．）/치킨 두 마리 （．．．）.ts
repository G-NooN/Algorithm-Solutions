import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [budget, price] = input.split("\n");

const [a, b] = budget.split(" ").map(Number);
const c = 2 * Number(price);

console.log(a + b - (a + b < c ? 0 : c));
