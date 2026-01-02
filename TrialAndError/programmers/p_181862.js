/**
 * <세 개의 구분자>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181862
 */

// NOTE - 공통 상위 코드
const myStr = "baconlettucetomato";

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : flatMap() 활용
 */

const pastSolution = () => {
  const result = myStr
    .split("a")
    .flatMap((value) => value.split("b").flatMap((value) => value.split("c")))
    .filter((value) => value.length);

  return result.length ? result : ["EMPTY"];
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : regex match 활용
 * - 효과
 * : 시간 감소 (118.54 ms -> 13.86 ms)
 */

const solution = () => {
  return myStr.match(/[^a-c]+/g) ?? ["EMPTY"];
};

console.log(solution());
