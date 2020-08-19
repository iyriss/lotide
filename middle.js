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

const middle = function(array) {
  let arrLength = array.length;
  let midNum = [];
  if (arrLength === 1 || arrLength === 2) {
    return midNum;
  } else {
    let firstMiddle = array.indexOf(Math.ceil(arrLength / 2));
    if (arrLength % 2 === 0) {
      midNum.push(firstMiddle + 1,firstMiddle + 2);
      //return midNum
    } else if (arrLength % 2 !== 0) {
      midNum.push(firstMiddle + 1);
    } //return midNum;
  } return midNum;
};
 
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]),[[]]);
assertArraysEqual(middle([1, 2]), [[]]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
