function solution(arr, n) {
  const arrEven = arr.length % 2 === 0;

  return arr.map((value, index) => {
    const indexEven = index % 2 === 0;

    return arrEven
      ? indexEven
        ? value
        : value + n
      : indexEven
      ? value + n
      : value;
  });
}