/**
 * <정사각형으로 만들기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181830
 */

// NOTE - 공통 상위 코드
const arr = [
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
];
const valueLength = arr[0].length; // 열 개수

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * 1) 행 개수 > 열 개수
 *   - 각 행에 (행 개수 - 열 개수) 만큼 0 을 concat()
 * 2) 행 개수 < 열 개수
 *   - 기존 배열에 (열 개수 - 행 개수) 만큼 0 배열을 추가
 * 3) 행 개수 === 열 개수
 *   - 기존 배열 반환
 */

const pastSolution1 = () => {
  // 행 개수 > 열 개수
  if (arr.length > valueLength) {
    return arr.map((row) => [
      ...row,
      ...Array.from({ length: arr.length - valueLength }, () => 0),
    ]);
  }
  // 행 개수 < 열 개수
  else if (arr.length < valueLength) {
    return arr.concat(
      Array.from({ length: valueLength - arr.length }, () =>
        Array.from({ length: valueLength }, () => 0)
      )
    );
  }
  // 행 개수 === 열 개수
  else return arr;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 행/열 개수 차이를 절대값으로 고정
 * - 효과
 * : 메모리 감소 (38.3 MB -> 38.2 MB)
 * : 시간 증가 (1.49 ms -> 2.04 ms)
 */

const pastSolution2 = () => {
  const diff = Math.abs(arr.length - valueLength);

  if (arr.length > valueLength) {
    return arr.map((row) => [...row, ...Array.from({ length: diff }, () => 0)]);
  } else if (arr.length < valueLength) {
    return arr.concat(
      Array.from({ length: diff }, () =>
        Array.from({ length: valueLength }, () => 0)
      )
    );
  } else return arr;
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : Math.max() 로 행/열 개수 최대값 찾기
 * : 전체 배열 생성 후 [rowIndex][colIndex] 가 있는 경우 요소 반환, 없는 경우 0 반환
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 38.2 MB -> 38.1 MB / 시간 : 2.04 ms -> 1.54 ms)
 */

const solution = () => {
  const maxLength = Math.max(arr.length, arr[0].length);

  return Array.from({ length: maxLength }, (_, rowIndex) =>
    Array.from(
      { length: maxLength },
      // 행 개수 < 열 개수인 경우, 행 index 가 없을 수 있음 => 0 반환
      (_, colIndex) => arr[rowIndex]?.[colIndex] ?? 0
    )
  );
};

console.log(solution());
