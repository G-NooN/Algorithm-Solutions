function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    const [...value] = i.toString();

    if (value.every((letter) => letter == "5" || letter == "0")) {
      result.push(i);
    }
  }

  if (!result.length) {
    result.push(-1);
  }

  return result;
}