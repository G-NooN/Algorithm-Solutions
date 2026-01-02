function solution(arr) {
  return arr.reduce(
    (acc, value) => [...acc, ...Array.from({ length: value }, () => value)],
    []
  );
}