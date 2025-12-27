import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, a, b] = input.split("\n");

const result = BigInt(a) * BigInt(b);

console.log(result.toString());
