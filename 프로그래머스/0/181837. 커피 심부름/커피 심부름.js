function solution(order) {
  return order.reduce(
    (acc, item) => acc + (item.includes("latte") ? 5000 : 4500),
    0
  );
}