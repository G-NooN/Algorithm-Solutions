function solution(num_list) {
  const { length } = num_list;
  const [a, b] = [num_list[length - 2], num_list[length - 1]];

  num_list.push(a < b ? b - a : 2 * b);

  return num_list;
}