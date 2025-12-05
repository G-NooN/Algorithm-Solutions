/**
 * <너의 평점은>
 *
 * - 레벨 : Silver V
 * - 링크 : https://www.acmicpc.net/problem/25206
 */

// NOTE - 공통 상위 코드
import fs from "fs";
const input = fs.readFileSync("./baekjoon-test-input.txt").toString().trim();

const array = input.split("\n");

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

/**
 * NOTE - 1st Trial (Success)
 */

const pastSolution = () => {
  const nonPGradeList = array.filter((value) => {
    const [, , grade] = value.split(" ");
    return grade !== "P";
  });

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

pastSolution();

/**
 * NOTE - 2nd Trial (Success)
 * - 개선사항
 * : 불필요한 P 필터링
 * : map, filter, reduce 등의 반복문 최소화
 * : array.forEach 하나만 사용
 *
 * -> 코드 간소화
 */

const solution = () => {
  let totalTime = 0;
  let totalScore = 0;

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
