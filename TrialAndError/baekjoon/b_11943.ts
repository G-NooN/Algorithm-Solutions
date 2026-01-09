/**
 * <파일 옯기기>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/11943
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [[a1, b1], [a2, b2]] = input
  .split("\n")
  .map((value) => value.split(" ").map(Number));

/**
 * NOTE - 1st Trial (Fail)
 * - 포인트
 * : 같은 항목 중 0 이 존재하면 이동 횟수 = 0
 * : 왼쪽 이동 여부를 판단하여 이동 횟수 반환
 * - 실패 원인
 * : 같은 항목을 왼쪽에 모을 때와 오른쪽으로 모을 때의 이동 횟수 최소값 반환 필요
 */

const failedSolution = () => {
  const getMoveCount = (basket: number[], toLeft: boolean) => {
    if (basket.includes(0)) {
      return 0;
    } else {
      const [value1, value2] = basket;
      return Math.abs(toLeft ? value1 : value2);
    }
  };

  const aMoveCount = getMoveCount([a1, a2], true);
  const bMoveCount = getMoveCount([b1, b2], false);

  console.log(aMoveCount + bMoveCount);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : a1 이 이동하는 경우 b2 가 이동함
 * : a2 가 이동하는 경우 b1 이 이동함
 * => 두 이동 횟수의 합 중 최소값 반환
 */

const solution = () => {
  console.log(Math.min(a1 + b2, a2 + b1));
};

solution();
