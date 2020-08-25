
const assert = require('chai').assert;
const {without} = require('../index')

describe('#without', () => {
  it('should print ["1", "2"] for ["1", "2", "3"], [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
  });
  it('should print ["7"] for ["7", "8", "8"], ["5", "8"]', () => {
    assert.deepEqual(without(["7", "8", "8"], ["5", "8"]), ["7"]);
  })
})
/*
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
assertArraysEqual(without(["7", "8", "8"], ["5", "8"]), ["7"]);

//assertArraysEqual(without([1, 2, 3], [1]), [2,3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
assertArraysEqual(without(["7", "8", "8"], ["5", "8"]), ["7"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

*/