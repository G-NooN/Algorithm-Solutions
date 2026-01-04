import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [r, s] = input.split(" ").map(Number);

console.log(2 * s - r);
