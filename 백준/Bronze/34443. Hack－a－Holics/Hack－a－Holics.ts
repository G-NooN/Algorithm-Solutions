import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [N, , P] = input.split("\n").map(Number);

console.log(N * P);
