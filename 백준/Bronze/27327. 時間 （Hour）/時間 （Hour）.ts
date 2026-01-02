import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(24 * Number(input));
