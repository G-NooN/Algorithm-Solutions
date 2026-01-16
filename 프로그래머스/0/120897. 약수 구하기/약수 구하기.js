function solution(n) {
  const result = new Set([1, n]);

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      result.add(i);
      result.add(n / i);
    }
  }

  return [...result].sort((a, b) => a - b);
}