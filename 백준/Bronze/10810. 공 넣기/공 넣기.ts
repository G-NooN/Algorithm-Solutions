const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [targetArray, ...valuesArray] = input.split("\n");

const [basketLength, chanceCount] = targetArray.split(" ").map(Number);

const solution = () => {
  const basketArray = Array.from({ length: basketLength }, () => 0);

  for (let i = 0; i < chanceCount; i++) {
    const [startIndex, endIndex, number] = valuesArray[i]
      .split(" ")
      .map(Number);

    for (let j = startIndex; j <= endIndex; j++) {
      basketArray[j - 1] = number;
    }
  }

  console.log(basketArray.join(" "));
};

solution();