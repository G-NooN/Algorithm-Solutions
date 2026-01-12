function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) count++;
  }

  return count;
}