import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(BigInt);

console.log((a + b).toString());