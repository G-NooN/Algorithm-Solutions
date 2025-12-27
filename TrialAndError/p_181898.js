/**
 * <가까운 1 찾기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181898
 */

// NOTE - 공통 상위 코드
const [arr, idx] = [[0, 0, 0, 1], 1];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : findIndex 활용
 */

const pastSolution = () => {
  return arr.findIndex((value, index) => index >= idx && Boolean(value));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : indexOf 활용
 */

const solution = () => {
  return arr.indexOf(1, idx);
};

console.log(solution());
