import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [total, diff] = input.split("\n").map(BigInt);

const a = (total + diff) / BigInt(2);
const b = (total - diff) / BigInt(2);

const result = [a.toString(), b.toString()].join("\n");

console.log(result);
