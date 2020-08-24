const middle = function(array) {
  let arrLength = array.length;
  let midNum = [];
  if (arrLength <= 2) {
    return [];
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

module.exports = middle;