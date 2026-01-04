import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const prices = input.split("\n").map(Number);

console.log(Math.min(...prices.slice(0, 3)) + Math.min(...prices.slice(3)) - 50);
