const letterPositions = function (sentence) {
  const results = {};
  const newSentence = sentence.split('');
  
  for (let i = 0; i < newSentence.length; i++) {
    if (!results[newSentence[i]]) {
      results[newSentence[i]] = [];
    }
    if (results[newSentence[i]]) {
      results[newSentence[i]].push(i);
    }

    delete results[' '];
  }
  return results;
};
module.exports = letterPositions;
