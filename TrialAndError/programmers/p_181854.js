/**
 * <배열의 길이에 따라 다른 연산하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181854
 */

// NOTE - 공통 상위 코드
const arr = [49, 12, 100, 276, 33];
const n = 27;

/**
 * NOTE - 1st Trial (Success)
 */

const pastSolution = () => {
  const arrEven = arr.length % 2 === 0;

  return arr.map((value, index) => {
    const indexEven = index % 2 === 0;

    return arrEven
      ? indexEven
        ? value
        : value + n
      : indexEven
      ? value + n
      : value;
  });
};

/**
 * SECTION - 규칙
 *
 * 배열 요소 처리 방식
 * (배열의 길이 홀/짝 - index 홀/짝) => 처리 방식
 * : 홀수 - 홀수 => value
 * : 홀수 - 짝수 => value + n
 * : 짝수 - 홀수 => value + n
 * : 짝수 - 짝수 => value
 *
 * NOTE - 포인트
 * - 배열의 길이와 index 의 홀/짝 여부가 동일한 경우에만 그대로 return
 *
 * !SECTION
 */

/**
 * NOTE - 2nd Trial (Success)
 */

const solution = () => {
  return arr.map((value, index) =>
    arr.length % 2 === index % 2 ? value : value + n
  );
};

console.log(solution());
