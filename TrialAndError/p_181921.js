/**
 * <배열 만들기 2>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181921
 */

// NOTE - 공통 상위 코드
const [l, r] = [5, 555];
const result = [];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : l 부터 r 까지 문자열 조사
 */

const pastSolution1 = () => {
  for (let i = l; i <= r; i++) {
    const [...value] = i.toString();

    if (value.every((letter) => letter === "5" || letter === "0")) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : regex 로 05를 "" 로 변경
 * : ""로 변경한 TEXT가 빈 문자열인 경우에만 result.push()
 */

const pastSolution2 = () => {
  for (let i = l; i <= r; i++) {
    if (i.toString().replaceAll(/[05]/g, "").length === 0) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : 2진수 활용
 *
 * SECTION 규칙
 * 0과 5로 이루어진 숫자 = 0과 1로 이루어진 숫자 * 5
 * [0, 1, 10, 11, ...] = [0, 5, 50, 55, ...]
 * !SECTION
 *
 * : 1부터 10진수 숫자 => 2진수 숫자 형태 * 5 변환
 * : l <= value <= r 인 항목만 result.push()
 *
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 53.8 MB -> 33.4 MB, 시간 : 210.98 ms -> 0.15 ms)
 */

const solution = () => {
  let num = 1;

  while (true) {
    const value = num.toString(2) * 5;

    if (value > r) break;
    if (value >= l) result.push(value);

    num++;
  }

  return result.length ? result : [-1];
};

console.log(solution());
