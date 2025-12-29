function solution(num_list) {
  return num_list.length > 10
    ? num_list.reduce((acc, value) => acc + value, 0)
    : num_list.reduce((acc, value) => acc * value, 1);
}