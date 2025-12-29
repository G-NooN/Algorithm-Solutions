import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c] = input.split("\n").map(Number);

console.log(a * b + c);
