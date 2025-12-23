function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if (i.toString().replaceAll(/[05]/g, "").length === 0) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
}