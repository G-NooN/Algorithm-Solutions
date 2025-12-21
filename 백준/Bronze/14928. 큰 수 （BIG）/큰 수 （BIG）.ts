import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = BigInt(input) % BigInt(20000303);

console.log(result.toString());