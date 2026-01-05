/**
 * <달팽이는 올라가고 싶다>
 *
 * - 레벨 : Bronze I
 * - 링크 : https://www.acmicpc.net/problem/2869
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

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
 * SECTION - 규칙
 *
 * u: up, d: down, T: target, C: dayCount
 *
 * (u - d) + (u - d) + ... + u >= T
 * => uC - d(C - 1) >= T
 * => uC - dC + d >= T
 * => uC - dC >= T - d
 * => C(u - d) >= T - d
 * => C >= (T - d) / (u - d)
 *
 * NOTE - 포인트
 * => C 가 정수면, 그 날 바로 도착
 * => C 가 정수가 아니면, 다음날 바로 도착 => 다음 날 도착
 *
 * => Math.ceil(C)
 *
 * !SECTION
 */

/**
 * NOTE - 2nd Trial (Success)
 */

const solution = () => {
  const dayCount = (target - down) / (up - down);

  console.log(Math.ceil(dayCount));
};

solution();
