/**
 * <특별한 이차원 배열 2>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181831
 */

// NOTE - 공통 상위 코드
const arr = [
  [5, 192, 33],
  [192, 72, 95],
  [33, 95, 999],
];

/**
 * NOTE - 1st Trial (Fail)
 * - 포인트
 * : 배열을 대각선으로 접었을 때
 *   - rowIndex === colIndex 인 요소는 어차피 유일한 값 (변하지 않음)
 *   - rowIndex !== colIndex 인 요소들은 colIndex 와 rowIndex 를 뒤집어도 동일한 값
 * => Set 으로 중복을 제거하면, rowIndex !== colIndex 인 요소의 개수는 arr.length * (arr.length - 1) / 2 가 됨
 * - 실패 원인
 * : 모든 배열의 요소가 다르다는 조건이 없음
 * (반례 : 모든 배열 요소 = 1)
 */

const failedSolution = () => {
  // rowIndex !== colIndex 인 요소 배열
  const indexDiffArray = arr.flatMap((row, rowIndex) =>
    row.filter((_, colIndex) => rowIndex !== colIndex)
  );

  const arraySet = new Set(indexDiffArray);

  return Number(arraySet.size === (arr.length * (arr.length - 1)) / 2);
};

console.log(failedSolution());

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : every() 로 모든 index 요소 동일 여부 확인
 */

const solution = () => {
  const result = arr.every((row, rowIndex) =>
    row.every(
      (_, colIndex) => arr[rowIndex][colIndex] === arr[colIndex][rowIndex]
    )
  );

  return Number(result);
};
