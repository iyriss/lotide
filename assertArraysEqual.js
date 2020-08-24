const eqArrays = require('./eqArrays')

const assertArraysEqual = function(expectedArray, resultArray) {
  if (eqArrays(expectedArray, resultArray)) { 
    console.log(`✅These arrays are equal ${expectedArray} === ${resultArray}`);
  } else {
    console.log(`🛑These arrays are NOT equal ${expectedArray} !== ${resultArray}`);
  }
};


module.exports = assertArraysEqual;