/**
 * <빠른 A+B>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/15552
 */

/**
 * NOTE - 특이점
 * - 시간 초과 있음
 */

// NOTE - 공통 상위 코드
import fs from "fs";
const input = fs.readFileSync("./baekjoon-test-input.txt").toString().trim();

const array = input.split("\n");

const [, ...values] = array;

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : 시간 초과
 */
const failedSolution1 = () => {
  values.map((value) => {
    const [a, b] = value.split(" ");
    console.log(Number(a) + Number(b));
  });
};

/**
 * NOTE - 2nd Trial (Fail)
 * - 실패 원인
 * : 시간 초과
 */
const failedSolution2 = () => {
  const resultArray: number[] = [];

  values.forEach((value) => {
    const [a, b] = value.split(" ");
    const sum = Number(a) + Number(b);

    resultArray.push(sum);
  });

  resultArray.forEach((result) => console.log(result));
};

/**
 * NOTE - 3rd(Final) Trial (Success)
 * - 포인트
 * : 반복문 안에서 console.log 호출 시, 호출마다 실행시간이 생김
 * : 따라서 한번만 호출하도록 수정 필요
 * : 반복문으로 최종 텍스트 하나를 만든 뒤 최종 텍스트만 호출
 */
const solution = () => {
  let resultText = "";

  values.forEach((value) => {
    const [a, b] = value.split(" ");
    const sum = Number(a) + Number(b);

    resultText += `${sum}\n`;
  });

  console.log(resultText);
};

solution();
