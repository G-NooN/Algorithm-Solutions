/**
 * <그림 확대>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181836
 */

// NOTE - 공통 상위 코드
const picture = [
  ".xx...xx.",
  "x..x.x..x",
  "x...x...x",
  ".x.....x.",
  "..x...x..",
  "...x.x...",
  "....x....",
];
const k = 2;
const result = [];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 각 항목의 문자를 repeat()
 * : 각 항목을 k 번씩 push
 */

const pastSolution = () => {
  picture.forEach((value) => {
    for (let i = 0; i < k; i++) {
      const piece = [...value].map((letter) => letter.repeat(k));

      result.push(piece.join(""));
    }
  });

  return result;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : reduce() 로 문자열 사전 생성
 * : k 번씩 push 만 진행
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 34.2 MB -> 33.6 MB / 시간 : 0.93 ms -> 0.26 ms)
 */

const solution = () => {
  picture.forEach((value) => {
    const piece = [...value].reduce((acc, curr) => acc + curr.repeat(k), "");

    for (let i = 0; i < k; i++) {
      result.push(piece);
    }
  });

  return result;
};

console.log(solution());
