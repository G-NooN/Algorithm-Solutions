import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c, d] = input.split(" ").map(Number);

console.log(Math.abs(a + d - (b + c)));
