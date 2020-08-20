//we will take two arguments in a map function
//an array to map and a call back function

//The map function will return a new 
//array based on the results of the callback function.

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map (words, word => word[0]); //function(word) {return word[0]}
console.log(results1);

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

assertArraysEqual(results1,([ 'g', 'c', 't', 'm', 't' ]));