function solution(arr, queries) {
  const result = queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .sort((a, b) => a - b)
        .find((value) => value > k) ?? -1
  );

  return result;
}