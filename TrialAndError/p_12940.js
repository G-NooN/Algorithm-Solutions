/*
  <문제(Lv. 1) - 최대공약수와 최소공배수>

  두 개의 정수 n과 m이 주어졌을 때, 두 수의 최대공약수와 최소공배수를 배열 형태로 return하는 solution 함수를 완성하라.

  배열의 앞에는 최대공약수를, 뒤에는 최소공배수를 넣어 반환한다.

  예를 들어, 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로, solution(3, 12)는 [3,12]를 반환한다.

  [제한 사항]
  1. 두 수는 1 이상, 1,000,000 이하인 자연수다.
*/

/*
  [접근 방식]
  1. 입력값 : 자연수 2개 / 출력값 : 두 수의 [최대공약수, 최소공배수] 배열
  2. 최대공약수(GCD: Greatest Common Divisor) : 공약수 중 가장 큰 수
  2-1. 주어진 자연수들을 공약수로 나눴을 때 모두 나누어 떨어진다.
  2-2. 공약수는 입력값으로 주어진 값 중 최소값보다 클 수 없다.
  2-3. 따라서, 입력값들 중 작은 수를 구한 뒤, 1부터 해당 수까지 반복문을 수행하여 나눠지는 가장 큰 수를 반환한다.
  3. 최소공배수(LCM: Least Common Multiple) : 공배수 중 가장 작은 수
  3-1. 최소공배수의 법칙
  : 2개의 자연수 a, b에 대하여, a와 b의 최소공배수는 a * b를 최대공약수로 나눈 값과 같다.
*/

function solution(n, m) {
  let answer = [];
  let gcd = 0;
  let lcm = 0;

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  lcm = (m * n) / gcd;

  answer = [gcd, lcm];

  return answer;
}

// console.log(solution(3, 12));
// console.log(solution(2, 5));

/* -------------------- */

/*
  [개선 방안]
  최대공약수 - 유클리드 호제법(Euclidean Algorithm)
  : 2개의 자연수 a, b에 대하여, a % b === r 이면, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

  [사용방법1 - 재귀 함수]
  function gcd(a, b) {
    if (Math.min(a, b) === 0) return Math.max(a, b);
    else return gcd(Math.min(a, b), Math.max(a, b) % Math.min(a, b));
  }

  [사용방법2 - 반복문]
  function gcd(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    while (max % min !== 0) {
      let r = max % min;
      max = min;
      min = r;
    }
    return min;
  }
*/

function solution1(n, m) {
  let gcdResult = [];
  let answer = [];

  gcdResult = [gcd1(n, m), gcd2(n, m)];

  answer = [...gcdResult, (n * m) / gcd1(n, m), (n * m) / gcd2(n, m)];
  return answer;
}

// 최대공약수 구하기 (재귀 함수 ver.)
function gcd1(a, b) {
  if (Math.min(a, b) === 0) return Math.max(a, b);
  else return gcd1(Math.min(a, b), Math.max(a, b) % Math.min(a, b));
}

// 최대공약수 구하기 (반복문 ver.)
function gcd2(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  while (max % min !== 0) {
    let r = max % min;
    max = min;
    min = r;
  }
  return min;
}

// console.log(solution1(3, 12));
// console.log(solution1(2, 5));

/* -------------------- */

/*
  [초기 접근 방식]
  최소공배수(LCM: Least Common Multiple) : 공배수 중 가장 작은 수
  1. 공배수를 주어진 자연수들로 나눴을 때 모두 나누어 떨어진다.
  2. 공배수는 입력값으로 주어진 값 중 최대값보다 작을 수 없다.
  3. 따라서, 입력값들 중 큰 수를 구한 뒤 주어진 입력값들로 나눠지는 가장 작은 수를 반환한다.
  4. 근데 어떻게...???
*/
