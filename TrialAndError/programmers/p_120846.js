/**
 * <합성수 찾기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120846
 */

// NOTE - 공통 상위 코드
const n = 10;

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 기본적으로 1과 n 은 약수에 해당
 * : 최소 합성수 = 4
 * : 4부터 n 까지 반복하여 합성수 여부 탐색
 *   - 4 이상 n 이하의 수 i 에 대하여
 *     : 2부터 i-1 까지의 수 j 에 대하여, i % j === 0 인 경우, count++
 * : 최종적으로 count 가 존재하는 수 = (1, count 개수, n) => 합성수
 */

const pastSolution = () => {
  let result = 0;

  for (let i = 4; i <= n; i++) {
    let count = 0;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        count++;
      }
    }

    if (count > 0) {
      result++;
    }
  }

  return result;
};

/**
 * SECTION - 규칙
 *
 * NOTE - 규칙 1
 * : 숫자 N 에 대하여 (a,b) 가 악수인 경우 (b,a) 도 약수
 * => i 가 약수면 N / i 도 약수 (i * N/i = N)
 *
 * NOTE - 규칙 2
 * : i * i = N 인 경우 모든 약수 조합이 (i,i) 를 기점으로 대칭
 * => 약수 i 의 최대값 = Math.sqrt(N)
 *
 * NOTE - 규칙 3
 * 에라토스테네스의 체
 * : 소수 찾기 알고리즘
 * : 2부터 Math.sqrt(n) 까지의 숫자 i 에 대하여 n % i !== 0 인 경우, n 은 소수
 * : i % 이전의 소수 === 0 이 되어 제거될 수 있기 때문에 이전의 소수는 유지되어야 함
 *
 * NOTE - 포인트
 * : 소수가 아닌 수 = 1, n 을 제외하고도 다른 약수가 존재 = 합성수
 * => 소수를 찾아서 전체 숫자 리스트에서 제외
 *
 * !SECTION
 */

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : 에라토스테네스의 체 공식 사용
 * : value <= i 로 이전 소수 유지
 * : 전체 배열에서 소수 배열 제외 = 합성수 배열
 * - 효과
 * : 시간복잡도 개선 (O(n^2) -> O(n log log n))
 */

const solution = () => {
  let array = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 2; i * i <= n; i++) {
    array = array.filter((value) => value % i !== 0 || value <= i);
  }

  return n - array.length;
};

console.log(solution());
