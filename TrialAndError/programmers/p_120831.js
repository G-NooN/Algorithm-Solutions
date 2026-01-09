/**
 * <짝수의 합>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120831
 */

// NOTE - 공통 상위 코드
const n = 10;

/**
 * SECTION - 규칙
 *
 * NOTE - 1부터 자연수 N 까지의 합
 * : 1 + 2 + 3 + ... + N = N * (N + 1) / 2
 *
 * 2부터 자연수 짝수 N 까지의 합
 * : 2 + 4 + 6 + ... + N
 * = 2 * (1 + 2 + 3 + ... + N/2)
 * = 2 * (N / 2 * (N / 2 + 1) / 2)
 * = N / 2 * (N / 2 + 1)
 *
 * !SECTION
 */

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : Math.floor() 로 입력한 값 이하의 짝수 최대값 계산
 * : 자연수 짝수 합계 공식 적용
 */

const solution = () => {
  const even = Math.floor(n / 2);

  return even * (even + 1);
};

console.log(solution());
