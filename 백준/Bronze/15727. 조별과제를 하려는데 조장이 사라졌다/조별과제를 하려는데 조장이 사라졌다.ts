import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(Math.ceil(Number(input) / 5));