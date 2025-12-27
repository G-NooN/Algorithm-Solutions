/**
 * <별 찍기 - 7>
 *
 * - 레벨 : Bronze III
 * - 링크 : https://www.acmicpc.net/problem/2444
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";

const input = readFileSync("./input.txt").toString().trim();

const max = Number(input);

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 반복 작업 함수 분리
 * : 반복문 2번 사용
 */

const pastSolution = () => {
  function writeLine(count: number, max: number) {
    const tab = " ".repeat(max - count);
    const star = "*".repeat(2 * count - 1);

    console.log(tab + star);
  }

  for (let i = 1; i < max; i++) {
    writeLine(i, max);
  }

  for (let i = max; i > 0; i--) {
    writeLine(i, max);
  }
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 반복 작업 제거
 * : reverse(), slice() 사용하여 이미 완성된 배열을 뒤집어서 연결
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 9692 KB -> 9432 KB / 시간 : 100 ms -> 96 ms)
 */

const solution = () => {
  const starArray: string[] = [];

  for (let i = 0; i < max; i++) {
    const tab = " ".repeat(max - (i + 1));
    const star = "*".repeat(2 * i + 1);

    starArray.push(tab + star);
  }

  const reversedArray = [...starArray].reverse().slice(1);
  const result = [...starArray, ...reversedArray];

  console.log(result.join("\n"));
};

solution();
