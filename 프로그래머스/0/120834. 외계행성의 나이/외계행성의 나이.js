function solution(age) {
  return [...String(age)]
    .map((value) => String.fromCharCode(97 + Number(value)))
    .join("");
}