import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const alphabetCountArray = Array.from({ length: 26 }, () => 0);
const upperCaseInputArray = input.toUpperCase().split("");

const solution = () => {
  let result = "?";

  upperCaseInputArray.forEach((letter) => {
    const index = letter.charCodeAt(0) - "A".charCodeAt(0);

    if (index < 26) {
      alphabetCountArray[index]++;
    }
  });

  const maxCount = Math.max(...alphabetCountArray);

  if (alphabetCountArray.filter((count) => count === maxCount).length === 1) {
    const maxCountIndex = alphabetCountArray.indexOf(maxCount);

    result = String.fromCharCode(maxCountIndex + "A".charCodeAt(0));
  }

  console.log(result);
};

solution();
