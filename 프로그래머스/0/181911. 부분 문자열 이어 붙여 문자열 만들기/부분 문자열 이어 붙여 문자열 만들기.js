function solution(my_strings, parts) {
  const result = my_strings.map((value, index) => {
    const [start, end] = parts[index];

    return value.slice(start, end + 1);
  });

  return result.join("");
}