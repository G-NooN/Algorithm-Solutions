function solution(arr) {
  const valueLength = arr[0].length;
  const diff = Math.abs(arr.length - valueLength);

  if (valueLength > arr.length) {
    return arr.concat(
      Array.from({ length: diff }, () =>
        Array.from({ length: valueLength }, () => 0)
      )
    );
  } else if (valueLength < arr.length) {
    return arr.map((value) => [
      ...value,
      ...Array.from({ length: diff }, () => 0),
    ]);
  } else return arr;
}