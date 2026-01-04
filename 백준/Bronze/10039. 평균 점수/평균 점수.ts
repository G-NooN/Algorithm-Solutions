import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input
  .split("\n")
  .map((value) => (Number(value) < 40 ? 40 : Number(value)));

const sum = array.reduce((acc, value) => acc + value, 0);

console.log(sum / array.length);
