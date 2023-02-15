const flatten = require('../flatten');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

const flat = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flat, [1, 2, 3, 4, 5, 6], true);