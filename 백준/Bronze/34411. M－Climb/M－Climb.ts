import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [m, n] = input.split("\n").map(Number);

console.log(m * n);
