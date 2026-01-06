function solution(picture, k) {
  const result = [];

  picture.forEach((value) => {
    const piece = [...value].reduce((acc, curr) => acc + curr.repeat(k), "");

    for (let i = 0; i < k; i++) {
      result.push(piece);
    }
  });

  return result;
}