/**
 * <배열 만들기 6>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181859
 */

// NOTE - 공통 상위 코드
const arr = [0, 1, 1, 1, 0];
let result = [];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : pop() 으로 마지막 요소 확인
 */

const pastSolution = () => {
  arr.forEach((value) => {
    if (!result.length) {
      result.push(value);
    } else {
      [...result].pop() === value ? result.pop() : result.push(value);
    }
  });

  return result.length ? result : [-1];
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : index 직접 접근 (result.length - 1)
 * - 효과
 * : 시간 감소 (305.69 ms -> 26.85 ms)
 */

const solution = () => {
  arr.forEach((value) => {
    value !== result[result.length - 1] ? result.push(value) : result.pop();
  });

  return result.length ? result : [-1];
};

console.log(solution());
