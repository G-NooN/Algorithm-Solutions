/**
 * <AFC 윔블던>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/4299
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : input 은 두 점수의 합과 차
 * : input 은 반드시 존재
 * : 점수가 정수가 아니거나 음수인 경우 -1 출력
 */

const solution = () => {
  const [sum, diff] = input.split(" ").map(Number);

  const a = (sum + diff) / 2;
  const b = (sum - diff) / 2;

  // 점수 유효성 평가
  const validScore = [a, b].every(
    (value) => Number.isInteger(value) && value >= 0
  );

  console.log(validScore ? `${a} ${b}` : -1);
};

solution();
