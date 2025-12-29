import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.map((value) => `${value} ${value}`);

console.log(result.join("\n"));
