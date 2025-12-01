const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n");

const solution = () => {
  array.forEach((value) => {
    const [a, b] = value.split(" ");
    const num1 = Number(a);
    const num2 = Number(b);

    while (num1 !== 0 && num2 !== 0) {
      console.log(num1 + num2);
      break;
    }
  });
};

solution();