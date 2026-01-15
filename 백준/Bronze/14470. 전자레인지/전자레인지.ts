import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c, d, e] = input.split("\n").map(Number);

console.log(a < 0 ? Math.abs(a) * c + d + b * e : (b - a) * e);
