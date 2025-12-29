/**
 * <조건에 맞게 수열 변환하기 2>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181881
 */

// NOTE - 공통 상위 코드
let arr = [1, 2, 3, 100, 99, 98];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 매핑 함수 분리
 * : every() 로 전체 요소 동일 여부 비교
 * : 동일해질 때까지 arr, mappedArray 반복 및 count ++
 */

const getMappedArray = (array) => {
  return array.map((value) => {
    const over50 = value >= 50;
    const even = value % 2 === 0;

    if (over50 && even) {
      return value / 2;
    }
    if (!over50 && !even) {
      return value * 2 + 1;
    }
    return value;
  });
};

const solution = () => {
  let count = 0;

  while (true) {
    let mappedArray = getMappedArray(arr);

    if (!mappedArray.every((value, index) => value === arr[index])) {
      arr = mappedArray;
      count++;
    } else return count;
  }
};

console.log(solution());
