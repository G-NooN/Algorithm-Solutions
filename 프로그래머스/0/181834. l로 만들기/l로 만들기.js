function solution(myString) {
  return [...myString]
    .map((value) => ("l".charCodeAt(0) - value.charCodeAt(0) > 0 ? "l" : value))
    .join("");
}