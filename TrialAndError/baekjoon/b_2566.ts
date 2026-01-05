/**
 * <최댓값>
 *
 * - 레벨 : Bronze III
 * - 링크 : https://www.acmicpc.net/problem/2566
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : find() 를 사용하면서 undefined 처리가 제대로 되지 않은 것으로 추정
 */

const failedSolution = () => {
  const rows = input.split("\n");
  // 2차원 배열
  const fullArray = rows.map((row) => row.split(" ").map(Number));
  // 1차원 배열 (전체 나열)
  const oneArray = rows.flatMap((row) => row.split(" ").map(Number));
  const maxNumber = Math.max(...oneArray);

  // 2차원 배열에서 최대값을 가진 row (실패 원인 (추정))
  const maxNumberRow =
    fullArray.find((row) => row.find((value) => value === maxNumber)) ?? [];

  // 2차원 배열에서 최대값을 가진 row의 index
  const maxNumberRowIndex = fullArray.findIndex((row) => row === maxNumberRow);

  // 2차원 배열에서 최대값을 가진 row에서 최대값을 가진 column의 index
  const maxNumberColumnIndex = maxNumberRow.findIndex(
    (column) => column === maxNumber
  );

  console.log(maxNumber);
  console.log(`${maxNumberRowIndex + 1} ${maxNumberColumnIndex + 1}`);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 개선사항
 * : 처음부터 2차원 배열 사용
 * : map으로 row 별로 Math.max() 적용 후 그 중에서 Math.max() 적용
 * : row는 findIndex, column은 array[rowIndex]의 indexOf 활용
 * - 효과
 * : 코드 간소화
 */

const solution = () => {
  const array = input.split("\n").map((row) => row.split(" ").map(Number));
  // 최대값
  const maxNumber = Math.max(...array.map((row) => Math.max(...row)));
  // 최대값을 가진 row의 index
  const maxNumberRowIndex = array.findIndex((row) => row.includes(maxNumber));
  // array[최대값 row]에서 최대값을 가진 column의 index
  const maxNumberColumnIndex = array[maxNumberRowIndex].indexOf(maxNumber);

  console.log(maxNumber);
  console.log(`${maxNumberRowIndex + 1} ${maxNumberColumnIndex + 1}`);
};

solution();
