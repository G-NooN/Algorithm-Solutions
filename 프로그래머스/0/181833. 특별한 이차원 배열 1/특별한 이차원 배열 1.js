function solution(n) {
  return Array.from({ length: n }, (_, index) =>
    Array.from({ length: n }, (_, i) => Number(i === index))
  );
}