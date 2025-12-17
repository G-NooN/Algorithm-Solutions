import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [count, scoresArray] = input.split("\n");

const scores = scoresArray.split(" ").map(Number);

const solution = () => {
  const highestScore = Math.max(...scores);
  const modifiedArray = scores.map((score) => (score / highestScore) * 100);

  const average =
    modifiedArray.reduce((sum, current) => sum + current, 0) / Number(count);

  console.log(average);
};

solution();
