function solution(ineq, eq, n, m) {
  let result;

  switch (eq) {
    case "=":
      result = ineq === ">" ? n >= m : n <= m;
      break;
    case "!":
      result = ineq === ">" ? n > m : n < m;
      break;
  }

  return Number(result);
}