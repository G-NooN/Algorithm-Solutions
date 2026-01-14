function solution(s) {
  const array = s.split(" ");
  const result = [];

  array.forEach((value) => {
    value === "Z" ? result.pop() : result.push(value);
  });

  return result.reduce((acc, value) => acc + Number(value), 0);
}