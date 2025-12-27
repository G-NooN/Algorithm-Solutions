function solution(arr, intervals) {
  let result = [];

  intervals.forEach((value) => {
    const [start, end] = value;

    result = [...result, ...arr.slice(start, end + 1)];
  });

  return result;
}