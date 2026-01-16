/**
 * <영어가 싫어요>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/180894
 */

// NOTE - 공통 상위 코드
const numbers = "onetwothreefourfivesixseveneightnine";

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 숫자 변환 객체 생성
 * : regex 로 숫자 변환
 */

const pastSolution = () => {
  const numberMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g;

  const result = numbers.replace(regex, (match) => numberMap[match]);

  return Number(result);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 숫자를 index 로 활용
 * : reduce() 로 각 value -> index(=숫자) 로 변환
 * - 효과
 * : 시간 감소 (0.18 ms -> 0.07 ms)
 */

const solution = () => {
  const numberArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const result = numberArray.reduce(
    (acc, letter, index) => acc.replaceAll(letter, index),
    numbers
  );

  return Number(result);
};

console.log(solution());
