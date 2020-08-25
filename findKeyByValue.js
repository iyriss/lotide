const findKeyByValue = function(object, value) {
  //should scan the object
  let answer;
  let topicsArray= Object.keys(object)
  for (let i = 0; i < topicsArray.length; i++) {
    if (object[topicsArray[i]] === value) {
      answer = topicsArray[i];
    }
  } return answer;
}


module.exports = findKeyByValue;