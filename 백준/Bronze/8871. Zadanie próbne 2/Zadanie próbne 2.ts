import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input) + 1;

console.log(2 * count, 3 * count);
