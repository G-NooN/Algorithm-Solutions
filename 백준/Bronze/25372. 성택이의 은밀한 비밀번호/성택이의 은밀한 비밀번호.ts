import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.map((value) =>
  value.length >= 6 && value.length <= 9 ? "yes" : "no"
);

console.log(result.join("\n"));
