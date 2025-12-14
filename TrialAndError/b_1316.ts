/**
 * <그륩 단어 체커>
 *
 * - 레벨 : Silver V
 * - 링크 : https://www.acmicpc.net/problem/1316
 */

// NOTE - 공통 상위 코드
import fs from "fs";
const input = fs.readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 문자가 연속적인지 확인 필요
 * : 이미 나온 알파벳을 저장 필요
 */

const [, ...values] = input.split("\n");

// 그룹 단어 개수
let count = 0;

const solution = () => {
  values.forEach((value) => {
    // 그룹 단어 여부
    let continuous = true;
    // NOTE - 찾은 알파벳 (기본값 : 첫 글자)
    const alphabets = [value[0]];

    // 2번째 글자부터 시작
    for (let i = 1; i < value.length; i++) {
      // 이전 글자와 같으면 continue
      if (value[i] === value[i - 1]) continue;
      // 기존에 존재하는 문자면 그룹 단어 Fail
      if (alphabets.includes(value[i])) {
        continuous = false;
        break;
      } else {
        // 기존에 존재하지 않는 문자면 배열에 추가
        alphabets.push(value[i]);
        continue;
      }
    }

    // 최종적으로 그룹 단어이면 count++
    if (continuous) count++;
  });

  console.log(count);
};

solution();
