function solution(n) {
  let [left, top] = [0, 0];
  let [right, bottom] = [n - 1, n - 1];

  let num = 1;

  let result = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      result[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      result[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      result[i][left] = num++;
    }
    left++;
  }

  return result;
}