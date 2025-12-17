import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [targetArray, ...valuesArray] = input.split("\n");

const [basketLength, _] = targetArray.split(" ").map(Number);

const basketArray = Array.from({ length: basketLength }).map(
  (_, index) => index + 1
);

const solution = () => {
  valuesArray.forEach((value) => {
    const [targetA, targetB] = value.split(" ").map(Number);
    [basketArray[targetA - 1], basketArray[targetB - 1]] = [
      basketArray[targetB - 1],
      basketArray[targetA - 1],
    ];
  });

  console.log(basketArray.join(" "));
};

solution();
