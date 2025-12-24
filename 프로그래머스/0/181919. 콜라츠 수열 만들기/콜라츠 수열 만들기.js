function solution(n) {
  const result = [n];

  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;

    result.push(n);
  }

  return result;
}