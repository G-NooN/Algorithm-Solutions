import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result: number[] = [];

const total = input.split("\n").reduce((acc, value) => acc + Number(value), 0);

result.push(Math.floor(total / 60));
result.push(total % 60);

console.log(result.join("\n"));
