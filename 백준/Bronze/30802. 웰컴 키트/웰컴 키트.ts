import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [total, sizes, units] = input.split("\n");

const count = Number(total);
const [tUnit, pUnit] = units.split(" ").map(Number);

const result: string[] = [];

const tCount = sizes
  .split(" ")
  .map(Number)
  .reduce((acc, size) => acc + Math.ceil(size / tUnit), 0);

const pCount = `${Math.floor(count / pUnit)} ${count % pUnit}`;

result.push(String(tCount));
result.push(pCount);

console.log(result.join("\n"));