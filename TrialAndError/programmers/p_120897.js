/**
 * <약수 구하기>
 *
 * - 레벨 : Lv. 0
 * - 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120897
 */

// NOTE - 공통 상위 코드
const n = 24;

/**
 * NOTE - 1st Trial (Fail)
 * - 포인트
 * : 1 과 자기 자신은 기본 약수
 * : i 가 약수면 n / i 도 약수
 * : i * i 를 기준으로 대칭이므로 i * i <= n 을 반복문 조건으로 설정
 * : 최종 결과 배열 정렬
 * - 실패 원인
 * : 중복 발생 가능
 * (반례 : 1 => [1, 1])
 */

const failedSolution = () => {
  const result = [1, n];

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
      result.push(n / i);
    }
  }

  return result.sort((a, b) => a - b);
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : Set 으로 중복 제거
 */

const solution = () => {
  const result = new Set();

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      result.add(i);
      result.add(n / i);
    }
  }

  return [...result].sort((a, b) => a - b);
};

console.log(solution());
