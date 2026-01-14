function solution(my_string) {
  return [...my_string]
    .filter((value) => !isNaN(value))
    .map(Number)
    .sort((a, b) => Number(a) - Number(b));
}