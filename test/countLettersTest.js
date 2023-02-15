const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

const test1 = "test for today";
const result1 = countLetters(test1);

assertEqual(result1["t"], 3);
assertEqual(result1["e"], 1);
assertEqual(result1["s"], 1);
assertEqual(result1["o"], 2);