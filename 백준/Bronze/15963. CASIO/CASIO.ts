import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [N, M] = input.split(" ");

console.log(Number(N === M));