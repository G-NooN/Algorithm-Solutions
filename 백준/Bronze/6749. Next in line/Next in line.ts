import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split("\n").map(Number);

console.log(2 * b - a);
