/**
 * <1로 만들기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181880
 */

// NOTE - 공통 상위 코드
const num_list = [12, 4, 15, 1, 14];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 2로 나누는 횟수 = 숫자 이하의 최소 2의 제곱수
 * : Math.log2() 활용
 */

const solution = () => {
  return num_list
    .map((num) => Math.floor(Math.log2(num)))
    .reduce((acc, value) => acc + value, 0);
};

console.log(solution());
