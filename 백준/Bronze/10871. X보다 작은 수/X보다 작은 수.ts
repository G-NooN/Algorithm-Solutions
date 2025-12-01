const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n");
const [targetArray, valueArray] = array;

const [, target] = targetArray.split(" ");
const values = valueArray.split(" ");

const solution = () => {
  const targetValues = values.filter((value) => Number(value) < Number(target));
  console.log(targetValues.join(" "));
};

solution();