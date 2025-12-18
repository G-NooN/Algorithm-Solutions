import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const values = input.split("\n");

const result = values.reduce((acc, value) => acc + Number(value), 0);

console.log(result);