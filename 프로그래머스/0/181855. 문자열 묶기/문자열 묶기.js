function solution(strArr) {
  const countMap = new Map();

  strArr.forEach((value) => {
    countMap.set(value.length, (countMap.get(value.length) || 0) + 1);
  });

  return Math.max(...[...countMap.values()]);
}