/**
 * <홀수 vs 짝수>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181887
 */

// NOTE - 공통 상위 코드
const num_list = [4, 2, 6, 1, 7, 6];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 각 index 별로 filter 후 reduce
 */

const pastSolution = () => {
  const oddIndexSum = num_list
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, value) => acc + value, 0);
  const evenIndexSum = num_list
    .filter((_, index) => index % 2 !== 0)
    .reduce((acc, value) => acc + value, 0);

  return Math.max(oddIndexSum, evenIndexSum);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : forEach로 한꺼번에 계산
 */

const solution = () => {
  let [oddIndexSum, evenIndexSum] = [0, 0];

  num_list.forEach((value, index) => {
    index % 2 === 0 ? (evenIndexSum += value) : (oddIndexSum += value);
  });

  return Math.max(oddIndexSum, evenIndexSum);
};

console.log(solution());
