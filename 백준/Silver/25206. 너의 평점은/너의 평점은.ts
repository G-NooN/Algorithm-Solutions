const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

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

const nonPGradeList = array.filter((value) => {
  const [, , grade] = value.split(" ");
  return grade !== "P";
});

const solution = () => {
  const scoreList = nonPGradeList.map((value) => {
    const [, time, grade] = value.split(" ");
    const parsedScore = gradeScore[grade as keyof typeof gradeScore];

    return { time: Number(time), score: parsedScore };
  });

  const totalScore = scoreList.reduce((total, current) => {
    const { time, score } = current;
    return total + time * score;
  }, 0);

  const totalTime = scoreList.reduce((total, current) => {
    const { time } = current;
    return total + time;
  }, 0);

  console.log(totalScore / totalTime);
};

solution();