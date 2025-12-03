const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const solution = () => {
  values.forEach((value) => {
    const [a, b] = value.split(",").map(Number);
    console.log(a + b);
  });
};

solution();