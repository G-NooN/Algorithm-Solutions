import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(Number);

console.log(Math.abs(a - b));