/**
 * <문자열이 몇 번 등장하는지 세기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181871
 */

// NOTE - 공통 상위 코드
const myString = "banana";
const pat = "ana";

/**
 * NOTE - 1st Trial (Success, AI Assisted)
 * - 포인트
 * : 문자열 순회
 * : 각 위치에서 slice() 하여 pat 길이만큼 문자열 조사
 * : 조사한 문자열이 pat 와 같으면 count 증가
 */

const solution = () => {
  let count = 0;

  for (let i = 0; i < myString.length; i++) {
    const targetString = myString.slice(i, i + pat.length);

    if (targetString === pat) {
      count++;
    }
  }

  return count;
};

console.log(solution());
