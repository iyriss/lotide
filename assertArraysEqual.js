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


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

