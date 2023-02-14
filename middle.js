const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length > 2) {
    const newArray = [];
    let i;
    let m;
    if (array.length % 2 !== 0) {
      i = Math.floor(array.length / 2);
      newArray.push(array[i]);
      return newArray;
    } else {
      i = array.length / 2;
      m = i - 1;
      newArray.push(array[m]);
      newArray.push(array[i]);
      return newArray;
    }
  } else {
    return [];
  }
};
module.exports = middle;

