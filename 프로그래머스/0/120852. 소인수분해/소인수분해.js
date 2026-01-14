function solution(n) {
  let result = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      result.push(i);
    }
  }

  return [...new Set(result)];
}