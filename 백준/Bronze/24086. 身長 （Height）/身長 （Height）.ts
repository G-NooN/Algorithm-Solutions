import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [before, after] = input.split("\n").map(Number);

console.log(after - before);
