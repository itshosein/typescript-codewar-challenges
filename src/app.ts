import detectPangram from "./detect-pangram/DetectPangram.js";
import squareNumber from "./square-number/SquareNumber.js";
import evenIndex from "./even-index/EvenIndex.js";
import findMissingLetter from "./find-missing-letter/FindMissingLetter.js";
import detectOddOrEvenArray from "./oddOrEvenArray/OddOrEvenArray.js";

const pangramSentence = "The quick brown fox jumps over the lazy dog";
const isPangram = detectPangram(pangramSentence);
console.log(`"${pangramSentence}" ${isPangram ? "is" : "is not"} pangram`);

const numberForSquare = 26;
const isNumberSquare = squareNumber(numberForSquare);
console.log(
  `"${numberForSquare}" ${isNumberSquare ? "is" : "is not"} perfect square`
);

const arrayForEvenIndex = [1, 100, 50, -51, 1, 1];
const arrayEvenIndex = evenIndex(arrayForEvenIndex);
console.log(
  `"even index of ${arrayForEvenIndex} is ${arrayEvenIndex}"`
);

const missingLetter = findMissingLetter(['O','Q','R','S']);
console.log("Missing letter is",missingLetter);

const oddOrEvenArray = detectOddOrEvenArray([]);
console.log("array is",oddOrEvenArray);

