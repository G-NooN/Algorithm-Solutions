import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const value = Number(input);

const result = Math.abs(value - 0.3);

console.log(value > 0 ? result : -result);
