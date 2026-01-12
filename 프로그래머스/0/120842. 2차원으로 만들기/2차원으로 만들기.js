function solution(num_list, n) {
  return Array.from({ length: num_list.length / n }, (_, index) =>
    num_list.slice(index * n, (index + 1) * n)
  );
}