function solution(picture, k) {
  const result = [];

  picture.forEach((value) => {
    for (let i = 0; i < k; i++) {
      const piece = [...value].map((letter) => letter.repeat(k));
      result.push(piece.join(""));
    }
  });

  return result;
}