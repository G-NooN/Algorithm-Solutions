import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

let result: number[] = [];

values.forEach((value) => {
  let [sum, count] = [0, 0];

  value.split("").forEach((letter) => {
    if (letter === "O") {
      count++;
      sum += count;
    } else {
      count = 0;
    }
  });

  result.push(sum);
});

console.log(result.join("\n"));