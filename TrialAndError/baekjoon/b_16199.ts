/**
 * <나이 계산하기>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/16199
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 월/일 을 padStart 적용한 후 숫자로 변환하여 비교
 */

const pastSolution = () => {
  const [[birthYear, birthDate], [targetYear, targetDate]] = input
    .split("\n")
    .map((value) => {
      const [year, month, day] = value.split(" ");
      const monthDay = month.padStart(2, "0") + day.padStart(2, "0");

      return [Number(year), Number(monthDay)];
    });

  const yearAge = targetYear - birthYear;
  const countAge = yearAge + 1;
  const manAge = yearAge - (birthDate - targetDate > 0 ? 1 : 0);

  console.log([manAge, countAge, yearAge].join("\n"));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 전체 Number 변환
 * : 만 나이 조건 분리
 * - 효과
 * : 시간 증가 (100 ms -> 104 ms)
 */

const solution = () => {
  const [
    [birthYear, birthMonth, birthDay],
    [targetYear, targetMonth, targetDay],
  ] = input.split("\n").map((value) => value.split(" ").map(Number));

  let [manAge, yearAge] = Array(2).fill(targetYear - birthYear);

  if (
    targetMonth < birthMonth ||
    (targetMonth === birthMonth && targetDay < birthDay)
  ) {
    manAge--;
  }

  console.log([manAge, yearAge + 1, yearAge].join("\n"));
};

solution();
