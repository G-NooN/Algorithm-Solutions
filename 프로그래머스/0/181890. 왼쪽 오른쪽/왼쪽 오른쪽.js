function solution(str_list) {
  const index = str_list.findIndex((value) => /l|r/.test(value));

  if (index < 0) return [];

  return str_list[index] === "l"
    ? str_list.slice(0, index)
    : str_list.slice(index + 1);
}