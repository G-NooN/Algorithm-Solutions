function solution(arr) {
  const maxLength = Math.max(arr.length, arr[0].length);

  return Array.from({ length: maxLength }, (_, rowIndex) =>
    Array.from(
      { length: maxLength },
      (_, colIndex) => arr[rowIndex]?.[colIndex] ?? 0
    )
  );
}