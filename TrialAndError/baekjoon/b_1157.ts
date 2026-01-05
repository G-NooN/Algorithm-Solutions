/**
 * <단어 공부>
 *
 * - 레벨 : Bronze I
 * - 링크 : https://www.acmicpc.net/problem/1157
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

// 알파벳 대문자 배열 (A, B, C, ...)
const alphabetArray = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);
// 알파벳 카운트 배열
const alphabetCountArray = Array.from({ length: 26 }, () => 0);
// input upperCase
const upperCaseInputArray = input.toUpperCase().split("");

let result = "?";

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 알파벳 카운트 배열을 별도로 사용
 * : index를 활용하여 result 출력
 * - 개선 필요사항
 * : 처리시간 > 600ms
 */

const pastSolution = () => {
  // input이 특정 알파벳을 포함하는 경우 해당 알파벳의 카운트 index++
  alphabetArray.forEach((alphabet, index) => {
    upperCaseInputArray.forEach((letter) => {
      if (letter === alphabet) {
        alphabetCountArray[index]++;
      }
    });
  });

  // 최대 count
  const maxCount = Math.max(...alphabetCountArray);

  // 최대 count를 가진 항목이 1개인 경우, 알파벳 배열의 해당 index 값 출력
  if (alphabetCountArray.filter((count) => count === maxCount).length === 1) {
    const maxCountIndex = alphabetCountArray.findIndex(
      (count) => count === maxCount
    );

    result = alphabetArray[maxCountIndex];
  }

  console.log(result);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 개선사항
 * 1. 이중 반복문 제거
 * : 알파벳 배열 대신 charCodeAt 을 사용하여 A를 기준으로 한 index 활용
 * 2. findIndex -> indexOf 활용
 * - 처리시간 : 600ms -> 200ms
 */

const solution = () => {
  upperCaseInputArray.forEach((letter) => {
    const index = letter.charCodeAt(0) - "A".charCodeAt(0);

    // 알파벳 개수 안에 드는지 확인
    if (index < 26) {
      alphabetCountArray[index]++;
    }
  });

  const maxCount = Math.max(...alphabetCountArray);

  if (alphabetCountArray.filter((count) => count === maxCount).length === 1) {
    const maxCountIndex = alphabetCountArray.indexOf(maxCount);

    result = String.fromCharCode(maxCountIndex + "A".charCodeAt(0));
  }

  console.log(result);
};

solution();
