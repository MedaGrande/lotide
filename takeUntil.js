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

/*The function takes an array and a callback and returns a part of
an array starting from the beginning until the callback function
returns a truthy value.*/
const takeUntil = function (array, callback) {
  const result = [];
  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      break; //breaking is necessary to prevent the iteration
      //from going into space.
    }
  }
  return result;
};
module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5,7,2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood']);
