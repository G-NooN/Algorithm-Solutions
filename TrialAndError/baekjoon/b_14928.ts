/**
 * <큰 수 (BIG)>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/14928
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const divisor = 20000303;

/**
 * NOTE - 1st Trial (Success)
 */

const pastSolution = () => {
  const result = BigInt(input) % BigInt(divisor);

  console.log(result.toString());
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 전체에서 나누는 것이 아닌, 각 자리별로 mod 연산 수행
 * : mod 연산 수행 후에는 10씩 곱하여 다음 자리수 계산
 *
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 12328 KB -> 11580 KB / 시간 : 2844 ms -> 164 ms)
 */

const solution = () => {
  let mod = 0;

  for (let i = 0; i < input.length; i++) {
    const digit = Number(input[i]);

    mod = (10 * mod + digit) % divisor;
  }

  console.log(mod);
};

solution();
