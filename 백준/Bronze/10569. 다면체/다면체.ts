import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.map((value) => {
  const [v, e] = value.split(" ").map(Number);

  return e - v + 2;
});

console.log(result.join("\n"));
