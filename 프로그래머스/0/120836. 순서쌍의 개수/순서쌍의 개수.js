function solution(n) {
  let count = 0;

  for (let i = 1; i * i <= n; i++) {
    if (Number.isInteger(n / i)) count += 2;
  }

  return Number.isInteger(Math.sqrt(n)) ? count - 1 : count;
}