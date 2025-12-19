import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n");

const result: number[] = [];

array.forEach((value) => {
  const [a, b] = value.split(" ").map(Number);

  result.push(Math.floor(b / (a + 1)));
});

console.log(result.join("\n"));