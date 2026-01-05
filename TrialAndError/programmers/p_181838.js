/**
 * <날짜 비교하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181838
 */

// NOTE - 공통 상위 코드
const [date1, date2] = [
  [2021, 12, 28],
  [2021, 12, 29],
];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : padStart() 적용하는 함수 생성
 * : Number() 로 두 날짜 비교
 */

const pastSolution = () => {
  const getFullDate = (date) => {
    const [year, month, day] = date.map(String);

    return Number(
      `${year.padStart(4, "0")}${month.padStart(2, "0")}${day.padStart(2, "0")}`
    );
  };

  return Number(getFullDate(date1) < getFullDate(date2));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : new Date() 로 날짜 비교
 * - 효과
 * : 코드는 간결해졌으나 소요 시간 증가 (0.11 ms -> 4.75 ms)
 */

const solution = () => {
  return Number(new Date(date1) < new Date(date2));
};

console.log(solution());
