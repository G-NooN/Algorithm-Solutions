function solution(number) {
  const sum = [...number].reduce((acc, value) => acc + Number(value), 0);

  return sum % 9;
}