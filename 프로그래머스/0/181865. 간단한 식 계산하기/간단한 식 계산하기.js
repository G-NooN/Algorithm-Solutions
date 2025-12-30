function solution(binomial) {
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  const [a, op, b] = binomial.split(" ");

  return ops[op](Number(a), Number(b));
}