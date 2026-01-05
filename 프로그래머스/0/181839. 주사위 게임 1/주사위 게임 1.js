function solution(a, b) {
  if ([a, b].every((value) => value % 2 === 0)) {
    return Math.abs(a - b);
  }

  if ([a, b].every((value) => value % 2 !== 0)) {
    return Math.pow(a, 2) + Math.pow(b, 2);
  }

  return 2 * (a + b);
}