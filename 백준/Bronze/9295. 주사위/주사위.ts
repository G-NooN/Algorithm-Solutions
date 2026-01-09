import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.map((value, index) => {
  const [a, b] = value.split(" ").map(Number);
  return `Case ${index + 1}: ${a + b}`;
});

console.log(result.join("\n"));
