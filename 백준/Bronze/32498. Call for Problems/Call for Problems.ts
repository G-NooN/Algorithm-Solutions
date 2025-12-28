import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.filter((value) => Number(value) % 2 === 1).length;

console.log(result);
