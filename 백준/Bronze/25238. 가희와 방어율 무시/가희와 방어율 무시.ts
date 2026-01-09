import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(Number);

const result = a - (a * b) / 100 < 100;

console.log(Number(result));
