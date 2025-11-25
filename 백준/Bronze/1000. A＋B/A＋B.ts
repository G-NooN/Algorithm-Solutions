const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const array = input.split(" ");

const solution = (a: string, b: string) => {
  console.log(Number(a) + Number(b));
};

solution(array[0], array[1]);