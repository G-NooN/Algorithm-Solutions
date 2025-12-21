/**
 * <등차수열의 특정한 항만 더하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181931
 */

// NOTE - 공통 상위 코드
const [a, d, included] = [3, 4, [true, false, false, true, true]];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : index 의 값은 a + d * index
 * : included 에서 값이 true인 index 만 필터링
 * : 총합 = a * true 인 개수 + d * index 총합
 */

const pastSolution = () => {
  const includedIndexArray = included
    .map((value, index) => {
      if (value) return index;
    })
    .filter((value) => !isNaN(value));

  const indexSum = includedIndexArray.reduce((acc, value) => acc + value);

  const result = a * includedIndexArray.length + d * indexSum;

  console.log(result);
};

/**
 * NOTE - 2nd Trial (Success)
 * - reduce() 의 index 활용
 */

const solution = () => {
  const result = included.reduce(
    (acc, flag, index) => (flag ? acc + a + d * index : acc),
    0
  );

  console.log(result);
};

solution();
