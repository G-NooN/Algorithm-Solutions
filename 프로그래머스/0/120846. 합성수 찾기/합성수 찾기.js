function solution(n) {
  let array = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 2; i * i <= n; i++) {
    array = array.filter((value) => value % i !== 0 || value <= i);
  }

  return n - array.length;
}