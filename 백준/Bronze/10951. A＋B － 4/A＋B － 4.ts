import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split("\n");

const solution = () => {
  array.forEach((value) => {
    const [a, b] = value.split(" ");
    console.log(Number(a) + Number(b));
  });
};

solution();
