function solution(arr, intervals) {
  return intervals.flatMap(([start, end]) => [...arr.slice(start, end + 1)]);
}