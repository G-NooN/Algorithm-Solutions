import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split("\n").map(BigInt);

const result: string[] = [];

result.push((a + b).toString());
result.push((a - b).toString());
result.push((a * b).toString());

console.log(result.join("\n"));