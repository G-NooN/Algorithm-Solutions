import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [s, f] = input.split("\n").map(Number);

console.log(f < s ? "flight" : "high speed rail");
