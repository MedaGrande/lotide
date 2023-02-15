const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  str = str.replaceAll(' ', '');
  const counts = {};
  const newStr = str.split('');
  for (const letter of newStr) {
    if (counts[letter]) {
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
};
module.exports = countLetters;