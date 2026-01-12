import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

let result = -1;

const available = values.filter((value) => {
  const [a, b] = value.split(" ").map(Number);
  return a <= b;
});

if (available.length) {
  result = Math.min(
    ...available.map((value) => {
      const [_, b] = value.split(" ").map(Number);
      return b;
    })
  );
}

console.log(result);
