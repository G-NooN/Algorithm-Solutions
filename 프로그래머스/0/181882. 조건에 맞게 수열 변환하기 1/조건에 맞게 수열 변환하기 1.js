function solution(arr) {
  return arr.map((value) => {
    const over50 = value >= 50;
    const even = value % 2 === 0;

    if (over50 && even) {
      return value / 2;
    }
    if (!over50 && !even) {
      return value * 2;
    }
    return value;
  });
}