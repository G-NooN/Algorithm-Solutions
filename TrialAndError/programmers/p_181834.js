/**
 * <l로 만들기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181834
 */

// NOTE - 공통 상위 코드
const myString = "abcdevwxyz";

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : charCodeAt() 활용
 */

const pastSolution = () => {
  return [...myString]
    .map((value) => ("l".charCodeAt(0) > value.charCodeAt(0) > 0 ? "l" : value))
    .join("");
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : regex & replaceAll() 활용
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 36.5 MB -> 36.2 MB / 시간 : 17.81 ms -> 6.20 ms)
 */

const solution = () => {
  return myString.replaceAll(/[a-k]/g, "l");
};

console.log(solution());
