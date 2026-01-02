/**
 * <빈 배열에 추가, 삭제하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181860
 */

// NOTE - 공통 상위 코드
const arr = [3, 2, 4, 1, 3];
const flag = [true, false, true, false, false];

/**
 * NOTE - 1st Trial (Success)
 */

const pastSolution = () => {
  let result = [];

  arr.forEach((value, index) => {
    if (flag[index]) {
      result = [...result, ...Array.from({ length: value * 2 }, () => value)];
    } else {
      result = result.slice(0, -value);
    }
  });

  return result;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : reduce 의 index parameter 활용 (acc, value, index)
 */

const solution = () => {
  return arr.reduce(
    (acc, value, index) =>
      flag[index]
        ? [...acc, ...Array.from({ length: value * 2 }, () => value)]
        : acc.slice(0, -value),
    []
  );
};

console.log(solution());
