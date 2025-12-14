import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c] = input.split("\n");

console.log(Number(a) + Number(b) - Number(c));
console.log(Number(a + b) - Number(c));