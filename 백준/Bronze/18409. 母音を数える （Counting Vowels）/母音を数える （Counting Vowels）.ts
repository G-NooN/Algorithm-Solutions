import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, value] = input.split("\n");

const result = value.match(/a|e|i|o|u/g)?.length ?? 0;

console.log(result);
