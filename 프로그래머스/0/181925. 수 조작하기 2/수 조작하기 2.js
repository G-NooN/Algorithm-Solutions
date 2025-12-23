function solution(numLog) {
  const [, ...result] = numLog.map((value, index) => {
    if (index > 0) {
      switch (value - numLog[index - 1]) {
        case 1:
          return "w";
        case -1:
          return "s";
        case 10:
          return "d";
        case -10:
          return "a";
      }
    }
  });

  return result.join("");
}