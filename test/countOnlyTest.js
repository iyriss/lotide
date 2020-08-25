const assert = require('chai').assert;
const {countOnly} = require('../index')

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

  it('should return 1 for "Jason"', () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true }), { "Jason": 1 })
  });
  it('should return undefined for "Karima"', () => {
    assert.deepEqual(countOnly(firstNames, {"Karima": true}), {})
  });
});

/*
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);*/
