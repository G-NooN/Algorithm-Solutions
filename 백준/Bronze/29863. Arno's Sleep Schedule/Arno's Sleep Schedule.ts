import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [sleep, wake] = input.split("\n").map(Number);

console.log(sleep > 12 ? 24 - sleep + wake : wake - sleep);
