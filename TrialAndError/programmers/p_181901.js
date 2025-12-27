/**
 * <배열 만들기 1>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181901
 */

// NOTE - 공통 상위 코드
const [n, k] = [10, 3];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 전체 배열에서 filter
 */

const pastSolution = () => {
  return Array.from({ length: n }, (_, index) => index + 1).filter(
    (value) => value % k === 0
  );
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : for 문 활용 (시작 k, k 씩 증가)
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 43.4 MB -> 37 MB / 시간 : 93.07 ms -> 0.21 ms)
 */

const solution = () => {
  const result = [];

  for (let i = k; i <= n; i += k) {
    result.push(i);
  }

  return result;
};

console.log(solution());
