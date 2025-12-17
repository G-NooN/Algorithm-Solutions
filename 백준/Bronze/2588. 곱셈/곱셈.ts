import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split("\n");

const num1 = array[0];
const num2 = array[1];

const solution = (a: string, b: string) => {
  const bArray = b.split("");

  const sum1 = Number(a) * Number(bArray[2]);
  const sum2 = Number(a) * Number(bArray[1]);
  const sum3 = Number(a) * Number(bArray[0]);
  const result = Number(a) * Number(b);

  console.log(sum1);
  console.log(sum2);
  console.log(sum3);
  console.log(result);
};

solution(num1, num2);
