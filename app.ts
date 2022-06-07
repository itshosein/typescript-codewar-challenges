import detectPangram from "./src/detect-pangram/DetectPangram.js";
import squareNumber from "./src/square-number/SquareNumber.js";

const pangramSentence = "The quick brown fox jumps over the lazy dog";
const isPangram = detectPangram(pangramSentence);
console.log(`"${pangramSentence}" ${isPangram ? "is" : "is not"} pangram`);

const numberForSquare = 26;
const isNumberSquare = squareNumber(numberForSquare);
console.log(`"${numberForSquare}" ${isNumberSquare ? "is" : "is not"} perfect square`);
