import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.map((value) => {
  const [x, y] = value.split(" ").map(Number);

  return `${x < y ? "NO" : "MMM"} BRAINS`;
});

console.log(result.join("\n"));
