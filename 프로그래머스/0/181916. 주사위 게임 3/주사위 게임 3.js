function solution(a, b, c, d) {
  const array = [a, b, c, d];
  const arrayMap = new Map();

  array.forEach((value) => {
    arrayMap.set(value, (arrayMap.get(value) || 0) + 1);
  });

  const sortedArray = [...arrayMap.keys()].sort(
    (a, b) => arrayMap.get(b) - arrayMap.get(a)
  );
  const maxCount = Math.max(...[...arrayMap.values()]);

  const [p, q, r] = sortedArray;

  switch (sortedArray.length) {
    case 1:
      return 1111 * p;
    case 2:
      return maxCount === 3
        ? Math.pow(10 * p + q, 2)
        : (p + q) * Math.abs(p - q);
    case 3:
      return q * r;
    case 4:
      return Math.min(...array);
  }
}