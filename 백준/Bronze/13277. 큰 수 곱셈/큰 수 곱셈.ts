import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(BigInt);

const result = (a * b).toString().replace("n", "");

console.log(result);
