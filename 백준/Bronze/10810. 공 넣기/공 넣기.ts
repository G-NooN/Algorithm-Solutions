const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [targetArray, ...valuesArray] = input.split("\n");

const [basketLength, _] = targetArray.split(" ").map(Number);

const solution = () => {
  const basketArray = Array.from({ length: basketLength }).fill(0);

  valuesArray.forEach((value) => {
    const [startIndex, endIndex, number] = value.split(" ").map(Number);
    basketArray.fill(number, startIndex - 1, endIndex);
  });

  console.log(basketArray.join(" "));
};

solution();