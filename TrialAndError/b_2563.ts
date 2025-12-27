/**
 * <색종이>
 *
 * - 레벨 : Silver V
 * - 링크 : https://www.acmicpc.net/problem/2563
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

const backgroundSize = 100;
const paperSize = 10;

let areaSize = 0;

const [, ...points] = input.split("\n");

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 도화지의 전체를 좌표 배열로 설정
 * : 도화지에서 각 색종이가 차지하는 부분의 값을 변경
 */

const pastSolution = () => {
  // 도화지 좌표 배열 설정 (기본값 : 0)
  const background = Array.from({ length: backgroundSize }, () =>
    Array.from({ length: backgroundSize }, () => 0)
  );

  points.forEach((point) => {
    const [x, y] = point.split(" ").map(Number);

    // 색종이가 차지하는 부분의 좌표값++
    for (let i = x; i < x + paperSize; i++) {
      for (let j = y; j < y + paperSize; j++) {
        background[i][j]++;
      }
    }
  });

  // 좌표가 차지하는 부분을 count
  for (let i = 0; i < backgroundSize; i++) {
    for (let j = 0; j < backgroundSize; j++) {
      if (background[i][j] > 0) {
        areaSize++;
      }
    }
  }
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 도화지 좌표 배열의 기본값을 단순 true/false 로 변경
 * - 개선사항
 * : 메모리 & 시간 감소 (메모리 : 10068 -> 9696 KB / 시간 : 150 -> 90 ms)
 */

const solution = () => {
  // 도화지 좌표 배열 설정 (기본값 : false)
  const background = Array.from({ length: backgroundSize }, () =>
    Array.from({ length: backgroundSize }, () => false)
  );

  points.forEach((point) => {
    const [x, y] = point.split(" ").map(Number);

    // 색종이가 차지하는 부분의 좌표값을 true로 변경
    for (let i = x; i < x + paperSize; i++) {
      for (let j = y; j < y + paperSize; j++) {
        background[i][j] = true;
      }
    }
  });

  // 좌표가 차지하는 부분을 count
  for (let i = 0; i < backgroundSize; i++) {
    for (let j = 0; j < backgroundSize; j++) {
      if (background[i][j]) {
        areaSize++;
      }
    }
  }

  console.log(areaSize);
};

solution();
