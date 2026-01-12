function solution(numbers, direction) {
  switch (direction) {
    case "left":
      return [...numbers.slice(1), ...numbers.slice(0, 1)];
    case "right":
      return [...numbers.slice(-1), ...numbers.slice(0, -1)];
  }
}