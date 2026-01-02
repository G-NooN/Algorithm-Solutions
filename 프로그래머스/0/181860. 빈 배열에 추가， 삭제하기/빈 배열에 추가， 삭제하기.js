function solution(arr, flag) {
  return arr.reduce(
    (acc, value, index) =>
      flag[index]
        ? [...acc, ...Array.from({ length: value * 2 }, () => value)]
        : acc.slice(0, -value),
    []
  );
}