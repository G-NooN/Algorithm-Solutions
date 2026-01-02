import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, values] = input.split("\n");

const result = values
  .split(" ")
  .reduce((acc, current) => acc + Number(current), 0);

console.log(result === 0 ? "Stay" : result > 0 ? "Right" : "Left");
