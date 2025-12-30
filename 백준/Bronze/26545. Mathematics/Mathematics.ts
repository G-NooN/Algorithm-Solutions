import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n").map(Number);

const sum = values.reduce((acc, value) => acc + value, 0);

console.log(sum);
