import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const solution = () => {
  values.forEach((value) => {
    const [count, letters] = value.split(" ");

    const result = letters
      .split("")
      .map((letter) => letter.repeat(Number(count)));

    console.log(result.join(""));
  });
};

solution();
