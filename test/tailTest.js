const tail = require('../tail');
const assertEqual = require('../assertEqual');

const test1 = [1, 2, 3];
//console.log(tail(test1));
assertEqual(tail(test1).length, 2);