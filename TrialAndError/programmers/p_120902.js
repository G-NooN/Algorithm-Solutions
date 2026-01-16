/**
 * <문자열 계산하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120902
 */

// NOTE - 공통 상위 코드
const my_string = "300 + 4 - 2";

/**
 * NOTE - 1st Trial (Fail)
 * - 포인트
 * : regex 로 숫자, 연산자 분리
 * : reduce() 로 각 항목 연산
 * : 최종 결과에서 마지막 숫자 제거
 * - 실패 원인
 * : acc + Number(value) 가 반드시 + 가 아님
 * (반례 : 3 + 4 - 2 => 9)
 * : 여러 자리 숫자 처리 불가
 * (반례 : 300 + 4 => 7)
 */

const failedSolution = () => {
  const array = my_string.match(/[\d+-]/g);

  const result = array.reduce((acc, value, index) => {
    if (value === "+") {
      return acc + Number(array[index + 1]);
    } else if (value === "-") {
      return acc - Number(array[index + 1]);
    } else {
      return acc + Number(value);
    }
  }, 0);

  return result - Number(array[array.length - 1]);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : split(" ") 으로 분리
 * : (숫자 연산자 숫자) 조합이기 때문에 연산자의 인덱스는 2씩 증가
 * : 기본값 array[0] 에서 2씩 증가하며 연산자 처리
 */

const solution = () => {
  const array = my_string.split(" ");

  let result = Number(array[0]);

  for (let i = 1; i < array.length - 1; i += 2) {
    if (array[i] === "+") {
      result += Number(array[i + 1]);
    } else if (array[i] === "-") {
      result -= Number(array[i + 1]);
    }
  }

  return result;
};

console.log(solution());
