function solution(arr) {
  const startIndex = arr.indexOf(2);
  const lastIndex = arr.lastIndexOf(2);

  const result = arr.slice(startIndex, lastIndex + 1);

  return result.length ? result : [-1];
}