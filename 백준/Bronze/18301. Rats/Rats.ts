import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c] = input.split(" ").map(Number);

const result = Math.abs(((a + 1) * (b + 1)) / (c + 1)) - 1;

console.log(Math.floor(result));
