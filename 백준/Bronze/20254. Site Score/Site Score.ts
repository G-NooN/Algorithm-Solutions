import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c, d] = input.split(" ").map(Number);

console.log(56 * a + 24 * b + 14 * c + 6 * d);
