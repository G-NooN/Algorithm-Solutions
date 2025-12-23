import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const num = Number(input);

const sum = (num * (num + 1)) / 2;

console.log([sum, sum * sum, Math.pow(sum, 2)].join("\n"));
