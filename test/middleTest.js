//const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual')

const assert = require('chai').assert;
const {middle} = require('../index')

/*assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]),[[]]);
assertArraysEqual(middle([1, 2]), [[]]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
*/
describe("#middle", () => {
  it("should return [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
  });
  it("should return [2] for [1, 2, 3] ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
})