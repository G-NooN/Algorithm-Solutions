const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const array = input.split(" ");

const solution = (a: string, b: string, c: string) => {
  const result = Number(a) + Number(b) + Number(c);
  console.log(result);
};

solution(array[0], array[1], array[2]);