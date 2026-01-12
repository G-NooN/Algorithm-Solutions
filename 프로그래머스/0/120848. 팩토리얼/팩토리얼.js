function solution(n) {
  let [factorial, count] = [1, 1];

  while (factorial < n) {
    count++;
    factorial *= count;
  }

  return factorial === n ? count : count - 1;
}