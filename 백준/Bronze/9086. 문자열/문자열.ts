import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const solution = () => {
  const result = values.map((value) => `${value[0]}${value[value.length - 1]}`);
  console.log(result.join("\n"));
};

solution();
