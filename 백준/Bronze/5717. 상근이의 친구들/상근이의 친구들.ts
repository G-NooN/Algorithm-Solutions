import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").slice(0, -1);

const result = array.map((value) => {
  const [a, b] = value.split(" ").map(Number);
  return a + b;
});

console.log(result.join("\n"));