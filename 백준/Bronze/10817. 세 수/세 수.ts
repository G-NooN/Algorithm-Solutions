import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, b] = input.split(" ").sort((a, b) => Number(a) - Number(b));

console.log(b);
