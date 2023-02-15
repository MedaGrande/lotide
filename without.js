const eqArrays = function(array1, array2) {
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(array1, array2) {
  const newArray = array1.slice(0, array1.length);
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (array2[i] === newArray[j]) {
        newArray.splice(j, 1);
      }
    }
  }
  return newArray;
};
module.exports = without;


const price = [2, 3, 5, 8];
without(price, 5);
assertArraysEqual(price, [2, 3, 5, 8]);