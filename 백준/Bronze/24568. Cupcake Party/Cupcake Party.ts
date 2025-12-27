import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [regular, small] = input.split("\n").map(Number);

const result = regular * 8 + small * 3;

console.log(result - 28);
