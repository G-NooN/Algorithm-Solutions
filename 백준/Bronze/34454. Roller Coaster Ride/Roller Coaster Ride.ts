import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [N, C, P] = input.split("\n").map(Number);

console.log(N <= C * P ? "yes" : "no");
