function solution(my_string) {
  return [...my_string]
    .map((letter) =>
      /[a-z]/.test(letter) ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
}