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
    console.log(`These arrays are equal ${expectedArray} === ${resultArray}`);
  } else {
    console.log(`These arrays are NOT equal ${expectedArray} !== ${resultArray}`);
  }
};

const without = function(sourceArr, itemsToRemove) {
  let newArr = '';
  for (let i = 0; i < sourceArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArr[i] === itemsToRemove[j]) {
        newArr += sourceArr.splice(i, 1);
        //console.log(sourceArr, "test")
      }
    }
  }
  return sourceArr;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3], [0])) 
console.log(without(["7", "8", "8"], ["0","89"])) 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);