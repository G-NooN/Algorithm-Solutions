import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [count, values] = input.split("\n");

const evenCount = values
  .split(" ")
  .map(Number)
  .filter((value) => value % 2 === 0).length;

console.log(evenCount > Number(count) / 2 ? "Happy" : "Sad");
