import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();
const num = Number(input);

console.log(num * (num - 1));
