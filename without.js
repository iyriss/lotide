const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
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


const without = function(source, itemsToRemove) {
  let myNewArr = [];
  for (const element in source) {
    for (const item in itemsToRemove) {
      if (typeof source[element] === typeof itemsToRemove[item]) {
      if (source[element] !== itemsToRemove[item])
          myNewArr.push(source[element])
        } 
      } 
  } return myNewArr;
}

/*
const without = function(source, itemsToRemove) { 
  let myNewArr = []; 
  for (const element in source) { 
    if (!itemsToRemove.includes(source[element])) { 
      myNewArr.push(source[element]) 
    } 
  } 
  return myNewArr;
}

*/
//assertArraysEqual(without([1, 2, 3], [1]), [2,3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
assertArraysEqual(without(["7", "8", "8"], ["5", "8"]), ["7"]);
/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/