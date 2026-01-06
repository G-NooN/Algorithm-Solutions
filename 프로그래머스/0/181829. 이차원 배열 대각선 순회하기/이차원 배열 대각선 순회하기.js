function solution(board, k) {
  return board.reduce(
    (total, row, i) =>
      total + row.reduce((acc, value, j) => (i + j > k ? acc : acc + value), 0),
    0
  );
}