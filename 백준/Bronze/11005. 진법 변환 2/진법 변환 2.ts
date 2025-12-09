import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [number, format] = input.split(" ").map(Number);

const result = number.toString(format).toUpperCase();

console.log(result);