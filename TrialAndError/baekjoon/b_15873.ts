/**
 * <공백 없는 A+B>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/15873
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

let result = 0; // 합계

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 각 입력값은 최대 2자리 수 2개 조합
 * : input 의 길이에 따라 조건 분기
 *   - 2자리 : 각 자리수 더하기
 *   - 3자리
 *     : 마지막 자리가 0 이면 앞 1자리 + 뒤 2자리
 *     : 마지막 자리가 0 이 아니면 앞 2자리 + 뒤 1자리
 *   - 4자리 : 앞 2자리 + 뒤 2자리
 */

const pastSolution = () => {
  switch (input.length) {
    case 2:
      result = Number(input.slice(0, 1)) + Number(input.slice(1));
      break;
    case 3:
      result =
        [...input].pop() === "0"
          ? Number(input.slice(0, 1)) + Number(input.slice(1))
          : Number(input.slice(0, 2)) + Number(input.slice(2));
      break;
    case 4:
      result = Number(input.slice(0, 2)) + Number(input.slice(2));
      break;
  }

  console.log(result);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 2자리인 수는 Only 10
 * : 조건식 변경
 *   - 2자리 : 각 자릿수 합계 (reduce() 활용)
 *   - 3자리 : 10 + 마지막 자리의 0 여부에 따라 앞 1자리 또는 뒤 1자리 더하기
 *   - 4자리 : 20 (10 + 10)
 * - 효과
 * : 코드 간소화
 * : 메모리 & 시간 감소 (메모리 : 9348 KB -> 9344 KB / 시간 : 100 ms -> 96 ms)
 */

const solution = () => {
  switch (input.length) {
    case 2:
      result = [...input].reduce((acc, current) => acc + Number(current), 0);
      break;
    case 3:
      result =
        10 +
        ([...input].pop() === "0"
          ? Number(input.slice(0, 1))
          : Number(input.slice(2)));
      break;
    case 4:
      result = 20;
      break;
  }

  console.log(result);
};

solution();
