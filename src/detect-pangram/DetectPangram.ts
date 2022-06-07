export default (phrase: string): boolean => {
  const trimmedPhrase = phrase.trim().replaceAll(" ", "").toLowerCase();
  const alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  for (const char of trimmedPhrase) {
    const indexOfChar = alphabetArr.findIndex((alphabet) => alphabet === char);
    if (indexOfChar >= 0) {
      alphabetArr.splice(indexOfChar,1);
    }
  }
  return !alphabetArr.length;
};