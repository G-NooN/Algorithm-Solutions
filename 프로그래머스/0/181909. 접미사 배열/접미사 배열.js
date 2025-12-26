function solution(my_string) {
  const array = [];

  for (let i = 0; i < my_string.length; i++) {
    array.push(my_string.slice(i));
  }

  return array.sort((a, b) => a.localeCompare(b));
}