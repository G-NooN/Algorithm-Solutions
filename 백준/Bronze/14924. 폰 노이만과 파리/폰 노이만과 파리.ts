import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [s, t, d] = input.split(" ").map(Number);

console.log((d / (2 * s)) * t);
