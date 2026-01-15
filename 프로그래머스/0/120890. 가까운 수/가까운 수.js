function solution(array, n) {
  const sortedArray = array.sort((a, b) => a - b);
  const targetArray = sortedArray.map((value) => Math.abs(value - n));

  return sortedArray[targetArray.indexOf(Math.min(...targetArray))];
}