import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").slice(0, -1).map(Number);

const result = array.map((value) => (value * (value + 1)) / 2);

console.log(result.join("\n"));
