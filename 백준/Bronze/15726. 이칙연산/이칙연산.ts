import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c] = input.split(" ").map(Number);

console.log(Math.max(Math.floor((a * b) / c), Math.floor((a / b) * c)));
