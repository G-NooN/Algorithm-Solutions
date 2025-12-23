function solution(arr, queries) {
  const result = queries.map(
    ([s, e, k]) => {
      const values = arr.slice(s, e + 1).filter((value) => value > k);
      return values.length ? Math.min(...values) : -1;
    }
  );

  return result;
}