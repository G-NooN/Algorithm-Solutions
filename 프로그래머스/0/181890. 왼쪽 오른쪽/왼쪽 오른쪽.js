function solution(str_list) {
  const lIndex = str_list.findIndex((value) => value === "l");
  const rIndex = str_list.findIndex((value) => value === "r");

  if (lIndex < 0 && rIndex < 0) return [];
  else if (lIndex >= 0 && rIndex >= 0) {
    return lIndex < rIndex
      ? str_list.slice(0, lIndex)
      : str_list.slice(rIndex + 1);
  } else
    return lIndex >= 0 ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
}