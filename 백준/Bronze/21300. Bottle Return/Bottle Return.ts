import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input.split(" ").reduce((acc, value) => acc + Number(value), 0);

console.log(result * 5);
