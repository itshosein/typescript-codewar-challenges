export default (arr: number[]): number => {
  let leftSum = 0;
  let rightSum = 0;
  let evenIndex = -1;
  for (let index = 0; index < arr.length; index++) {
    if (index > 0) {
      let tempArr = [...arr];
      leftSum = tempArr
        .reverse()
        .slice(arr.length - index)
        .reduce((n1, n2) => n1 + n2);
    } else {
      leftSum = 0;
    }
    if (index + 1 <= arr.length - 1) {
      rightSum = arr.slice(index + 1).reduce((n1, n2) => n1 + n2);
    } else {
      rightSum = 0;
    }
    if (leftSum === rightSum) {
      evenIndex = index;
      break;
    }
  }
  return evenIndex;
};
