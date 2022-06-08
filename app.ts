import detectPangram from "./src/detect-pangram/DetectPangram.js";
import squareNumber from "./src/square-number/SquareNumber.js";
import evenIndex from "./src/even-index/EvenIndex.js";

const pangramSentence = "The quick brown fox jumps over the lazy dog";
const isPangram = detectPangram(pangramSentence);
console.log(`"${pangramSentence}" ${isPangram ? "is" : "is not"} pangram`);

const numberForSquare = 26;
const isNumberSquare = squareNumber(numberForSquare);
console.log(`"${numberForSquare}" ${isNumberSquare ? "is" : "is not"} perfect square`);

const arrayForEvenIndex = [1,100,50,-51,1,1] ;
const arrayEvenIndex = evenIndex(arrayForEvenIndex);
console.log(`"even index of ${arrayForEvenIndex.reverse()} is ${arrayEvenIndex}"`);
