export default (number: number): string => {
  let mainRomansNumber = [
    {
      number: 1,
      roman: "I",
    },
    {
      number: 5,
      roman: "V",
    },
    {
      number: 10,
      roman: "X",
    },
    {
      number: 50,
      roman: "L",
    },
    {
      number: 100,
      roman: "C",
    },
    {
      number: 500,
      roman: "D",
    },
    {
      number: 1_000,
      roman: "M",
    },
  ];
  let result = "";
  let tmpNumber = number;

  while (tmpNumber > 0) {
    console.log(tmpNumber);
    for (let index = mainRomansNumber.length - 1; index >= 0 ; index--) {
      const romans = mainRomansNumber[index];
      if (tmpNumber - romans.number >= 0) {
        result += romans.roman;
        tmpNumber = tmpNumber - romans.number;
        break;
      }
    }
  }
  

  return result;
  // convert the number to a roman numeral
};
