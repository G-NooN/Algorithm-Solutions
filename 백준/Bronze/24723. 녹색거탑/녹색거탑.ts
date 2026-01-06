import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(Math.pow(2, Number(input)));
