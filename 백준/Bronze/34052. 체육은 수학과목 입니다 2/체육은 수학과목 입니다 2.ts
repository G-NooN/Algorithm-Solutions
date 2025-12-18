import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").map(Number);

const result = array.reduce((acc, curr) => acc - curr, 1800);

console.log(result >= 300 ? "Yes" : "No");