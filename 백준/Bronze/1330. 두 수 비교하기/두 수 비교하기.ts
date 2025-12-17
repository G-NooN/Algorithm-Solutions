import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split(" ");

const solution = (a: string, b: string) => {
  const num1 = Number(a);
  const num2 = Number(b);

  if (num1 > num2) {
    console.log(">");
  } else if (num1 < num2) {
    console.log("<");
  } else {
    console.log("==");
  }
};

solution(array[0], array[1]);
