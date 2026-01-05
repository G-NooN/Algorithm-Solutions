import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input
  .split("\n")
  .slice(0, -1)
  .map((value) => value.replace(/[^aeiou]/gi, "").length);

console.log(result.join("\n"));
