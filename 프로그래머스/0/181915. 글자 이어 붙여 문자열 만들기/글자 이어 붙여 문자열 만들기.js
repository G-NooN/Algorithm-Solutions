function solution(my_string, index_list) {
  const result = [];

  index_list.forEach((index) => {
    result.push(my_string[index]);
  });

  return result.join("");
}