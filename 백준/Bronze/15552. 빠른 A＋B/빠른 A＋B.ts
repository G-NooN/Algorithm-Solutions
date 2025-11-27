const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n");

const [, ...values] = array;

const solution = () => {
  let resultText = "";

  values.forEach((value) => {
    const [a, b] = value.split(" ");
    const sum = Number(a) + Number(b);

    resultText += `${sum}\n`;
  });

  console.log(resultText);
};

solution();