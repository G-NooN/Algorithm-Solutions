function solution(num_list) {
  const evenNumber = num_list.filter((value) => value % 2 === 0).join("");
  const oddNumber = num_list.filter((value) => value % 2 !== 0).join("");

  return Number(evenNumber) + Number(oddNumber);
}