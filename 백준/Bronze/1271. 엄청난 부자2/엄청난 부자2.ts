import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: string[] = [];

const [a, b] = input.split(" ").map(BigInt);

result.push((a / b).toString());
result.push((a % b).toString());

console.log(result.join("\n"));