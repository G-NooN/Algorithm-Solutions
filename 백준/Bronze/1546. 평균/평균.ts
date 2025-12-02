const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [count, scoresArray] = input.split("\n");

const scores = scoresArray
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const solution = () => {
  const highestScore = scores[scores.length - 1];
  const modifiedArray = scores.map((score) => (score / highestScore) * 100);

  const average =
    modifiedArray.reduce((sum, current) => sum + current, 0) / Number(count);

  console.log(average);
};

solution();