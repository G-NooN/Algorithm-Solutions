function solution(myStr) {
  const result = myStr
    .split("a")
    .flatMap((value) => value.split("b").flatMap((value) => value.split("c")))
    .filter((value) => value.length);

  return result.length ? result : ["EMPTY"];
}