/**
 * <중앙값 구하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120811
 */

// NOTE - 공통 상위 코드
const array = [1, 2, 7, 10, 11];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 배열의 길이 = 홀수
 * => 중앙값 : Math.floor(배열의 길이 / 2)
 * : find() 로 중앙값 탐색
 */

const pastSolution = () => {
  return array
    .sort((a, b) => a - b)
    .find((_, index) => index === Math.floor(array.length / 2));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : at() 메서드 사용
 * - 효과
 * : 시간 감소 (0.17 ms -> 0.06 ms)
 */

const solution = () => {
  return array.sort((a, b) => a - b).at(Math.floor(array.length / 2));
};
