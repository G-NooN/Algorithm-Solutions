import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [price, count, budget] = input.split(" ").map(Number);

const result = price * count - budget;

console.log(result > 0 ? result : 0);
