function solution(my_string, queries) {
  const result = queries.reduce((acc, [s, e]) => {
    const slicedString = [...acc].slice(s, e + 1);
    const reversedSlicedString = [...slicedString].reverse();
    return [...acc.slice(0, s), ...reversedSlicedString, ...acc.slice(e + 1)];
  }, my_string);

  return result.join("");
}