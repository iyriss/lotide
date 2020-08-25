// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//The function should report back how many instances of each string
  //were found in the allItems array of strings.

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { //checking if the names of the first names list exists in the object
      if (results[item]) {
        results[item] += 1; //adds to the empty object
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


module.exports = countOnly;