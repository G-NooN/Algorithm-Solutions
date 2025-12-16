/**
 * <달팽이는 올라가고 싶다>
 *
 * - 레벨 : Bronze I
 * - 링크 : https://www.acmicpc.net/problem/2869
 */

// NOTE - 공통 상위 코드
import fs from "fs";
const input = fs.readFileSync("./input.txt").toString().trim();

const [up, down, target] = input.split(" ").map(Number);

/**
 * NOTE - 1st Trial (Fail)
 * - 포인트
 * : 먼저 현재 높이에 +up
 * : 더한 뒤에도 낮으면 그 날에는 성공하지 못했기 때문에 -down
 * : 일 카운트++
 *
 * - 실패 원인
 * : 시간 초과 (반복문이 아닌 방식이 존재)
 */

const failedSolution = () => {
  let [dayCount, currentHeight] = [0, 0];

  while (currentHeight < target) {
    currentHeight += up;

    if (currentHeight < target) {
      currentHeight -= down;
    }

    dayCount++;
  }

  console.log(dayCount);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 규칙 정의
 *
 * SECTION - 규칙 (a: up, b: down, T: target, x: dayCount)
 * (a - b) + (a - b) + ... + a >= T
 * => ax - b(x - 1) >= T
 * => ax - bx + b >= T
 * => ax - bx >= T - b
 * => x(a - b) >= T - b
 * => x >= (T - b) / (a - b)
 * !SECTION
 *
 * : 만일 x 가 정수이면, 그 날 바로 도착
 * : 만일 x 가 정수가 아니면, 다음날 바로 도착 => Math.ceil(x)
 */

const solution = () => {
  const dayCount = Math.ceil((target - down) / (up - down));

  console.log(Math.ceil(dayCount));
};

solution();
