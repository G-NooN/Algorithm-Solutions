function solution(myString) {
  return [...myString]
    .map((value) => {
      switch (value) {
        case "a":
        case "A":
          return "A";
        default:
          return value.toLowerCase();
      }
    })
    .join("");
}