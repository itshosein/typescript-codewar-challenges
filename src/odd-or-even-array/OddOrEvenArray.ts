export default (array: number[]) =>
  array.reduce((p1, p2) => p1 + p2, 0) % 2 ? "odd" : "even";