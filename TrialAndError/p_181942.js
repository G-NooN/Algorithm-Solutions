/**
 * <문자열 섞기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181942
 */

// NOTE - 공통 상위 코드
const [str1, str2] = ["aaaaa", "bbbbb"];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 동일한 index의 값을 각각 push
 */

const pastSolution = () => {
  const result = [];

  for (let i = 0; i < str1.length; i++) {
    result.push(str1[i]);
    result.push(str2[i]);
  }

  console.log(result.join(""));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 동일한 index 라는 점을 map()으로 변환
 */

const solution = () => {
  const result = [...str1].map((letter, index) => letter + str2[index]);

  console.log(result.join(""));
};

solution();
