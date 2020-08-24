const tail = function(remainingWords) {
  let rest = [];
  rest = remainingWords.slice(1);
  return rest;
};

module.exports = tail;