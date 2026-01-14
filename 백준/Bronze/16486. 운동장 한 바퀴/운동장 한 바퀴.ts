import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [d1, d2] = input.split("\n").map(Number);

const result = 2 * (d1 + 3.141592 * d2);

console.log(result.toFixed(6));
