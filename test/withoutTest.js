const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

const price = [2, 3, 5, 8];
without(price, 5);
assertArraysEqual(price, [2, 3, 5, 8]);