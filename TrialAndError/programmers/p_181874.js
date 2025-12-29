/**
 * <A 강조하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181874
 */

// NOTE - 공통 상위 코드
const myString = "abstract algebra";

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 각 문자를 순회
 * : switch 문으로 a 와 A 를 분리하여 처리
 */

const pastSolution = () => {
  return [...myString]
    .map((value) => {
      switch (value) {
        case "a":
        case "A":
          return "A";
        default:
          return value.toLowerCase();
      }
    })
    .join("");
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 소문자로 전체 변환 후 a 만 A 로 변환
 */

const solution = () => {
  return myString.toLowerCase().replaceAll("a", "A");
};

console.log(solution());
