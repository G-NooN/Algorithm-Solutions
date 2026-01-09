/**
 * <특정 문자 제거하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120826
 */

// NOTE - 공통 상위 코드
const my_string = "abcdef";
const letter = "f";

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : filter() 활용하여 문자 필터링
 */

const pastSolution1 = () => {
  return [...my_string].filter((value) => value !== letter).join("");
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : replaceAll() 활용하여 문자 제거
 * - 효과
 * : 메모리 증가 (33.4 MB -> 33.5 MB)
 * : 시간 감소 (0.07 ms -> 0.06 ms)
 */

const pastSolution2 = () => {
  return my_string.replaceAll(letter, "");
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : split() 활용하여 문자 제거 후 병합
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 33.5 MB -> 33.3 MB / 시간 : 0.06 ms -> 0.05 ms)
 */

const solution = () => {
  return my_string.split(letter).join("");
};

console.log(solution());
