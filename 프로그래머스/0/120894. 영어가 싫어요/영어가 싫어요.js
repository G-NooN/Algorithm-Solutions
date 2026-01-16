const numberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

function solution(numbers) {
  const regex = /one|two|three|four|five|six|seven|eight|nine|zero/g;
  const result = numbers.replace(regex, (match) => numberMap[match]);

  return Number(result);
}