function solution(a, b, c) {
  const sum = a + b + c;
  const doubleSum = [a, b, c].reduce(
    (acc, value) => acc + Math.pow(value, 2),
    0
  );
  const tripleSum = [a, b, c].reduce(
    (acc, value) => acc + Math.pow(value, 3),
    0
  );

  if (a === b && b === c) {
    return sum * doubleSum * tripleSum;
  } else if (a !== b && b !== c && c !== a) {
    return sum;
  } else {
    return sum * doubleSum;
  }
}