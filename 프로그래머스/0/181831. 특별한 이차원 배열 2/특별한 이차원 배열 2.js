function solution(arr) {
  const result = arr.every((row, rowIndex) =>
    row.every(
      (_, colIndex) => arr[rowIndex][colIndex] === arr[colIndex][rowIndex]
    )
  );

  return Number(result);
}