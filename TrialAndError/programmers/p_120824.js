/**
 * <짝수 홀수 개수>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120824
 */

// NOTE - 공통 상위 코드
const num_list = [1, 2, 3, 4, 5];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : reduce() 활용
 */

const pastSolution = () => {
  const result = num_list.reduce(
    (acc, value) => {
      let [evenCount, oddCount] = acc;

      value % 2 === 0 ? evenCount++ : oddCount++;

      return [evenCount, oddCount];
    },
    [0, 0]
  );

  return result;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : result 배열 [짝수 개수, 홀수 개수] 선언
 * : forEach() 활용하여 value 의 홀/짝 여부에 따라 result 에 반영
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 33.5 MB -> 33.4 MB / 시간 : 0.17 ms -> 0.05 ms)
 */

const solution = () => {
  let result = [0, 0];

  num_list.forEach((value) => result[value % 2]++);

  return result;
};

console.log(solution());
