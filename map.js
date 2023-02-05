const eqArrays = function (array1, array2) {
  let check;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        check = true;
      }
    }
    return check;
  }
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

/********************************************************************/

const map = function (array, callback) {
  //takes an array and a callback function as parameters
  const results = [];
  for (let item of array) {
    //push item to result after it went through the callback
    results.push(callback(item));
  }
  return results;
};
// Running our map function
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
