function solution(code) {
  const array = code.split("");

  const result = [];
  let mode = false;

  array.forEach((value, index) => {
    const indexEven = index % 2 === 0;

    if (!isNaN(value)) {
      mode = !mode;
    } else if (!mode && indexEven) {
      result.push(value);
    } else if (mode && !indexEven) {
      result.push(value);
    }
  });

  return result.length > 0 ? result.join("") : "EMPTY";
}