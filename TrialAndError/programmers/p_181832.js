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
 * : 최종 결과 배열 (n * n) 생성 후 0으로 초기화
 * : 나선형 (→ ↓ ← ↑) 로직이 동작할 상하좌우 최소/최대 좌표를 변수로 선언
 * : 각 좌표 이동 로직을 선언
 *   - 좌표를 이동하며, 각 좌표에 num++ 값을 입력
 * : 각 로직이 완료된 이후, 나선형 로직의 동작 좌표 최소/최대값을 하나씩 ++ / --
 * : 최종적으로 num 이 n * n 이 될 때까지 나선형 로직 반복
 */

const solution = () => {
  let [left, top] = [0, 0]; // 좌표 최소값 (좌측, 상단)
  let [right, bottom] = [n - 1, n - 1]; // 좌표 최대값 (우측, 하단)
  let num = 1; // 입력할 숫자

  // 최종 배열 (n * n) 생성
  let result = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  // 최종 숫자까지 반복
  while (num <= n * n) {
    // NOTE - 상단 행 채우기 (왼쪽 -> 오른쪽)
    for (let i = left; i <= right; i++) {
      result[top][i] = num++;
    }
    // 다 채운 뒤 상단 좌표 최소값++
    top++;

    // NOTE - 우측 열 채우기 (위쪽 -> 아래쪽)
    for (let i = top; i <= bottom; i++) {
      result[i][right] = num++;
    }
    // 다 채운 뒤 우측 좌표 최대값--
    right--;

    // NOTE - 하단 행 채우기 (오른쪽 -> 왼쪽)
    for (let i = right; i >= left; i--) {
      result[bottom][i] = num++;
    }
    // 다 채운 뒤 하단 좌표 최대값--
    bottom--;

    // NOTE - 좌측 열 채우기 (아래쪽 -> 위쪽)
    for (let i = bottom; i >= top; i--) {
      result[i][left] = num++;
    }
    // 다 채운 뒤 좌측 좌표 최소값++
    left++;

    // 한 바퀴 순환한 뒤 다시 처음부터 순환
  }

  return result;
};

console.log(solution());
