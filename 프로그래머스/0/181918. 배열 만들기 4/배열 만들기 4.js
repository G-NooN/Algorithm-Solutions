function solution(arr) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    if (!result.length) {
      result.push(arr[i]);
      i++;
    }

    let lastValue = [...result].pop();

    if (lastValue < arr[i]) {
      result.push(arr[i]);
      i++;
    } else {
      result = result.slice(0, -1);
    }

    lastValue = [...result].pop();
  }

  return result;
}