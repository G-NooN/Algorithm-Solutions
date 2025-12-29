function solution(num_list) {
  return num_list
    .map((num) => Math.floor(Math.log2(num)))
    .reduce((acc, value) => acc + value, 0);
}