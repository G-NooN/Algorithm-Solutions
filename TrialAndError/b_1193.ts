/**
 * <분수찾기>
 *
 * - 레벨 : Silver V
 * - 링크 : https://www.acmicpc.net/problem/1193
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

let num = Number(input);

// crossCount: 대각선 횟수, top: 분자, bottom: 분모
let [crossCount, top, bottom] = [1, 1, 1];

/**
 * NOTE - 규칙
 * 전체 배열을 대각선으로 잘랐을 때
 * (대각선 횟수 - 순서)
 * 1 - 1/1
 * 2 - 1/2 2/1
 * 3 - 3/1 2/2 1/3
 * 4 - 4/1 3/2 2/3 1/4
 * 5 - 5/1 4/2 3/3 2/4 1/5
 * ...
 *
 * 각 그룹별 분수의 개수 = 대각선 횟수
 *
 * 각 그룹의 i번째 분수 (i = 1, 2, 3, ..., 대각선 횟수)
 * - 대각선 횟수가 짝수인 경우
 * : 분자 = 대각선 횟수 - i + 1
 * : 분모 = i
 *
 * - 대각선 횟수가 홀수인 경우
 * : 분자 = i
 * : 분모 = 대각선 횟수 - i + 1
 */

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : num 에서 대각선 횟수만큼 계속해서 --
 * : 계속해서 빠진 num < 대각선 횟수가 되면 num === 순서
 * => num 순서 i로 활용
 */

const pastSolution = () => {
  // 순서 i 도출 (num < 대각선 횟수가 될 때까지 --)
  while (num > crossCount) {
    num -= crossCount;
    crossCount++;
  }

  const crossCountEven = crossCount % 2 === 0;

  top = crossCountEven ? num : crossCount - num + 1;
  bottom = crossCountEven ? crossCount - num + 1 : num;

  console.log(`${top}/${bottom}`);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 순서 i를 직접 선언하여 활용
 */

const solution = () => {
  // 현재까지 누적된 num
  let targetNumber = 0;

  // 대각선 횟수 + 현재까지 누적된 num >= num 이 되기 직전까지 반복
  while (num > crossCount + targetNumber) {
    targetNumber += crossCount;
    crossCount++;
  }

  // 순서 i 도출
  const position = num - targetNumber;

  const crossCountEven = crossCount % 2 === 0;

  top = crossCountEven ? position : crossCount - position + 1;
  bottom = crossCountEven ? crossCount - position + 1 : position;

  console.log(`${top}/${bottom}`);
};

solution();
