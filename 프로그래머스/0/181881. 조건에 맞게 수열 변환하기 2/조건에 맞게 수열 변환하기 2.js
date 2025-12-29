function solution(arr) {
  let count = 0;
  let mappedArray = [];

  while (!arr.every((value, index) => value === mappedArray[index])) {
    mappedArray = [...arr];

    arr = arr.map((value) => {
      const over50 = value >= 50;
      const even = value % 2 === 0;

      if (over50 && even) {
        return value / 2;
      }
      if (!over50 && !even) {
        return value * 2 + 1;
      }
      return value;
    });

    count++;
  }

  return count - 1;
}