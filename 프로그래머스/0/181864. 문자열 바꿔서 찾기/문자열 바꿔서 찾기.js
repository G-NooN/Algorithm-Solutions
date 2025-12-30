function solution(myString, pat) {
  const reversed = [...pat]
    .map((value) => (value === "A" ? "B" : "A"))
    .join("");

  return Number(myString.includes(reversed));
}