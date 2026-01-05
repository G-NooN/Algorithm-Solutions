/**
 * <AFC 윔블던>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/4299
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();
const [sum, diff] = input.split(" ").map(Number);

const a = (sum + diff) / 2;
const b = (sum - diff) / 2;

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : sum, diff 가 반드시 입력된다는 조건을 인지하지 못함
 * : 0 이 falsy 값으로 처리됨
 * (반례 : 0 0 => -1)
 */

const failedSolution1 = () => {
  console.log(!sum || !diff ? -1 : `${a} ${b}`);
};

/**
 * NOTE - 2nd Trial (Fail)
 * - 실패 원인
 * : 소수점 처리 누락
 * (반례 : 5 2 => 3.5 1.5)
 */

const failedSolution2 = () => {
  console.log(![sum, diff].every((value) => value >= 0) ? -1 : `${a} ${b}`);
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : 점수 유효성 평가 로직 추가 (소수점 및 음수 처리)
 */

const solution = () => {
  // 점수 유효성 평가
  const validScore = [a, b].every(
    (value) => Number.isInteger(value) && value >= 0
  );

  console.log(validScore ? `${a} ${b}` : -1);
};

solution();
