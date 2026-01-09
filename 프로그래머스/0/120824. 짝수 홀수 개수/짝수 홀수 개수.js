function solution(num_list) {
  let result = [0, 0];

  num_list.forEach((value) => result[value % 2]++);

  return result;
}