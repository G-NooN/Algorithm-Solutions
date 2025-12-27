/**
 * <왼쪽 오른쪽>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181890
 */

// NOTE - 공통 상위 코드
const str_list = ["u", "u", "l", "r"];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : l, r 의 index 각각 탐색
 * : 조건에 따라 return
 */

const pastSolution = () => {
  const lIndex = str_list.findIndex((value) => value === "l");
  const rIndex = str_list.findIndex((value) => value === "r");

  if (lIndex < 0 && rIndex < 0) return [];
  else if (lIndex >= 0 && rIndex >= 0) {
    return lIndex < rIndex
      ? str_list.slice(0, lIndex)
      : str_list.slice(rIndex + 1);
  } else
    return lIndex >= 0 ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : regex 활용
 * : 없는 경우 Early Return
 * : 앞에 오는 부분에 따라 return
 */

const solution = () => {
  const index = str_list.findIndex((value) => /l|r/.test(value));

  if (index < 0) return [];

  return str_list[index] === "l"
    ? str_list.slice(0, index)
    : str_list.slice(index + 1);
};

console.log(solution());
