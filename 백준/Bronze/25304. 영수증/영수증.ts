const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n");

const [total, , ...values] = array;

const solution = () => {
  const productArray = values.map((value) => {
    const [price, count] = value.split(" ");
    return Number(price) * Number(count);
  });

  const sum = productArray.reduce((prev, current) => prev + current);

  const result = Number(total) === sum ? "Yes" : "No";

  console.log(result);
};

solution();