import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: string[] = [];

const [a, b] = input.split(" ").map(BigInt);

const share = a / b;
const mod = a - share * b;

result.push(share.toString());
result.push(mod.toString());

console.log(result.join("\n"));