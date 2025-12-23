import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [n1, k1, n2, k2] = input.split(" ").map(Number);

console.log(n1 * k1 + n2 * k2);