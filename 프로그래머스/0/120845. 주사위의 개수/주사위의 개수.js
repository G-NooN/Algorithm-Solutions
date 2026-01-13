function solution(box, n) {
  const sortedBox = box.sort((a, b) => a - b);

  let count = 0;

  count = Math.floor(sortedBox[0] / n);
  count *= Math.floor(sortedBox[1] / n);
  count *= Math.floor(sortedBox[2] / n);

  return count;
}