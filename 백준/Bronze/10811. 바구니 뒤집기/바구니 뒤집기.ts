const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [targetArray, ...valueArray] = input.split("\n");

const [basketLength, _] = targetArray.split(" ").map(Number);

const resultArray = Array.from({ length: basketLength }).map(
  (_, index) => index + 1
);

const solution = () => {
  valueArray.forEach((value) => {
    const [startIndex, endIndex] = value.split(" ").map(Number);
    const start = startIndex - 1;
    const end = endIndex - 1;

    const reversedArray = resultArray.slice(start, end + 1).reverse();

    for (let i = start; i <= end; i++) {
      resultArray[i] = reversedArray[i - start];
    }
  });

  console.log(resultArray.join(" "));
};

solution();