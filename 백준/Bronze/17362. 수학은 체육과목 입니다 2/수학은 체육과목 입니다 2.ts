import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const cycle = "12345432";

console.log(cycle[(Number(input) - 1) % 8]);