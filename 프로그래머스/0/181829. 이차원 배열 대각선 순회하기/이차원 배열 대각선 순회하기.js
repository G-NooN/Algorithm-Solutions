function solution(board, k) {
  let total = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; i + j <= k && j < board[0].length; j++) {
      total += board[i][j];
    }
  }

  return total;
}