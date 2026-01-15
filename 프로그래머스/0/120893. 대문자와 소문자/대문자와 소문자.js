function solution(my_string) {
  return [...my_string]
    .map((letter) =>
      letter.charCodeAt(0) - "a".charCodeAt(0) >= 0
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join("");
}