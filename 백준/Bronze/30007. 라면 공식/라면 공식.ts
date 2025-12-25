import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.map((value) => {
  const [a, b, x] = value.split(" ").map(Number);

  return a * (x - 1) + b;
});

console.log(result.join("\n"));
