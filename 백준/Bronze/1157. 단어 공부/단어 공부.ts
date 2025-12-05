const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const alphabetArray = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);
const alphabetCountArray = Array.from({ length: 26 }, () => 0);

const upperCaseInputArray = input.toUpperCase().split("");

const solution = () => {
  let result = "?";

  alphabetArray.forEach((alphabet, index) => {
    upperCaseInputArray.forEach((letter) => {
      if (letter === alphabet) {
        alphabetCountArray[index]++;
      }
    });
  });

  const maxCount = Math.max(...alphabetCountArray);

  if (alphabetCountArray.filter((count) => count === maxCount).length === 1) {
    const maxCountValueIndex = alphabetCountArray.findIndex(
      (count) => count === maxCount
    );

    result = alphabetArray[maxCountValueIndex];
  }

  console.log(result);
};

solution();