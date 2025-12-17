import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split("\n");
const [, ...values] = array;

const solution = () => {
  values.forEach((value, index) => {
    const [a, b] = value.split(" ");
    const sum = Number(a) + Number(b);

    console.log(`Case #${index + 1}: ${Number(a)} + ${Number(b)} = ${sum}`);
  });
};

solution();
