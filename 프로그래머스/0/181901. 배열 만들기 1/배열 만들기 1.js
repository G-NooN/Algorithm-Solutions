function solution(n, k) {
  return Array.from({ length: n }, (_, index) => index + 1).filter(
    (value) => value % k === 0
  );
}