import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [mile] = input.split("\n");

console.log(2 * Number(mile));