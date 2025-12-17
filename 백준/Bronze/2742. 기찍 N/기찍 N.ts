import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = Array.from({ length: Number(input) }, (_, index) => index + 1);

console.log(array.reverse().join("\n"));