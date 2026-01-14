function solution(s) {
  const array = s.split(" ");
  const result = [];

  for (let i = 0; i < array.length; i++) {
    array[i] === "Z" ? result.pop() : result.push(array[i]);
  }

  return result.reduce((acc, value) => acc + Number(value), 0);
}