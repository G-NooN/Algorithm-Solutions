function solution(myString) {
  return myString
    .split("x")
    .filter((value) => value.length)
    .sort((a, b) => a.localeCompare(b));
}