/**
 * <코드 처리하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181932
 */

// NOTE - 공통 상위 코드
const code = "abc1abc1abc";

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : EMPTY 조건
 *   - !array.length (x)
 *   - !result.length (o)
 */

const failedSolution = () => {
  const array = code.split("");

  if (!array.length) return "EMPTY";

  const result = [];
  let mode = false;

  array.forEach((value, index) => {
    const indexEven = index % 2 === 0;

    if (!isNaN(value)) {
      mode = !mode;
    } else if ((!mode && indexEven) || (mode && !indexEven)) {
      result.push(value);
    }
  });

  return result.join("");
};

/**
 * NOTE - 2nd Trial (Success)
 */

const pastSolution = () => {
  const array = code.split("");

  const result = [];
  let mode = false;

  array.forEach((value, index) => {
    const indexEven = index % 2 === 0;

    if (!isNaN(value)) {
      mode = !mode;
    } else if ((!mode && indexEven) || (mode && !indexEven)) {
      result.push(value);
    }
  });

  return result.length ? result.join("") : "EMPTY";
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : mode 는 단순 Flag 값
 * : mode 에 해당하는 문자는 1 밖에 없음
 * : code 에서 1 을 "" 로 변경하면
 *   - mode 가 1일 때의 홀수 index 값 -> mode 0 일 때의 짝수 index 값
 * : index 가 짝수인 것만 필터링하면 결과값이 됨
 */

const solution = () => {
  const array = code.replaceAll("1", "").split("");

  const result = array.filter((_, index) => index % 2 === 0).join("");

  return result.length ? result : "EMPTY";
};

console.log(solution());
