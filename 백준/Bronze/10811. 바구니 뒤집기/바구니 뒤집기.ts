const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [targetArray, ...valueArray] = input.split("\n");

const [basketLength, _] = targetArray.split(" ").map(Number);

const resultArray = Array.from({ length: basketLength }).map(
  (_, index) => index + 1
);

const solution = () => {
  valueArray.forEach((value) => {
    const [start, end] = value.split(" ").map(Number);
    const startIndex = start - 1;

    const reversedArray = resultArray.slice(startIndex, end).reverse();

    for (let i = startIndex; i < end; i++) {
      resultArray[i] = reversedArray[i - startIndex];
    }
  });

  console.log(resultArray.join(" "));
};

solution();