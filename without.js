
/*const without = function(source, itemsToRemove) {
  return source.filter(element => !itemsToRemove.includes(element))
} */

const without = function (source, itemsToRemove) {
  let myNewArr = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      myNewArr.push(element);
    }
  }
  return myNewArr;
};

console.log(without(["7", "8", "8"], ["5", "8"]))
  
module.exports = without;
