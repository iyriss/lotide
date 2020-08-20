const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
 let wordCount = {};
 for (const letter of word) {
   if (letter !== ' ') {
      if (wordCount[letter]) {
        wordCount[letter] += 1;
  } else {
    wordCount[letter] = 1;
      }
    } 
  } 
  return wordCount;
}

console.log(countLetters('lighthouse in the house'))
