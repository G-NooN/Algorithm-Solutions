/**
 * <가까운 수>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120890
 */

// NOTE - 공통 상위 코드
const array = [3, 10, 28];
const n = 20;

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 기존 배열 정렬
 * : n 과의 절대값 차이 배열 생성
 * : 최소 절대값에 해당하는 값 반환
 */

const pastSolution = () => {
  const sortedArray = array.sort((a, b) => a - b);
  const targetArray = sortedArray.map((value = Math.abs(value - n)));

  return sortedArray[targetArray.indexOf(Math.min(...targetArray))];
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 기존 배열에서 절대값 및 순서 정렬
 * : 구조분해할당으로 최소값 반환
 * - 효과
 * : 시간 감소 (0.22 ms -> 0.14 ms)
 */

const solution = () => {
  const [result] = array.sort(
    (a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b
  );

  return result;
};

console.log(solution());
