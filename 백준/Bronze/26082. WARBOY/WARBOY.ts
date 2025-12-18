import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c] = input.split(" ").map(Number);

console.log((b / a) * c * 3);