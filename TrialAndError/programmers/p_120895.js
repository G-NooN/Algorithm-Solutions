/**
 * <인덱스 바꾸기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120895
 */

// NOTE - 공통 상위 코드
const my_string = "I love you";
const [num1, num2] = [3, 6];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : slice() 활용
 */

const pastSolution = () => {
  return (
    my_string.slice(0, num1) +
    my_string[num2] +
    my_string.slice(num1 + 1, num2) +
    my_string[num1] +
    my_string.slice(num2 + 1)
  );
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 구조분해할당으로 index 값 직접 변경
 * - 효과
 * : 시간 감소 (0.05 ms -> 0.04 ms)
 */

const solution = () => {
  const result = [...my_string];

  [result[num1], result[num2]] = [result[num2], result[num1]];

  return result.join("");
};

console.log(solution());
