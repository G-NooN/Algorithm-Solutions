const getMappedArray = (array) => {
  return array.map((value) => {
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
};

function solution(arr) {
  let count = 0;

  while (true) {
    let mappedArray = getMappedArray(arr);

    if (!mappedArray.every((value, index) => value === arr[index])) {
      arr = mappedArray;
      count++;
    } else return count;
  }
}