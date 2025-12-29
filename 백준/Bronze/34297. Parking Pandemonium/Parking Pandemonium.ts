import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [m, , c] = input.split("\n").map(Number);

console.log(m * c);
