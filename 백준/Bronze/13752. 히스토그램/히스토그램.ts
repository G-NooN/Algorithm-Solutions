import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.map((value) => "=".repeat(Number(value)));

console.log(result.join("\n"));
