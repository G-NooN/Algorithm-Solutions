/**
 * <ACM 호텔>
 *
 * - 레벨 : Bronze III
 * - 링크 : https://www.acmicpc.net/problem/10250
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

const [, ...values] = input.split("\n");

const result: string[] = [];

/**
 * NOTE - 규칙
 * - 배정 순서
 * : 101 -> 201 -> ... 최고층 1호
 * : 102 -> 202 -> ... 최고층 2호
 * => 배정 층 : 배정순서 % 층수
 * => 배정 호수 : Math.ceil(배정순서 / 층수)
 */

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : 배정순서 % 층수 = 0 인 경우 처리 누락 (if 배정순서 % 층수 === 0 => 최고층)
 * : 배정호수 format 계산 오류 (10호 이상 방 처리 안함)
 */

const failedSolution = () => {
  values.forEach((value) => {
    const [height, , order] = value.split(" ").map(Number);

    const floor = order % height;
    const room = Math.ceil(order / height);

    result.push(`${floor}0${room}`);
  });

  console.log(result.join("\n"));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 배정순서 % 층수 === 0 인 경우, 층수 = 최고층
 * : padStart(2, "0") 으로 호수 2자리 처리
 */

const solution = () => {
  values.forEach((value) => {
    const [height, , order] = value.split(" ").map(Number);

    const floor = order % height === 0 ? height : order % height;
    const room = Math.ceil(order / height)
      .toString()
      .padStart(2, "0");

    result.push(`${floor}${room}`);
  });

  console.log(result.join("\n"));
};

solution();
