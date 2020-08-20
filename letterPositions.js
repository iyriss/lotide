const eqArrays = function(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(expectedArray, resultArray) {
  if (eqArrays(expectedArray, resultArray)) {
    console.log(`Passed: ${expectedArray} === ${resultArray}`);
  } else {
    console.log(`Failed: ${expectedArray} !== ${resultArray}`);
  }
};

const letterPositions = function(sentence) {
  let results = {};
  for (let y = 0; y < sentence.length; y++) {
    if (sentence[y] !== ' ') {
      if (results [sentence[y]]) {
        results[sentence[y]].push(y)
      } else {
        results[sentence[y]] = [y]
      }
    }
  } return results;
};

console.log(letterPositions('hello'));

assertArraysEqual(letterPositions("hello").e, [1]);
