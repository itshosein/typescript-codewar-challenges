export default (words: string): string => {
  return  words
    .split(" ")
    .map((value) => {
      let valueTemp = value;
      if (value.length >= 5) {
        valueTemp = value.split("").reverse().join("");
      }
      return valueTemp;
    })
    .join(" ");
};
