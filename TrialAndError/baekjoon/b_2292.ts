/**
 * <벌집>
 *
 * - 레벨 : Bronze II
 * - 링크 : https://www.acmicpc.net/problem/2292
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

/**
 * SECTION - 규칙
 * 
 * 이동 횟수 - 번호 리스트 (개수)
 * 
 * : 2 - 2 ~ 7 (6*1 개)
 * : 3 - 8 ~ 19 (6*2 개)
 * : 4 - 20 ~ 37 (6*3 개)
 * : 5 - 38 ~ 61 (6*4 개)
 *
 * NOTE - 포인트
 * => 다음 이동횟수 번호 리스트 개수 = 이전 이동횟수 번호 리스트 개수 + (6 * 현재 이동횟수)
 * 
 * !SECTION

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 현재 갈 수 있는 최대 번호를 변수로 설정
 * : if (현재 갈 수 있는 최대 번호 < 목표 번호)
 *   - 현재 번호 + (6 * 현재 이동횟수), 이동횟수++
 * : if (현재 갈 수 있는 최대 번호 >= 목표 번호)
 *   - 목표 번호는 현재 이동횟수 안에 갈 수 있음 => 이동횟수 출력
 */

const solution = () => {
  const number = Number(input);

  let count = 1;
  let currentNumber = 1;

  while (number > currentNumber) {
    currentNumber += 6 * count;
    count++;
  }

  console.log(count);
};

solution();
