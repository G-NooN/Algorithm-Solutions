import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").slice(0, -1);

const result = array.map((_, index) => `Case ${index + 1}: Sorting... done!`);

console.log(result.join("\n"));
