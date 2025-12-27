/**
 * <문자 개수 세기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181902
 */

// NOTE - 공통 상위 코드
const my_string = "Programmers";

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : charCode 활용
 * : 대문자, 소문자 분리
 * : 각각 카운트 후 concat
 */

const pastSolution = () => {
  const upperAlphabets = Array.from({ length: 26 }, () => 0);
  const lowerAlphabets = Array.from({ length: 26 }, () => 0);

  [...my_string].forEach((letter) => {
    const letterIndex = letter.charCodeAt(0);
    const upperIndex = letterIndex - "A".charCodeAt(0);
    const lowerIndex = letterIndex - "a".charCodeAt(0);

    if (upperIndex < 26) {
      upperAlphabets[upperIndex]++;
    }

    if (lowerIndex < 26) {
      lowerAlphabets[lowerIndex]++;
    }
  });

  const result = upperAlphabets.concat(lowerAlphabets);

  return result;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 전체 알파벳 문자열 생성
 * : indexOf 활용
 * - 효과
 * : 시간 감소 (0.50 ms -> 0.30 ms)
 */

const solution = () => {
  const alphabets = Array.from({ length: 52 }, (_, index) =>
    String.fromCharCode(index < 26 ? 65 + index : 97 + index - 26)
  ).join("");

  const result = Array.from({ length: 52 }, () => 0);

  [...my_string].forEach((letter) => result[alphabets.indexOf(letter)]++);

  return result;
};

console.log(solution());
