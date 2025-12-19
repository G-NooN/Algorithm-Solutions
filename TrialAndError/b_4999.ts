/**
 * <아!>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/4999
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : h는 마지막 공통, 앞에 a의 개수로 비교
 */

const pastSolution = () => {
  const [supply, demand] = input.split("\n").map((value) => value.length);

  console.log(supply >= demand ? "go" : "no");
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 어차피 형태가 같기 때문에 길이가 길거나 같으면 includes() 사용 가능
 */

const solution = () => {
  const [supply, demand] = input.split("\n");

  console.log(supply.includes(demand) ? "go" : "no");
};

solution();
