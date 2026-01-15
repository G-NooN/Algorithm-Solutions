function solution(array, n) {
  const [result] = array.sort(
    (a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b
  );

  return result;
}