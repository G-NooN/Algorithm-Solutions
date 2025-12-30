import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(Number(input) / 4);
