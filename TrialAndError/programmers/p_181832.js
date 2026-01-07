/**
 * <정수를 나선형으로 배치하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181832
 */

// NOTE - 공통 상위 코드
const n = 5;

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 상하좌우를 index 로 설정
 * : n * n 배열 생성
 * : 배열에 숫자를 ++ 하며 하나씩 입력
 */

const solution = () => {
  let [left, top] = [0, 0]; // 좌측 index, 상단 index
  let [right, bottom] = [n - 1, n - 1]; // 우측 index, 하단 index
  let num = 1; // 입력할 숫자

  // n * n 배열
  let result = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  // 최종 숫자까지 반복
  while (num <= n * n) {
    // NOTE - 상단 행 채우기 (왼쪽 -> 오른쪽)
    for (let i = left; i <= right; i++) {
      result[top][i] = num++;
    }
    // 다 채운 뒤 상단 index++
    top++;

    // NOTE - 우측 열 채우기 (위쪽 -> 아래쪽)
    for (let i = top; i <= bottom; i++) {
      result[i][right] = num++;
    }
    // 다 채운 뒤 우측 index--
    right--;

    // NOTE - 하단 행 채우기 (오른쪽 -> 왼쪽)
    for (let i = right; i >= left; i--) {
      result[bottom][i] = num++;
    }
    // 다 채운 뒤 하단 index--
    bottom--;

    // NOTE - 좌측 열 채우기 (아래쪽 -> 위쪽)
    for (let i = bottom; i >= top; i--) {
      result[i][left] = num++;
    }
    // 다 채운 뒤 좌측 index++
    left++;

    // 한 바퀴 순환한 뒤 다시 처음부터 순환
  }

  return result;
};

console.log(solution());
