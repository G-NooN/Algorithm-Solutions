import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [total, sizes, units] = input.split("\n");

const [tUnit, pUnit] = units.split(" ").map(Number);

const result: string[] = [];

const tCount = sizes
  .split(" ")
  .reduce((acc, size) => acc + Math.ceil(Number(size) / tUnit), 0);

const pCount = `${Math.floor(Number(total) / pUnit)} ${Number(total) % pUnit}`;

result.push(String(tCount));
result.push(pCount);

console.log(result.join('\n'))