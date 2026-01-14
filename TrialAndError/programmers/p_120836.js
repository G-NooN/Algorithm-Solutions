/**
 * <순서쌍의 개수>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120836
 */

// NOTE - 공통 상위 코드
const n = 20;
let count = 0;

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 약수 = n / i 가 정수
 * : Number.isInteger() 로 정수 판별
 */

const pastSolution = () => {
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) count++;
  }

  return count;
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
 * NOTE - 포인트
 * : 약수가 발견될 때마다 count += 2
 * : i * i = N 인 경우 (i, i) 가 2번 count 되기 때문에 count - 1
 *
 * !SECTION
 */

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : i * i <= n 을 반복문 조건으로 설정
 * : Math.sqrt(n) 의 정수 여부로 (i,i) 보유 여부 확인
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 36.8 MB -> 33.5 MB / 시간 : 4.72 ms -> 0.16 ms)
 * : 시간 복잡도 개선 (O(n) -> O(sqrt(n)))
 */

const solution = () => {
  for (let i = 1; i * i <= n; i++) {
    if (Number.isInteger(n / i)) count += 2;
  }

  return Number.isInteger(Math.sqrt(n)) ? count - 1 : count;
};

console.log(solution());
