/**
 * <크로아티아 알파벳>
 *
 * - 레벨 : Silver V
 * - 링크 : https://www.acmicpc.net/problem/2941
 */

// 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - Trial (답지 참고)
 * - 포인트
 * : for..of 활용
 * : replace() or replaceAll() 사용하여 텍스트 변환
 */

const croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

const solution = () => {
  let replacedInput = input;

  for (let alphabet of croatianAlphabets) {
    replacedInput = replacedInput.replaceAll(alphabet, "@");
  }

  console.log(replacedInput.length);
};

solution();
