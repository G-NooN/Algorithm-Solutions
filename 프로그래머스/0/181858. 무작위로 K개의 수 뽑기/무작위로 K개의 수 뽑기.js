function solution(arr, k) {
  const arraySet = new Set(arr);

  return arraySet.size >= k
    ? [...arraySet].slice(0, k)
    : [...arraySet, ...Array.from({ length: k - arraySet.size }, () => -1)];
}