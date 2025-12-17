import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split("\n");

const [total, , ...values] = array;

const solution = () => {
  const sum = values.reduce((acc, value) => {
    const [price, count] = value.split(" ");
    return acc + Number(price) * Number(count);
  }, 0);

  const result = Number(total) === sum ? "Yes" : "No";

  console.log(result);
};

solution();
