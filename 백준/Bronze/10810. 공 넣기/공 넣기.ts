const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [targetArray, ...valuesArray] = input.split("\n");

const [basketLength, _] = targetArray.split(" ").map(Number);

const solution = () => {
  const basketArray = Array.from({ length: basketLength }).fill(0);

  valuesArray.forEach((value) => {
    const [startIndex, endIndex, number] = value.split(" ").map(Number);
    for (let i = startIndex; i <= endIndex; i++) {
      basketArray[i - 1] = number;
    }
  });

  console.log(basketArray.join(" "));
};

solution();