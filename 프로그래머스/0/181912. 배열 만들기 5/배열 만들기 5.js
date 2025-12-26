function solution(intStrs, k, s, l) {
  const result = intStrs
    .map((value) => value.slice(s, s + l))
    .filter((value) => Number(value) > k)
    .map(Number);

  return result;
}