function solution(array) {
  return array
    .sort((a, b) => a - b)
    .find((_, index) => index === Math.floor(array.length / 2));
}