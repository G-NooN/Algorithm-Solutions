/**
 * <공 넣기>
 *
 * - 레벨 : Bronze III
 * - 링크 : https://www.acmicpc.net/problem/10810
 */

import fs from "fs";
const input = fs.readFileSync("./baekjoon-test-input.txt").toString().trim();

/**
 * NOTE - Trial (Success, AI Assisted)
 * - 포인트
 * : 입력값 Number 처리 (map(Number))
 * : 결과 배열 생성
 * : 이중 반복문으로 각 반복마다 해당 index에 값 할당
 */

const [targetArray, ...valuesArray] = input.split("\n");

const [basketLength, chanceCount] = targetArray.split(" ").map(Number);

const solution = () => {
  // 결과 배열
  const basketArray = Array.from({ length: basketLength }, () => 0);

  // chanceCount 만큼 반복
  for (let i = 0; i < chanceCount; i++) {
    // 각 배열 startIndex, endIndex, number 값 추출
    const [startIndex, endIndex, number] = valuesArray[i]
      .split(" ")
      .map(Number);

    // startIndex부터 endIndex까지 반복하며 해당 index에 number 값 할당
    for (let j = startIndex; j <= endIndex; j++) {
      basketArray[j - 1] = number;
    }
  }

  console.log(basketArray.join(" "));
};

solution();
