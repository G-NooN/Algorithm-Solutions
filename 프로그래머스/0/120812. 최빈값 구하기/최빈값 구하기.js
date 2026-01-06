function solution(array) {
  const arrayMap = new Map();

  array.forEach((value) => arrayMap.set(value, (arrayMap.get(value) || 0) + 1));

  const maxCount = Math.max(...[...arrayMap.values()]);

  const result = [...arrayMap.keys()].filter(
    (value) => arrayMap.get(value) === maxCount
  );

  return result.length === 1 ? result.pop() : -1;
}