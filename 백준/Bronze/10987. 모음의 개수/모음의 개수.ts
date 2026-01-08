import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(input.match(/[aeiou]/g)?.length || 0);
