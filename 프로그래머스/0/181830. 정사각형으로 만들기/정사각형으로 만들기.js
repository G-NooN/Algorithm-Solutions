function solution(arr) {
  const valueLength = arr[0].length;

  if (valueLength > arr.length) {
    return arr.concat(
      Array.from({ length: valueLength - arr.length }, () =>
        Array.from({ length: valueLength }, () => 0)
      )
    );
  } else if (valueLength < arr.length) {
    return arr.map((value) => [
      ...value,
      ...Array.from({ length: arr.length - valueLength }, () => 0),
    ]);
  } else return arr;
}