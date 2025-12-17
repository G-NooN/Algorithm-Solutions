import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const gradeScore = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0,
};

const array = input.split("\n");

let totalTime = 0;
let totalScore = 0;

const solution = () => {
  array.forEach((value) => {
    const [, time, grade] = value.split(" ");

    if (grade !== "P") {
      const parsedScore = gradeScore[grade as keyof typeof gradeScore];

      totalTime += Number(time);
      totalScore += Number(time) * parsedScore;
    }
  });

  console.log(totalScore / totalTime);
};

solution();
