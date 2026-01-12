import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").map(Number);

const science = array
  .slice(0, 4)
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, value) => acc + value, 0);
const social = Math.max(...array.slice(4));

console.log(science + social);
