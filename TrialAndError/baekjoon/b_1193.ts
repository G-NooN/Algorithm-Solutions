/**
 * <분수찾기>
 *
 * - 레벨 : Silver V
 * - 링크 : https://www.acmicpc.net/problem/1193
 */

/**
 *
 * SECTION - 규칙
 *
 * 전체 배열을 / 형태의 대각선으로 분리 & 접근 방향대로 배치시켰을 때
 *
 * - 1번째 배열 - [1/1]
 * - 2번째 배열 - [1/2, 2/1]
 * - 3번째 배열 - [3/1, 2/2, 1/3]
 * - 4번째 배열 - [4/1, 3/2, 2/3, 1/4]
 * - 5번째 배열 - [5/1, 4/2, 3/3, 2/4, 1/5]
 * - ...
 *
 * NOTE - 규칙 1
 * : N 번째 배열의 요소(=분수) 개수 = N개
 *
 * NOTE - 규칙 2
 * : N 번째 배열의 i 번쨰 분수 (1 <= i <= N)
 *
 * 1) N 이 짝수인 경우
 * : 분자 = N - i + 1
 * : 분모 = i
 *
 * 2) N 이 홀수인 경우
 * : 분자 = i
 * : 분모 = N - i + 1
 *
 * NOTE - 포인트
 * => 입력값이 N 번째 배열의 i 번째 분수인지 찾으면 됨
 *
 * !SECTION
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

let value = Number(input);

// arrayNum: 배열 번호, top: 분자, bottom: 분모
let [arrayNum, top, bottom] = [1, 1, 1];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : targetValue가 입력값보다 커지기 직전까지
 *   - targetValue += arrayNum
 *   - arrayNum++
 * : i 번째 위치 = value - targetValue
 */

const pastSolution = () => {
  let targetValue = 0;

  // targetValue가 입력값보다 커지기 직전까지 targetValue, arrayNum ++
  while (value > targetValue + arrayNum) {
    targetValue += arrayNum;
    arrayNum++;
  }

  // 순서 i 도출
  const position = value - targetValue;

  // arrayNum 짝수 여부
  const arrayNumEven = arrayNum % 2 === 0;

  top = arrayNumEven ? position : arrayNum - position + 1;
  bottom = arrayNumEven ? arrayNum - position + 1 : position;

  console.log(`${top}/${bottom}`);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : value 를 position 으로 활용
 * : arrayNum 이 value 보다 커지기 직전까지
 *   - value -= arrayNum
 *   - arrayNum++
 * : position = value
 */

const solution = () => {
  // arrayNum이 value 보다 커지기 직전까지 반복
  while (value > arrayNum) {
    value -= arrayNum;
    arrayNum++;
  }

  // arrayNum 짝수 여부
  const arrayNumEven = arrayNum % 2 === 0;

  // position = value
  top = arrayNumEven ? value : arrayNum - value + 1;
  bottom = arrayNumEven ? arrayNum - value + 1 : value;

  console.log(`${top}/${bottom}`);
};

solution();
