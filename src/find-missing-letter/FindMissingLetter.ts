export default (array: string[]): string => {
  let result = "";
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (
      array.length - 1 !== index &&
      array[index + 1] &&
      array[index + 1].charCodeAt(0) - value.charCodeAt(0) > 1
    ) {
      result = String.fromCharCode(array[index].charCodeAt(0) + 1);
      break;
    }
  }
  return result;
};
