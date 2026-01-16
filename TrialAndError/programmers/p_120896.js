/**
 * <한 번만 등장한 문자>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120896
 */

// NOTE - 공통 상위 코드
const s = "hello";

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : Map 으로 문자 count
 * : filter() 로 count === 1 인 문자 필터링
 * : localeCompare() 로 정렬
 * : concat() 으로 문자열 연결
 */

const pastSolution1 = () => {
  const stringMap = new Map();

  [...s].forEach((letter) => {
    stringMap.set(letter, (stringMap.get(letter) || 0) + 1);
  });

  const oneCountLetters = [...stringMap.keys()]
    .filter((letter) => stringMap.get(letter) === 1)
    .sort((a, b) => a.localeCompare(b));

  const result = "".concat(...oneCountLetters);

  return result;
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : regex 활용
 * : s 에서 각 문자의 count === 1 인 결과 필터링
 * : sort() 기본 속성 : localeCompare()
 * : join 으로 문자열 연결
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 36 MB -> 33.5 MB / 시간 : 9.28 ms -> 0.12 ms)
 */

const pastSolution2 = () => {
  const result = [...s].filter((letter) => {
    const regex = new RegExp(letter, "g");

    return s.match(regex).length === 1;
  });

  return result.sort().join("");
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : count === 1 -> 첫 index === 마지막 index
 * : 첫 index 와 마지막 index 가 같은 항목만 최종 결과 배열에 push
 * : 결과 배열 sort() 후 join
 * - 효과
 * : 시간 감소 (0.12 ms -> 0.07 ms)
 */

const solution = () => {
  const result = [];

  [...s].forEach((letter) => {
    if (s.indexOf(letter) === s.lastIndexOf(letter)) {
      result.push(letter);
    }
  });

  return result.sort().join("");
};

console.log(solution());
