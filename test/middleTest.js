const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const test1 = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(test1, [3, 4]);
const test2 = middle([1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(test2, [4]);
const test3 = (middle([1, 2, 3]));
assertArraysEqual(test3, [2]);