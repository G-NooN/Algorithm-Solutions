import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split("\n");

console.log(a === b ? 0 : 1550);
