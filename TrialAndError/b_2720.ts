/**
 * <세탁소 사장 동혁>
 *
 * - 레벨 : Bronze III
 * - 링크 : https://www.acmicpc.net/problem/2720
 */

// NOTE - 공통 상위 코드
import fs from "fs";
const input = fs.readFileSync("./input.txt").toString().trim();

const [, ...values] = input.split("\n").map(Number);

const changeList = [25, 10, 5, 1];

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 각 값을 텍스트로 선언
 * : 통합한 결과를 각각 console.log() 출력
 */

const pastSolution1 = () => {
  values.forEach((value) => {
    let mod = 0;

    const quarter = Math.floor(value / 25);

    mod = value % 25;

    const dime = Math.floor(mod / 10);

    mod %= 10;

    const nickel = Math.floor(mod / 5);
    const penny = mod % 5;

    const result = `${quarter} ${dime} ${nickel} ${penny}`;

    console.log(result);
  });
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 각 결과값을 배열값으로 입력 후 출력
 * : 배열[index
 * - 개선 필요사항
 * : 3개의 배열 선언으로 인한 메모리 & 시간 오히려 증가
 */

const pastSolution2 = () => {
  values.forEach((value) => {
    const coinCountArray = Array.from({ length: changeList.length }, () => 0);

    changeList.forEach((change, i) => {
      coinCountArray[i] = Math.floor(value / change);
      value %= change;
    });

    console.log(coinCountArray.join(" "));
  });
};

/**
 * NOTE - 3rd Trial (Success)
 * - 포인트
 * : 빈 배열 선언 후 push 형태로 전환
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 10220 KB -> 9560 KB / 시간 : 120 ms -> 84 ms)
 */

const solution = () => {
  const resultArray = values.map((value) => {
    const coinCountArray: number[] = [];

    changeList.forEach((change) => {
      coinCountArray.push(Math.floor(value / change));
      value %= change;
    });

    return coinCountArray.join(" ");
  });

  console.log(resultArray.join("\n"));
};

solution();
