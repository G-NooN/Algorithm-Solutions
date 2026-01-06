function solution(order) {
  return order.reduce(
    (acc, item) => (item.includes("latte") ? acc + 5000 : acc + 4500),
    0
  );
}