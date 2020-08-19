// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function (firstArr, secondArr){
  for (let i = 0; i < firstArr.length; i++) {
    //for (let j = 0; j < secondArr.length; j++) {
      console.log(firstArr[i], i, 'i');
      console.log(secondArr[i], i, 'i')
      console.log('======')
        if (firstArr[i] !== secondArr[i]) {
        return false
      //} 
    }
  } 
  return true;
}
//Tests
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

