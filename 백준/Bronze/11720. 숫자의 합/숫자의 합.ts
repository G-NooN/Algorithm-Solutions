const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [, values] = input.split("\n");
const numbers = values.split("").map(Number);

const solution = () => {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  console.log(sum);
};

solution();