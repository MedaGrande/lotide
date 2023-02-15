//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    } else {
      newArray.push(...array[i]);
    }
  }
  return newArray;
  
};
module.exports = flatten;


// const flat = flatten([1, 2, [3, 4], 5, [6]]);
// assertArraysEqual(flat, [1, 2, 3, 4, 5, 6], true);