const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const array = input.split(" ");

const a = Number(array[0]);
const b = Number(array[1]);

const solution = (a: number, b: number) => {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
};

solution(a, b);