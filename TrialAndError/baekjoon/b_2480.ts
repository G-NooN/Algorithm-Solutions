/**
 * <주사위 세개>
 *
 * - 레벨 : Bronze IV
 * - 링크 : https://www.acmicpc.net/problem/2480
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split(" ");

/**
 * NOTE - 1st Trial (Fail)
 * - 실패 원인
 * : 예외 케이스 (a === c)
 */
const failedSolution1 = (a: string, b: string, c: string) => {
  let price = 0;

  if (a === b) {
    if (b === c) {
      price = 10000 + Number(a) * 1000;
    } else {
      price = 1000 + Number(a) * 100;
    }
  } else if (b === c) {
    price = 1000 + Number(b) * 100;
  } else if (Number(a) < Number(b)) {
    if (Number(b) < Number(c)) {
      price = Number(c) * 100;
    } else {
      price = Number(b) * 100;
    }
  } else if (Number(a) < Number(c)) {
    price = Number(c) * 100;
  } else {
    price = Number(a) * 100;
  }

  console.log(price);
};

/**
 * NOTE - 2nd Trial (Fail)
 * - 실패 원인
 * : 예외 케이스 (a === c)
 */
const failedSolution2 = (a: string, b: string, c: string) => {
  let price = 0;

  if (a === b) {
    if (b === c) {
      price = 10000 + Number(a) * 1000;
    } else {
      price = 1000 + Number(a) * 100;
    }
  } else if (b === c) {
    price = 1000 + Number(b) * 100;
  } else {
    const biggerNum = Number(b) > Number(c) ? Number(b) : Number(c);
    const biggestNum = Number(a) > biggerNum ? Number(a) : biggerNum;

    price = biggestNum * 100;
  }

  console.log(price);
};

/**
 * NOTE - 3rd(Final) Trial (Success)
 * - 포인트
 * 1. 가운데 b를 활용하여 a === b && b === c 또는 a === b || b === c 접근
 * 2. a === c 케이스
 * 3. 최대값 : Math.max
 */

const solution = (a: string, b: string, c: string) => {
  let price = 0;

  if (a === b && b === c) {
    price = 10000 + Number(b) * 1000;
  } else if (a === b || b === c) {
    price = 1000 + Number(b) * 100;
  } else if (a === c) {
    price = 1000 + Number(a) * 100;
  } else {
    price = Math.max(Number(a), Number(b), Number(c)) * 100;
  }

  console.log(price);
};

solution(array[0], array[1], array[2]);
