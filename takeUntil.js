const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (!callback(item)) {
      newArray.push(item)
    } else {
      break;
    }
  } return newArray;
}


//The function will return a "slice of the array with elements taken from the beginning." 
//It should keep going until the callback/predicate returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

assertArraysEqual(results1,([ 1, 2, 5, 7, 2 ]));
assertArraysEqual(results2,([ 'I\'ve', 'been', 'to', 'Hollywood' ]));
