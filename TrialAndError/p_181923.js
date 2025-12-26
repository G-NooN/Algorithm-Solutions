/**
 * <수열과 구간 쿼리 2>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181923
 */

// NOTE - 공통 상위 코드
const arr = [0, 1, 2, 4, 3];
const queries = [
  [0, 4, 2],
  [0, 3, 2],
  [0, 2, 2],
];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : slice() 후 sort
 * : sort 한 배열에서 find() 로 원하는 가장 앞 요소 return
 * : sort 한 뒤 조건에 맞는 가장 앞의 요소 return
 */

const pastSolution = () => {
  const result = queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .sort((a, b) => a - b)
        .find((value) => value > k) ?? -1
  );

  return result;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : slice() 후 filter()
 * : Math.min 으로 return
 */

const solution = () => {
  const result = queries.map(([s, e, k]) => {
    const values = arr.slice(s, e + 1).filter((value) => value > k);
    return values.length ? Math.min(...values) : -1;
  });

  return result;
};

console.log(solution());
