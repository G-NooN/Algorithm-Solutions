function solution(phone_number) {
  let answer = "";
  let lastFour = phone_number.substring(phone_number.length - 4);

  answer = "*".repeat(phone_number.length - 4).concat(lastFour);

  return answer;
}