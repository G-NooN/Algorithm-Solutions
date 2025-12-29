import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(4000 * Number(input));
