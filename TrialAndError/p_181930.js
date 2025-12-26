/**
 * <주사위 게임 2>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181930
 */

// NOTE - 공통 상위 코드
const [a, b, c] = [5, 3, 3];
const array = [a, b, c];

let result = 1;

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : Math.pow(), reduce() 를 활용하여 총합 미리 계산
 * : 주사위 상태에 따른 총합 **
 * - 개선 필요방안
 * : 개수가 3개보다 많아질 경우 코드 리팩토링 필요
 */

const pastSolution = () => {
  const sum = a + b + c;
  const doubleSum = array.reduce((acc, value) => acc + Math.pow(value, 2), 0);
  const tripleSum = array.reduce((acc, value) => acc + Math.pow(value, 3), 0);

  if (a === b && b === c) {
    result = sum * doubleSum * tripleSum;
  } else if (a !== b && b !== c && c !== a) {
    result = sum;
  } else {
    result = sum * doubleSum;
  }

  return result;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : Set 을 사용하여 중복을 제거한 요소 리스트 반환
 *
 * SECTION 규칙
 * : 배열의 길이 - 중복 제거한 배열의 길이
 *   - 0 : 1차 제곱의 합
 *   - 1 : 1차 제곱의 합 * 2차 제곱의 합
 *   - 2 : 1차 제곱의 합 * 2차 제곱의 합 * 3차 제곱의 합
 * !SECTION
 *
 * : Set 을 사용하여 중복 제거한 총 개수 반환
 * : 배열의 길이와 Set 의 길이를 비교
 *
 * - 효과
 * : 코드 간소화 및 재사용성 개선
 */

const solution = () => {
  const arraySet = new Set(array);

  for (let i = 0; i <= array.length - arraySet.size; i++) {
    result *= array.reduce((acc, value) => acc + Math.pow(value, i + 1), 0);
  }

  return result;
};

console.log(solution());
