/**
 * <이차원 배열 대각선 순회하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181829
 */

// NOTE - 공통 상위 코드
const board = [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
const k = 2;
let total = 0; // 최종 합계

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 전체 순회
 * : i + j > k 인 경우 continue
 */

const pastSolution1 = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i + j > k) continue;
      total += board[i][j];
    }
  }

  return total;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : i + j <= k 도 반복문의 조건에 추가
 */

const pastSolution2 = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; i + j <= k && j < board[0].length; j++) {
      total += board[i][j];
    }
  }

  return total;
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : 이중 reduce() 를 활용
 * - 효과
 * : 시간 감소 (0.22 ms -> 0.18 ms)
 */

const solution = () => {
  return board.reduce(
    (total, row, i) =>
      total + row.reduce((acc, value, j) => acc + (i + j > k ? 0 : value), 0),
    0
  );
};

console.log(solution());
