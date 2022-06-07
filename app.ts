import detectPangram from "./src/detect-pangram/DetectPangram.js";

const pangramSentence = "The quick brown fox jumps over the lazy dog";

const isPangram = detectPangram(pangramSentence);
console.log(`the "${pangramSentence}" ${isPangram ? "is" : "is not" } pangram`);
