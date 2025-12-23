/**
 * <마지막 두 원소>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181927
 */

// NOTE - 공통 상위 코드
const num_list = [5, 2, 1, 7, 5];

/**
 * NOTE - 1st Trial (Success)
 */

const pastSolution = () => {
  const { length } = num_list;
  const [a, b] = [num_list[length - 1], num_list[length - 2]];

  num_list.push(a < b ? b - a : 2 * b);

  console.log(num_list);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 배열을 뒤집어서 요소 접근
 * : push 대신 전개 연산자(...) 적용
 */

const solution = () => {
  const [b, a] = [...num_list].reverse();

  const result = [...num_list, a < b ? b - a : 2 * b];

  console.log(result);
};

solution();
