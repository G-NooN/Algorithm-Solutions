const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = (year: number) => {
  const result =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0;

  console.log(result);
};

solution(Number(input));