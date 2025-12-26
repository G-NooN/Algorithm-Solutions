/**
 * <주사위 게임 3>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181916
 */

// NOTE - 공통 상위 코드
const [a, b, c, d] = [4, 1, 4, 4];
const array = [a, b, c, d];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : Set 으로 중복 제거
 * : Set.size 로 조건식 계산
 */

const pastSolution = () => {
  const arraySet = new Set(array);

  // 1. arraySet.size === 1 (모든 숫자 동일)
  if (arraySet.size === 1) {
    return 1111 * a;
  }

  // 2. arraySet.size === 2 (요소 개수 : 1,3 또는 2,2)
  if (arraySet.size === 2) {
    // 3개인 값 찾기
    const targetValue = array.find(
      (value) => array.filter((v) => v === value).length === 3
    );

    // 3개인 값이 있는 경우 나머지 값 찾기
    if (targetValue) {
      const otherValue = array.find((value) => value !== targetValue);
      // 결과값
      const result = Math.pow(10 * targetValue + otherValue, 2);

      return result;
    } else {
      // 2개, 2개인 경우
      const [a, b] = [...arraySet];
      const result = (a + b) * Math.abs(a - b);

      return result;
    }
  }

  // 3. arraySet.size === 3 (요소 개수 : 1,1,2)
  if (arraySet.size === 3) {
    // 2개인 값 찾기
    const targetValue = array.find(
      (value) => array.filter((v) => v === value).length === 2
    );
    // 2개인 값 제외하고 결과값 계산
    const result = array
      .filter((value) => value !== targetValue)
      .reduce((acc, value) => acc * value, 1);

    return result;
  }

  // 4. arraySet.size === 4 (모든 숫자 다름)
  if (arraySet.size === 4) {
    return Math.min(...array);
  }
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : Map 사용
 *   - 중복 제거
 *   - key : 숫자, value : count
 * : Map.keys() 로 count 내림차순 value 정렬
 * : Map.values() 로 최대 count 탐색
 *
 * : Set.size 대신 [...Map].length 로 조건식 계산
 */

const solution = () => {
  const arrayMap = new Map();

  // 1. Map 에 (value, count) 추가
  array.forEach((value) => {
    arrayMap.set(value, (arrayMap.get(value) || 0) + 1);
  });

  // count 내림차순 value list
  const sortedArray = [...arrayMap.keys()].sort(
    (a, b) => arrayMap.get(b) - arrayMap.get(a)
  );

  const maxCount = Math.max(...[...arrayMap.values()]);

  const [p, q, r] = sortedArray;

  switch (sortedArray.length) {
    case 1:
      return 1111 * p;
    case 2:
      return maxCount === 3
        ? Math.pow(10 * p + q, 2)
        : (p + q) * Math.abs(p - q);
    case 3:
      return q * r;
    case 4:
      return Math.min(...array);
  }
};

console.log(solution());
