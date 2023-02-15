const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const ages = ['12', '34', '32', '51', '21', '78'];
const results2 = map(ages, age => age[0]);
console.log(results2);

//Testing out map function using assertArraysEqual
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(map(ages, age => age[0]), ['1', '3', '3', '5', '2', '7']);
