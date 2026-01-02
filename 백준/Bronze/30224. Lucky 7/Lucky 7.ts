import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input.includes("7") ? 2 : 0;

console.log(Number(input) % 7 === 0 ? result + 1 : result);
